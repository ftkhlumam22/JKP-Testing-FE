<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div>
            <div class="flex grid grid-cols-2 gap-4 mb-4">
              <div
                v-if="profileData.type_user == 'Super Admin'"
                class="bg-white border border-blue-600 rounded-md p-6 h-24"
              >
                <div class="flex justify-between">
                  <div class="flex-rows">
                    <div>
                      <h3 class="text-lg font-medium text-gray-900 pb-4">
                        Biaya Operasional
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ start_date + " s/d " + end_date }}
                      </p>
                    </div>
                  </div>
                  <div class="py-4 text-gray-600 font-black text-lg">
                    {{ "Rp " + formatPrice(total_biaya) }}
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-md p-4 h-24">
                <div class="flex justify-between">
                  <div class="flex-rows">
                    <div>
                      <h3
                        v-if="profileData.type_user == 'Super Admin'"
                        class="text-lg font-medium text-gray-900 pb-4"
                      >
                        {{ branch ? "" : "Semua" }} Cabang
                        {{ branch ? branch.label : "" }}
                      </h3>
                      <h3 v-else class="text-lg font-medium text-gray-900 pb-4">
                        Cabang
                        {{ profileData.branch.city_name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ start_date + " s/d " + end_date }}
                      </p>
                    </div>
                  </div>
                  <div class="py-4 text-gray-600 font-black text-lg">
                    {{ "Rp " + formatPrice(total_biaya_cabang) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between mb-4">
              <div class="flex">
                <button
                  v-if="profileData.type_user == 'Super Admin'"
                  @click="importModalDialog = true"
                  class="bg-green-600 hover:bg-green-700 px-3 py-2 text-sm font-semibold text-white rounded-md focus:outline-none mr-2 flex items-center"
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
                <button
                  v-if="profileData.type_user == 'Super Admin'"
                  @click="backupData = true"
                  class="bg-green-600 hover:bg-green-700 px-3 py-2 text-sm font-semibold text-white rounded-md focus:outline-none mr-2 flex items-center"
                >
                  Backup Data
                </button>
                <button
                  @click="
                    formDialog = !formDialog;
                    dataSelected = [];
                    emptyFormData();
                  "
                  class=" bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in"
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
                  <h4 class="font-semibold">Tambah</h4>
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="lg:w-1/2 w-full">
              <input
                v-model="search"
                @input="tableInputSearchHandler($event)"
                type="text"
                class="mr-2 border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
                placeholder="Pencarian.."
              />
              <zdropdown
                text="Filter Transaksi"
                v-if="profileData.type_user == 'Super Admin'"
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
                    <div>
                      <label
                        id="listbox-label"
                        class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                      >
                        Cabang
                      </label>
                      <zselect
                        v-model="branch"
                        :data="branchList"
                        placeholder="Pilih Cabang"
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
            <div class="w-40">
              <zselect
                v-model="limit"
                :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                placeholder="Jumlah"
                @input="refreshData"
                class="-mt-1 mr-2"
              >
              </zselect>
            </div>
            <!-- <h1 class="text-sm font-bold ml-auto mr-3"><span class="text-gray-700 font-semibold">Total Biaya Operasional:</span> {{ 'Rp' + formatPrice( data.data.reduce((total, num) => total + parseInt(num.nominal), 0) ) }}</h1> -->
          </div>
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="category_id" slot-scope="props">
              {{
                props.item.category_id
                  ? props.item.category_id.cost_category_name
                  : "-"
              }}
            </template>
            <template slot="branch" slot-scope="props">
              {{ props.item.branch ? props.item.branch.city_name : "PUSAT" }}
            </template>
            <template slot="nominal" slot-scope="props">
              {{
                props.item.cost_date
                  ? "Rp. " + formatPrice(props.item.nominal)
                  : "-"
              }}
            </template>
            <template slot="cost_date" slot-scope="props">
              {{
                props.item.cost_date ? formatDate(props.item.cost_date) : "-"
              }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="editBiayaOperasional(props.item.id)"
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
                <button
                  @click="
                    dataSelected = props.item;
                    deleteConfirmModal = true;
                  "
                  class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center"
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
                      d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"
                    ></path>
                  </svg>
                  <h4 class="font-semibold">Hapus</h4>
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
                ? 'Tambah Biaya Operasional'
                : 'Ubah Biaya Operasional'
            "
            @submit="handleSubmit"
          >
            <div class="space-y-4">
              <div v-if="profileData.type_user == 'Super Admin'">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Cabang
                </label>
                <zselect
                  v-model="branch"
                  :data="branchList"
                  placeholder="Pilih Cabang"
                >
                </zselect>
              </div>
              <div v-if="profileData.type_user == 'Super Admin'">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kategori Pembayaran
                </label>
                <zautocomplete
                  v-model="category_id"
                  :data="categoryOptions"
                  placeholder="Pilih Kategori"
                >
                </zautocomplete>
              </div>
              <div v-if="profileData.type_user == 'Super Admin'">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Sumber Dana
                </label>
                <input
                  v-model="source_of_fund"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Ibu / Mba Mela"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Deskripsi Biaya
                </label>
                <input
                  v-model="cost_description"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Pembelian ATK"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nominal
                </label>
                <zinputcurrency
                  v-model="nominal"
                  placeholder="Rp50.000"
                ></zinputcurrency>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tanggal
                </label>
                <input
                  v-model="cost_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                  type="date"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tipe Pembayaran
                </label>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_method"
                    value="Cash"
                  />
                  <label class="ml-1">Cash</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_method"
                    value="Credit"
                  />
                  <label class="ml-1">Credit</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="payment_method"
                    value="Transfer"
                  />
                  <label class="ml-1">Transfer</label>
                </div>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Bukti
                </label>
                <input
                  v-model="proof_image"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="Link Gambar..."
                  type="text"
                />
              </div>
              <div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="isActive"
                    value="true"
                  />
                  <label class="ml-1">Setuju</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="isActive"
                    value="false"
                  />
                  <label class="ml-1">Tidak Setuju</label>
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
                ? 'Berhasil! Biaya Operasional baru sudah ditambahkan!'
                : 'Berhasil! Biaya Operasional sudah diubah!'
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
            title="Hapus Data Biaya Operasional"
            message="Anda yakin ingin menghapus data biaya operasional ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = [];
            "
            @confirm="deleteBiayaOperasional()"
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
          <detailModal
            v-show="importModalDialog"
            title="Import Biaya Operasional"
            @close="importModalDialog = false"
          >
            <div class="p-6">
              <!-- <div class="flex items-center space-x-2">
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
          </div> -->
              <div class="my-6">
                <h1>Template CSV</h1>
                <h4 class="text-sm text-gray-600 mb-2">
                  Silahkan masukkan data yang akan diimport di template file csv
                  ini.
                </h4>
                <div class="pt-2">
                  <a
                    href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1629819845/template-csv/Template_Biaya_Operasional_-_Sheet1_2_d7iarw.csv"
                    target="_blank"
                    class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2"
                    download
                    >Download Template CSV</a
                  >
                </div>
              </div>
              <div>
                <h1 class="mb-2">Upload File CSV</h1>
                <input
                  id="upload-csv"
                  accept="image/*"
                  class="hidden"
                  type="file"
                  @change="importBiayaOperasional($event)"
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
          </detailModal>
        </transition>

        <!-- import backup operasional -->

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="backupData"
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
          <detailModal
            v-show="backupData"
            title="Backup Biaya Operasional"
            @close="backupData = false"
          >
            <div class="p-6">
              <h3 class="text-gray-500 pb-3">Download Semua</h3>
              <div class="flex items-center space-x-2">
                <div class="w-1/2">
                  <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Mulai:</h4>
                  <input
                    v-model="start_operasional"
                    class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                    type="date"
                  />
                </div>
                <div class="w-1/2">
                  <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Akhir:</h4>
                  <input
                    v-model="end_operasional"
                    class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                    type="date"
                  />
                </div>
              </div>
              <button
                @click="downloadBackup"
                class="w-full font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
              >
                Download Data
              </button>
            </div>
            <hr />
            <div class="p-6">
              <h3 class="text-gray-500 pb-3">Download Per Kategori</h3>
              <div class="flex items-center space-x-2">
                <div class="w-1/2">
                  <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Mulai:</h4>
                  <input
                    v-model="start_category"
                    class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                    type="date"
                  />
                </div>
                <div class="w-1/2">
                  <h4 class="text-sm font-medium mr-2 mb-1">Tanggal Akhir:</h4>
                  <input
                    v-model="end_category"
                    class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                    type="date"
                  />
                </div>
              </div>
              <button
                @click="downloadBackupCategory"
                class="w-full font-semibold text-sm mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow mr-2"
              >
                Download Data Kategori
              </button>
            </div>
          </detailModal>
        </transition>

        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import datatable from "@/components/datatables/advance_table";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
import modal from "@/components/datatables/modal";
import zdropdown from "@/components/zdropdown";
import zinputcurrency from "@/components/zinputcurrency";
import zselect from "@/components/zselect";
import zautocomplete from "@/components/zautocomplete";
import detailModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    zinputcurrency,
    layouts,
    datatable,
    addForm,
    notification,
    modal,
    zdropdown,
    zselect,
    detailModal,
    zautocomplete,
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
          field: "category_id",
          label: "Kategori",
        },
        {
          field: "source_of_fund",
          label: "Sumber Dana",
        },
        {
          field: "cost_description",
          label: "Deskripsi Biaya",
        },
        {
          field: "nominal",
          label: "Nominal",
        },
        {
          field: "cost_date",
          label: "Tanggal",
        },
        {
          field: "payment_method",
          label: "Tipe Pembayaran",
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
      filterDate: "",
      start_date: "",
      end_date: "",
      start_operasional: "",
      end_operasional: "",
      start_category: "",
      end_category: "",
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      loading: true,
      importModalDialog: false,
      backupData: false,
      /* Form Value */
      isActive: null,
      cost_description: "",
      nominal: "",
      proof_image: "",
      payment_method: "",
      cost_information: "",
      cost_date: "",
      cost_category: "",
      branch: "",
      category_id: "",
      /* Extra Data */
      total_biaya: 0,
      total_biaya_cabang: 0,
      categoryOptions: [],
      branchOptions: [],
      source_of_fund: "",
    };
  },
  created() {
    /* Initiate Function */
    this.filterDate = "Bulan Ini";
    this.selectRangeDate();
    this.getListData(this.page, this.limit);
    this.getTotalBiaya();
    this.getTotalBiayaBranch();
    this.getListCategory();
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

    branchList() {
      return this.$store.state.branch.map((item) => {
        return {
          value: item.id,
          label: item.city_name,
        };
      });
    },
  },

  mounted() {
    this.$store.dispatch("getBranch");
  },
  methods: {
    /* Backup Operasional*/
    async downloadBackupCategory() {
      this.start_category = this.convertDate(this.start_category);
      this.end_category = this.convertDate(this.end_category);

      let query_params = {
        start_operasional: this.start_category,
        end_operasional: this.end_category,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/backup/category-biaya`,
          {
            params: query_params,
            headers: this.headers,
          }
        );
        console.log(response);

        var fileDownload = require("js-file-download");
        return fileDownload(
          response.data,
          "backup-biaya-operasional-perkategori.csv"
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
    async downloadBackup() {
      this.start_operasional = this.convertDate(this.start_operasional);
      this.end_operasional = this.convertDate(this.end_operasional);

      let query_params = {
        start_operasional: this.start_operasional,
        end_operasional: this.end_operasional,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/backup/get-operasional`,
          {
            params: query_params,
            headers: this.headers,
          }
        );
        console.log(response);

        var fileDownload = require("js-file-download");
        return fileDownload(response.data, "backup-biaya-operasional.csv");
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
          `${api_url}/api/v1/finance/biaya-operasional`,
          { params: query_params, headers: this.headers }
        );
        console.log("biaya operasional", response.data);
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
    async getListCategory() {
      let query_params = {
        pagination: false,
      };
      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/cost-category`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);

        this.categoryOptions = response.data.map((item) => {
          return {
            label: item.cost_category_name,
            value: item.id,
          };
        });
      } catch (error) {
        console.log(error);
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
    async createBiayaOperasional() {
      let data = {
        cost_description: this.cost_description,
        nominal: this.nominal,
        proof_image: this.proof_image,
        payment_method: this.payment_method,
        cost_information: this.cost_information,
        cost_date: this.cost_date,
        category_id: this.category_id.value,
        source_of_fund: this.source_of_fund,
      };
      if (this.profileData.type_user === "Super Admin") {
        data.branch = this.branch.value;
        data.isActive = true;
      } else {
        data.branch = this.profileData.branch._id;
        data.isActive = false;
      }

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/biaya-operasional/create`,
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
        this.getTotalBiaya();
        this.getTotalBiayaBranch();
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get by Id & Update Method
     */
    async editBiayaOperasional(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/biaya-operasional/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.cost_description = this.dataSelected.cost_description;
        this.nominal = this.dataSelected.nominal;
        this.proof_image = this.dataSelected.proof_image;
        this.payment_method = this.dataSelected.payment_method;
        this.cost_information = this.dataSelected.cost_information;
        this.cost_date = this.dataSelected.cost_date;
        this.source_of_fund = this.dataSelected.source_of_fund;
        this.isActive = this.dataSelected.isActive;
        // this.cost_category = this.dataSelected.cost_category
        //   ? this.dataSelected.cost_category
        //   : "";
        if (this.dataSelected.category_id) {
          this.category_id = {
            label: this.dataSelected.category_id.cost_category_name,
            value: this.dataSelected.category_id._id,
          };
        }
        if (this.dataSelected.branch) {
          this.branch = {
            label: this.dataSelected.branch.city_name,
            value: this.dataSelected.branch._id,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateBiayaOperasional() {
      let data = {
        cost_description: this.cost_description,
        nominal: this.nominal,
        proof_image: this.proof_image,
        payment_method: this.payment_method,
        cost_information: this.cost_information,
        cost_date: this.cost_date,
        cost_category: this.cost_category,
        branch: this.branch.value,
        category_id: this.category_id.value,
        source_of_fund: this.source_of_fund,
        isActive: this.isActive,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/finance/biaya-operasional/update/${this.dataSelected.id}`,
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
        this.getTotalBiaya();
        this.getTotalBiayaBranch();
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Delete Method
     */
    async deleteBiayaOperasional() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/finance/biaya-operasional/delete/${this.dataSelected.id}`,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Refresh Data */
        this.getListData(this.page, this.limit);
        this.dataSelected = [];

        /* Set Toggle */
        this.deleteConfirmModal = false;
      } catch (error) {
        console.log(error);
      }
    },
    /* Helpers */
    refreshData() {
      this.getListData(this.page, this.limit);
      this.getTotalBiaya();
      this.getTotalBiayaBranch();
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

      this.start_date = this.convertDate(firstDay);
      this.end_date = this.convertDate(lastDay);

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
    emptyFormData() {
      this.cost_description = "";
      this.nominal = "";
      this.proof_image = "";
      this.payment_method = "";
      this.cost_information = "";
      this.cost_date = "";
      this.cost_category = "";
      this.branch = "";
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createBiayaOperasional();
      } else {
        this.updateBiayaOperasional();
      }
    },
    async getTotalBiaya() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/biaya-operasional/get-total`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.total_biaya = response.data.data[0].total_cost;
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalBiayaBranch() {
      let query_params = {
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
          `${api_url}/api/v1/finance/biaya-operasional/get-total-branch`,
          { params: query_params, headers: this.headers }
        );
        console.log("biaya", response.data);

        this.total_biaya_cabang =
          response.data.data.length > 0 ? response.data.data[0].total_cost : 0;
      } catch (error) {
        console.log(error);
      }
    },
    /* Import Biaya Operasional */
    async importBiayaOperasional(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/finance/biaya-operasional/import`,
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
