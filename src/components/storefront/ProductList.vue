<template>
   <div>
      <div class="flex mx-5 mt-5 mb-3">
         <div class="w-1/2">
            <h1 class="text-base font-medium capitalize">produk terlaris</h1>
         </div>
         <div class="w-1/2">
            <h1
               class="text-sm font-medium capitalize text-right text-orange-500"
            >
               lihat semua
            </h1>
         </div>
      </div>
      <div class="grid grid-cols-2 mx-5 gap-5">
         <template v-if="dataProducts.length > 0">
            <!-- <template v-for="product in dataProducts"> -->
            <template v-for="(product, index) in dataProducts">
               <SingleProductCard
                  :key="index"
                  :product="product"
                  v-if="product.product_kind_id == PRODUCT_KIND_SINGLE_PRODUCT"
               />
               <VariantProductCard
                  :key="index"
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
import { AuthApiGet } from '../../helpers/httpRequest';
import {
   PRODUCT_KIND_SINGLE_PRODUCT,
   PRODUCT_KIND_VARIANT_PRODUCT,
} from '../../helpers/productHelpers';
import SingleProductCard from '../Products/SingleProductCard.vue';
import VariantProductCard from '../Products/VariantProductCard.vue';

export default {
   name: 'ProductList',
   components: {
      SingleProductCard,
      VariantProductCard,
   },
   data() {
      return {
         dataProducts: [],
         PRODUCT_KIND_SINGLE_PRODUCT,
         PRODUCT_KIND_VARIANT_PRODUCT
      };
   },
   async created() {
      await this.getProducts();
   },
   methods: {
      async getProducts() {
         let productResp;

         try {
            const params = {
               p_page: 1,
               p_limit: 2,
            };
            productResp = await AuthApiGet('/products', params);

            // productResp = await axios({
            //    method: 'GET',
            //    url: `${API}/products`,
            //    params: {
            //       p_page: 1,
            //       p_limit: 2,
            //    },
            // });
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
