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
          </div>
          <datatable
            :data="data.data"
            :columns="columns"
            :meta="data.meta"
            :PageNavHandler="pageNavHandler"
            :TableInputSearchHandler="tableInputSearchHandler"
          >
            <!-- Custom Field -->
            <template slot="agen" slot-scope="props">
              {{
                props.item.agen
                  ? props.item.agen.fullname
                  : props.item.agen_general
              }}
            </template>
            <template slot="amount_paid" slot-scope="props">
              {{
                props.item.amount_paid
                  ? "Rp" + formatPrice(props.item.amount_paid)
                  : "Rp" + 0
              }}
            </template>
            <template slot="action" slot-scope="props">
              <div class="flex items-center">
                <button
                  @click="detailTagihanAgen(props.item.id)"
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
                  <h4 class="font-semibold">Lihat Detail Tagihan</h4>
                </button>
              </div>
            </template>
            <!-- / End Custom Field -->
          </datatable>
        </div>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import datatable from "@/components/datatables/advance_table";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: { layouts, datatable, zloading },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      dataSelected: [],
      columns: [
        {
          field: "shipment_number",
          label: "No Order",
        },
        {
          field: "agen",
          label: "Nama Agen",
        },
        {
          field: "amount_paid",
          label: "Total yang Harus Dibayar",
        },
        {
          field: "payment_status",
          label: "Status Pembayaran",
        },
        // {
        //     field: 'action',
        //     label: 'Aksi'
        // }
      ],
      /* Pagination */
      page: 1,
      limit: 10,
      /* Filter */
      search: "",
      /* Toggle Dialog */
      loading: true,
      /* Form Value */
      /* Extra Data */
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

      if (this.profileData.type_user == "Master Agen") {
        query_params.master_agen = this.profileData.id;
        query_params.input_by = this.profileData.id;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/tagihan-agen`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
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
     * Get by Id & Update Method
     */
    async detailTagihanAgen(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/finance/tagihan-agen/${id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];
      } catch (error) {
        console.log(error);
      }
    },
    /* Helpers */
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
  },
};
</script>

<style scoped></style>
