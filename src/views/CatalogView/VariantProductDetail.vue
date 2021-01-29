<template>
   <div class="bg-gray-200" v-if="!isEmpty(dataProduct)">
      <DefaultLayout>
         <!-- navbar -->
         <Navbar />
         <!-- Image Product -->
         <ImgProduct />
         <!-- info produk name-->
         <VariantProductInfo :dataProduct="dataProduct" :user="user"/>
         <Footer />
      </DefaultLayout>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/DetailProduct/Navbar.vue';
import ImgProduct from '@/components/DetailProduct/ImgProduct.vue';
import VariantProductInfo from '@/components/DetailProduct/VariantProductInfo.vue';
import { AuthApiGet } from '../../helpers/httpRequest';
import { isEmpty } from 'lodash';

export default {
   name: 'VariantProductDetail',
   components: {
      DefaultLayout,
      Footer,
      Navbar,
      ImgProduct,
      VariantProductInfo,
   },
   data() {
      return {
         dataProduct: {},
      };
   },
   computed: {
      ...mapState(['user'])
   },
   created() {
      this.getProduct();
   },
   methods: {
      async getProduct() {
         let productResp;
         try {
            const params = {
               product_id: this.$route.params.product_id,
               kind_id: 2,
            };

            productResp = await AuthApiGet(
               '/products/get-product-by-id',
               params
            );
         } catch (error) {
            console.log(error);
            return;
         }

         this.dataProduct = productResp.data.data;
      },
      isEmpty,
   },
};
</script>

<style scoped></style>
