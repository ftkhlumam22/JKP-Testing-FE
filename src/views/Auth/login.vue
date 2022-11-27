<template>
  <section class="background-cover h-screen">
    <div class="bg-blue-800 h-screen bg-opacity-95">
      <div class="container lg:px-0 py-20 mx-auto px-4">
        <img
          src="@/assets/logo-asli-white.png"
          width="135"
          class="mx-auto mb-3"
        />
        <h1 class="mb-6 text-center text-white font-poppins text-sm">
          Silahkan login ke akun anda
        </h1>
        <div
          class="w-full px-8 py-8 mx-auto mb-6 bg-white rounded-md shadow-xl sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
        >
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              v-show="errorStatus"
              class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-600"
            >
              <span class="text-xl inline-block mr-3 align-middle">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span class="inline-block align-middle mr-8">
                <b class="capitalize">Gagal!</b> Email atau Password anda salah!
              </span>
              <button
                @click="errorStatus = false"
                class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              >
                <span>×</span>
              </button>
            </div>
          </transition>
          <form class="space-y-4" @submit="handleLogin">
            <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700"
                >Email</span
              >
              <input
                class="bg-white border border-gray-300 rounded-md px-4 py-2 w-full hover:border-blue-700 text-sm"
                type="email"
                placeholder="cth: james@bond.com"
                required
                v-model="email"
              />
            </label>
            <label class="block">
              <span class="block mb-1 text-xs font-medium text-gray-700"
                >Password</span
              >
              <input
                class="bg-white border border-gray-300 rounded-md px-4 py-2 w-full hover:border-blue-700 text-sm"
                type="password"
                placeholder="Isi dengan password"
                required
                v-model="password"
              />
            </label>
            <button
              type="submit"
              class="w-full px-3 py-2.5 mt-1 bg-blue-700 text-white font-semibold rounded-md cursor-pointer flex items-center justify-center text-sm"
            >
              <svg
                v-show="loading"
                class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Login
            </button>
          </form>
        </div>
        <p class="mb-4 text-xs text-center text-gray-400">
          <a href="#" class="text-purple-200 underline hover:text-white"
            >Buat Akun Baru</a
          >
          ·
          <a href="#" class="text-purple-200 underline hover:text-white"
            >Lupa Password?</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  data() {
    return {
      /* Data Form */
      email: "",
      password: "",
      /* Error Message */
      errorStatus: false,
      /* Extra */
      loading: false,
    };
  },
  created() {
    let token = JSON.parse(window.localStorage.getItem("token-auth-jaskipin"));
    if (token) {
      this.$router.push("/store");
    }
  },
  methods: {
    async handleLogin(e) {
      this.loading = true;

      e.preventDefault();

      let formData = {
        email: this.email,
        password: this.password,
      };

      /* Login via API */
      try {
        const response = await axios.post(
          `${api_url}/api/v1/auth/login`,
          formData
        );
        console.log(response);

        /* Store Token to LocalStorage */
        window.localStorage.setItem(
          "token-auth-jaskipin",
          JSON.stringify(response.data)
        );

        /* Fetch Data Profile */
        try {
          const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
            headers: {
              token: response.data.token,
            },
          });
          console.log(getProfile);

          /* Store Data Profile to LocalStorage */
          window.localStorage.setItem(
            "data-profile-jaskipin",
            JSON.stringify(getProfile.data)
          );

          /* Check User */
          if (
            getProfile.data.type_user === "Master Agen" ||
            getProfile.data.type_user === "Agen"
          ) {
            this.autoLogout();
          }

          /* Refresh Page */
          window.location.reload();

          /* Set Loading State */
          this.loading = false;
        } catch (error) {
          console.error(error);
          this.loading = false;
        }
      } catch (error) {
        console.error(error);
        this.errorStatus = true;

        this.loading = false;
      }
    },
    autoLogout() {
      // Destroy Data Auth in LocalStorage
      window.localStorage.removeItem("token-auth-jaskipin");
      window.localStorage.removeItem("data-profile-jaskipin");
      // Redirect to Login Page
      window.location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.background-cover {
  background-image: url("https://cdn.pixabay.com/photo/2018/10/27/09/27/melbourne-3776101_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
</style>
