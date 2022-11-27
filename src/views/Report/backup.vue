<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="w-full">
            <h4 class="text-lg font-semibold mb-5">Backup Data</h4>
            <div class="flex items-start space-x-5 mb-5">
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Transaksi Luar Negeri</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
                      v-model="start_international"
                      class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Akhir:
                    </h4>
                    <input
                      v-model="end_international"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="backupInternational"
                  class="flex justify-center w-full font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="load"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Download Data</span>
                </button>
              </div>
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Transaksi Domestik</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2 mb-4">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
                      v-model="start_domestik"
                      class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Akhir:
                    </h4>
                    <input
                      v-model="end_domestik"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Order Awal:
                    </h4>
                    <input
                      v-model="start_shipment_date"
                      class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Order Akhir:
                    </h4>
                    <input
                      v-model="end_shipment_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="backupDomestik"
                  class="w-full flex justify-center font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="loadomestik"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Download Data
                </button>
              </div>
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Pelanggan</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
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
                      v-model="end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="downloadBackup('customer')"
                  class="w-full flex justify-center font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="load"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Download Data
                </button>
              </div>
            </div>
            <div class="flex items-center space-x-5 mb-5">
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Piutang Agen</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
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
                      v-model="end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="downloadBackup('piutang-agen')"
                  class="w-full flex justify-center font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="load"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Download Data
                </button>
              </div>
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Tagihan Mitra</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
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
                      v-model="end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="downloadBackup('tagihan-mitra')"
                  class="w-full flex justify-center font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="load"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Download Data
                </button>
              </div>
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Biaya Operasional</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
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
                      v-model="end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  @click="downloadBackup('biaya-operasional')"
                  class="w-full flex justify-center font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  <svg
                    v-show="load"
                    class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Download Data
                </button>
              </div>
            </div>
            <div class="flex items-center space-x-5 mb-5">
              <div class="w-1/3 bg-white rounded-lg p-5">
                <h3 class="font-semibold">Backup Data Pickup</h3>
                <hr class="my-3" />
                <div class="flex items-center space-x-2 mb-3">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
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
                      v-model="end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-full">
                    <h4 class="text-sm font-medium mr-2 mb-1">Pilih Pickup:</h4>
                    <zselect
                      v-model="pickup"
                      :data="pickupOptions"
                      placeholder="Pilih Pickup"
                    >
                    </zselect>
                  </div>
                </div>
                <button
                  @click="downloadBackup('pickup')"
                  class="w-full font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
                >
                  Download Data
                </button>
              </div>
            </div>
          </div>
        </div>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zloading from "@/components/zloading";
import zselect from "@/components/zselect";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zloading,
    zselect,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      /* Pagination */
      /* Filter */
      start_date: "",
      end_date: "",

      // international
      start_international: "",
      end_international: "",
      // domestik
      start_domestik: "",
      end_domestik: "",

      start_shipment_date: "",
      end_shipment_date: "",
      pickup: "",
      pickupOptions: [],
      /* Toggle Dialog */
      loading: true,
      load: false,
      loadomestik: false,
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
    this.getListPickup();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  methods: {
    /* Bckup International */
    async backupInternational() {
      this.start_international = this.convertDate(this.start_international);
      this.end_international = this.convertDate(this.end_international);

      let query_params = {
        start_international: this.start_international,
        end_international: this.end_international,
      };
      this.load = true;
      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/backup/backup-international`,
          {
            params: query_params,
            headers: this.headers,
          }
        );
        console.log(response);
        this.load = false;

        var fileDownload = require("js-file-download");
        return fileDownload(
          response.data,
          "backup-transaction-international.csv"
        );
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

    // backup Domestik
    async backupDomestik() {
      this.loadomestik = true;
      this.start_domestik = this.convertDate(this.start_domestik);
      this.end_domestik = this.convertDate(this.end_domestik);

      let query_params = {
        start_domestik: this.start_domestik,
        end_domestik: this.end_domestik,
      };

      if (this.start_shipment_date && this.end_shipment_date) {
        query_params.start_shipment_date = this.convertDate(
          this.start_shipment_date
        );
        query_params.end_shipment_date = this.convertDate(
          this.end_shipment_date
        );
      }
      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/backup/backup-domestik`,
          {
            params: query_params,
            headers: this.headers,
          }
        );
        console.log(response);
        this.loadomestik = false;

        var fileDownload = require("js-file-download");
        return fileDownload(response.data, "backup-transaction-domestic.csv");
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

    // backup operasional
    /* Helpers */
    async downloadBackup(type) {
      let url;
      let file_name;
      this.load = true;

      switch (type) {
        case "transaction-international":
          url = `${api_url}/api/v1/master/backup/transaction-international`;
          file_name = "backup-transaction-international.csv";
          break;

        case "transaction-domestic":
          url = `${api_url}/api/v1/master/backup/transaction-domestic`;
          file_name = "backup-transaction-domestic.csv";
          break;

        case "customer":
          url = `${api_url}/api/v1/master/backup/customer`;
          file_name = "backup-customer.csv";
          break;

        case "piutang-agen":
          url = `${api_url}/api/v1/master/backup/piutang-agen`;
          file_name = "backup-piutang-agen.csv";
          break;

        case "tagihan-mitra":
          url = `${api_url}/api/v1/master/backup/tagihan-mitra`;
          file_name = "backup-utang-mitra.csv";
          break;

        case "pickup":
          url = `${api_url}/api/v1/master/backup/pickup`;
          file_name = "backup-pickup.csv";
          break;

        case "biaya-operasional":
          url = `${api_url}/api/v1/master/backup/biaya-operasional`;
          file_name = "backup-biaya-operasional.csv";
          break;

        default:
          break;
      }

      this.start_date = this.convertDate(this.start_date);
      this.end_date = this.convertDate(this.end_date);

      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };

      if (type == "pickup") {
        query_params.pickup_by = this.pickup;
      }

      if (this.start_shipment_date && this.end_shipment_date) {
        query_params.start_shipment_date = this.convertDate(
          this.start_shipment_date
        );
        query_params.end_shipment_date = this.convertDate(
          this.end_shipment_date
        );
      }

      try {
        const response = await axios.get(url, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        this.load = false;
        var fileDownload = require("js-file-download");
        return fileDownload(response.data, file_name);
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
     * Get Data Method
     */
    async getListPickup() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/master/pickup`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.pickupOptions.push(item.pickup_name);
        });
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
  },
};
</script>

<style scoped></style>
