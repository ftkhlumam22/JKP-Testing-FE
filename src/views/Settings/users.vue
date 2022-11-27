<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex justify-between mb-6">
            <div class="w-1/2 flex space-x-3">
              <div class="w-1/2 w-full">
                <input
                  v-model="search"
                  @input="tableInputSearchHandler($event)"
                  type="text"
                  class="border border-gray-400 px-3 py-2 text-sm rounded-md w-1/2 w-full"
                  placeholder="Pencarian.."
                />
              </div>
              <div class="w-full">
                <zselectmultiple
                  v-model="filter_role"
                  :data="roleOptions"
                  placeholder="Pilih Role"
                  @input="refreshData"
                >
                </zselectmultiple>
              </div>
              <div class="w-full">
                <zselect
                  v-model="branch"
                  :data="branchOptions"
                  placeholder="Pilih Cabang"
                  @input="refreshData"
                >
                </zselect>
              </div>
            </div>

            <div class="w-1/2 flex">
              <zselect
                v-model="limit"
                :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                placeholder="Jumlah"
                @input="refreshData"
                class="ml-2"
              >
              </zselect>
              <button
                @click="importModalDialog = true"
                class="ml-auto bg-green-600 hover:bg-green-700 px-3 py-2 text-sm font-semibold text-white rounded-md focus:outline-none mr-2 flex items-center"
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
                @click="
                  formDialog = !formDialog;
                  dataSelected = [];
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
                <h4 class="font-semibold">Tambah</h4>
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
            <template slot="code_user" slot-scope="props">
              {{ props.item.code_user ? props.item.code_user : "-" }}
            </template>
            <template slot="branch" slot-scope="props">
              {{ props.item.branch ? props.item.branch.city_name : "-" }}
            </template>
            <template slot="role" slot-scope="props">
              {{ props.item.role.role_name ? props.item.role.role_name : "-" }}
            </template>
            <template slot="status" slot-scope="props">
              {{ props.item.status ? "Aktif" : "Nonaktif" }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="
                    dataSelected = props.item;
                    detailModalDialog = !detailModalDialog;
                  "
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <h4 class="font-semibold">Detail</h4>
                </button>
                <button
                  @click="editUser(props.item.id)"
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
                  v-if="props.item.id !== '604adf863a22bd1cc430c020'"
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
              dataSelected.length === 0 ? 'Tambah Pengguna' : 'Ubah Pengguna'
            "
            @submit="handleSubmit"
          >
            <div class="space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kode User
                </label>
                <input
                  v-model="code_user"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: JE..."
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  v-model="fullname"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Ferdinand"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: ferdinand@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Password"
                  type="password"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  No Handphone
                </label>
                <input
                  v-model="phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 08123434343"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Alamat
                </label>
                <input
                  v-model="address"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Jl Siliwangi"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Provinsi
                </label>
                <zselect
                  v-model="province"
                  :data="provinceOptions"
                  placeholder="Pilih Provinsi"
                  @input="getCity"
                >
                </zselect>
              </div>
              <div v-if="province !== '' && cityOptions.length > 0">
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kota
                </label>
                <zselect
                  v-model="city"
                  :data="cityOptions"
                  placeholder="Pilih Kota"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Cabang
                </label>
                <zselect
                  v-model="branch"
                  :data="branchOptions"
                  placeholder="Pilih Cabang"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tipe Pengguna
                </label>
                <zselect
                  v-model="type_user"
                  :data="[
                    'Super Admin',
                    'Admin Pusat',
                    'Admin Cabang',
                    'Master Agen',
                    'Agen',
                    'Gudang Pusat',
                    'Gudang Cabang',
                    'Karyawan',
                    'Kurir',
                    'CS Pusat',
                    'Akunting',
                    'Finance',
                    'Pelanggan',
                    'Supervisor',
                  ]"
                  placeholder="Pilih Tipe Pengguna"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Hak Akses
                </label>
                <zselect
                  v-model="role"
                  :data="roleOptions"
                  placeholder="Pilih Hak Akses"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Master Agen
                </label>
                <zautocomplete
                  v-model="master_agen"
                  :data="masterAgenOptions"
                  placeholder="Pilih Master Agen"
                >
                </zautocomplete>
              </div>

              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Saldo
                </label>
                <input
                  v-model="saldo"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 15000"
                  type="number"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Akses Cabang
                </label>
                <zselectmultiple
                  v-model="type_branch"
                  :data="branchOptions"
                  placeholder="Pilih Akses Cabang"
                >
                </zselectmultiple>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Status Akun
                </label>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="status"
                    :value="true"
                  />
                  <label class="ml-1">Aktif</label>
                </div>
                <div class="relative flex items-center">
                  <input
                    class="w-4 h-4"
                    type="radio"
                    v-model="status"
                    :value="false"
                  />
                  <label class="ml-1">Tidak Aktif</label>
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
                ? 'Berhasil! Akun Pengguna Baru sudah ditambahkan!'
                : 'Berhasil! Akun Pengguna sudah diubah!'
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
            title="Hapus Akun"
            message="Anda yakin ingin menghapus akun pengguna ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = [];
            "
            @confirm="deleteUser()"
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
            title="Import Data Pengguna"
            @close="importModalDialog = false"
          >
            <div class="p-6">
              <div class="mb-6">
                <h1>Template CSV</h1>
                <h4 class="text-sm text-gray-600 mb-2">
                  Silahkan masukkan data yang akan diimport di template file csv
                  ini.
                </h4>
                <div class="pt-2">
                  <a
                    href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1622740982/template-csv/template-user_sqjsmh.csv"
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
                  @change="uploadFileCSV($event)"
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
            v-show="detailModalDialog"
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
            v-show="detailModalDialog"
            title="Detail Pengguna"
            @close="
              detailModalDialog = false;
              dataSelected = [];
            "
          >
            <dl>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Kode User
                </dt>
                <dd
                  class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
                >
                  {{ dataSelected.code_user ? dataSelected.code_user : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Nama Lengkap
                </dt>
                <dd
                  class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
                >
                  {{ dataSelected.fullname ? dataSelected.fullname : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Email
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.email ? dataSelected.email : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  No Handphone
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.phone ? dataSelected.phone : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Alamat
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.address ? dataSelected.address : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Provinsi
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.province ? dataSelected.province : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Kota
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.city ? dataSelected.city : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Cabang
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.branch ? dataSelected.branch.city_name : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Tipe Pengguna
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.type_user ? dataSelected.type_user : "-" }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Hak Akses
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ dataSelected.role ? dataSelected.role.role_name : "-" }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Master Agen
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.master_agen
                      ? dataSelected.master_agen.fullname
                      : "-"
                  }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Saldo
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.saldo
                      ? "Rp" + formatPrice(dataSelected.saldo)
                      : "Rp" + 0
                  }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-xs font-medium text-gray-500">
                  Status Akun
                </dt>
                <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                  {{
                    dataSelected.status && dataSelected.status === true
                      ? "Aktif"
                      : "Non Aktif"
                  }}
                </dd>
              </div>
            </dl>
          </detailModal>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zselect from "@/components/zselect";
