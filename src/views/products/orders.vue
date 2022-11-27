<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
    <div class="container px-4 py-10 mx-auto max-w-7xl">
      <div class="flex items-center justify-between mb-6">
        <div class="w-full flex">
          <div class="space-x-4 mr-4">
            <input
              v-model="search"
              @input="tableInputSearchHandler($event)"
              type="text"
              class="border border-gray-400 px-3 py-2 text-sm rounded-md w-full"
              placeholder="Pencarian.."
            />
          </div>
          <zselect
            v-model="limit"
            :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
            placeholder="Jumlah"
            @input="refreshData"
            class="-mt-1 mr-2"
            style="width: 80px"
          >
          </zselect>
          <zdropdown
            text="Filter Cabang"
            v-if="profileData.type_user == 'Super Admin'"
          >
            <template v-slot:item>
              <div class="py-6 px-6">
                <h4 class="text-sm font-medium mr-2 mb-1">Rentang Tanggal:</h4>
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
        <div class="lg:w-1/2 w-full">
          <div class="flex justify-end">
            <span class="px-4 text-gray-600">Total Belanja ATK:</span>
            <strong>{{ formatPrice(sumTotal()) }}</strong>
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
        <template slot="price" slot-scope="props">
          <div class="flex items-center">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ formatPrice(props.item.price) }}
            </div>
          </div>
        </template>
        <template slot="isActive" slot-scope="props">
          <div class="flex items-center">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ props.item.isActive || "-" }}
            </div>
          </div>
        </template>
        <template slot="total" slot-scope="props">
          <div class="flex items-center">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ formatPrice(props.item.price * props.item.qty) }}
            </div>
          </div>
        </template>
        <template slot="branch" slot-scope="props">
          <div class="flex items-center">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ props.item.branch ? props.item.branch.city_name : "-" }}
            </div>
          </div>
        </template>
        <template slot="createdAt" slot-scope="props">
          <div class="flex items-center">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{
                formatDate(
                  props.item.createdAt ? props.item.createdAt : new Date()
                )
              }}
            </div>
          </div>
        </template>
        <template slot="action" slot-scope="props">
          <div
            v-if="profileData.type_user == 'Super Admin'"
            class="flex items-center"
          >
            <button
              @click="checkReturn(props.item)"
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
            <button
              @click="checkDetailsOrder(props.item)"
              :disabled="props.item.isActive == 'Success' ? true : false"
              :class="
                props.item.isActive == 'Success'
                  ? 'bg-gray-400 cursor-not-allowed disabled:bg-gray-500'
                  : 'bg-blue-400 hover:bg-blue-500 border border-blue-500 hover:border-blue-600 focus:border-blue-600'
              "
              class="ml-3  rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center"
              style="font-size: 11px"
            >
              <h4 class="font-semibold">Confirm</h4>
            </button>
          </div>
          <div v-else>
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ props.item.isActive || "-" }}
            </div>
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
        :title="dataSelected.length === 0 ? 'Tambah Product' : 'Ubah Product'"
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
    <!-- modal -->
    <!-- modal -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="ConfirmModal"
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
        class="w-full max-w-xl mx-auto rounded-lg"
        v-show="ConfirmModal"
        title="Detail Product"
        @close="
          ConfirmModal = false;
          dataSelected = [];
        "
        @confirm="deleteProduct()"
      >
        <div class="p-6">
          <div class="flex bg-white overflow-hidden">
            <div class="w-full px-4">
              <h1 class="text-gray-700 text-xl">
                {{ dataSelected.name }}
              </h1>
              <br />
              <div class="my-3">
                <!-- add count plus and minus -->
                <div class="flex justify-between">
                  <div class="flex">
                    <button
                      @click="dataSelected.qty--"
                      :disabled="dataSelected.qty < 2"
                      class="bg-gray-200 text-gray-600 px-6 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      v-model="dataSelected.qty"
                      type="number"
                      class="bg-white border w-40 text-center text-gray-600 p-2 "
                      disabled
                    />
                    <button
                      @click="dataSelected.qty++"
                      class="bg-gray-200 text-gray-600 px-6 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                  <div
                    class="flex justify-center items-center text-gray-700 font-bold text-xl"
                  >
                    {{ formatPrice(dataSelected.price * dataSelected.qty) }}
                  </div>
                </div>
                <div class="my-4">
                  <!-- select option -->
                  <label
                    id="listbox-label"
                    class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                  >
                    Status Pesanan
                  </label>
                  <zselect
                    v-model="isActive"
                    :data="['Success', 'Pending']"
                    placeholder="Pilih Status"
                  >
                  </zselect>
                </div>
                <div class="my-3">
                  <label
                    id="listbox-label"
                    class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                  >
                    Feedback
                  </label>
                  <textarea
                    v-model="description"
                    class="border w-full p-3"
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="flex item-center justify-between mt-6">
                <button
                  @click="handleConfirm(dataSelected)"
                  class="p-3 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                >
                  Ubah
                </button>
              </div>
            </div>
          </div>
        </div>
      </modal>
    </transition>
    <!-- end modal -->
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
import modal from "@/components/zmodal";
import zselect from "@/components/zselect";
import zloading from "@/components/zloading";
import zdropdown from "@/components/zdropdown";
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
    zloading,
    zdropdown,
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
          field: "branch",
          label: "Cabang",
        },
        {
          field: "createdAt",
          label: "Tanggal Order",
        },
        {
          field: "qty",
          label: "Jumlah",
        },
        {
          field: "isActive",
          label: "Status",
        },
        {
          field: "total",
          label: "Total",
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
      ConfirmModal: false,
      loading: true,
      /* Form Value */
      bank_name: "",
      account_name: "",
      account_number: "",
      name: "",
      price: "",
      qty: "",
      image_url: "",
      description: "",
      isActive: "",
      /* Extra Data */
      detailCount: 1,
      branch: "",
      filterDate: "",
      start_date: "",
      end_date: "",
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
    // get store dispatch getBranches
    this.$store.dispatch("getBranch");
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
    this.filterDate = "Bulan Ini";
    this.selectRangeDate();
  },
  methods: {
    /*
     * Get Data Method
     */
    async handleConfirm(data) {
      let query_params = {
        id: data.id,
        productId: data.productId._id,
        qty: data.qty,
        description: this.description,
        isActive: this.isActive,
        image_url: data.image_url,
      };
      this.ConfirmModal = false;
      try {
        await axios.post(`${api_url}/api/v1/orders/update`, query_params, {
          headers: this.headers,
        });
        this.getListData(this.page, this.limit);
        window.location.reload();
      } catch (error) {
        new Error(error);
      }
    },
    checkDetailsOrder(product) {
      this.ConfirmModal = true;
      this.dataSelected = product;
    },
    async checkReturn(data) {
      let query_params = {
        id: data.id,
        productId: data.productId._id,
        name: data.name,
        qty: data.qty,
      };
      await axios.post(`${api_url}/api/v1/orders/delete`, query_params, {
        headers: this.headers,
      });
      this.getListData(this.page, this.limit);
      this.$router.push("/store/list");
    },
    refreshData() {
      this.getListData(this.page, this.limit);
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
        const response = await axios.get(`${api_url}/api/v1/orders`, {
          params: query_params,
          headers: this.headers,
        });
        console.log("hasil order", response);
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
    sumTotal() {
      //   reduce
      let total = this.data.data?.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
      return total;
    },

    /*
     * Delete Method
     */
    async deleteOrders() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/orders/delete/${this.dataSelected.id}`,
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
