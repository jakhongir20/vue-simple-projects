<script setup lang="ts">
import {computed} from "@vue/runtime-core";
import {onMounted, reactive} from "vue";
import {useProductStore} from "@/stores/products";
import {storeToRefs} from "pinia";
import ProductItem from "@/components/ProductItem.vue";
import ProductView from "@/components/ProductView.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductPaginationMobile from "@/components/ProductPaginationMobile.vue";
import ProductPagination from "@/components/ProductPagination.vue";

const productStore = useProductStore();

const state = reactive(<any>{
  search: '',
  filtered: [],
  searchBy: ['brand'],
  total: 0,
  page: 1,
  currentPage: 1,
  perPage: 4
});


const filteredProducts = computed(() => {
  const {products} = storeToRefs(productStore);
  const data = products.value;

  state.filtered = data.filter(
      (pr: any) =>
          !state.search ||
          state.searchBy.some((item: any) => pr[item].toString().toLowerCase().includes(state.search.toLowerCase()))
  );
  state.total = state.filtered.length;
  return state.filtered.slice(state.perPage * state.currentPage - state.perPage, state.perPage * state.currentPage);
});


function onClearSearch() {
  state.search = '';
  state.currentPage = 1;
}

onMounted(() => productStore.fetchProductsList());

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Tovarlar</h2>
        <ProductFilter :state="state" @clearSearch="onClearSearch"/>
      </div>

      <div v-if="filteredProducts.length"
           class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ProductItem
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
        />
      </div>
      <p v-else-if="!state.search " class="text-center mt-10">Loading ... 🍕</p>
      <p class="text-center mt-10" v-else> "
        <mark>{{ state.search }}</mark>
        " qidiruv bo'yicha hechnima topilmadi 😒
      </p>

      <!-- pagination -->
      <div v-if="filteredProducts.length"
           class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-20">
        <ProductPaginationMobile :state="state"/>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <ProductView :filteredProducts="filteredProducts" :state="state"/>
          <ProductPagination :state="state"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-card {
  height: 250px;
  background: #ffffff;

  &-image {
    height: 200px;
    padding: 15px;

    img {
      width: 100%;
      margin: auto;
    }
  }
}

.disabled-link {
  pointer-events: none;
  cursor: default;
}

.btn-clear.disabled {
  pointer-events: none;
  cursor: default;
  background: cadetblue;
}

.input-search {
  @media (min-width: 480px) {
    width: 300px !important;
  }
}
</style>
