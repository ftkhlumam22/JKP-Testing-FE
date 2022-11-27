<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <h1 class="text-xl text-gray-800 font-medium mb-3">
            Transaksi Pengiriman Domestik
          </h1>
          <div class="flex items-center justify-between mb-6">
            <div>
              <button
                @click="
                  formDialog = !formDialog;
                  dataSelected = null;
                  emptyFormData();
                "
                class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in"
              >
                <svg
                  class="w-3.5 h-3.5 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style="transform:;-ms-filter:"
                >
                  <path
                    d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"
                  ></path>
                </svg>
                <h4 class="font-semibold">Tambah Transaksi</h4>
              </button>
            </div>
            <div class="flex items-center">
              <form class="relative mr-2">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
                <input
                  @input="tableInputSearchHandler($event)"
                  class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                  type="text"
                  aria-label="Pencarian.."
                  v-model="search"
                  placeholder="Pencarian.."
                />
              </form>
              <zdropdown
                :text="filterDate !== '' ? filterDate : 'Filter Transaksi'"
                class="lg:mr-2"
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
                          v-model="filter_start_date"
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
                          v-model="filter_end_date"
                          class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                          type="date"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium mt-2 mb-1">
                        Tanggal Kirim:
                      </h4>
                      <input
                        @input="refreshData"
                        v-model="filter_shipment_date"
                        class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                        type="date"
                      />
                    </div>
                    <h4 class="text-sm font-medium mt-2 mb-1">Admin:</h4>
                    <zautocompleteinput
                      v-model="filter_admin"
                      :data="adminOptions"
                      placeholder="Pilih Admin"
                      @input="refreshData"
                    >
                    </zautocompleteinput>
                    <div class="flex items-center">
                      <button
                        @click="
                          search = '';
                          filterDate = '';
                          filter_start_date = '';
                          filter_end_date = '';
                          filter_shipment_date = '';
                          filter_admin = '';
                          refreshData();
                        "
                        class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-semibold text-white rounded-md shadow"
                      >
                        Reset Filter
                      </button>
                    </div>
                  </div>
                </template>
              </zdropdown>
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
            <template slot="shipment_number" slot-scope="props">
              <div class="text-sm text-gray-900 font-semibold">
                {{ props.item.shipment_number }}
              </div>
            </template>
            <template slot="createdAt" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ formatDate(props.item.createdAt) }}
              </div>
            </template>
            <template slot="shipment_date" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ formatDate(props.item.shipment_date) }}
              </div>
            </template>
            <template slot="input_by" slot-scope="props">
              <div class="text-sm text-gray-900 font-semibold">
                {{ props.item.input_by ? props.item.input_by.fullname : "-" }}
              </div>
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="detailOrder(props.item)"
                  class="bg-gray-100 hover:bg-gray-200 rounded-lg px-1.5 py-1.5 text-gray-400 mr-2 focus:outline-none"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
                <button
                  @click="editOrder(props.item.id)"
                  class="bg-gray-100 hover:bg-gray-200 rounded-lg px-1.5 py-1.5 text-gray-400 focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  v-if="
                    profileData.role.access_permission.includes(
                      'transaction_delete'
                    )
                  "
                  @click="
                    deleteConfirmModal = true;
                    dataSelected = props.item;
                  "
                  class="bg-red-50 hover:bg-red-100 rounded-lg px-1.5 py-1.5 text-red-300 focus:outline-none ml-2"
                >
                  <svg
                    class="w-4 h-4 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      fill="none"
                      d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                    ></path>
                    <path
                      d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                    ></path>
                    <path
                      d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                    ></path>
                  </svg>
                </button>
                <button
                  v-if="props.item.awb_no"
                  @click="
                    openNewTab('/domestic/print-resi-domestik/' + props.item.id)
                  "
                  class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 text-xs rounded-md focus:outline-none ml-3 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-1 fill-current"
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
                  Cetak Resi
                </button>
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
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
              dataSelected === null
                ? 'Berhasil! Tarif baru sudah ditambahkan!'
                : 'Berhasil! Tarif sudah diubah!'
            "
            @close="successNotification = false"
          ></notification>
        </transition>
        <!-- Add/Edit Form Modal -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="formDialog"
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
          <zmodal
            v-show="formDialog"
            title="Tambah Transaksi"
            desc="Tambah transaksi pengiriman domestik"
            @close="
              formDialog = false;
              dataSelected = [];
            "
          >
            <!-- <div class="flex items-center px-6 pt-6 pb-2 space-x-4">
                    <div @click="tabForm = 0" class="w-1/3 cursor-pointer">
                        <h3 :class="tabForm >= 0 ? 'text-green-300 bg-green-50 hover:bg-green-100' : 'text-gray-300 bg-gray-50 hover:bg-gray-100'" class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center">
                            <div :class="tabForm >= 0 ? 'bg-green-300' : 'bg-gray-300'" class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2">1</div>
                            <span class="text-sm font-medium">Lembaran Pengirim</span>
                        </h3>
                    </div>
                    <div @click="tabForm = 1" class="w-1/3 cursor-pointer">
                        <h3 :class="tabForm > 0 ? 'text-green-300 bg-green-50 hover:bg-green-100' : 'text-gray-300 bg-gray-50 hover:bg-gray-100'" class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center">
                            <div :class="tabForm > 0 ? 'bg-green-300' : 'bg-gray-300'" class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2">2</div>
                            <span class="text-sm font-medium">Lembaran Penerima</span>
                        </h3>
                    </div>
                    <div @click="tabForm = 2" class="w-1/3 cursor-pointer">
                        <h3 :class="tabForm > 1 ? 'text-green-300 bg-green-50 hover:bg-green-100' : 'text-gray-300 bg-gray-50 hover:bg-gray-100'" class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center">
                            <div :class="tabForm > 1 ? 'bg-green-300' : 'bg-gray-300'" class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2">3</div>
                            <span class="text-sm font-medium">Informasi Barang</span>
                        </h3>
                    </div>
                </div> -->
            <div class="px-6 py-6 space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  No Order/Shipment Number
                </label>
                <input
                  disabled
                  v-model="shipment_number"
                  class="bg-gray-100 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: JX001"
                  type="text"
                />
              </div>
              <div
                v-if="
                  dataSelected !== null &&
                    dataSelected.position_order !== 'Agen'
                "
              >
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Status Order
                </label>
                <zselect
                  v-model="status_order"
                  :data="['Hold', 'Cancel', 'Manifest', 'Pending']"
                  placeholder="Pilih Status Order"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tanggal Kirim
                </label>
                <input
                  v-model="shipment_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Pengirim
                </label>
                <!-- <input v-model="sender_name" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Andre Hasibuan" type="text"> -->
                <zautocompleteinput
                  v-model="sender_name"
                  :data="senderNameOptions"
                  placeholder="Andre Hasibuan"
                  @input="generateOptionsTransaction('sender_name')"
                  @triggerSelect="autoInputFieldBySenderName"
                >
                </zautocompleteinput>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Alamat Pengirim
                </label>
                <input
                  v-model="sender_address"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Jl. Siliwangi No 59"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nomor Telepon
                </label>
                <input
                  v-model="sender_phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 0812345678"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kode Pos Pengirim
                </label>
                <input
                  v-model="sender_postal_code"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 45557"
                  type="text"
                />
              </div>
            </div>
            <div class="px-6 py-6 space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Penerima
                </label>
                <!-- <input v-model="recipient_name" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Ferdinand" type="text"> -->
                <zautocompleteinput
                  v-model="recipient_name"
                  :data="recipientNameOptions"
                  placeholder="Andre Hasibuan"
                  @input="generateOptionsTransaction('recipient_name')"
                  @triggerSelect="autoInputFieldByRecipientName"
                >
                </zautocompleteinput>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Provinsi Tujuan
                </label>
                <!-- <zselect v-model="province" :data="provinceDomestikOptions" placeholder="Pilih Provinsi Tujuan" @input="getCityDomestik">
                        </zselect> -->
                <zautocompleteinput
                  v-model="province"
                  :data="provinceDomestikOptions"
                  placeholder="Pilih Provinsi Tujuan"
                  @input="getCityDomestik"
                >
                </zautocompleteinput>
              </div>
              <div v-if="province !== ''">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kota Tujuan
                </label>
                <!-- <zselect v-model="city" :data="cityDomestikOptions" placeholder="Pilih Kota Tujuan">
                        </zselect> -->
                <zautocompleteinput
                  v-model="city"
                  :data="cityDomestikOptions"
                  placeholder="Pilih Kota Tujuan"
                >
                </zautocompleteinput>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Alamat Penerima
                </label>
                <textarea
                  v-model="recipient_address"
                  rows="4"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: New York"
                  type="textarea"
                ></textarea>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kode Pos
                </label>
                <input
                  v-model="recipient_postal_code"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 3445"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  No Telepon
                </label>
                <input
                  v-model="recipient_phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 08123443424"
                  type="text"
                />
              </div>
            </div>
            <div class="px-6 py-6 space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Mitra Ekspedisi
                </label>
                <zselect
                  v-model="courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                >
                </zselect>
              </div>
              <div v-if="courier == 'Jaskipin Cargo'">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Layanan Cargo (Optional)
                </label>
                <zselect
                  v-model="cargo_service"
                  :data="[
                    'Elang Logistik',
                    'Sarana Cargo',
                    'Sentral Cargo',
                    'Sbartama Cargo',
                    'Sicepat Cargo',
                  ]"
                  placeholder="Pilih Layanan Cargo"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Keterangan Isi Paket
                </label>
                <input
                  v-model="content_info"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Buku"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  AWB No/No Resi
                </label>
                <input
                  v-model="awb_no"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 3214003484834"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Jumlah Koli
                </label>
                <zselect
                  v-model="bag_amount"
                  :data="[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                  ]"
                  placeholder="Pilih Jumlah Koli"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Berat (Kg)
                </label>
                <input
                  v-model="weight"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 1"
                  type="number"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Jenis Layanan
                </label>
                <zselect
                  v-model="service_type"
                  :data="serviceOptions"
                  placeholder="Pilih Jenis Layanan"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Ongkos Kirim
                </label>
                <input
                  v-model="shipment_fee"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 87000"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Agen
                </label>
                <!-- <zselect v-model="agen_name" :data="agenOptions" placeholder="Pilih Agen">
                        </zselect> -->
                <zautocompleteinput
                  v-model="agen_name"
                  :data="agenOptions"
                  placeholder="Pilih Agen"
                >
                </zautocompleteinput>
              </div>
            </div>
            <div v-if="errorSubmit" class="bg-red-600">
              <div class="mx-auto py-3 text-center">
                <p class="font-medium text-white truncate">
                  <span class="md:hidden">
                    Silahkan isi form dengan benar!
                  </span>
                  <span class="hidden md:inline">
                    Silahkan isi form dengan benar!
                  </span>
                </p>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <!-- <button
                        v-if="tabForm < 2"
                        @click="tabForm++"
                        class="bg-white ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                        Lanjut
                    </button> -->
              <button
                @click="updateOrder"
                v-if="dataSelected !== null"
                class="bg-green-400 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
              >
                Simpan Transaksi
              </button>
              <button
                @click="createOrder"
                v-if="dataSelected === null"
                class="bg-green-400 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
              >
                Buat Transaksi
              </button>
              <!-- <button
                        @click="tabForm--"
                        :disabled="tabForm == 0"
                        class="bg-white relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
                    >
                        Sebelumnya
                    </button> -->
            </div>
          </zmodal>
        </transition>
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
            title="Detail Transaksi Domestik"
            desc="Informasi transaksi pengiriman domestik"
            @close="
              detailModal = false;
              dataSelected = null;
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
                    dataSelected && dataSelected.shipment_number
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
                  <template v-if="dataSelected && dataSelected.status_order">
                    <span
                      v-if="
                        dataSelected && dataSelected.status_order === 'Hold'
                      "
                      class="bg-blue-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="
                        dataSelected && dataSelected.status_order === 'Cancel'
                      "
                      class="bg-red-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="
                        dataSelected && dataSelected.status_order === 'Pending'
                      "
                      class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold"
                      >{{ dataSelected.status_order }}</span
                    >
                    <span
                      v-if="
                        dataSelected && dataSelected.status_order === 'Manifest'
                      "
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
                  Posisi Order
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  <span v-if="dataSelected && dataSelected.position_order">
                    {{
                      dataSelected && dataSelected.position_order === "Agen"
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
                  Tanggal Kirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.shipment_date
                      ? formatDate(dataSelected.shipment_date)
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.sender_name
                      ? dataSelected.sender_name
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.sender_address
                      ? dataSelected.sender_address
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Handphone Pengirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.sender_phone
                      ? dataSelected.sender_phone
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Penerima
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.recipient_name
                      ? dataSelected.recipient_name
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Provinsi Tujuan
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.province
                      ? dataSelected.province
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Kota Tujuan
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.city ? dataSelected.city : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat Penerima
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.recipient_address
                      ? dataSelected.recipient_address
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
                    dataSelected && dataSelected.recipient_postal_code
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
                    dataSelected && dataSelected.recipient_phone
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
                  {{
                    dataSelected && dataSelected.courier
                      ? dataSelected.courier
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Layanan Cargo (Optional)
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.cargo_service
                      ? dataSelected.cargo_service
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500 self-center">
                  AWB No/No Resi
                </dt>
                <dd
                  class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2 flex items-center"
                >
                  {{
                    dataSelected && dataSelected.awb_no
                      ? dataSelected.awb_no
                      : "(Belum Diinput)"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Berat
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.weight
                      ? dataSelected.weight + "kg"
                      : "-"
                  }}
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
                    dataSelected && dataSelected.service_type
                      ? dataSelected.service_type
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Ongkos Kirim
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.shipment_fee
                      ? "Rp" + formatPrice(dataSelected.shipment_fee)
                      : "-"
                  }}
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
                    dataSelected && dataSelected.agen_name
                      ? dataSelected.agen_name
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Keterangan Isi Paket
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected && dataSelected.content_info
                      ? dataSelected.content_info
                      : "-"
                  }}
                </dd>
              </div>
            </dl>
          </detailDataModal>
        </transition>
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
            title="Hapus Data Order"
            message="Anda yakin ingin menghapus data order ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = null;
            "
            @confirm="deleteOrder()"
          ></modal>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zmodal from "@/components/zmodal";
