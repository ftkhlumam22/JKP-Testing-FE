<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-full">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-start justify-between mb-6">
            <div>
              <div class="flex items-center">
                <button
                  @click="startScanBarcode"
                  class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3.5 h-3.5 mr-2 fill-current"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      d="M3 4v5h2V5h4V3H4C3.447 3 3 3.447 3 4zM21 9V4c0-.553-.447-1-1-1h-5v2h4v4H21zM19 19h-4v2h5c.553 0 1-.447 1-1v-5h-2V19zM9 21v-2H5v-4H3v5c0 .553.447 1 1 1H9zM2 11H22V13H2z"
                    ></path>
                  </svg>
                  <h4 class="font-semibold -mt-0.5">Scan Barcode</h4>
                </button>
              </div>
              <h4 class="font-semibold mt-4">
                Jumlah Item: {{ data.data == undefined ? 0 : data.data.length }}
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-end mb-2">
                <form class="relative mr-2">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                  <input
                    v-model="search_no_order"
                    @input="refreshData"
                    class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
                    type="text"
                    aria-label="Pencarian.."
                    placeholder="Cari No Order.."
                  />
                </form>
                <form class="relative mr-2">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                  <input
                    v-model="search_awb_no"
                    @input="refreshData"
                    class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
                    type="text"
                    aria-label="Pencarian.."
                    placeholder="Cari Resi.."
                  />
                </form>
                <form class="relative mr-2">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                  <input
                    v-model="search_recipient_name"
                    @input="refreshData"
                    class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
                    type="text"
                    aria-label="Pencarian.."
                    placeholder="Cari Nama Penerima.."
                  />
                </form>
              </div>
              <div class="lg:flex lg:items-center lg:mb-0 mb-2 justify-end">
                <zselect
                  v-model="limit"
                  :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                  placeholder="Jumlah"
                  @input="refreshData"
                  class="-mt-1 mr-2"
                  style="width: 80px"
                >
                </zselect>
                <zdropdown
                  :text="filterDate !== '' ? filterDate : 'Filter Transaksi'"
                  class="lg:mr-2"
                >
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
                      <h1 class="font-medium mb-5">atau</h1>
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
                      <h4 class="text-sm font-medium mr-2 mb-1 mt-2">Mitra:</h4>
                      <!-- <zselect v-model="filter_courier" :data="courierOptions" placeholder="Pilih Mitra Ekspedisi" @input="filterCourier">
                                        </zselect> -->
                      <zselectmultiple
                        v-model="filter_courier"
                        :data="courierOptions"
                        placeholder="Pilih Mitra Ekspedisi"
                        @input="refreshData"
                        ref="filterCourierComponent"
                      >
                      </zselectmultiple>
                      <h4 class="text-sm font-medium mr-2 mb-1 mt-2">
                        Negara Tujuan:
                      </h4>
                      <!-- <zautocomplete v-model="filter_destination" :data="countryDestinationOptions" placeholder="Pilih Negara Tujuan" @input="filterDestination">
                                        </zautocomplete> -->
                      <zselectmultiple
                        v-model="filter_destination"
                        :data="countryDestinationOptions"
                        placeholder="Pilih Negara Tujuan"
                        @input="refreshData"
                        ref="filterDestinationComponent"
                      >
                      </zselectmultiple>
                      <h4 class="text-sm font-medium mr-2 mb-1 mt-2">
                        Status:
                      </h4>
                      <zselect
                        v-model="filter_status_order"
                        :data="[
                          'Belum Ada Status',
                          'Hold',
                          'Cancel',
                          'Manifest',
                          'Pending',
                        ]"
                        placeholder="Pilih Status Order"
                        @input="refreshData"
                      >
                      </zselect>
                      <div>
                        <h4 class="text-sm font-medium mt-2 mb-1">
                          Tanggal Manifest:
                        </h4>
                        <input
                          @input="refreshData"
                          v-model="filter_manifest_date"
                          class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                          type="date"
                        />
                      </div>
                      <h4 class="text-sm font-medium mt-2 mb-1">Agen:</h4>
                      <zautocompleteinput
                        v-model="filter_agen"
                        :data="agenOptions"
                        placeholder="Pilih Agen"
                        @input="refreshData"
                      >
                      </zautocompleteinput>
                      <h4 class="text-sm font-medium mt-2 mb-1">Admin:</h4>
                      <zautocompleteinput
                        v-model="filter_admin"
                        :data="adminOptions"
                        placeholder="Pilih Admin"
                        @input="refreshData"
                      >
                      </zautocompleteinput>
                      <h4 class="text-sm font-medium mt-2 mb-1">
                        Tipe Pembayaran:
                      </h4>
                      <zselect
                        v-model="filter_payment_method"
                        :data="['Cash', 'Transfer', 'Credit']"
                        placeholder="Pilih Tipe Pembayaran"
                        @input="refreshData"
                      >
                      </zselect>
                      <h4 class="text-sm font-medium mt-2 mb-1">Cabang:</h4>
                      <zselectmultiple
                        v-model="filter_branch"
                        :data="branchOptions"
                        placeholder="Pilih Cabang"
                        @input="refreshData"
                        ref="filterBranchComponent"
                      >
                      </zselectmultiple>
                      <div class="flex items-center">
                        <button
                          @click="resetData"
                          class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-semibold text-white rounded-md shadow"
                        >
                          Reset Filter
                        </button>
                      </div>
                    </div>
                  </template>
                </zdropdown>
              </div>
              <div class="flex items-center">
                <h4
                  v-if="data && viewOptions == 'List'"
                  class="mr-4 text-sm mt-3"
                >
                  Total Ongkir:
                  <b>{{
                    "Rp" +
                      formatPrice(
                        data.reduce(
                          (total, num) =>
                            num.shipment_fee
                              ? total + parseInt(num.shipment_fee)
                              : total + 0,
                          0
                        )
                      )
                  }}</b>
                </h4>
                <h4 v-if="data && viewOptions == 'List'" class="text-sm mt-3">
                  Total Bayar ke Jaskipin:
                  <b>{{
                    "Rp" +
                      formatPrice(
                        data.reduce(
                          (total, num) =>
                            num.amount_paid
                              ? total + parseInt(num.amount_paid)
                              : total + 0,
                          0
                        )
                      )
                  }}</b>
                </h4>
              </div>
            </div>
          </div>
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="status_order" slot-scope="props">
              <span
                v-if="props.item.status_order === 'Hold'"
                class="bg-blue-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                >{{ props.item.status_order }}</span
              >
              <span
                v-else-if="props.item.status_order === 'Cancel'"
                class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                >{{ props.item.status_order }}</span
              >
              <span
                v-else-if="props.item.status_order === 'Pending'"
                class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                >{{ props.item.status_order }}</span
              >
              <span
                v-else-if="props.item.status_order === 'Manifest'"
                class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                >{{ props.item.status_order }}</span
              >
            </template>
            <template slot="agen" slot-scope="props">
              {{
                props.item.agen
                  ? props.item.agen.fullname
                  : props.item.agen_general
              }}
            </template>
            <template slot="admin" slot-scope="props">
              {{ props.item.input_by ? props.item.input_by.fullname : "-" }}
            </template>
            <template slot="branch" slot-scope="props">
              {{ props.item.branch ? props.item.branch.city_name : "-" }}
            </template>
            <template slot="manifest_date" slot-scope="props">
              {{ formatDate(props.item.manifest_date) }}
            </template>
            <template slot="createdAt" slot-scope="props">
              {{ formatDate(props.item.createdAt) }}
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
        <!-- Scan Barcode -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="opacity-100 translate-y-0 sm:scale-100"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <detailModal
            v-show="scanBarcodeDialog"
            title="Scan Barcode"
            @close="scanBarcodeDialog = false"
          >
            <div class="p-6">
              <center>
                <input
                  v-model="code_barcode"
                  class="w-full max-w-sm rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  ref="barcode_scanner"
                  type="text"
                  @input="onDetectBarcode"
                />
              </center>
            </div>
          </detailModal>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import datatable from "@/components/datatables/advance_table";
