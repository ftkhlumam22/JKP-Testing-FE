<template>
  <div class="px-10 py-10 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between mb-5">
      <img src="@/assets/logo-asli.png" class="w-40 h-16" />
      <div class="">
        <h1 class="font-semibold text-2xl mb-2 text-blue-500 font-sans">
          Invoice
        </h1>
        <table class="text-gray-600 text-sm">
          <tr>
            <td class="font-semibold text-black">Referensi</td>
            <td class="px-4 text-gray-600">:</td>
            <td>
              {{ invoice.invoice_number }}
            </td>
          </tr>

          <tr>
            <td class="font-semibold text-black">Tanggal Invoice</td>
            <td class="px-4 text-gray-600">:</td>
            <td>{{ formatDate(invoice.invoice_date) }}</td>
          </tr>
          <tr>
            <td class="font-semibold text-black">Tanggal Jatuh Tempo</td>
            <td class="px-4 text-gray-600">:</td>
            <td>
              {{ formatDate(invoice.invoice_due_date) }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="flex justify-between gap-6 my-4">
      <div class="w-1/3">
        <div class="border-b border-gray-800 mb-4">
          <div class="my-2 text-gray-700 text-md font-semibold">
            Info Perusahaan
          </div>
        </div>
        <h1 class="text-black font-bold">
          JASKIPIN EXPRESS
        </h1>
        <div class="text-gray-600 my-4 text-sm">
          JL.CISANGKUI NO.71 KOMPLEK STADION BIMA, KEDAWUNG, CIREBON, JAWA
          BARAT, 45153 INDONESIA <br />
          Telp: 0811244344 <br />
          Email: jaskipin@gmail.com
        </div>
      </div>
      <div class="w-1/3">
        <div class="border-b border-gray-800 mb-4">
          <div class="my-2 text-gray-700 text-md font-semibold">
            Tagihan Untuk
          </div>
        </div>
        <h1 class="text-black font-bold">
          {{ invoice.customer }}
        </h1>
        <div class="text-gray-600 my-4 text-sm">
          {{
            selectedItem[0].agen == null
              ? selectedItem[0].sender_address
              : selectedItem[0].agen.address
          }},
          {{ selectedItem[0].agen == null ? "-" : selectedItem[0].agen.city }},

          {{
            selectedItem[0].agen == null ? "" : selectedItem[0].agen.province
          }}, INDONESIA Telp:
          {{
            selectedItem[0].agen == null
              ? selectedItem[0].sender_phone
              : selectedItem[0].agen.phone
          }}
        </div>
      </div>
    </div>
    <table class="w-full rounded-lg my-4">
      <thead class="bg-gray-700 text-white">
        <tr>
          <td class="p-3 text-center font-semibold text-xs">
            No
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Tanggal Order
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Resi
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Nama Penerima
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Tujuan
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Layanan
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Berat / Volume
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Ongkir
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Total Bayar
          </td>
          <td class="p-3 text-center font-semibold text-xs">
            Sisa Bayar
          </td>
        </tr>
      </thead>
      <tbody class="bg-gray-100">
        <tr v-for="(item, index) in selectedItem" :key="index">
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ index + 1 }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ formatDate(item.createdAt) }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ item.shipment_number ? item.shipment_number : "belum di input" }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ item.recipient_name }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ item.recipient_destination }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ item.service_type }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ item.charge_weight }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ formatPrice(item.amount_paid) }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{ formatPrice(item.total_paid_cash + item.total_paid_transfer) }}
          </td>
          <td class="border-2 border-white p-2 text-center text-xs">
            {{
              formatPrice(
                item.amount_paid -
                  item.total_paid_cash -
                  item.total_paid_transfer
              )
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between my-7">
      <div></div>
      <div class="text-gray-600 text-sm">
        <table>
          <tr class="pb-2">
            <td>Total Ongkir</td>
            <td class="px-4">:</td>
            <td>{{ formatPrice(totalAmount()) }}</td>
          </tr>
          <br />
          <tr>
            <td>Total Dibayar</td>
            <td class="px-4">:</td>
            <td>{{ formatPrice(totalCashTf()) }}</td>
          </tr>
          <br />
          <tr>
            <td>PPN</td>
            <td class="px-4">:</td>
            <td>0</td>
          </tr>
          <br />
          <tr>
            <td>Sisa Tagihan</td>
            <td class="px-4">:</td>
            <td>{{ formatPrice(totalPaid()) }}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="flex justify-between mt-10">
      <div class="my-4">
        <div class="w-1/2  font-medium text-left text-md mb-1">
          KETERANGAN
        </div>
        <hr class="h-2 border-black my-3" />
        <p class="text-md pb-4 text-gray-600">
          Mohon Melakukan Pembayaran Ke Nomor Rekening :
        </p>
        <p class="text-sm text-gray-600">
          BCA : 134-1762-613 <br />
          BRI : 1322-0100-2389-508 <br />
          MANDIRI : 134-0010-181-138 (AN. SOFYANA) <br />
          BNI : 055-1588-786 (AN. ELY MEILINA) <br />
        </p>
        <br />
        <p class="text-sm text-gray-600">
          NPWP : 82.948.515.0-426.000
        </p>
      </div>
      <div class="text-right">
        <h1 class="text-sm font-semibold mb-10">
          CIREBON, {{ formatDate(new Date()) }}
        </h1>
        <h3 class="text-sm font-semibold">ELY MEILINA</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Printd from "printd";
import { api_url } from "../../../config/api";
import axios from "axios";

export default {
  data() {
    return {
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      cssText: [
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.4/tailwind.min.css",
      ],
      berat: [],
      invoice: [],
    };
  },
  computed: {
    selectedItem() {
      return this.$store.state.excludeAagen;
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
    console.log("data", this.selectedItem[0].agen.fullname);
  },
  mounted() {
    /* Config Print */
    this.getInvoiceLast();
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
    async getInvoiceLast() {
      const lastInvoice = await axios.get(
        `${api_url}/api/v1/finance/invoice-agen/latest-invoice`,
        {
          headers: this.headers,
        }
      );
      this.invoice = lastInvoice.data.data[0];
    },
    totalAmount() {
      const sum = this.$store.state.excludeAagen?.reduce(
        (a, { amount_paid }) => {
          return a + amount_paid;
        },
        0
      );
      return sum;
    },

    totalPaid() {
      const sum = this.$store.state.excludeAagen?.reduce(
        (a, { amount_paid, total_paid_cash, total_paid_transfer }) => {
          return a + amount_paid - total_paid_cash - total_paid_transfer;
        },
        0
      );
      return sum;
    },
    totalCashTf() {
      const sum = this.$store.state.excludeAagen?.reduce(
        (a, { total_paid_cash, total_paid_transfer }) => {
          return a + total_paid_cash + total_paid_transfer;
        },
        0
      );
      return sum;
    },
    formatPrice(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      })
        .format(number)
        .replace(",00", "");
    },
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    async printPage() {
      await this.d.print(this.$el, [this.cssText]);
    },
  },
};
</script>

<style scoped></style>
