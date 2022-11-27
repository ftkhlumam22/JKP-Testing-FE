<template>
  <layouts>
    <template #content>
      <div class="bg-white h-full">
    <div class="container px-4 py-10 mx-auto max-w-7xl">
      <div class="max-w-5xl mx-auto">
        <div class="rounded-lg mx-2 mb-5 px-2 z-10 relative lg:mt-10">
          <div class="w-full">
            <div
              class="bg-white shadow border border-blue-400 rounded-md mx-auto lg:px-16 pt-10 pb-16"
            >
              <div class="mx-6">
                <div class="container md:px-12 mx-auto">
                  <p class="font-semibold text-gray-600 mb-2">
                    Masukkan No Order
                  </p>
                  <input
                    v-model="noOrder"
                    class="w-full bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-blue-500 text-sm px-4 py-2 mb-5"
                    placeholder="Ex. JEX...."
                    type="text"
                  />
                  <button
                    @click="checkOrder"
                    class="inline-flex items-center justify-center w-full text-white bg-blue-800 font-bold border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-sm"
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
                    Lacak Pengiriman
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- result -->
        <div v-if="checkOrderToggle === true" class="mt-20">
          <div
            class="bg-white shadow-lg rounded-lg mx-4 mb-5 z-10 relative -mt-12 lg:mt-6"
          >
            <div class="flex justify-between lg:mb-14">
              <div class="flex shadow w-full">
                <div
                  class="w-full flex rounded-t-lg focus:outline-none items-center justify-center px-8 py-3 text-base leading-6 font-semibold text-white bg-blue-800 transition duration-150 md:py-4 md:text-xl md:px-10 p-4"
                >
                  Hasil Pencarian (
                  <strong>{{
                    dataTracking.data.detail_order.id_order
                      ? dataTracking.data.detail_order.id_order
                      : dataTracking.data.detail_order.shipment_number
                  }}</strong>
                  )
                </div>
              </div>
            </div>
            <div class="max-w-screen-md md:mx-auto mx-4">
              <div class="max-w-7xl mx-auto lg:px-16 pt-10 pb-16">
                <div class="max-w-screen-md mx-auto">
                  <div class="container md:px-12 mx-auto mb-2 pb-4">
                    <div>
                      <h1>Kode Pengiriman</h1>
                      <h1>
                        <strong>
                          {{
                            dataTracking.data.detail_order.id_order
                              ? dataTracking.data.detail_order.id_order
                              : dataTracking.data.detail_order.shipment_number
                          }}
                        </strong>
                      </h1>
                    </div>
                    <br />
                    <div class="flex justify-between">
                      <div>
                        <h1>Pengirim</h1>
                        <h1>
                          <strong>
                            {{
                              dataTracking.data.detail_order.nama_pengirim
                                ? dataTracking.data.detail_order.nama_pengirim
                                : dataTracking.data.detail_order.sender_name
                            }}</strong
                          >
                        </h1>
                      </div>
                      <div style="width:50%">
                        <h1>Alamat Pengirim</h1>
                        <h1>
                          <strong>
                            {{
                              dataTracking.data.detail_order.alamat_pengirim
                                ? dataTracking.data.detail_order.alamat_pengirim
                                : dataTracking.data.detail_order.sender_address
                            }}</strong
                          >
                        </h1>
                      </div>
                    </div>
                    <br />
                    <div class="flex justify-between">
                      <div>
                        <h1>Penerima</h1>
                        <h1>
                          <strong>{{
                            dataTracking.data.detail_order.nama_penerima
                              ? dataTracking.data.detail_order.nama_penerima
                              : dataTracking.data.detail_order.recipient_name
                          }}</strong>
                        </h1>
                      </div>
                      <div style="width:50%">
                        <h1>Alamat Penerima</h1>
                        <h1>
                          <strong>{{
                            dataTracking.data.detail_order.alamat_penerima
                              ? dataTracking.data.detail_order.alamat_penerima
                              : dataTracking.data.detail_order.recipient_address
                          }}</strong>
                        </h1>
                      </div>
                    </div>
                    <br />
                    <div class="flex justify-between">
                      <div style="width:50%">
                        <h1>Berat</h1>
                        <h1>
                          <strong
                            >{{
                              dataTracking.data.detail_order.berat
                                ? dataTracking.data.detail_order.berat
                                : dataTracking.data.detail_order.weight
                            }}
                            Kg</strong
                          >
                        </h1>
                      </div>
                      <div style="width:50%">
                        <h1>Volume</h1>
                        <h1>
                          <strong>
                            {{
                              dataTracking.data.detail_order.berat
                                ? dataTracking.data.detail_order.berat
                                : dataTracking.data.detail_order.volume_total
                            }}
                          </strong>
                        </h1>
                      </div>
                    </div>
                    <hr class="mt-2 border border-gray-900" />
                    <h1 class="my-4">Detail Pengiriman</h1>
                    <div class="">
                      <ul
                        class="events"
                        v-if="dataTracking.data.history !== []"
                      >
                        <li
                          v-for="(data, i) in dataTracking.data.history"
                          :key="i"
                        >
                          <time>{{ data.datetime ? data.datetime : "" }}</time>
                          <span
                            ><strong>{{
                              data.status ? data.status : ""
                            }}</strong>
                            {{
                              data.shipment_info ? data.shipment_info : ""
                            }}
                            [{{ data.location ? data.location : "" }}]</span
                          >
                        </li>
                      </ul>
                      <ul class="events" v-if="dataNice.history">
                        <li v-for="(data, i) in dataNice.history" :key="i">
                          <time>{{ data.datetime }}</time>
                          <span
                            ><strong>{{ data.status }}</strong>
                            {{ data.shipment_info }} [{{ data.location }}]</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="py-12 text-center px-4"
          :class="errorToggle === false ? 'hidden' : ''"
        >
          <h1 class="text-xl text-black font-bold">
            Belum Ada Data yang Dapat Ditampilkan
          </h1>
          <h2 class="text-md text-gray-700 font-bold">
            Silahkan masukkan nomor order untuk lacak paket Anda.
          </h2>
        </div>
        <!-- end result -->
      </div>
    </div>
  </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: {
    layouts,
  },
  data() {
    return {
      noOrder: "",
      remark: "",
      dataTracking: [],
      dataNice: [],
      checkOrderToggle: false,
      errorToggle: false,
      loading: false,
    };
  },
  methods: {
    async checkOrder() {
      // Kosongkan dulu
      try {
        (this.dataTracking = []), (this.checkOrderToggle = false);
        this.errorToggle = false;
        this.loading = true;
        const response = await axios.get(
          `${api_url}/api/v1/tracking/tracking/${this.noOrder}`
        );
        this.dataTracking = response.data;
        console.log(response.data);
        this.checkOrderToggle = true;
        this.loading = false;

        // check order again
        response.data.data.history.map(async (data) => {
          const dataRemake = data.remark ? data.remark : 0;
          if (dataRemake !== 0) {
            try {
              this.remark = dataRemake;
              const result = await axios.get(
                `${api_url}/api/v1/tracking/nice-express/${this.remark}`
              );
              console.log("result", result);
              this.dataNice = result.data;
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        this.errorToggle = true;
        this.loading = false;
        this.checkOrder();
        console.log(error);
      }

      // axios
      //   .get(api_url + `/api/v1/tracking/tracking/${this.noOrder}`)
      //   .then((response) => {
      //     // JSON responses are automatically parsed.
      //
      //     this.dataTracking = response.data;
      //     // console.log(response.data)
      //     this.checkOrderToggle = true;
      //     this.loading = false;
      //   })
      //   .catch((e) => {
      //     this.errorToggle = true;
      //     this.loading = false;
      //     this.checkOrder();
      //     console.log(e);
      //   });
    },
    /* Tracking Order List */
    /*
            1. Aramex: JCRX0039053 | 31538285122 [DONE]
            2. Citylink Express: JCRX0039043 | 360000101682203 [DONE]
            3. Nice Express: JCRX0039068 | 603292879 [DONE]
            4. DPEX: JCRX0006400 | 374900064722 *[ERROR]
            5. Skynet: JCRX0040044 | 601390067339 [DONE]
            6. TNT: JCRX0019425 | 108806807 [DONE]
            7. TGI Tabitha: JCRX0039038 | 900863281985 [DONE]
            8. DHL: JCRX0039295 | 6562434266 [DONE]
            9. CJ Century: JCRX0039061 | MY37035755814 [DONE]
            10. SF Express: JCRX0013532 | SF1029223801887 *[ERROR]
            11. Fedex: JCRX0023036 | 772181307637 *[ERROR]
            12. Janio: JCRX0039040 | JAS21040102835014SG [DONE]
        */
  },
};
</script>

<style scoped>
/* step */
.events li {
  display: flex;
  color: rgb(58, 58, 58);
}
.events time {
  padding: 30px 1.5em 0 0px;
  width: 20%;
  position: relative;
}
.events time::after {
  content: "";
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  transform: translateX(50%);
  border-radius: 50%;
  background: #fff;
  border: 1px #ccc solid;
  width: 0.8em;
  height: 0.8em;
}
.events span {
  padding: 0 1.5em 1.5em 1.5em;
  position: relative;
}
.events span::before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  height: 100%;
  border-left: 1px #ccc solid;
}
.events strong {
  display: block;
  font-weight: bolder;
}
.events {
  margin: 1em;
  width: 50%;
}
.events,
.events *::before,
.events *::after {
  box-sizing: border-box;
  font-family: arial;
}
</style>
