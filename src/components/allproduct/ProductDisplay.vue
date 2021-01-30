<template>
   <div>
      <div class="grid grid-cols-2 mx-5 my-5">
         <div class="col-span-1">
            <h1 class="text-gray-900 text-base font-semibold capitalize">
               produk
            </h1>
         </div>
         <button class="col-span-1 focus:outline-none">
            <h1 class="text-orange-400 text-right">lihat semua</h1>
         </button>
      </div>
      <div class="flex flex-wrap mx-3 my-8">
         <template v-if="dataProducts.length > 0">
            <!-- <template v-for="product in dataProducts"> -->
            <template v-for="(product, index) in dataProducts">
               <SPCardPrice
                  :key="index"
                  :user="user"
                  :product="product"
                  v-if="product.product_kind_id == PRODUCT_KIND_SINGLE_PRODUCT"
               />
               <VPCardPrice
                  :key="index"
                  :user="user"
                  :product="product"
                  v-else-if="
                     product.product_kind_id == PRODUCT_KIND_VARIANT_PRODUCT
                  "
               />
            </template>
         </template>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

import { AuthApiGet } from '../../helpers/httpRequest';
import {
   PRODUCT_KIND_SINGLE_PRODUCT,
   PRODUCT_KIND_VARIANT_PRODUCT,
} from '../../helpers/productHelpers';
import SPCardPrice from '../Products/SPCardPrice.vue';
import VPCardPrice from '../Products/VPCardPrice.vue';

export default {
   name: 'ProductDisplay',
   components: {
      SPCardPrice,
      VPCardPrice,
   },
   data() {
      return {
         PRODUCT_KIND_SINGLE_PRODUCT,
         PRODUCT_KIND_VARIANT_PRODUCT,
         dataProducts: [],
      };
   },
   computed: {
      ...mapState(['user']),
   },
   created() {
      this.getProducts();
   },
   methods: {
      async getProducts() {
         let productResp;

         try {
            const params = {
               p_page: 1,
               p_limit: 4,
            };
            productResp = await AuthApiGet('/products', params);
         } catch (error) {
            console.log(error);
            return;
         }

         //data.data.elements
         this.dataProducts = productResp.data.data.elements;
      },
   },
};
</script>

<style scoped></style>
