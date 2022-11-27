<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
    <div class="container px-4 py-10 mx-auto max-w-7xl">
      <div class="flex items-center justify-between mb-6">
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
          <zselect
            class="mx-6 mt-4"
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
        </div>
        <div class="flex items-center">
          <button
            @click="importModalDialog = true"
            class="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-semibold text-white rounded-md focus:outline-none mr-2 flex items-center ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Import Data
          </button>
        </div>
      </div>
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                <div class="flex items-center">
                  <div>Mitra Ekspedisi</div>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                <div class="flex items-center">
                  <div>Total Transaksi</div>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                <div class="flex items-center">
                  <div>Aksi</div>
                </div>
              </th>
            </tr>
          </thead>
          <template v-if="data.length > 0">
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="(item, index) in data"
                :key="index"
                class="text-sm font-medium"
              >
                <td class="px-6 py-3 whitespace-nowrap">
                  {{ item.mitra }}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{ item.total }}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  <button
                    @click="bayarHpp(item.mitra)"
                    class="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
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
                    <h4 class="font-semibold">Ubah HPP</h4>
                  </button>
                </td>
              </tr>
            </tbody>
          </template>
          <template v-else>
            <div class="text-gray-700 py-5 px-3 flex justify-center">
              Data {{ this.filterDate }} Kosong
            </div>
          </template>
        </table>
        <div
          v-show="loading"
          class="h-10 bg-gray-200 px-4 py-4 text-gray-600 animate-pulse w-full"
        >
          loading
        </div>
      </div>

      <!-- modal detail -->
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
          title="Detail Pembayaran Hpp"
          @close="detailModal = false"
        >
          <!-- Info Member -->
          <div class="w-full py-6">
            <div class="px-8">
              <tr>
                <td class="text-sm font-medium text-gray-500">
                  Mitra Expedisi
                </td>
                <td class="px-3">:</td>
                <td class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                  {{
                    dataSelected.length > 0 && dataSelected[0].courier
                      ? dataSelected[0].courier
                      : "-"
                  }}
                </td>
              </tr>
              <tr>
                <td class="text-sm font-medium text-gray-500">
                  Total Transaksi
                </td>
                <td class="px-3">:</td>
                <td class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                  {{ dataSelected.length }}
                </td>
              </tr>
            </div>
          </div>
          <div class="w-full overflow-x-auto h-80">
            <table class="min-w-full bg-gray-100">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    <input
                      type="checkbox"
                      class="w-3 h-3"
                      v-model="selectAllItem"
                      @click="selectItem"
                    />
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    No Transaksi
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    AWB (Resi)
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Ongkir
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Bayar ke Jaskipin
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Sudah Bayar (Cash)
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Sudah Bayar (Transfer)
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Tanggal
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Keterangan
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Tgl Pembayaran
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Nama Penerima
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Negara Tujuan
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Cabang
                  </th>
                  <th
                    class="text-left py-3 px-6 uppercase font-semibold text-xs"
                  >
                    Pembayaran
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <template>
                  <tr v-for="(item, index) in dataSelected" :key="index">
                    <td class="text-left py-3 px-6 text-xs">
                      <input
                        type="checkbox"
                        class="w-3 h-3"
                        :value="item"
                        v-model="selectedItem"
                      />
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.shipment_number }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.awb_no ? item.awb_no : "(Belum Diinput)" }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.shipment_fee
                          ? "Rp." + formatPrice(item.shipment_fee)
                          : "Rp." + 0
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.amount_paid
                          ? "Rp." + formatPrice(item.amount_paid)
                          : "Rp." + 0
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.total_paid_cash && item.total_paid_cash !== null
                          ? "Rp." + formatPrice(item.total_paid_cash)
                          : "Rp." + 0
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.total_paid_transfer &&
                        item.total_paid_transfer !== null
                          ? "Rp." + formatPrice(item.total_paid_transfer)
                          : "Rp." + 0
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.createdAt ? formatDate(item.createdAt) : "-" }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.payment_info ? item.payment_info : "-" }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.payment_date ? formatDate(item.payment_date) : "-"
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.recipient_name ? item.recipient_name : "-" }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{
                        item.recipient_destination
                          ? item.recipient_destination
                          : "-"
                      }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.branch ? item.branch.city_name : "-" }}
                    </td>
                    <td class="text-left py-3 px-6 text-xs">
                      {{ item.payment_status ? item.payment_status : "-" }}
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <div
            class="px-6"
            :class="
              selectedItem.length > 0 ? 'w-full overflow-x-auto h-80' : ''
            "
          >
            <template v-if="selectedItem.length > 0">
              <hr />
              <div class="px-6 py-6">
                <h4 class="text-base font-semibold mb-4">Bayar Order</h4>
                <table class="border border-gray-300 w-full">
                  <thead>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      No Order
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Total yang harus dibayar
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Basic Rate
                    </th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in selectedItem" :key="index">
                      <td class="px-3 py-2 text-sm">
                        {{ item.shipment_number }}
                      </td>
                      <td class="px-3 py-2 text-sm">
                        Rp{{ formatPrice(item.amount_paid) }}
                      </td>
                      <td class="px-3 py-2 text-sm">
                        <input
                          type="number"
                          v-model="item.basic_rate"
                          class="border-2 border-gray-300 px-3 py-1.5 rounded-md focus:outline-none hover:border-gray-400 text-sm"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  @click="bayarSekarang"
                  class="mt-5 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 font-medium focus:outline-none rounded-md text-sm"
                >
                  Ubah Hpp
                </button>
              </div>
            </template>
          </div>
          <!-- Detail Transaksi -->
        </detailDataModal>
      </transition>
      <!-- modal import -->
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="importModalDialog"
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
          v-show="importModalDialog"
          title="Import Pembayaran Hpp"
          @close="importModalDialog = false"
        >
          <div class="p-6">
            <div class="flex items-center space-x-2">
              <div class="w-1/2">
                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Mulai:</h4>
                <input
                  v-model="start_date"
                  class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                />
              </div>
              <div class="w-1/2">
                <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Akhir:</h4>
                <input
                  v-model="end_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                />
              </div>
            </div>
            <div class="my-3">
              <h4 class="text-sm font-medium mt-2 mb-1">Mitra Expedisi:</h4>
              <zautocomplete
                v-model="courier"
                :data="courierData"
                placeholder="Pilih Courier"
                @input="refreshData"
                class="mt-2"
              >
              </zautocomplete>
            </div>
            <div class="my-6">
              <div class="pt-2">
                <!-- <a href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1629819845/template-csv/Template_Biaya_Operasional_-_Sheet1_2_d7iarw.csv" target="_blank" class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2" download>Download Template CSV</a> -->
                <button
                  @click="exportPembayaranHpp"
                  target="_blank"
                  class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2"
                >
                  Download Template CSV
                </button>
              </div>
            </div>
            <div>
              <h1 class="mb-2">Upload File CSV</h1>
              <input
                id="upload-csv"
                accept="image/*"
                class="hidden"
                type="file"
                @change="importPembayaranHpp($event)"
              />
              <label
                for="upload-csv"
                type="button"
                class="cursor-pointer focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-sm text-gray-600 bg-white hover:bg-gray-100 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-flex flex-shrink-0 w-4 h-4 -mt-1 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Upload CSV
              </label>
            </div>
          </div>
        </detailDataModal>
      </transition>
    </div>
  </div>
    </template>
  </layouts>
