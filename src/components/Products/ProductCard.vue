<template>
   <div 
   @click="onProductCardClick"
   class="col-span-1 bg-green-700 h-56 rounded-lg">
      <div class="flex justify-end mx-2">
         <div class="w-4 h-4 mt-2 bg-white rounded-full absolute">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               aria-hidden="true"
               focusable="false"
               width="1em"
               height="1em"
               style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
               preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 24 24"
            >
               <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#626262" />
            </svg>
         </div>
      </div>
      <div class="grid grid-cols-4">
         <img
            class="col-span-4 h-40 w-40 rounded-t-lg"
            src="@/assets/1.jpg"
            alt=""
         />
         <h1
            class="col-span-4 text-sm text-white font-semibold font-sans mx-2 mt-2"
         >
            {{ product.name }}
         </h1>
    
      </div>
   </div>
</template>

<script>
export default {
   name: 'ProductCard',
   props: ['product'],
   methods: {
      onProductCardClick(){
         let productKind ;
         if ("single_product_item" in this.product) {
            productKind = 1
         } else if ("variant_product_items" in this.product) {
            productKind = 2
         }

         this.$router.push(`/products/${this.product.ID}/${productKind}`)
      }
   }
};
</script>

<style></style>
