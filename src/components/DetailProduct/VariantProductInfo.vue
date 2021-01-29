<template>
   <div>
      <div class="grid grid-cols-3 mt-4 mx-5">
         <div class="col-span-1 w-64">
            <h1 class="text-2xl font-bold">{{ dataProduct.name }}</h1>
         </div>
         <div
            class="col-span-1 w-10"
            style="margin-left: 155px; margin-top: 3px;"
         >
            <svg
               class="w-6 h-6"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               aria-hidden="true"
               focusable="false"
               style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;"
               preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 64 64"
            >
               <path
                  d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                  fill="#ffce31"
               />
            </svg>
         </div>
         <h1 class="col-span-1 text-2xl text-gray-600 w-10 ml-20">4.5</h1>
      </div>
      <!-- info produk harga -->
      <div class="grid grid-rows-2 grid-flow-col mx-5 my-4">
         <div class="row-span-1 w-full">
            <h1 class="text-sm w-32 capitalize text-gray-700 ">
               harga konsumen
            </h1>
         </div>
         <div class="row-span-1">
            <h1 class="text-xl font-bold -mt-1">
               Rp.{{ currencyFormat(customerPrice) }}
            </h1>
         </div>
         <div class="row-span-1">
            <h1
               class="text-sm capitalize text-gray-700 w-32 pl-3"
               style="margin-left: 74px;"
            >
               harga reseller
            </h1>
         </div>
         <div class="row-span-1">
            <h1
               class="text-xl font-bold text-orange-500 pl-3 -mt-1"
               style="margin-left: 74px;"
            >
               Rp.{{ currencyFormat(resellerPrice) }}
            </h1>
         </div>
      </div>
      <div class="bg-gray-200 h-1"></div>
      <!-- info produk ukuran, warna, stok -->

      <div v-for="(variant, i) in variantInputs" :key="variant.ID">
         <div class="flex mx-5 my-2">
            <h1 class="text-base font-bold capitalize">{{ variant.name }}</h1>
         </div>
         <div class="flex mt-2 mb-4 mx-5">
            <select
               :name="variant.name"
               v-model="selections[i].itemPossibilities"
            >
               <option value="" selected disabled> </option>
               <option
                  v-for="value in variant.options"
                  :value="value.variantOptionID"
                  :key="value.ID"
               >
                  {{ value.name }}
               </option>
            </select>

            <!-- <button
               v-for="option in variant.variant_product_options"
               :key="option.ID"
               class="flex-wrap mr-2 pt-1 ext-sm bg-white border-2 border-gray-500 hover:bg-blue-900 hover:text-white hover:border-blue-900 focus:border-0 focus:bg-blue-900 focus:border-blue-900 focus:text-white focus:outline-blue-900 rounded-md py-2 px-2 uppercase "
            >
               {{ option.name }}
            </button> -->
         </div>
      </div>

      <!-- <StockContainer
         v-for="inventory in dataProduct.single_product_item.SPIInventories"
         :key="inventory.id"
         :inventory="inventory"
      /> -->
      <!-- deskripsi produk -->
      <div class="mx-5 mt-8">
         <h1 class="text-base font-bold capitalize">
            rincian produk
         </h1>
         <!-- <h1 class="text-sm font-bold capitalize mt-2">
            bahan: fleece cotton
         </h1> -->
         <h1 class="text-sm font-light text-gray-700 mt-2">
            {{ dataProduct.description }}
         </h1>
         <div class="bg-white h-10 py-2 mb-8">
            <button
               class="flex bg-orange-200 bg-opacity-50 rounded-full py-2 px-2 mx-20"
            >
               <h1 class="ml-3 mr-2" style="color: orange;">selengkapnya</h1>
               <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 5px;"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z"
                     fill="orange"
                  />
               </svg>
            </button>
         </div>
      </div>
      <div class="bg-gray-200 h-1"></div>
      <!-- keuntungan reseller -->
      <div class="flex my-5 mx-5">
         <div class="w-3/5 bg-blue-900 py-1 px-1 rounded-l">
            <h1
               class="text-sm text-white text-center font-medium border-dashed border-t-2 border-b-2 border-l-2 py-2 px-1 border-white rounded-l uppercase"
            >
               keuntungan kamu
            </h1>
         </div>
         <div class="w-2/5 bg-green-600 py-1 px-1 rounded-r">
            <h1
               class="text-sm text-white text-center font-medium border-dashed border-t-2 border-b-2 border-r-2 py-2 px-1 border-white rounded-r"
            >
               Rp.{{currencyFormat(profitPrice)}}
            </h1>
         </div>
      </div>
      <div class="bg-gray-200 h-1"></div>
      <!-- Quantity produk -->
      <div class="flex my-5 mx-5">
         <button
            class="bg-white shadow h-10 w-10 flex-item-center justify-center rounded-full focus:outline-none"
            style="padding-left: 9px;"
            @click="incrementQtyInput"
         >
            <svg
               class="w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               aria-hidden="true"
               focusable="false"
               style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
               preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 24 24"
            >
               <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="black" />
            </svg>
         </button>
         <!-- <input class="h-10 w-10 text-center justify-center px-3 mx-1 rounded"> -->
         <h2
            class="h-10 w-10 text-center justify-center py-2 px-3 mx-1 font-semibold"
         >
            {{ itemQtyInput }}
         </h2>
         <button
            class="bg-white shadow h-10 w-10 rounded-full focus:outline-none"
            style="padding-left: 10px;"
            @click="decrementQtyInput"
         >
            <svg
               class="w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               aria-hidden="true"
               focusable="false"
               style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 2px;"
               preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 24 24"
            >
               <path d="M19 13H5v-2h14v2z" fill="black" />
            </svg>
         </button>
         <button
            class="w-1/2 h-10 bg-orange-400 rounded-full py-2 ml-12 focus:outline-none"
         >
            <h1
               class="font-sans font-semibold text-white text-center text-sm uppercase"
            >
               beli sekarang
            </h1>
         </button>
      </div>
   </div>
