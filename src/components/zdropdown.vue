<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative inline-block text-left" v-click-outside="close">
        <div>
            <button @click="open = !open" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
                {{ text }}
                <!-- Heroicon name: chevron-down -->
                <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div v-show="open" class="origin-top-right absolute right-0 mt-2 max-w-md rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-40" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <slot name="item">
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    directives: {
        ClickOutside
    },
    data () {
        return {
            open: false
        }
    },
    methods: {
        close() {
            this.open = false;
        }
    }
}
</script>

<style scoped>

</style>