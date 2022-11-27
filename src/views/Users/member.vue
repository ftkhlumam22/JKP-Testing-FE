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
      </div>
      <datatable
        :data="data.data"
        :columns="columns"
        :meta="data.meta"
        :PageNavHandler="pageNavHandler"
        :TableInputSearchHandler="tableInputSearchHandler"
      >
        <!-- Custom Field -->
        <template slot="is_status" slot-scope="props">
          <div v-if="props.item.is_status" class="text-green-400">Aktif</div>
          <div v-else class="text-red-500">Nonaktif</div>
        </template>
        <template slot="createdAt" slot-scope="props">
          <div class="text-sm text-gray-900">
            {{ formatDate(props.item.createdAt) }}
          </div>
        </template>
        <template slot="address" slot-scope="props">
          <h6 class="text-sm max-w-lg truncate">{{ props.item.address }}</h6>
        </template>
        <template slot="action" slot-scope="props">
          <div class="flex items-center">
            <button
              @click="editMember(props.item.id)"
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
              <h4 class="font-semibold">Ubah Status</h4>
            </button>
            <button
              @click="
                dataSelected = props.item;
                detailModalDialog = true;
              "
              class="bg-gray-200 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 focus:border-gray-400 rounded-md px-3 py-1 text-gray-600 focus:outline-none flex items-center mr-2"
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
              <h4 class="font-semibold">Detail Agen</h4>
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
          dataSelected.length === 0 ? 'Tambah Member' : 'Ubah Data Member'
        "
        @submit="handleSubmit"
      >
        <div class="space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Status Agen
            </label>
            <div class="flex">
              <div class="relative flex items-center">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="is_status"
                  :value="true"
                />
                <label class="ml-1">Aktif</label>
              </div>
              <div class="relative ml-6 flex items-center">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="is_status"
                  :value="false"
                />
                <label class="ml-1">Tidak Aktif</label>
              </div>
            </div>
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              v-model="full_name"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: Rizal"
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
              placeholder="contoh: rizal@gmail.com"
              type="text"
            />
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Nomor Handphone
            </label>
            <input
              v-model="phone"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: 0813-4543-5346"
              type="text"
            />
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Alamat Lengkap
            </label>
            <textarea
              v-model="address"
              rows="5"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
            >
            </textarea>
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
            ? 'Berhasil! Member baru sudah ditambahkan!'
            : 'Berhasil! Member sudah diubah!'
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
        title="Hapus Data Member"
        message="Anda yakin ingin menghapus data member ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
        @close="
          deleteConfirmModal = false;
          dataSelected = [];
        "
        @confirm="deleteMember()"
      ></modal>
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
        title="Detail Member"
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
              Nama Lengkap
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.full_name ? dataSelected.full_name : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Email
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.email ? dataSelected.email : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              No Handphone
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.phone ? dataSelected.phone : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Alamat
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.address ? dataSelected.address : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Provinsi
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.province ? dataSelected.province : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Kota
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.city ? dataSelected.city : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Instagram
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.instagram ? dataSelected.instagram : "-" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-xs font-medium text-gray-500">
              Facebook
            </dt>
            <dd
              class="mt-1 text-xs text-gray-900 font-semibold sm:mt-0 sm:col-span-2"
            >
              {{ dataSelected.facebook ? dataSelected.facebook : "-" }}
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
import datatable from "@/components/datatables/advance_table";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
import detailModal from "@/components/datatables/detail_modal";
import modal from "@/components/datatables/modal";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
    datatable,
    addForm,
    notification,
    detailModal,
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
          field: "is_status",
          label: "Status Member",
        },
        {
          field: "full_name",
          label: "Nama Lengkap",
        },
        {
          field: "email",
          label: "Email",
        },
        {
          field: "phone",
          label: "Nomor Handphone",
        },
        {
          field: "address",
          label: "Alamat Lengkap",
        },
        {
          field: "createdAt",
          label: "Tanggal Daftar",
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
      full_name: "",
      email: "",
      phone: "",
      address: "",
      /* Extra Data */
    };
  },
  created() {
    /* Initiate Function */
    this.getListData(this.page, this.limit);
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
        const response = await axios.get(`${api_url}/api/v1/users/member/get`, {
          params: query_params,
          headers: this.headers,
        });
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
    async createMember() {
      let data = {
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      };

      try {
        const response = await axios.post(
          `${api_url}/api/v1/users/member/create/admin`,
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
    async editMember(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/member/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.is_status = this.dataSelected.is_status;
        this.full_name = this.dataSelected.full_name;
        this.email = this.dataSelected.email;
        this.phone = this.dataSelected.phone;
        this.address = this.dataSelected.address;
      } catch (error) {
        console.log(error);
      }
    },
    async updateMember() {
      let data = {
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        is_status: this.is_status,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/users/member/update/${this.dataSelected.id}`,
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
    async deleteMember() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/users/member/delete/${this.dataSelected.id}`,
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
    formatDate(value) {
      let options = { year: "numeric", month: "short", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
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
    emptyFormData() {
      this.full_name = "";
      this.email = "";
      this.phone = "";
      this.address = "";
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createMember();
      } else {
        this.updateMember();
      }
    },
  },
};
</script>

<style scoped></style>
