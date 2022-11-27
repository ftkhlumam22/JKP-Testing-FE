<template>
  <layouts>
    <template #content>
      <div class="bg-gray-100 h-auto">
        <div class="px-4 py-10 mx-auto max-w-7xl">
          <div class="flex justify-between space-x-4">
            <div class="w-1/2">
              <div class="bg-white border rounded-md sticky top-6 p-4">
                <div class="w-full bg-white px-2">
                  <div class="flex justify-between border-b py-4">
                    <h1 class="font-semibold text-2xl">Keranjang Belanja</h1>
                  </div>
                  <template v-if="carts.length > 0">
                    <div class="flex mt-10 mb-5 border-b pb-4">
                      <h3
                        class="font-semibold text-gray-600 text-xs uppercase w-2/5"
                      >
                        Product Details
                      </h3>
                      <h3
                        class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                      >
                        Quantity
                      </h3>
                      <h3
                        class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                      >
                        Price
                      </h3>
                      <h3
                        class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
                      >
                        Total
                      </h3>
                    </div>
                    <div v-for="(cart, index) in carts" :key="index">
                      <div
                        v-if="cart.status == false"
                        class="flex items-center hover:bg-gray-100 px-2 border rounded-md py-2 mb-3"
                      >
                        <div class="flex w-2/5">
                          <!-- product -->
                          <button
                            @click="removeCart(cart)"
                            class="font-semibold text-red-500 text-xs"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                          <div class="flex justify-between ml-4 flex-grow">
                            <span class=" text-sm py-2">{{ cart.name }}</span>
                          </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                          <span class="px-2 text-gray-500">{{ cart.qty }}</span>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-xs">{{
                          formatPrice(cart.price)
                        }}</span>
                        <span class="text-center w-1/5 font-semibold text-xs">{{
                          formatPrice(cart.price * cart.qty)
                        }}</span>
                      </div>
                    </div>
                    <template v-if="profileData.type_user == 'Super Admin'">
                      <zselect
                        v-model="branchSelect"
                        :data="branchOptions"
                        placeholder="Pilih Cabang"
                      >
                      </zselect>
                    </template>

                    <button
                      @click="checkout(carts)"
                      class="flex justify-center font-semibold text-center text-white bg-blue-600 w-full rounded-lg p-2.5 text-md mt-10"
                    >
                      <span>Gaskeun...</span>
                    </button>
                  </template>
                  <template v-else>
                    <div class="flex justify-center py-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-20 w-20 text-gray-400 text-center m-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <p class="text-gray-500">Keranjang Kosong</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="mb-4 sticky top-6 bg-white">
                <input
                  type="text"
                  v-model="search"
                  placeholder="Cari Produk"
                  class="w-full rounded-lg p-3 border border-gray-300"
                />
              </div>
              <div class="grid grid-cols-3 gap-4">
                <template v-if="searchProduct.length > 0">
                  <div v-for="(product, index) in searchProduct" :key="index">
                    <div
                      class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                    >
                      <div
                        class="flex items-end justify-end h-56 w-full bg-cover object-cover"
                        :style="{
                          backgroundImage: 'url(' + product.image_url + ')',
                        }"
                      >
                        <template v-if="product.qty !== 0">
                          <button
                            @click="addToCart(product)"
                            class="p-4 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                          >
                            <svg
                              class="h-5 w-5"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              ></path>
                            </svg>
                          </button>
                        </template>
                        <template v-else>
                          <a
                            :href="
                              'https://wa.me/6287744481313?text=Hello%20Admin%20barang%20' +
                                product.name +
                                '%20sudah%20habis'
                            "
                            target="_blank"
                            class="p-4 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                          >
                            <svg
                              class="h-5 w-5"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              ></path>
                            </svg>
                          </a>
                        </template>
                      </div>
                      <div class="px-5 py-3 bg-white">
                        <h3 class="text-gray-700 text-md">
                          {{ product.name }}
                        </h3>
                        <div class="flex justify-between">
                          <span class="text-gray-500 text-sm mt-2">{{
                            formatPrice(product.price)
                          }}</span>
                          <span
                            v-if="product.qty !== 0"
                            class="text-gray-500 text-sm mt-2"
                            >Stok : {{ product.qty }}</span
                          >
                          <span
                            v-else
                            class="text-sm text-white bg-red-500 p-1 rounded-md"
                            >Stock Habis</span
                          >
                        </div>
                        <div class="my-4">
                          <button
                            @click="detailProduct(product.id)"
                            class="bg-blue-700 rounded-md w-full text-white p-2"
                          >
                            Lihat dulu aja..
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="flex justify-center items-center text-red-500">
                    data yang kamu cari tidak ada
                  </div>
                </template>

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
                        <div
                          class="w-1/3 bg-cover"
                          :style="{
                            backgroundImage:
                              'url(' + detailProductCart.image_url + ')',
                          }"
                        ></div>
                        <div class="w-2/3 px-4">
                          <h1 class="text-gray-900 font-bold text-xl">
                            {{ detailProductCart.name }}
                          </h1>
                          <div class="my-3">
                            <!-- add count plus and minus -->
                            <div class="flex justify-between">
                              <div class="flex">
                                <button
                                  @click="detailCount--"
                                  :disabled="detailCount < 2"
                                  class="bg-gray-200 text-gray-600 px-6 rounded-l-md"
                                >
                                  -
                                </button>
                                <input
                                  v-model="detailCount"
                                  type="number"
                                  class="bg-white border w-40 text-center text-gray-600 p-2 "
                                  disabled
                                />
                                <button
                                  @click="detailCount++"
                                  :disabled="
                                    detailCount > detailProductCart.qty - 1
                                  "
                                  class="bg-gray-200 text-gray-600 px-6 rounded-r-md"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div
                              :class="
                                detailCount === detailProductCart.qty
                                  ? 'block text-red-700 text-xs py-2'
                                  : 'hidden'
                              "
                            >
                              * Melebihi Stok
                            </div>
                          </div>
                          <div class="flex item-center justify-between mt-6">
                            <h1 class="text-gray-700 font-bold text-xl">
                              {{
                                formatPrice(
                                  detailProductCart.price * detailCount
                                )
                              }}
                            </h1>
                            <template v-if="detailProductCart.qty !== 0">
                              <button
                                @click="addToCartButton(detailProductCart)"
                                class="p-4 rounded-full bg-blue-600 text-white mx-5  hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                              >
                                <svg
                                  class="h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  ></path>
                                </svg>
                              </button>
                            </template>
                            <template v-else>
                              <a
                                :href="
                                  'https://wa.me/6287744481313?text=Hello%20Admin%20barang%20' +
                                    detailProductCart.name +
                                    '%20sudah%20habis'
                                "
                                target="_blank"
                                class="p-4 rounded-full bg-blue-600 text-white mx-5  hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                              >
                                <svg
                                  class="h-5 w-5"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  ></path>
                                </svg>
                              </a>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </modal>
                </transition>
                <!-- end modal -->
              </div>
            </div>
          </div>
        </div>
        <div v-show="loading"><loading></loading></div>
      </div>
    </template>
  </layouts>
