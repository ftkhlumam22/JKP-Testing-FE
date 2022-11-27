<template>
  <div v-if="data && meta" class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <!------------------->
            <!-- Header Column -->
            <!------------------->
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-if="mutipleCheck"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <input
                    type="checkbox"
                    class="w-3 h-3"
                    v-model="selectAllItem"
                    @click="selectItem"
                  />
                </th>
                <th
                  v-for="(item, index) in columns"
                  :key="index"
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  <div class="flex items-center">
                    <div>{{ item.label }}</div>
                    <button
                      v-if="sortData && item.sort"
                      @click="applySort(item.field)"
                      class="focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3 h-3 fill-current ml-2"
                        viewBox="0 0 24 24"
                        style="transform:;-ms-filter:"
                      >
                        <path
                          d="M6.227 11h11.547c.862 0 1.32-1.02.747-1.665l-5.773-6.495c-.397-.448-1.097-.448-1.494 0L5.479 9.335C4.906 9.98 5.364 11 6.227 11zM11.253 21.159c.397.448 1.097.448 1.494 0l5.773-6.495C19.094 14.02 18.636 13 17.773 13H6.227c-.862 0-1.32 1.02-.747 1.665L11.253 21.159z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <!------------------------->
            <!-- / End Header Column -->
            <!------------------------->

            <!--------------->
            <!-- List Item -->
            <!--------------->
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="(item, index) in data"
                :key="index"
                class="text-sm font-medium"
              >
                <td v-if="mutipleCheck" class="px-6 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    class="w-3 h-3"
                    :value="item"
                    v-model="selectedItem"
                    @change="sendSelectedData"
                  />
                </td>
                <template v-for="col in columns">
                  <td
                    v-if="typeof $scopedSlots[col.field] !== 'undefined'"
                    :key="col.id"
                    class="px-6 py-3 whitespace-nowrap"
                  >
                    <slot
                      :name="col.field"
                      :field="col.field"
                      :item="item"
                    ></slot>
                  </td>
                  <td v-else :key="col.id" class="px-6 py-3 whitespace-nowrap">
                    {{ item[col.field] }}
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
          <!--------------------->
          <!-- / End List Item -->
          <!--------------------->

          <!---------------->
          <!-- Pagination -->
          <!---------------->
          <div
            class="bg-white px-4 py-2 flex items-center justify-between border-t border-gray-300 sm:px-6"
          >
            <div class="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Previous
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Next
              </a>
            </div>
            <div
              class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <p class="text-sm leading-5 text-gray-700">
                  Menampilkan
                  <span class="font-medium">{{ meta.counter }}</span>
                  -
                  <span class="font-medium">{{
                    meta.counter + data.length - 1
                  }}</span>
                  dari
                  <span class="font-medium">{{ meta.totalItems }}</span>
                  hasil
                </p>
              </div>
              <div>
                <button
                  @click="PageNavHandler('previous')"
                  :disabled="meta.hasPrevPage == false"
                  :class="meta.hasPrevPage ? 'bg-white' : 'bg-gray-100'"
                  class="relative inline-flex items-center px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  @click="PageNavHandler('next')"
                  :disabled="meta.hasNextPage == false"
                  :class="meta.hasNextPage ? 'bg-white' : 'bg-gray-100'"
                  class="ml-3 relative inline-flex items-center px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <!---------------------->
          <!-- / End Pagination -->
          <!---------------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    columns: {
      type: Array,
    },
    /* Handler Function */
    PageNavHandler: { default: () => {}, type: Function },
    // TableInputSearchHandler: { default: () => () => {}, type: Function },
    // DeleteSelectedDataHandler: { default: () => {}, type: Function },
    mutipleCheck: {
      type: Boolean,
      default: false,
    },
    sortData: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: [],
      selectAllItem: false,
    };
  },
  computed: {
    dataColumns() {
      let column = [];

      if (this.data && this.data.length !== 0) {
        Object.keys(this.data[0]).map((item) => {
          column.push(item);
        });
      }

      return column;
    },
  },
  methods: {
    selectItem() {
      this.selectedItem = [];
      if (!this.selectAllItem) {
        for (let i in this.data) {
          this.selectedItem.push(this.data[i]);
        }
      }

      this.sendSelectedData();
    },
    sendSelectedData() {
      this.$emit("selectedItem", this.selectedItem);
    },
    applySort(field) {
      this.$emit("sorting", field);
    },
  },
};
</script>

<style scoped></style>
