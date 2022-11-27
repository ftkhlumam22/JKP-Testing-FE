<template>
  <layouts>
    <template #content>
      <div class="bg-gray-200 h-auto">
        <div class="container px-4 py-10 mx-auto max-w-4xl">
          <div class="bg-white px-8 py-6 mb-8" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Halaman Home
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Slider</h2>
              </div>
              <div class="w-2/3">
                <template v-if="data && data.home_slider.length > 0">
                  <button
                    @click="addSlider"
                    class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md mb-3"
                  >
                    Tambah Slider
                  </button>
                  <div
                    v-for="(item, index) in data.home_slider"
                    :key="index"
                    class="bg-gray-100 px-4 py-3 text-sm shadow rounded-lg mb-3 flex items-center justify-between"
                    :class="item.slider_name === '' ? 'hidden' : ''"
                  >
                    <h4 class="font-semibold">{{ item.slider_name }}</h4>
                    <div class="ml-auto flex items-center space-x-2">
                      <button
                        @click="slider_selected = index"
                        class="bg-blue-200 hover:bg-blue-300 border border-blue-300 hover:border-blue-400 focus:border-blue-400 rounded-md px-3 py-1 text-sm text-blue-600 focus:outline-none flex items-center"
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
                        <h4 class="font-semibold">Edit</h4>
                      </button>
                      <button
                        @click="deleteSlider(index)"
                        class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center"
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
                            d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"
                          ></path>
                        </svg>
                        <h4 class="font-semibold">Hapus</h4>
                      </button>
                    </div>
                  </div>
                </template>
                <template v-if="data && data.home_slider.length === 0">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="slider_input[0].slider_name"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Nama Slider"
                      type="text"
                    />
                    <input
                      v-model="slider_input[0].slider_image"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: URL Image Slider"
                      type="text"
                    />
                    <input
                      v-model="slider_input[0].slider_headline"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Headline"
                      type="text"
                    />
                    <input
                      v-model="slider_input[0].slider_subheadline"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Subheadline"
                      type="text"
                    />
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Tambah Slider
                    </button>
                  </div>
                </template>
                <template v-if="slider_selected !== null">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="slider_input[slider_selected].slider_name"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Nama Slider"
                      type="text"
                    />
                    <input
                      v-model="slider_input[slider_selected].slider_image"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: URL Image Slider"
                      type="text"
                    />
                    <input
                      v-model="slider_input[slider_selected].slider_headline"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Headline"
                      type="text"
                    />
                    <input
                      v-model="slider_input[slider_selected].slider_subheadline"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Subheadline"
                      type="text"
                    />
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Simpan Slider
                    </button>
                  </div>
                </template>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Benefit</h2>
              </div>
              <div class="w-2/3">
                <template v-if="data && data.home_benefit.length > 0">
                  <button
                    @click="addBenefit"
                    class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md mb-3"
                  >
                    Tambah Benefit
                  </button>
                  <div
                    v-for="(item, index) in data.home_benefit"
                    :key="index"
                    class="bg-gray-100 px-4 py-3 text-sm shadow rounded-lg mb-3 flex items-center justify-between"
                    :class="item.benefit_title === '' ? 'hidden' : ''"
                  >
                    <h4 class="font-semibold">{{ item.benefit_title }}</h4>
                    <div class="ml-auto flex items-center space-x-2">
                      <button
                        @click="benefit_selected = index"
                        class="bg-blue-200 hover:bg-blue-300 border border-blue-300 hover:border-blue-400 focus:border-blue-400 rounded-md px-3 py-1 text-sm text-blue-600 focus:outline-none flex items-center"
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
                        <h4 class="font-semibold">Edit</h4>
                      </button>
                      <button
                        @click="deleteBenefit(index)"
                        class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center"
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
                            d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"
                          ></path>
                        </svg>
                        <h4 class="font-semibold">Hapus</h4>
                      </button>
                    </div>
                  </div>
                </template>
                <template v-if="data && data.home_benefit.length === 0">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="benefit_input[0].benefit_title"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Judul Benefit"
                      type="text"
                    />
                    <input
                      v-model="benefit_input[0].benefit_desc"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Deskripsi Benefit"
                      type="text"
                    />
                    <input
                      v-model="benefit_input[0].benefit_image"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: URL Image Benefit"
                      type="text"
                    />
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Tambah Benefit
                    </button>
                  </div>
                </template>
                <template v-if="benefit_selected !== null">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="benefit_input[benefit_selected].benefit_title"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Judul Benefit"
                      type="text"
                    />
                    <input
                      v-model="benefit_input[benefit_selected].benefit_desc"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Deskripsi Benefit"
                      type="text"
                    />
                    <input
                      v-model="benefit_input[benefit_selected].benefit_image"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: URL Image Benefit"
                      type="text"
                    />
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Simpan Benefit
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="bg-white px-8 py-6 mb-8" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Halaman About Us
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.about_title"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Judul"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Sub Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.about_desc"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Sub Judul"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Isi Konten</h2>
              </div>
              <div class="w-2/3">
                <vue-editor v-model="data.about_body"></vue-editor>
                <!-- <textarea rows="5" v-model="data.about_body" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2" placeholder="contoh: Isi Konten"></textarea> -->
              </div>
            </div>
          </div>
          <div class="bg-white px-8 py-6 mb-8" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Halaman FAQ
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">FAQ</h2>
              </div>
              <div class="w-2/3">
                <template v-if="data && data.faq_list.length > 0">
                  <button
                    @click="addFAQ"
                    class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md mb-3"
                  >
                    Tambah FAQ
                  </button>
                  <div
                    v-for="(item, index) in data.faq_list"
                    :key="index"
                    class="bg-gray-100 px-4 py-3 text-sm shadow rounded-lg mb-3 flex items-center justify-between"
                    :class="item.faq_question === '' ? 'hidden' : ''"
                  >
                    <h4 class="font-semibold">{{ item.faq_question }}</h4>
                    <div class="ml-auto flex items-center space-x-2">
                      <button
                        @click="faq_selected = index"
                        class="bg-blue-200 hover:bg-blue-300 border border-blue-300 hover:border-blue-400 focus:border-blue-400 rounded-md px-3 py-1 text-sm text-blue-600 focus:outline-none flex items-center"
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
                        <h4 class="font-semibold">Edit</h4>
                      </button>
                      <button
                        @click="deleteFAQ(index)"
                        class="bg-red-400 hover:bg-red-500 border border-red-500 hover:border-red-600 focus:border-red-600 rounded-md px-3 py-1 text-sm text-white focus:outline-none flex items-center"
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
                            d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M16.706,15.293 l-1.414,1.414L12,13.415l-3.292,3.292l-1.414-1.414l3.292-3.292L7.294,8.709l1.414-1.414L12,10.587l3.292-3.292l1.414,1.414 l-3.292,3.292L16.706,15.293z"
                          ></path>
                        </svg>
                        <h4 class="font-semibold">Hapus</h4>
                      </button>
                    </div>
                  </div>
                </template>
                <template v-if="data && data.faq_list.length === 0">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="faq_input[0].faq_question"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Pertanyaan"
                      type="text"
                    />
                    <!-- <input v-model="faq_input[0].faq_answer" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2" placeholder="contoh: Jawaban" type="text"> -->
                    <vue-editor
                      class="bg-white mb-4"
                      v-model="faq_input[0].faq_answer"
                    ></vue-editor>
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Tambah FAQ
                    </button>
                  </div>
                </template>
                <template v-if="faq_selected !== null">
                  <div class="bg-gray-100 shadow rounded-lg px-4 py-3">
                    <input
                      v-model="faq_input[faq_selected].faq_question"
                      class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2"
                      placeholder="contoh: Pertanyaan"
                      type="text"
                    />
                    <!-- <input v-model="faq_input[faq_selected].faq_answer" class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2 mb-2" placeholder="contoh: Jawaban" type="text"> -->
                    <vue-editor
                      class="bg-white mb-4"
                      v-model="faq_input[faq_selected].faq_answer"
                    ></vue-editor>
                    <button
                      @click="updatePageSetting"
                      class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-3 py-1.5 text-xs text-white text-center font-semibold rounded-md"
                    >
                      Simpan FAQ
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="bg-white px-8 py-6 mb-8" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Halaman Kontak Kami
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_title"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Judul"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Sub Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_desc"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Sub Judul"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Alamat</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_address"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Alamat"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Email</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_email"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Email"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">No Handphone</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_phone"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: No Handphone"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">No Whatsapp</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.contact_whatsapp"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: No Whatsapp"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="bg-white px-8 py-6 mb-8" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Halaman Karir
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.job_title"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Judul"
                  type="text"
                />
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Sub Judul</h2>
              </div>
              <div class="w-2/3">
                <input
                  v-model="data.job_desc"
                  class="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800 text-sm px-3 py-2"
                  placeholder="contoh: Sub Judul"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="bg-white px-8 py-6 mb-6" v-if="data">
            <h1
              class="text-lg font-semibold border-b border-gray-300 pb-2 mb-5"
            >
              Pengaturan Blog
            </h1>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Akses Admin</h2>
              </div>
              <div class="w-2/3">
                <div class="flex items-center">
                  <a
                    href="https://blog.jaskipin.co.id/wp-admin"
                    target="_blank"
                    class="bg-blue-200 hover:bg-blue-300 border border-blue-300 hover:border-blue-400 focus:border-blue-400 rounded-md px-3 py-1 text-sm text-blue-600 focus:outline-none flex items-center"
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
                    <h4 class="font-semibold">Link Akses</h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Username</h2>
              </div>
              <div class="w-2/3">
                <div class="flex items-center">
                  <h4 class="text-sm">adminblog</h4>
                </div>
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="w-1/3">
                <h2 class="font-semibold text-gray-600">Password</h2>
              </div>
              <div class="w-2/3">
                <div class="flex items-center">
                  <h4 class="text-sm">Sukses2021</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="py-2 flex items-center">
            <button
              @click="updatePageSetting"
              class="bg-green-600 hover:bg-green-700 ml-auto focus:outline-none px-4 py-2 text-sm text-white text-center font-semibold rounded-md"
            >
              Simpan Pengaturan
            </button>
          </div>
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
            message="Berhasil! Bank baru sudah ditambahkan!"
            @close="successNotification = false"
          ></notification>
        </transition>
        <zloading v-show="loading"></zloading>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from "@/components/layouts";
