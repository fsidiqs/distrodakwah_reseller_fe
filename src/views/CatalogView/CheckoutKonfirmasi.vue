<template>
    <div class="bg-gray-200">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- Info Penerima -->
            <InfoPenerima />
            <!-- info Pembayaran -->
            <InfoPembayaran />
            <!-- pembayaran -->
            <div class="bg-orange-400 mx-5 mt-5 mb-3 py-1 rounded">
                <button class="flex justify-center w-full">
                    <h1 class="text-white text-base ml-5 mr-2 my-auto uppercase"> Konfirmasi </h1>
                    <svg class="w-8 h-8 my-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="white"/>
                    </svg>
                </button>
            </div>
            <Footer /> 
        </DefaultLayout>
    </div>
</template>

<script>
//layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/CheckoutKonfirmasi/Navbar.vue';
import InfoPenerima from '@/components/CheckoutKonfirmasi/InfoPenerima.vue';
import InfoPembayaran from '@/components/CheckoutKonfirmasi/InfoPembayaran.vue';

export default {
    name: 'CheckoutKonfirmasi',
    components: { 
                    DefaultLayout, 
                    Footer, 
                    Navbar,
                    InfoPenerima,
                    InfoPembayaran
                }
}
</script>

<style scoped>

</style>