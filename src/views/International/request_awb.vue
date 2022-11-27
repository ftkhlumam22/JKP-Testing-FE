<template>
  <layouts>
    <template #content>
      <div class="bg-gray-100 h-auto">
        <div class="container px-4 py-10 mx-auto">
          <board
            :data="data.data"
            :dataAgen="dataAgen"
            :dataKurir="dataKurir"
            :dataCabang="dataCabang"
            :dataWarehouse="dataWarehouse"
            :dataMitra="dataMitra"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
            :totalOrder="totalOrder"
            :totalShipmentFee="totalShipmentFee"
            @show="detailOrder"
            @selectRangeDate="selectRangeDate"
            @resetData="resetData"
            @refreshData="refreshData"
            @filterStartDate="filterStartDate"
            @filterEndDate="filterEndDate"
            @filterCourier="filterCourier"
            @filterDestination="filterDestination"
            @filterStatusOrder="filterStatusOrder"
            @filterLimitOrder="filterLimitOrder"
            @filterManifestDate="filterManifestDate"
            @filterAgen="filterAgen"
            @filterAdmin="filterAdmin"
            @filterPaymentMethod="filterPaymentMethod"
            @filterBranch="filterBranch"
            @searchNoOrder="searchNoOrder"
            @searchAWBNo="searchAWBNo"
            @searchRecipientName="searchRecipientName"
          >
          </board>
        </div>

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
            title="Detail Transaksi International"
            desc="Informasi transaksi pengiriman ke luar negeri"
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
                  No Order/Shipment Number
                </dt>
                <dd
                  class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
                >
                  {{
                    dataSelected.shipment_number
                      ? dataSelected.shipment_number
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Status Order
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  <template v-if="dataSelected.status_order">
                    <span
                      v-if="dataSelected.status_order === 'Hold'"
                      class="bg-blue-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="dataSelected.status_order === 'Cancel'"
                      class="bg-red-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="dataSelected.status_order === 'Pending'"
                      class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="dataSelected.status_order === 'Manifest'"
                      class="bg-green-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                  </template>
                  <template v-else>
                    -
                  </template>
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Posisi Pesanan
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  <span v-if="dataSelected.position_order">
                    {{
                      dataSelected.position_order === "Agen"
                        ? "Agen/Kurir"
                        : dataSelected.position_order
                    }}
                  </span>
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.sender_name ? dataSelected.sender_name : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.sender_address
                      ? dataSelected.sender_address
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Handphone Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.sender_phone ? dataSelected.sender_phone : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Penerima
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.recipient_name
                      ? dataSelected.recipient_name
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat Penerima
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.recipient_address
                      ? dataSelected.recipient_address
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Negara
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.recipient_destination
                      ? dataSelected.recipient_destination
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Kode POS
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.recipient_postal_code
                      ? dataSelected.recipient_postal_code
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Handphone Penerima
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.recipient_phone
                      ? dataSelected.recipient_phone
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Mitra Ekspedisi
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.courier ? dataSelected.courier : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  AWB No/No Resi
                </dt>
                <dd
                  class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
                >
                  {{
                    dataSelected.awb_no
                      ? dataSelected.awb_no
                      : "(Belum Diinput)"
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
                  {{ dataSelected.weight ? dataSelected.weight + "kg" : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Jumlah Koli
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.bag_amount ? dataSelected.bag_amount : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Jenis Layanan
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.service_type ? dataSelected.service_type : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Volume (cm)
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  <template
                    v-if="
                      dataSelected.long &&
                        dataSelected.wide &&
                        dataSelected.height
                    "
                  >
                    {{ dataSelected.long ? dataSelected.long : "-" }}
                    x
                    {{ dataSelected.long ? dataSelected.wide : "-" }}
                    x
                    {{ dataSelected.long ? dataSelected.height : "-" }}
                  </template>
                  <template v-else>
                    <h4
                      v-for="(item, index) in dataSelected.detail_volume"
                      :key="index"
                    >
                      {{ item.panjang ? item.panjang : "-" }}
                      x
                      {{ item.panjang ? item.lebar : "-" }}
                      x
                      {{ item.panjang ? item.lebar : "-" }}
                    </h4>
                  </template>
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Ongkos Kirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.shipment_fee
                      ? "Rp" + formatPrice(dataSelected.shipment_fee)
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Pickup
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.pickup_by ? dataSelected.pickup_by : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Agen
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.agen
                      ? dataSelected.agen.fullname
                      : dataSelected.agen_general
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Deskripsi Paket
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  <h4
                    v-for="(item, index) in dataSelected.detail_item"
                    :key="index"
                  >
                    {{ item.code ? item.code : "" }}
                    {{ item.item_name ? item.item_name : "" }}
                    {{ item.qty ? item.qty : "" }}
                    {{ item.unit ? item.unit : "" }}
                    {{ item.total_value ? formatPrice(item.total_value) : "" }}
                  </h4>
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Tipe Pembayaran
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.payment_type ? dataSelected.payment_type : "-"
                  }}
                </dd>
              </div>
              <div
                v-if="dataSelected.payment_type === 'Transfer'"
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Tujuan Bank
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.bank ? dataSelected.bank : "-" }}
                </dd>
              </div>
              <div
                v-if="dataSelected.payment_type === 'Transfer'"
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Keterangan Pembayaran
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.payment_info ? dataSelected.payment_info : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Total Bayar
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.amount_paid
                      ? "Rp" + formatPrice(dataSelected.amount_paid)
                      : "-"
                  }}
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
import board from "@/components/international/board";
import detailDataModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    board,
    detailDataModal,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataAgen: [],
      dataKurir: [],
      dataCabang: [],
      dataWarehouse: [],
      dataMitra: [],
      /* Pagination */
      page: 1,
      limit: 50,
      /* Filter */
      search: "",
      start_date: "",
      end_date: "",
      courier: "",
      destination: "",
      status_order: "",
      manifest_date: "",
      agen: "",
      admin: "",
      payment_method: "",
      branch: "",
      search_no_order: "",
      search_awb_no: "",
      search_recipient_name: "",
      /* Toggle Dialog */
      detailModal: false,
      loading: true,
      /* Extra */
      dataSelected: [],
      totalOrder: {},
      totalShipmentFee: [],
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
    if (this.$route.query.shipment_number) {
      this.search_no_order = this.$route.query.shipment_number;
    }
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.getTotalShipmentFee();
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
        courier: this.courier,
        destination: this.destination,
        status_order: this.status_order,
        manifest_date: this.manifest_date,
        agen: this.agen,
        admin: this.admin,
        payment_method: this.payment_method,
        search_no_order: this.search_no_order.toUpperCase(),
        search_awb_no: this.search_awb_no.toUpperCase(),
        search_recipient_name: this.search_recipient_name,
        awb_filter: "request_awb",
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
          this.profileData.type_user !== "Gudang Pusat" &&
          this.profileData.type_user !== "CS Pusat" &&
          this.profileData.type_user !== "Finance" &&
          this.profileData.type_user !== "Akunting" &&
          this.profileData.type_user !== "Master Agen"
        ) {
          query_params.branch = this.profileData.branch._id;
        } else {
          let branch_mutiple = [];
          if (this.branch.length > 0) {
            this.branch.map((item) => {
              branch_mutiple.push(item.value);
            });
          }
          query_params.branch_mutiple = branch_mutiple;
        }

        // if(this.profileData.type_user == 'Admin Pusat' || this.profileData.type_user == 'Admin Cabang') {
        //     query_params.input_by = this.profileData.id;
        // }

        if (this.profileData.type_user == "Master Agen") {
          query_params.master_agen = this.profileData.id;
          query_params.input_by = this.profileData.id;
        }
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-filter`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.data = response.data;

        /* Get Total Order */
        this.totalOrder = await this.getTotalOrder();

        this.getListDataByPositionOrder("Agen", query_params);
        this.getListDataByPositionOrder("Kurir", query_params);
        this.getListDataByPositionOrder("Cabang", query_params);
        this.getListDataByPositionOrder("Warehouse", query_params);
        this.getListDataByPositionOrder("Mitra", query_params);

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
    async getListDataByPositionOrder(type, query_params) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-filter/${type}`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        switch (type) {
          case "Agen":
            this.dataAgen = response.data.data;
            break;

          case "Kurir":
            this.dataKurir = response.data.data;
            break;

          case "Cabang":
            this.dataCabang = response.data.data;
            break;

          case "Warehouse":
            this.dataWarehouse = response.data.data;
            break;

          case "Mitra":
            this.dataMitra = response.data.data;
            break;

          default:
            break;
        }
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
    refreshData() {
      this.getListData(this.page, this.limit);
    },
    resetData() {
      this.search = "";
      this.filterDate = "";
      this.start_date = "";
      this.end_date = "";
      this.courier = "";
      this.destination = "";
      this.status_order = "";
      this.manifest_date = "";
      this.agen = "";
      this.admin = "";
      this.payment_method = "";
      this.search_no_order = "";
      this.search_awb_no = "";
      this.search_recipient_name = "";
      this.refreshData();
    },
    filterStartDate(value) {
      this.start_date = value;
      this.refreshData();
    },
    filterEndDate(value) {
      this.end_date = value;
      this.refreshData();
    },
    filterCourier(value) {
      this.courier = value;
      this.refreshData();
    },
    filterDestination(value) {
      this.destination = value;
      this.refreshData();
    },
    filterStatusOrder(value) {
      this.status_order = value;
      this.refreshData();
    },
    filterLimitOrder(value) {
      this.limit = value;
      this.refreshData();
    },
    filterManifestDate(value) {
      this.manifest_date = value;
      this.refreshData();
    },
    filterAgen(value) {
      this.agen = value;
      this.refreshData();
    },
    filterAdmin(value) {
      this.admin = value;
      this.refreshData();
    },
    filterPaymentMethod(value) {
      this.payment_method = value;
      this.refreshData();
    },
    filterBranch(value) {
      this.branch = value;
      this.refreshData();
    },
    searchNoOrder(value) {
      this.search_no_order = value;
      this.refreshData();
    },
    searchAWBNo(value) {
      this.search_awb_no = value;
      this.refreshData();
    },
    searchRecipientName(value) {
      this.search_recipient_name = value;
      this.refreshData();
    },
    selectRangeDate(value) {
      let date = new Date();
      let firstDay;
      let lastDay;

      switch (value) {
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
    convertDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    async getTotalOrder() {
      let query_params = {
        search: this.search,
        start_date: this.start_date,
        end_date: this.end_date,
        courier: this.courier,
        destination: this.destination,
        status_order: this.status_order,
        manifest_date: this.manifest_date,
        agen: this.agen,
        admin: this.admin,
        payment_method: this.payment_method,
        search_no_order: this.search_no_order.toUpperCase(),
        search_awb_no: this.search_awb_no.toUpperCase(),
        search_recipient_name: this.search_recipient_name,
        awb_filter: "request_awb",
      };

      if (
        this.profileData.type_user !== "Super Admin" &&
        this.profileData.type_user !== "Gudang Pusat" &&
        this.profileData.type_user !== "CS Pusat" &&
        this.profileData.type_user !== "Finance" &&
        this.profileData.type_user !== "Akunting" &&
        this.profileData.type_user !== "Master Agen"
      ) {
        query_params.branch = this.profileData.branch._id;
      } else {
        let branch_mutiple = [];
        if (this.branch.length > 0) {
          this.branch.map((item) => {
            branch_mutiple.push(item.value);
          });
        }
        query_params.branch_mutiple = branch_mutiple;
      }

      // if(this.profileData.type_user == 'Admin Pusat' || this.profileData.type_user == 'Admin Cabang') {
      //     query_params.input_by = this.profileData.id;
      // }

      if (this.profileData.type_user == "Master Agen") {
        query_params.master_agen = this.profileData.id;
        query_params.input_by = this.profileData.id;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-total-order`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        return response.data.data;
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
    async getTotalShipmentFee() {
      let query_params = {};

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-total-shipment-fee`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.totalShipmentFee = response.data.data;
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
  },
};
</script>

<style scoped></style>
