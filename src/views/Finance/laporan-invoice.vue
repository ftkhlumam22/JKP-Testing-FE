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
                      <h1 class="font-medium text-center my-3">atau</h1>
                      <div class="w-full">
                        <h4 class="text-sm font-medium mr-2 mb-1">
                          Cabang
                        </h4>
                        <zselect
                          v-model="branch"
                          :data="branchOptions"
                          placeholder="Cabang"
                          @input="refreshData"
                        >
                        </zselect>
                      </div>
                      <h1 class="font-medium text-center my-3">atau</h1>

                      <div class="w-full">
                        <h4 class="text-sm font-medium mr-2 mb-1">
                          Pelanggan
                        </h4>
                        <zselectmultiple
                          v-model="agen_general"
                          :data="agenGeneralOptions"
                          placeholder="Pelanggan"
                          @input="refreshData"
                        >
                        </zselectmultiple>
                      </div>
                      <h1 class="font-medium text-center my-3">atau</h1>
                      <div class="w-full">
                        <h4 class="text-sm font-medium mr-2 mb-1">
                          Agen
                        </h4>
                        <zautocomplete
                          v-model="agen"
                          :data="agenOptions"
                          placeholder="Agen"
                          @input="refreshData"
                          class=""
                        >
                        </zautocomplete>
                      </div>
                      <!-- <zselect
                    class="my-2"
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
                  </zselect> -->
                      <div class="flex items-center">
                        <button
                          @click="
                            branch = '';
                            agen = '';
                            filterDate = '';
                            start_date = '';
                            end_date = '';
                            (agen_general = ''), refreshData();
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

            <div class="lg:w-1/2 w-full">
              <div class="flex" style="float:right">
                <button
                  v-if="selectedItem.length > 0"
                  @click="printInvoice"
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
                  <h4 class="font-semibold">Cetak Invoice</h4>
                </button>
                <!-- invoice modal -->
                <transition
                  enter-active-class="ease-out duration-300"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="opacity-100"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div
                    v-show="confirmModal"
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
                  <detail-modal
                    v-show="confirmModal"
                    @close="confirmModal = false"
                    title="Invoice"
                  >
                    <div class="p-6">
                      <!-- form input -->
                      <div class="mb-6">
                        <div class="flex gird grid-cols-2 gap-4">
                          <div class="w-full flex mb-5">
                            <div class="w-1/2 px-3">
                              <div class="py-4 mb-5">
                                <label
                                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                  No Referensi
                                </label>
                                <input
                                  v-model="referensi"
                                  disabled="disabled"
                                  type="text"
                                  class="w-full cursor-not-allowed border border-gray-200 rounded-md bg-gray-50 p-2"
                                />
                              </div>
                              <div>
                                <label
                                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                  Tanggal Tagihan
                                </label>
                                <input
                                  v-model="payment_date"
                                  type="date"
                                  class="w-full border border-gray-200 rounded-md bg-gray-50 p-2"
                                />
                              </div>
                            </div>
                            <div class="w-1/2 px-3">
                              <div class="py-4 mb-5">
                                <label
                                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                  Nama Agen
                                </label>
                                <template v-if="agen !== ''">
                                  <input
                                    v-model="agen.label"
                                    type="text"
                                    disabled="disabled"
                                    class="w-full cursor-not-allowed border border-gray-200 rounded-md bg-gray-50 p-2"
                                  />
                                </template>
                                <template v-else-if="branch !== ''">
                                  <input
                                    v-model="branch.label"
                                    type="text"
                                    disabled="disabled"
                                    class="w-full cursor-not-allowed border border-gray-200 rounded-md bg-gray-50 p-2"
                                  />
                                </template>
                                <template v-else>
                                  <input
                                    v-if="agen_general !== ''"
                                    v-model="agen_general[0].label"
                                    type="text"
                                    disabled="disabled"
                                    class="w-full cursor-not-allowed border border-gray-200 rounded-md bg-gray-50 p-2"
                                  />
                                </template>
                              </div>

                              <div class="mb-5">
                                <label
                                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                  Tanggal Batas Pembayaran
                                </label>
                                <input
                                  v-model="due_date"
                                  type="date"
                                  class="w-full border border-gray-200 rounded-md bg-gray-50 p-2"
                                />
                              </div>
                              <div class="mt-4">
                                <button
                                  @click="printDataInvoice"
                                  class="py-3 w-full px-6 bg-blue-800 text-white rounded-md shadow"
                                >
                                  Print
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </detail-modal>
                </transition>
                <!-- end modal -->
                <zselect
                  v-model="limit"
                  :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                  placeholder="Jumlah"
                  @input="refreshData"
                  class="w-20"
                >
                </zselect>
              </div>
            </div>
          </div>
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :mutipleCheck="true"
            :TableInputSearchHandler="tableInputSearchHandler"
            @selectedItem="getDataSelectedItem"
          >
            <!-- Custom Field -->
            <template slot="volume" slot-scope="props">
              {{
                (Number(props.item.long) *
                  Number(props.item.wide) *
                  Number(props.item.height)) /
                  5000
              }}
            </template>

            <template slot="cash" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                formatPrice(
                  props.item.total_paid_cash ? props.item.total_paid_cash : 0
                )
              }}</span>
            </template>
            <template slot="amount_paid" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                formatPrice(props.item.amount_paid ? props.item.amount_paid : 0)
              }}</span>
            </template>
            <template slot="awb_no" slot-scope="props">
              <span
                v-if="props.item.awb_no == 0 || props.item.awb_no == ''"
                class="text-red-600 text-md rounded font-semibold"
              >
                (Belum Di Input)
              </span>
              <span v-else class="text-gray-600 text-md rounded font-semibold">
                {{ props.item.awb_no }}
              </span>
            </template>
            <template slot="courier" slot-scope="props">
              <span
                v-if="props.item.courier == ''"
                class="text-red-600 text-md rounded font-semibold"
              >
                (Belum Di Input)
              </span>
              <span v-else class="text-gray-600 text-md rounded font-semibold">
                {{ props.item.courier }}
              </span>
            </template>
            <template slot="cek_agen" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                props.item.cek_agen == "Agen"
                  ? "(Agen) - " + props.item.agen.fullname
                  : "(Pelanggan) - " + props.item.agen_general
              }}</span>
            </template>
            <template slot="createdAt" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                formatTanggal(props.item.createdAt ? props.item.createdAt : "")
              }}</span>
            </template>
            <template slot="branch" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                props.item.branch ? props.item.branch.city_name : "-"
              }}</span>
            </template>
            <template slot="transfer" slot-scope="props">
              <span class="text-gray-600 text-md rounded font-semibold">{{
                formatPrice(
                  props.item.total_paid_transfer
                    ? props.item.total_paid_transfer
                    : 0
                )
              }}</span>
            </template>
            <template slot="status" slot-scope="props">
              <template
                v-if="
                  props.item.total_paid_cash +
                    props.item.total_paid_transfer ===
                    props.item.amount_paid ||
                    props.item.total_paid_cash +
                      props.item.total_paid_transfer >
                      props.item.amount_paid
                "
              >
                <span class="text-green-600 text-md rounded font-semibold"
                  >Lunas</span
                >
              </template>
              <template v-else>
                <span class="text-red-600 text-md rounded font-semibold"
                  >Belum Bayar</span
                >
              </template>
            </template>

            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  v-if="profileData.type_user == 'Super Admin'"
                  @click="bayarPelanggan(props.item.id)"
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
                  <h4 class="font-semibold">Edit Pembayaran</h4>
                </button>
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
        <!-- Form Dialog -->
        <div
          v-show="formDialog"
          class="fixed inset-0 bg-gray-600 bg-opacity-80 transition-opacity"
          aria-hidden="true"
        ></div>
        <transition
          enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <addForm
            v-show="formDialog"
            @close="formDialog = false"
            :title="
              dataSelected.length === 0
                ? 'Ubah Tagihan Piutang'
                : 'Ubah Tagihan Piutang'
            "
            @submit="updateUtangAdmin"
          >
            <div class="space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  No Order
                </label>
                <input
                  v-model="shipment_number"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: JX00001"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tanggal Pembayaran
                </label>
                <input
                  v-model="payment_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Total Bayar
                </label>

                <zinputcurrency
                  v-model="amount_paid"
                  readonly="readonly"
                  :class="
                    total_paid_cash + total_paid_transfer === amount_paid ||
                    total_paid_cash + total_paid_transfer > amount_paid
                      ? 'border border-green-600 rounded-md focus:outline-none focus:border-green-600'
                      : 'border border-red-600 rounded-md'
                  "
                >
                </zinputcurrency>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Bayar Cash
                </label>
                <zinputcurrency v-model="total_paid_cash"></zinputcurrency>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Bayar Transfer
                </label>
                <zinputcurrency v-model="total_paid_transfer"></zinputcurrency>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Jenis Pembayaran
                </label>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_type"
                    value="Cash"
                  />
                  <label class="ml-1">Cash</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_type"
                    value="Transfer"
                  />
                  <label class="ml-1">Transfer</label>
                </div>
                <div
                  v-if="
                    payment_type == 'Transfer' &&
                      profileData.role.access_permission.includes('bank')
                  "
                  class="mt-3"
                >
                  <label
                    id="listbox-label"
                    class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                  >
                    Pilih Bank
                  </label>
                  <zselect
                    v-model="bank"
                    :data="bankOptions"
                    placeholder="Pilih Bank"
                  >
                  </zselect>
                </div>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Status Pembayaran
                </label>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_status"
                    value="Lunas"
                  />
                  <label class="ml-1">Lunas</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_status"
                    value="Belum Bayar"
                  />
                  <label class="ml-1">Belum Bayar</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_status"
                    value="Belum Lunas"
                  />
                  <label class="ml-1">Belum Lunas</label>
                </div>
              </div>
            </div>
          </addForm>
        </transition>
        <!-- Notification -->
        <transition
          enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <notification
            v-show="successNotification"
            :message="
              dataSelected.length === 0
                ? 'Berhasil! Tagihan Mitra baru sudah ditambahkan!'
                : 'Berhasil! Tagihan Mitra sudah diubah!'
            "
            @close="successNotification = false"
          ></notification>
        </transition>
        <!-- Delete Confirm Modal -->

        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zselect from "@/components/zselect";