</template>
<script>
import axios from "axios";
import modal from "@/components/zmodal";
import zselect from "@/components/zselect";
import layouts from "../../components/layouts.vue";
import loading from "../../components/zloading.vue";

import { api_url } from "../../config/api";
export default {
  components: {
    layouts,
    modal,
    loading,
    zselect,
  },
  data() {
    return {
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      products: [],
      ConfirmModal: false,
      dataSelected: [],
      detailProductCart: [],
      detailCount: 1,
      carts: [],
      name: "",
      price: "",
      qty: "",
      image_url: "",
      branch: "",
      user: "",
      quantity: "",
      productId: "",
      default_qty: 1,
      loading: true,
      search: null,
      branchOptions: [],
      branchSelect: "",
    };
  },
  created() {
    this.fetchProduct();
    this.fetchCart();
    this.fetchBranches();
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
    searchProduct() {
      if (this.search) {
        return this.products.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) =>
              item.name
                ? item.name.toLowerCase().includes(v)
                : item.toLowerCase().includes(v)
            );
        });
      } else {
        return this.products;
      }
    },
  },
  methods: {
    async fetchBranches() {
      let query_params = {
        pagination: false,
      };
      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          {
            headers: this.headers,
            params: query_params,
          }
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
    async addToCartButton(product) {
      let query_params = {
        productId: product.id,
        name: product.name,
        price: product.price,
        qty: this.detailCount,
        image_url: product.image_url,
        branch: this.profileData.branch._id,
        user: this.profileData.id,
      };
      try {
        await axios.post(`${api_url}/api/v1/cart/create`, query_params, {
          headers: this.headers,
        });
        this.fetchCart();
        this.fetchProduct();
        this.ConfirmModal = false;
      } catch (error) {
        console.log(error);
      }
    },
    async detailProduct(id) {
      //   fetch product by id
      try {
        const response = await axios.get(`${api_url}/api/v1/store/get/${id}`, {
          headers: this.headers,
        });
        this.ConfirmModal = true;
        this.detailProductCart = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCart() {
      try {
        let query_params = {
          branch: this.profileData.branch._id,
        };
        const response = await axios.get(`${api_url}/api/v1/cart`, {
          params: query_params,
          headers: this.headers,
        });
        this.carts = response.data.data;
      } catch (error) {
        new Error(error);
      }
    },
    async fetchProduct() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/store`, {
          params: query_params,
          headers: this.headers,
        });

        this.products = response.data.data;
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
    async checkout(cart) {
      let dataPush = [];
      cart.map((item) => {
        dataPush.push({
          id: item.id,
          productId: item.productId,
          name: item.name,
          price: item.price,
          qty: item.qty,
          image_url: item.image_url,
          branch:
            this.branchSelect.value == null
              ? item.branch
              : this.branchSelect.value,
          user: this.profileData.id,
        });
      });
      try {
        await axios.post(`${api_url}/api/v1/orders/create`, dataPush, {
          headers: this.headers,
        });
        this.$router.push("/store/orders");
      } catch (error) {
        new Error(error);
      }
    },
    async addToCart(product) {
      let query_params = {
        productId: product.id,
        name: product.name,
        price: product.price,
        qty: this.default_qty,
        image_url: product.image_url,
        branch: this.profileData.branch._id,
        user: this.profileData.id,
      };
      try {
        await axios.post(`${api_url}/api/v1/cart/create`, query_params, {
          headers: this.headers,
        });
        this.fetchCart();
        this.fetchProduct();
      } catch (error) {
        console.log(error);
      }
    },
    async removeCart(cart) {
      let query_params = {
        id: cart.id,
        name: cart.name,
        qty: cart.qty,
      };
      await axios.post(`${api_url}/api/v1/cart/remove-cart`, query_params, {
        headers: this.headers,
      });
      this.fetchCart();
      this.fetchProduct();
    },
    cartQuantity(cart) {
      return cart.qty;
    },
    async countCartPlus(cart) {
      let query_params = {
        id: cart.id,
        name: cart.name,
        qty: cart.qty + 1,
      };
      try {
        if (
          this.products.find((product) => product.name === cart.name).qty >
          cart.qty
        ) {
          await axios.post(`${api_url}/api/v1/cart/update-cart`, query_params, {
            headers: this.headers,
          });
          this.fetchCart();
          this.fetchProduct();
        } else {
          alert("Stok tidak mencukupi");
        }
      } catch (error) {
        new Error(error);
      }
    },

    async countCartMinus(cart) {
      let query_params = {
        id: cart.id,
        name: cart.name,
        qty: cart.qty - 1,
      };
      if (cart.qty > 1) {
        await axios.post(
          `${api_url}/api/v1/cart/update-cart-min`,
          query_params,
          {
            headers: this.headers,
          }
        );
        this.fetchCart();
        this.fetchProduct();
      } else {
        alert("Minimal Quantity 1");
      }
    },

    formatPrice(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(value)
        .replace(",00", "");
    },
  },
};
</script>