import notification from "@/components/datatables/notification";
import zloading from "@/components/zloading";
import axios from "axios";
import { api_url } from "@/config/api";
import { VueEditor } from "vue2-editor";

export default {
  components: { layouts, notification, zloading, VueEditor },
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: null,
      slider_input: [
        {
          slider_name: "",
          slider_image: "",
          slider_headline: "",
          slider_subheadline: "",
        },
      ],
      slider_selected: null,
      benefit_input: [
        {
          benefit_image: "",
          benefit_title: "",
          benefit_desc: "",
        },
      ],
      benefit_selected: null,
      faq_input: [
        {
          faq_question: "",
          faq_answer: "",
        },
      ],
      faq_selected: null,
      /* Toggle Dialog */
      successNotification: false,
      loading: true,
      /* Extra Data */
    };
  },
  created() {
    /* Initiate Function */
    this.getData();
  },
  methods: {
    /*
     * Get Data Method
     */
    async getData() {
      this.data = null;

      try {
        const response = await axios.get(
          `${api_url}/api/v1/master/page-setting/get`
        );
        console.log(response);
        this.data = response.data.data[0];

        if (this.data.home_slider.length > 0) {
          this.slider_input = this.data.home_slider;
        }

        if (this.data.home_benefit.length > 0) {
          this.benefit_input = this.data.home_benefit;
        }

        if (this.data.faq_list.length > 0) {
          this.faq_input = this.data.faq_list;
        }

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
    async updatePageSetting() {
      let home_slider = this.slider_input;
      let home_benefit = this.benefit_input;
      let faq_list = this.faq_input;

      let data = {
        home_slider: home_slider,
        home_benefit: home_benefit,
        about_title: this.data.about_title,
        about_desc: this.data.about_desc,
        about_body: this.data.about_body,
        faq_list: faq_list,
        contact_title: this.data.contact_title,
        contact_desc: this.data.contact_desc,
        contact_address: this.data.contact_address,
        contact_email: this.data.contact_email,
        contact_phone: this.data.contact_phone,
        contact_whatsapp: this.data.contact_whatsapp,
        job_title: this.data.job_title,
        job_desc: this.data.job_desc,
      };

      try {
        const response = await axios.put(
          `${api_url}/api/v1/master/page-setting/update/${this.data.id}`,
          data,
          { headers: this.headers }
        );
        console.log(response.data);

        /* Set Toggle */
        this.successNotification = true;

        /* Refresh Data */
        // this.getData();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    /* Helpers */
    deleteSlider(index) {
      this.slider_input.splice(index, 1);
      this.updatePageSetting();
    },
    addSlider() {
      this.slider_input.push({
        slider_name: "",
        slider_image: "",
      });

      let last_index = this.slider_input.length - 1;

      this.slider_selected = last_index;
    },
    benefitSlider(index) {
      this.benefit_input.splice(index, 1);
      this.updatePageSetting();
    },
    addBenefit() {
      this.benefit_input.push({
        benefit_image: "",
        benefit_title: "",
        benefit_desc: "",
      });

      let last_index = this.benefit_input.length - 1;

      this.benefit_selected = last_index;
    },
    deleteFAQ(index) {
      this.faq_input.splice(index, 1);
      this.updatePageSetting();
    },
    addFAQ() {
      this.faq_input.push({
        faq_question: "",
        faq_answer: "",
      });

      let last_index = this.faq_input.length - 1;

      this.faq_selected = last_index;
    },
  },
};
</script>

<style scoped></style>
