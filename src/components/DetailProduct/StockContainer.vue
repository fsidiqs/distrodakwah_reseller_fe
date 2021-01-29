<template>
   <div>
      <div class="flex mx-5 my-3">
         <h1 class="text-base font-bold capitalize">
            stok gudang {{ inventory.item_inventory_detail.subdistrict_id }}
         </h1>
      </div>
      <div class="bg-gray-200 shadow w-32 h-8 pt-1 mx-5 rounded">
         <h1 class="text-base text-center text-gray-700 font-bold capitalize ">
            tersedia : {{ inventory.stock }}
         </h1>
      </div>
   </div>
</template>

<script>
export default {
   name: 'StockContainer',
   props: ['inventory'],
};
</script>
