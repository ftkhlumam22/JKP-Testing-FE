<template>
    <div class="fixed bg-blue-800 top-0 bottom-0 left-0 right-0 z-10">
        <div class="flex items-center justify-center h-full">
            <div class="max-w-xs w-full">
                <img src="@/assets/logo-asli-white.png" width="120" class="mx-auto" />
                <h1 class="mt-5 text-white font-medium text-center text-sm mb-1">Sedang Memuat...</h1>
                <div
                    class="w-full bg-gray-200 h-2 relative overflow-hidden"
                    :class="[{'rounded-full': rounded}, { indeterminate: indeterminate}]"
                >
                    <div
                        class="h-full progressbar"
                        :class="[`bg-${color}-500`, {'absolute top-0': indeterminate}, {'rounded-full': rounded}]"
                        role="progressbar"
                        :style="{width: `${percentage}`}"
                        :aria-valuenow="percentage"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <span class="flex items-center h-full">
                            <slot></slot>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        color: {
            type: String,
            default: "blue"
        },
        percentage: {
            type: Number,
            default: 20
        },
        rounded: {
            type: Boolean,
            default: true
        },
        indeterminate: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
@keyframes progress-indeterminate {
  0% {
    width: 30%;
    left: -40%;
  }
  60% {
    left: 100%;
    width: 100%;
  }
  to {
    left: 100%;
    width: 0;
  }
}
.progressbar {
  transition: width 0.25s ease;
}
.indeterminate .progressbar {
  animation: progress-indeterminate 1.4s ease infinite;
}
</style>