<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-center justify-between mb-6">
            <div class="lg:w-1/2 w-full">
              <input
                v-model="search"
                @input="tableInputSearchHandler($event)"
                type="text"
                class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
                placeholder="Pencarian.."
              />
            </div>
            <zdropdown :text="filterDate">
              <template v-slot:item>
                <div class="py-6 px-6">
                  <h4 class="text-sm font-medium mr-2 mb-1">
                    Rentang Tanggal:
                  </h4>
                  <zselect
                    class="mb-5"
                    v-model="filterDate"
                    :data="[
                      'Hari Ini',
                      'Bulan Ini',
                      'Tahun Ini',
                      '7 Hari Terakhir',
                      '30 Hari Terakhir',
                    ]"
                    placeholder="Pilih Periode"
                    @input="selectRangeDate"
                  >
                  </zselect>
                  <h1 class="font-medium mb-5 text-base">atau</h1>
                  <div class="flex items-center space-x-2">
                    <div class="w-1/2">
                      <h4 class="text-sm font-medium mr-2 mb-1">
                        Tanggal Mulai:
                      </h4>
                      <input
                        @input="refreshData"
                        v-model="start_date"
                        class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                        type="date"
                      />
                    </div>
                    <div class="w-1/2">
                      <h4 class="text-sm font-medium mr-2 mb-1">
                        Tanggal Akhir:
                      </h4>
                      <input
                        @input="refreshData"
                        v-model="end_date"
                        class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </template>
            </zdropdown>
          </div>
          <!-- <datatable
                :data="data.data"
                :columns="columns"
                :meta="data.meta"
                :PageNavHandler="pageNavHandler"
                :TableInputSearchHandler="tableInputSearchHandler"
                @addButton="formDialog = !formDialog; dataSelected = []; emptyFormData()"
            > -->
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
            :sortData="true"
            @sorting="sortingApply"
          >
            <!-- Custom Field -->
            <template slot="pickup_date" slot-scope="props">
              {{ formatDate(props.item.pickup_date) }}
            </template>
            <template slot="status_pickup" slot-scope="props">
              {{
                props.item.status_pickup ? "Sudah Dipickup" : "Belum Dipickup"
              }}
            </template>
            <template slot="destination" slot-scope="props">
              {{ props.item.destination ? props.item.destination : "-" }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="detailBookingInternational(props.item)"
                  class="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
                >
                  <svg
                    class="w-5 h-5 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h4 class="font-semibold">Lihat Detail</h4>
                </button>
                <button
                  v-if="props.item.status_pickup == false"
                  @click="pickupBooking(props.item.id)"
                  class="bg-green-600 hover:bg-green-700 border border-green-700 hover:border-green-600 focus:border-green-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center mr-2"
                >
                  <svg
                    class="w-5 h-5 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      d="M2.513,12.833l9.022,5.04C11.687,17.958,11.854,18,12.022,18s0.335-0.042,0.486-0.126l8.978-5 C21.804,12.697,22,12.362,22,11.999s-0.197-0.698-0.516-0.874l-9.022-5c-0.301-0.167-0.667-0.167-0.968-0.001l-8.978,4.96 C2.198,11.26,2.001,11.594,2,11.958S2.195,12.656,2.513,12.833z"
                    ></path>
                    <path
                      d="M3.485 15.126l-.971 1.748 9 5C11.665 21.958 11.833 22 12 22s.335-.042.485-.126l9-5-.971-1.748L12 19.856 3.485 15.126zM20 8L20 6 22 6 22 4 20 4 20 2 18 2 18 4 16 4 16 6 18 6 18 8z"
                    ></path>
                  </svg>
                  <h4 class="font-semibold">Pickup Booking</h4>
                </button>
                <!-- <button @click="dataSelected = props.item; deleteConfirmModal = true" class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center">
                            <svg class="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform:;-ms-filter:"><path d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"></path></svg>
                            <h4 class="font-semibold">Hapus</h4>
                        </button> -->
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
        <!-- Form Dialog -->
        <!-- <div v-show="formDialog" class="fixed inset-0 bg-gray-600 bg-opacity-80 transition-opacity" aria-hidden="true"></div>
        <transition
            enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <addForm v-show="formDialog" @close="formDialog = false" :title="dataSelected.length === 0 ? 'Tambah Booking Baru' : 'Ubah Data Booking'" @submit="handleSubmit">
                <div class="space-y-4">
                    <div>
                        <label id="listbox-label" class="block text-sm leading-5 font-semibold text-gray-800 mb-1">
                            Nama Kota/Lokasi
                        </label>
                        <input v-model="city_name" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Jakarta" type="text">
                    </div>
                    <div>
                        <label id="listbox-label" class="block text-sm leading-5 font-semibold text-gray-800 mb-1">
                            Alamat
                        </label>
                        <textarea v-model="address" rows="5" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2">
                        </textarea>
                    </div>
                    <div>
                        <label id="listbox-label" class="block text-sm leading-5 font-semibold text-gray-800 mb-1">
                            Nomor Telpon
                        </label>
                        <input v-model="phone" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: 0813-4543-5346" type="text">
                    </div>
                </div>
            </addForm>
        </transition> -->
        <!-- Notification -->
        <!-- <transition
            enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <notification v-show="successNotification" :message="dataSelected.length === 0 ? 'Berhasil! Booking baru sudah ditambahkan!' : 'Berhasil! Data Booking sudah diubah!'" @close="successNotification = false"></notification>
        </transition> -->
        <!-- Delete Confirm Modal -->
        <!-- <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-show="deleteConfirmModal" class="fixed inset-0 transition-opacity" aria-hidden="true">
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
            <modal 
                v-show="deleteConfirmModal"
                title="Hapus Data Booking"
                message="Anda yakin ingin menghapus data booking ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
                @close="deleteConfirmModal = false; dataSelected = []"
                @confirm="deleteBookingInternational()"
            ></modal>
        </transition> -->
        <!-- Detail Data Modal -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="detailModal"
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
          >
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
            title="Detail Booking"
            desc="Informasi booking pengiriman ke luar negeri"
            @close="
              detailModal = false;
              dataSelected = [];
            "
          >
            <dl>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Booking
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.id ? dataSelected.id : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Lengkap
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.name ? dataSelected.name : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Handphone
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.phone ? dataSelected.phone : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.address ? dataSelected.address : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Tanggal Pickup
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.pickup_date
                      ? formatDate(dataSelected.pickup_date)
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Berat
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.weight ? dataSelected.weight : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Isi Paket
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.content ? dataSelected.content : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Volume
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.long +
                      " x " +
                      dataSelected.wide +
                      " x " +
                      dataSelected.height
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Jenis Paket
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.category ? dataSelected.category : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Tujuan Negara
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.destination ? dataSelected.destination : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Kurir
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.courier ? dataSelected.courier : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Estimasi
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.etd ? dataSelected.etd : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Harga
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.price ? dataSelected.price : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Wilayah Penjemputan
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.area ? dataSelected.area : "-" }}
                </dd>
              </div>
            </dl>
          </detailDataModal>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import datatable from "@/components/datatables/advance_table";
