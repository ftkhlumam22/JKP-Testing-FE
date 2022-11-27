<template>
  <div class="px-10 py-10 max-w-5xl">
    <!-- Header -->
    <div class="flex items-center mb-5">
      <img src="@/assets/logo-opsional2.png" class="w-20" />
      <div class="ml-5">
        <h1 class="font-semibold text-2xl font-sans">
          JASKIPIN EXPRESS INDONESIA
        </h1>
        <h4>www.jaskipin.co.id</h4>
      </div>
    </div>
    <template v-if="selectedColumns.find((item) => item.field == 'courier')">
      <h1 class="font-semibold text-center text-lg mb-3">Surat Jalan Cabang</h1>
    </template>
    <template v-else>
      <h1 class="font-semibold text-center text-lg mb-3">
        Carrier: {{ selectedItem[0].courier }}
      </h1>
      <h5 class="text-xs font-semibold text-right mr-1 mb-1">
        {{ formatDate(new Date()) }}
      </h5>
      <hr class="border-gray-800 mb-5" style="border: 1px solid black" />
      <h1 class="font-semibold text-center text-lg mb-3">Manifest Export</h1>
    </template>
    <table class="w-full">
      <thead>
        <tr>
          <td
            class="border border-gray-800 px-2 text-center font-semibold text-sm"
          >
            No
          </td>
          <td
            v-for="(item, i) in selectedColumns"
            :key="i"
            class="border border-gray-800 px-2 text-center font-semibold text-sm"
          >
            {{ item.label }}
          </td>
          <!-- <td class="border border-gray-800 px-2 text-center font-semibold text-sm">
                        Tujuan
                    </td>
                    <td class="border border-gray-800 px-2 text-center font-semibold text-sm">
                        AWB
                    </td>
                    <td class="border border-gray-800 px-2 text-center font-semibold text-sm">
                        Berat
                    </td>
                    <td class="border border-gray-800 px-2 text-center font-semibold text-sm">
                        Cabang
                    </td> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedItem" :key="index">
          <td class="border border-gray-800 px-2 text-sm">{{ index + 1 }}</td>
          <td
            v-for="(column, i) in selectedColumns"
            :key="i"
            class="border border-gray-800 px-2 text-sm"
          >
            <template v-if="column.field == 'createdAt'">
              {{ formatDate(item[column.field]) }}
            </template>

            <template v-else-if="column.field == 'shipment_fee'">
              {{ "Rp" + formatPrice(item[column.field]) }}
            </template>
            <template v-else-if="column.field == 'agen'">
              {{ item["agen"] ? item["agen"].fullname : item["agen_general"] }}
            </template>
            <template v-else-if="column.field == 'branch'">
              {{ item["branch"].city_name }}
            </template>
            <template v-else>
              {{ item[column.field] }}
            </template>
            <!-- {{ column.field == 'createdAt' ? formatDate(item[column.field]) : item[column.field] }} -->
          </td>
          <!-- <td class="border border-gray-800 px-2 text-sm">{{ item.recipient_destination }}</td>
                    <td class="border border-gray-800 px-2 text-sm">{{ item.awb_no }}</td>
                    <td class="border border-gray-800 px-2 text-sm">{{ item.weight }}</td>
                    <td class="border border-gray-800 px-2 text-sm capitalize">{{ profileData.branch }}</td> -->
        </tr>
      </tbody>
    </table>
    <h4 class="font-medium text-xs mt-3">
      *Mohon di cek dan informasikan jika ada ketidaksesuaian data.
    </h4>
    <div class="flex items-center justify-end mt-10">
      <div class="text-right">
        <h1 class="text-sm font-semibold mb-8">
          {{ profileData.branch.city_name }}, {{ formatDate(new Date()) }}
        </h1>
        <h3 class="text-sm font-semibold">{{ profileData.fullname }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Printd from "printd";

export default {
  data() {
    return {
      cssText: [
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.4/tailwind.min.css",
      ],
      berat: [],
    };
  },
  computed: {
    selectedItem() {
      return this.$store.state.selectedItem;
    },
    selectedColumns() {
      return this.$store.state.selectedColumns;
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
  mounted() {
    /* Config Print */
    console.log("total", this.totalBerat());
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
    totalBerat() {
      const sum = this.$store.state.selectedItem.detail_volume?.reduce(
        (a, { berat }) => {
          return a + berat;
        },
        0
      );
      return sum;
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