// import zmultiplechoice from "@/components/zmultiplechoice";
import zselectmultiple from "@/components/zselectmultiple";
import zautocomplete from "@/components/zautocomplete";
import datatable from "@/components/datatables/advance_table";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
import modal from "@/components/datatables/modal";
import detailModal from "@/components/datatables/detail_modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    // zmultiplechoice,
    layouts,
    zselect,
    zselectmultiple,
    zautocomplete,
    datatable,
    addForm,
    notification,
    modal,
    detailModal,
    zloading,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: [],
      typeBranch: [],
      selected: [],
      count: 5,
      columns: [
        {
          field: "code_user",
          label: "Kode User",
        },
        {
          field: "fullname",
          label: "Nama Lengkap",
        },
        {
          field: "email",
          label: "Email",
        },
        {
          field: "phone",
          label: "No Handphone",
        },
        {
          field: "branch",
          label: "Cabang",
        },
        {
          field: "role",
          label: "Hak Akses",
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
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      detailModalDialog: false,
      importModalDialog: false,
      loading: true,
      /* Form Value */
      code_user: "JE" + Math.floor(Math.random() * 90000),
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      province: "",
      city: "",
      branch: "",
      role: "",
      status: "",
      type_user: "",
      master_agen: "",
      saldo: "",
      filter_role: "",
      type_branch: [],
      /* Extra Data */
      roleOptions: [],
      branchOptions: [],
      provinceOptions: [],
      cityOptions: [],
      masterAgenOptions: [],
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.getListRole();
    this.getListBranch();
    this.getProvince();
  },
  methods: {
    /*
     * Get Data Method
     */
    async getListData(page, limit) {
      this.masterAgenOptions = [];

      let query_params = {
        page: page,
        limit: limit,
        pagination: true,
        search: this.search,
        branch: this.branch.value,
      };

      let role_mutiple = [];
      if (this.filter_role.length > 0) {
        this.filter_role.map((item) => {
          role_mutiple.push(item.value);
        });
      }
      query_params.role_mutiple = role_mutiple;

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        this.data = response.data;

        /* Tambah Pilihan Master Agen */
        const responseMasterAgen = await axios.get(
          `${api_url}/api/v1/users/user`,
          { params: { pagination: false }, headers: this.headers }
        );

        console.log(responseMasterAgen);
        responseMasterAgen.data.map((item) => {
          if (item.type_user == "Master Agen") {
            this.masterAgenOptions.push({
              label: item.fullname,
              value: item.id,
            });
          }
        });

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
    async getListRole() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/role`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        this.roleOptions = response.data.map((item) => {
          return {
            label: item.role_name,
            value: item.id,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getListBranch() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log("cabang:", response);
        this.branchOptions = response.data.map((item) => {
          return {
            label: item.city_name,
            value: item.id,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get Province Domestic Method
     */
    async getProvince() {
      this.provinceOptions = [];

      await axios
        .get(api_url + "/api/v1/shipping-rates/check-ongkir/province")
        .then((response) => {
          // JSON responses are automatically parsed.
          console.log(response.data.rajaongkir.results);

          response.data.rajaongkir.results.map((item) => {
            this.provinceOptions.push({
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
    async getCity() {
      this.cityOptions = [];
      this.city = "";

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
            this.cityOptions.push({
              label: item.type + " " + item.city_name,
              value: item.province_id,
            });
          });
        })
        .catch((e) => {
          console.log(e);
        });
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
    async createUser() {
      let data = {
        code_user: this.code_user,
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
        province: this.province.label,
        city: this.city.label,
        branch: this.branch.value,
        role: this.role.value,
        status: this.status,
        type_user: this.type_user,
        master_agen: this.master_agen.value,
        type_branch: this.type_branch,
        saldo: this.saldo,
      };

      console.log(data);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/users/user/create`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.formDialog = false;
        this.successNotification = true;

        // /* Set Data Empty */
        this.emptyFormData();

        // /* Refresh Data */
        window.location.reload();
        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get by Id & Update Method
     */
    async editUser(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/user/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.fullname = this.dataSelected.fullname;
        this.email = this.dataSelected.email;
        this.password = "";
        this.phone = this.dataSelected.phone;
        this.address = this.dataSelected.address;
        this.code_user = this.dataSelected.code_user
          ? this.dataSelected.code_user
          : this.code_user;
        // this.province = this.dataSelected.province;
        // this.city = this.dataSelected.city;
        if (this.dataSelected.province) {
          this.province = this.provinceOptions.find(
            (e) => e.label === this.dataSelected.province
          );
        }
        if (this.dataSelected.city) {
          this.cityOptions = [];
          await this.getCity();
          this.city = this.cityOptions.find(
            (e) => e.label === this.dataSelected.city
          );
        }
        this.branch = {
          label: this.dataSelected.branch.city_name,
          value: this.dataSelected.branch._id,
        };
        this.type_branch = this.dataSelected.type_branch.map((item) => {
          return {
            label: item.label,
            value: item.value,
          };
        });

        this.role = {
          label: this.dataSelected.role.role_name,
          value: this.dataSelected.role._id,
        };
        if (this.dataSelected.master_agen) {
          this.master_agen = {
            label: this.dataSelected.master_agen.fullname,
            value: this.dataSelected.master_agen._id,
          };
        }
        this.saldo = this.dataSelected.saldo ? this.dataSelected.saldo : 0;
        this.status = this.dataSelected.status;
        this.type_user = this.dataSelected.type_user
          ? this.dataSelected.type_user
          : "";
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser() {
      let data = {
        code_user: this.code_user,
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
        branch: this.branch.value,
        role: this.role.value,
        status: this.status,
        type_user: this.type_user,
        master_agen: this.master_agen.value,
        type_branch: this.type_branch,
        saldo: this.saldo,
      };

      if (this.province) {
        data.province = this.province.label;
      }

      if (this.city) {
        data.city = this.city.label;
      }

      try {
        // console.log('test data',data)
        const response = await axios.put(
          `${api_url}/api/v1/users/user/update/${this.dataSelected.id}`,
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
        this.getListData(this.page, this.limit);
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Delete Method
     */
    async deleteUser() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/users/user/delete/${this.dataSelected.id}`,
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
    // async resetDataUser() {
    //     try {
    //         const response = await axios.delete(`${api_url}/api/v1/users/user/delete-all`, { headers: this.headers });
    //         console.log(response.data);

    //         /* Refresh Data */
    //         this.getListData(this.page, this.limit);
    //     }catch (error) {
    //         console.log(error);
    //     }
    // },
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

    refreshData() {
      this.getListData(this.page, this.limit);
    },
    emptyFormData() {
      this.fullname = "";
      this.email = "";
      this.password = "";
      this.phone = "";
      this.address = "";
      this.province = "";
      this.city = "";
      this.branch = "";
      this.role = "";
      this.status = "";
      this.type_user = "";
      this.master_agen = "";
      this.saldo = 0;
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createUser();
      } else {
        this.updateUser();
      }
    },
    async uploadFileCSV(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/users/user/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.importModalDialog = false;
        this.successNotification = true;

        /* Refresh Data */
        // this.getListData(this.page, this.limit);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
