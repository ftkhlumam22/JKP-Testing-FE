<template>
    <div v-if="data && meta" class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <!------------------>
                <!-- Filter Table -->
                <!------------------>
                <div class="flex justify-between items-center px-6 py-4 bg-white mb-4 border-b border-gray-200 sm:rounded-lg shadow">
                    <div class="lg:w-1/2 w-full">
                        <input @input="TableInputSearchHandler($event)" type="text" class="border px-3 py-2 rounded-md lg:w-1/2 w-full" placeholder="Pencarian.." />
                    </div>
                    <div class="lg:w-1/2 w-full flex justify-end">
                        <slot name="headerRightOptions">
                        </slot>
                        <button v-if="button_submit" @click="addForm" class="bg-green-600 hover:bg-green-700 px-3 py-2 font-semibold text-white rounded-md focus:outline-none">Tambah</button>
                    </div>
                </div>
                <!------------------------>
                <!-- / End Filter Table -->
                <!------------------------>
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <!------------------->
                        <!-- Header Column -->
                        <!------------------->
                        <thead class="bg-gray-50">
                            <tr>
                                <th v-for="(item, index) in columns" :key="index" scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {{ item.label }}
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
                            <tr v-for="(item, index) in data" :key="index">
                                <template v-for="col in columns">
                                    <td v-if="typeof $scopedSlots[col.field] !== 'undefined'" :key="col.id" class="px-6 py-4 whitespace-nowrap">
                                        <slot :name="col.field" :field="col.field" :item="item"></slot>
                                    </td>
                                    <td v-else :key="col.id" class="px-6 py-4 whitespace-nowrap">
                                        {{ item[col.field] }}
                                    </td>
                                </template>
                                <!-- <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                            Jane Cooper
                                            </div>
                                            <div class="text-sm text-gray-500">
                                            jane.cooper@example.com
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div class="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td> -->
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
                    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-300 sm:px-6"
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
                                    <span class="font-medium">{{ (meta.counter + data.length) - 1 }}</span>
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
                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer"
                                >
                                    Previous
                                </button>
                                <button
                                    @click="PageNavHandler('next')"
                                    :disabled="meta.hasNextPage == false"
                                    :class="meta.hasNextPage ? 'bg-white' : 'bg-gray-100'"
                                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
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
            default: () => []
        },
        meta: {
            type: Object,
            default: () => {}
        },
        columns: {
            type: Array
        },
        /* Handler Function */
        PageNavHandler: { default: () => {}, type: Function },
        TableInputSearchHandler: { default: () => () => {}, type: Function },
        // DeleteSelectedDataHandler: { default: () => {}, type: Function },
        button_submit: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        dataColumns() {
            let column = [];
            
            if(this.data && this.data.length !== 0){
                Object.keys(this.data[0]).map(item => {
                    column.push(item)
                });
            }

            return column;
        }
    },
    methods: {
        addForm() {
            this.$emit('addButton');
        }
    }
}
</script>

<style scoped>

</style>