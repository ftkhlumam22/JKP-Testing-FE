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
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="address" slot-scope="props">
              <h6 class="text-sm max-w-lg truncate">
                {{ props.item.address }}
              </h6>
            </template>
            <template slot="join" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ formatDate(props.item.join) }}
              </div>
            </template>
            <template slot="birth_date" slot-scope="props">
              <div class="text-sm text-gray-900">
                {{ formatDate(props.item.birth_date) }}
              </div>
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="editKaryawan(props.item.id)"
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
              dataSelected.length === 0 ? 'Tambah Karyawan' : 'Ubah Karyawan'
            "
            @submit="handleSubmit"
          >
            <div class="space-y-4">
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Nama Karyawan
                </label>
                <input
                  v-model="full_name"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Alex"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Jenis Kelamin
                </label>
                <zselect
                  v-model="types"
                  :data="['Laki-Laki', 'Perempuan']"
                  placeholder="Jenis Kelamin"
                ></zselect>
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
                  placeholder="contoh: Alex"
                  type="text"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Telepon
                </label>
                <input
                  v-model="phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Alex"
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
                <textarea
                  v-model="address"
                  rows="5"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                >
                </textarea>
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tanggal Lahir
                </label>
                <input
                  v-model="birth_date"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 0813-4543-5346"
                  type="date"
                />
              </div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Tanggal Masuk Kantor
                </label>
                <input
                  v-model="join"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 0813-4543-5346"
                  type="date"
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
                ? 'Berhasil! Karyawan baru sudah ditambahkan!'
                : 'Berhasil! Karyawan sudah diubah!'
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
            title="Hapus Data Karyawan"
            message="Anda yakin ingin menghapus data karyawan ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
            @close="
              deleteConfirmModal = false;
              dataSelected = [];
            "
            @confirm="deleteKaryawan()"
          ></modal>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import zselect from "@/components/zselect";
import layouts from "@/components/layouts";
import datatable from "@/components/datatables/advance_table";
import addForm from "@/components/datatables/add_form";
import notification from "@/components/datatables/notification";
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
    modal,
    zloading,
    zselect,
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
          field: "full_name",
          label: "Nama Karyawan",
        },
        {
          field: "types",
          label: "Jenis Kelamin",
        },
        {
          field: "birth_date",
          label: "Tanggal Lahir",
        },
        {
          field: "phone",
          label: "Nomor Telpon",
        },
        {
          field: "address",
          label: "Alamat",
        },
        {
          field: "email",
          label: "Email",
        },
        {
          field: "join",
          label: "Tanggal Bergabung",
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
      loading: true,
      /* Form Value */
      full_name: "",
      birth_date: "",
      address: "",
      phone: "",
      email: "",
      types: "",
      join: "",
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
        const response = await axios.get(
          `${api_url}/api/v1/users/karyawan/get`,
          { params: query_params, headers: this.headers }
        );
        console.log("response karyawan", response);
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
    async createKaryawan() {
      let data = {
        full_name: this.full_name,
        birth_date: this.birth_date,
        types: this.types,
        email: this.email,
        address: this.address,
        phone: this.phone,
        join: this.join,
      };

      try {
        const response = await axios.post(
          `${api_url}/api/v1/users/karyawan/create/admin`,
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
    async editKaryawan(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/karyawan/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        this.full_name = this.dataSelected.full_name;
        this.birth_date = this.dataSelected.birth_date;
        this.types = this.dataSelected.types;
        this.email = this.dataSelected.email;
        this.address = this.dataSelected.address;
        this.phone = this.dataSelected.phone;
        this.join = this.dataSelected.join;
      } catch (error) {
        console.log(error);
      }
    },
    async updateKaryawan() {
      let data = {
        full_name: this.full_name,
        birth_date: this.birth_date,
        types: this.types,
        email: this.email,
        address: this.address,
        phone: this.phone,
        join: this.join,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/users/karyawan/update/${this.dataSelected.id}`,
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
    async deleteKaryawan() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/users/karyawan/delete/${this.dataSelected.id}`,
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
      let options = { day: "numeric", month: "short", year: "numeric" };
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
      this.types = "";
      this.email = "";
      this.birth_date = "";
      this.address = "";
      this.phone = "";
      this.join = "";
    },
    handleSubmit() {
      if (this.dataSelected.length === 0) {
        this.createKaryawan();
      } else {
        this.updateKaryawan();
      }
    },
  },
};
</script>

<style scoped></style>
