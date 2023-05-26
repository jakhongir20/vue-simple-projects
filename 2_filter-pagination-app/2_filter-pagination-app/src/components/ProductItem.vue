<script setup lang="ts">
import {toRef} from "vue";
import {IProductList} from "@/models/ProductList";

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => <IProductList>{}
  }
});

toRef(props, 'product');

</script>

<template>
  <div class="group relative product-card">
    <div
        class="min-h-30 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-30 border product-card-image">
      <img :src="product.imageSrc" :alt="product.name"
           class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
    </div>
    <div class="product-card-items mt-2 text-center">
      <div class="truncate text-sm font-medium text-indigo-600">{{ product.name }}</div>
      <p class="text-gray-900 font-medium text-sm">Narxi: <b>{{ product.price }}</b> som</p>
    </div>
  </div>
</template>
