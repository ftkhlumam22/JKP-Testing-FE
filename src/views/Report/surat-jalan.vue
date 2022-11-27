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
        <div class="flex items-center">
          <button
            v-if="selectedItem.length > 0"
            @click="openNewTab('/print/surat-jalan/')"
            class="ml-auto bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center mr-2 transition duration-300 ease-in"
          >
            <svg
              class="w-4 h-4 mr-2 fill-current"
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
            <h4 class="font-semibold">Cetak Surat Jalan</h4>
          </button>
          <zselect
            v-model="limit"
            :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
            placeholder="Jumlah"
            @input="refreshData"
            class="-mt-1 mr-2"
            style="width: 80px"
          >
          </zselect>
          <zdropdown text="Filter Kolom" class="mr-2">
            <template v-slot:item>
              <div class="py-2">
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.shipment_number"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Shipment Number</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.sender_name"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Nama Pengirim</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.awb"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Resi</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.courier"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Mitra Ekspedisi</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_name"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Nama Penerima</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_phone"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Telp Penerima</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.createdAt"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Tanggal</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.status_order"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Status</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.service_type"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Jenis Layanan</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.weight"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Berat</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_destination"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Negara</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.shipment_fee"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Ongkir</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.agen"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Agen</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.branch"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Cabang</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.payment_type"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Tipe Pembayaran</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.pickup_by"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Pickup</h4>
                </div>
              </div>
            </template>
          </zdropdown>
          <zdropdown text="Filter Transaksi">
            <template v-slot:item>
              <div class="py-6 px-6">
                <h4 class="text-sm font-medium mr-2 mb-1">Rentang Tanggal:</h4>
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
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">Mitra:</h4>
                <!-- <zselect v-model="courier" :data="courierOptions" placeholder="Pilih Mitra Ekspedisi" @input="refreshData">
                                </zselect> -->
                <!-- <zselectmultiple v-model="courier" :data="courierOptions" placeholder="Pilih Mitra Ekspedisi" @input="refreshData">
                                </zselectmultiple> -->
                <zautocompleteinput
                  v-model="courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                  @input="refreshData"
                >
                </zautocompleteinput>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">
                  Negara Tujuan:
                </h4>
                <!-- <zautocomplete v-model="destination" :data="countryDestinationOptions" placeholder="Pilih Negara Tujuan" @input="refreshData">
                                </zautocomplete> -->
                <zselectmultiple
                  v-model="destination"
                  :data="countryDestinationOptions"
                  placeholder="Pilih Negara Tujuan"
                  @input="refreshData"
                  ref="filterDestinationComponent"
                >
                </zselectmultiple>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">Status:</h4>
                <zselect
                  v-model="status_order"
                  :data="['Hold', 'Cancel', 'Manifest', 'Pending']"
                  placeholder="Pilih Status Order"
                  @input="refreshData"
                >
                </zselect>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">
                  Pengecualian Cabang:
                </h4>
                <zselectmultiple
                  v-model="branch"
                  :data="branchOptions"
                  placeholder="Pilih Pengecualian Cabang"
                  @input="setExcludeBranch"
                  ref="filterBranchComponent"
                >
                </zselectmultiple>
                <div class="flex items-center">
                  <button
                    @click="
                      search = '';
                      filterDate = '';
                      start_date = '';
                      end_date = '';
                      courier = '';
                      destination = '';
                      status_order = '';
                      branch = [];
                      filter_manifest_date = '';
                      $refs.filterDestinationComponent.resetDataValue();
                      $refs.filterBranchComponent.resetDataValue();
                      $store.commit('putExcludeBranch', []);
                      refreshData();
                    "
                    class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md shadow"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            </template>
          </zdropdown>
        </div>
      </div>
      <datatable
        :data="data.data"
        :columns="columns"
        :meta="data.meta"
        :PageNavHandler="pageNavHandler"
        :TableInputSearchHandler="tableInputSearchHandler"
        :mutipleCheck="true"
        @selectedItem="getDataSelectedItem"
      >
        <!-- Custom Field -->
        <template slot="createdAt" slot-scope="props">
          {{ formatDate(props.item.createdAt) }}
        </template>
        <template slot="shipment_fee" slot-scope="props">
          {{ formatPrice(props.item.shipment_fee) }}
        </template>
        <template slot="agen" slot-scope="props">
          {{
            props.item.agen ? props.item.agen.fullname : props.item.agen_general
          }}
        </template>
        <template slot="branch" slot-scope="props">
          {{ props.item.branch.city_name }}
        </template>
        <template slot="action" slot-scope="props">
          <div class="flex items-center">
            <a
              @click="openNewTab('/print/nota/' + props.item.id)"
              class="cursor-pointer bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
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
              <h4 class="font-semibold">Print Nota</h4>
            </a>
          </div>
        </template>
        <!-- / End Custom Field -->
      </datatable>
    </div>
    <zloading v-show="loading"></zloading>
  </div>
  </template>
 </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zdropdown from "@/components/zdropdown";
