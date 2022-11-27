<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-center justify-between mb-6">
            <div class="lg:w-1/2 w-full flex">
              <input
                v-model="search"
                @input="tableInputSearchHandler($event)"
                type="text"
                class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
                placeholder="Pencarian.."
              />
              <div
                class="lg:w-1/2 w-full"
                v-if="profileData.type_user.includes('Super Admin')"
              >
                <zdropdown text="Filter Transaksi" class="mt-1 ml-3">
                  <template v-slot:item>
                    <div class="py-6 px-6">
                      <div class="flex justify-between">
                        <div class="w-1/2 mx-1">
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
                        <div class="w-1/2 mx-1">
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
                            branch = '';
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
          </div>
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="jumlah" slot-scope="props">
              {{ formatPrice(jumlahTotal(props.item.transaction)) }}
            </template>
            <template slot="count" slot-scope="props">
              {{ props.item.transaction.length }}
            </template>
            <template slot="sisa" slot-scope="props">
              {{
                jumlahTotal(props.item.transaction) !==
                jumlahSisa(props.item.transaction)
                  ? formatPrice(jumlahTotal(props.item.transaction))
                  : formatPrice(0)
              }}
            </template>
            <template slot="status" slot-scope="props">
              <span
                class="px-4 py-1 mr-4 mt-2 text-sm text-gray-900 bg-gray-100 rounded-lg sm:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300"
                ><span class="text-red-700 mr-4">{{
                  jumlahStatus(props.item.transaction).unpaid
                }}</span
                >Unapaid</span
              >
              <span
                class="px-4 py-1 mt-2 text-sm text-gray-900 bg-gray-100 rounded-lg sm:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300"
                ><span class="text-green-700 mr-4">{{
                  jumlahStatus(props.item.transaction).paid
                }}</span
                >Paid</span
              >
            </template>

            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  v-if="profileData.type_user == 'Super Admin'"
                  @click="detailInvoice(props.item)"
                  class="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
                  style="font-size: 11px"
                >
                  <svg
                    class="w-4 h-4 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M8.999,17H7v-1.999 l5.53-5.522l1.999,1.999L8.999,17z M15.472,10.535l-1.999-1.999l1.524-1.523l1.999,1.999L15.472,10.535z"
                    ></path>
                  </svg>
                  <h4 class="font-semibold">Detail</h4>
                </button>
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
        <!-- Form Dialog -->
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
            title="Detail Invoice"
            @close="
              detailModal = false;
              dataSelected = [];
            "
          >
            <!-- Info Agen -->
            <div class="w-full py-6">
              <dl>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Invoice
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{
                      dataSelected.invoice_number
                        ? dataSelected.invoice_number
                        : "-"
                    }}
                  </dd>
                </div>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Nama Agen
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{ dataSelected.customer ? dataSelected.customer : "-" }}
                  </dd>
                </div>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Alamat
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{
                      dataSelected.transaction
                        ? dataSelected.transaction[0].input_by.address
                        : "-"
                    }}
                  </dd>
                </div>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Telepon
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{
                      dataSelected.transaction
                        ? dataSelected.transaction[0].input_by.phone
                        : "-"
                    }}
                  </dd>
                </div>
              </dl>
            </div>
            <!-- Detail Transaksi -->
            <div class="w-full overflow-x-auto h-80">
              <table class="min-w-full bg-gray-100">
                <thead class="bg-blue-800 text-white">
                  <tr>
                    <th
                      class="text-left py-3 px-6 uppercase font-semibold text-xs"
                    >
                      Tanggal Bayar
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
                      Hutang
                    </th>
                    <th
                      class="text-left py-3 px-6 uppercase font-semibold text-xs"
                    >
                      Keterangan
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
                  <template v-for="(item, index) in dataSelected.transaction">
                    <tr :key="index">
                      <td class="text-left py-3 px-6 text-xs">
                        {{
                          formatDate(item.payment_date)
                            ? formatDate(item.payment_date)
                            : "-"
                        }}
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
                            ? "Rp" + formatPrice(item.shipment_fee)
                            : "Rp" + 0
                        }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{
                          item.amount_paid && item.amount_paid !== null
                            ? "Rp" + formatPrice(item.amount_paid)
                            : "Rp" + 0
                        }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{
                          item.total_paid_cash && item.total_paid_cash !== null
                            ? "Rp" + formatPrice(item.total_paid_cash)
                            : "Rp" + 0
                        }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{
                          item.total_paid_transfer &&
                          item.total_paid_transfer !== null
                            ? "Rp" + formatPrice(item.total_paid_transfer)
                            : "Rp" + 0
                        }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{ "Rp." + formatPrice(totalHutang(item)) }}
                      </td>

                      <td class="text-left py-3 px-6 text-xs">
                        {{ item.payment_info ? item.payment_info : "-" }}
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
            <template v-if="selectedItem.length > 0">
              <hr />
              <div class="px-6 py-6 h-80 overflow-y-auto">
                <h4 class="text-base font-semibold mb-4">Bayar Order</h4>
                <table class="border border-gray-300 table-auto">
                  <thead>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      No Order
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Total yang harus dibayar
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Total bayar (Cash)
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Total bayar (Transfer)
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Pembayaran
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Bank
                    </th>
                    <th class="px-3 py-2 bg-gray-200 text-sm font-semibold">
                      Tanggal Pembayaran
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
                          v-model="item.total_paid_cash"
                          class="border-2 border-gray-300 px-3 py-1.5 rounded-md focus:outline-none hover:border-gray-400 text-sm"
                        />
                      </td>
                      <td class="px-3 py-2 text-sm">
                        <input
                          type="number"
                          v-model="item.total_paid_transfer"
                          class="border-2 border-gray-300 px-3 py-1.5 rounded-md focus:outline-none hover:border-gray-400 text-sm"
                        />
                      </td>
                      <td class="px-3 py-2 text-sm">
                        <zselect
                          :data="[
                            {
                              value: 'Cash',
                              label: 'Cash',
                            },
                            {
                              value: 'Transfer',
                              label: 'Transfer',
                            },
                          ]"
                          v-model="item.payment_type"
                          placeholder="Piih Pembayaran"
                        ></zselect>
                      </td>
                      <td class="px-3 py-2 text-sm">
                        <zselect
                          :data="bankOptions"
                          v-model="item.bank"
                          placeholder="Piih Bank"
                        ></zselect>
                      </td>
                      <td class="px-3 py-2 text-sm">
                        <input
                          type="date"
                          v-model="item.payment_date"
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
                  Bayar Sekarang
                </button>
              </div>
            </template>
          </detailDataModal>
        </transition>

        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
