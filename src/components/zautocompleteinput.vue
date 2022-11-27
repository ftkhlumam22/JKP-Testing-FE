<template>
  <div class="space-y-1">
    <label
      id="listbox-label"
      class="block text-sm leading-5 font-semibold text-gray-800"
    >
      <slot name="SelectLabel"></slot>
    </label>

    <div
      v-click-outside="closeDropdown"
      class="relative cursor-pointer w-full rounded-md border-2 border-gray-300 bg-white pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-gray-400 transition ease-in-out duration-150 sm:text-sm"
    >
      <input
        v-if="value.label"
        :value="value.label"
        @input="inputSearch"
        type="text"
        :placeholder="placeholder"
        class="px-3 focus:outline-none w-full"
        @keydown="arrowDownSelect"
        @keyup.enter="
          select(matches[focus]);
          triggerSelect(matches[focus]);
        "
      />
      <input
        v-else
        :value="value"
        @input="inputSearch"
        type="text"
        :placeholder="placeholder"
        class="px-3 focus:outline-none w-full"
        @keydown="arrowDownSelect"
        @keyup.enter="
          select(matches[focus]);
          triggerSelect(matches[focus]);
        "
      />
      <!-- <span class="inline-block w-full rounded-md">
        <button type="button" @click="isOpen = !isOpen" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
          <div class="flex items-center space-x-3">
            <span class="font-medium block truncate" v-if="value.label">
              {{ value.label }}
            </span>
            <span class="font-medium block truncate text-gray-600" v-else-if="value === ''">
              {{ placeholder }}
            </span>
            <span class="font-medium block truncate" v-else>
              {{ value }}
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </span> -->

      <!-- Select popover, show/hide based on select state. -->
      <div
        v-show="isOpen"
        class="absolute mt-3 w-full rounded-md bg-white shadow-lg z-40"
      >
        <!-- Input Search -->
        <!-- <div class="w-full text-gray-900 cursor-default select-none relative py-2 px-2 focus:outline-none">
            <input :value="search" @input="e => search = e.target.value" class="border border-gray-300 rounded-md py-1 px-2 focus:outline-none w-full" type="text" placeholder="Cari.." />
        </div> -->
        <ul
          :style="[
            matches.length > 4 ? { height: '200px', overflow: 'auto' } : {},
          ]"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
        >
          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            Highlighted: "text-white bg-blue-600", Not Highlighted: "text-gray-900"
          -->
          <li
            tabindex="0"
            @click="
              select(d);
              triggerSelect(d);
            "
            @keyup.enter="
              select(d);
              triggerSelect(d);
            "
            id="listbox-item-0"
            role="option"
            v-for="(d, index) in matches"
            :key="index"
            class="select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-800"
            :class="focus == index ? 'bg-blue-700 text-white' : 'text-gray-900'"
            ref="arrowDownSelect"
          >
            <div class="flex items-center space-x-3">
              <!-- <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span
                v-if="d.label"
                class="block truncate"
                v-bind:class="{
                  'font-medium': !isSelected(d),
                  'font-bold': isSelected(d),
                }"
              >
                {{ d.label }}
              </span>
              <span
                v-else
                class="block truncate"
                v-bind:class="{
                  'font-medium': !isSelected(d),
                  'font-bold': isSelected(d),
                }"
              >
                {{ d }}
              </span>
            </div>

            <!--
              Checkmark, only display for selected option.
              Highlighted: "text-white", Not Highlighted: "text-blue-600"
            -->
            <span
              v-show="isSelected(d)"
              class="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>

          <!-- More options... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "VueSelect",
  props: {
    data: Array,
    value: [String, Object, Array],
    placeholder: String,
  },
  data() {
    return {
      isOpen: false,
      search: "",
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
    isSelected(value) {
      return this.value === value;
    },
    closeDropdown() {
      this.isOpen = false;
      this.search = "";
    },
    openDropdown() {
      this.isOpen = true;
      this.search = "";
    },
    select(value) {
      this.isOpen = false;
      this.search = "";
      this.$emit("input", value);
    },
    inputSearch(e) {
      this.isOpen = true;
      this.search = e.target.value;
      this.$emit("input", e.target.value);
    },
    triggerSelect(value) {
      this.$emit("triggerSelect", value);
    },
    arrowDownSelect(event) {
      switch (event.keyCode) {
        case 38:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus > 0) {
            this.focus;
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
    // search(e) {
    //     alert(e.target.value)
    //     this.search = e.target.value
    // }
  },
  directives: {
    ClickOutside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