import zselect from "@/components/zselect";
import zselectmultiple from "@/components/zselectmultiple";
// import zautocomplete from '@/components/zautocomplete';
import zautocompleteinput from "@/components/zautocompleteinput";
import datatable from "@/components/datatables/advance_table";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zdropdown,
    zselect,
    zselectmultiple,
    // zautocomplete,
    zautocompleteinput,
    datatable,
    zloading,
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
          field: "courier",
          label: "Mitra Ekspedisi",
        },
        {
          field: "sender_name",
          label: "Nama Pengirim",
        },
        {
          field: "recipient_name",
          label: "Nama Penerima",
        },
        {
          field: "recipient_phone",
          label: "No Handphone Penerima",
        },
        {
          field: "createdAt",
          label: "Tanggal Order",
        },
        {
          field: "service_type",
          label: "Jenis Layanan",
        },
        {
          field: "shipment_fee",
          label: "Ongkir",
        },
        {
          field: "agen",
          label: "Agen",
        },
      ],
      /* Pagination */
      page: 1,
      limit: 10,
      /* Filter */
      search: "",
      filterDate: "",
      start_date: "",
      end_date: "",
      courier: "",
      destination: "",
      status_order: "",
      branch: "",
      filter_manifest_date: "",
      /* Toggle Dialog */
      loading: true,
      /* Form Value */
      /* Extra Data */
      courierOptions: [],
      countryDestinationOptions: [],
      branchOptions: [],
      selectedItem: [],
      filterColumnSelected: {
        shipment_number: false,
        sender_name: false,
        awb: true,
        courier: false,
        recipient_name: true,
        recipient_phone: false,
        createdAt: false,
        status_order: false,
        service_type: false,
        weight: true,
        recipient_destination: true,
        shipment_fee: false,
        agen: false,
        branch: false,
        payment_type: false,
        pickup_by: false,
      },
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
    excludeBranchSelected() {
      return this.$store.state.exclude_branch;
    },
  },
  created() {
    /* Initiate Function */
    this.filterDate = "Hari Ini";
    this.selectRangeDate();
    this.getListData(this.page, this.limit);
    this.getListCourier();
    this.getCountryDestination();
    this.getListBranch();
    this.filterColumn();
  },
  methods: {
    /*
     * Get Data Method
     */
    async getListData(page, limit) {
      if (this.profileData.type_user == "Admin Pusat") {
        this.filterColumnSelected.branch = true;
      } else if (this.profileData.type_user == "Admin Cabang") {
        this.filterColumnSelected.courier = true;
        this.filterColumnSelected.sender_name = true;
        this.filterColumnSelected.payment_type = true;
        this.filterColumnSelected.pickup_by = true;
        this.filterColumnSelected.shipment_fee = true;
        this.filterColumnSelected.agen = true;
      }

      /* Fitur Exclude Branch */
      this.branch = this.excludeBranchSelected;

      let exclude_branch = [];

      if (this.branch.length > 0) {
        this.branch.map((item) => {
          exclude_branch.push(item.value);
        });
      }

      let query_params = {
        page: page,
        limit: limit,
        pagination: true,
        search: this.search,
        start_date: this.start_date,
        end_date: this.end_date,
        courier: this.courier,
        destination: this.destination,
        status_order: this.status_order,
        filter_shipment_number: true,
        exclude_branch: exclude_branch,
        manifest_date: this.filter_manifest_date,
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

        if (this.profileData.type_user == "Admin Cabang") {
          query_params.input_by = this.profileData.id;
        }
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-filter-surat-jalan`,
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
     * Get List Negara Method
     */
    async getCountryDestination() {
      await axios
        .get(api_url + "/api/v1/shipping-rates/destination?pagination=false")
        .then((response) => {
          // JSON responses are automatically parsed.
          // console.log(response.data)

          response.data.map((item) => {
            this.countryDestinationOptions.push(item.country_name);
          });

          this.countryDestinationOptions.sort();
        })
        .catch((e) => {
          console.log(e);
        });
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
    /*
     * Mutiple Selected Handler Function
     */
    getDataSelectedItem(value) {
      this.selectedItem = value;
      this.$store.commit("putSelectedItem", value);
      this.$store.commit("putSelectedColumns", this.columns);
    },
    setExcludeBranch() {
      this.$store.commit("putExcludeBranch", this.branch);
      this.refreshData();
    },
    /* Helpers */
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
    // formatPrice(number) {
    //   var rupiah = "";
    //   var angkarev = number
    //     .toString()
    //     .split("")
    //     .reverse()
    //     .join("");
    //   for (var i = 0; i < angkarev.length; i++)
    //     if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    //   return rupiah
    //     .split("", rupiah.length - 1)
    //     .reverse()
    //     .join("");
    // },
    formatPrice(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(number)
        .replace(",00", "");
    },
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
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
    openNewTab(url) {
      window.open(url);
    },
    filterColumn() {
      this.columns = [];

      if (this.filterColumnSelected.shipment_number) {
        this.columns.push({
          field: "shipment_number",
          label: "No Order",
        });
      }

      if (this.filterColumnSelected.sender_name) {
        this.columns.push({
          field: "sender_name",
          label: "Nama Pengirim",
        });
      }

      if (this.filterColumnSelected.awb) {
        this.columns.push({
          field: "awb_no",
          label: "Resi",
        });
      }

      if (this.filterColumnSelected.courier) {
        this.columns.push({
          field: "courier",
          label: "Mitra Ekspedisi",
        });
      }

      if (this.filterColumnSelected.recipient_name) {
        this.columns.push({
          field: "recipient_name",
          label: "Nama Penerima",
        });
      }

      if (this.filterColumnSelected.recipient_phone) {
        this.columns.push({
          field: "recipient_phone",
          label: "No Telp Penerima",
        });
      }

      if (this.filterColumnSelected.createdAt) {
        this.columns.push({
          field: "createdAt",
          label: "Tanggal Order",
        });
      }

      if (this.filterColumnSelected.status_order) {
        this.columns.push({
          field: "status_order",
          label: "Status Order",
        });
      }

      if (this.filterColumnSelected.service_type) {
        this.columns.push({
          field: "service_type",
          label: "Layanan",
        });
      }

      if (this.filterColumnSelected.weight) {
        this.columns.push({
          field: "weight",
          label: "Berat",
        });
      }

      if (this.filterColumnSelected.recipient_destination) {
        this.columns.push({
          field: "recipient_destination",
          label: "Negara Tujuan",
        });
      }

      if (this.filterColumnSelected.pickup_by) {
        this.columns.push({
          field: "pickup_by",
          label: "Pickup",
        });
      }

      if (this.filterColumnSelected.payment_type) {
        this.columns.push({
          field: "payment_type",
          label: "Tipe Pembayaran",
        });
      }

      if (this.filterColumnSelected.shipment_fee) {
        this.columns.push({
          field: "shipment_fee",
          label: "Ongkir",
        });
      }

      if (this.filterColumnSelected.agen) {
        this.columns.push({
          field: "agen",
          label: "Agen",
        });
      }

      if (this.filterColumnSelected.branch) {
        this.columns.push({
          field: "branch",
          label: "Cabang",
        });
      }
    },
  },
};
</script>

<style scoped></style>
