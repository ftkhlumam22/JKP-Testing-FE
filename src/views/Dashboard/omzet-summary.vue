<template>
  <layouts>
    <template v-slot:content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-start justify-between">
            <div>
              <h1 class="text-xl text-gray-800 font-medium mb-1">
                Ringkasan Omzet Luar Negri
              </h1>
              <h4 class="text-sm text-gray-500">
                Periode
                {{ stringDate(start_date) + " - " + stringDate(end_date) }}
              </h4>
            </div>
            <div class="flex items-center">
              <zdropdown
                text="Filter Transaksi"
                class="mr-4"
                v-if="profileData.type_user.includes('Super Admin')"
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
              <zselect
                class="mr-2 -mt-1 w-40"
                v-model="filterMonthly"
                :data="monthOptions"
                placeholder="Pilih Bulan"
                @input="getDataTotalOmzetByMonth"
              >
              </zselect>
              <zselect
                v-if="
                  profileData.role.access_permission.includes(
                    'dashboard-cabang'
                  ) && profileData.type_branch.length > 0
                "
                class="-mt-1 w-40"
                v-model="branchSelected"
                :data="branchOptions"
                placeholder="Pilih Cabang"
                @input="refreshData"
              ></zselect>

              <button
                @click="resetFilter"
                class="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md text-sm ml-2 focus:outline-none"
              >
                Reset Filter
              </button>
            </div>
          </div>

          <div class="flex item-center space-x-4 mt-5">
            <div
              class="lg:w-1/3 w-full bg-white  border border-blue-500 shadow-md rounded-md px-6 py-4 text-center"
            >
              <h6 class="text-base font-medium mb-2 text-sm">
                Omzet Real Bulan Ini
              </h6>
              <h6 class="text-lg font-semibold text-blue-800">
                Rp.
                {{
                  formatPrice(omzet_real_this_month ? omzet_real_this_month : 0)
                }}
              </h6>
              <span class="text-red-500"
                >-
                {{ formatPrice(omzet_piutang ? omzet_piutang : 0) }}
                (hutang)</span
              >
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow-md border border-blue-500 rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Real Hari Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp.
                {{
                  formatPrice(
                    total_omzet_real_today ? total_omzet_real_today : 0
                  )
                }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp.
                {{
                  formatPrice(
                    total_omzet_this_month ? total_omzet_this_month : 0
                  )
                }}
              </h1>
            </div>

            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Hari Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp.
                {{ formatPrice(total_omzet_today ? total_omzet_today : 0) }}
              </h1>
            </div>
          </div>
          <div class="flex item-center space-x-4 mt-5">
            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Bulanan</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp.
                {{
                  formatPrice(total_omzet_by_month ? total_omzet_by_month : 0)
                }}
              </h1>
              <span class="text-red-500"
                >-
                {{ formatPrice(totalPiutangMonth ? totalPiutangMonth : 0) }}
                (hutang)</span
              >
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Order Hari Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_order_today }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Order Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_order_this_month }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow-md rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Berat Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_weight_this_month.toFixed(2) }}kg
              </h1>
            </div>
          </div>
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Order
            </h1>
            <div v-show="loading_order" class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-40 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <line-chart
              v-if="loaded"
              :chartdata="order_statistics"
              :options="options"
            />
          </div>
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Omzet
            </h1>
            <div v-show="loading_order" class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-40 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <line-chart
              v-if="loaded_omzet"
              :chartdata="order_omzet"
              :options="options"
            />
          </div>
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Transaksi Admin
            </h1>
            <div v-show="loading_admin" class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-40 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <bar-chart
              v-if="load"
              :chartData="transactions_admin"
              :options="options"
            />
          </div>
          <!-- agen  -->
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Transaksi Agen
            </h1>
            <div v-show="loading_admin" class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-40 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <bar-chart
              v-if="loaded_agen"
              :chartData="transactions_agen"
              :options="options"
            />
          </div>
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
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";
import LineChart from "@/components/zlinechart";
import BarChart from "../../components/BarChart.vue";