import zselect from "@/components/zselect";
import zautocompleteinput from "@/components/zautocompleteinput";
import zdropdown from "@/components/zdropdown";
import detailDataModal from "@/components/datatables/detail_modal";
import datatable from "@/components/datatables/advance_table";
import notification from "@/components/datatables/notification";
import zloading from "@/components/zloading";
import modal from "@/components/datatables/modal";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    zmodal,
    datatable,
    zselect,
    zautocompleteinput,
    zdropdown,
    detailDataModal,
    notification,
    zloading,
    modal,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: null,
      columns: [
        {
          field: "shipment_number",
          label: "No Order",
        },
        {
          field: "sender_name",
          label: "Nama Pengirim",
        },
        {
          field: "awb_no",
          label: "No Resi",
        },
        {
          field: "courier",
          label: "Ekspedisi",
        },

        {
          field: "recipient_name",
          label: "Nama Penerima",
        },
        {
          field: "shipment_fee",
          label: "Ongkir",
        },
        {
          field: "weight",
          label: "Berat",
        },
        {
          field: "city",
          label: "Tujuan",
        },
        {
          field: "input_by",
          label: "Admin",
        },
        {
          field: "agen_name",
          label: "Agen",
        },
        {
          field: "shipment_date",
          label: "Tanggal Kirim",
        },
        {
          field: "createdAt",
          label: "Tanggal Order",
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
      filter_start_date: "",
      filter_end_date: "",
      filter_shipment_date: "",
      filter_admin: "",
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      detailModalDialog: false,
      loading: true,
      detailModal: false,
      errorSubmit: false,
      /* Form Value */
      /* Lembaran Pengirim */
      shipment_number: "",
      shipment_date: "",
      sender_name: "",
      sender_address: "",
      sender_phone: "",
      sender_postal_code: "",
      /* Lembaran Penerima */
      recipient_name: "",
      province: "",
      city: "",
      recipient_address: "",
      recipient_postal_code: "",
      recipient_phone: "",
      /* Informasi Barang/Ekspedisi */
      courier: "",
      cargo_service: "",
      awb_no: "",
      weight: "",
      service_type: "",
      shipment_fee: "",
      agen_name: "",
      bag_amount: "",
      /* Extra Data Form */
      position_order: "",
      status_order: "",
      amount_paid: "",
      /* Extra Data */
      tabForm: 0,
      courierOptions: [],
      serviceOptions: [],
      agenOptions: [],
      provinceDomestikOptions: [],
      adminOptions: [],
      cityDomestikOptions: [],
      senderNameOptions: [],
      recipientNameOptions: [],
      lastShipmentNumber: "",
    };
  },
  computed: {
    /* Get Profil Data */
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
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.getListCourier();
    this.getListService();
    this.getListAgen();
    this.getProvinceDomestik();
    this.getListAdmin();
    this.getLastRecordOrder();
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
        start_date: this.filter_start_date,
        end_date: this.filter_end_date,
        shipment_date: this.filter_shipment_date,
        admin: this.filter_admin.value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/domestic-order`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
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
     * Get List Courier Method
     */
    async getListCourier() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/courier/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        let courierData = [];
        response.data.map((item) => {
          if (item.courier_type == "Domestik") {
            courierData.push(item.courier_name);
          }
        });
        this.courierOptions = courierData;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Service Method
     */
    async getListService() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/service/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        let serviceData = [];
        response.data.map((item) => {
          if (item.service_type == "Domestik") {
            serviceData.push(item.service_name);
          }
        });
        this.serviceOptions = serviceData;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Agen Method
     */
    async getListAgen() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          if (item.type_user.includes("Agen")) {
            this.agenOptions.push(item.fullname);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get Province Domestic Method
     */
    async getProvinceDomestik() {
      this.provinceDomestikOptions = [];

      await axios
        .get(api_url + "/api/v1/shipping-rates/check-ongkir/province")
        .then((response) => {
          // JSON responses are automatically parsed.
          console.log(response.data.rajaongkir.results);

          response.data.rajaongkir.results.map((item) => {
            this.provinceDomestikOptions.push({
              label: item.province,
              value: item.province_id,
            });
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*
     * Get City Domestic Method
     */
    async getCityDomestik() {
      this.cityDomestikOptions = [];

      await axios
        .get(
          api_url +
            "/api/v1/shipping-rates/check-ongkir/city/" +
            this.province.value
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          // console.log(response.data.rajaongkir.results)

          response.data.rajaongkir.results.map((item) => {
            this.cityDomestikOptions.push(item.type + " " + item.city_name);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*
     * Get List Admin Method
     */
    async getListAdmin() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.adminOptions.push({
            label: item.fullname,
            value: item.id,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async generateOptionsTransaction(field) {
      console.log(field);

      let query_params = {};

      if (field == "sender_name") {
        query_params["sender_name"] = this.sender_name;
      }

      if (field == "recipient_name") {
        query_params["recipient_name"] = this.recipient_name;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/domestic-order/get-order-search-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.senderNameOptions = [];
        this.recipientNameOptions = [];

        if (field == "sender_name") {
          response.data.data.map((item) => {
            let match = this.senderNameOptions.find(
              (find) => find === item.sender_name
            );

            if (match == undefined) {
              this.senderNameOptions.push(item.sender_name);
            }
          });
        }

        if (field == "recipient_name") {
          response.data.data.map((item) => {
            let match = this.recipientNameOptions.find(
              (find) => find === item.recipient_name
            );

            if (match == undefined) {
              this.recipientNameOptions.push(item.recipient_name);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async autoInputFieldBySenderName(value) {
      let query_params = {
        sender_name: value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/domestic-order/get-order-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.sender_address = response.data.data[0].sender_address;
        this.sender_phone = response.data.data[0].sender_phone;
        this.sender_postal_code = response.data.data[0].sender_postal_code;
      } catch (error) {
        console.log(error);
      }
    },
    async autoInputFieldByRecipientName(value) {
      let query_params = {
        recipient_name: value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/domestic-order/get-order-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.recipient_address = response.data.data[0].recipient_address;
        this.recipient_postal_code =
          response.data.data[0].recipient_postal_code;
        this.recipient_phone = response.data.data[0].recipient_phone;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get Last Record Method
     */
    async getLastRecordOrder() {
      const response = await axios.get(
        `${api_url}/api/v1/transaction/domestic-order/last`,
        { headers: this.headers }
      );
      console.log(response);
      if (response.data.data === null) {
        this.lastShipmentNumber = "JED0000000001";
      } else {
        this.lastShipmentNumber = this.next(response.data.data.shipment_number);
      }
    },
    /*
     * Create Method
     */
    async createOrder() {
      const checkShipmentNumber = await axios.get(
        `${api_url}/api/v1/transaction/domestic-order/last`,
        { headers: this.headers }
      );
      console.log(checkShipmentNumber.data);
      let lastShipmentNumber;

      if (
        checkShipmentNumber.data.data === null ||
        checkShipmentNumber.data.data.length === 0
      ) {
        lastShipmentNumber = "JED0000000001";
      } else {
        this.lastShipmentNumber = this.next(
          checkShipmentNumber.data.data.shipment_number
        );
        lastShipmentNumber = checkShipmentNumber.data.data.shipment_number.replace(
          "JED",
          ""
        );
      }

      let fixResi;
      let inputShipmentNumber = this.lastShipmentNumber.replace("JED", "");

      // alert('Input Sekarang' + inputShipmentNumber);
      // alert('Terakhir Diinput' + lastShipmentNumber);

      if (Number(lastShipmentNumber) < Number(inputShipmentNumber)) {
        fixResi = this.lastShipmentNumber;
      } else if (
        Number(lastShipmentNumber) == Number(inputShipmentNumber) ||
        Number(lastShipmentNumber) > Number(inputShipmentNumber)
      ) {
        let resiBaru = "JED" + lastShipmentNumber;
        fixResi = this.next(resiBaru);
      }

      let data = {
        /* Lembaran Pengirim */
        shipment_number:
          lastShipmentNumber == "JED0000000001" ? "JED0000000001" : fixResi,
        shipment_date: new Date(this.shipment_date),
        sender_name: this.sender_name,
        sender_address: this.sender_address,
        sender_phone: this.sender_phone,
        sender_postal_code: this.sender_postal_code,
        /* Lembaran Penerima */
        recipient_name: this.recipient_name,
        province: this.province.label,
        city: this.city,
        recipient_address: this.recipient_address,
        recipient_postal_code: this.recipient_postal_code,
        recipient_phone: this.recipient_phone,
        /* Informasi Barang/Ekspedisi */
        courier: this.courier,
        cargo_service: this.cargo_service,
        awb_no: this.awb_no,
        weight: this.weight,
        service_type: this.service_type,
        shipment_fee: this.shipment_fee,
        agen_name: this.agen_name,
        content_info: this.content_info,
        bag_amount: this.bag_amount,
        /* Extra Data Form */
        position_order: this.position_order,
        status_order: this.status_order,
        amount_paid: this.amount_paid,
        branch: this.profileData.branch._id,
        input_by: this.profileData.id,
      };

      /* Form Validation */
      this.errorSubmit = false;
      if (data.province == "" || data.city == "") {
        this.errorSubmit = true;
        this.loading = false;
        return;
      }

      try {
        const response = await axios.post(
          `${api_url}/api/v1/transaction/domestic-order/create`,
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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get by Id & Update Method
     */
    async editOrder(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/domestic-order/admin/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        /* Lembaran Pengirim */
        this.shipment_number = this.dataSelected.shipment_number;
        this.shipment_date = this.dataSelected.shipment_date;
        this.sender_name = this.dataSelected.sender_name;
        this.sender_address = this.dataSelected.sender_address;
        this.sender_phone = this.dataSelected.sender_phone;
        this.sender_postal_code = this.dataSelected.sender_postal_code;
        /* Lembaran Penerima */
        this.recipient_name = this.dataSelected.recipient_name;
        this.province = this.dataSelected.province;
        this.city = this.dataSelected.city;
        this.recipient_address = this.dataSelected.recipient_address;
        this.recipient_postal_code = this.dataSelected.recipient_postal_code;
        this.recipient_phone = this.dataSelected.recipient_phone;
        /* Informasi Barang/Ekspedisi */
        this.courier = this.dataSelected.courier;
        this.cargo_service = this.dataSelected.cargo_service;
        this.awb_no = this.dataSelected.awb_no;
        this.weight = this.dataSelected.weight;
        this.service_type = this.dataSelected.service_type;
        this.shipment_fee = this.dataSelected.shipment_fee;
        this.agen_name = this.dataSelected.agen_name;
        this.content_info = this.dataSelected.content_info;
        this.bag_amount = this.dataSelected.bag_amount;
        /* Extra Data Form */
        this.position_order = this.dataSelected.position_order;
        this.status_order = this.dataSelected.status_order;
        this.amount_paid = this.dataSelected.amount_paid;
      } catch (error) {
        console.log(error);
      }
    },
    async updateOrder() {
      let data = {
        /* Lembaran Pengirim */
        shipment_number: this.shipment_number,
        shipment_date: new Date(this.shipment_date),
        sender_name: this.sender_name,
        sender_address: this.sender_address,
        sender_phone: this.sender_phone,
        sender_postal_code: this.sender_postal_code,
        /* Lembaran Penerima */
        recipient_name: this.recipient_name,
        province: this.province.label,
        city: this.city,
        recipient_address: this.recipient_address,
        recipient_postal_code: this.recipient_postal_code,
        recipient_phone: this.recipient_phone,
        /* Informasi Barang/Ekspedisi */
        courier: this.courier,
        cargo_service: this.cargo_service,
        awb_no: this.awb_no,
        weight: this.weight,
        service_type: this.service_type,
        shipment_fee: this.shipment_fee,
        agen_name: this.agen_name,
        content_info: this.content_info,
        bag_amount: this.bag_amount,
        /* Extra Data Form */
        position_order: this.position_order,
        status_order: this.status_order,
        amount_paid: this.amount_paid,
      };

      /* Form Validation */
      this.errorSubmit = false;
      if (data.province == "" || data.city == "") {
        this.errorSubmit = true;
        this.loading = false;
        return;
      }

      try {
        const response = await axios.put(
          `${api_url}/api/v1/transaction/domestic-order/update/${this.dataSelected.id}`,
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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Delete Method
     */
    async deleteOrder() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/transaction/domestic-order/delete/${this.dataSelected.id}`,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Refresh Data */
        window.location.reload();

        /* Set Toggle */
        this.deleteConfirmModal = false;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Detail Order Method
     */
    async detailOrder(item) {
      /* Empty Data Selected */
      this.dataSelected = [];

      /* Set Data Selected & Show Detail Modal */
      this.dataSelected = item;
      this.detailModal = true;
    },
    /* Helpers */
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
    /* Helpers */
    next(invoiceNumber) {
      if (!invoiceNumber) throw new Error("invoiceNumber cannot be empty");
      var array = invoiceNumber.split(/[_/:\-;\\]+/);
      var lastSegment = array.pop();
      var priorSegment = invoiceNumber.substr(
        0,
        invoiceNumber.indexOf(lastSegment)
      );
      var nextNumber = this.alphaNumericIncrementer(lastSegment);
      return priorSegment + nextNumber;
    },
    alphaNumericIncrementer(str) {
      if (str && str.length > 0) {
        var invNum = str.replace(/([^a-z0-9]+)/gi, "");
        invNum = invNum.toUpperCase();
        var index = invNum.length - 1;
        while (index >= 0) {
          if (invNum.substr(index, 1) === "9") {
            invNum = invNum.substr(0, index) + "0" + invNum.substr(index + 1);
          } else if (invNum.substr(index, 1) === "Z") {
            invNum = invNum.substr(0, index) + "A" + invNum.substr(index + 1);
          } else {
            var char = String.fromCharCode(invNum.charCodeAt(index) + 1);
            invNum = invNum.substr(0, index) + char + invNum.substr(index + 1);
            index = 0;
          }
          index--;
        }
        return invNum;
      } else {
        throw new Error("str cannot be empty");
      }
    },
    emptyFormData() {
      /* Lembaran Pengirim */
      this.shipment_number = this.lastShipmentNumber;
      this.shipment_date = "";
      this.sender_name = "";
      this.sender_address = "";
      this.sender_phone = "";
      this.sender_postal_code = "";
      /* Lembaran Penerima */
      this.recipient_name = "";
      this.province = "";
      this.city = "";
      this.recipient_address = "";
      this.recipient_postal_code = "";
      this.recipient_phone = "";
      /* Informasi Barang/Ekspedisi */
      this.courier = "";
      this.cargo_service = "";
      this.awb_no = "";
      this.weight = "";
      this.service_type = "";
      this.shipment_fee = "";
      this.agen_name = "";
      this.content_info = "";
      this.bag_amount = "";
      /* Extra Data Form */
      this.position_order = "Agen";
      this.status_order = "";
      this.amount_paid = "";
    },
    handleSubmit() {
      if (this.dataSelected === null) {
        this.createOrder();
      } else {
        this.updateOrder();
      }
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
      let options = { year: "numeric", month: "short", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    openNewTab(url) {
      window.open(url);
    },
    refreshData() {
      this.getListData(this.page, this.limit);
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

      this.filter_start_date = this.convertDate(firstDay);
      this.filter_end_date = this.convertDate(lastDay);

      /* Refresh Data */
      this.refreshData();
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