import zdropdown from "@/components/zdropdown";
import zautocomplete from "@/components/zautocomplete";
import datatable from "@/components/datatables/advance_table";
import detailModal from "@/components/datatables/detail_modal";
// import detailDataModal from "@/components/datatables/detail_modal";
import zselectmultiple from "@/components/zselectmultiple.vue";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
import zinputcurrency from "@/components/zinputcurrency";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    detailModal,
    layouts,
    zdropdown,
    zautocomplete,
    zselect,
    zselectmultiple,
    datatable,
    // detailDataModal,
    addForm,
    notification,
    zinputcurrency,
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
      agen_general: "",
      agenGeneralOptions: [],
      columns: [
        {
          field: "shipment_number",
          label: "No Order",
        },
        {
          field: "createdAt",
          label: "Tanggal Order",
        },
        {
          field: "awb_no",
          label: "AWB No",
        },
        {
          field: "recipient_name",
          label: "Nama Penerima",
        },
        {
          field: "weight",
          label: "Berat",
        },
        {
          field: "volume_total",
          label: "Volume",
        },
        {
          field: "courier",
          label: "Mitra",
        },
        {
          field: "payment_type",
          label: "Pembayaran",
        },
        {
          field: "bank",
          label: "Bank",
        },
        {
          field: "amount_paid",
          label: "Bayar ke Jaskipin",
        },
        {
          field: "cash",
          label: "Cash",
        },
        {
          field: "transfer",
          label: "Transfer",
        },
        {
          field: "cek_agen",
          label: "Agen/Pelanggan",
        },

        {
          field: "status",
          label: "Status",
        },
        {
          field: "branch",
          label: "Cabang",
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
      due_date: "",
      payment_date: "",
      referensi: "",
      transaction: "",
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      confirmModal: false,
      loading: true,
      importModalDialog: false,
      branchOptions: [],
      bankOptions: [],
      agenOptions: [],
      /* Form Value */
      transaction_id: "",
      invoice_number: "",
      cogs: "",
      branch: "",
      shipment_number: "",
      total_amount: "",
      payment_type: "",
      payment_proof: "",
      amount_paid: "",
      status: "",
      bank: "",
      payment_status: "",
      /* Extra Data */
      form_type: "",
      filterDate: "",
      filter_status: "",
      start_date: "",
      end_date: "",
      total_paid_cash: "",
      total_paid_transfer: "",
      agen: "",
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    // this.filterDate = "Bulan Ini";
    // this.selectRangeDate();
    this.getBranch();
    this.getBank();
    this.getListAgen();
    this.getRefInvoice();
    this.fetchAgenGeneral();
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
     * Get Data Method (GET)
     */
    async fetchAgenGeneral() {
      const response = await axios.get(
        `${api_url}/api/v1/transaction/international-order/agen_general`,
        {
          headers: this.headers,
        }
      );
      this.agenGeneralOptions = response.data.map((agen) => {
        return {
          label: agen.agen_general,
          value: agen._id,
        };
      });
    },
    printInvoice() {
      if (this.agen == "" && this.agen_general == "" && this.branch == "") {
        alert("Pilih agen,Cabang / pelanggan terlebih dahulu");
      } else {
        this.confirmModal = true;
      }
    },
    async getRefInvoice() {
      const lastInvoice = await axios.get(
        `${api_url}/api/v1/finance/invoice-agen/latest-invoice`,
        {
          headers: this.headers,
        }
      );
      if (lastInvoice.data.data.length > 0) {
        const str1 = lastInvoice.data.data[0].invoice_number.replace(
          `INV/${new Date().getFullYear()}/`,
          ""
        );
        const str = Number(str1) + 1;
        const stringInvoice = str.toString();
        this.referensi =
          "INV/" +
          new Date().getFullYear() +
          "/" +
          stringInvoice.padStart(5, "00000");
      } else {
        const str1 = "1";
        this.referensi =
          "INV/" + new Date().getFullYear() + "/" + str1.padStart(5, "00000");
      }
    },
    getDataSelectedItem(data) {
      this.selectedItem = data;
      this.$store.commit("setExcludeAgen", data);
      this.$store.commit("setNameAgen", this.agen);
    },
    async printDataInvoice() {
      const data = {
        invoice_number: this.referensi,
        invoice_date: this.payment_date,
        invoice_due_date: this.due_date,
        transaction: this.selectedItem,
      };
      if (this.agen !== "") {
        data.customer = this.agen.label;
      } else if (this.agen_general !== "") {
        data.customer = this.agen_general[0].label.toUpperCase();
      } else {
        data.customer = this.branch.label;
      }
      try {
        if (this.payment_date == "" || this.due_date == "") {
          alert("Tanggal pembayaran harus diisi");
        } else {
          await axios.post(`${api_url}/api/v1/finance/invoice-agen`, data, {
            headers: this.headers,
          });
          this.confirmModal = false;
          window.open("/print/invoice-agen/");
        }
      } catch (error) {
        new Error(error);
      }
    },
    async getBank() {
      let query_params = {
        pagination: false,
      };
      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/bank/admin`,
          {
            headers: this.headers,
            params: query_params,
          }
        );
        console.log("bank", response.data);
        response.data.map((item) => {
          this.bankOptions.push(
            item.bank_name +
              " (" +
              item.account_number +
              ") A.N " +
              item.account_name
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getBranch() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        this.branchOptions.push({
          label: "SEMUA CABANG",
          value: "all",
        });
        response.data.map((item) => {
          this.branchOptions.push({
            label: item.city_name,
            value: item.id,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getListData(page, limit) {
      let query_params = {
        page: page,
        limit: limit,
        pagination: true,
        search: this.search,
        start_date: this.start_date,
        end_date: this.end_date,
        agen: this.agen.value,
      };
      if (this.profileData.type_user === "Super Admin") {
        query_params.branch = this.branch.value;
      } else {
        query_params.branch = this.profileData.branch._id;
      }
      // multiple
      let agen_multiple = [];
      if (this.agen_general.length > 0) {
        this.agen_general.map((item) => {
          agen_multiple.push(item.label.toUpperCase());
        });
      }
      query_params.agen_multiple = agen_multiple;

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/utang-admin`,
          { params: query_params, headers: this.headers }
        );
        console.log("admin :", response);
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
    async bayarPelanggan(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/utang-admin/${id}`,
          { headers: this.headers }
        );
        this.formDialog = true;
        this.shipment_number = response.data.data[0].shipment_number;
        this.amount_paid = response.data.data[0].amount_paid;
        this.payment_date = this.formatDate(
          response.data.data[0].payment_date
            ? response.data.data[0].payment_date
            : new Date()
        );
        this.payment_type = response.data.data[0].payment_type;
        this.bank = response.data.data[0].bank;
        this.payment_status = response.data.data[0].payment_status;
        this.total_paid_cash = response.data.data[0].total_paid_cash;
        this.total_paid_transfer = response.data.data[0].total_paid_transfer;
        this.transaction_id = response.data.data[0].id;
      } catch (error) {
        console.log(error);
      }
    },

    async updateUtangAdmin() {
      let data = {
        shipment_number: this.shipment_number,
        amount_paid: this.amount_paid,
        total_amount: this.total_amount,
        payment_date: this.payment_date,
        payment_type: this.payment_type,
        bank: this.bank,
        payment_status: this.payment_status,
        total_paid_cash: this.total_paid_cash,
        total_paid_transfer: this.total_paid_transfer,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/finance/utang-admin/update/${this.transaction_id}`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.formDialog = false;
        this.successNotification = true;

        /* Set Data Empty */
        this.emptyFormData();

        /* Refresh Data */
        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
    },

    async getListAgen() {
      let query_params = {
        pagination: false,
      };

      try {
        const responseListAgen = await axios.get(
          `${api_url}/api/v1/users/user`,
          { params: query_params, headers: this.headers }
        );
        console.log("nama agen:", responseListAgen);
        responseListAgen.data.map((item) => {
          if (item.type_user === "Agen") {
            this.agenOptions.push({
              label: item.fullname + ` - [ AGEN ${item.branch.city_name} ]`,
              value: item.id,
            });
          }
        });
      } catch (error) {
        console.log(error);
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
    /*
     * Get by Id & Update Method
     */

    refreshData() {
      this.getListData(this.page, this.limit);
    },
    /* Helpers */
    formatPrice(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(number)
        .replace(",00", "");
    },
    formatTanggal(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
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
