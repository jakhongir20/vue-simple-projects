<script setup lang="ts">
defineProps({
  product: {
    type: Object
  }
});
</script>

<template>
  <div :key="product._id" class="items-products__column">
    <div class="items-product">
      <div class="items-product__image">
        <div v-if="product.sale" class="items-product__sale">sale</div>
        <img :src="product.imageUrl" alt="">
      </div>
      <div class="items-product__body">
        <div class="items-product__title">{{ product.title }}</div>
        <div class="items-product__stars">
          <vue3-star-ratings
              v-model="product.rate"
              :showControl="false"
              :starColor="'#2a2a2a'"
              :inactiveColor="'rgba(190,182,182,0.78)'"
              :starSize="'15'"
              :disableClick="true"
          />
        </div>
        <div class="items-product__hover hover-item-product">
          <router-link :to="'/product-details/' + product._id" class="hover-item-product__quickview">Quick View
          </router-link>
          <button @click="$emit('handleAddToCart', product._id)" type="button"
                  class="hover-item-product__addtocart">
            <span>Add to cart</span></button>
        </div>
      </div>
      <div class="items-product__footer">
        <div class="items-product__actions">
          <a href="" class="items-product__like"></a>
          <a href="" class="items-product__change"></a>
        </div>
        <div class="items-product__prices">
          <div class="items-product__price"><span>${{ product.price }}.00</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


