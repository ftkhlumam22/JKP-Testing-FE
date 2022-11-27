<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-7xl">
          <div class="flex items-center justify-between mb-6">
            <div class="flex justify-between w-full">
              <div class="w-1/2">
                <input
                  v-model="search"
                  @input="tableInputSearchHandler($event)"
                  type="text"
                  class="border border-gray-400 px-3 mr-2 py-2 text-sm rounded-md lg:w-1/2 w-full"
                  placeholder="Pencarian.."
                />
                <zdropdown text="Filter Produk">
                  <template v-slot:item>
                    <div class="py-6 px-6">
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
                      <h1 class="font-medium text-center text-gray-500 my-5">
                        atau
                      </h1>

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
                          @input="refreshData"
                        >
                        </zselect>
                      </div>
                      <div class="flex justify-between">
                        <button
                          @click="
                            search = '';
                            filterDate = '';
                            start_date = '';
                            end_date = '';
                            branch = '';
                            refreshData();
                          "
                          class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-semibold text-white rounded-md shadow"
                        >
                          Reset Filter
                        </button>
                        <button
                          @click="downloadOrders()"
                          class="mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 text-semibold text-white rounded-md shadow"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </template>
                </zdropdown>
              </div>
            </div>
            <div class="flex">
              <zselect
                v-model="limit"
                :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
                placeholder="Jumlah"
                @input="refreshData"
                class="-mt-1 mr-2"
                style="width: 80px"
              >
              </zselect>
              <button
                @click="
                  formDialog = !formDialog;
                  dataSelected = [];
                  emptyFormData();
                "
                class="ml-auto bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in"
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
            <template slot="price" slot-scope="props">
              <div class="flex items-center">
                <div class="text-sm leading-5 font-medium text-gray-900">
                  {{ formatPrice(props.item.price) }}
                </div>
              </div>
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="editProduct(props.item.id)"
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
              dataSelected.length === 0 ? 'Tambah Product' : 'Ubah Product'
            "
            @submit="handleSubmit"
          >
            <div class="space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Produk
                </label>
                <input
                  v-model="name"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Karung"
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
                  v-model="price"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 12.000"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Stock
                </label>
                <input
                  v-model="qty"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 12"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Image Url
                </label>
                <input
                  v-model="image_url"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: https://example.com/image.png"
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
                ? 'Berhasil! Bank baru sudah ditambahkan!'
                : 'Berhasil! Bank sudah diubah!'
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
            title="Hapus Data Product"
            message="Anda yakin ingin menghapus data product ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = [];
            "
            @confirm="deleteProduct()"
          ></modal>
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
import zloading from "@/components/zloading";
import zselect from "@/components/zselect";
import zdropdown from "@/components/zdropdown";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    zdropdown,
    layouts,
    datatable,
    zselect,
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
          field: "name",
          label: "Nama Produk",
        },
        {
          field: "price",
          label: "Harga",
        },
        {
          field: "qty",
          label: "Stock",
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
      branchOptions: [],
      loading: true,
      /* Form Value */
      bank_name: "",
      account_name: "",
      account_number: "",
      name: "",
      price: "",
      qty: "",
      image_url: "",
      branch: "",
      start_date: "",
      end_date: "",
      /* Extra Data */
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.fetchBranches();
  },
  methods: {
    /*
     * Get Data Method
     */
    async downloadOrders() {
      let query_params = {
        start_date: this.start_date,
        end_date: this.end_date,
        branch: this.branch.value,
      };
      try {
        const response = await axios.get(`${api_url}/api/v1/orders/backup`, {
          params: query_params,
          headers: this.headers,
        });
        console.log("response orders", response);

        var fileDownload = require("js-file-download");
        return fileDownload(response.data, "backup-orders.csv");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBranches() {
      let query_params = {
        pagination: false,
      };
      try {
        const { data } = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          {
            params: query_params,
            headers: this.headers,
          }
        );
        console.log("data", data);
        this.branchOptions = data.map((item) => {
          return {
            value: item.id,
            label: item.city_name,
          };
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
        branch: this.branch,
        start_date: this.start_date,
        end_date: this.end_date,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/store`, {
          params: query_params,
          headers: this.headers,
        });
        console.log("Store : ", response);
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
    refreshData() {
      this.getListData(this.page, this.limit);
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
    async createProduct() {
      let data = {
        name: this.name,
        price: this.price,
        qty: this.qty,
        image_url: this.image_url,
      };

      try {
        const response = await axios.post(
          `${api_url}/api/v1/store/create`,
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
    /*
     * Get by Id & Update Method
     */
    async editProduct(id) {
      try {
        const response = await axios.get(`${api_url}/api/v1/store/get/${id}`, {
          headers: this.headers,
        });
        console.log("edit store :", response.data.data);

        /* Set Data Selected */
        this.dataSelected = response.data.data;

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.name = this.dataSelected.name;
        this.price = this.dataSelected.price;
        this.qty = this.dataSelected.qty;
        this.image_url = this.dataSelected.image_url;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct() {
      let data = {
        name: this.name,
        price: this.price,
        qty: this.qty,
        image_url: this.image_url,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/store/update/${this.dataSelected.id}`,
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
    /*
     * Delete Method
     */
    async deleteProduct() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/store/delete/${this.dataSelected.id}`,
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
    formatPrice(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(value)
        .replace(",00", "");
    },

    emptyFormData() {
      this.name = "";
      this.price = "";
      this.qty = "";
      this.image_url = "";
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createProduct();
      } else {
        this.updateProduct();
      }
    },
  },
};
</script>

<style scoped></style>
