<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-start justify-between">
            <div>
              <h1 class="text-xl text-gray-800 font-medium mb-1">
                Ringkasan Omzet Domestik
              </h1>
              <h4 class="text-sm text-gray-500">
                Periode
                {{ stringDate(start_date) + " - " + stringDate(end_date) }}
              </h4>
            </div>
            <div class="flex items-center">
              <button
                @click="resetFilter"
                class="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md text-sm mr-2 focus:outline-none"
              >
                Reset Filter
              </button>
              <zselect
                class="mr-2 -mt-1 w-40"
                v-model="filterMonthly"
                :data="monthOptions"
                placeholder="Pilih Bulan"
                @input="getDataTotalOmzetByMonth"
              >
              </zselect>
              <zautocomplete
                v-if="profileData.type_user === 'Super Admin'"
                class="-mt-1 w-40"
                v-model="branchSelected"
                :data="branchOptions"
                placeholder="Pilih Cabang"
                @input="refreshData"
              >
              </zautocomplete>
              <!-- <zdropdown :text="filterDate">
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
                              </div>
                          </template>
                      </zdropdown> -->
            </div>
          </div>
          <!-- <div class="flex item-center space-x-4 mt-10">
                  <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                      <h4 class="text-base font-medium mb-2">Total Omzet</h4>
                      <h1 class="text-xl font-semibold text-blue-800">Rp{{ formatPrice(total_omzet) }}</h1>
                  </div>
                  <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                      <h4 class="text-base font-medium mb-2">Total Order</h4>
                      <h1 class="text-xl font-semibold text-blue-800">{{ total_order }}</h1>
                  </div>
                  <div class="w-1/3 bg-white shadow rounded-md px-6 py-4 text-center">
                      <h4 class="text-base font-medium mb-2">Total Berat</h4>
                      <h1 class="text-xl font-semibold text-blue-800">{{ total_weight }}kg</h1>
                  </div>
              </div> -->
          <div class="flex item-center space-x-4 mt-5">
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Bulanan</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp{{
                  formatPrice(total_omzet_by_month ? total_omzet_by_month : 0)
                }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp{{
                  formatPrice(
                    total_omzet_this_month ? total_omzet_this_month : 0
                  )
                }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Omzet Hari Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                Rp{{ formatPrice(total_omzet_today ? total_omzet_today : 0) }}
              </h1>
            </div>
          </div>
          <div class="flex item-center space-x-4 mt-5">
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Order Hari Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_order_today }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Order Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_order_this_month }}
              </h1>
            </div>
            <div
              class="lg:w-1/3 w-full bg-white shadow rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">Total Berat Bulan Ini</h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{ total_weight_this_month.toFixed(2) }}kg
              </h1>
            </div>
          </div>
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Order Domestik
            </h1>
            <line-chart
              v-if="loaded"
              :chartdata="order_statistics"
              :options="options"
            />
          </div>
          <div class="mt-5 bg-white shadow rounded-md px-6 py-6">
            <h1 class="text-base text-gray-800 font-semibold mb-5">
              Statistik Transaksi Admin Domestik
            </h1>
            <bar-chart
              v-if="load"
              :chartData="transactions_admin"
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
// import navigation from "@/components/navigation";
import layouts from "@/components/layouts";
// import zdropdown from '@/components/zdropdown';
import zselect from "@/components/zselect";
import zautocomplete from "@/components/zautocomplete";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";
import LineChart from "@/components/zlinechart";
import BarChart from "../../components/BarChart.vue";

