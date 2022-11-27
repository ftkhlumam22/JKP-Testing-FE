<template>
  <div>
    <div class="flex items-start justify-between mb-10">
      <div class="lg:w-2/3 w-full">
        <h1 class="text-3xl text-gray-800 font-medium mb-3">
          Transaksi Pengiriman ke Luar Negeri
        </h1>
        <button
          @click="
            formDialog = !formDialog;
            dataSelected = null;
            emptyFormData();
          "
          class="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 shadow-md rounded-full border border-green-700 focus:outline-none flex items-center"
        >
          <svg
            class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
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
          Tambah Transaksi
        </button>
      </div>
      <form class="relative">
        <svg
          width="20"
          height="20"
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
          @input="TableInputSearchHandler($event)"
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Pencarian.."
          placeholder="Pencarian.."
        />
      </form>
    </div>
    <div class="flex mb-10 space-x-8">
      <div
        class="lg:w-1/3 w-full"
        @drop="onDrop($event, 'Agen')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h1 class="text-2xl text-gray-800 mb-5">
          Agen/Kurir
          <span class="text-gray-300">({{ listPositionAgen.length }})</span>
        </h1>
        <div
          v-for="(item, index) in listPositionAgen"
          :key="index"
          draggable
          @dragstart="startDrag($event, item)"
          @touchstart="show"
          @touchmove="startDrag($event, item)"
        >
          <div class="shadow-lg rounded-lg overflow-hidden mb-5">
            <div class="bg-white px-4 py-4">
              <div class="flex items-center mb-5">
                <div
                  class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 text-yellow-400 flex-shrink-0 overflow-hidden"
                >
                  <!-- <img class="object-cover object-center w-full h-auto" src="https://mytrackcdn.com/img/couriers/aramex.png" alt=""> -->
                  <svg
                    class="object-cover object-center w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#fff"
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <h1 class="text-xl text-gray-900 font-semibold">
                  {{ item.shipment_number }}
                </h1>
                <button
                  @click="detailOrder(item)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto mr-2 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6"
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
                  @click="editOrder(item.id)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
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
              <div class="flex items-center mb-2">
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.sender_name }}
                </h4>
                <svg
                  class="w-5 h-5 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.recipient_name }} ({{ item.recipient_destination }})
                </h4>
              </div>
              <h5 class="text-sm text-gray-400 mb-5">
                Resi: {{ item.awb_no ? item.awb_no : "(Belum Diinput)" }}
              </h5>
              <div class="flex items-center justify-between">
                <h1
                  class="bg-green-50 text-green-300 px-3 py-2 rounded-full inline-flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2 stroke-current"
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
                <div v-if="item.agen" class="flex items-center text-gray-700">
                  <svg
                    class="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ item.agen.full_name }}
                </div>
              </div>
            </div>
            <div class="bg-yellow-400 px-3 py-1"></div>
          </div>
        </div>
      </div>
      <div
        class="w-1/3"
        @drop="onDrop($event, 'Office')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h1 class="text-2xl text-gray-800 mb-5">
          Office
          <span class="text-gray-300">({{ listPositionOffice.length }})</span>
        </h1>
        <div
          v-for="(item, index) in listPositionOffice"
          :key="index"
          draggable
          @dragstart="startDrag($event, item)"
          @touchstart="show"
          @touchmove="startDrag($event, item)"
        >
          <div class="shadow-lg rounded-lg overflow-hidden mb-5">
            <div class="bg-white px-4 py-4">
              <div class="flex items-center mb-5">
                <div
                  class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 text-blue-400 flex-shrink-0 overflow-hidden"
                >
                  <!-- <img class="object-cover object-center w-full h-auto" src="https://mytrackcdn.com/img/couriers/aramex.png" alt=""> -->
                  <svg
                    class="object-cover object-center w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h1
                  class="text-xl text-gray-900 font-semibold flex items-center"
                >
                  {{ item.shipment_number }}
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
                      v-if="item.status_order === 'Pending'"
                      class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                      >{{ item.status_order }}</span
                    >
                    <span
                      v-if="item.status_order === 'Manifest'"
                      class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                      >{{ item.status_order }}</span
                    >
                  </template>
                </h1>
                <button
                  @click="detailOrder(item)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto mr-2 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6"
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
                  @click="editOrder(item.id)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
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
              <div class="flex items-center mb-2">
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.sender_name }}
                </h4>
                <svg
                  class="w-5 h-5 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.recipient_name }} ({{ item.recipient_destination }})
                </h4>
              </div>
              <h5 class="text-sm text-gray-400 mb-5">
                Resi: {{ item.awb_no ? item.awb_no : "(Belum Diinput)" }}
              </h5>
              <div class="flex items-center justify-between">
                <h1
                  class="bg-green-50 text-green-300 px-3 py-2 rounded-full inline-flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2 stroke-current"
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
                <div v-if="item.agen" class="flex items-center text-gray-700">
                  <svg
                    class="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ item.agen.full_name }}
                </div>
              </div>
            </div>
            <div class="bg-blue-400 px-3 py-1"></div>
          </div>
        </div>
      </div>
      <div
        class="w-1/3"
        @drop="onDrop($event, 'Mitra')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h1 class="text-2xl text-gray-800 mb-5">
          Mitra
          <span class="text-gray-300">({{ listPositionMitra.length }})</span>
        </h1>
        <div
          v-for="(item, index) in listPositionMitra"
          :key="index"
          draggable
          @dragstart="startDrag($event, item)"
          @touchstart="show"
          @touchmove="startDrag($event, item)"
        >
          <div class="shadow-lg rounded-lg overflow-hidden mb-5">
            <div class="bg-white px-4 py-4">
              <div class="flex items-center mb-5">
                <div
                  class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 text-green-400 flex-shrink-0 overflow-hidden"
                >
                  <!-- <img class="object-cover object-center w-full h-auto" src="https://mytrackcdn.com/img/couriers/aramex.png" alt=""> -->
                  <svg
                    class="object-cover object-center w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h1
                  class="text-xl text-gray-900 font-semibold flex items-center"
                >
                  {{ item.shipment_number }}
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
                      v-if="item.status_order === 'Pending'"
                      class="bg-yellow-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                      >{{ item.status_order }}</span
                    >
                    <span
                      v-if="item.status_order === 'Manifest'"
                      class="bg-green-400 px-2 py-1 text-white rounded font-semibold text-xs ml-2"
                      >{{ item.status_order }}</span
                    >
                  </template>
                </h1>
                <button
                  @click="detailOrder(item)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 ml-auto mr-2 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6"
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
                  @click="editOrder(item.id)"
                  class="bg-blue-50 hover:bg-blue-100 rounded-lg px-1.5 py-1.5 text-blue-300 focus:outline-none"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
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
              <div class="flex items-center mb-2">
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.sender_name }}
                </h4>
                <svg
                  class="w-5 h-5 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h4 class="text-md font-medium text-gray-900">
                  {{ item.recipient_name }} ({{ item.recipient_destination }})
                </h4>
              </div>
              <h5 class="text-sm text-gray-400 mb-5">
                Resi: {{ item.awb_no ? item.awb_no : "(Belum Diinput)" }}
              </h5>
              <div class="flex items-center justify-between">
                <h1
                  class="bg-green-50 text-green-300 px-3 py-2 rounded-full inline-flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2 stroke-current"
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
                <div v-if="item.agen" class="flex items-center text-gray-700">
                  <svg
                    class="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ item.agen.full_name }}
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
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
      >
        Previous
      </button>
      <button
        @click="PageNavHandler('next')"
        :disabled="meta.hasNextPage == false"
        :class="meta.hasNextPage ? 'bg-white' : 'bg-gray-200'"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
      >
        Next
      </button>
    </div>
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
      <zmodal
        v-show="formDialog"
        title="Tambah Transaksi"
        desc="Tambah transaksi pengiriman ke luar negeri"
        @close="
          formDialog = false;
          dataSelected = [];
        "
      >
        <div class="flex items-center px-6 pt-6 pb-2 space-x-4">
          <div @click="tabForm = 0" class="w-1/5 cursor-pointer">
            <h3
              :class="
                tabForm >= 0
                  ? 'text-green-300 bg-green-50 hover:bg-green-100'
                  : 'text-gray-300 bg-gray-50 hover:bg-gray-100'
              "
              class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center"
            >
              <div
                :class="tabForm >= 0 ? 'bg-green-300' : 'bg-gray-300'"
                class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2"
              >
                1
              </div>
              <span class="text-sm font-medium">Lembaran Pengirim</span>
            </h3>
          </div>
          <div @click="tabForm = 1" class="w-1/5 cursor-pointer">
            <h3
              :class="
                tabForm > 0
                  ? 'text-green-300 bg-green-50 hover:bg-green-100'
                  : 'text-gray-300 bg-gray-50 hover:bg-gray-100'
              "
              class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center"
            >
              <div
                :class="tabForm > 0 ? 'bg-green-300' : 'bg-gray-300'"
                class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2"
              >
                2
              </div>
              <span class="text-sm font-medium">Lembaran Penerima</span>
            </h3>
          </div>
          <div @click="tabForm = 2" class="w-1/5 cursor-pointer">
            <h3
              :class="
                tabForm > 1
                  ? 'text-green-300 bg-green-50 hover:bg-green-100'
                  : 'text-gray-300 bg-gray-50 hover:bg-gray-100'
              "
              class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center"
            >
              <div
                :class="tabForm > 1 ? 'bg-green-300' : 'bg-gray-300'"
                class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2"
              >
                3
              </div>
              <span class="text-sm font-medium">Informasi Barang</span>
            </h3>
          </div>
          <div @click="tabForm = 3" class="w-1/5 cursor-pointer">
            <h3
              :class="
                tabForm > 2
                  ? 'text-green-300 bg-green-50 hover:bg-green-100'
                  : 'text-gray-300 bg-gray-50 hover:bg-gray-100'
              "
              class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center"
            >
              <div
                :class="tabForm > 2 ? 'bg-green-300' : 'bg-gray-300'"
                class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2"
              >
                4
              </div>
              <span class="text-sm font-medium">Deskripsi Paket</span>
            </h3>
          </div>
          <div @click="tabForm = 4" class="w-1/5 cursor-pointer">
            <h3
              :class="
                tabForm > 3
                  ? 'text-green-300 bg-green-50 hover:bg-green-100'
                  : 'text-gray-300 bg-gray-50 hover:bg-gray-100'
              "
              class="text-md px-3 py-2 rounded-md text-center flex items-center justify-center"
            >
              <div
                :class="tabForm > 3 ? 'bg-green-300' : 'bg-gray-300'"
                class="h-5 w-5 text-white text-sm rounded-full flex items-start justify-center mr-2"
              >
                5
              </div>
              <span class="text-sm font-medium">Pembayaran</span>
            </h3>
          </div>
        </div>
        <div v-show="tabForm === 0" class="px-6 py-6 space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              No Order/Shipment Number
            </label>
            <input
              disabled
              v-model="shipment_number"
              class="bg-gray-100 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: JX001"
              type="text"
            />
          </div>
          <div
            v-if="
              dataSelected !== null && dataSelected.position_order !== 'Agen'
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
              :data="['Hold', 'Cancel', 'Manifest', 'Pending']"
              placeholder="Pilih Status Order"
            >
            </zselect>
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Nama Pengirim
            </label>
            <input
              v-model="sender_name"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: Andre Hasibuan"
              type="text"
            />
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <div v-show="tabForm === 1" class="px-6 py-6 space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Nama Penerima
            </label>
            <input
              v-model="recipient_name"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: Ferdinand"
              type="text"
            />
          </div>
          <div>
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
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Negara
            </label>
            <input
              v-model="recipient_destination"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: Amerika"
              type="text"
            />
          </div>
          <div>
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
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              No Telepon
            </label>
            <input
              v-model="recipient_phone"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: 08123443424"
              type="text"
            />
          </div>
          <div>
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
        <div v-show="tabForm === 2" class="px-6 py-6 space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Mitra Ekspedisi
            </label>
            <zselect
              v-model="courier"
              :data="courierOptions"
              placeholder="Pilih Mitra Ekspedisi"
            >
            </zselect>
          </div>
          <div>
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
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Berat (Kg)
            </label>
            <input
              v-model="weight"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: 1"
              type="number"
            />
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Jumlah Kodi
            </label>
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
              placeholder="Pilih Jumlah Kodi"
            >
            </zselect>
          </div>
          <div>
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
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Volume
            </label>
            <div class="flex items-center space-x-4">
              <input
                v-model="long"
                class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 240"
                type="number"
              />
              <input
                v-model="wide"
                class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 50"
                type="number"
              />
              <input
                v-model="height"
                class="w-1/4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="contoh: 35"
                type="number"
              />
              <div
                v-if="long !== '' && wide !== '' && height !== ''"
                class="w-1/4 bg-gray-200 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              >
                {{
                  (parseInt(long) * parseInt(wide) * parseInt(height)) / 5000
                }}
              </div>
              <div
                v-else
                class="w-1/4 bg-gray-200 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              >
                {{ parseInt(0) }}
              </div>
            </div>
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Ongkos Kirim
            </label>
            <input
              v-model="shipment_fee"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="contoh: 87000"
              type="text"
            />
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Pickup
            </label>
            <zselect
              v-model="pickup_by"
              :data="pickupOptions"
              placeholder="Pilih Pickup"
            >
            </zselect>
          </div>
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Nama Agen
            </label>
            <zselect
              v-model="agen"
              :data="agenOptions"
              placeholder="Pilih Agen"
            >
            </zselect>
          </div>
        </div>
        <div v-show="tabForm === 3" class="px-6 py-6 space-y-4">
          <div>
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Deskripsi Paket
            </label>
            <div
              class="flex items-center space-x-4 mb-4"
              v-for="(item, index) in detail_item"
              :key="index"
            >
              <input
                v-model="item.item_name"
                class="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Barang"
                type="text"
              />
              <input
                v-model="item.qty"
                class="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Quantity"
                type="number"
              />
              <input
                v-model="item.code"
                class="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="HS Code"
                type="text"
              />
              <input
                v-model="item.unit"
                class="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Satuan"
                type="text"
              />
              <input
                v-model="item.total_value"
                class="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                placeholder="Total Nilai"
                type="number"
              />
              <button
                v-if="index === 0"
                :disabled="dataSelected !== null"
                :class="
                  dataSelected === null
                    ? 'bg-blue-500 hover:bg-blue-600 border-blue-600 text-white'
                    : 'bg-gray-300 border-gray-400 text-gray-500'
                "
                @click="addNewDetailItem"
                class="px-3 py-2 border rounded-md focus:outline-none"
              >
                <svg
                  class="group-hover:text-light-blue-600 text-light-blue-500"
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
              <button
                v-if="index !== 0"
                :disabled="dataSelected !== null"
                :class="
                  dataSelected === null
                    ? 'bg-red-500 hover:bg-red-600 border-red-600 text-white'
                    : 'bg-gray-300 border-gray-400 text-gray-500'
                "
                @click="removeDetailItem(index)"
                class="px-3 py-2 border rounded-md focus:outline-none"
              >
                <svg
                  class="group-hover:text-light-blue-600 text-light-blue-500"
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
            </div>
          </div>
        </div>
        <div v-show="tabForm === 4" class="px-6 py-6 space-y-4">
          <div>
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
            <div class="relative flex items-center">
              <input
                class="w-4 h-4"
                type="radio"
                v-model="payment_type"
                value="Credit"
              />
              <label class="ml-1">Credit</label>
            </div>
          </div>
          <div v-if="payment_type == 'Transfer'">
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
          <div v-if="payment_type == 'Transfer'">
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
          <div v-if="payment_type == 'Credit'">
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Pilih Pelanggan
            </label>
            <zselect
              v-model="member"
              :data="memberOptions"
              placeholder="Pilih Pelanggan"
            >
            </zselect>
          </div>
          <div v-if="dataSelected !== null">
            <label
              id="listbox-label"
              class="block text-sm leading-5 font-semibold text-gray-800 mb-1"
            >
              Total Bayar
            </label>
            <input
              v-model="amount_paid"
              class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
              placeholder="Contoh: 89000"
              type="number"
            />
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            v-if="tabForm < 4"
            @click="tabForm++"
            class="bg-white ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Lanjut
          </button>
          <button
            @click="updateOrder"
            v-if="tabForm == 4 && dataSelected !== null"
            class="bg-green-400 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
          >
            Simpan Transaksi
          </button>
          <button
            @click="createOrder"
            v-if="tabForm == 4 && dataSelected === null"
            class="bg-green-400 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-green-300 active:bg-green-600 active:text-white transition ease-in-out duration-150"
          >
            Buat Transaksi
          </button>
          <button
            @click="tabForm--"
            :disabled="tabForm == 0"
            class="bg-white relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
          >
            Sebelumnya
          </button>
        </div>
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
        v-show="deleteConfirmModal"
        title="Hapus Data Order"
        message="Anda yakin ingin menghapus data order ini?<br/> Data akan dihapus secara permanen. Tindakan ini tidak bisa dibatalkan."
        @close="
          deleteConfirmModal = false;
          dataSelected = [];
        "
        @confirm="deleteOrder()"
      ></modal>
    </transition>
  </div>
