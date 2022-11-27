<template>
  <div class="flex h-screen overflow-hidden">
    <div
      v-show="toggleMenu"
      class="w-1/5 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
    >
      <div
        class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-gray-800"
      >
        <div class="fixed flex flex-col top-0 left-0 w-1/5 bg-white h-full">
          <div
            class="flex items-center bg-blue-800 justify-center py-5 shadow-md border-r border-gray-400"
          >
            <!-- <div class="text-white text-xl uppercase font-bold">
              Jaskipin
            </div> -->
            <img src="@/assets/logo-outline.png" width="95" alt="" />
          </div>
          <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <div class="flex items-center pl-6 h-24 border-b border-gray-100">
              <div
                class="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-1">
                <p
                  class="ml-1 text-md font-medium tracking-wide truncate text-gray-700 font-sans"
                >
                  {{ profileData.fullname }}
                </p>
                <div class="badge">
                  <span
                    class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"
                    >{{ profileData.role.role_name }}</span
                  >
                </div>
              </div>
            </div>
            <ul class="flex flex-col py-4 space-y-1">
              <div class="flex flex-row items-center h-8">
                <div
                  class="flex font-semibold text-md text-gray-300 my-4 px-6 font-sans"
                >
                  Menu
                </div>
              </div>
              <div v-for="(item, index) in dataMenu" :key="index">
                <zcollapsemenu
                  :class="
                    activeMenu == item.id
                      ? 'border-r-4 border-blue-800 bg-blue-50'
                      : 'bg-transparent'
                  "
                  :title="item.name"
                  v-if="profileData.role.access_permission.includes(item.id)"
                  @click="$router.push(item.link)"
                  :key="index"
                  :imageSource="require(`@/assets/icons/hero/${item.icon}.svg`)"
                >
                  <div class="bg-gray-100">
                    <a class="mb-2">
                      <div class="flex-grow"></div>
                      <div
                        class="mb-2"
                        v-for="(result, index) in item.child"
                        :key="index"
                      >
                        <template v-if="result.subChild">
                          <zcollapsemenu
                            :class="
                              activeMenu == result.id
                                ? 'border-r-4 border-blue-800 bg-blue-50'
                                : 'bg-transparent'
                            "
                            :title="result.name"
                            v-if="
                              profileData.role.access_permission.includes(
                                item.id
                              )
                            "
                            @click="$router.push(item.link)"
                            :key="index"
                          >
                            <div
                              class="mb-2"
                              v-for="(sub, index) in result.subChild"
                              :key="index"
                            >
                              <a
                                v-if="
                                  profileData.role.access_permission.includes(
                                    sub.id
                                  )
                                "
                                @click="$router.push(sub.link)"
                                :key="index"
                                :class="
                                  activeMenuChildren == sub.id
                                    ? 'text-gray-900 font-medium '
                                    : 'text-gray-600 border-transparent'
                                "
                                class="flex text-gray-700 items-center text-md py-3 pl-14 transition cursor-pointer hover:bg-gray-200 "
                                >{{ sub.name }}</a
                              >
                            </div>
                          </zcollapsemenu>
                        </template>
                        <template v-else>
                          <a
                            v-if="
                              profileData.role.access_permission.includes(
                                result.id
                              )
                            "
                            @click="$router.push(result.link)"
                            :key="index"
                            :class="
                              activeMenuChildren == result.id
                                ? 'text-gray-900 font-medium '
                                : 'text-gray-600 border-transparent'
                            "
                            class="flex text-gray-700 items-center text-md py-3 px-8 transition cursor-pointer hover:bg-gray-200 "
                            >{{ result.name }}</a
                          >
                        </template>
                      </div>
                    </a>
                  </div>
                </zcollapsemenu>
              </div>
              <li>
                <a
                  @click="myAccountModal = true"
                  class="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-800 pr-6"
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="ml-3 text-md text-gray-600 font-medium truncate"
                    >Akun Saya</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <header class="sticky top-0 bg-white shadow-md">
        <div class="bg-blue-800 py-3 px-6">
          <div class="flex justify-between">
            <div class="flex">
              <button
                @click="toggleMenu = !toggleMenu"
                type="button"
                class="inline-flex focus:outline-none items-center justify-center p-2 rounded-md text-white outline-none transition duration-150 ease-in-out"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-8 w-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <div
                v-if="profileData.type_user === 'Super Admin'"
                class="py-3 leading-5 text-white text-lg"
              >
                <span v-show="loading"
                  >Besok Ulang tahun : <strong>{{ ultah }}</strong> yang ke-
                  <strong>{{ tahun_ultah }}</strong> tahun</span
                >
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="relative">
                  <button
                    @click="notificationOpen = !notificationOpen"
                    class="relative  p-2 rounded-full border border-white text-white focus:outline-none flex items-center"
                  >
                    <span class="sr-only">View notifications</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg
                      class="h-5 w-5"
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <h4 class="text-xs font-semibold ml-1">Notifikasi</h4>
                    <span
                      class="absolute top-1.5 right-1.5 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                      >{{ total_order }}</span
                    >
                  </button>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-show="notificationOpen"
                      class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        :href="
                          `/international/request-awb?shipment_number=${item.shipment_number}`
                        "
                        v-for="(item, index) in list_data_order"
                        :key="index"
                        class="w-full px-4 py-2 focus:outline-none text-left cursor-pointer block"
                        :class="
                          list_data_order.length !== index + 1
                            ? 'border-b border-gray-100'
                            : ''
                        "
                      >
                        <h1 class="font-semibold text-sm">
                          {{ item.shipment_number }}
                        </h1>
                        <h2 class="font-medium text-gray-400 text-xs">
                          {{ item.recipient_destination }} -
                          {{ item.recipient_name }}
                        </h2>
                      </a>
                      <button
                        @click="$router.push('/international/request-awb')"
                        class="text-xs mx-auto w-full font-semibold text-blue-700 hover:text-blue-800 border-t border-gray-100 pt-1.5 focus:outline-none"
                      >
                        Lihat Semua
                      </button>
                    </div>
                  </transition>
                </div>

                <!-- Profile dropdown -->
                <div class="ml-4 mr-4 relative">
                  <div>
                    <button
                      @click="profileOpen = !profileOpen"
                      class="border border-white p-2 rounded-full text-white  focus:outline-none"
                    >
                      <span class="sr-only">Open user menu</span>
                      <!-- Heroicon name: outline/bell -->
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div
                      v-show="profileOpen"
                      class="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <div class="px-4 py-2">
                        <h1 class="font-semibold text-sm">
                          {{ profileData.fullname }}
                        </h1>
                        <h2 class="font-medium text-gray-400 text-xs">
                          {{ profileData.role.role_name }}
                        </h2>
                      </div>

                      <hr class="mb-1" />

                      <div
                        class="px-4 py-2 flex items-center justify-between mb-1"
                      >
                        <h2 class="font-medium text-green-600 text-xs">
                          Saldo: Rp{{
                            profileData.saldo
                              ? formatPrice(profileData.saldo)
                              : 0
                          }}
                        </h2>
                        <button
                          @click="topupSaldoDialog = !topupSaldoDialog"
                          class="bg-green-600 hover:bg-green-600 focus:outline-none px-2 py-1 text-white font-semibold rounded-md text-xs"
                        >
                          Topup
                        </button>
                      </div>

                      <hr class="mb-1" />

                      <a
                        @click="handleLogout"
                        class="block px-4 py-2 text-xs text-red-600 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                        >Logout</a
                      >
                    </div>
                  </transition>
                </div>
                <!-- notif -->
                <!-- Import My Account Component -->
                <transition
                  enter-active-class="ease-out duration-300"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="opacity-100"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div
                    v-show="myAccountModal"
                    class="fixed z-10 inset-0 transition-opacity"
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
                  <myAccount
                    v-show="myAccountModal"
                    :userId="profileData.id"
                    @close="myAccountModal = false"
                  ></myAccount>
                </transition>
                <!-- Topup Saldo with Detail Modal Component -->
                <transition
                  enter-active-class="ease-out duration-300"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="opacity-100"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div
                    v-show="topupSaldoDialog"
                    class="fixed inset-0 transition-opacity z-20"
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
                    v-show="topupSaldoDialog"
                    title="Topup Saldo"
                    @close="topupSaldoDialog = false"
                  >
                    <div class="p-6">
                      <div class="mb-6">
                        <h1>Silahkan Hubungi CS/Admin untuk Isi Saldo</h1>
                        <div class="pt-4">
                          <a
                            href="https://wa.me/62811244344"
                            target="_blank"
                            class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none"
                            >Hubungi CS/Admin</a
                          >
                        </div>
                      </div>
                    </div>
                  </detailModal>
                </transition>
                <!-- end notif -->
              </div>
            </div>
          </div>
        </div>
        <!-- <nav
          v-if="selectedMenu && selectedMenu.length > 0"
          class="bg-white shadow-lg hidden md:block"
        >
          <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <template v-for="(item, index) in selectedMenu[0].child">
                  <a
                    v-if="profileData.role.access_permission.includes(item.id)"
                    @click="$router.push(item.link)"
                    :key="index"
                    class="text-gray-600 hover:text-blue-900 hover:bg-gray-100 px-4 pt-4 pb-3 text-sm font-medium border-b-4 border-transparent tracking-wide mr-6 cursor-pointer"
                    :class="
                      activeMenuChildren == item.id
                        ? 'text-blue-800 border-blue-800'
                        : 'text-gray-600 border-transparent'
                    "
                    >{{ item.name }}</a
                  >
                </template>
              </div>
            </div>
          </div>
        </nav> -->
      </header>

      <slot name="content" />
    </div>
  </div>
