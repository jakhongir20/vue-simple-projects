<script setup lang="ts">
import {toRef} from "vue";

const props = defineProps({
  state: Object
});

toRef(props, 'state');

</script>
<template>
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
</template>




