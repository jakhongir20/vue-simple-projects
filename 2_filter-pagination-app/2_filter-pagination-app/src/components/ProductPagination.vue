<script setup lang="ts">
import {toRef} from "vue";

const props = defineProps({
  state: Object
});

toRef(props, 'state');


</script>
<template>
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
</template>