// import zselect from "@/components/zselect";
import zdropdown from "@/components/zdropdown";
// import zautocomplete from "@/components/zautocomplete";
import datatable from "@/components/datatables/advance_table";
import detailDataModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { formatDate, formatDateNumeric, formatPrice } from "@/helpers/helper";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zdropdown,
    detailDataModal,
    // zautocomplete,
    // zselect,
    datatable,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: [],
      selectedItem: [],
      dataSelectedType: "",
      columns: [
        {
          field: "invoice_number",
          label: "No Invoice",
        },
        {
          field: "customer",
          label: "Customer",
        },
        {
          field: "count",
          label: " Transaksi",
        },
        {
          field: "jumlah",
          label: "Jumlah",
        },
        {
          field: "sisa",
          label: "Jumlah Terhutang",
        },
        {
          field: "status",
          label: "Status",
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
      detailModal: false,
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      loading: true,
      importModalDialog: false,
      /* Extra Data */
      form_type: "",
      filterDate: "",
      filter_status: "",
      start_date: "",
      end_date: "",
      agen: "",
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    // this.filterDate = "Bulan Ini";
    // this.selectRangeDate();
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
  methods: {
    /*
     * Get Data Method
     */
    // format helpers
    formatDate,
    formatDateNumeric,
    formatPrice,

    async detailInvoice(item) {
      this.dataSelected = item;
      this.dataSelectedType = "detail";
      this.detailModal = true;
    },
    async getListData(page, limit) {
      let query_params = {
        page: page,
        limit: limit,
        pagination: true,
        search: this.search,
        start_date: this.start_date,
        end_date: this.end_date,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/invoice-agen/list-invoice`,
          { params: query_params, headers: this.headers }
        );
        console.log("list invoice :", response);
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
    jumlahStatus(transaction) {
      let paid = 0;
      let unpaid = 0;
      transaction.map((item) => {
        if (item.payment_status === "Lunas") {
          paid += 1;
        } else {
          unpaid += 1;
        }
      });
      return {
        unpaid: unpaid,
        paid: paid,
      };
    },
    jumlahSisa(transaction) {
      let x_total_paid_cash = 0;
      let x_total_paid_transfer = 0;
      let x_amount_paid = 0;
      transaction.map((item) => {
        if (
          item.total_paid_cash !== null &&
          item.total_paid_cash !== undefined
        ) {
          x_total_paid_cash =
            Number(x_total_paid_cash) + Number(item.total_paid_cash);
        }
        if (
          item.total_paid_transfer !== null &&
          item.total_paid_transfer !== undefined
        ) {
          x_total_paid_transfer =
            Number(x_total_paid_transfer) + Number(item.total_paid_transfer);
        }
        if (item.amount_paid !== null && item.amount_paid !== undefined) {
          x_amount_paid = Number(x_amount_paid) + Number(item.amount_paid);
        }
      });
      return Number(x_total_paid_cash) + Number(x_total_paid_transfer);
    },
    jumlahTotal(transaction) {
      let x_amount_paid = 0;
      transaction.map((item) => {
        if (item.amount_paid !== null && item.amount_paid !== undefined) {
          x_amount_paid = Number(x_amount_paid) + Number(item.amount_paid);
        }
      });
      return Number(x_amount_paid);
    },
    totalHutang(item) {
      let x_total_paid_cash = 0;
      let x_total_paid_transfer = 0;
      let x_amount_paid = 0;
      if (item.total_paid_cash !== null && item.total_paid_cash !== undefined) {
        x_total_paid_cash =
          Number(x_total_paid_cash) + Number(item.total_paid_cash);
      }
      if (
        item.total_paid_transfer !== null &&
        item.total_paid_transfer !== undefined
      ) {
        x_total_paid_transfer =
          Number(x_total_paid_transfer) + Number(item.total_paid_transfer);
      }
      if (item.amount_paid !== null && item.amount_paid !== undefined) {
        x_amount_paid = Number(x_amount_paid) + Number(item.amount_paid);
      }
      return (
        Number(x_amount_paid) -
        (Number(x_total_paid_cash) + Number(x_total_paid_transfer))
      );
    },
    /*
     * Get by Id & Update Method
     */

    refreshData() {
      this.getListData(this.page, this.limit);
    },
    /* Helpers */

    emptyFormData() {
      this.start_date = "";
      this.end_date = "";
      this.invoice_number = "";
      this.awb = "";
      this.total_amount = "";
      this.courier = "";
      this.payment_date = "";
      this.payment_proof = "";
      this.status = "Pending";
    },
    handleSubmit() {
      if (this.form_type === "update") {
        this.updateUtangMitra();
      } else {
        this.createUtangMitra();
      }
    },
  },
};
</script>

<style scoped></style>
