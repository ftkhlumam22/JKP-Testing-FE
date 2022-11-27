<template>
    <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
            <!--
            Background overlay, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <!-- <transition
                enter-active-class="ease-in-out duration-500"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in-out duration-500"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            </transition> -->
            <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
                <!--
                    Slide-over panel, show/hide based on slide-over state.

                    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full"
                -->
                <transition
                    enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
                    enter-class="translate-x-full"
                    enter-to-class="translate-x-0"
                    leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
                    leave-class="translate-x-0"
                    leave-to-class="translate-x-full"
                >
                    <div class="relative w-screen max-w-md">
                        <!--
                        Close button, show/hide based on slide-over state.

                        Entering: "ease-in-out duration-500"
                            From: "opacity-0"
                            To: "opacity-100"
                        Leaving: "ease-in-out duration-500"
                            From: "opacity-100"
                            To: "opacity-0"
                        -->
                        <transition
                            enter-active-class="ease-in-out duration-500"
                            enter-class="opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="ease-in-out duration-500"
                            leave-class="opacity-100"
                            leave-to-class="opacity-0"
                        >
                            <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                <button @click="close" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span class="sr-only">Close panel</span>
                                    <!-- Heroicon name: outline/x -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </transition>
                        <div class="h-full flex flex-col bg-white shadow-xl">
                            <div class="fixed w-full z-10 bg-blue-800 px-4 sm:px-6 border-b py-4">
                                <div class="flex items-center justify-between">
                                    <h2 id="slide-over-heading" class="text-base font-medium text-white">
                                    {{ title }}
                                    </h2>
                                    <button @click="close" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        <span class="sr-only">Close panel</span>
                                        <!-- Heroicon name: outline/x -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="mt-6 relative flex-1 px-4 sm:px-6 py-4" style="margin-top: 54px; margin-bottom: 48px">
                                <!-- Replace with your content -->
                                <div class="absolute inset-0 px-4 sm:px-6 overflow-y-auto py-6">
                                    <slot></slot>
                                </div>
                                <!-- /End replace -->
                            </div>
                            <div class="fixed w-screen max-w-md bg-gray-100 bottom-0 border-t px-3 py-2">
                                <button @click="submit" class="bg-green-600 hover:bg-green-700 w-full focus:outline-none px-4 py-2 text-sm text-white text-center font-semibold rounded-md">Simpan</button>
                            </div>
                        </div>
                    </div>
                </transition>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        submit() {
            this.$emit("submit");
        }
    }
}
</script>

<style scoped>

</style>