</template>
<script>
import layouts from "@/components/layouts.vue";
import zselect from "@/components/zselect.vue";
import zautocomplete from "@/components/zautocomplete.vue";
import detailDataModal from "@/components/datatables/detail_modal";

import { api_url } from "../../config/api";
import axios from "axios";
export default {
  components: {
    zautocomplete,
    zselect,
    layouts,
    detailDataModal,
  },
  data() {
    return {
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      data: [],
      dataSelected: [],
      selectedItem: [],
      courierData: [],
      selectAllItem: false,
      loading: true,
      detailModal: false,
      importModalDialog: false,
      start_date: "",
      end_date: "",
      filterDate: "",
      courier: "",
    };
  },
  created() {
    this.getData();
    this.filterDate = "Bulan Ini";
    this.selectRangeDate();
    this.courierOptions();
  },
  methods: {
    refreshData() {
      this.getData();
    },
    // fetch data with axios
    async getData() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };
      try {
        const response = await axios.get(`${api_url}/api/v1/finance/hpp`, {
          params: query_params,
          headers: this.headers,
        });
        this.loading = false;
        this.data = response.data.data;
        console.log("data", response.data);
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
    async bayarHpp(courier) {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        courier: courier,
      };
      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/hpp/detail-list`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.detailModal = true;
        this.dataSelected = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async courierOptions() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/courier/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log("mitra", response);
        response.data.map((item) => {
          this.courierData.push({
            label: item.courier_name,
            value: item.id,
          });
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

    async bayarSekarang() {
      let pushData = [];

      this.selectedItem.map((item) => {
        pushData.push({
          id: item.id,
          amount_paid: item.amount_paid,
          basic_rate: parseInt(item.basic_rate),
        });
      });
      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/hpp/pay`,
          pushData,
          { headers: this.headers }
        );
        console.log(response);

        /* Refresh Data */
        window.location.reload();
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
    /* Export HPP */
    async exportPembayaranHpp() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        courier: this.courier.label,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/hpp/export`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        var fileDownload = require("js-file-download");
        return fileDownload(
          response.data,
          `template-hpp-${this.courier.label}.csv`
        );
      } catch (error) {
        console.log(error);
      }
    },
    /* Import HPP */
    async importPembayaranHpp(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/hpp/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.importModalDialog = false;
        this.successNotification = true;

        /* Refresh Data */
        window.location.reload();
        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
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

    selectItem() {
      this.selectedItem = [];
      if (!this.selectAllItem) {
        for (let i in this.dataSelected) {
          this.selectedItem.push(this.dataSelected[i]);
          console.log(this.dataSelected[i]);
        }
      }
    },

    // helper
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
    formatDate(date) {
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