</template>

<script>
import navMenu from "@/config/nav_menu";
import zcollapsemenu from "@/components/zcollapsemenu";
import myAccount from "./my-account";
import detailModal from "@/components/datatables/detail_modal";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: { myAccount, detailModal, zcollapsemenu },
  data() {
    return {
      sidebar: false,
      openMenu: false,
      loading: false,
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data Menu */
      dataMenu: navMenu,
      activeMenu: "",
      activeMenuChildren: "",
      selectedMenu: [],
      ultah: "",
      tahun_ultah: "",
      /* Toggle Menu */
      toggleMenu: true,
      mobileOpen: false,
      profileOpen: false,
      notificationOpen: false,
      myAccountModal: false,
      topupSaldoDialog: false,
      /* Notification */
      total_order: 0,
      list_data_order: [],
    };
  },
  created() {
    this.activeMenu = this.$route.meta.group;
    this.selectMenu(this.activeMenu);
    this.activeMenuChildren = this.$route.name;
    this.getListData();
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
  mounted() {
    /* Refresh Data Profile */
    this.refreshDataProfile();
    /* Realtime Notification */
    this.tick();
    this.notification = setInterval(this.tick.bind(this), 60000);
    /* Guard Permission Page */
    if (this.profileData.role.access_permission.includes(this.$route.name)) {
      return;
    } else {
      let data = this.dataMenu.filter((item) => {
        return this.$route.name.includes(item.id);
      });
      data[0].child.map((item) => {
        if (
          item.id !== this.$route.name &&
          this.profileData.role.access_permission.includes(item.id)
        ) {
          this.$router.push(item.link);
        }
      });
    }
  },
  destroy() {
    clearInterval(this.notification);
  },
  methods: {
    // notif ultah
    async getListData() {
      let date_now = new Date();
      let day = date_now.getDate();
      let month = date_now.getMonth() + 1;
      let ultah = day + "-" + month;
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/karyawan/get-all`,
          { headers: this.headers }
        );
        console.log("response dd-mm", ultah);
        // console.log(response);
        response.data.data.map((item) => {
          let t = new Date(item.birth_date);
          let d = t.getDate() - 1;
          let m = t.getMonth() + 1;
          let th = t.getFullYear();
          let result = [d, m].join("-");

          // result

          if (result === ultah) {
            this.loading = true;
            this.ultah = item.full_name;
            this.tahun_ultah = date_now.getFullYear() - th;
          } else {
            return "";
          }
        });
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

    async tick() {
      try {
        let query_params = {};

        if (
          this.profileData.type_user !== "Super Admin" &&
          this.profileData.type_user !== "Gudang Pusat" &&
          this.profileData.type_user !== "CS Pusat" &&
          this.profileData.type_user !== "Finance" &&
          this.profileData.type_user !== "Akunting" &&
          this.profileData.type_user !== "Master Agen"
        ) {
          query_params.branch = this.profileData.branch._id;
        }

        if (this.profileData.type_user == "Master Agen") {
          query_params.master_agen = this.profileData.id;
          query_params.input_by = this.profileData.id;
        }

        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-total-order-notification`,
          { params: query_params, headers: this.headers }
        );
        console.log("response", response);

        this.total_order = response.data.data.total_order;
        this.list_data_order = response.data.data.list_data;
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
    selectMenu(id) {
      this.activeMenu = id;
      this.selectedMenu = this.dataMenu.filter((item) => {
        return item.id == this.activeMenu;
      });
    },
    handleLogout() {
      // Destroy Data Auth in LocalStorage
      window.localStorage.removeItem("token-auth-jaskipin");
      window.localStorage.removeItem("data-profile-jaskipin");
      // Redirect to Login Page
      this.$router.push("/");
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

    async refreshDataProfile() {
      /* Fetch Data Profile */
      try {
        const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
          headers: JSON.parse(
            window.localStorage.getItem("token-auth-jaskipin")
          ),
        });
        console.log(getProfile);

        /* Remove Recent Data Profile */
        window.localStorage.removeItem("data-profile-jaskipin");

        /* Store Data Profile to LocalStorage */
        window.localStorage.setItem(
          "data-profile-jaskipin",
          JSON.stringify(getProfile.data)
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