</template>

<script>
import zmodal from "@/components/zmodal";
import zselect from "@/components/zselect";
import notification from "@/components/datatables/notification";
import modal from "@/components/datatables/modal";
import axios from "axios";
import { api_url } from "@/config/api";

export default {
  components: { zmodal, zselect, notification, modal },
  props: {
    /* Core Data */
    data: {
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
      /* Deskripsi Bank/Informasi Pembayaran */
      payment_type: "",
      bank: "",
      payment_info: "",
      /* Extra Data Form */
      position_order: "",
      status_order: "",
      amount_paid: "",
      payment_status: "",
      payment_date: "",
      member: "",
      input_by: "",
      /* Extra Data */
      tabForm: 0,
      courierOptions: [],
      serviceOptions: [],
      pickupOptions: [],
      agenOptions: [],
      memberOptions: [],
      bankOptions: [],
      lastShipmentNumber: "",
    };
  },
  computed: {
    listPositionAgen() {
      return this.data.filter((item) => item.position_order === "Agen");
    },
    listPositionOffice() {
      return this.data.filter((item) => item.position_order === "Office");
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
  },
  mounted() {
    this.getListCourier();
    this.getListService();
    this.getListPickup();
    this.getListAgen();
    this.getListMember();
    this.getListBank();
    this.getLastRecordOrder();
  },
  methods: {
    startDrag: (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    },
    async onDrop(event, list) {
      const itemID = event.dataTransfer.getData("itemID");
      const item = this.data.find((item) => item.id == itemID); // Find Drag Item
      item.position_order = list; // Set Position Order State

      /* Set Position Order to Database */
      let data = {
        position_order: list,
      };
      const response = await axios.put(
        `${api_url}/api/v1/transaction/international-order/update-position-order/${itemID}`,
        data,
        { headers: this.headers }
      );
      console.log(response);
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
        const response = await axios.get(`${api_url}/api/v1/users/agen/get`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.agenOptions.push({
            label: item.full_name,
            value: item.id,
          });
        });
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
        const response = await axios.get(`${api_url}/api/v1/users/member/get`, {
          params: query_params,
          headers: this.headers,
        });
        console.log(response);
        response.data.map((item) => {
          this.memberOptions.push({
            label: item.full_name,
            value: item.id,
          });
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
     * Get Last Record Method
     */
    async getLastRecordOrder() {
      const response = await axios.get(
        `${api_url}/api/v1/transaction/international-order/last`,
        { headers: this.headers }
      );
      console.log(response);
      if (response.data.data === null) {
        this.lastShipmentNumber = "JCRX0000001";
      } else {
        this.lastShipmentNumber = this.next(response.data.data.shipment_number);
      }
    },
    /*
     * Create Method
     */
    async createOrder() {
      let data = {
        /* Lembaran Pengirim */
        shipment_number: this.shipment_number,
        sender_name: this.sender_name,
        sender_address: this.sender_address,
        sender_phone: this.sender_phone,
        /* Lembaran Penerima */
        recipient_name: this.recipient_name,
        recipient_address: this.recipient_address,
        recipient_destination: this.recipient_destination,
        recipient_postal_code: this.recipient_postal_code,
        recipient_phone: this.recipient_phone,
        recipient_no_id: this.recipient_no_id,
        /* Informasi Barang/Ekspedisi */
        courier: this.courier,
        awb_no: this.awb_no,
        weight: this.weight,
        bag_amount: this.bag_amount,
        service_type: this.service_type,
        long: this.long, // Volume
        wide: this.wide, // Volume
        height: this.height, // Volume
        shipment_fee: this.shipment_fee,
        pickup_by: this.pickup_by,
        agen: this.agen.value,
        /* Deskripsi/Detail Paket */
        detail_item: this.detail_item,
        /* Deskripsi Bank/Informasi Pembayaran */
        payment_type: this.payment_type,
        bank: this.bank,
        payment_info: this.payment_info,
        /* Extra Data Form */
        position_order: this.position_order,
        status_order: this.status_order,
        amount_paid: this.amount_paid,
        payment_status: this.payment_status,
        payment_date: this.payment_date,
        input_by: this.input_by,
      };

      if (this.payment_type === "Credit") {
        data.member = this.member.value;
      } else {
        data.member = null;
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

        /* Refresh Data */
        window.location.reload();
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
        console.log(response);

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
        this.recipient_postal_code = this.dataSelected.recipient_postal_code;
        this.recipient_phone = this.dataSelected.recipient_phone;
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
        this.agen = {
          label: this.dataSelected.agen.full_name,
          value: this.dataSelected.agen._id,
        };
        /* Deskripsi/Detail Paket */
        this.detail_item = this.dataSelected.detail_item;
        /* Deskripsi Bank/Informasi Pembayaran */
        this.payment_type = this.dataSelected.payment_type;
        this.bank = this.dataSelected.bank;
        this.payment_info = this.dataSelected.payment_info;
        /* Extra Data Form */
        this.position_order = this.dataSelected.position_order;
        this.status_order = this.dataSelected.status_order;
        this.amount_paid = this.dataSelected.amount_paid;
        this.payment_status = this.dataSelected.payment_status;
        this.payment_date = this.dataSelected.payment_date;
        if (this.dataSelected.member !== null) {
          this.member = {
            label: this.dataSelected.member.full_name,
            value: this.dataSelected.member._id,
          };
        } else {
          this.member = "";
        }
        this.input_by = this.dataSelected.input_by;
      } catch (error) {
        console.log(error);
      }
    },
    async updateOrder() {
      let data = {
        /* Lembaran Pengirim */
        shipment_number: this.shipment_number,
        sender_name: this.sender_name,
        sender_address: this.sender_address,
        sender_phone: this.sender_phone,
        /* Lembaran Penerima */
        recipient_name: this.recipient_name,
        recipient_address: this.recipient_address,
        recipient_destination: this.recipient_destination,
        recipient_postal_code: this.recipient_postal_code,
        recipient_phone: this.recipient_phone,
        recipient_no_id: this.recipient_no_id,
        /* Informasi Barang/Ekspedisi */
        courier: this.courier,
        awb_no: this.awb_no,
        weight: this.weight,
        bag_amount: this.bag_amount,
        service_type: this.service_type,
        long: this.long, // Volume
        wide: this.wide, // Volume
        height: this.height, // Volume
        shipment_fee: this.shipment_fee,
        pickup_by: this.pickup_by,
        agen: this.agen.value,
        /* Deskripsi/Detail Paket */
        detail_item: this.detail_item,
        /* Deskripsi Bank/Informasi Pembayaran */
        payment_type: this.payment_type,
        bank: this.bank,
        payment_info: this.payment_info,
        /* Extra Data Form */
        position_order: this.position_order,
        status_order: this.status_order,
        amount_paid: this.amount_paid,
        payment_status: this.payment_status,
        payment_date: this.payment_date,
        input_by: this.input_by,
      };

      if (this.payment_type === "Credit") {
        data.member = this.member.value;
      } else {
        data.member = null;
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

        /* Refresh Data */
        window.location.reload();
      } catch (error) {
        console.log(error);
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
        this.getListData(this.page, this.limit);
        this.dataSelected = null;

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
    formatDate(value) {
      let options = { year: "numeric", month: "short", day: "numeric" };
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
      /* Deskripsi Bank/Informasi Pembayaran */
      this.payment_type = "";
      this.bank = "";
      this.payment_info = "";
      /* Extra Data Form */
      this.position_order = "Agen";
      this.status_order = "";
      this.amount_paid = "";
      this.payment_status = "Belum Lunas";
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
  },
};
</script>

<style scoped></style>
