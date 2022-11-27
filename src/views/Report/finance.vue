<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="lg:max-w-lg w-full">
            <h4 class="text-lg font-semibold mb-5">
              Cetak Laporan Keuangan Harian
            </h4>
            <div class="flex items-center space-x-2">
              <div class="w-1/2">
                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Mulai:</h4>
                <input
                  v-model="start_date"
                  class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                  @input="getReport"
                />
              </div>
              <div class="w-1/2">
                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Akhir:</h4>
                <input
                  v-model="end_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                  @input="getReport"
                />
              </div>
            </div>
            <div class="flex items-center space-x-2 mt-2">
              <div class="w-full">
                <h4 class="text-sm font-medium mr-2 mb-1">Status Order:</h4>
                <zselect
                  v-model="status_order"
                  :data="['Hold', 'Cancel', 'Manifest', 'Pending']"
                  placeholder="Pilih Status Order"
                  @input="getReport"
                >
                </zselect>
              </div>
            </div>
            <div class="flex items-center space-x-2 mt-2">
              <div class="w-full">
                <h4 class="text-sm font-medium mr-2 mb-1">
                  Pengecualian Status Order:
                </h4>
                <zselectmultiple
                  v-model="not_status_order"
                  :data="statusOrder"
                  placeholder="Pilih Status Order"
                  @input="getReport"
                >
                </zselectmultiple>
              </div>
            </div>

            <div
              v-if="profileData.type_user === 'Super Admin'"
              class="flex items-center space-x-2 mt-2"
            >
              <div class="w-full">
                <h4 class="text-sm font-medium mr-2 mb-1">Cabang:</h4>
                <zselect
                  v-model="branch"
                  :data="branchList"
                  placeholder="Pilih Cabang"
                  @input="getReport"
                >
                </zselect>
              </div>
            </div>

            <div class="flex items-center space-x-2 mt-2">
              <div class="w-full">
                <h4 class="text-sm font-medium mr-2 mb-1">Pembayaran:</h4>
                <zselect
                  v-model="status_payment"
                  :data="['Lunas', 'Belum Bayar', 'Belum Lunas']"
                  placeholder="Pilih Status Pembayaran"
                  @input="getReport"
                >
                </zselect>
              </div>
            </div>

            <div
              v-if="profileData.type_user === 'Supervisor'"
              class="flex items-center space-x-2 mt-2"
            >
              <div class="w-full">
                <h4 class="text-sm font-medium mr-2 mb-1">Cabang:</h4>
                <zselectmultiple
                  v-model="branch_type"
                  :data="branchType"
                  placeholder="Pilih Cabang"
                  @input="getReport"
                >
                </zselectmultiple>
              </div>
            </div>
            <button
              @click="downloadReport"
              class="text-sm mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
            >
              Download
            </button>
            <button
              @click="
                start_date = '';
                end_date = '';
                status_order = '';
                not_status_order = '';
                branch = '';
                status_payment = '';
                type_branch = '';
                branch_type = '';
                data = [];
              "
              class="text-sm mt-5 bg-gray-600 hover:bg-gray-700 px-4 py-2 text-semibold text-white rounded-md shadow"
            >
              Reset Filter
            </button>
          </div>
          <div
            v-show="loadFetch"
            class="w-full h-20 bg-gray-50 my-4 rounded-md animate-pulse"
          >
            <div class="text-black py-4 px-6">Loading .....</div>
          </div>
          <div v-if="data && data.length > 0" class="mt-10">
            <p class="text-gray-500">Cek terlebih dahulu sebelum di download</p>
            <br />
            <div class="flex gird grid-cols-3 gap-6 mb-7">
              <div
                class="bg-white border-b-8 border-blue-600 w-1/3 py-3 rounded-md shadow-md hover:shadow-xl flex justify-center"
              >
                <div class="flex flex-col  p-5">
                  <span class="text-lg text-gray-700 mb-2">Total Uang</span>
                  <span class="text-xl text-gray-600">{{
                    formatPrice(totalMoney)
                  }}</span>
                </div>
              </div>
              <div
                class="bg-white border-b-8 border-blue-600 w-1/3 py-3 rounded-md shadow-md hover:shadow-xl flex justify-center"
              >
                <div class="flex flex-col  p-5">
                  <span class="text-lg text-gray-700 mb-2">Transfer</span>
                  <span class="text-xl text-gray-600">
                    {{ formatPrice(totalTransfer) }}</span
                  >
                </div>
              </div>
              <div
                class="bg-white border-b-8 border-blue-600 w-1/3 py-3 rounded-md shadow-md hover:shadow-xl flex justify-center"
              >
                <div class="flex flex-col  p-5">
                  <span class="text-lg text-gray-700 mb-2">Cash</span>
                  <span class="text-xl text-gray-600">
                    {{ formatPrice(totalCash) }}</span
                  >
                </div>
              </div>
              <div
                class="bg-white border-b-8 border-blue-600 w-1/3 py-3 rounded-md shadow-md hover:shadow-xl flex justify-center"
              >
                <div class="flex flex-col  p-5">
                  <span class="text-lg text-gray-700 mb-2">Hutang</span>
                  <span class="text-xl text-gray-600">{{
                    formatPrice(totalMoney - totalCash - totalTransfer)
                  }}</span>
                </div>
              </div>
            </div>
            <div class="w-full overflow-x-auto">
              <table class="min-w-full bg-gray-100">
                <thead>
                  <tr>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      No Order
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Nama Pengirim
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Nama Penerima
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Negara Tujuan Penerima
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Mitra Ekspedisi
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      No Resi
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Berat
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Agen
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Volume
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Pickup
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Cabang
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Pembayaran
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Bayar Jaskipin
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Cash
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Transfer
                    </td>
                    <td
                      class="px-3 py-2 bg-blue-700 text-white font-semibold text-sm"
                    >
                      Total Dibayar
                    </td>
                  </tr>
                </thead>
                <thead>
                  <tr
                    class="border-b border-gray-200"
                    v-for="(item, index) in data"
                    :key="index"
                  >
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.shipment_number }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.sender_name }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.recipient_name }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.recipient_destination }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.courier }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.awb_no }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.weight }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.agen }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.volume }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.pickup ? item.pickup : "-" }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ item.branch ? item.branch : "-" }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{
                        item.cash == 0
                          ? "Transfer"
                          : item.transfer == 0
                          ? "Cash"
                          : "Cash & Transfer"
                      }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ formatPrice(item.amount ? item.amount : 0) }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ formatPrice(item.cash ? item.cash : 0) }}
                    </td>
                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{ formatPrice(item.transfer ? item.transfer : 0) }}
                    </td>

                    <td class="px-3 py-2 bg-gray-50 text-sm">
                      {{
                        formatPrice(
                          item.cash == 0
                            ? item.transfer
                            : item.transfer == 0
                            ? item.cash
                            : item.cash + item.transfer
                        )
                      }}
                    </td>
                  </tr>
                </thead>
              </table>
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
import zselectmultiple from "@/components/zselectmultiple";
import zloading from "@/components/zloading";
import zselect from "@/components/zselect";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zselectmultiple,
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
      status_order: "",
      not_status_order: "",
      branchType: [],
      statusOrder: [
        {
          label: "Hold",
          value: "Hold",
        },
        {
          label: "Cancel",
          value: "Cancel",
        },
        {
          label: "Pending",
          value: "Pending",
        },
        {
          label: "Manifest",
          value: "Manifest",
        },
      ],
      branch: "",
      /* Toggle Dialog */
      loading: true,
      loadFetch: false,
      /* Form Value */
      /* Extra Data */
      branchOptions: [],
      branch_type: "",
      status_payment: "",
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
    totalMoney() {
      const sum = this.data?.reduce((a, { amount }) => {
        return a + Number(amount);
      }, 0);
      return sum;
    },
    totalTransfer() {
      let transfer_total = this.data?.reduce(
        (total, num) =>
          num.payment_type !== "" && num.shipment_fee !== ""
            ? total + Number(num.transfer)
            : total + 0,
        0
      );
      return transfer_total;
    },

    totalCash() {
      let total_cash = this.data.reduce(
        (total, num) =>
          num.payment_type !== "" && num.shipment_fee !== ""
            ? total + Number(num.cash)
            : total + 0,
        0
      );
      return total_cash;
    },

    branchList() {
      return this.$store.state.branch.map((item) => {
        return {
          value: item.id,
          label: item.city_name,
        };
      });
    },
  },

  created() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
    this.fetchTypeBranch();
  },
  mounted() {
    // get store dispatch getBranches
    this.$store.dispatch("getBranch");
  },
  methods: {
    async fetchTypeBranch() {
      const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
        headers: this.headers,
      });
      if (getProfile !== undefined) {
        this.branchType = getProfile.data.type_branch.map((item) => {
          return {
            label: item.label,
            value: item.value,
          };
        });
      }
    },

    async getReport() {
      this.data = [];
      let query_params = {};
      this.loadFetch = true;

      if (this.start_date !== "" && this.end_date !== "") {
        this.start_date = this.convertDate(this.start_date);
        this.end_date = this.convertDate(this.end_date);

        query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
          status_order: this.status_order,
          status_payment: this.status_payment,
        };
        let branch_mutiple = [];
        if (this.not_status_order.length > 0) {
          this.not_status_order.map((item) => {
            branch_mutiple.push(item.value);
          });
        }
        query_params.branch_mutiple = branch_mutiple;

        // type branch
        let type_branch = [];
        if (this.branch_type.length > 0) {
          this.branch_type.map((item) => {
            type_branch.push(item.value);
          });
        }

        if (this.profileData.type_user == "Super Admin") {
          query_params.branch = this.branch.value;
        } else if (this.profileData.type_user == "Supervisor") {
          const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
            headers: this.headers,
          });
          if (getProfile !== undefined) {
            let cabang_multiple = [];
            getProfile.data.type_branch.map((item) => {
              cabang_multiple.push(item.value);
            });
            query_params.cabang_multiple = cabang_multiple;
          }

          query_params.type_branch = type_branch;
        } else {
          query_params.branch = this.profileData.branch._id;
        }

        try {
          const response = await axios.get(
            `${api_url}/api/v1/report/finance/get-report`,
            { params: query_params, headers: this.headers }
          );

          this.loadFetch = false;
          this.data = response.data;
        } catch (error) {
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
    async downloadReport() {
      if (this.start_date !== "" && this.end_date !== "") {
        this.start_date = this.convertDate(this.start_date);
        this.end_date = this.convertDate(this.end_date);

        let query_params = {
          start_date: this.start_date,
          end_date: this.end_date,
          status_order: this.status_order,
          status_payment: this.status_payment,
        };
        let branch_mutiple = [];
        if (this.not_status_order.length > 0) {
          this.not_status_order.map((item) => {
            branch_mutiple.push(item.value);
          });
        }
        query_params.branch_mutiple = branch_mutiple;

        let type_branch = [];
        if (this.branch_type.length > 0) {
          this.branch_type.map((item) => {
            type_branch.push(item.value);
          });
        }

        if (this.profileData.type_user == "Super Admin") {
          query_params.branch = this.branch.value;
        } else if (this.profileData.type_user == "Supervisor") {
          query_params.type_branch = type_branch;
        } else {
          query_params.branch = this.profileData.branch._id;
        }
        // if (this.profileData.type_user !== "Super Admin") {
        //   query_params.branch = this.profileData.branch._id;
        // } else {
        //   query_params.branch = this.branch.value;
        // }

        try {
          await axios.get(`${api_url}/api/v1/report/finance/download-report`, {
            params: query_params,
            headers: this.headers,
          });

          // var fileDownload = require('js-file-download');
          // fileDownload(response.data, 'laporan-keuangan.xlsx');

          // window.location.href(`${api_url}/uploads/LaporanKeuangan.xlsx`)

          /* Download File via URL */
          setTimeout(async () => {
            await axios
              .get(`${api_url}/uploads/LaporanKeuangan.xlsx`, {
                responseType: "blob",
              })
              .then((res) => {
                const blob = new Blob([res.data], { type: "application/xlsx" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "LaporanKeuangan.xlsx";
                link.click();
                URL.revokeObjectURL(link.href);
              })
              .catch(console.error);
          }, 3000);
        } catch (error) {
          if (error.message.includes("404") || error.message.includes("500")) {
            // Destroy Data Auth in LocalStorage
            alert("Harap isi tanggal dahulu");
            // window.localStorage.removeItem("token-auth-jaskipin");
            // window.localStorage.removeItem("data-profile-jaskipin");
            // // Redirect to Login Page
            // this.$router.push("/");
          }
        }
      }
    },
    /* Helpers */
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    formatPrice(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(number)
        .replace(",00", "");
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
