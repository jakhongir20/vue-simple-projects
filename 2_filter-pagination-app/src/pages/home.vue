<script setup lang="ts">
import {computed} from "@vue/runtime-core";
import {onMounted, reactive} from "vue";
import {useProductStore} from "@/stores/products";
import {storeToRefs} from "pinia";

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
  const { products } = storeToRefs(productStore);
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

onMounted(() => {
  productStore.fetchProductsList();
});

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Tovarlar</h2>
        <div>
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Izlash</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
                v-model.trim="state.search"
                @input="state.currentPage !== 1 && (state.currentPage = 1)"
                type="search" id="search"
                class="input-search block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Izlash" required>
            <button
                @click="onClearSearch"
                :class="!state.search && 'disabled'"
                type="button"
                class="btn-clear text-white absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tozalash
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredProducts.length"
           class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in filteredProducts" :key="product.id" class="group relative product-card">
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
      </div>
      <p v-else-if="!state.search " class="text-center mt-10">Loading ... 🍕</p>
      <p class="text-center mt-10" v-else>{{ `"${state.search}" qidiruv bo'yicha hechnima topilmadi 😒` }}</p>

      <!-- pagination -->
      <div v-if="filteredProducts.length"
           class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-20">
        <div class="flex flex-1 justify-between sm:hidden">
          <a
              @click.prevent="state.currentPage--"
              :class="state.currentPage === 1 && 'disabled-link'"
              href="#"
             class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Oldingi</a>
          <a
              :class="state.currentPage === Math.ceil(state.total / state.perPage) && 'disabled-link'"
              @click.prevent="state.currentPage++"
              href="#"
             class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Keyingi</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700"> Ko'rinish
              <span class="font-medium">1</span> dan
              <span class="font-medium">{{ filteredProducts.length }}</span> gacha
              <span class="font-medium">{{ state.total }}</span> natijadan
            </p>
          </div>
          <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                  @click.prevent="state.currentPage--"
                :class="state.currentPage === 1 && 'disabled-link'"
                  href="#"
                 class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span class="sr-only">Oldingi</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
              <a
                  v-for="item in Math.ceil(state.total / state.perPage)"
                  :key="item"
                  @click.prevent="state.currentPage = item"
                  href="#"
                  aria-current="page"
                  class="relative inline-flex items-center border border-gray-300
                    bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  :class="state.currentPage === item
                  ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'"
              >{{ item }}</a>
              <a
                  :class="state.currentPage === Math.ceil(state.total / state.perPage) && 'disabled-link'"
                  @click.prevent="state.currentPage++"
                  href="#"
                 class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span class="sr-only">Keyingi</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
            </nav>
          </div>
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
