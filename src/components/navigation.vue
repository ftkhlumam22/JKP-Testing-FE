<template>
  <div>
    <nav class="bg-blue-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between" style="height: 64px">
          <!-- Left: List Parent Menu -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-7"
                style="margin-top: -5px"
                src="@/assets/logo-asli-white.png"
                alt="jaskipin"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <template v-for="(item, index) in dataMenu">
                  <a
                    v-if="profileData.role.access_permission.includes(item.id)"
                    @click="$router.push(item.link)"
                    :key="index"
                    class="px-3 py-2 rounded-md text-sm font-medium flex justify-center cursor-pointer"
                    :class="
                      item.id == activeMenu
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    "
                  >
                    <div class="flex items-center">
                      <img
                        v-if="item.icon"
                        :src="require(`@/assets/icons/hero/${item.icon}.svg`)"
                        class="w-4 h-4 mr-2"
                      />
                      <img
                        v-else
                        :src="require(`@/assets/icons/hero/default.svg`)"
                        class="w-4 h-4 mr-2"
                      />
                      <span class="text-sm">{{ item.name }}</span>
                    </div>
                    <!-- <div v-if="item.id == activeMenu" class="arrow-up absolute" style="margin-top: 42px"></div> -->
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="relative">
                <button
                  @click="notificationOpen = !notificationOpen"
                  class="relative bg-blue-800 hover:bg-blue-900 p-2 rounded-full text-gray-100 hover:text-white focus:outline-none flex items-center"
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
                  <span
                    v-if="profileData.type_user == 'Super Admin'"
                    class="absolute top-1.5 right-28 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full"
                    >{{ orders }}</span
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
              <div class="ml-3 -mr-4 relative">
                <div>
                  <button
                    @click="profileOpen = !profileOpen"
                    class="bg-blue-800 hover:bg-blue-900 p-2 rounded-full text-gray-100 hover:text-white focus:outline-none"
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
                          profileData.saldo ? formatPrice(profileData.saldo) : 0
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

                    <!-- <a @click="myAccountModal = true" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer" role="menuitem">Akun Saya</a> -->

                    <!-- <a @click="$router.push('/settings/backup')" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer" role="menuitem">Backup Data</a> -->

                    <a
                      @click="handleLogout"
                      class="block px-4 py-2 text-xs text-red-600 hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      >Logout</a
                    >
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="mobileOpen = !mobileOpen"
              type="button"
              class="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-blue-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                            -->
              <svg
                class="block h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                            -->
              <svg
                class="hidden h-6 w-6"
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
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="mobileOpen" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a> -->

          <template v-for="(item, index) in dataMenu">
            <a
              href="#"
              :key="index"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >{{ item.name }}</a
            >
          </template>

          <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a> -->
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Your Profile</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Settings</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
    <nav
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
    </nav>
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
  </div>
</template>

<script>
import navMenu from "@/config/nav_menu";
import myAccount from "./my-account";
import detailModal from "@/components/datatables/detail_modal";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: { myAccount, detailModal },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data Menu */
      dataMenu: navMenu,
      activeMenu: "",
      activeMenuChildren: "",
      selectedMenu: [],
      orders: 0,
      /* Toggle Menu */
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
    async tick() {
      try {
        let params_orders = {
          pagination: false,
        };
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
        const orderResponse = await axios.get(`${api_url}/api/v1/orders`, {
          params: params_orders,
          headers: this.headers,
        });
        this.orders = orderResponse.data.data.length;

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

<style scoped>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  border-bottom: 8px solid white;
}
</style>