export default {
  components: {
    zselect,
    zdropdown,
    LineChart,
    zloading,
    BarChart,
    layouts,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data */
      total_omzet_by_month: 0,
      total_omzet_this_month: 0,
      omzet_real_this_month: 0,
      omzet_piutang: 0,
      totalPiutangMonth: 0,
      total_omzet_today: 0,
      total_omzet_real_today: 0,
      total_order_today: 0,
      total_order_this_month: 0,
      total_weight_this_month: 0,
      /* Filter */
      filterDate: "",
      start_date: "",
      end_date: "",
      filterMonthly: "",
      /* Chart Data */
      loading_order: false,
      loading_admin: false,
      order_statistics: null,
      transactions_admin: null,
      transactions_agen: null,
      order_omzet: null,
      loaded: false,
      loaded_omzet: false,
      loaded_agen: false,
      load: false,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      loading: true,
      /* Extra Data */
      branchSelected: "",
      branchOptions: [],
      monthOptions: [
        {
          label: "Januari",
          value: 0,
        },
        {
          label: "Februari",
          value: 1,
        },
        {
          label: "Maret",
          value: 2,
        },
        {
          label: "April",
          value: 3,
        },
        {
          label: "Mei",
          value: 4,
        },
        {
          label: "Juni",
          value: 5,
        },
        {
          label: "Juli",
          value: 6,
        },
        {
          label: "Agustus",
          value: 7,
        },
        {
          label: "September",
          value: 8,
        },
        {
          label: "Oktober",
          value: 9,
        },
        {
          label: "November",
          value: 10,
        },
        {
          label: "Desember",
          value: 11,
        },
      ],
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
    this.selectRangeDate();
  },
  mounted() {
    this.getDataTotalOmzetThisMonth();
    this.getDataTotalOmzetRealThisMonth();
    this.getDataTotalOmzetToday();
    this.getDataTotalOmzetTodayReal();
    this.getDataTotalOrderToday();
    this.getDataTotalOrderThisMonth();
    this.getDataTotalWeight();
    this.getDataTotalOrderStatistics();
    this.getListBranch();
    this.totalAdminTransactions();
    this.getDataOmzetStatistik();
    this.totalTransactionsAgen();
  },
  methods: {
    /*
     * Get Data Total Omzet By Month
     */
    async getDataTotalOmzetByMonth() {
      if (this.filterMonthly !== "") {
        let now = new Date();
        let firstDay = new Date(now.getFullYear(), this.filterMonthly.value, 1);
        let lastDay = new Date(
          now.getFullYear(),
          parseInt(this.filterMonthly.value + 1),
          0
        );
        let start_date = this.formatDate(firstDay);
        let end_date = this.formatDate(lastDay);

        let query_params = {
          start_date: start_date,
          end_date: end_date,
        };

        if (this.profileData.type_user === "Master Agen") {
          query_params.master_agen = this.profileData.id;
          query_params.input_by = this.profileData.id;
        } else {
          query_params.branch = this.branchSelected.value;
        }
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile.data.type_branch.length > 0) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet`,
            { params: query_params, headers: this.headers }
          );
          console.log("response by bulan", response);
          this.total_omzet_by_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid;
          this.totalPiutangMonth =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid -
                response.data.data[0].total_paid_cash -
                response.data.data[0].total_paid_transfer;
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
      } else {
        this.total_omzet_by_month = 0;
      }
    },
    /*
     * Get Data Total Omzet
     */
    async getDataTotalOmzetThisMonth() {
      if (this.filterDate == "") {
        let now = new Date();
        let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        let start_date = this.formatDate(firstDay);
        let end_date = this.formatDate(lastDay);

        let query_params = {
          start_date: start_date,
          end_date: end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile.data.type_branch.length > 0) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet`,
            { params: query_params, headers: this.headers }
          );
          console.log("response by cabang", response);
          this.total_omzet_this_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid;

          this.loading = false;
          console.log("hasile jeh", query_params);
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
      } else {
        let query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile.data.type_branch.length > 0) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor" &&
          this.profileData.type_user !== "Admin Cabang"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet`,
            { params: query_params, headers: this.headers }
          );
          console.log("response by cabang", response);
          this.total_omzet_this_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid;

          this.loading = false;
          console.log("hasile jeh", query_params);
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
      }
    },

    async getDataTotalOmzetRealThisMonth() {
      if (this.filterDate == "") {
        let now = new Date();
        let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        let start_date = this.formatDate(firstDay);
        let end_date = this.formatDate(lastDay);

        let query_params = {
          start_date: start_date,
          end_date: end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile.data.type_branch.length > 0) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet-real`,
            { params: query_params, headers: this.headers }
          );
          console.log("omzet real bulan ini", response);
          this.omzet_real_this_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].cash + response.data.data[0].transfer;
          this.omzet_piutang =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid -
                response.data.data[0].cash -
                response.data.data[0].transfer;
          this.total_omzet_this_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid;
          this.loading = false;
          console.log("hasile jeh", response.data.data);
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
      } else {
        let query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile.data.type_branch.length > 0) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor" &&
          this.profileData.type_user !== "Admin Cabang"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet`,
            { params: query_params, headers: this.headers }
          );
          console.log(response);
          this.omzet_real_this_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].cash + response.data.data[0].transfer;

          this.loading = false;
          console.log("hasile jeh", query_params);
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
      }
    },
    /*
     * Get Data Total Omzet Hari Ini
     */
    async getDataTotalOmzetToday() {
      let firstDay = new Date();
      let lastDay = new Date();
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      // if(this.profileData.type_user === 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-omzet`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_omzet_today =
          response.data.data.length === 0
            ? 0
            : response.data.data[0].amount_paid;

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

    async getDataTotalOmzetTodayReal() {
      let firstDay = new Date();
      let lastDay = new Date();
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-omzet-real`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_omzet_real_today =
          response.data.data.length === 0
            ? 0
            : response.data.data[0].cash + response.data.data[0].transfer;
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
     * Get Data Total Order Hari Ini
     */
    async getDataTotalOrderToday() {
      let firstDay = new Date();
      let lastDay = new Date();
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      // if(this.profileData.type_user === 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-order`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_order_today =
          response.data.data.length === 0 ? 0 : response.data.data[0].count;
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
     * Get Data Total Order Bulan Ini
     */
    async getDataTotalOrderThisMonth() {
      let now = new Date();
      let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      // if(this.profileData.type_user === 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-order`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_order_this_month =
          response.data.data.length === 0 ? 0 : response.data.data[0].count;
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
     * Get Data Total Weight
     */
    async getDataTotalWeight() {
      let now = new Date();
      let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      // if(this.profileData.type_user === 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }
      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-weight`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_weight_this_month =
          response.data.data.length === 0 ? 0 : response.data.data[0].weight;
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
     * Get Data Total Order Statistics
     */
    async totalAdminTransactions() {
      this.load = false;
      this.loading_admin = true;
      if (this.filterDate == "") {
        let firstDay = new Date();
        let lastDay = new Date();
        let start_date = this.formatDate(firstDay);
        let end_date = this.formatDate(lastDay);
        let query_params = {
          start_date: start_date,
          end_date: end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile !== undefined) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/order-transactions`,
            { params: query_params, headers: this.headers }
          );
          console.log("hasil", response);
          this.transactions_admin = {
            labels: response.data.data.map((item) => item.pengguna),
            datasets: [
              {
                label: "Total Transaksi Admin",
                borderWidth: 1,
                borderColor: "rgba(50, 115, 220, 0.5)",
                backgroundColor: "rgba(50, 115, 220, 0.2)",
                pointBorderColor: "#2554FF",
                data: response.data.data.map((item) => item.total),
              },
            ],
          };
          this.loading_admin = false;
          this.load = true;
        } catch (error) {
          console.log(error);
        }
      } else {
        let query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
        };
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile !== undefined) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/order-transactions`,
            { params: query_params, headers: this.headers }
          );
          console.log("hasil", response);
          this.transactions_admin = {
            labels: response.data.data.map((item) => item.pengguna),
            datasets: [
              {
                label: "Total Transaksi Admin",
                borderWidth: 1,
                borderColor: "rgba(50, 115, 220, 0.5)",
                backgroundColor: "rgba(50, 115, 220, 0.2)",
                pointBorderColor: "#2554FF",
                data: response.data.data.map((item) => item.total),
              },
            ],
          };
          this.loading_admin = false;
          this.load = true;
        } catch (error) {
          console.log(error);
        }
      }
    },

    async totalTransactionsAgen() {
      if (this.filterDate == "") {
        this.loaded_agen = false;
        this.loading_admin = true;
        let firstDay = new Date();
        let lastDay = new Date();
        let start_date = this.formatDate(firstDay);
        let end_date = this.formatDate(lastDay);
        let query_params = {
          start_date: start_date,
          end_date: end_date,
        };
        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile !== undefined) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/order-agen-transactions`,
            { params: query_params, headers: this.headers }
          );
          console.log("hasil", response);
          this.transactions_agen = {
            labels: response.data.data.map((item) => item.pengguna),
            datasets: [
              {
                label: "Total Transaksi Agen",
                borderWidth: 1,
                borderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBorderColor: "#2554FF",
                data: response.data.data.map((item) => item.total),
              },
            ],
          };
          this.loading_admin = false;
          this.loaded_agen = true;
        } catch (error) {
          console.log(error);
        }
      } else {
        this.loaded_agen = false;
        this.loading_admin = true;
        let query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
        };
        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Supervisor"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: this.headers,
        });

        if (getProfile !== undefined) {
          query_params.type_branch = getProfile.data.type_branch.map((item) => {
            return item.value;
          });
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/order-agen-transactions`,
            { params: query_params, headers: this.headers }
          );
          console.log("hasil", response);
          this.transactions_agen = {
            labels: response.data.data.map((item) => item.pengguna),
            datasets: [
              {
                label: "Total Transaksi Agen",
                borderWidth: 1,
                borderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBorderColor: "#2554FF",
                data: response.data.data.map((item) => item.total),
              },
            ],
          };
          this.loading_admin = false;
          this.loaded_agen = true;
        } catch (error) {
          console.log(error);
        }
      }
    },

    async getListBranch() {
      let query_params = {
        pagination: false,
      };
      try {
        if (this.profileData.type_user == "Super Admin") {
          const response = await axios.get(
            `${api_url}/api/v1/master/branch/admin`,
            { params: query_params, headers: this.headers }
          );
          this.branchOptions = [];
          response.data.map((item) => {
            this.branchOptions.push({
              label: item.city_name,
              value: item.id,
            });
          });
        } else {
          this.branchOptions = [];
          const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
            headers: this.headers,
          });
          getProfile.data.type_branch.map((item) => {
            this.branchOptions.push({
              label: item.label,
              value: item.value,
            });
          });
        }

        // const data = this.profileData.role.access_permission;

        // if (this.profileData.type_user == "Super Cabang") {
        //   this.branchOptions = [];
        //   response.data.map((item) => {
        //     if (item.city_name == data.match(item.city_name)) {
        //       this.branchOptions.push({
        //         label: item.city_name,
        //         value: item.id,
        //       });
        //     }
        //   });
        // } else {
        //   response.data.map((item) => {
        //     this.branchOptions.push({
        //       label: item.city_name,
        //       value: item.id,
        //     });
        //   });
        // }
      } catch (error) {
        console.log(error);
      }
    },

    // bar chart pengguna
    async getDataTotalOrderStatistics() {
      this.loaded = false; // Jangan dirender sebelum datanya ada
      this.loading_order = true;
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-order-statistics`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.order_statistics = {
          labels: response.data.data.map((item) => item.date),
          datasets: [
            {
              label: "Total Order",
              borderColor: "rgba(50, 115, 220, 0.5)",
              backgroundColor: "rgba(50, 115, 220, 0.1)",
              data: response.data.data.map((item) => item.order_count),
            },
          ],
        };
        this.loading_order = false;
        this.loaded = true; // Baru render jika data ada
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

    //chart omzet
    async getDataOmzetStatistik() {
      this.loaded_omzet = false; // Jangan dirender sebelum datanya ada
      this.loading_order = true;
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });

      if (getProfile !== undefined) {
        query_params.type_branch = getProfile.data.type_branch.map((item) => {
          return item.value;
        });
      }

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Supervisor"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-statistics-omzet`,
          { params: query_params, headers: this.headers }
        );
        console.log("omzert", response);

        this.order_omzet = {
          labels: response.data.data.map((item) => item.date),
          datasets: [
            {
              label: "Total Omzet",
              borderColor: "rgba(255, 99, 132,1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              data: response.data.data.map((item) => item.omzet),
            },
          ],
        };
        this.loading_order = false;
        this.loaded_omzet = true; // Baru render jika data ada
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
    /* Helpers */
    refreshData() {
      this.getDataTotalOmzetThisMonth();
      this.getDataTotalOmzetRealThisMonth();
      this.getDataTotalOmzetToday();
      this.getDataTotalOmzetTodayReal();
      this.getDataTotalOrderToday();
      this.getDataTotalOrderThisMonth();
      this.getDataTotalWeight();
      this.getDataTotalOrderStatistics();
      this.getDataTotalOmzetByMonth();
      this.totalAdminTransactions();
      this.getDataOmzetStatistik();
      this.totalTransactionsAgen();
    },
    resetFilter() {
      this.filterDate = "Bulan Ini";
      this.start_date = "";
      this.end_date = "";
      this.filterMonthly = "";
      this.branchSelected = "";

      this.refreshData();
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

      this.start_date = this.formatDate(firstDay);
      this.end_date = this.formatDate(lastDay);

      /* Refresh Data */
      this.refreshData();
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    stringDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
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
  },
};
</script>

<style scoped></style>
