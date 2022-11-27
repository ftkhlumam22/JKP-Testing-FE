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
              <zselect
                v-model="limit"
                :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                placeholder="Jumlah"
                @input="refreshData"
                class="-mt-1 mr-2"
                style="width: 80px"
              >
              </zselect>
              <zdropdown text="Filter Transaksi">
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
                    <div class="flex items-center">
                      <button
                        @click="
                          search = '';
                          filterDate = '';
                          start_date = '';
                          end_date = '';
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
          >
            <!-- Custom Field -->
            <template slot="createdAt" slot-scope="props">
              {{ formatDate(props.item.createdAt) }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <!-- <a @click="openNewTab('/print/nota/' + props.item.id)" class="cursor-pointer bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2" style="font-size: 11px">
                            <svg class="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                            </svg>
                            <h4 class="font-semibold">Print Nota</h4>
                        </a> -->
                <zdropdown text="Print Nota">
                  <template v-slot:item>
                    <div class="max-w-sm">
                      <a
                        @click="
                          openNewTab(
                            '/print/nota/' + props.item.id + '?type=IDR'
                          )
                        "
                        class="cursor-pointer hover:text-gray-700 px-3 py-2 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
                        style="font-size: 11px"
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
                        <h4 class="font-semibold">Mata Uang IDR</h4>
                      </a>
                      <hr />
                      <a
                        @click="
                          openNewTab(
                            '/print/nota/' + props.item.id + '?type=USD'
                          )
                        "
                        class="cursor-pointer hover:text-gray-700 px-3 py-2 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
                        style="font-size: 11px"
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
                        <h4 class="font-semibold">Mata Uang USD</h4>
                      </a>
                    </div>
                  </template>
                </zdropdown>
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
import datatable from "@/components/datatables/advance_table";
import zdropdown from "@/components/zdropdown";
import zselect from "@/components/zselect";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    datatable,
    zdropdown,
    zselect,
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
          field: "sender_name",
          label: "Nama Pengirim",
        },
        {
          field: "courier",
          label: "Mitra Ekspedisi",
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
          field: "action",
          label: "Aksi",
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
      /* Toggle Dialog */
      loading: true,
      /* Form Value */
      /* Extra Data */
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
    this.filterDate = "Hari Ini";
    this.selectRangeDate();
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
        start_date: this.start_date,
        end_date: this.end_date,
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
          this.profileData.type_user == "Admin Pusat" ||
          this.profileData.type_user == "Admin Cabang"
        ) {
          query_params.input_by = this.profileData.id;
        } else if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Admin Pusat" &&
          this.profileData.type_user !== "Gudang Pusat" &&
          this.profileData.type_user !== "CS Pusat" &&
          this.profileData.type_user !== "Finance" &&
          this.profileData.type_user !== "Akunting"
        ) {
          query_params.branch = this.profileData.branch._id;
        }
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
    openNewTab(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped></style>
