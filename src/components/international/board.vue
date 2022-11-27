<template>
  <div>
    <div class="flex items-start justify-between mb-10">
      <div class="lg:w-1/2 w-full">
        <h1 class="text-xl text-gray-800 font-medium mb-3">
          Transaksi Pengiriman ke Luar Negeri
        </h1>
        <div
          class="flex items-center"
          v-if="
            profileData.role.access_permission.includes('transaction_create')
          "
        >
          <button
            @click="
              formDialog = !formDialog;
              dataSelected = null;
              emptyFormData();
            "
            class="mr-2 bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in"
          >
            <svg
              class="w-3.5 h-3.5 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="transform:;-ms-filter:"
            >
              <path
                d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"
              ></path>
            </svg>
            <h4 class="font-semibold -mt-0.5">Tambah Transaksi</h4>
          </button>
          <button
            @click="detailModalDialog = true"
            class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h4 class="font-semibold -mt-0.5">Import Transaksi</h4>
          </button>
          <!-- <button @click="startScanBarcode" class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none flex items-center transition duration-300 ease-in">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 mr-2 fill-current" viewBox="0 0 24 24" style="transform:;-ms-filter:"><path d="M3 4v5h2V5h4V3H4C3.447 3 3 3.447 3 4zM21 9V4c0-.553-.447-1-1-1h-5v2h4v4H21zM19 19h-4v2h5c.553 0 1-.447 1-1v-5h-2V19zM9 21v-2H5v-4H3v5c0 .553.447 1 1 1H9zM2 11H22V13H2z"></path></svg>
                        <h4 class="font-semibold -mt-0.5">Scan Barcode</h4>
                    </button> -->
        </div>
      </div>
      <div>
        <div class="flex items-center justify-end mb-2">
          <form class="relative mr-2">
            <svg
              width="15"
              height="15"
              fill="currentColor"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              v-model="search_no_order"
              @input="searchNoOrder"
              class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
              type="text"
              aria-label="Pencarian.."
              placeholder="Cari No Order.."
            />
          </form>
          <form class="relative mr-2">
            <svg
              width="15"
              height="15"
              fill="currentColor"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              v-model="search_awb_no"
              @input="searchAWBNo"
              class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
              type="text"
              aria-label="Pencarian.."
              placeholder="Cari Resi.."
            />
          </form>
          <form class="relative mr-2">
            <svg
              width="15"
              height="15"
              fill="currentColor"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              v-model="search_recipient_name"
              @input="searchRecipientName"
              class="focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md py-2 pl-10"
              type="text"
              aria-label="Pencarian.."
              placeholder="Cari Nama Penerima.."
            />
          </form>
        </div>
        <div class="lg:flex lg:items-center lg:mb-0 mb-2 justify-end">
          <zselect
            v-model="limit"
            :data="[5, 10, 25, 50, 80, 100, 200, 300, 500]"
            placeholder="Jumlah"
            @input="filterLimitOrder"
            class="-mt-1 mr-2"
            style="width: 80px"
          >
          </zselect>
          <zdropdown text="Filter Kolom" class="mr-2">
            <template v-slot:item>
              <div class="py-2">
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.shipment_number"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">No Order</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.sender_name"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Nama Pengirim</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.awb"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Resi</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.courier"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Mitra Ekspedisi</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_name"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Nama Penerima</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_phone"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Telp Penerima</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.createdAt"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Tanggal Order</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.status_order"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Status</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.service_type"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Jenis Layanan</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.weight"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Berat</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.volume"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Volume</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.recipient_destination"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Negara</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.shipment_fee"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Ongkir</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.agen"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Agen</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.branch"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Cabang</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.payment_type"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Tipe Pembayaran</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.pickup_by"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Pickup</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.amount_paid"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Total Bayar Jaskipin</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.position_order"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Posisi Order</h4>
                </div>
                <div class="flex items-center w-48 px-4 py-1">
                  <input
                    v-model="filterColumnSelected.input_by"
                    type="checkbox"
                    class="w-3 h-3 mr-2"
                    :value="true"
                    @change="filterColumn"
                  />
                  <h4 class="text-sm">Admin</h4>
                </div>
              </div>
            </template>
          </zdropdown>
          <zdropdown text="Atur Tampilan" class="lg:mr-2">
            <template v-slot:item>
              <div class="py-2">
                <button
                  @click="viewOptions = 'Card'"
                  class="hover:bg-gray-50 w-full px-4 py-2 text-sm text-left focus:outline-none flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      d="M10 7H14V11H10zM16 7H20V11H16zM4 7H8V11H4zM10 13H14V17H10zM16 13H20V17H16zM4 13H8V17H4z"
                    ></path>
                  </svg>
                  Card
                </button>
                <button
                  @click="
                    viewOptions = 'List';
                    filterDate = 'Hari Ini';
                    selectRangeDate();
                  "
                  class="hover:bg-gray-50 w-full px-4 py-2 text-sm text-left focus:outline-none flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    style="transform:;-ms-filter:"
                  >
                    <path
                      d="M4 6H6V8H4zM4 11H6V13H4zM4 16H6V18H4zM20 8L20 6 18.8 6 9.2 6 8.023 6 8.023 8 9.2 8 18.8 8zM8 11H20V13H8zM8 16H20V18H8z"
                    ></path>
                  </svg>
                  List
                </button>
              </div>
            </template>
          </zdropdown>
          <zdropdown
            :text="filterDate !== '' ? filterDate : 'Filter Transaksi'"
            class="lg:mr-2"
          >
            <template v-slot:item>
              <div class="py-6 px-6">
                <h4 class="text-sm font-medium mr-2 mb-1">Rentang Tanggal:</h4>
                <zselect
                  class="mb-5"
                  v-model="filterDate"
                  :data="[
                    'Hari Ini',
                    'Bulan Ini',
                    'Tahun Ini',
                    '7 Hari Terakhir',
                    '30 Hari Terakhir',
                  ]"
                  placeholder="Pilih Periode"
                  @input="selectRangeDate"
                >
                </zselect>
                <h1 class="font-medium mb-5">atau</h1>
                <div class="flex items-center space-x-2">
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Mulai:
                    </h4>
                    <input
                      @input="filterStartDate"
                      v-model="filter_start_date"
                      class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                  <div class="w-1/2">
                    <h4 class="text-sm font-medium mr-2 mb-1">
                      Tanggal Akhir:
                    </h4>
                    <input
                      @input="filterEndDate"
                      v-model="filter_end_date"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                      type="date"
                    />
                  </div>
                </div>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">Mitra:</h4>
                <!-- <zselect v-model="filter_courier" :data="courierOptions" placeholder="Pilih Mitra Ekspedisi" @input="filterCourier">
                                </zselect> -->
                <zselectmultiple
                  v-model="filter_courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                  @input="filterCourier"
                  ref="filterCourierComponent"
                >
                </zselectmultiple>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">
                  Negara Tujuan:
                </h4>
                <!-- <zautocomplete v-model="filter_destination" :data="countryDestinationOptions" placeholder="Pilih Negara Tujuan" @input="filterDestination">
                                </zautocomplete> -->
                <zselectmultiple
                  v-model="filter_destination"
                  :data="countryDestinationOptions"
                  placeholder="Pilih Negara Tujuan"
                  @input="filterDestination"
                  ref="filterDestinationComponent"
                >
                </zselectmultiple>
                <h4 class="text-sm font-medium mr-2 mb-1 mt-2">Status:</h4>
                <zselect
                  v-model="filter_status_order"
                  :data="[
                    'Belum Ada Status',
                    'Hold',
                    'Cancel',
                    'Manifest',
                    'Pending',
                  ]"
                  placeholder="Pilih Status Order"
                  @input="filterStatusOrder"
                >
                </zselect>
                <div>
                  <h4 class="text-sm font-medium mt-2 mb-1">
                    Tanggal Manifest:
                  </h4>
                  <input
                    @input="filterManifestDate"
                    v-model="filter_manifest_date"
                    class="w-full mr-5 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                    type="date"
                  />
                </div>
                <h4 class="text-sm font-medium mt-2 mb-1">Agen:</h4>
                <zautocompleteinput
                  v-model="filter_agen"
                  :data="agenOptions"
                  placeholder="Pilih Agen"
                  @input="filterAgen"
                >
                </zautocompleteinput>
                <h4 class="text-sm font-medium mt-2 mb-1">Admin:</h4>
                <zautocompleteinput
                  v-model="filter_admin"
                  :data="adminOptions"
                  placeholder="Pilih Admin"
                  @input="filterAdmin"
                >
                </zautocompleteinput>
                <h4 class="text-sm font-medium mt-2 mb-1">Tipe Pembayaran:</h4>
                <zselect
                  v-model="filter_payment_method"
                  :data="['Cash', 'Transfer', 'Credit']"
                  placeholder="Pilih Tipe Pembayaran"
                  @input="filterPaymentMethod"
                >
                </zselect>
                <h4 class="text-sm font-medium mt-2 mb-1">Cabang:</h4>
                <zselectmultiple
                  v-model="filter_branch"
                  :data="branchOptions"
                  placeholder="Pilih Cabang"
                  @input="filterBranch"
                  ref="filterBranchComponent"
                >
                </zselectmultiple>
                <div class="flex items-center">
                  <button
                    @click="resetData"
                    class="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-semibold text-white rounded-md shadow"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            </template>
          </zdropdown>
        </div>
        <div class="flex items-center">
          <h4
            v-if="data && viewOptions == 'List' && totalShipmentFee"
            class="mr-4 text-sm mt-3"
          >
            Total Ongkir:
            <b>{{
              "Rp" + formatPrice(totalShipmentFee[0].total_shipment_fee)
            }}</b>
          </h4>
          <h4
            v-if="data && viewOptions == 'List' && totalShipmentFee"
            class="text-sm mt-3"
          >
            Total Bayar ke Jaskipin:
            <b>{{
              "Rp" + formatPrice(totalShipmentFee[0].total_amount_paid)
            }}</b>
          </h4>
        </div>
      </div>
    </div>
    <template v-if="viewOptions === 'Card'">
      <div class="flex mb-10 space-x-6">
        <div
          class="lg:w-1/5 w-full"
          @drop="onDrop($event, 'Agen', profileData.type_user)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h1 class="text-lg font-medium text-gray-800 mb-5">
            Agen
            <span class="text-gray-300"
              >({{ totalOrder.total_order_agen }})</span
            >
          </h1>
          <div
            v-for="(item, index) in dataAgen"
            :key="index"
            draggable
            @dragstart="startDrag($event, item, profileData.type_user)"
            @touchstart="show"
            @touchmove="startDrag($event, item, profileData.type_user)"
          >
            <div class="shadow-lg rounded-lg overflow-hidden mb-5">
              <div class="bg-white px-4 py-4">
                <div class="flex items-center mb-2">
                  <h1 class="text-base text-gray-900 font-semibold">
                    {{ item.shipment_number ? item.shipment_number : "-" }}
                  </h1>
                  <button
                    @click="detailOrder(item)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-if="
                      profileData.role.access_permission.includes(
                        'transaction_edit'
                      )
                    "
                    @click="editOrder(item.id)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
                  >
                    <svg
                      class="w-4 h-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 mb-2">
                    Negara Tujuan: {{ item.recipient_destination }}
                  </h4>
                  <h1
                    class="bg-gray-100 text-gray-400 px-2 py-1 rounded-full inline-flex items-center text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-2 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h1 class="mr-1">{{ formatDate(item.createdAt) }}</h1>
                  </h1>
                </div>
              </div>
              <div class="bg-red-400 px-3 py-1"></div>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/5 w-full"
          @drop="onDrop($event, 'Kurir', profileData.type_user)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h1 class="text-lg font-medium text-gray-800 mb-5">
            Kurir
            <span class="text-gray-300"
              >({{ totalOrder.total_order_kurir }})</span
            >
          </h1>
          <div
            v-for="(item, index) in dataKurir"
            :key="index"
            draggable
            @dragstart="startDrag($event, item, profileData.type_user)"
            @touchstart="show"
            @touchmove="startDrag($event, item, profileData.type_user)"
          >
            <div class="shadow-lg rounded-lg overflow-hidden mb-5">
              <div class="bg-white px-4 py-4">
                <div class="flex items-center mb-2">
                  <h1 class="text-base text-gray-900 font-semibold">
                    {{ item.shipment_number ? item.shipment_number : "-" }}
                  </h1>
                  <button
                    @click="detailOrder(item)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-if="
                      profileData.role.access_permission.includes(
                        'transaction_edit'
                      )
                    "
                    @click="editOrder(item.id)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
                  >
                    <svg
                      class="w-4 h-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 mb-2">
                    Negara Tujuan: {{ item.recipient_destination }}
                  </h4>
                  <h1
                    class="bg-gray-100 text-gray-400 px-2 py-1 rounded-full inline-flex items-center text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-2 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h1 class="mr-1">{{ formatDate(item.createdAt) }}</h1>
                  </h1>
                </div>
              </div>
              <div class="bg-gray-400 px-3 py-1"></div>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/5 w-full"
          @drop="onDrop($event, 'Cabang', profileData.type_user)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h1 class="text-lg font-medium text-gray-800 mb-5">
            Cabang
            <span class="text-gray-300"
              >({{ totalOrder.total_order_cabang }})</span
            >
          </h1>
          <div
            v-for="(item, index) in dataCabang"
            :key="index"
            draggable
            @dragstart="startDrag($event, item, profileData.type_user)"
            @touchstart="show"
            @touchmove="startDrag($event, item, profileData.type_user)"
          >
            <div class="shadow-lg rounded-lg overflow-hidden mb-5">
              <div class="bg-white px-4 py-4">
                <div class="flex items-center mb-2">
                  <h1 class="text-base text-gray-900 font-semibold">
                    {{ item.shipment_number ? item.shipment_number : "-" }}
                  </h1>
                  <button
                    @click="detailOrder(item)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-if="
                      profileData.role.access_permission.includes(
                        'transaction_edit'
                      )
                    "
                    @click="editOrder(item.id)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
                  >
                    <svg
                      class="w-4 h-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 mb-2">
                    Negara Tujuan: {{ item.recipient_destination }}
                  </h4>
                  <div class="flex items-center justify-between">
                    <h1
                      class="bg-gray-100 text-gray-400 px-2 py-1 rounded-full inline-flex items-center text-sm"
                    >
                      <svg
                        class="w-4 h-4 mr-2 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 class="mr-1">{{ formatDate(item.createdAt) }}</h1>
                    </h1>
                    <h1
                      class="text-sm text-gray-900 font-semibold flex items-center"
                    >
                      <template v-if="item.status_order">
                        <span
                          v-if="item.status_order === 'Hold'"
                          class="bg-blue-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Cancel'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Manifest'"
                          class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Lost'"
                          class="bg-gray-700 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Reject'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Retur'"
                          class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                      </template>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="bg-blue-400 px-3 py-1"></div>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/5 w-full"
          @drop="onDrop($event, 'Warehouse', profileData.type_user)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h1 class="text-lg font-medium text-gray-800 mb-5">
            Warehouse
            <span class="text-gray-300"
              >({{ totalOrder.total_order_warehouse }})</span
            >
          </h1>
          <div
            v-for="(item, index) in dataWarehouse"
            :key="index"
            draggable
            @dragstart="startDrag($event, item, profileData.type_user)"
            @touchstart="show"
            @touchmove="startDrag($event, item, profileData.type_user)"
          >
            <div class="shadow-lg rounded-lg overflow-hidden mb-5">
              <div class="bg-white px-4 py-4">
                <div class="flex items-center mb-2">
                  <h1 class="text-base text-gray-900 font-semibold">
                    {{ item.shipment_number ? item.shipment_number : "-" }}
                  </h1>
                  <button
                    @click="detailOrder(item)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-if="
                      profileData.role.access_permission.includes(
                        'transaction_edit'
                      )
                    "
                    @click="editOrder(item.id)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
                  >
                    <svg
                      class="w-4 h-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 mb-2">
                    Negara Tujuan: {{ item.recipient_destination }}
                  </h4>
                  <div class="flex items-center justify-between">
                    <h1
                      class="bg-gray-100 text-gray-400 px-2 py-1 rounded-full inline-flex items-center text-sm"
                    >
                      <svg
                        class="w-4 h-4 mr-2 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 class="mr-1">{{ formatDate(item.createdAt) }}</h1>
                    </h1>
                    <h1
                      class="text-sm text-gray-900 font-semibold flex items-center"
                    >
                      <template v-if="item.status_order">
                        <span
                          v-if="item.status_order === 'Hold'"
                          class="bg-blue-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Cancel'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Manifest'"
                          class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Lost'"
                          class="bg-gray-700 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Reject'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Retur'"
                          class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                      </template>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="bg-yellow-400 px-3 py-1"></div>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/5 w-full"
          @drop="onDrop($event, 'Mitra', profileData.type_user)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h1 class="text-lg font-medium text-gray-800 mb-5">
            Mitra
            <span class="text-gray-300"
              >({{ totalOrder.total_order_mitra }})</span
            >
          </h1>
          <div
            v-for="(item, index) in dataMitra"
            :key="index"
            draggable
            @dragstart="startDrag($event, item, profileData.type_user)"
            @touchstart="show"
            @touchmove="startDrag($event, item, profileData.type_user)"
          >
            <div class="shadow-lg rounded-lg overflow-hidden mb-5">
              <div class="bg-white px-4 py-4">
                <div class="flex items-center mb-2">
                  <h1 class="text-base text-gray-900 font-semibold">
                    {{ item.shipment_number ? item.shipment_number : "-" }}
                  </h1>
                  <button
                    @click="detailOrder(item)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-if="
                      profileData.role.access_permission.includes(
                        'transaction_edit'
                      )
                    "
                    @click="editOrder(item.id)"
                    class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
                  >
                    <svg
                      class="w-4 h-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-900 mb-2">
                    Negara Tujuan: {{ item.recipient_destination }}
                  </h4>
                  <div class="flex items-center justify-between">
                    <h1
                      class="bg-gray-100 text-gray-400 px-2 py-1 rounded-full inline-flex items-center text-sm"
                    >
                      <svg
                        class="w-4 h-4 mr-2 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 class="mr-1">{{ formatDate(item.createdAt) }}</h1>
                    </h1>
                    <h1
                      class="text-sm text-gray-900 font-semibold flex items-center"
                    >
                      <template v-if="item.status_order">
                        <span
                          v-if="item.status_order === 'Hold'"
                          class="bg-blue-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Cancel'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Manifest'"
                          class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Lost'"
                          class="bg-gray-700 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Reject'"
                          class="bg-red-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                        <span
                          v-if="item.status_order === 'Retur'"
                          class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                          >{{ item.status_order }}</span
                        >
                      </template>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="bg-green-400 px-3 py-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-between">
        <button
          @click="PageNavHandler('previous')"
          :disabled="meta.hasPrevPage == false"
          :class="meta.hasPrevPage ? 'bg-white' : 'bg-gray-200'"
          class="relative inline-flex items-center px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
        >
          Previous
        </button>
        <button
          @click="PageNavHandler('next')"
          :disabled="meta.hasNextPage == false"
          :class="meta.hasNextPage ? 'bg-white' : 'bg-gray-200'"
          class="ml-3 relative inline-flex items-center px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Next
        </button>
      </div>
    </template>
    <template v-if="viewOptions === 'List'">
      <datatable
        :data="data"
        :columns="columns"
        :meta="meta"
        :PageNavHandler="PageNavHandler"
        :TableInputSearchHandler="TableInputSearchHandler"
      >
        <!-- Custom Field -->
        <template slot="shipment_number" slot-scope="props">
          {{ props.item.shipment_number ? props.item.shipment_number : "-" }}
        </template>
        <template slot="shipment_fee" slot-scope="props">
          {{
            props.item.shipment_fee
              ? "Rp" + formatPrice(props.item.shipment_fee)
              : 0
          }}
        </template>
        <template slot="amount_paid" slot-scope="props">
          {{
            props.item.amount_paid
              ? "Rp" + formatPrice(props.item.amount_paid)
              : 0
          }}
        </template>
        <template slot="agen" slot-scope="props">
          {{
            props.item.cek_agen == "Agen"
              ? props.item.agen.fullname
              : props.item.agen_general
          }}
        </template>
        <template slot="status_order" slot-scope="props">
          {{ props.item.status_order ? props.item.status_order : "-" }}
        </template>
        <template slot="createdAt" slot-scope="props">
          {{ formatDate(props.item.createdAt) }}
        </template>
        <template slot="input_by" slot-scope="props">
          {{ props.item.input_by ? props.item.input_by.fullname : "-" }}
        </template>
        <template slot="branch" slot-scope="props">
          {{ props.item.branch ? props.item.branch.city_name : "-" }}
        </template>
        <template slot="volume" slot-scope="props">
          {{
            props.item.long && props.item.wide && props.item.height
              ? (Number(props.item.long) *
                  Number(props.item.wide) *
                  Number(props.item.height)) /
                5000
              : "-"
          }}
        </template>
        <template slot="action" slot-scope="props">
          <div class="flex items-center">
            <button
              v-if="
                props.item.shipment_number === '' &&
                  profileData.type_user.includes('Admin')
              "
              @click="approveTransaction(props.item.id)"
              class="bg-green-600 hover:bg-green-700 rounded-lg px-3 py-1.5 text-white ml-auto mr-1 text-sm focus:outline-none"
            >
              Terima Transaksi
            </button>
            <button
              @click="detailOrder(props.item)"
              class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto focus:outline-none"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button
              v-if="
                profileData.role.access_permission.includes('transaction_edit')
              "
              @click="editOrder(props.item.id)"
              class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none ml-2"
            >
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              v-if="
                profileData.role.access_permission.includes(
                  'transaction_delete'
                )
              "
              @click="
                deleteConfirmModal = true;
                dataSelected = props.item;
              "
              class="bg-red-50 hover:bg-red-100 rounded-lg px-1.5 py-1.5 text-red-300 focus:outline-none ml-2"
            >
              <svg
                class="w-4 h-4 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style="transform:;-ms-filter:"
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path
                  d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                ></path>
                <path
                  d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                ></path>
              </svg>
            </button>
          </div>
        </template>
        <!-- / End Custom Field -->
      </datatable>
    </template>
    <!-- Notification -->
    <transition
      enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <notification
        v-show="successNotification"
        :message="
          dataSelected === null
            ? 'Berhasil! Order baru sudah ditambahkan!'
            : 'Berhasil! Order sudah diubah!'
        "
        @close="successNotification = false"
      ></notification>
    </transition>
    <!-- Add/Edit Form Modal -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="formDialog"
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
      <zmodal
        v-show="formDialog"
        title="Tambah Transaksi"
        desc="Tambah transaksi pengiriman ke luar negeri"
        @close="
          formDialog = false;
          dataSelected = null;
        "
        :full="false"
      >
        <div class="flex">
          <div class="w-1/2 px-6 py-6 space-y-4 mb-10">
            <div v-if="shipment_number">
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                No Order/Shipment Number
              </label>
              <div class="flex items-center">
                <input
                  disabled
                  v-model="shipment_number"
                  class="bg-gray-100 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: JX001"
                  type="text"
                />
                <button
                  v-clipboard:copy="shipment_number"
                  v-clipboard:success="onCopyShipmentNumber"
                  v-clipboard:error="onErrorShipmentNumber"
                  class="bg-blue-500 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-blue-600 active:text-white transition ease-in-out duration-150"
                >
                  Copy
                </button>
              </div>
            </div>
            <div v-if="profileData.type_branch.length !== 0">
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pilih Cabang
              </label>
              <zselect
                v-model="branch_option"
                :data="branchTypeOption"
                placeholder="Pilih Cabang"
              >
              </zselect>
            </div>
            <div
              v-if="
                dataSelected !== null &&
                  dataSelected.position_order !== 'Agen' &&
                  profileData.role.access_permission.includes('status_order')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Status Order
              </label>
              <zselect
                v-model="status_order"
                :data="statusOrderOptions"
                placeholder="Pilih Status Order"
              >
              </zselect>
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes('position_order')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Posisi Order
              </label>
              <zselect
                v-model="position_order"
                :data="['Agen', 'Kurir', 'Cabang']"
                placeholder="Pilih Posisi Order"
              >
              </zselect>
            </div>
            <div
              v-if="
                dataSelected !== null && profileData.type_user === 'Super Admin'
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Tanggal Manifest
              </label>
              <input
                v-model="manifest_date"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-1.5"
                type="date"
              />
            </div>
            <div
              v-if="profileData.role.access_permission.includes('sender_name')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Nama Pengirim
              </label>
              <!-- <input v-model="sender_name" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Andre Hasibuan" type="text"> -->
              <zautocompleteinput
                v-model="sender_name"
                :data="senderNameOptions"
                placeholder="Andre Hasibuan"
                @input="generateOptionsTransaction('sender_name')"
                @triggerSelect="autoInputFieldBySenderName"
              >
              </zautocompleteinput>
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes('sender_address')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Alamat Pengirim
              </label>
              <input
                v-model="sender_address"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: Jl. Siliwangi No 59"
                type="text"
              />
              <!-- <zautocompleteinput v-model="sender_address" :data="senderAddressOptions" placeholder="Jl Siliwangi" @input="generateOptionsTransaction('sender_address')">
                            </zautocompleteinput> -->
            </div>
            <div
              v-if="profileData.role.access_permission.includes('sender_phone')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Nomor Telepon
              </label>
              <input
                v-model="sender_phone"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 0812345678"
                type="text"
              />
              <!-- <vue-tel-input v-model="sender_phone"></vue-tel-input> -->
            </div>
          </div>
          <div class="w-1/2 px-6 py-6 space-y-4">
            <div
              v-if="
                profileData.role.access_permission.includes('recipient_name')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Nama Penerima
              </label>
              <!-- <input v-model="recipient_name" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Ferdinand" type="text"> -->
              <zautocompleteinput
                v-model="recipient_name"
                :data="recipientNameOptions"
                placeholder="Andre Hasibuan"
                @input="generateOptionsTransaction('recipient_name')"
                @triggerSelect="autoInputFieldByRecipientName"
              >
              </zautocompleteinput>
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes('recipient_address')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Alamat Penerima
              </label>
              <input
                v-model="recipient_address"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: New York"
                type="text"
              />
              <!-- <zautocompleteinput v-model="recipient_address" :data="recipientAddressOptions" placeholder="New York" @input="generateOptionsTransaction('recipient_address')">
                            </zautocompleteinput> -->
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes(
                  'recipient_destination'
                )
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Negara
              </label>
              <!-- <zautocomplete v-model="recipient_destination" :data="countryDestinationOptions" placeholder="Pilih Negara Tujuan" @input="selectCountryForCodePhone">
                            </zautocomplete> -->
              <zautocompleteinput
                v-model="recipient_destination"
                :data="countryDestinationOptions"
                placeholder="Pilih Negara Tujuan"
                @input="selectCountryForCodePhone"
              >
              </zautocompleteinput>
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes(
                  'recipient_state'
                ) && courier == 'Janio'
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Provinsi
              </label>
              <input
                v-model="recipient_state"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: Kuala Lumpur"
                type="text"
              />
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes(
                  'recipient_postal_code'
                )
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Kode Pos
              </label>
              <input
                v-model="recipient_postal_code"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 3445"
                type="text"
              />
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes('recipient_phone')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                No Telepon
              </label>
              <div
                v-if="country_selected !== ''"
                class="relative overflow-hidden w-full rounded-md border-2 border-gray-300 focus:border-blue-800 text-sm flex items-center"
              >
                <div class="flex items-center bg-gray-100 py-1 px-2">
                  <img
                    :src="
                      `https://www.countryflags.io/${country_selected.iso_code}/shiny/24.png`
                    "
                  />
                  <h4 class="text-sm ml-2 mr-3">{{ code_phone }}</h4>
                </div>
                <input
                  v-model="recipient_phone"
                  class="px-3 py-2 focus:outline-none w-full"
                  placeholder="8234454532"
                  type="text"
                />
              </div>
              <div v-else>
                <input
                  v-model="recipient_phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: 08123443424"
                  type="text"
                />
              </div>
              <!-- <vue-tel-input v-model="recipient_phone"></vue-tel-input> -->
            </div>
            <div
              v-if="
                profileData.role.access_permission.includes('recipient_no_id')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                No ID
              </label>
              <input
                v-model="recipient_no_id"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 123"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2 px-6 py-6 space-y-4">
            <div v-if="profileData.role.access_permission.includes('courier')">
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Mitra Ekspedisi
              </label>
              <template
                v-if="
                  profileData.type_user == 'Admin Cabang' &&
                    profileData.branch.city_name == 'Gebang'
                "
              >
                <zselect
                  v-model="courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                >
                </zselect>
              </template>
              <template v-else>
                <zautocompleteinput
                  v-model="courier"
                  :data="courierOptions"
                  placeholder="Pilih Mitra Ekspedisi"
                >
                </zautocompleteinput>
              </template>
            </div>
            <div v-if="profileData.role.access_permission.includes('awb_no')">
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                AWB No/No Resi
              </label>
              <input
                v-model="awb_no"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 3214003484834"
                type="text"
              />
            </div>
            <div
              v-if="profileData.role.access_permission.includes('service_type')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Jenis Layanan
              </label>
              <zselect
                v-model="service_type"
                :data="serviceOptions"
                placeholder="Pilih Jenis Layanan"
              >
              </zselect>
            </div>
            <div
              v-if="profileData.role.access_permission.includes('bag_amount')"
              class="w-full"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Jumlah Koli
              </label>
              <!-- <input
                v-model="bag_amount"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 1"
                type="number"
              /> -->
              <zselect
                v-model="bag_amount"
                :data="[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                ]"
                placeholder="Pilih Jumlah Koli"
              >
              </zselect>
            </div>

            <!-- volume -->

            <div v-for="(data, index) in detail_volume" :key="index">
              <div
                v-if="
                  profileData.role.access_permission.includes('long') &&
                    profileData.role.access_permission.includes('wide') &&
                    profileData.role.access_permission.includes('height')
                "
              >
                <!-- :class="
                  (dataSelected !== null &&
                    profileData.type_user === 'Admin Pusat') ||
                  (dataSelected !== null &&
                    profileData.type_user === 'Admin Cabang')
                    ? 'hidden'
                    : ''
                " -->
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Berat & Volume
                </label>

                <div class="flex items-center space-x-4">
                  <input
                    v-model="data.berat"
                    class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                    placeholder="Berat: 1"
                    type="number"
                  />
                  <input
                    v-model="data.panjang"
                    class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                    placeholder="panjang: 240"
                    type="number"
                  />
                  <input
                    v-model="data.lebar"
                    class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                    placeholder="lebar: 50"
                    type="number"
                  />
                  <input
                    v-model="data.tinggi"
                    class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                    placeholder="tinggi: 35"
                    type="number"
                  />
                  <div
                    v-if="
                      data.panjang !== '' &&
                        data.lebar !== '' &&
                        data.tinggi !== ''
                    "
                    class="w-1/4 bg-gray-200 hidden rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  >
                    {{ chargeWeight(data) }}
                  </div>
                  <div
                    v-else
                    class="w-1/4 bg-gray-200 hidden rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  >
                    {{ parseInt(0) }}
                  </div>
                  <div
                    v-if="
                      data.panjang !== '' &&
                        data.lebar !== '' &&
                        data.tinggi !== ''
                    "
                    class="w-1/4 bg-gray-200 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  >
                    {{ totalSubValue(data) }}
                  </div>
                  <div
                    v-else
                    class="w-1/4 bg-gray-200 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  >
                    {{ parseInt(0) }}
                  </div>
                </div>
              </div>
              <!-- button -->

              <div class="mt-4 flex justify-between">
                <button
                  :disabled="detail_volume.length === 1"
                  @click="removeDetailVolume(index)"
                  class="w-1/6 bg-red-500 hover:bg-red-600 border-red-600 text-white px-3 py-1.5 border-2 rounded-md focus:outline-none"
                >
                  <svg
                    class="group-hover:text-light-blue-600 text-light-blue-500 mx-auto"
                    width="12"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button
                  v-if="index + 1 === detail_volume.length"
                  class="w-1/6 bg-blue-500 hover:bg-blue-600 border-blue-600 text-white px-3 py-1.5 border-2 rounded-md focus:outline-none"
                  @click="addNewDetailVolume"
                >
                  <svg
                    class="group-hover:text-light-blue-600 text-light-blue-500 mx-auto"
                    width="12"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <!-- end volume -->
            <div
              v-if="profileData.role.access_permission.includes('shipment_fee')"
              :class="
                (dataSelected !== null &&
                  profileData.type_user === 'Admin Pusat') ||
                (dataSelected !== null &&
                  profileData.type_user === 'Admin Cabang')
                  ? 'hidden'
                  : '' ||
                    (dataSelected !== null &&
                      profileData.type_user === 'Supervisor')
                  ? 'hidden'
                  : ''
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Ongkos Kirim
                <!-- <span class="text-red-600 text-xs">*minimal 50.000</span> -->
              </label>
              <!-- <input v-model="shipment_fee" :class="shipment_fee > 0 && shipment_fee < 50.000 ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-blue-800'" class="w-full rounded-md border-2 focus:outline-none text-sm px-3 py-2" placeholder="contoh: 87000" type="text" @input="autoCurrencyFormatShipmentFee"> -->
              <zinputcurrency
                v-model="shipment_fee"
                :warning="
                  shipment_fee > 0 && shipment_fee < 50000 ? true : false
                "
                placeholder="Rp50.000"
              ></zinputcurrency>
            </div>
            <div
              v-if="profileData.role.access_permission.includes('pickup_by')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pickup
              </label>
              <!-- <input
                v-model="pickup_by"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Tulis Pickup"
                type="text"
              /> -->
              <zautocomplete
                v-model="pickup_by"
                :data="pickupOptions"
                placeholder="Pilih Pickup"
              >
              </zautocomplete>
            </div>
            <div
              v-if="profileData.role.access_permission.includes('agen_name')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Agen / Pelanggan
              </label>
              <div class="relative flex items-center py-1">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="cek_agen"
                  value="Agen"
                />
                <label class="ml-1">Agen</label>
              </div>
              <div class="relative flex items-center">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="cek_agen"
                  value="Pelanggan"
                />
                <label class="ml-1">Pelanggan</label>
              </div>
            </div>
            <div
              v-if="
                cek_agen === 'Agen' &&
                  profileData.role.access_permission.includes('agen_name')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pilih Agen
              </label>
              <zautocomplete
                v-model="agen"
                :data="agenOptions"
                placeholder="Pilih Agen"
              >
              </zautocomplete>
            </div>
            <div
              v-if="
                cek_agen === 'Pelanggan' &&
                  profileData.role.access_permission.includes('agen_name')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Nama Pelanggan
              </label>
              <input
                v-model="agen_general"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 3214003484834"
                type="text"
              />
            </div>
          </div>
          <div class="w-1/2 px-6 py-6 space-y-4">
            <div
              v-if="profileData.role.access_permission.includes('detail_item')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Deskripsi Paket
              </label>
              <div
                class="flex items-center space-x-2 mb-4"
                v-for="(item, index) in detail_item"
                :key="index"
              >
                <input
                  v-model="item.item_name"
                  class="w-1/6 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="Barang"
                  type="text"
                />
                <input
                  v-model="item.qty"
                  class="w-1/6 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="Quantity"
                  type="number"
                  @input="item.total_value = item.qty * item.unit"
                />
                <input
                  v-model="item.code"
                  class="w-1/6 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="HS Code"
                  type="text"
                />
                <input
                  v-model="item.unit"
                  class="w-1/6 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="Satuan"
                  type="number"
                  @input="item.total_value = item.qty * item.unit"
                />
                <!-- <zinputcurrency v-model="item.total_value" class="w-1/6" placeholder="Total Nilai"></zinputcurrency> -->
                <input
                  v-model="item.total_value"
                  class="w-1/6 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="Total Nilai"
                  type="number"
                />
                <!-- <zselect v-model="item.unit" :data="['Pcs', 'Pack']" placeholder="Pilih Satuan" class="-mt-1 w-48">
                                </zselect> -->
                <button
                  :disabled="detail_item.length === 1"
                  @click="removeDetailItem(index)"
                  class="w-1/6 bg-red-500 hover:bg-red-600 border-red-600 text-white px-3 py-1.5 border-2 rounded-md focus:outline-none"
                >
                  <svg
                    class="group-hover:text-light-blue-600 text-light-blue-500 mx-auto"
                    width="12"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button
                  v-if="index + 1 === detail_item.length"
                  class="w-1/6 bg-blue-500 hover:bg-blue-600 border-blue-600 text-white px-3 py-1.5 border-2 rounded-md focus:outline-none"
                  @click="addNewDetailItem"
                >
                  <svg
                    class="group-hover:text-light-blue-600 text-light-blue-500 mx-auto"
                    width="12"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                    />
                  </svg>
                </button>
                <a
                  disabled
                  v-else
                  class="w-1/6 bg-white border-white text-white px-3 py-1.5 border-2 rounded-md focus:outline-none"
                >
                  <svg
                    class="group-hover:text-light-blue-600 text-light-blue-500 mx-auto"
                    width="12"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              v-if="profileData.role.access_permission.includes('payment_type')"
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pilihan Pembayaran
              </label>
              <div class="relative flex items-center">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="payment_type"
                  value="Cash"
                />
                <label class="ml-1">Cash</label>
              </div>
              <div class="relative flex items-center">
                <input
                  class="w-4 h-4"
                  type="radio"
                  v-model="payment_type"
                  value="Transfer"
                />
                <label class="ml-1">Transfer</label>
              </div>
              <!-- <div class="relative flex items-center">
                                <input class="w-4 h-4" type="radio" v-model="payment_type" value="Credit" />
                                <label class="ml-1">Credit</label>
                            </div> -->
            </div>
            <div
              v-if="
                payment_type == 'Transfer' &&
                  profileData.role.access_permission.includes('bank')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pilih Bank
              </label>
              <zselect
                v-model="bank"
                :data="bankOptions"
                placeholder="Pilih Bank"
              >
              </zselect>
            </div>
            <div
              v-if="
                payment_type == 'Cash' &&
                  profileData.role.access_permission.includes('payment_info')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Keterangan
              </label>
              <input
                v-model="payment_info"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder=" Isi dengan keterangan"
                type="text"
              />
            </div>
            <div
              v-if="
                payment_type == 'Transfer' &&
                  profileData.role.access_permission.includes('payment_info')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Keterangan
              </label>
              <input
                v-model="payment_info"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder=" Isi dengan keterangan"
                type="text"
              />
            </div>
            <div
              v-if="
                payment_type == 'Credit' &&
                  profileData.role.access_permission.includes('member')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pilih Pelanggan
              </label>
              <zautocomplete
                v-model="member"
                :data="memberOptions"
                placeholder="Pilih Pelanggan"
              >
              </zautocomplete>
            </div>
            <div
              v-if="
                dataSelected !== null &&
                  profileData.role.access_permission.includes('amount_paid')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Total bayar ke Jaskipin
              </label>
              <!-- <input v-model="amount_paid" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="Contoh: 89000" type="number"> -->
              <zinputcurrency
                v-model="amount_paid"
                placeholder="Rp50.000"
              ></zinputcurrency>
            </div>
            <template v-if="this.dataSelected !== null">
              <template v-if="profileData.type_user == 'Super Admin'">
                <div
                  v-if="
                    profileData.role.access_permission.includes(
                      'total_paid_cash'
                    )
                  "
                >
                  <label
                    id="listbox-label"
                    class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                  >
                    Total yang sudah dibayar (Cash)
                  </label>
                  <zinputcurrency
                    v-model="total_paid_cash"
                    placeholder="Rp50.000"
                  ></zinputcurrency>
                </div>
                <div
                  v-if="
                    profileData.role.access_permission.includes(
                      'total_paid_transfer'
                    )
                  "
                >
                  <label
                    id="listbox-label"
                    class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                  >
                    Total yang sudah dibayar (Transfer)
                  </label>
                  <zinputcurrency
                    v-model="total_paid_transfer"
                    placeholder="Rp50.000"
                  ></zinputcurrency>
                </div>
              </template>
              <template v-else>
                <div
                  :class="
                    formatDateNow(this.createdAt) !== formatDateNow(new Date())
                      ? 'hidden'
                      : 'block'
                  "
                >
                  <div
                    v-if="
                      profileData.role.access_permission.includes(
                        'total_paid_cash'
                      )
                    "
                  >
                    <label
                      id="listbox-label"
                      class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                    >
                      Total yang sudah dibayar (Cash)
                    </label>
                    <zinputcurrency
                      v-model="total_paid_cash"
                      placeholder="Rp50.000"
                    ></zinputcurrency>
                  </div>
                  <div
                    v-if="
                      profileData.role.access_permission.includes(
                        'total_paid_transfer'
                      )
                    "
                  >
                    <label
                      id="listbox-label"
                      class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                    >
                      Total yang sudah dibayar (Transfer)
                    </label>
                    <zinputcurrency
                      v-model="total_paid_transfer"
                      placeholder="Rp50.000"
                    ></zinputcurrency>
                  </div>
                </div>
              </template>
            </template>
            <template v-else>
              <div
                v-if="
                  profileData.role.access_permission.includes('total_paid_cash')
                "
              >
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Total yang sudah dibayar (Cash)
                </label>
                <zinputcurrency
                  v-model="total_paid_cash"
                  placeholder="Rp50.000"
                ></zinputcurrency>
              </div>
              <div
                v-if="
                  profileData.role.access_permission.includes(
                    'total_paid_transfer'
                  )
                "
              >
                <label
                  id="listbox-label"
                  class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
                >
                  Total yang sudah dibayar (Transfer)
                </label>
                <zinputcurrency
                  v-model="total_paid_transfer"
                  placeholder="Rp50.000"
                ></zinputcurrency>
              </div>
            </template>

            <div
              v-if="
                dataSelected !== null &&
                  profileData.role.access_permission.includes('cogs')
              "
            >
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                HPP
              </label>
              <!-- <input v-model="amount_paid" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="Contoh: 89000" type="number"> -->
              <zinputcurrency
                v-model="cogs"
                placeholder="Rp50.000"
              ></zinputcurrency>
            </div>
            <div v-if="courier === 'DHL'">
              <label
                id="listbox-label"
                class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
              >
                Pesan/Text untuk Laporan DHL
              </label>
              <input
                v-model="transaction_message"
                class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Isi Pesan Disini"
                type="text"
              />
            </div>
            <div v-if="errorSubmit" class="bg-red-600">
              <div class="mx-auto py-3 text-center">
                <p class="font-medium text-white truncate">
                  <span class="md:hidden">
                    Silahkan isi form dengan benar!
                  </span>
                  <span class="hidden md:inline">
                    Silahkan isi form dengan benar!
                  </span>
                </p>
              </div>
            </div>
            <div class="flex items-center justify-end">
              <button
                @click="updateOrder"
                v-if="dataSelected !== null"
                :disabled="loading ? true : false"
                class="bg-green-500 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
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
                Simpan Transaksi
              </button>
              <button
                @click="createOrder"
                v-if="dataSelected === null"
                :disabled="loading ? true : false"
                class="bg-green-500 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
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
                Buat Transaksi
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        @click="updateOrder"
                        v-if="dataSelected !== null"
                        :disabled="loading ? true : false"
                        class="bg-green-500 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
                    >
                        <svg v-show="loading" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Simpan Transaksi
                    </button>
                    <button
                        @click="createOrder"
                        v-if="dataSelected === null"
                        :disabled="loading ? true : false"
                        class="bg-green-500 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
                    >
                        <svg v-show="loading" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Buat Transaksi
                    </button>
                </div> -->
      </zmodal>
    </transition>
    <!-- Delete Confirm Modal -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="deleteConfirmModal"
        class="fixed inset-0 transition-opacity z-10"
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
        v-show="deleteConfirmModal"
        title="Hapus Data Order"
        message="Anda yakin ingin menghapus data order ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
        @close="
          deleteConfirmModal = false;
          dataSelected = null;
        "
        @confirm="deleteOrder()"
      ></modal>
    </transition>
    <!-- Import Data Modal with Detail Modal Component -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="detailModalDialog"
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
      <detailModal
        v-show="detailModalDialog"
        title="Import Data Expedisi"
        @close="detailModalDialog = false"
      >
        <div class="p-6">
          <div class="mb-6">
            <h1>Template CSV</h1>
            <h4 class="text-sm text-gray-600 mb-2">
              Silahkan masukkan data yang akan diimport di template file csv
              ini.
            </h4>
            <div class="pt-2">
              <a
                href="https://res.cloudinary.com/dqxfocvbb/raw/upload/v1622738770/template-csv/template-transaction_kgvk3k.csv"
                target="_blank"
                class="bg-blue-600 hover:bg-blue-700 px-3 py-2 font-semibold text-white text-sm rounded-md focus:outline-none mr-2"
                download
                >Download Template CSV</a
              >
            </div>
          </div>
          <div>
            <h1 class="mb-2">Upload File CSV</h1>
            <input
              id="upload-csv"
              accept="image/*"
              class="hidden"
              type="file"
              @change="uploadFileCSV($event)"
            />
            <label
              for="upload-csv"
              type="button"
              class="cursor-pointer focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-sm text-gray-600 bg-white hover:bg-gray-100 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-flex flex-shrink-0 w-4 h-4 -mt-1 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Upload CSV
            </label>
          </div>
        </div>
      </detailModal>
    </transition>
    <!-- Scan Barcode -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="opacity-100 translate-y-0 sm:scale-100"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <detailModal
        v-show="scanBarcodeDialog"
        title="Scan Barcode"
        @close="scanBarcodeDialog = false"
      >
        <div class="p-6">
          <center>
            <input
              v-model="code_barcode"
              class="w-full max-w-sm rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              ref="barcode_scanner"
              type="text"
              @input="onDetectBarcode"
            />
          </center>
        </div>
      </detailModal>
    </transition>
  </div>
