<template>
   <div class="bg-gray-200">
      <DefaultLayout>
         <!-- navbar -->
         <Navbar />
         <!-- Image Product -->
         <ImgProduct />
         <!-- info produk name-->
         <InfoProduct :product="dataProduct"/>
         <Footer />
      </DefaultLayout>
   </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/DetailProduct/Navbar.vue';
import ImgProduct from '@/components/DetailProduct/ImgProduct.vue';
import InfoProduct from '@/components/DetailProduct/InfoProduct.vue';
import { AuthApiGet } from '../../helpers/httpRequest';

export default {
   name: 'DetailProduct',
   components: {
      DefaultLayout,
      Footer,
      Navbar,
      ImgProduct,
      InfoProduct,
   },
   data() {
      return {
         dataProduct: {},
      };
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
                    kind_id: this.$route.params.kind_id
                }
                
                productResp = await AuthApiGet('/products/get-product-by-id', params)
            } catch (error) {
                   console.log(error);
            return;
            }

            this.dataProduct = productResp.data.data
       }
   }
};
</script>

<style scoped></style>