// import addForm from '@/components/datatables/add_form';
// import notification from '@/components/datatables/notification';
// import modal from '@/components/datatables/modal';
import zselect from "@/components/zselect";
import zdropdown from "@/components/zdropdown";
import detailDataModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    datatable,
    // addForm,
    // notification,
    // modal
    zselect,
    zdropdown,
    detailDataModal,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: [],
      columns: [
        {
          field: "name",
          label: "Nama Pelanggan",
          sort: true,
        },
        {
          field: "phone",
          label: "No Handphone",
        },
        {
          field: "pickup_date",
          label: "Tanggal Pickup",
          sort: true,
        },
        {
          field: "weight",
          label: "Berat Barang",
        },
        {
          field: "status_pickup",
          label: "Status Pickup",
        },
        {
          field: "destination",
          label: "Tujuan Negara",
          sort: true,
        },
        {
          field: "action",
          label: "Aksi",
        },
      ],
      /* Pagination */
      page: 1,
      limit: 10,
      /* Filter */
      search: "",
      sort_by: "",
      sort_order: -1,
      filterDate: "Bulan Ini",
      start_date: "",
      end_date: "",
      /* Toggle Dialog */
      // formDialog: false,
      // successNotification: false,
      // deleteConfirmModal: false,
      detailModal: false,
      loading: true,
      /* Form Value */
      /* Extra Data */
    };
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
        search: this.search,
        sort: JSON.stringify(this.sort_by),
        start_date: this.start_date,
        end_date: this.end_date,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/booking/international/get`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.data = response.data;

        this.loading = false;
      } catch (error) {
        console.log(error);
        if (error.message.includes("404") || error.message.includes("500")) {
          // Destroy Data Auth in LocalStorage
          window.localStorage.removeItem("token-auth-jaskipin");
          window.localStorage.removeItem("data-profile-jaskipin");
          // Redirect to Login Page
          this.$router.push("/");
        }
      }
    },
    /*
     * Pagination Handler Function
     */
    pageNavHandler(type) {
      switch (type) {
        case "previous":
          this.page -= 1;
          this.getListData(this.page, this.limit);
          break;
        case "next":
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

      if (value === "") {
        this.search = ""; // Mengkosongkan kembali state querynya
        this.getListData(this.page, this.limit);
      } else {
        this.search = value;
        this.getListData(1, this.limit); // Ketika Filter Search dilakukan tidak bisa jika diset pagenya diatas 1 kalau hasil recordnya gak lebih dari limit/10 record
      }
    },
    /*
     * Sort Function
     */
    sortingApply(value) {
      if (this.sort_order === -1) {
        this.sort_order = 1;
      } else {
        this.sort_order = -1;
      }

      this.sort_by = { [value]: this.sort_order };
      this.getListData(this.page, this.limit);
    },
    /*
     * Create Method
     */
    // async createBookingInternational() {
    //     let data = {
    //         city_name: this.city_name,
    //         address: this.address,
    //         phone: this.phone,
    //     }

    //     try {
    //         const response = await axios.post(`${api_url}/api/v1/booking/international/create`, data, { headers: this.headers });
    //         console.log(response.data);

    //         /* Set Toggle */
    //         this.formDialog = false;
    //         this.successNotification = true;

    //         /* Set Data Empty */
    //         this.emptyFormData();

    //         /* Refresh Data */
    //         this.getListData(this.page, this.limit);
    //     }catch (error) {
    //         console.log(error);
    //     }
    // },
    /*
     * Get by Id & Update Method
     */
    async detailBookingInternational(item) {
      this.dataSelected = item;
      this.detailModal = true;
      // try {
      //     const response = await axios.get(`${api_url}/api/v1/booking/international/get/${id}`, { headers: this.headers });
      //     console.log(response);

      //     /* Set Data Selected */
      //     this.dataSelected = response.data.data[0];

      //     /* Set Toggle */
      //     // this.formDialog = true;

      //     /* Set Data Form */
      // }catch (error) {
      //     console.log(error);
      // }
    },
    async pickupBooking(id) {
      let data = {
        status_pickup: true,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/booking/international/update/${id}`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
    },
    // async updateBookingInternational() {
    //     let data = {
    //         city_name: this.city_name,
    //         address: this.address,
    //         phone: this.phone,
    //     }

    //     try {
    //         const response = await axios.put(`${api_url}/api/v1/booking/international/update/${this.dataSelected.id}`, data, { headers: this.headers });
    //         console.log(response.data);

    //         /* Set Toggle */
    //         this.formDialog = false;
    //         this.successNotification = true;

    //         /* Set Data Empty */
    //         this.emptyFormData();

    //         /* Refresh Data */
    //         this.getListData(this.page, this.limit);
    //     }catch (error) {
    //         console.log(error);
    //     }
    // },
    /*
     * Delete Method
     */
    // async deleteBookingInternational() {
    //     try {
    //         const response = await axios.delete(`${api_url}/api/v1/booking/international/delete/${this.dataSelected.id}`, { headers: this.headers });
    //         console.log(response.data);

    //         /* Refresh Data */
    //         this.getListData(this.page, this.limit);
    //         this.dataSelected = [];

    //         /* Set Toggle */
    //         this.deleteConfirmModal = false;
    //     }catch (error) {
    //         console.log(error);
    //     }
    // },
    /* Helpers */
    selectRangeDate() {
      let date = new Date();
      let firstDay;
      let lastDay;

      switch (this.filterDate) {
        case "Hari Ini":
          firstDay = date;
          lastDay = date;
          break;

        case "Bulan Ini":
          firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
          lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
          break;

        case "Tahun Ini":
          firstDay = new Date(date.getFullYear(), 0, 1);
          lastDay = new Date(date.getFullYear(), 11, 31);
          break;

        case "7 Hari Terakhir":
          firstDay = new Date(date.setDate(date.getDate() - 7));
          lastDay = new Date();
          break;

        case "30 Hari Terakhir":
          firstDay = new Date(date.setDate(date.getDate() - 30));
          lastDay = new Date();
          break;

        default:
          firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
          lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
          break;
      }

      this.start_date = this.convertDate(firstDay);
      this.end_date = this.convertDate(lastDay);

      /* Refresh Data */
      this.refreshData();
    },
    convertDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    formatPrice(number) {
      var rupiah = "";
      var angkarev = number
        .toString()
        .split("")
        .reverse()
        .join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
      return rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("");
    },
    // emptyFormData() {
    // },
    // handleSubmit() {
    //     if(this.dataSelected.length === 0){
    //         this.createBookingInternational();
    //     }else{
    //         this.updateBookingInternational();
    //     }
    // },
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    refreshData() {
      this.getListData(this.page, this.limit);
    },
  },
};
</script>

<style scoped></style>