</template>

<script>
import zmodal from "@/components/zmodal";
import zselect from "@/components/zselect";
import zselectmultiple from "@/components/zselectmultiple";
import zdropdown from "@/components/zdropdown";
import zautocomplete from "@/components/zautocomplete";
import zautocompleteinput from "@/components/zautocompleteinput";
import zinputcurrency from "@/components/zinputcurrency";
import detailModal from "@/components/datatables/detail_modal";
import datatable from "@/components/datatables/advance_table";
import notification from "@/components/datatables/notification";
import modal from "@/components/datatables/modal";
import axios from "axios";
import { api_url } from "@/config/api";
import countries from "@/config/phone_number_code";

import Vue from "vue";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

export default {
  components: {
    zmodal,
    zselect,
    zselectmultiple,
    zdropdown,
    zautocomplete,
    zautocompleteinput,
    zinputcurrency,
    detailModal,
    datatable,
    notification,
    modal,
  },
  props: {
    /* Core Data */
    data: {
      type: Array,
      default: () => [],
    },
    dataAgen: {
      type: Array,
      default: () => [],
    },
    dataKurir: {
      type: Array,
      default: () => [],
    },
    dataCabang: {
      type: Array,
      default: () => [],
    },
    dataWarehouse: {
      type: Array,
      default: () => [],
    },
    dataMitra: {
      type: Array,
      default: () => [],
    },
    meta: {
      type: Object,
      default: () => {},
    },
    /* Handler Function */
    PageNavHandler: { default: () => {}, type: Function },
    TableInputSearchHandler: { default: () => () => {}, type: Function },
    totalOrder: {
      type: Object,
      default: () => {},
    },
    totalShipmentFee: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      dataSelected: null,
      /* Toggle Dialog */
      formDialog: false,
      successNotification: false,
      deleteConfirmModal: false,
      detailModalDialog: false,
      scanBarcodeDialog: false,
      /* Filter */
      filterDate: "",
      filter_start_date: "",
      filter_end_date: "",
      filter_courier: "",
      filter_destination: "",
      filter_status_order: "",
      filter_manifest_date: "",
      filter_agen: "",
      filter_admin: "",
      filter_payment_method: "",
      filter_branch: "",
      search_no_order: "",
      search_awb_no: "",
      search_recipient_name: "",
      /* Form Value */
      /* Lembaran Pengirim */
      shipment_number: "",
      sender_name: "",
      sender_address: "",
      sender_phone: "",
      /* Lembaran Penerima */
      recipient_name: "",
      recipient_address: "",
      recipient_destination: "",
      recipient_postal_code: "",
      recipient_phone: "",
      recipient_no_id: "",
      /* Informasi Barang/Ekspedisi */
      courier: "",
      awb_no: "",
      weight: "",
      bag_amount: "",
      service_type: "",
      long: "", // Volume
      wide: "", // Volume
      height: "", // Volume
      shipment_fee: "",
      pickup_by: "",
      agen: "",
      cek_agen: "",
      branch_option: "",
      /* Deskripsi/Detail Paket */
      detail_item: [
        {
          item_name: "",
          qty: null,
          code: "",
          unit: "",
          total_value: null,
        },
      ],
      /* Deskripsi volume */
      detail_volume: [
        {
          berat: "",
          koli: "",
          panjang: "",
          lebar: "",
          tinggi: "",
          total_volume: "",
        },
      ],
      /* Deskripsi Bank/Informasi Pembayaran */
      payment_type: "",
      bank: "",
      payment_info: "",
      total_paid_cash: "",
      total_paid_transfer: "",
      /* Extra Data Form */
      position_order: "",
      status_order: "",
      amount_paid: "",
      cogs: "",
      payment_status: "",
      payment_date: "",
      member: "",
      input_by: "",
      branch: "",
      master_agen: "",
      input_by_agen: "",
      transaction_message: "",
      manifest_date: "",
      charge_weight: "",
      phone: "",
      agen_general: "",
      /* Extra Data */
      loading: false,
      tabForm: 0,
      courierOptions: [],
      serviceOptions: [],
      pickupOptions: [],
      agenOptions: [],
      pelangganOptions: [],
      memberOptions: [],
      bankOptions: [],
      countryDestinationOptions: [],
      senderNameOptions: [],
      senderAddressOptions: [],
      recipientNameOptions: [],
      recipientAddressOptions: [],
      adminOptions: [],
      branchOptions: [],
      branchTypeOption: [],
      statusOrderOptions: [],
      filterColumnSelected: {
        shipment_number: true,
        sender_name: true,
        awb: true,
        courier: true,
        recipient_name: true,
        recipient_phone: true,
        createdAt: true,
        status_order: true,
        service_type: false,
        weight: true,
        volume: false,
        recipient_destination: true,
        shipment_fee: true,
        agen: true,
        branch: true,
        payment_type: true,
        pickup_by: false,
        amount_paid: true,
        position_order: false,
        input_by: true,
      },
      lastShipmentNumber: "",
      errorSubmit: false,
      viewOptions: "Card",
      code_phone: "",
      /* Data Datatable */
      columns: [
        {
          field: "action",
          label: "Aksi",
        },
      ],
      /* Pagination */
      page: 1,
      limit: 10,
      /* Filter */
      search: "",
      country_selected: "",
      /* Barcode */
      code_barcode: "",
      createdAt: "",
    };
  },
  computed: {
    listPositionAgen() {
      return this.data.filter((item) => item.position_order === "Agen");
    },
    listPositionKurir() {
      return this.data.filter((item) => item.position_order === "Kurir");
    },
    listPositionCabang() {
      return this.data.filter((item) => item.position_order === "Cabang");
    },
    listPositionWarehouse() {
      return this.data.filter((item) => item.position_order === "Warehouse");
    },
    listPositionMitra() {
      return this.data.filter((item) => item.position_order === "Mitra");
    },
    /* Get Profil Data */
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
      return this.detail_volume
        .map((item) => item.berat)
        .reduce((a, b) => a + Number(b), 0);
    },
    totalKoli() {
      return this.detail_volume
        .map((item) => item.koli)
        .reduce((a, b) => a + Number(b), 0);
    },
    totalValue() {
      return this.detail_volume
        .map((data) => this.totalSubValue(data))
        .reduce((a, b) => a + b);
    },

    totalCharge() {
      return this.detail_volume
        .map((data) => this.chargeWeight(data))
        .reduce((a, b) => a + b);
    },
  },
  mounted() {
    this.getListCourier();
    this.getListService();
    this.getListPickup();
    this.getListAgen();
    this.getListMember();
    this.getListBank();
    this.getLastRecordOrder();
    this.getCountryDestination();
    this.getListAdmin();
    this.getListBranch();
    this.filterColumn();
    this.getListPelanggan();
    this.getTypeOption();
    if (this.profileData.type_user !== "CS Pusat") {
      this.statusOrderOptions = ["Manifest", "Hold", "Cancel"];
    } else if (this.profileData.type_user === "CS Pusat") {
      this.statusOrderOptions = ["Lost", "Reject", "Retur"];
    }
  },
  methods: {
    async getTypeOption() {
      if (this.profileData.type_user === "Super Admin") {
        const query_params = {
          pagination: false,
        };
        // get branch
        const response = await axios.get(
          `${api_url}/api/v1/master/branch/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log("cabang", response);
        this.branchTypeOption = response.data.map((item) => {
          return {
            label: item.city_name,
            value: item.id,
          };
        });
      } else {
        this.branchTypeOption = this.profileData.type_branch.map((item) => {
          return {
            label: item.label,
            value: item.value,
          };
        });
      }
    },
    totalSubValue(data) {
      return (
        (Number(data.panjang) * Number(data.lebar) * Number(data.tinggi)) / 5000
      );
    },
    chargeWeight(data) {
      return Number(data.berat) >
        (Number(data.panjang) * Number(data.lebar) * Number(data.tinggi)) / 5000
        ? Number(data.berat)
        : (Number(data.panjang) * Number(data.lebar) * Number(data.tinggi)) /
            5000;
    },
    startDrag: (event, item, type_user) => {
      if (type_user == "Kurir") {
        if (
          item.position_order == "Agen" ||
          item.position_order == "Warehouse"
        ) {
          exec();
        }
      }

      if (type_user.includes("Gudang")) {
        if (
          item.position_order == "Cabang" ||
          item.position_order == "Warehouse" ||
          item.position_order == "Mitra"
        ) {
          exec();
        }
      }

      if (type_user.includes("Admin Pusat") || type_user == "Admin Cabang") {
        if (
          item.position_order == "Agen" ||
          item.position_order == "Kurir" ||
          item.position_order == "Cabang"
        ) {
          exec();
        }
      }

      if (type_user == "Super Admin") {
        exec();
      }

      function exec() {
        if (
          item.status_order !== "Hold" &&
          item.status_order !== "Cancel" &&
          item.status_order !== "Pending"
        ) {
          event.dataTransfer.dropEffect = "move";
          event.dataTransfer.effectAllowed = "move";
          event.dataTransfer.setData("itemID", item.id);
        }
      }
    },
    async onDrop(event, list, type_user) {
      const itemID = event.dataTransfer.getData("itemID");
      const checkItem = await axios.get(
        api_url + "/api/v1/transaction/international-order/admin/get/" + itemID,
        { headers: this.headers }
      );
      // const item = this.data.find(item => item.id == itemID);
      const item = checkItem.data.data[0];
      let recentPosition = item.position_order;

      if (type_user == "Kurir") {
        if (list == "Kurir" || list == "Mitra") {
          exec(itemID, this.headers);
        }
      }

      if (type_user.includes("Gudang")) {
        if (list == "Warehouse" || list == "Mitra") {
          exec(itemID, this.headers);
        }
      }

      if (type_user == "Admin Cabang" || type_user == "Admin Pusat") {
        // Done
        if (
          (list == "Kurir" && recentPosition != "Cabang") ||
          (list == "Cabang" && recentPosition != "Warehouse") ||
          list == "Warehouse"
        ) {
          exec(itemID, this.headers);
        }
      }

      if (type_user == "Super Admin") {
        if (recentPosition == "Mitra") {
          /* Set Position Order to Database */
          let data = {
            position_order: list,
          };
          const response = await axios.put(
            `${api_url}/api/v1/transaction/international-order/reset-manifest/${itemID}`,
            data,
            { headers: this.headers }
          );
          console.log(response);
        } else {
          exec(itemID, this.headers);
        }
      }

      async function exec(itemID, headers) {
        //const itemID = event.dataTransfer.getData("itemID")
        const checkItemExec = await axios.get(
          api_url +
            "/api/v1/transaction/international-order/admin/get/" +
            itemID,
          { headers: headers }
        );
        // const item = transaction.find(item => item.id == itemID) // Find Drag Item
        const item = checkItemExec.data;
        item.position_order = list; // Set Position Order State

        /* Set Position Order to Database */
        let data = {
          position_order: list,
        };
        const response = await axios.put(
          `${api_url}/api/v1/transaction/international-order/update-position-order/${itemID}`,
          data,
          { headers: headers }
        );
        console.log(response);

        // window.location.reload();
        //this.refreshData();
      }

      this.refreshData();
    },
    show() {
      console.log("Here");
    },
    /*
     * Get List Courier Method
     */
    async getListCourier() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/courier/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        let courierData = [];
        response.data.map((item) => {
          if (item.courier_type == "International") {
            courierData.push(item.courier_name);
          }
        });
        this.courierOptions = courierData;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Service Method
     */
    async getListService() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/service/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        let serviceData = [];
        response.data.map((item) => {
          if (item.service_type == "International") {
            serviceData.push(item.service_name);
          }
        });
        this.serviceOptions = serviceData;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Pickup Method
     */
    async getListPickup() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/master/pickup`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.pickupOptions.push(item.pickup_name);
          // item.branch.map((res) => {
          //   if (res.value == this.profileData.branch._id.match(res.value)) {
          //     this.pickupOptions.push(res.label);
          //   }
          // });
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Agen Method
     */
    async getListAgen() {
      let query_params = {
        pagination: false,
      };

      try {
        const responseListAgen = await axios.get(
          `${api_url}/api/v1/users/user`,
          { params: query_params, headers: this.headers }
        );
        console.log("nama agen:", responseListAgen);
        responseListAgen.data.map((item) => {
          if (item.type_user === "Agen") {
            if (this.profileData.type_user == "Super Admin") {
              this.agenOptions.push({
                label: item.fullname + ` - [ AGEN ${item.branch.city_name} ]`,
                value: item.id,
              });
            } else {
              if (item.branch._id == this.profileData.branch._id) {
                this.agenOptions.push({
                  label: item.fullname + ` - [ AGEN ${item.branch.city_name} ]`,
                  value: item.id,
                });
              }
            }
          }
        });

        // let listAgenGeneral = [];
        // const responseListAgenGeneral = await axios.get(
        //   `${api_url}/api/v1/transaction/international-order/get-filter`,
        //   { params: query_params, headers: this.headers }
        // );
        // console.log(responseListAgenGeneral);
        // responseListAgenGeneral.data.map((item) => {
        //   let checker = this.agenOptions.includes(item.agen_general);
        //   if (item.agen_general && checker == false) {
        //     this.agenOptions.push(item.agen_general);
        //   }
        // });
      } catch (error) {
        console.log(error);
      }
    },

    async getListPelanggan() {
      let query_params = {
        pagination: false,
      };

      try {
        const responseListAgenGeneral = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-pelanggan`,
          { params: query_params, headers: this.headers }
        );
        console.log("pelanggan", responseListAgenGeneral);
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Member Method
     */
    async getListMember() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          if (item.type_user === "Pelanggan") {
            this.memberOptions.push({
              label: item.fullname,
              value: item.id,
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Bank Method
     */
    async getListBank() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/bank/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        response.data.map((item) => {
          this.bankOptions.push(
            item.bank_name +
              " (" +
              item.account_number +
              ") A.N " +
              item.account_name
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get List Negara Method
     */
    async getCountryDestination() {
      await axios
        .get(api_url + "/api/v1/shipping-rates/destination?pagination=false")
        .then((response) => {
          // JSON responses are automatically parsed.
          // console.log(response.data)

          // response.data.map(item => {
          //     this.countryDestinationOptions.push({
          //         label: item.country_name,
          //         value: item.id
          //     });
          // });

          response.data.map((item) => {
            this.countryDestinationOptions.push(item.country_name);
          });

          this.countryDestinationOptions.sort();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*
     * Get List Admin Method
     */
    async getListAdmin() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.adminOptions.push({
            label: item.fullname,
            value: item.id,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getListBranch() {
      let query_params = {
        pagination: false,
      };

      try {
        if (this.profileData.type_user == "Supervisor") {
          const getProfile = await axios.get(`${api_url}/api/v1/auth/profile`, {
            headers: this.headers,
          });
          this.branchOptions = getProfile.data.type_branch.map((item) => {
            return {
              label: item.label,
              value: item.value,
            };
          });
        } else {
          const response = await axios.get(
            `${api_url}/api/v1/master/branch/admin`,
            { params: query_params, headers: this.headers }
          );
          console.log("cabang", response);
          this.branchOptions = response.data.map((item) => {
            return {
              label: item.city_name,
              value: item.id,
            };
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get Last Record Method
     */
    async getLastRecordOrder() {
      const response = await axios.get(
        `${api_url}/api/v1/transaction/international-order/last`,
        { headers: this.headers }
      );
      console.log(response);
      if (response.data.data === null || response.data.data.length === 0) {
        this.lastShipmentNumber = "JEX0000000001";
      } else {
        this.lastShipmentNumber = this.next(
          response.data.data[0].shipment_number
        );
      }
    },
    /*
     * Create Method
     */

    async createOrder() {
      this.loading = true;

      const checkShipmentNumber = await axios.get(
        `${api_url}/api/v1/transaction/international-order/last`,
        { headers: this.headers }
      );
      let lastShipmentNumber;

      if (
        checkShipmentNumber.data.data === null ||
        checkShipmentNumber.data.data.length === 0
      ) {
        lastShipmentNumber = "JEX0000000001";
      } else {
        this.lastShipmentNumber = this.next(
          checkShipmentNumber.data.data[0].shipment_number
        );
        lastShipmentNumber = checkShipmentNumber.data.data[0].shipment_number.replace(
          "JEX",
          ""
        );
      }

      let fixResi;
      let inputShipmentNumber = this.lastShipmentNumber.replace("JEX", "");

      // alert("Input Sekarang" + inputShipmentNumber);
      // alert("Terakhir Diinput" + lastShipmentNumber);

      if (Number(lastShipmentNumber) < Number(inputShipmentNumber)) {
        fixResi = this.lastShipmentNumber;
      } else if (
        Number(lastShipmentNumber) == Number(inputShipmentNumber) ||
        Number(lastShipmentNumber) > Number(inputShipmentNumber)
      ) {
        let resiBaru = "JEX" + lastShipmentNumber;
        fixResi = this.next(resiBaru);
      }

      /* Find Agen */
      let branch;
      let master_agen;

      try {
        if (this.agen.value) {
          const responseAgen = await axios.get(
            `${api_url}/api/v1/users/user/get/${this.agen.value}`,
            { headers: this.headers }
          );
          console.log("response agen", responseAgen.data.data[0].branch);

          branch = responseAgen.data.data[0].branch
            ? responseAgen.data.data[0].branch
            : null;
          master_agen = responseAgen.data.data[0].master_agen
            ? responseAgen.data.data[0].master_agen
            : null;
        } else {
          branch = this.profileData.branch._id;
          master_agen = null;
        }

        /* Auto Set Amount Paid/Total Bayar ke Jaskipin */
        // let total_bayar = 0;
        // if(this.profileData.type_user == 'Admin Pusat' || this.profileData.type_user == 'Admin Cabang' || this.profileData.type_user == 'Super Admin'){
        //     total_bayar = this.shipment_fee;
        // }

        /* Post Data */
        let data = {
          /* Lembaran Pengirim */
          shipment_number:
            lastShipmentNumber == "JEX0000000001" ? "JEX0000000001" : fixResi,
          sender_name: this.sender_name,
          sender_address: this.sender_address,
          sender_phone: this.sender_phone,
          /* Lembaran Penerima */
          recipient_name: this.recipient_name,
          recipient_address: this.recipient_address,
          recipient_destination: this.recipient_destination.label
            ? this.recipient_destination.label
            : this.recipient_destination,
          recipient_state: this.recipient_state,
          recipient_postal_code: this.recipient_postal_code,
          recipient_phone: this.code_phone + this.recipient_phone,
          recipient_no_id: this.recipient_no_id,
          /* Informasi Barang/Ekspedisi */
          courier: this.courier,
          awb_no: this.awb_no.trim(),
          weight: this.totalBerat,
          bag_amount: this.bag_amount,
          service_type: this.service_type,
          long: this.long, // Volume
          wide: this.wide, // Volume
          height: this.height, // Volume
          shipment_fee: this.shipment_fee,
          pickup_by: this.pickup_by,
          /* Deskripsi/Detail Paket */
          detail_item: this.detail_item,
          detail_volume: this.detail_volume,
          volume_total: this.totalValue.toFixed(2),
          charge_weight: this.totalCharge.toFixed(2),
          /* Deskripsi Bank/Informasi Pembayaran */
          payment_type: this.payment_type,
          bank: this.bank,
          payment_info: this.payment_info,
          total_paid_cash: this.total_paid_cash,
          total_paid_transfer: this.total_paid_transfer,
          /* Extra Data Form */
          position_order: this.position_order,
          status_order: this.status_order,
          amount_paid: this.shipment_fee,
          cogs: this.cogs,
          payment_status: this.payment_status,
          payment_date:
            this.total_paid_cash || this.total_paid_transfer > 0
              ? new Date()
              : null,
          input_by: this.profileData.id,
          phone: this.profileData.phone,
          branch:
            this.profileData.type_branch.length > 0
              ? this.branch_option.value
              : branch,
          master_agen: master_agen,
          transaction_message: this.transaction_message,
          cek_agen: this.cek_agen,
        };
        /* Check for Auto Create Pickup */
        let checkPickup = this.pickupOptions.find(
          (item) => item === this.pickup_by
        );

        if (checkPickup === undefined) {
          await this.createNewPickup(this.pickup_by);
        }

        /* Check Agen */
        if (this.agen.value) {
          data.agen = this.agen.value;
        } else {
          if (this.agen_general == "") {
            data.agen_general = this.sender_name;
          } else {
            data.agen_general = this.agen_general;
          }
        }

        if (this.payment_type === "Credit") {
          data.member = this.member.value;
        } else {
          data.member = null;
        }

        /* Payment Status Check */
        if (
          data.total_paid_cash + data.total_paid_transfer ===
            data.amount_paid ||
          data.total_paid_cash + data.total_paid_transfer > data.amount_paid
        ) {
          data.payment_status = "Lunas";
        } else if (
          data.total_paid_cash !== 0 ||
          data.total_paid_transfer !== 0
        ) {
          data.payment_status = "Belum Lunas";
        }

        /* Form Validation */
        this.errorSubmit = false;
        if (
          data.sender_name === "" ||
          data.sender_address === "" ||
          data.sender_phone === "" ||
          data.recipient_name === "" ||
          data.recipient_address === "" ||
          data.recipient_destination === "" ||
          data.recipient_phone === "" ||
          data.recipient_no_id === "" ||
          data.agen === "" ||
          (data.shipment_fee > 0 && data.shipment_fee < 50000)
        ) {
          this.errorSubmit = true;
          this.loading = false;
          return;
        }

        try {
          const response = await axios.post(
            `${api_url}/api/v1/transaction/international-order/create`,
            data,
            { headers: this.headers }
          );
          console.log(response.data);

          /* Set Toggle */
          this.formDialog = false;
          this.successNotification = true;

          /* Set Data Empty */
          this.emptyFormData();

          this.loading = false;

          /* Refresh Data */
          window.location.reload();
        } catch (error) {
          console.log(error);
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Get by Id & Update Method
     */
    async editOrder(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/admin/get/${id}`,
          { headers: this.headers }
        );
        console.log("edit transaksi", response);

        /* Set Data Selected */
        this.dataSelected = response.data.data[0];

        /* Set Toggle */
        this.formDialog = true;

        /* Set Data Form */
        /* Lembaran Pengirim */
        this.shipment_number = this.dataSelected.shipment_number;
        this.sender_name = this.dataSelected.sender_name;
        this.sender_address = this.dataSelected.sender_address;
        this.sender_phone = this.dataSelected.sender_phone;
        /* Lembaran Penerima */
        this.recipient_name = this.dataSelected.recipient_name;
        this.recipient_address = this.dataSelected.recipient_address;
        this.recipient_destination = this.dataSelected.recipient_destination;
        // if(this.dataSelected.recipient_destination) {
        //     this.recipient_destination = this.countryDestinationOptions.find(e => e.label === this.dataSelected.recipient_destination)
        // }
        this.recipient_state = this.dataSelected.recipient_state;
        this.recipient_postal_code = this.dataSelected.recipient_postal_code;
        this.recipient_phone = this.dataSelected.recipient_phone;
        this.code_phone = "";
        this.recipient_no_id = this.dataSelected.recipient_no_id;
        /* Informasi Barang/Ekspedisi */
        this.courier = this.dataSelected.courier;
        this.awb_no = this.dataSelected.awb_no;
        this.weight = this.dataSelected.weight;
        this.bag_amount = this.dataSelected.bag_amount;
        this.service_type = this.dataSelected.service_type;
        this.long = this.dataSelected.long; // Volume
        this.wide = this.dataSelected.wide; // Volume
        this.height = this.dataSelected.height; // Volume
        this.shipment_fee = this.dataSelected.shipment_fee;
        this.pickup_by = this.dataSelected.pickup_by;
        this.cek_agen = this.dataSelected.cek_agen;
        this.agen_general = this.dataSelected.agen_general;

        if (this.dataSelected.agen) {
          this.agen = {
            label: this.dataSelected.agen.fullname,
            value: this.dataSelected.agen._id,
          };
        }
        /* Deskripsi/Detail Paket */
        if (Object.keys(this.dataSelected.detail_item).length === 0) {
          this.detail_item = [
            {
              item_name: "",
              qty: null,
              code: "",
              unit: "",
              total_value: null,
            },
          ];
        } else {
          this.detail_item = this.dataSelected.detail_item;
        }
        /* Deskripsi volume */

        if (Object.keys(this.dataSelected.detail_volume).length !== 0) {
          this.detail_volume = this.dataSelected.detail_volume;
        } else {
          this.detail_volume = [
            {
              berat: this.dataSelected.weight ? this.dataSelected.weight : "",
              koli: "",
              panjang: this.dataSelected.long ? this.dataSelected.long : "",
              lebar: this.dataSelected.wide ? this.dataSelected.wide : "",
              tinggi: this.dataSelected.height ? this.dataSelected.height : "",
            },
          ];
        }

        /* Deskripsi Bank/Informasi Pembayaran */
        this.payment_type = this.dataSelected.payment_type;
        this.bank = this.dataSelected.bank;
        this.payment_info = this.dataSelected.payment_info;
        this.total_paid_cash = this.dataSelected.total_paid_cash;
        this.total_paid_transfer = this.dataSelected.total_paid_transfer;
        /* Extra Data Form */
        this.position_order = this.dataSelected.position_order;
        this.status_order = this.dataSelected.status_order;
        this.amount_paid = this.dataSelected.amount_paid;
        this.cogs = this.dataSelected.cogs;
        this.payment_status = this.dataSelected.payment_status;
        this.payment_date = this.dataSelected.payment_date;
        this.createdAt = this.dataSelected.createdAt;
        if (this.dataSelected.member !== null) {
          this.member = {
            label: this.dataSelected.member.fullname,
            value: this.dataSelected.member._id,
          };
        } else {
          this.member = "";
        }
        this.input_by = this.dataSelected.input_by;
        this.input_by_agen = this.dataSelected.input_by_agen;
        this.transaction_message = this.dataSelected.transaction_message;
        if (this.dataSelected.manifest_date) {
          this.manifest_date = this.convertDate(
            this.dataSelected.manifest_date
          );
        } else {
          this.manifest_date = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateOrder() {
      this.loading = true;
      let data = {
        /* Lembaran Pengirim */
        shipment_number: this.shipment_number,
        sender_name: this.sender_name,
        sender_address: this.sender_address,
        sender_phone: this.sender_phone,
        /* Lembaran Penerima */
        recipient_name: this.recipient_name,
        recipient_address: this.recipient_address,
        recipient_destination: this.recipient_destination.label
          ? this.recipient_destination.label
          : this.recipient_destination,
        recipient_state: this.recipient_state,
        recipient_postal_code: this.recipient_postal_code,
        recipient_phone: this.code_phone + this.recipient_phone,
        recipient_no_id: this.recipient_no_id,
        /* Informasi Barang/Ekspedisi */
        courier: this.courier,
        awb_no: this.awb_no.trim(),
        weight: this.totalBerat,
        bag_amount: this.bag_amount,
        service_type: this.service_type,
        long: this.long, // Volume
        wide: this.wide, // Volume
        height: this.height, // Volume
        shipment_fee: this.shipment_fee,
        pickup_by: this.pickup_by,
        /* Deskripsi/Detail Paket */
        detail_item: this.detail_item,
        detail_volume: this.detail_volume,
        volume_total: this.totalValue,
        charge_weight: this.totalCharge,
        /* Deskripsi Bank/Informasi Pembayaran */
        payment_type: this.payment_type,
        bank: this.bank,
        payment_info: this.payment_info,
        total_paid_cash: this.total_paid_cash,
        total_paid_transfer: this.total_paid_transfer,
        /* Extra Data Form */
        position_order: this.position_order,
        status_order:
          this.status_order == "Tanpa Status" ? "" : this.status_order,
        amount_paid: this.amount_paid,
        cogs: this.cogs,
        payment_status: this.payment_status,
        payment_date: this.payment_date,
        transaction_message: this.transaction_message,
        branch: this.branch_option.value
          ? this.branch_option.value
          : this.profileData.branch.id,
        // input_by: this.profileData.id,
        cek_agen: this.cek_agen,
        agen_general: this.agen_general,
      };

      if (this.agen.value) {
        data.agen = this.agen.value;
      }

      if (this.payment_type === "Credit") {
        data.member = this.member.value;
      } else {
        data.member = null;
      }

      /* Payment Status Check */
      if (
        data.total_paid_cash + data.total_paid_transfer === data.amount_paid ||
        data.total_paid_cash + data.total_paid_transfer > data.amount_paid
      ) {
        data.payment_status = "Lunas";
        data.payment_date = new Date();
      } else if (data.total_paid_cash !== 0 || data.total_paid_transfer !== 0) {
        data.payment_status = "Belum Lunas";
      }

      // check condition input agen true
      if (
        this.dataSelected.input_by_agen === true &&
        this.dataSelected.awb_no === "" &&
        this.dataSelected.amount_paid === null
      ) {
        data.awb_input_date = new Date();
      }

      if (this.manifest_date !== "") {
        data.manifest_date = this.manifest_date;
      }

      /* Form Validation */
      this.errorSubmit = false;
      if (
        data.sender_name === "" ||
        data.sender_address === "" ||
        data.sender_phone === "" ||
        data.recipient_name === "" ||
        data.recipient_address === "" ||
        data.recipient_destination === "" ||
        data.recipient_phone === "" ||
        data.recipient_no_id === "" ||
        (data.shipment_fee > 0 && data.shipment_fee < 50000) ||
        data.awb_no === "" ||
        data.amount_paid === 0 ||
        data.amount_paid < 50000
      ) {
        this.errorSubmit = true;
        this.loading = false;
        return;
      }

      try {
        const response = await axios.put(
          `${api_url}/api/v1/transaction/international-order/update/${this.dataSelected.id}`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.formDialog = false;
        this.successNotification = true;

        /* Set Data Empty */
        this.emptyFormData();

        this.loading = false;

        /* Refresh Data */
        window.location.reload();
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    /*
     * Delete Method
     */
    async deleteOrder() {
      try {
        const response = await axios.delete(
          `${api_url}/api/v1/transaction/international-order/delete/${this.dataSelected.id}`,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Refresh Data */
        // window.location.reload();
        this.refreshData();

        /* Set Toggle */
        this.deleteConfirmModal = false;
      } catch (error) {
        console.log(error);
      }
    },
    /*
     * Detail Order Method
     */
    async detailOrder(item) {
      this.$emit("show", item);
    },
    /*
     * Terima Resi Transaksi Method
     */
    async approveTransaction(id) {
      await this.getLastRecordOrder();

      let data = {
        shipment_number: this.lastShipmentNumber,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/transaction/international-order/update/${id}`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.successNotification = true;

        /* Set Data Empty */
        this.emptyFormData();

        /* Refresh Data */
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async uploadFileCSV(event) {
      var data = new FormData();
      var csv = event.target.files[0];
      data.append("uploadfile", csv);

      try {
        const response = await axios.post(
          `${api_url}/api/v1/transaction/international-order/import`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.detailModalDialog = false;
        this.successNotification = true;

        /* Refresh Data */
        window.location.reload();
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
    formatDateNow(value) {
      let options = { year: "numeric", month: "numeric", day: "numeric" };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    formatDate(value) {
      let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      let date = new Date(value).toLocaleString("id-ID", options);
      return date;
    },
    next(invoiceNumber) {
      if (!invoiceNumber) throw new Error("invoiceNumber cannot be empty");
      var array = invoiceNumber.split(/[_/:\-;\\]+/);
      var lastSegment = array.pop();
      var priorSegment = invoiceNumber.substr(
        0,
        invoiceNumber.indexOf(lastSegment)
      );
      var nextNumber = this.alphaNumericIncrementer(lastSegment);
      return priorSegment + nextNumber;
    },

    alphaNumericIncrementer(str) {
      if (str && str.length > 0) {
        var invNum = str.replace(/([^a-z0-9]+)/gi, "");
        invNum = invNum.toUpperCase();
        var index = invNum.length - 1;
        while (index >= 0) {
          if (invNum.substr(index, 1) === "9") {
            invNum = invNum.substr(0, index) + "0" + invNum.substr(index + 1);
          } else if (invNum.substr(index, 1) === "Z") {
            invNum = invNum.substr(0, index) + "A" + invNum.substr(index + 1);
          } else {
            var char = String.fromCharCode(invNum.charCodeAt(index) + 1);
            invNum = invNum.substr(0, index) + char + invNum.substr(index + 1);
            index = 0;
          }
          index--;
        }
        return invNum;
      } else {
        throw new Error("str cannot be empty");
      }
    },
    emptyFormData() {
      /* Lembaran Pengirim */
      this.shipment_number = this.lastShipmentNumber;
      this.sender_name = "";
      this.sender_address = "";
      this.sender_phone = "";
      /* Lembaran Penerima */
      this.recipient_name = "";
      this.recipient_address = "";
      this.recipient_destination = "";
      this.recipient_state = "";
      this.recipient_postal_code = "";
      this.recipient_phone = "";
      this.recipient_no_id = "";
      /* Informasi Barang/Ekspedisi */
      this.courier = "";
      this.awb_no = "";
      this.weight = "";
      this.bag_amount = "";
      this.service_type = "";
      this.long = ""; // Volume
      this.wide = ""; // Volume
      this.height = ""; // Volume
      this.shipment_fee = "";
      this.pickup_by = "";
      this.agen = "";
      /* Deskripsi/Detail Paket */
      this.detail_item = [
        {
          item_name: "",
          qty: null,
          code: "",
          unit: "",
          total_value: null,
        },
      ];
      this.detail_volume = [
        {
          berat: "",
          koli: "",
          panjang: "",
          lebar: "",
          tinggi: "",
        },
      ];
      /* Deskripsi Bank/Informasi Pembayaran */
      this.payment_type = "";
      this.bank = "";
      this.payment_info = "";
      this.total_paid_cash = 0;
      this.total_paid_transfer = 0;
      /* Extra Data Form */
      this.position_order = "Agen";
      this.status_order = "";
      this.amount_paid = 0;
      this.cogs = 0;
      this.payment_status = "Belum Bayar";
      this.payment_date = "";
      this.member = "";
      this.input_by = this.profileData.id;
    },
    handleSubmit() {
      if (this.dataSelected === null) {
        this.createOrder();
      } else {
        this.updateOrder();
      }
    },
    addNewDetailItem() {
      this.detail_item.push({
        item_name: "",
        qty: null,
        code: "",
        unit: "",
        total_value: null,
      });
    },
    removeDetailItem(index) {
      this.detail_item.splice(index, 1);
    },

    // datail volume
    addNewDetailVolume() {
      this.detail_volume.push({
        berat: "",
        koli: "",
        panjang: "",
        lebar: "",
        tinggi: "",
        total_value: null,
      });
    },
    removeDetailVolume(index) {
      this.detail_volume.splice(index, 1);
    },

    selectRangeDate() {
      this.$emit("selectRangeDate", this.filterDate);
    },
    refreshData() {
      this.$emit("refreshData");
    },
    resetData() {
      this.filterDate = "";
      this.filter_start_date = "";
      this.filter_end_date = "";
      this.filter_courier = "";
      this.filter_destination = "";
      this.filter_status_order = "";
      this.filter_manifest_date = "";
      this.filter_agen = "";
      this.filter_admin = "";
      this.filter_payment_method = "";
      this.filter_branch = "";
      this.$refs.filterCourierComponent.resetDataValue();
      this.$refs.filterDestinationComponent.resetDataValue();
      this.$refs.filterBranchComponent.resetDataValue();
      this.$emit("resetData");
    },
    filterStartDate() {
      this.$emit("filterStartDate", this.filter_start_date);
    },
    filterEndDate() {
      this.$emit("filterEndDate", this.filter_end_date);
    },
    filterCourier() {
      this.$emit("filterCourier", this.filter_courier);
    },
    filterDestination() {
      this.$emit("filterDestination", this.filter_destination);
    },
    filterStatusOrder() {
      if (this.filter_status_order === "Belum Ada Status") {
        this.filter_status_order = "";
      }
      this.$emit("filterStatusOrder", this.filter_status_order);
    },
    filterManifestDate() {
      this.$emit("filterManifestDate", this.filter_manifest_date);
    },
    filterLimitOrder() {
      this.$emit("filterLimitOrder", this.limit);
    },
    filterAgen() {
      this.$emit("filterAgen", this.filter_agen);
    },
    filterAdmin() {
      this.$emit("filterAdmin", this.filter_admin.value);
    },
    filterPaymentMethod() {
      this.$emit("filterPaymentMethod", this.filter_payment_method);
    },
    filterBranch() {
      this.$emit("filterBranch", this.filter_branch);
    },
    searchNoOrder() {
      this.$emit("searchNoOrder", this.search_no_order);
    },
    searchAWBNo() {
      this.$emit("searchAWBNo", this.search_awb_no);
    },
    searchRecipientName() {
      this.$emit("searchRecipientName", this.search_recipient_name);
    },
    selectCountryForCodePhone() {
      let country_selected = countries.find(
        (item) => item.country == this.recipient_destination
      );

      if (country_selected) {
        this.country_selected = country_selected;
        // this.recipient_phone = country_selected.country_code;
        this.code_phone = "+" + country_selected.country_code;
      } else {
        this.country_selected = "";
        this.recipient_phone = "";
      }
    },
    async createNewPickup(pickup_name) {
      try {
        let data = {
          pickup_name: pickup_name,
        };

        const response = await axios.post(
          `${api_url}/api/v1/master/pickup/create`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async generateOptionsTransaction(field) {
      console.log(field);

      let query_params = {};

      if (field == "sender_name") {
        query_params["sender_name"] = this.sender_name;
      }

      if (field == "sender_address") {
        query_params["sender_address"] = this.sender_address;
      }

      if (field == "recipient_name") {
        query_params["recipient_name"] = this.recipient_name;
      }

      if (field == "recipient_address") {
        query_params["recipient_address"] = this.recipient_address;
      }

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-order-search-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.senderNameOptions = [];
        this.senderAddressOptions = [];
        this.recipientNameOptions = [];
        this.recipientAddressOptions = [];

        if (field == "sender_name") {
          response.data.data.map((item) => {
            let match = this.senderNameOptions.find(
              (find) => find === item.sender_name
            );

            if (match == undefined) {
              this.senderNameOptions.push(item.sender_name);
            }
          });
        }

        if (field == "sender_address") {
          response.data.data.map((item) => {
            let match = this.senderAddressOptions.find(
              (find) => find === item.sender_address
            );

            if (match == undefined) {
              this.senderAddressOptions.push(item.sender_address);
            }
          });
        }

        if (field == "recipient_name") {
          response.data.data.map((item) => {
            let match = this.recipientNameOptions.find(
              (find) => find === item.recipient_name
            );

            if (match == undefined) {
              this.recipientNameOptions.push(item.recipient_name);
            }
          });
        }

        if (field == "recipient_address") {
          response.data.data.map((item) => {
            let match = this.recipientAddressOptions.find(
              (find) => find === item.recipient_address
            );

            if (match == undefined) {
              this.recipientAddressOptions.push(item.recipient_address);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async autoInputFieldBySenderName(value) {
      let query_params = {
        sender_name: value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-order-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.sender_address = response.data.data[0].sender_address;
        this.sender_phone = response.data.data[0].sender_phone;
      } catch (error) {
        console.log(error);
      }
    },
    async autoInputFieldByRecipientName(value) {
      let query_params = {
        recipient_name: value,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/get-order-by-field`,
          { params: query_params, headers: this.headers }
        );
        console.log(response.data);

        this.recipient_address = response.data.data[0].recipient_address;
        this.recipient_destination =
          response.data.data[0].recipient_destination;
        this.recipient_postal_code =
          response.data.data[0].recipient_postal_code;
        this.recipient_phone = response.data.data[0].recipient_phone;
        this.recipient_no_id = response.data.data[0].recipient_no_id;
      } catch (error) {
        console.log(error);
      }
    },
    startScanBarcode() {
      this.scanBarcodeDialog = true;
      this.$refs.barcode_scanner.focus();
    },
    async onDetectBarcode() {
      let searchCode = this.code_barcode.toUpperCase();
      let shipment_number = null;

      let query_params_shipment_number = {
        field: "shipment_number",
        search: searchCode,
      };
      let checkByShipmentNumber = await axios.get(
        `${api_url}/api/v1/transaction/international-order/advance-search`,
        { params: query_params_shipment_number, headers: this.headers }
      );
      if (checkByShipmentNumber.data.data !== null) {
        shipment_number = checkByShipmentNumber.data.data.shipment_number;
      }

      let query_params_awb_no = { field: "awb_no", search: searchCode };
      let checkByAWBNo = await axios.get(
        `${api_url}/api/v1/transaction/international-order/advance-search`,
        { params: query_params_awb_no, headers: this.headers }
      );
      if (checkByAWBNo.data.data !== null) {
        shipment_number = checkByAWBNo.data.data.shipment_number;
      }

      /* Update Transaction */
      if (shipment_number !== null) {
        try {
          let today = new Date();
          let data = {
            position_order: "Mitra",
            status_order: "Manifest",
            scanned_by: this.profileData.id,
            manifest_date: today,
          };

          let response = await axios.put(
            `${api_url}/api/v1/transaction/international-order/update-by-scan-barcode/${shipment_number}`,
            data,
            { headers: this.headers }
          );
          console.log(response.data);

          this.refreshData();

          setTimeout(() => {
            this.code_barcode = "";
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      }
    },
    filterColumn() {
      this.columns = [];

      if (this.filterColumnSelected.shipment_number) {
        this.columns.push({
          field: "shipment_number",
          label: "No Order",
        });
      }

      if (this.filterColumnSelected.sender_name) {
        this.columns.push({
          field: "sender_name",
          label: "Nama Pengirim",
        });
      }

      if (this.filterColumnSelected.awb) {
        this.columns.push({
          field: "awb_no",
          label: "Resi",
        });
      }

      if (this.filterColumnSelected.courier) {
        this.columns.push({
          field: "courier",
          label: "Mitra Ekspedisi",
        });
      }

      if (this.filterColumnSelected.recipient_name) {
        this.columns.push({
          field: "recipient_name",
          label: "Nama Penerima",
        });
      }

      if (this.filterColumnSelected.recipient_phone) {
        this.columns.push({
          field: "recipient_phone",
          label: "No Telp Penerima",
        });
      }

      if (this.filterColumnSelected.createdAt) {
        this.columns.push({
          field: "createdAt",
          label: "Tanggal Order",
        });
      }

      if (this.filterColumnSelected.status_order) {
        this.columns.push({
          field: "status_order",
          label: "Status Order",
        });
      }

      if (this.filterColumnSelected.service_type) {
        this.columns.push({
          field: "service_type",
          label: "Layanan",
        });
      }

      if (this.filterColumnSelected.weight) {
        this.columns.push({
          field: "weight",
          label: "Berat",
        });
      }

      if (this.filterColumnSelected.volume) {
        this.columns.push({
          field: "volume",
          label: "Volume",
        });
      }

      if (this.filterColumnSelected.recipient_destination) {
        this.columns.push({
          field: "recipient_destination",
          label: "Negara Tujuan",
        });
      }

      if (this.filterColumnSelected.pickup_by) {
        this.columns.push({
          field: "pickup_by",
          label: "Pickup",
        });
      }

      if (this.filterColumnSelected.payment_type) {
        this.columns.push({
          field: "payment_type",
          label: "Tipe Pembayaran",
        });
      }

      if (this.filterColumnSelected.shipment_fee) {
        this.columns.push({
          field: "shipment_fee",
          label: "Ongkir",
        });
      }

      if (this.filterColumnSelected.agen) {
        this.columns.push({
          field: "agen",
          label: "Agen",
        });
      }

      if (this.filterColumnSelected.branch) {
        this.columns.push({
          field: "branch",
          label: "Cabang",
        });
      }

      if (this.filterColumnSelected.amount_paid) {
        this.columns.push({
          field: "amount_paid",
          label: "Total Bayar ke Jaskipin",
        });
      }

      if (this.filterColumnSelected.position_order) {
        this.columns.push({
          field: "position_order",
          label: "Posisi Order",
        });
      }

      if (this.filterColumnSelected.input_by) {
        this.columns.push({
          field: "input_by",
          label: "Admin",
        });
      }

      this.columns.push({
        field: "action",
        label: "Aksi",
      });
    },
    convertDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    onCopyShipmentNumber() {
      alert("No order sudah dicopy");
    },
    onErrorShipmentNumber() {
      alert("Gagal dicopy");
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
