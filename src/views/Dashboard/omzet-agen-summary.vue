<template>
    <div class="bg-gray-200 h-auto">
        <navigation></navigation>
        <div class="container px-4 py-10 mx-auto max-w-7xl">
            <div class="flex items-center justify-between mb-6">
                <div class="lg:w-1/2 w-full">
                    <input v-model="search" @input="tableInputSearchHandler($event)" type="text" class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full" placeholder="Pencarian.." />
                </div>
                <zautocomplete class="-mt-1 w-40" v-model="branchSelected" :data="branchOptions" placeholder="Pilih Cabang" @input="refreshData">
                </zautocomplete>
            </div>
            <datatable
                :data="data.data"
                :columns="columns"
                :meta="data.meta"
                :PageNavHandler="pageNavHandler"
                :TableInputSearchHandler="tableInputSearchHandler"
            >
                <!-- Custom Field -->
                <template slot="total_transaction" slot-scope="props">
                    {{ props.item.transaction.length }}
                </template>
                <template slot="total_omzet" slot-scope="props">
                    {{ 'Rp' + formatPrice( props.item.transaction.reduce((total, num) => total + parseInt(num.amount_paid !== null ? num.amount_paid : 0), 0) ) }}
                </template>
                <!-- / End Custom Field -->
            </datatable>
        </div>
        <zloading v-show="loading"></zloading>
    </div>
</template>

<script>
import navigation from '@/components/navigation';
import datatable from '@/components/datatables/advance_table';
import zautocomplete from '@/components/zautocomplete';
import zloading from '@/components/zloading';
import axios from 'axios';
import { api_url } from '@/config/api';

export default {
    components: { 
        navigation, 
        datatable, 
        zautocomplete,
        zloading
    },
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            /* Data List */
            data: null,
            dataSelected: [],
            dataSelectedType: '',
            columns: [{
                field: 'fullname',
                label: 'Nama Agen'
            },{
                field: 'total_transaction',
                label: 'Total Transaksi'
            },{
                field: 'total_omzet',
                label: 'Total Omzet'
            }],
            /* Pagination */
            page: 1,
            limit: 10,
            /* Filter */
            search: '',
            /* Toggle Dialog */
            loading: true,
            /* Form Value */
            /* Extra Data */
            branchSelected: '',
            branchOptions: [],
        }
    },
    computed: {
        profileData() {
            let profile = JSON.parse(window.localStorage.getItem('data-profile-jaskipin'));
            if(profile) {
                return profile;
            }else{
                return null;
            }
        }
    },
    created() {
        /* Initiate Function */
        this.getListData(this.page, this.limit);
        this.getListBranch();
    },
    methods: {
        /*
         * Get Data Method
         */
        async getListData(page, limit) {
            let query_params = {
                page: page,
                limit: limit,
                pagination: true,
                search: this.search,
            }

            if(this.profileData.type_user === 'Master Agen') {
                query_params.master_agen = this.profileData.id;
            }else{
                query_params.branch = this.branchSelected.value
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/report/income/get-omzet-agen-list`, { params: query_params, headers: this.headers });
                console.log(response);

                this.data = response.data;

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
        async getListBranch() {
            let query_params = {
                pagination: false
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/master/branch/admin`, { params: query_params, headers: this.headers });
                console.log(response);
                this.branchOptions = response.data.map(item => {
                    return {
                        label: item.city_name,
                        value: item.id
                    }
                });
            }catch (error) {
                console.log(error);
            }
        },
        /*
         * Pagination Handler Function
         */
        pageNavHandler (type) {
            switch (type) {
                case 'previous':
                    this.page -= 1;
                    this.getListData(this.page, this.limit);
                break;
                case 'next':
                    this.page += 1;
                    this.getListData(this.page, this.limit);
                break;
            }
        },
        /*
         * Search Function
         */
        tableInputSearchHandler(event) {
            const value = event.target.value; // ambil value dari form input search

            if (value === '') {
                this.search = ''; // Mengkosongkan kembali state querynya
                this.getListData(this.page, this.limit);
            } else {
                this.search = value;
                this.getListData(1, this.limit); // Ketika Filter Search dilakukan tidak bisa jika diset pagenya diatas 1 kalau hasil recordnya gak lebih dari limit/10 record
            }
        },
        /* Helpers */
        formatPrice(number) {
            var rupiah = '';		
            var angkarev = number.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return rupiah.split('',rupiah.length-1).reverse().join('');
        },
        formatDate(value) {
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let date = new Date(value).toLocaleString('id-ID', options);
            return date;
        },
        refreshData() {
            this.getListData(this.page, this.limit)
        }
    }
}
</script>