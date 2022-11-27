<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
    <div class="container px-4 py-10 mx-auto max-w-7xl">
      <div class="flex item-center space-x-4 mb-8">
        <div
          class="lg:w-1/2 w-full bg-white  border border-blue-500 shadow-md rounded-md px-6 py-4 text-center"
        >
          <h4 class="text-base font-medium mb-2">
            Pembayaran Mitra
          </h4>
          <h1 class="text-xl font-semibold text-blue-800">
            {{ formatPrice(pembayaranMitra) }}
          </h1>
        </div>
        <div
          class="lg:w-1/2 w-full bg-white  border border-blue-500 shadow-md rounded-md px-6 py-4 text-center"
        >
          <h4 class="text-base font-medium mb-2">
            Hutang Mitra
          </h4>
          <h1 class="text-xl font-semibold text-blue-800">
            {{ formatPrice(totalHutang) }}
          </h1>
        </div>
      </div>
      <div class="flex items-center justify-between mb-6">
        <div class="lg:w-1/2 w-full">
          <div class="flex">
            <input
              v-model="search"
              @input="tableInputSearchHandler($event)"
              type="text"
              class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
              placeholder="Pencarian.."
            />
            <zselect
              v-model="limit"
              :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
              placeholder="Jumlah"
              @input="refreshData"
              class="w-20 ml-5"
            >
            </zselect>
            <div class="mt-1 ml-2">
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
                    <div>
                      <label
                        id="listbox-label"
                        class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                      >
                        Mitra
                      </label>
                      <zselect
                        v-model="filter_mitra"
                        :data="listMitra"
                        placeholder="Mitra Ekspedisi"
                        class="-mt-1 w-full"
                        @input="refreshData"
                      >
                      </zselect>
                    </div>
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
                          filter_mitra = '';
                          branch = '';
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
        <div class="lg:w-1/2 w-full">
          <button
            @click="importModalDialog = true"
            class="bg-green-600 hover:bg-green-700 px-3 py-2 text-sm font-semibold text-white rounded-md focus:outline-none mr-2 flex items-center ml-auto"
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
      <datatable
        :data="data.data"
        :columns="columns"
        :meta="data.meta"
        :PageNavHandler="pageNavHandler"
        :TableInputSearchHandler="tableInputSearchHandler"
      >
        <!-- Custom Field -->
        <template slot="volume" slot-scope="props">
          {{ props.item.volume_total }}
        </template>
        <template slot="basic_rate" slot-scope="props">
          {{ formatPrice(props.item.basic_rate) }}
        </template>
        <!-- <template slot="persentasi" slot-scope="props">
          {{
            props.item.tagihan_mitra
              ? props.item.tagihan_mitra.percentace + "%"
              : "1.1 %"
          }}
        </template> -->
        <!-- <template slot="total_persentasi" slot-scope="props">
          {{
            props.item.tagihan_mitra
              ? "Rp " +
                formatPrice(
                  (props.item.tagihan_mitra.percentace / 100) *
                    props.item.tagihan_mitra.total_amount +
                    props.item.tagihan_mitra.total_amount
                )
              : "-"
          }}
        </template> -->
        <template slot="invoice_number" slot-scope="props">
          {{
            props.item.tagihan_mitra
              ? props.item.tagihan_mitra.invoice_number
              : "-"
          }}
        </template>
        <template slot="cogs" slot-scope="props">
          {{ props.item.cogs ? formatPrice(props.item.cogs) : "-" }}
        </template>
        <template slot="createdAt" slot-scope="props">
          {{
            props.item.createdAt
              ? formatDate(props.item.createdAt)
              : "-"
          }}
        </template>
        <template slot="payment_date" slot-scope="props">
          {{
            props.item.tagihan_mitra
              ? formatDateNumeric(props.item.tagihan_mitra.payment_date)
              : "-"
          }}
        </template>
        <template slot="payment_type" slot-scope="props">
          {{
            props.item.tagihan_mitra
              ? props.item.tagihan_mitra.payment_type
              : "-"
          }}
        </template>
        <template slot="total_loan" slot-scope="props">
          <template v-if="props.item.tagihan_mitra">
            <span v-if="props.item.tagihan_mitra.status === 'LUNAS'">0</span>
            <span v-if="props.item.tagihan_mitra.status === 'BELUM LUNAS'">
              {{ formatPrice(props.item.cogs) }}
              {{ hutangMitra(props.item.cogs) }}
            </span>
          </template>
          <template v-else>
            <span
              >{{ formatPrice(props.item.cogs) }}
              {{ hutangMitra(props.item.cogs) }}</span
            >
          </template>
        </template>
        <template slot="status" slot-scope="props">
          <template v-if="props.item.tagihan_mitra">
            <span
              v-if="props.item.tagihan_mitra.status === 'LUNAS'"
              class="bg-green-400 px-2 py-1 text-white text-xs rounded font-semibold"
              >{{ props.item.tagihan_mitra.status }}</span
            >
            <span
              v-if="props.item.tagihan_mitra.status === 'BELUM LUNAS'"
              class="bg-red-400 px-2 py-1 text-white text-xs rounded font-semibold"
              >{{ props.item.tagihan_mitra.status }}</span
            >
          </template>
          <template v-else>
            <span
              class="bg-red-400 px-2 py-1 text-white text-xs rounded font-semibold"
              >Belum Bayar</span
            >
          </template>
        </template>

        <template slot="action" slot-scope="props">
          <div class="flex items-center">
            <button
              @click="editUtangMitra(props.item.id)"
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
              <h4 class="font-semibold">Ubah</h4>
            </button>
            <!-- <button @click="dataSelected = props.item; deleteConfirmModal = true" class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center" style="font-size: 11px">
                            <svg class="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform:;-ms-filter:"><path d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"></path></svg>
                            <h4 class="font-semibold">Hapus</h4>
                        </button> -->
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
            ? 'Tambah Tagihan Mitra'
            : 'Ubah Tagihan Mitra'
        "
        @submit="handleSubmit"
      >
        <div class="space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              No Invoice
            </label>
            <input
              v-model="invoice_number"
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
            <zinputcurrency v-model="total_amount"> </zinputcurrency>
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              HPP (Basic Rate) <span>Sebelum ditambah 1.1%</span>
            </label>
            <zinputcurrency v-model="basic_rate" placeholder="contoh: 150000" />
          </div>
          <div v-if="dataSelected.length !== 0">
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Bukti Pembayaran
            </label>
            <input
              v-model="payment_proof"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="Link Gambar.."
              type="text"
            />
          </div>
          <!-- <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Persentasi
            </label>
            <input
              v-model="percentace"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="1.1"
              type="text"
            />
            <div v-if="error_message">
              <p class="text-red-500 text-xs italic">
                Harap isi field persentasi
              </p>
            </div>
          </div> -->
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Pembayaran
            </label>
            <zselect
              v-model="payment_type"
              :data="bankList"
              placeholder="Pembayaran"
              class="-mt-1 w-full"
            >
            </zselect>
            <!-- <div class="relative flex items-center">
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
            </div> -->
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
                v-model="status"
                value="LUNAS"
              />
              <label class="ml-1">Lunas</label>
            </div>
            <div class="relative flex items-center">
              <input
                class="w-4 h-4"
                type="radio"
                v-model="status"
                value="BELUM LUNAS"
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
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="deleteConfirmModal"
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
      <modal
        v-show="deleteConfirmModal"
        title="Hapus Data Tagihan Mitra"
        message="Anda yakin ingin menghapus data tagihan mitra ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
        @close="
          deleteConfirmModal = false;
          dataSelected = [];
        "
        @confirm="deleteUtangMitra()"
      ></modal>
    </transition>
    <!-- Import Data Modal with Detail Modal Component -->
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
        title="Import Tagihan Mitra"
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
          <div class="flex items-center py-2">
            <zselect
              v-model="filter_mitra"
              :data="listMitra"
              placeholder="Mitra Ekspedisi"
              class="-mt-1 w-full"
            >
            </zselect>
          </div>
          <div class="flex items-center py-2">
            <zselect
              v-model="filter_status"
              :data="['LUNAS', 'BELUM LUNAS']"
              placeholder="Status"
              class="-mt-1 w-full"
            >
            </zselect>
          </div>

          <div class="my-6">
            <h1>Template CSV</h1>
            <h4 class="text-sm text-gray-600 mb-2">
              Silahkan masukkan data yang akan diimport di template file csv
              ini.
            </h4>
            <div class="pt-2">
              <!-- <a href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1629819845/template-csv/Template_Biaya_Operasional_-_Sheet1_2_d7iarw.csv" target="_blank" class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2" download>Download Template CSV</a> -->
              <button
                @click="exportTagihanMitra"
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
              @change="importTagihanMitra($event)"
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
    <zloading v-show="loading"></zloading>
  </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zselect from "@/components/zselect";