</template>

<script>
/* eslint-disable */
import StockContainer from './StockContainer.vue';
import { currencyFormat } from '../../helpers/stringManipulation';
import {
   RESELLER_EXCLUSIVE_PRICE_NAME,
   RESELLER_PRO_PRICE_NAME,
   RETAIL_PRICE_NAME,
} from '../../helpers/productHelpers';
import { cloneDeep } from 'lodash';

export default {
   name: 'VariantProductInfo',
   props: ['dataProduct', 'user'],
   components: {
      StockContainer,
   },
   data() {
      return {
         itemQtyInput: 1,

         selections: [],
      };
   },
   created() {
      const vpVariants = cloneDeep(this.dataProduct.variant_product_variants);
      this.selections = vpVariants.map((variant) => {
         return {
            variantID: variant.ID,
            itemPossibilities: null,
         };
      });
   },
   computed: {
      customerPrice: function() {
         if (!this.selectedItemID) return 0;
         const vpItems = cloneDeep(this.dataProduct.variant_product_items);
         const vpItem = vpItems.find((item) => item.ID === this.selectedItemID);
         const result = vpItem.variant_product_item_prices.find(
            (itemPrice) => itemPrice.name === RETAIL_PRICE_NAME
         );
         return result.value;
      },
      resellerPrice: function() {
         let result = 0;
         if (!this.selectedItemID) return 0;

         const vpItems = cloneDeep(this.dataProduct.variant_product_items);
         const vpItem = vpItems.find((item) => item.ID === this.selectedItemID);

         if (this.user.roleID === 1) {
            result = vpItem.variant_product_item_prices.find(
               (itemPrice) => itemPrice.name === RESELLER_PRO_PRICE_NAME
            );
         } else if (this.user.roleID === 2) {
            result = vpItem.variant_product_item_prices.find(
               (itemPrice) => itemPrice.name === RESELLER_EXCLUSIVE_PRICE_NAME
            );
         }
         return result.value;
      },
      profitPrice: function() {
         return this.customerPrice - this.resellerPrice;
      },
      variantInputs: function() {
         const vpVariants = cloneDeep(
            this.dataProduct.variant_product_variants
         );

         const result = [];

         vpVariants.forEach((variant) => {
            const _variantOptions = [
               ...new Set(
                  variant.variant_product_options.map((vpOption) =>
                     vpOption.name.toLowerCase()
                  )
               ),
            ];
            const _vpItems = _variantOptions.map((option) => ({
               name: option,
               variantOptionID: [],
            }));

            variant.variant_product_options.forEach((vpOption) => {
               const index = _vpItems.findIndex(
                  (optionObj) => optionObj.name === vpOption.name
               );
               _vpItems[index].variantOptionID.push(
                  vpOption.variant_product_item_id
               );
            });

            result.push({
               name: variant.name,
               ID: variant.ID,
               options: _vpItems,
            });
         });

         return result;
      },
      selectedItemID: function() {
         const _selections = cloneDeep(this.selections);
         const _selLen = _selections.length;
         let filtered = [];
         for (let index = 0; index < _selLen - 1; index++) {
            if (
               !_selections[index].itemPossibilities ||
               !_selections[index + 1].itemPossibilities
            )
               break;

            filtered = _selections[index].itemPossibilities.filter((sel) =>
               _selections[index + 1].itemPossibilities.includes(sel)
            );
         }

         return filtered[0];
      },
   },
   methods: {
      incrementQtyInput() {
         this.itemQtyInput++;
      },
      decrementQtyInput() {
         if (this.itemQtyInput > 1) {
            this.itemQtyInput--;
         }
      },
      getSelectedItem(event) {
         console.log(event);
      },
      currencyFormat,
   },
};
</script>

<style scoped></style>
