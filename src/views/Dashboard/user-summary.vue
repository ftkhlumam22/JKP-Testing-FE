<template>
    <layouts>
        <template #content>
            <div class="bg-gray-200 h-auto">
                <div class="container px-4 py-10 mx-auto max-w-7xl">
                    <div class="flex items-start justify-between">
                        <div>
                            <h1 class="text-xl text-gray-800 font-medium mb-1">Ringkasan Pengguna Baru</h1>
                            <h4 class="text-sm text-gray-500">Periode {{ stringDate(start_date) + ' - ' + stringDate(end_date) }}</h4>
                        </div>
                        <div class="flex items-center">
                            <zdropdown :text="filterDate">
                                <template v-slot:item>
                                    <div class="py-6 px-6">
                                        <h4 class="text-sm font-medium mr-2 mb-1">Rentang Tanggal:</h4>
                                        <zselect class="mb-5" v-model="filterDate" :data="['Hari Ini', 'Bulan Ini', 'Tahun Ini', '7 Hari Terakhir', '30 Hari Terakhir']" placeholder="Pilih Periode" @input="selectRangeDate">
                                        </zselect>
                                        <h1 class="font-medium mb-5 text-base">atau</h1>
                                        <div class="flex items-center space-x-2">
                                            <div class="w-1/2">
                                                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Mulai:</h4>
                                                <input @input="refreshData" v-model="start_date" class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5" type="date">
                                            </div>
                                            <div class="w-1/2">
                                                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Akhir:</h4>
                                                <input @input="refreshData" v-model="end_date" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5" type="date">
                                            </div>
                                        </div>
                                        <!-- <div class="flex items-center">
                                            <button class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md shadow">Terapkan</button>
                                        </div> -->
                                    </div>
                                </template>
                            </zdropdown>
                        </div>
                    </div>
                    <div class="flex item-center space-x-4 mt-10">
                        <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                            <h4 class="text-base font-medium mb-2">Total Agen</h4>
                            <h1 class="text-xl font-semibold text-blue-800">{{ total_agen }}</h1>
                        </div>
                        <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                            <h4 class="text-base font-medium mb-2">Total Member</h4>
                            <h1 class="text-xl font-semibold text-blue-800">{{ total_member }}</h1>
                        </div>
                        <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                            <h4 class="text-base font-medium mb-2">Total Akun Pengguna</h4>
                            <h1 class="text-xl font-semibold text-blue-800">{{ total_user }}</h1>
                        </div>
                    </div>
                    <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
                        <h1 class="text-base text-gray-800 font-semibold mb-5">Statistik Agen Baru</h1>
                        <line-chart v-if="agen_loaded" :chartdata="agen_statistics" :options="options"/>
                        <div id="chart-bar" class="flex-auto"></div>
                    </div>
                    <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
                        <h1 class="text-base text-gray-800 font-semibold mb-5">Statistik Member Baru</h1>
                        <line-chart v-if="member_loaded" :chartdata="member_statistics" :options="options"/>
                        <div id="chart-bar" class="flex-auto"></div>
                    </div>
                </div>
                <zloading v-show="loading"></zloading>
            </div>
        </template>
    </layouts>
</template>

<script>
import layouts from '@/components/layouts';
import zdropdown from '@/components/zdropdown';
import zselect from '@/components/zselect';
import zloading from '@/components/zloading';
import axios from 'axios';
import { api_url } from '@/config/api';
import LineChart from '@/components/zlinechart';

