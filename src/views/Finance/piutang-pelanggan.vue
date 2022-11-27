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
                Piutang Pelanggan Bulan Ini
              </h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{
                  formatPrice(
                    total_piutang.total_amount -
                      total_piutang.total_paid_cash -
                      total_piutang.total_paid_transfer
                      ? total_piutang.total_amount -
                          total_piutang.total_paid_cash -
                          total_piutang.total_paid_transfer
                      : 0
                  )
                }}
              </h1>
            </div>
            <div
              class="lg:w-1/2 w-full bg-white shadow-md border border-blue-500 rounded-md px-6 py-4 text-center"
            >
              <h4 class="text-base font-medium mb-2">
                Transaksi Piutang Bulan Ini
              </h4>
              <h1 class="text-xl font-semibold text-blue-800">
                {{
                  formatPrice(total_month_transaksi ? total_month_transaksi : 0)
                }}
              </h1>
            </div>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="lg:w-1/2 w-full flex">
              <input
                v-model="search"
                @input="tableInputSearchHandler($event)"
                type="text"
                class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
                placeholder="Pencarian.."
              />
              <div class="w-40">
                <zselect
                  v-model="limit"
                  :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                  placeholder="Jumlah"
                  @input="refreshData"
                  class="ml-2"
                >
                </zselect>
              </div>
              <div
                class="lg:w-1/2 w-full"
                v-if="profileData.type_user.includes('Super Admin')"
              >
                <zdropdown text="Filter Transaksi" class="mt-1 ml-3">
                  <template v-slot:item>
                    <div class="py-6 px-6">
                      <div class="w-full">
                        <h4 class="text-sm font-medium mr-2 mb-1">
                          Cabang
                        </h4>
                        <zautocomplete
                          v-model="branch"
                          :data="branchOptions"
                          placeholder="Cabang"
                          @input="refreshData"
                          class=""
                        >
                        </zautocomplete>
                      </div>
                      <h1 class="font-medium text-center my-3">atau</h1>

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
                      <zselect
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
                      </zselect>

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
            :data="dataItems"
            :columns="columns"
            :meta="dataMeta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <!-- <template slot="paid" slot-scope="props">
                    {{ props.item.transaction.filter(item => item.payment_status === 'Lunas').length }}
                </template>
                <template slot="unpaid" slot-scope="props">
                    {{ props.item.transaction.filter(item => item.payment_status === 'Belum Lunas').length }}
                </template>
                <template slot="total_transaction" slot-scope="props">
                    {{ props.item.transaction.length }}
                </template> -->
            <!-- <template slot="total_paid_cash" slot-scope="props">
                    {{ formatPrice(props.item.total_paid_cash) }}
                    {{ 'Rp' + formatPrice( props.item.transaction.reduce((total, num) => total + parseInt(num.amount_paid !== null ? num.amount_paid - num.total_paid : 0), 0) ) }}
                </template> -->
            <template slot="total_nominal" slot-scope="props">
              {{
                "Rp." +
                  formatPrice(
                    props.item.amount_paid -
                      (props.item.total_paid_cash +
                        props.item.total_paid_transfer)
                  )
              }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="detailPiutangMember(props.item.customer)"
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
                  <h4 class="font-semibold">Lihat Detail</h4>
                </button>
                <button
                  @click="bayarPiutangMember(props.item.customer)"
                  class="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none flex items-center mr-2"
                  style="font-size: 11px"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <h4 class="font-semibold">Bayar</h4>
                </button>
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
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
            :title="
              dataSelectedType === 'detail'
                ? 'Detail Piutang Pelanggan'
                : 'Pembayaran Piutang Pelanggan'
            "
            @close="
              detailModal = false;
              dataSelected = [];
            "
          >
            <!-- Info Member -->
            <div class="w-full py-6">
              <dl>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Nama Pelanggan
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{
                      dataSelected.length > 0 && dataSelected[0].agen_general
                        ? dataSelected[0].agen_general
                        : "-"
                    }}
                  </dd>
                </div>
                <div class="bg-white px-6 py-2 grid grid-cols-6 gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Total Transaksi
                  </dt>
                  <dd class="md:mt-0 mt-1 text-sm text-gray-900 col-span-4">
                    {{
                      dataSelected.length > 0
                        ? dataSelected.length
                        : "Tidak Ada Piutang"
                    }}
                  </dd>
                </div>
              </dl>
            </div>
            <!-- Detail Transaksi -->
            <div class="w-full overflow-x-auto h-80">
              <table class="min-w-full bg-gray-100">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th
                      v-if="dataSelectedType === 'bayar'"
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
                      Hutang
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
                  <template v-for="(item, index) in dataSelected">
                    <tr
                      :key="index"
                      v-if="
                        checkCondition(
                          item.total_paid_cash,
                          item.total_paid_transfer,
                          item.amount_paid
                        )
                      "
                    >
                      <td
                        v-if="dataSelectedType === 'bayar'"
                        class="text-left py-3 px-6 text-xs"
                      >
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
                        {{ "Rp." + formatPrice(totalHutang(item)) }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{
                          formatTanggal(item.createdAt)
                            ? formatTanggal(item.createdAt)
                            : "-"
                        }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        {{ item.payment_info ? item.payment_info : "-" }}
                      </td>
                      <td class="text-left py-3 px-6 text-xs">
                        <!-- {{
                      formatTanggal(item.payment_date)
                        ? formatTanggal(item.payment_date)
                        : "-"
                    }} -->
                        -
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
              v-if="dataSelectedType === 'bayar'"
              class="w-full px-6 py-4 flex items-center justify-between text-sm"
            >
              <h1>
                Total yang harus dibayar:
                <span class="font-semibold text-green-700 text-sm">{{
                  "Rp" + formatPrice(totalNominal(selectedItem))
                }}</span>
              </h1>
              <!-- <button @click="bayarSekarang" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 font-medium focus:outline-none rounded-md text-sm">Bayar Sekarang</button> -->
            </div>
            <template v-if="selectedItem.length > 0">
              <hr />
              <div class="px-6 py-6 overflow-y-auto h-80">
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
            title="Import Piutang Member"
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
                <h4 class="text-sm font-medium mt-2 mb-1">Branch:</h4>
                <zautocomplete
                  v-model="branch"
                  :data="branchOptions"
                  placeholder="Pilih Cabang"
                  @input="refreshData"
                  class="mt-2"
                >
                </zautocomplete>
              </div>
              <div class="my-3">
                <h4 class="text-sm font-medium mt-2 mb-1">Agen:</h4>
                <zautocomplete
                  v-model="agen"
                  :data="agenOptions"
                  placeholder="Pilih Agen"
                  @input="refreshData"
                  class="mt-2"
                >
                </zautocomplete>
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
                    @click="exportPiutangMember"
                    target="_blank"
                    class="bg-blue-600 flex hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2"
                  >
                    <svg
                      v-show="loadExport"
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
                  @change="importPiutangMember($event)"
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
import datatable from "@/components/datatables/advance_table";
import zautocomplete from "@/components/zautocomplete";
import detailDataModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import zdropdown from "@/components/zdropdown";
import zselect from "@/components/zselect";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zdropdown,
    zautocomplete,
    zselect,
    datatable,
    detailDataModal,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      dataItems: [],
      dataMeta: null,
      dataSelected: [],
      agenOptions: [],
      branchOptions: [],
      bankOptions: [],
      dataSelectedType: "",
      columns: [
        {
          field: "customer",
          label: "Nama Pelanggan",
        },
        {
          field: "count_paid",
          label: "Lunas",
        },
        {
          field: "count_unpaid",
          label: "Belum Lunas",
        },
        {
          field: "count_notpaid",
          label: "Belum Bayar",
        },
        {
          field: "total_transaction",
          label: "Total Transaksi",
        },
        {
          field: "total_nominal",
          label: "Total Nominal",
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
      /* Toggle Dialog */
      detailModal: false,
      loading: true,
      loadExport: false,
      importModalDialog: false,
      /* Form Value */
      /* Extra Data */
      selectedItem: [],
      selectAllItem: false,
      total_piutang: "",
      total_month_transaksi: 0,
      total_paid: 0,
      total_transaksi: 0,
      filterDate: "",
      start_date: "",
      end_date: "",
      agen: "",
      branch: "",
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.filterDate = "Bulan Ini";
    this.selectRangeDate();
    this.getTotalMemberAll();
    this.getTotalMember();
    this.getAgen();
    this.getBank();
  },
  mounted() {
    this.getBranch();
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
    async getTotalMember() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        branch: this.branch.value,
      };
      try {
        let response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member/count`,
          {
            headers: this.headers,
            params: query_params,
          }
        );
        console.log("res utang masih", response);
        this.total_piutang = response.data.data[0];
        this.total_month_transaksi = response.data.data[0].total_transaction;
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalMemberAll() {
      try {
        let response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member/count-all`,
          {
            headers: this.headers,
          }
        );
        this.total_paid = response.data.data[0].total_amount;
        this.total_transaksi = response.data.data[0].total_transaction;
      } catch (error) {
        console.log(error);
      }
    },
    async getAgen() {
      let query_params = {
        pagination: false,
      };
      try {
        const responseListAgen = await axios.get(
          `${api_url}/api/v1/users/user`,
          { params: query_params, headers: this.headers }
        );
        this.agenOptions.push({
          label: "SEMUA AGEN",
          value: "all",
        });
        responseListAgen.data.map((item) => {
          if (item.type_user === "Agen") {
            this.agenOptions.push({
              label: item.fullname + " [Agen Resmi]",
              value: item.id,
            });
          }
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
      };
      if (this.profileData.type_user === "Super Admin") {
        query_params.branch = this.branch.value;
      } else {
        query_params.branch = this.profileData.branch._id;
      }
      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member`,
          { params: query_params, headers: this.headers }
        );
        console.log("data pelanggan:", response.data);
        this.dataItems = response.data.data;
        this.dataMeta = response.data;

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

    totalNominal(transaction) {
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
      return (
        Number(x_amount_paid) -
        (Number(x_total_paid_cash) + Number(x_total_paid_transfer))
      );
    },
    /*
     * Pagination Handler Function
     */
    refreshData() {
      this.getListData(this.page, this.limit);
      this.getTotalMember();
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
     * Detail & Bayar Piutang Member
     */
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
    async detailPiutangMember(customer) {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        customer: customer,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member/detail-list`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.dataSelected = response.data;
        this.dataSelectedType = "detail";
        this.detailModal = true;
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
    async bayarPiutangMember(customer) {
      console.log(customer);
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        customer: customer,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member/detail-list`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.dataSelected = response.data;
        this.dataSelectedType = "bayar";
        this.detailModal = true;
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
     * Aksi Bayar Piutang Member
     */
    async bayarSekarang() {
      let pushData = [];

      this.selectedItem.map((item) => {
        pushData.push({
          id: item.id,
          amount_paid: item.amount_paid,
          total_paid_cash: parseInt(item.total_paid_cash),
          total_paid_transfer: parseInt(item.total_paid_transfer),
          payment_date: new Date(item.payment_date),
          payment_type: item.payment_type.value,
          bank: item.bank,
        });
      });

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/piutang-member/pay`,
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
    /* Helpers */
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
    selectItem() {
      this.selectedItem = [];
      console.log(this.dataSelected);
      if (!this.selectAllItem) {
        for (let i in this.dataSelected) {
          if (
            this.dataSelected[i].total_paid_cash +
              this.dataSelected[i].total_paid_transfer <
            this.dataSelected[i].amount_paid
          ) {
            this.selectedItem.push(this.dataSelected[i]);
          } else {
            this.selectedItem.push(this.dataSelected[i]);
          }
        }
      }
    },
    /* Total Method */
    checkCondition(total_paid_cash, total_paid_transfer, amount_paid) {
      let x_total_paid_cash =
        total_paid_cash === undefined || total_paid_cash === null
          ? 0
          : total_paid_cash;
      let x_total_paid_transfer =
        total_paid_transfer === undefined || total_paid_transfer === null
          ? 0
          : total_paid_transfer;
      let x_amount_paid =
        amount_paid === undefined || amount_paid === null ? 0 : amount_paid;

      return x_total_paid_cash + x_total_paid_transfer < x_amount_paid
        ? true
        : false;
    },
    /* Export Piutang Member */
    async exportPiutangMember() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        branch: this.branch.value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/piutang-member/export`,
          { params: query_params, headers: this.headers }
        );
        console.log("data error", response);
        this.loadExport = false;

        var fileDownload = require("js-file-download");
        return fileDownload(response.data, "template-piutang-pelanggan.csv");
      } catch (error) {
        console.log(error);
      }
    },
    /* Import Piutang Member */
    async importPiutangMember(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/piutang-member/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.importModalDialog = false;
        this.successNotification = true;

        /* Refresh Data */
        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
