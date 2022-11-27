<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="opacity-100 translate-y-0 sm:scale-100"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full lg:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white">
            <div class="px-4 py-5 sm:px-6 flex items-center justify-between">
              <div>
                <h3 class="text-base leading-6 font-medium text-gray-900">
                  Akun Saya
                </h3>
                <p class="mt-1 max-w-xl text-sm text-gray-500">
                  Pengaturan Akun Profil
                </p>
              </div>
              <button
                @click="close"
                class="rounded-md text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="border-t border-gray-200">
              <div class="px-8 py-8">
                <div class="space-y-4">
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
                      Kota
                    </label>
                    <input
                      v-model="city"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                      placeholder="contoh: Cirebon"
                      type="text"
                    />
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
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                @click="updateUser"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Simpan
              </button>
              <button
                @click="close"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </transition>
      <!-- notification -->
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
    </div>
  </div>
</template>

<script>
import zselect from "@/components/zselect";
import notification from "@/components/datatables/notification";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: { zselect, notification },
  props: {
    userId: String,
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      dataSelected: [],
      successNotification: false,
      /* Form Value */
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
      branch: "",
      type_user: "",
      type_branch: [],
      /* Extra Data */
      roleOptions: [],
      branchOptions: [],
    };
  },
  mounted() {
    this.getUser(this.userId);
  },
  created() {
    this.getListBranch();
  },
  methods: {
    async getListBranch() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          { params: query_params, headers: this.headers }
        );
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
    close() {
      this.$emit("close");
    },
    async getUser(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/user/get/${id}`,
          { headers: this.headers }
        );

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
        this.city = this.dataSelected.city;
        this.branch = {
          label: this.dataSelected.branch.city_name,
          value: this.dataSelected.branch._id,
        };
        this.role = {
          label: this.dataSelected.role.role_name,
          value: this.dataSelected.role._id,
        };
        this.status = this.dataSelected.status;
        this.type_user = this.dataSelected.type_user;
        this.type_branch = this.dataSelected.type_branch;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser() {
      let data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
        city: this.city,
        branch: this.branch.value,
        role: this.role.value,
        status: this.status,
        type_branch: this.type_branch,
        type_user: this.type_user,
      };

      try {
        await axios.put(
          `${api_url}/api/v1/users/user/update/${this.dataSelected.id}`,
          data,
          { headers: this.headers }
        );

        this.$emit("close");

        // Destroy Data Auth in LocalStorage
        window.localStorage.removeItem("token-auth-jaskipin");
        window.localStorage.removeItem("data-profile-jaskipin");
        // Redirect to Login Page
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
