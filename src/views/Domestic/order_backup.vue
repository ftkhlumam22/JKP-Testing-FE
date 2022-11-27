<template>
    <div class="bg-gray-100 h-auto">
        <navigation></navigation>
        <div class="container px-4 py-10 mx-auto max-w-7xl">
            <board 
                :data="data.data"
                :meta="data.meta"
                :PageNavHandler="pageNavHandler"
                :TableInputSearchHandler="tableInputSearchHandler"
                @show="detailOrder"
            >
            </board>
        </div>
        <zloading v-show="loading"></zloading>
        <!-- Detail Data Modal -->
        <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-show="detailModal" class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
        </transition>
        <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="opacity-100 translate-y-0 sm:scale-100"
            leave-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
            <detailDataModal 
                v-show="detailModal"
                title="Detail Transaksi Domestik"
                desc="Informasi transaksi pengiriman domestik"
                @close="detailModal = false; dataSelected = []"
            >
                <dl>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        No Order/Shipment Number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                        {{ dataSelected.shipment_number ? dataSelected.shipment_number : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Status Order
                        </dt>
                        <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                            <template v-if="dataSelected.status_order">
                                <span v-if="dataSelected.status_order === 'Hold'" class="bg-blue-400 px-2 py-1 text-white rounded font-semibold">{{ dataSelected.status_order }}</span>
                                <span v-if="dataSelected.status_order === 'Cancel'" class="bg-red-400 px-2 py-1 text-white rounded font-semibold">{{ dataSelected.status_order }}</span>
                                <span v-if="dataSelected.status_order === 'Pending'" class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold">{{ dataSelected.status_order }}</span>
                                <span v-if="dataSelected.status_order === 'Manifest'" class="bg-green-400 px-2 py-1 text-white rounded font-semibold">{{ dataSelected.status_order }}</span>
                            </template>
                            <template v-else>
                                -
                            </template>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Posisi Order
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span v-if="dataSelected.position_order">
                                {{ dataSelected.position_order === 'Agen' ? 'Agen/Kurir' : dataSelected.position_order }}
                            </span>
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Tanggal Kirim
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.shipment_date ? formatDate(dataSelected.shipment_date) : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Nama Pengirim
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.sender_name ? dataSelected.sender_name : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Alamat Pengirim
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.sender_address ? dataSelected.sender_address : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        No Handphone Pengirim
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.sender_phone ? dataSelected.sender_phone : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Nama Penerima
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.recipient_name ? dataSelected.recipient_name : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Provinsi Tujuan
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.province ? dataSelected.province : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Kota Tujuan
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.city ? dataSelected.city : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Alamat Penerima
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.recipient_address ? dataSelected.recipient_address : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Kode POS
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.recipient_postal_code ? dataSelected.recipient_postal_code : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        No Handphone Penerima
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.recipient_phone ? dataSelected.recipient_phone : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Mitra Ekspedisi
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.courier ? dataSelected.courier : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Layanan Cargo (Optional)
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.cargo_service ? dataSelected.cargo_service : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500 self-center">
                        AWB No/No Resi
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2 flex items-center">
                        {{ dataSelected.awb_no ? dataSelected.awb_no : '(Belum Diinput)' }}
                        <button v-if="dataSelected.awb_no" @click="$router.push('/domestic/print-resi-domestik/'+dataSelected.id)" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 text-xs rounded-md focus:outline-none ml-3 flex items-center">
                            <svg class="w-4 w-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                            </svg>
                            Cetak Resi
                        </button>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Berat
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.weight ? dataSelected.weight+'kg' : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Jenis Layanan
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.service_type ? dataSelected.service_type : '-' }}
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Ongkos Kirim
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.shipment_fee ? 'Rp'+formatPrice(dataSelected.shipment_fee) : '-' }}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                        Agen
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ dataSelected.agen_name ? dataSelected.agen_name : '-' }}
                        </dd>
                    </div>
                </dl>
            </detailDataModal>
        </transition>
    </div>
</template>

<script>
import navigation from '@/components/navigation';
import board from '@/components/domestic/board';
import detailDataModal from '@/components/datatables/detail_modal';
import zloading from '@/components/zloading';
import axios from 'axios';
import { api_url } from '@/config/api';

export default {
    components: { 
        navigation, 
        board,
        detailDataModal,
        zloading
    },
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            /* Data List */
            data: [],
            /* Pagination */
            page: 1,
            limit: 10,
            /* Filter */
            search: '',
            /* Toggle Dialog */
            detailModal: false,
            loading: true,
            /* Extra */
            dataSelected: []
        }
    },
    created() {
        /* Initiate Function */
        this.getListData(this.page, this.limit);
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
                search: this.search
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/transaction/domestic-order`, { params: query_params, headers: this.headers });
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
        /*
         * Get Detail Order Method
         */
        async detailOrder(value) {
            /* Empty Data Selected */
            this.dataSelected = [];

            /* Set Data Selected & Show Detail Modal */
            this.dataSelected = value;
            this.detailModal = true;
        },
        /* Helpers */
        formatPrice(number) {
            var rupiah = '';		
            var angkarev = number.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return rupiah.split('',rupiah.length-1).reverse().join('');
        },
        formatDate(value) {
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            let date = new Date(value).toLocaleString('id-ID', options);
            return date;
        },
    }
}
</script>

<style scoped>
</style>