import zdropdown from "@/components/zdropdown";
import zselect from "@/components/zselect";
import zselectmultiple from "@/components/zselectmultiple";
import zautocompleteinput from "@/components/zautocompleteinput";
import zloading from "@/components/zloading";
import detailModal from "@/components/datatables/detail_modal";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    datatable,
    zdropdown,
    zselect,
    zselectmultiple,
    zautocompleteinput,
    zloading,
    detailModal,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      columns: [
        {
          field: "shipment_number",
          label: "No Order",
        },
        {
          field: "awb_no",
          label: "No Resi",
        },
        {
          field: "status_order",
          label: "Status Order",
        },
        {
          field: "recipient_name",
          label: "Nama Penerima",
        },
        {
          field: "sender_name",
          label: "Nama Pengirim",
        },
        {
          field: "courier",
          label: "Mitra Ekspedisi",
        },
        {
          field: "recipient_destination",
          label: "Negara Tujuan",
        },
        {
          field: "weight",
          label: "Berat",
        },
        {
          field: "agen",
          label: "Agen",
        },
        {
          field: "admin",
          label: "Admin",
        },
        {
          field: "branch",
          label: "Cabang",
        },
        {
          field: "manifest_date",
          label: "Tanggal Manifest",
        },
        {
          field: "createdAt",
          label: "Tanggal Order",
        },
      ],
      /* Pagination */
      page: 1,
      limit: 100,
      /* Filter */
      viewOptions: "Card",
      search: "",
      filterDate: "",
      start_date: "",
      end_date: "",
      filter_courier: "",
      filter_destination: "",
      filter_status_order: "",
      filter_manifest_date: "",
      filter_agen: "",
      filter_admin: "",
      filter_payment_method: "",
      filter_branch: "",
      search_no_order: "",
      search_awb_no: "",
      search_recipient_name: "",
      /* Toggle Dialog */
      loading: true,
      scanBarcodeDialog: false,
      /* Form Value */
      /* Extra Data */
      code_barcode: "",
      courierOptions: [],
      countryDestinationOptions: [],
      agenOptions: [],
      adminOptions: [],
      branchOptions: [],
    };
  },
  computed: {
    profileData() {
      let profile = JSON.parse(
        window.localStorage.getItem("data-profile-jaskipin")
      );
      if (profile) {
        return profile;
      } else {
        return null;
      }
    },
  },
  created() {
    /* Initiate Function */
    // this.filterDate = 'Hari Ini';
    // this.selectRangeDate();
    this.getListData(this.page, this.limit);
    this.getListCourier();
    this.getListAgen();
    this.getCountryDestination();
    this.getListAdmin();
    this.getListBranch();
  },
  methods: {
    /*
     * Get Data Method
     */
    async getListData(page, limit) {
      if (this.filter_status_order === "Belum Ada Status") {
        this.filter_status_order = "";
      }

      let query_params = {
        page: page,
        limit: limit,
        pagination: true,
        search: this.search,
        start_date: this.start_date,
        end_date: this.end_date,
        courier: this.filter_courier,
        destination: this.filter_destination,
        status_order: this.filter_status_order,
        manifest_date: this.filter_manifest_date,
        agen: this.filter_agen,
        admin: this.filter_admin.value,
        payment_method: this.filter_payment_method,
        search_no_order: this.search_no_order.toUpperCase(),
        search_awb_no: this.search_awb_no.toUpperCase(),
        search_recipient_name: this.search_recipient_name,
        filter_shipment_number: true,
      };

      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });
      if (this.profileData.type_user == "Supervisor") {
        query_params.branch_mutiple = getProfile.data.type_branch.map(
          (item) => {
            // console.log("test", item.value);
            return item.value;
          }
        );
      } else {
        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Admin Pusat" &&
          this.profileData.type_user !== "Gudang Pusat" &&
          this.profileData.type_user !== "CS Pusat" &&
          this.profileData.type_user !== "Finance" &&
          this.profileData.type_user !== "Akunting"
        ) {
          query_params.branch = this.profileData.branch._id;
        }

        let branch_mutiple = [];
        if (this.filter_branch.length > 0) {
          this.filter_branch.map((item) => {
            branch_mutiple.push(item.value);
          });
        }
        query_params.branch_mutiple = branch_mutiple;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-filter`,
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
     * Get List Courier Method
     */
    async getListCourier() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/courier/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        let courierData = [];
        response.data.map((item) => {
          if (item.courier_type == "International") {
            courierData.push(item.courier_name);
          }
        });
        this.courierOptions = courierData;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Agen Method
     */
    async getListAgen() {
      let query_params = {
        pagination: false,
      };

      try {
        const responseListAgen = await axios.get(
          `${api_url}/api/v1/users/user`,
          { params: query_params, headers: this.headers }
        );
        console.log(responseListAgen);
        responseListAgen.data.map((item) => {
          if (item.type_user.includes("Agen")) {
            this.agenOptions.push({
              label: item.fullname,
              value: item.id,
            });
          }
        });

        // let listAgenGeneral = [];
        const responseListAgenGeneral = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-filter`,
          { params: query_params, headers: this.headers }
        );
        console.log(responseListAgenGeneral);
        responseListAgenGeneral.data.map((item) => {
          let checker = this.agenOptions.includes(item.agen_general);
          if (item.agen_general && checker == false) {
            this.agenOptions.push(item.agen_general);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Negara Method
     */
    async getCountryDestination() {
      await axios
        .get(api_url + "/api/v1/shipping-rates/destination?pagination=false")
        .then((response) => {
          // JSON responses are automatically parsed.
          // console.log(response.data)

          // response.data.map(item => {
          //     this.countryDestinationOptions.push({
          //         label: item.country_name,
          //         value: item.id
          //     });
          // });

          response.data.map((item) => {
            this.countryDestinationOptions.push(item.country_name);
          });

          this.countryDestinationOptions.sort();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*
     * Get List Admin Method
     */
    async getListAdmin() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.adminOptions.push({
            label: item.fullname,
            value: item.id,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getListBranch() {
      let query_params = {
        pagination: false,
      };

      try {
        if (this.profileData.type_user == "Supervisor") {
          const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
            headers: this.headers,
          });
          this.branchOptions = getProfile.data.type_branch.map((item) => {
            return {
              label: item.label,
              value: item.value,
            };
          });
        } else {
          const response = await axios.get(
            `${api_url}/api/v1/master/branch/admin`,
            { params: query_params, headers: this.headers }
          );
          console.log(response);
          this.branchOptions = response.data.map((item) => {
            return {
              label: item.city_name,
              value: item.id,
            };
          });
        }
      } catch (error) {
        console.log(error);
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
    /* Helpers */
    resetData() {
      this.filterDate = "";
      this.start_date = "";
      this.end_date = "";
      this.filter_courier = "";
      this.filter_destination = "";
      this.filter_status_order = "";
      this.filter_manifest_date = "";
      this.filter_agen = "";
      this.filter_admin = "";
      this.filter_payment_method = "";
      this.filter_branch = "";
      this.$refs.filterCourierComponent.resetDataValue();
      this.$refs.filterDestinationComponent.resetDataValue();
      this.$refs.filterBranchComponent.resetDataValue();
      this.refreshData();
    },
    refreshData() {
      this.getListData(this.page, this.limit);
    },
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
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    startScanBarcode() {
      this.scanBarcodeDialog = true;
      this.$refs.barcode_scanner.focus();
    },
    async onDetectBarcode() {
      if (this.code_barcode !== "") {
        let searchCode = this.code_barcode.toUpperCase();
        let shipment_number = null;

        let query_params_shipment_number = {
          field: "shipment_number",
          search: searchCode,
        };
        let checkByShipmentNumber = await axios.get(
          `${api_url}/api/v1/transaction/international-order/advance-search`,
          { params: query_params_shipment_number, headers: this.headers }
        );
        if (checkByShipmentNumber.data.data !== null) {
          shipment_number = checkByShipmentNumber.data.data.shipment_number;
        }

        let query_params_awb_no = { field: "awb_no", search: searchCode };
        let checkByAWBNo = await axios.get(
          `${api_url}/api/v1/transaction/international-order/advance-search`,
          { params: query_params_awb_no, headers: this.headers }
        );
        if (checkByAWBNo.data.data !== null) {
          shipment_number = checkByAWBNo.data.data.shipment_number;
        }

        /* Update Transaction */
        if (shipment_number !== null) {
          try {
            let today = new Date();
            let data = {
              position_order: "Mitra",
              status_order: "Manifest",
              scanned_by: this.profileData.id,
              manifest_date: today,
            };

            let response = await axios.put(
              `${api_url}/api/v1/transaction/international-order/update-by-scan-barcode/${shipment_number}`,
              data,
              { headers: this.headers }
            );
            console.log(response.data);

            this.refreshData();

            if (response.data.status === 1) {
              this.code_barcode = "";
            }
            // setTimeout(() => {
            //     this.code_barcode = '';
            // }, 2000);
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
