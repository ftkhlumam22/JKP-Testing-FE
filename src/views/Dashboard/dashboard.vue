<template>
    <div class="bg-gray-200 h-auto">
        <navigation></navigation>
        <div class="container px-4 py-10 mx-auto max-w-7xl">
            <div class="flex justify-center items-center bg-white rounded-lg px-12 py-8">
                <img src="https://www.enkel.ca/wp-content/uploads/2019/08/scale-up.png" width="450" />
                <div class="ml-3">
                    <h1 class="text-3xl font-bold mb-5">Halo {{ profileData.fullname }}!</h1>
                    <p class="text-xl font-semibold text-gray-400 mb-10">"Satu-satunya cara untuk melakukan pekerjaan yang hebat adalah dengan mencintai apa yang kamu lakukan." -Steve Jobs</p>
                    <button @click="$router.push('/international/order')" class="px-16 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold text-white text-base">Mulai Bekerja</button>
                </div>
            </div>
        </div>
        <zloading v-show="loading"></zloading>
    </div>
</template>

<script>
import navigation from '@/components/navigation';
import zloading from '@/components/zloading';

export default {
    components: { navigation, zloading },
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            loading: false
        }
    },
    computed: {
        profileData() {
            let profile = JSON.parse(window.localStorage.getItem('data-profile-jaskipin'));
            if(profile) {
                return profile;
            }else{
                return null;
            }
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>