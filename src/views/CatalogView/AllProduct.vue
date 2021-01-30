<template>
   <div class="bg-gray-100">
      <DefaultLayout>
         <!-- navbar -->
         <Navbar />
         <!-- kategori product -->
         <CategoryProduct />
         <!-- product populer -->
         <ProductDisplay />
         <Footer />
      </DefaultLayout>
   </div>
</template>

<script>
// layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/allproduct/Navbar.vue';
import CategoryProduct from '@/components/allproduct/CategoryProduct.vue';
import ProductDisplay from '@/components/allproduct/ProductDisplay.vue';

export default {
   name: 'AllProduct',
   components: {
      DefaultLayout,
      Footer,
      Navbar,
      CategoryProduct,
      ProductDisplay,
   },
};
</script>

<style scoped></style>
