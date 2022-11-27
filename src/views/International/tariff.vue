<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-center justify-between mb-6">
            <div class="lg:w-1/2 w-full">
              <input
                v-model="search"
                @input="tableInputSearchHandler($event)"
                type="text"
                class="border border-gray-400 px-3 py-2 text-sm rounded-md lg:w-1/2 w-full"
                placeholder="Pencarian.."
              />
            </div>
            <button
              @click="detailModalDialog = true"
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
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="cost" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ `Rp${formatPrice(props.item.cost)}` }}
              </div>
            </template>
            <template slot="courier" slot-scope="props">
              <div class="text-sm text-gray-900">{{ props.item.courier }}</div>
              <!-- <div class="text-sm text-gray-500">Optimization</div> -->
            </template>
            <template slot="category" slot-scope="props">
              <div class="text-sm text-gray-900">{{ props.item.category }}</div>
            </template>
            <template slot="etd" slot-scope="props">
              <div class="text-sm text-gray-900">{{ props.item.etd }}</div>
            </template>
            <template slot="destination" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ props.item.destination }}
              </div>
            </template>
            <template slot="weight" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ Math.ceil(props.item.weight / 1000) + "kg" }}
              </div>
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="editTariff(props.item.id)"
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
                ? 'Tambah Tarif Pengiriman'
                : 'Ubah Tarif Pengiriman'
            "
            @submit="handleSubmit"
          >
            <div class="space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tujuan
                </label>
                <input
                  v-model="destination"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Australia"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Kurir
                </label>
                <zselect
                  v-model="courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Jenis Paket
                </label>
                <zselect
                  v-model="category"
                  :data="[
                    'Produk Umum',
                    'Makanan',
                    'Herbal',
                    'Dokumen',
                    'Kosmetik',
                  ]"
                  placeholder="Pilih Jenis Paket"
                >
                </zselect>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Estimasi
                </label>
                <input
                  v-model="etd"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 3 - 4 Hari"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Harga
                </label>
                <input
                  v-model="cost"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 85000"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Berat (gram)
                </label>
                <input
                  v-model="weight"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 1000"
                  type="text"
                />
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
                ? 'Berhasil! Tarif baru sudah ditambahkan!'
                : 'Berhasil! Tarif sudah diubah!'
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
            title="Hapus Data Tarif"
            message="Anda yakin ingin menghapus data tarif ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = [];
            "
            @confirm="deleteTariff()"
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
            title="Import Data Expedisi"
            @close="detailModalDialog = false"
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
                    href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1620118522/template-csv/Template_Tarif_poxfab.csv"
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
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import zselect from "@/components/zselect";
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
    layouts,
    datatable,
    zselect,
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
      columns: [
        {
          field: "destination",
          label: "Tujuan",
        },
        {
          field: "courier",
          label: "Kurir",
        },
        {
          field: "category",
          label: "Jenis Paket",
        },
        {
          field: "etd",
          label: "Estimasi",
        },
        {
          field: "cost",
          label: "Tarif",
        },
        {
          field: "weight",
          label: "Berat",
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
      loading: true,
      /* Form Value */
      destination: "",
      courier: "",
      category: "",
      etd: "",
      cost: "",
      weight: "",
      /* Extra Data */
      courierOptions: [],
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.getListCourier();
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
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/cost`,
          { params: query_params }
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
        this.courierOptions = response.data.map((item) => {
          return {
            label: item.courier_name,
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
    async createTariff() {
      let data = {
        destination: this.destination,
        courier: this.courier.label,
        category: this.category,
        etd: this.etd,
        cost: this.cost,
        weight: this.weight,
      };

      try {
        const response = await axios.post(
          `${api_url}/api/v1/shipping-rates/cost`,
          data
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
    /*
     * Get by Id & Update Method
     */
    async editTariff(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/cost/get/${id}`
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.destination = this.dataSelected.destination;
        this.courier = this.dataSelected.courier;
        this.category = this.dataSelected.category;
        this.etd = this.dataSelected.etd;
        this.cost = this.dataSelected.cost;
        this.weight = this.dataSelected.weight;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTariff() {
      let data = {
        destination: this.destination,
        courier: this.courier.label,
        category: this.category,
        etd: this.etd,
        cost: this.cost,
        weight: this.weight,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/shipping-rates/cost/update/${this.dataSelected.id}`,
          data
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
    /*
     * Delete Method
     */
    async deleteTariff() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/shipping-rates/cost/delete/${this.dataSelected.id}`
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
    emptyFormData() {
      this.destination = "";
      this.courier = "";
      this.category = "";
      this.etd = "";
      this.cost = "";
      this.weight = "";
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createTariff();
      } else {
        this.updateTariff();
      }
    },
    async uploadFileCSV(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/shipping-rates/cost/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.detailModalDialog = false;
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
