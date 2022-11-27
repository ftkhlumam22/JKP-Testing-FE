<template>
  <div class="space-y-1">
    <label
      id="listbox-label"
      class="block text-sm leading-5 font-semibold text-gray-800"
    >
      <slot name="SelectLabel"></slot>
    </label>

    <div class="relative" v-click-outside="closeDropdown">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button
          type="button"
          @click="openDropdown"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-gray-400 transition ease-in-out duration-150 sm:text-sm"
        >
          <div class="flex items-center space-x-3">
            <!-- <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
            <span class="font-medium block">
              <!-- <span v-if="value.hasOwnProperty('label')">{{ value.label }}</span>
              <span v-else-if="value">{{ value }}</span>
              <span v-else class="text-gray-400">{{ placeholder }}</span> -->
              <div
                class="flex flex-wrap items-center gap-2"
                v-if="value && value.length > 0"
              >
                <template v-for="(item, index) in value">
                  <span
                    :key="index"
                    class="bg-green-600 text-white rounded-md py-0.5 px-2"
                  >
                    {{ item.label ? item.label : item }}
                  </span>
                </template>
              </div>
              <span v-else class="text-gray-400">{{ placeholder }}</span>
            </span>
          </div>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <svg
              class="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </span>

      <!-- Select popover, show/hide based on select state. -->
      <div
        v-show="isOpen"
        class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-40"
      >
        <!-- Input Search -->
        <div
          class="w-full text-gray-900 cursor-default select-none relative py-2 px-2 focus:outline-none"
        >
          <div
            class="flex items-center text-base overflow-auto font-normal text-gray-700 py-4 px-3 border-b"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "VueSelect",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
    },
    value: [String, Number, Object, Array],
    placeholder: String,
    mutipleCheck: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      dataValue: [],
      search: "",
      allSelected: "",
      selected: [],
      focus: null,
    };
  },
  computed: {
    matches() {
      if (this.search) {
        return this.data.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) =>
              item.label
                ? item.label.toLowerCase().includes(v)
                : item.toLowerCase().includes(v)
            );
        });
      } else {
        return this.data;
      }
    },
  },
  methods: {
    selectAll() {},
    isSelected(value) {
      // return this.value === value;
      return this.dataValue.includes(value);
    },
    closeDropdown() {
      this.isOpen = false;
    },
    openDropdown() {
      this.isOpen = true;
    },
    select(value) {
      if (this.dataValue.includes(value)) {
        let index = this.dataValue.indexOf(value);
        this.dataValue.splice(index, 1);
        this.$emit("input", this.dataValue);
      } else {
        this.dataValue.push(value);
        this.isOpen = false;
        this.$emit("input", this.dataValue);
      }
    },
    arrowDownSelect(event) {
      switch (event.keyCode) {
        case 38:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus > 0) {
            this.focus--;
          }
          break;
        case 40:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus < this.matches.length - 1) {
            this.focus++;
          }
          break;
      }
    },
    resetDataValue() {
      this.dataValue = [];
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