export default {
    components: { layouts, zdropdown, zselect, LineChart, zloading },
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            /* Data */
            total_agen: 0,
            total_member: 0,
            total_user: 0,
            /* Filter */
            filterDate: 'Bulan Ini',
            start_date: '',
            end_date: '',
            /* Chart Data */
            agen_statistics: null,
            member_statistics: null,
            agen_loaded: false,
            member_loaded: false,
            options: {
                responsive: true,
                maintainAspectRatio: false
            },
            loading: true
        }
    },
    created() {
        this.selectRangeDate();
    },
    mounted() {
        this.getDataTotalAgen();
        this.getDataTotalMember();
        this.getDataTotalUser();
        this.getDataTotalAgenStatistics();
        this.getDataTotalMemberStatistics();
    },
    methods: {
        /*
         * Get Data Total Agen
         */
        async getDataTotalAgen() {
            let query_params = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/user/get-agen`, { params: query_params, headers: this.headers });
                console.log(response);
                this.total_agen = response.data.data.length === 0 ? 0 : response.data.data[0].count;
                
                this.loading = false;
            }catch (error) {
                console.log(error);
                if(error.message.includes('404') || error.message.includes('500')){
                    // Destroy Data Auth in LocalStorage
                    window.localStorage.removeItem('token-auth-jaskipin');
                    window.localStorage.removeItem('data-profile-jaskipin');
                    // Redirect to Login Page
                    this.$router.push('/');
                }
            }
        },
        /*
         * Get Data Total Member
         */
        async getDataTotalMember() {
            let query_params = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/user/get-member`, { params: query_params, headers: this.headers });
                console.log(response);
                this.total_member = response.data.data.length === 0 ? 0 : response.data.data[0].count;
            }catch (error) {
                console.log(error);
                if(error.message.includes('404') || error.message.includes('500')){
                    // Destroy Data Auth in LocalStorage
                    window.localStorage.removeItem('token-auth-jaskipin');
                    window.localStorage.removeItem('data-profile-jaskipin');
                    // Redirect to Login Page
                    this.$router.push('/');
                }
            }
        },
        /*
         * Get Data Total User
         */
        async getDataTotalUser() {
            let query_params = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/user/get-user`, { params: query_params, headers: this.headers });
                console.log(response);
                this.total_user = response.data.data.length === 0 ? 0 : response.data.data[0].count;
            }catch (error) {
                console.log(error);
                if(error.message.includes('404') || error.message.includes('500')){
                    // Destroy Data Auth in LocalStorage
                    window.localStorage.removeItem('token-auth-jaskipin');
                    window.localStorage.removeItem('data-profile-jaskipin');
                    // Redirect to Login Page
                    this.$router.push('/');
                }
            }
        },
        /*
         * Get Data Total Agen Statistics
         */
        async getDataTotalAgenStatistics() {
            this.agen_loaded = false; // Jangan dirender sebelum datanya ada

            let query_params = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/user/get-agen-statistics`, { params: query_params, headers: this.headers });
                console.log(response);

                this.agen_statistics = {
                    labels: response.data.data.map(item => item.date),
                    datasets: [
                        {
                            label: 'Total Agen',
                            borderColor: 'rgba(50, 115, 220, 0.5)',
                            backgroundColor: 'rgba(50, 115, 220, 0.1)',
                            data: response.data.data.map(item => item.order_count)
                        },
                        // {
                        //     label: 'Total Berat',
                        //     borderColor: 'rgba(255, 56, 96, 0.5)',
                        //     backgroundColor: 'rgba(255, 56, 96, 0.1)',
                        //     data: [43, 123, 231, 434, 231, 432, 545, 312, 653, 312, 432, 312]
                        // }
                    ]
                }

                this.agen_loaded = true; // Baru render jika data ada
            }catch (error) {
                console.log(error);
                if(error.message.includes('404') || error.message.includes('500')){
                    // Destroy Data Auth in LocalStorage
                    window.localStorage.removeItem('token-auth-jaskipin');
                    window.localStorage.removeItem('data-profile-jaskipin');
                    // Redirect to Login Page
                    this.$router.push('/');
                }
            }
        },
        /*
         * Get Data Total Member Statistics
         */
        async getDataTotalMemberStatistics() {
            this.member_loaded = false; // Jangan dirender sebelum datanya ada

            let query_params = {
                start_date: this.start_date,
                end_date: this.end_date,
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/user/get-member-statistics`, { params: query_params, headers: this.headers });
                console.log(response);

                this.member_statistics = {
                    labels: response.data.data.map(item => item.date),
                    datasets: [
                        {
                            label: 'Total Member',
                            borderColor: 'rgba(255, 56, 96, 0.5)',
                            backgroundColor: 'rgba(255, 56, 96, 0.1)',
                            data: response.data.data.map(item => item.order_count)
                        },
                        // {
                        //     label: 'Total Berat',
                        //     borderColor: 'rgba(255, 56, 96, 0.5)',
                        //     backgroundColor: 'rgba(255, 56, 96, 0.1)',
                        //     data: [43, 123, 231, 434, 231, 432, 545, 312, 653, 312, 432, 312]
                        // }
                    ]
                }

                this.member_loaded = true; // Baru render jika data ada
            }catch (error) {
                console.log(error);
                if(error.message.includes('404') || error.message.includes('500')){
                    // Destroy Data Auth in LocalStorage
                    window.localStorage.removeItem('token-auth-jaskipin');
                    window.localStorage.removeItem('data-profile-jaskipin');
                    // Redirect to Login Page
                    this.$router.push('/');
                }
            }
        },
        /* Helpers */
        refreshData() {
            this.getDataTotalAgen();
            this.getDataTotalMember();
            this.getDataTotalUser();
            this.getDataTotalAgenStatistics();
            this.getDataTotalMemberStatistics();
        },
        selectRangeDate() {
            let date = new Date();
            let firstDay;
            let lastDay;

            switch (this.filterDate) {
                case 'Hari Ini':
                    firstDay = date;
                    lastDay = date;
                    break;

                case 'Bulan Ini':
                    firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                    lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                    break;
                
                case 'Tahun Ini':
                    firstDay = new Date(date.getFullYear(), 0, 1);
                    lastDay = new Date(date.getFullYear(), 11, 31);
                    break;

                case '7 Hari Terakhir':
                    firstDay = new Date(date.setDate(date.getDate() - 7));
                    lastDay = new Date();
                    break;
                
                case '30 Hari Terakhir':
                    firstDay = new Date(date.setDate(date.getDate() - 30));
                    lastDay = new Date();
                    break;
            
                default:
                    firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                    lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                    break;
            }

            this.start_date = this.formatDate(firstDay);
            this.end_date = this.formatDate(lastDay);

            /* Refresh Data */
            this.refreshData();
        },
        formatDate(date) {
            var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('-');
        },
        stringDate(value) {
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let date = new Date(value).toLocaleString('id-ID', options);
            return date;
        },
        formatPrice(number) {
            var rupiah = '';		
            var angkarev = number.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return rupiah.split('',rupiah.length-1).reverse().join('');
        },
    }
}
</script>

<style scoped>

</style>