export default {
  components: {
    // navigation,
    layouts,
    zselect,
    zautocomplete,
    LineChart,
    zloading,
    BarChart,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data */
      total_omzet_by_month: 0,
      total_omzet_this_month: 0,
      total_omzet_today: 0,
      total_order_today: 0,
      total_order_this_month: 0,
      total_weight_this_month: 0,
      /* Filter */
      filterDate: "Bulan Ini",
      start_date: "",
      end_date: "",
      filterMonthly: "",
      /* Chart Data */
      order_statistics: null,
      transactions_admin: null,
      loaded: false,
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
    this.getDataTotalOmzetToday();
    this.getDataTotalOrderToday();
    this.getDataTotalOrderThisMonth();
    this.getDataTotalWeight();
    this.getDataTotalOrderStatistics();
    this.getListBranch();
    this.totalAdminTransactions();
    this.getDataTotalOmzetByMonth();
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
        if (this.profileData.type_user !== "Super Admin") {
          query_params.branch = this.profileData.branch._id;
        } else {
          query_params.branch = this.branchSelected.value;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/income/get-omzet-domestik`,
            { params: query_params, headers: this.headers }
          );
          console.log(response);
          this.total_omzet_by_month =
            response.data.data.length === 0
              ? 0
              : response.data.data[0].amount_paid;

          this.loading = false;
        } catch (error) {
          console.log(error);
          // if (error.message.includes("404") || error.message.includes("500")) {
          //   // Destroy Data Auth in LocalStorage
          //   window.localStorage.removeItem("token-auth-jaskipin");
          //   window.localStorage.removeItem("data-profile-jaskipin");
          //   // Redirect to Login Page
          //   this.$router.push("/");
          // }
        }
      } else {
        this.total_omzet_by_month = 0;
      }
    },
    /*
     * Get Data Total Omzet
     */
    async getDataTotalOmzetThisMonth() {
      let now = new Date();
      let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);

      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };

      // if(this.profileData.type_user == 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-omzet-domestik`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.total_omzet_this_month =
          response.data.data.length === 0
            ? 0
            : response.data.data[0].amount_paid;

        this.loading = false;
      } catch (error) {
        console.log(error);
        // if (error.message.includes("404") || error.message.includes("500")) {
        //   // Destroy Data Auth in LocalStorage
        //   window.localStorage.removeItem("token-auth-jaskipin");
        //   window.localStorage.removeItem("data-profile-jaskipin");
        //   // Redirect to Login Page
        //   this.$router.push("/");
        // }
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
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-omzet-domestik`,
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
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-order-domestik`,
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
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-order-domestik`,
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
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-weight-domestik`,
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
      let firstDay = new Date();
      let lastDay = new Date();
      let start_date = this.formatDate(firstDay);
      let end_date = this.formatDate(lastDay);
      let query_params = {
        start_date: start_date,
        end_date: end_date,
      };
      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/order-transactions-domestik`,
          { params: query_params, headers: this.headers }
        );
        console.log("hasil", response);
        this.transactions_admin = {
          labels: response.data.data.map((item) => item.pengguna),
          datasets: [
            {
              label: "Total Transaksi Domestik",
              borderWidth: 1,
              borderColor: "rgba(255,99,132,1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              pointBorderColor: "#2554FF",
              data: response.data.data.map((item) => item.total),
            },
          ],
        };
        this.load = true;
      } catch (error) {
        console.log(error);
      }
    },

    async getListBranch() {
      let query_params = {
        pagination: false,
      };

      try {
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
      } catch (error) {
        console.log(error);
      }
    },

    // bar chart pengguna
    async getDataTotalOrderStatistics() {
      this.loaded = false; // Jangan dirender sebelum datanya ada

      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };

      // if(this.profileData.type_user === 'Master Agen') {
      //     query_params.master_agen = this.profileData.id;
      //     query_params.input_by = this.profileData.id;
      // }else{
      //     query_params.branch = this.branchSelected.value
      // }

      if (this.profileData.type_user !== "Super Admin") {
        query_params.branch = this.profileData.branch._id;
      } else {
        query_params.branch = this.branchSelected.value;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/report/income/get-domestik-statistics`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.order_statistics = {
          labels: response.data.data.map((item) => item.date),
          datasets: [
            {
              label: "Total Order Domestik",
              borderColor: "rgba(50, 115, 220, 0.5)",
              backgroundColor: "rgba(50, 115, 220, 0.1)",
              data: response.data.data.map((item) => item.order_count),
            },
          ],
        };

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
    /* Helpers */
    refreshData() {
      // this.getDataTotalOmzetThisMonth();
      this.getDataTotalOmzetToday();
      this.getDataTotalOrderToday();
      this.getDataTotalOrderThisMonth();
      this.getDataTotalWeight();
      this.getDataTotalOrderStatistics();
      // this.getDataTotalOmzetByMonth();
      this.totalAdminTransactions();
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