import datatable from "@/components/datatables/advance_table";
import detailDataModal from "@/components/datatables/detail_modal";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
import modal from "@/components/datatables/modal";
import zloading from "@/components/zloading";
import zinputcurrency from "@/components/zinputcurrency";
import zdropdown from "@/components/zdropdown";
import axios from "axios";

import { formatDate, formatDateNumeric, formatPrice } from "@/helpers/helper";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zdropdown,
    zinputcurrency,
    zselect,
    datatable,
    detailDataModal,
    addForm,
    notification,
    modal,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: [],
      columns: [
        {
          field: "shipment_number",
          label: "No Order",
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
          field: "volume",
          label: "Volume",
        },
        {
          field: "courier",
          label: "Mitra",
        },
        {
          field: "invoice_number",
          label: "Invoice",
        },

        {
          field: "basic_rate",
          label: "HPP",
        },
        {
          field: "cogs",
          label: "Total Bayar",
        },
        {
          field: "createdAt",
          label: "Tanggal Transaksi",
        },
        // {
        //   field: "total_persentasi",
        //   label: "Total Tagihan",
        // },
        {
          field: "payment_date",
          label: "Tanggal Bayar",
        },
        {
          field: "payment_type",
          label: "Jenis Pembayaran",
        },

        {
          field: "total_loan",
          label: "Total Hutang",
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
      filterDate: "",
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      loading: true,
      importModalDialog: false,
      pembayaran_mitra: [],
      hutang_mitra: 0,
      /* Form Value */
      tagihan_mitra_id: "",
      transaction_id: "",
      invoice_number: "",
      cogs: "",
      total_amount: "",
      payment_date: "",
      payment_type: "",
      payment_proof: "",
      status: "",
      basic_rate: "",
      /* Extra Data */
      form_type: "",
      filter_status: "",
      start_date: "",
      end_date: "",
      percentace: "",
      filter_mitra: "",
      error_message: false,
      pembayaran: [],
      id_transaction: "",
      status_mitra: "",
    };
  },

  computed: {
    bankList() {
      return this.$store.state.payment.map((item) => {
        return `${item.bank_name} (${item.account_name}-${item.account_number})`;
      });
    },
    listMitra() {
      return this.$store.state.courier.map((item) => {
        return {
          value: item.id,
          label: item.courier_name,
        };
      });
    },
    // total value
    totalHutang() {
      const sum = this.pembayaran
        ?.filter(({ status }) => status !== "LUNAS")
        .reduce((a, { cogs }) => {
          return a + Number(cogs);
        }, 0);
      return sum;
    },
    pembayaranMitra() {
      const sum = this.pembayaran_mitra
        ?.filter(({ status }) => status === "LUNAS")
        .reduce((a, { bayar_mitra }) => {
          return a + Number(bayar_mitra);
        }, 0);
      return sum;
    },
  },

  mounted() {
    this.$store.dispatch("getPayment");
    this.$store.dispatch("getCourier");
  },

  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.filterDate = "Bulan Ini";
    this.selectRangeDate();
    this.getAllDataMitra();
    this.hutangMitra();
  },
  methods: {
    /*
     * Get Data Method
     */
    formatDate,
    formatDateNumeric,
    formatPrice,

    hutangMitra(val) {
      console.log(val);
    },
    async getAllDataMitra() {
      try {
        let query_params = {
          courier: this.filter_mitra.label,
          start_date: this.start_date ? this.start_date : "2022-01-01",
          end_date: this.end_date ? this.end_date : this.formatDate(new Date()),
        };
        const response = await axios.get(
          `${api_url}/api/v1/finance/utang-mitra/getSumMitra`,
          { params: query_params, headers: this.headers }
        );
        this.pembayaran_mitra = response.data.data;
        // this.hutang_mitra = response.data.data[0]
        //   ? response.data.data[0].total_cogs
        //   : 0;
        this.pembayaran = response.data.data;
        console.log("hasil", response);
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
        filter_mitra: this.filter_mitra.label,
        start_date: this.start_date ? this.start_date : "2022-01-01",
        end_date: this.end_date ? this.end_date : this.formatDate(new Date()),
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/utang-mitra`,
          { params: query_params, headers: this.headers }
        );
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
    /*
     * Create Method
     */
    async createUtangMitra() {
      let data = {
        invoice_number: this.invoice_number,
        cogs: this.cogs,
        total_amount: this.total_amount,
        payment_date: this.payment_date,
        payment_type: this.payment_type,
        payment_proof: this.payment_proof,
        status: this.status,
        transaction: this.transaction_id,
        // percentace: this.percentace,
      };

      try {
        await axios.post(`${api_url}/api/v1/finance/utang-mitra/create`, data, {
          headers: this.headers,
        });

        /* Set Toggle */
        this.formDialog = false;
        this.successNotification = true;

        /* Set Data Empty */
        this.emptyFormData();

        /* Refresh Data */
        this.getListData(this.page, this.limit);
        this.getAllDataMitra();
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get by Id & Update Method
     */
    async editUtangMitra(id) {
      const response = await axios.get(
        `${api_url}/api/v1/finance/utang-mitra/get/${id}`,
        { headers: this.headers }
      );
      console.log("res agen", response.data.data);
      if (response.data.data[0].tagihan_mitra === undefined) {
        this.formDialog = !this.formDialog;
        this.dataSelected = [];
        this.emptyFormData();
        this.transaction_id = id;
        this.cogs = response.data.data[0].cogs;
        this.basic_rate = response.data.data[0].basic_rate;
        (this.total_amount = Math.floor(
          Number((1.1 / 100) * response.data.data[0].basic_rate) +
            Number(response.data.data[0].basic_rate)
        )),
          (this.payment_type = "");
        this.id_transaction = response.data.data[0].id;
        // this.percentace = response.data.data[0].tagihan_mitra.percentace;
      } else {
        /* Set Toggle */
        this.formDialog = true;
        this.id_transaction = response.data.data[0].id;
        /* Set Data Form */
        this.invoice_number =
          response.data.data[0].tagihan_mitra.invoice_number;
        this.cogs = response.data.data[0].cogs;
        this.basic_rate = response.data.data[0].basic_rate;
        // this.percentace = response.data.data[0].tagihan_mitra.percentace;
        (this.total_amount = Math.floor(
          Number((1.1 / 100) * response.data.data[0].basic_rate) +
            Number(response.data.data[0].basic_rate)
        )),
          (this.payment_date =
            response.data.data[0].tagihan_mitra.payment_date);
        this.payment_type = response.data.data[0].tagihan_mitra.payment_type;
        //this.payment_proof = response.data.data[0].tagihan_mitra;
        this.status = response.data.data[0].tagihan_mitra.status;
        this.form_type = "update";
        this.transaction_id = id;
        this.tagihan_mitra_id = response.data.data[0].tagihan_mitra._id;
      }
    },
    async updateUtangMitra() {
      let data = {
        invoice_number: this.invoice_number,
        cogs: this.cogs,
        total_amount: this.total_amount,
        payment_date: this.payment_date,
        payment_type: this.payment_type,
        payment_proof: this.payment_proof,
        status: this.status,
        percentace: this.percentace,
        transaction: this.id_transaction,
        basic_rate: this.basic_rate,
      };

      if (this.payment_proof !== "") {
        data.payment_date = new Date();
        data.status = "Lunas";
      } else {
        data.payment_date = this.payment_date;
        data.status = this.status;
      }
      if (this.percentace === undefined) {
        this.error_message = true;
        return;
      }

      try {
        const response = await axios.put(
          `${api_url}/api/v1/finance/utang-mitra/update/${this.tagihan_mitra_id}`,
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
        this.getAllDataMitra();
      } catch (error) {
        console.log(error);
      }
    },
    refreshData() {
      this.getListData(this.page, this.limit);
      this.getAllDataMitra();
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
    /*
     * Delete Method
     */
    // async deleteUtangMitra() {
    //     try {
    //         const response = await axios.delete(`${api_url}/api/v1/finance/utang-mitra/delete/${this.dataSelected.id}`, { headers: this.headers });
    //         console.log(response.data);

    //         /* Refresh Data */
    //         this.getListData(this.page, this.limit);
    //         this.dataSelected = [];

    //         /* Set Toggle */
    //         this.deleteConfirmModal = false;
    //     }catch (error) {
    //         console.log(error);
    //     }
    // },
    /* Helpers */
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
    /* Export Tagihan Mitra */
    async exportTagihanMitra() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        status: this.filter_status,
        courier: this.filter_mitra.label,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/utang-mitra/export`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        var fileDownload = require("js-file-download");
        return fileDownload(response.data, "template-utang-mitra.csv");
      } catch (error) {
        console.log(error);
      }
    },
    /* Import Tagihan Mitra */
    async importTagihanMitra(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/utang-mitra/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.importModalDialog = false;
        this.successNotification = true;

        /* Refresh Data */
        this.getListData(this.page, this.limit);
        this.getAllDataMitra();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
