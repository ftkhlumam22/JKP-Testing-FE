<template>
  <div>
    <button
      @click="collapse = !collapse"
      role="button"
      class="flex justify-between px-4 mb-2 py-3 w-full cursor-pointer relative items-center focus:outline-none hover:bg-blue-100 border-l-4 border-transparent hover:border-blue-800"
      aria-controls="faq7"
      aria-expanded="false"
    >
      <div class="flex">
        <img v-if="imageSource" :src="imageSource" class="w-5 h-5 mr-4" />
        <span
          :class="imageSource ? '' : 'pl-3'"
          class="text-md text-gray-600 font-medium truncate"
        >
          {{ title }}
        </span>
      </div>
      <svg
        :class="{ 'rotate-90': collapse }"
        class="flex-none w-4 h-4 mr-2 text-gray-500 transition transform"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
    <div v-show="collapse" class="text-gray-700" id="faq7">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageSource: String,
  },
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
