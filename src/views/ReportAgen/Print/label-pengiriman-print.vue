<template>
  <div>
    <div class="w-full">
      <div class="flex flex-wrap items-start">
        <div
          class="px-8 py-6 w-1/2"
          v-for="(item, index) in selectedItem"
          :key="index"
        >
          <div class="border-2 border-gray-700">
            <div class="flex mb-3">
              <div class="flex border-b-2 border-gray-800 px-4 py-2 w-5/6">
                <img
                  src="@/assets/logo-opsional2.png"
                  width="60"
                  class="mr-6"
                />
                <div class="py-3">
                  <h1 class="text-xl font-bold">JASKIPIN EXPRESS INDONESIA</h1>
                  <h5 class="text-sm font-semibold">www.jaskipin.co.id</h5>
                </div>
              </div>
              <template v-for="(data, index) in kode">
                <div
                  :key="index"
                  v-if="data.country == item.recipient_destination"
                  class="text-xl text-center w-1/5 p-8 border-b-2 border-l-2 border-gray-800"
                >
                  <div class="text-xl w-1/5 text-center ">
                    <span class="font-bold text-center">{{
                      data.alias ? data.alias : "-"
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
            <div
              class="flex items-center justify-center border-2 border-gray-800 p-1 m-3"
            >
              {{ item.agen ? item.agen.code_user : "-" }}
            </div>

            <div class="flex items-center justify-center">
              <div class="grid grid-cols-2 mb-5 py-6 px-8 space-x-10">
                <div>
                  <h1 class="text-lg font-semibold mb-2">Consignee</h1>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">
                      {{ item.recipient_name }}
                    </h2>
                  </div>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">
                      {{ item.recipient_phone }}
                    </h2>
                  </div>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">
                      {{ item.recipient_address }}
                    </h2>
                  </div>
                </div>
                <div>
                  <h1 class="text-lg font-semibold mb-2">Shipper</h1>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">
                      {{ item.sender_name }}
                    </h2>
                  </div>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">
                      {{ item.sender_phone }}
                    </h2>
                  </div>
                  <div class="flex items-start">
                    <svg
                      class="w-4 h-4 mr-2 w-1/12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                      <path
                        d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                      ></path>
                    </svg>
                    <h2 class="text-sm font-semibold w-11/12">Indonesia</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-gray-800"></div>
            <div class="flex items-center justify-center">
              {{ generateBarcode(item.shipment_number) }}
              <svg :id="'barcode-' + item.shipment_number"></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Printd from "printd";
import countries from "@/config/phone_number_code";

export default {
  data() {
    return {
      kode: [],
      cssText: [
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.4/tailwind.min.css",
      ],
    };
  },
  computed: {
    selectedItem() {
      return this.$store.state.selectedItem;
    },

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
  created() {
    this.kode = countries;
  },
  mounted() {
    /* Config Print */
    this.d = new Printd();
    const { contentWindow } = this.d.getIFrame();
    contentWindow.addEventListener("beforeprint", () =>
      console.log("before print event!")
    );
    contentWindow.addEventListener("afterprint", () =>
      console.log("after print event!")
    );

    /* Print Page */
    setTimeout(
      function() {
        this.printPage();
      }.bind(this),
      2000
    );
  },
  methods: {
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
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    async printPage() {
      await this.d.print(this.$el, [this.cssText]);
    },
    generateBarcode(value) {
      let JsBarcode = require("jsbarcode");
      window.setTimeout(function() {
        JsBarcode("#barcode-" + value, value);
      }, 0);
    },
  },
};
</script>
