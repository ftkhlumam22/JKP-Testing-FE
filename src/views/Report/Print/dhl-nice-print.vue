<template>
  <div class="bg-white p-8 w-full max-w-3xl">
    <div class="flex items-center space-x-8 w-full justify-center">
      <img width="80" src="@/assets/logo-opsional2.png" />
      <h1 class="text-4xl font-semibold">COMMERCIAL INVOICE</h1>
    </div>
    <div class="mt-8">
      <h3 class="font-bold">CONSIGNEE</h3>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">NAME</h3>
        <h3 class="col-span-2">: {{ data.recipient_name }}</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">PHONE</h3>
        <h3 class="col-span-2">: {{ data.recipient_phone }}</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">ADDRESS</h3>
        <h3 class="col-span-2">: {{ data.recipient_address }}</h3>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="font-bold">SHIPPER</h3>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">NAME</h3>
        <h3 class="col-span-2">: {{ data.sender_name }}</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">PHONE</h3>
        <h3 class="col-span-2">: {{ data.sender_phone }}</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">ADDRESS</h3>
        <h3 class="col-span-2">: {{ data.sender_address }}</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">WEIGHT</h3>
        <h3 class="col-span-2">: {{ data.weight }}kg</h3>
      </div>
      <div class="grid grid-cols-3">
        <h3 class="col-span-1">VOLUME</h3>
        <h3
          class="col-span-2"
          v-for="(item, index) in data.detail_volume"
          :key="index"
        >
          :
          {{
            (parseInt(item.panjang) *
              parseInt(item.lebar) *
              parseInt(item.tinggi)) /
            5000
              ? (parseInt(item.panjang) *
                  parseInt(item.lebar) *
                  parseInt(item.tinggi)) /
                5000
              : 0
          }}
          <!-- {{ data.volume_total }} -->
        </h3>
      </div>
    </div>
    <div class="mt-8">
      <table class="w-full border border-gray-700 table-auto">
        <thead>
          <tr>
            <td class="px-2 py-1 border border-gray-700 bg-yellow-300">NO</td>
            <td class="px-2 py-1 border border-gray-700 bg-yellow-300">
              PRODUCT
            </td>
            <td class="px-2 py-1 border border-gray-700 bg-yellow-300">MERK</td>
            <td class="px-2 py-1 border border-gray-700 bg-yellow-300">QTY</td>
            <td class="px-2 py- border border-gray-700 bg-yellow-300">
              PRICE ({{ $route.query.type == "IDR" ? "IDR" : "USD" }})
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.detail_item" :key="index">
            <td class="px-2 py-1 border border-gray-700">{{ index + 1 }}</td>
            <td class="px-2 py-1 border border-gray-700">
              {{ item.item_name }}
            </td>
            <td class="px-2 py-1 border border-gray-700">{{ item.code }}</td>
            <td class="px-2 py-1 border border-gray-700">{{ item.qty }}</td>
            <td class="px-2 py-1 border border-gray-700">
              {{ $route.query.type == "IDR" ? "IDR" : "USD" }}
              {{ formatPrice(Math.round(item.total_value)) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="px-2 py-1 border border-gray-700 font-bold" colspan="3">
              Total
            </td>
            <td class="px-2 py-1 border border-gray-700">
              {{
                formatPrice(
                  data.detail_item.reduce(
                    (total, num) => total + parseInt(num.qty),
                    0
                  )
                )
              }}
            </td>
            <td class="px-2 py-1 border border-gray-700">
              {{ $route.query.type == "IDR" ? "IDR" : "USD" }}
              {{
                formatPrice(
                  data.detail_item.reduce(
                    (total, num) => total + parseInt(num.total_value),
                    0
                  )
                )
              }}
            </td>
          </tr>
        </tfoot>
      </table>
      <br />
      <h1
        class="font-semibold text-center"
        v-if="data.transaction_message && data.detail_item.length > 4"
      >
        Noted: {{ data.transaction_message }}
      </h1>
      <div class="flex items-center justify-end mt-16">
        <div>
          <h1>Cirebon, {{ day }} - {{ month + 1 }} - {{ year }}</h1>
          <img class="ml-auto" src="@/assets/ttd.png" width="140" />
          <h1 class="font-semibold text-right">Sofyana,</h1>
          <h1 class="text-right">Manager</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { api_url } from "@/config/api";
import Printd from "printd";

export default {
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      detail_item: [],
      /* Extra Data */
      day: "",
      month: "",
      year: "",
      cssText: [
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.4/tailwind.min.css",
      ],
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
    totalBerat() {
      const sum = this.data.detail_volume?.reduce((a, { berat }) => {
        return a + berat;
      }, 0);
      return sum;
    },
  },
  created() {
    this.getDetailOrder();
    let today = new Date();
    this.day = today.getDate();
    this.month = today.getMonth();
    this.year = today.getFullYear();

    /* Config Print */
    this.d = new Printd();
    const { contentWindow } = this.d.getIFrame();
    contentWindow.addEventListener("beforeprint", () =>
      console.log("before print event!")
    );
    contentWindow.addEventListener("afterprint", () =>
      console.log("after print event!")
    );
  },
  methods: {
    async getDetailOrder() {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/admin/get/${this.$route.params.id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.data = response.data.data[0];

        /* Filter Kurs */
        const Money = require("money-exchange");
        const fx = new Money();

        fx.rates = {
          IDR: 14245.75,
          USD: 1,
        };

        // console.log( Number(fx.convert(28000, "IDR", "USD")).toFixed(2) );
        // console.log( Number(fx.convert(1, "USD", "IDR")).toFixed(2) );

        if (this.data.courier == "Nice Express") {
          console.log("Nice Express");
          if (this.$route.query.type == "IDR") {
            this.data.detail_item.map((item) => {
              this.detail_item.push({
                item_name: item.item_name,
                code: item.code,
                qty: item.qty,
                total_value: item.total_value,
              });
            });
          } else if (this.$route.query.type == "USD") {
            this.data.detail_item.map((item) => {
              this.detail_item.push({
                item_name: item.item_name,
                code: item.code,
                qty: item.qty,
                total_value: Number(
                  fx.convert(item.total_value, "IDR", "USD")
                ).toFixed(2),
              });
            });
          }
        }

        if (this.data.courier == "DHL") {
          console.log("DHL");
          if (this.$route.query.type == "IDR") {
            this.data.detail_item.map((item) => {
              this.detail_item.push({
                item_name: item.item_name,
                code: item.code,
                qty: item.qty,
                total_value: Number(
                  fx.convert(item.total_value, "USD", "IDR")
                ).toFixed(2),
              });
            });
          } else if (this.$route.query.type == "USD") {
            this.data.detail_item.map((item) => {
              this.detail_item.push({
                item_name: item.item_name,
                code: item.code,
                qty: item.qty,
                total_value: item.total_value,
              });
            });
          }
        }

        this.data.detail_item = this.detail_item;

        /* Print Page */
        setTimeout(
          function() {
            this.printPage();
          }.bind(this),
          2000
        );
      } catch (error) {
        console.log(error);
      }
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
    async printPage() {
      await this.d.print(this.$el, [this.cssText]);
    },
  },
};
</script>

<style scoped>
* {
  color-adjust: exact;
  -webkit-print-color-adjust: exact !important;
}
</style>
