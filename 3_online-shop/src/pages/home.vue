<script setup lang="ts">

import {onMounted, ref} from "vue";
import OtherTopPages from "@/components/views/OtherTopPages.vue";
import OtherBottomPages from "@/components/views/OtherBottomPages.vue";
import ProductCart from "@/components/items/ProductCart.vue";
import {useProductStore} from "@/stores/products";

const products = ref([]);
const productStore = useProductStore();

function addToCart(id: number) {
 //  todo
}

onMounted(async () => {
  await productStore.fetchProductsList();
  //@ts-ignore
  products.value = productStore.products;
})
</script>

<template>
  <div class="_container">
    <div class="page__content">
      <OtherTopPages/>
      <section class="page__products products-slider">
        <div class="products-slider__header">
          <h2 class="products-slider__title">new furniture</h2>
          <ul class="products-slider__list" data-da="products-slider__list--responsive,first,678">
            <li><a href="" class="products-slider__link _active">Bed</a></li>
            <li><a href="" class="products-slider__link">Chair</a></li>
            <li><a href="" class="products-slider__link">Sofa</a></li>
            <li><a href="" class="products-slider__link">Table</a></li>
            <li><a href="" class="products-slider__link">Dining</a></li>
          </ul>
        </div>
        <div class="products-slider__list--responsive"></div>
            <div class="products-slider__slide">
              <div v-if="products.length" class="products-slider__items items-products">
                <ProductCart
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    @handleAddToCart="addToCart"
                />
              </div>
            </div>
      </section>
      <OtherBottomPages/>
    </div>
  </div>
</template>

