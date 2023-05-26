<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  filteredProducts: Array,
  state: Object
});

toRefs(props);

</script>
<template>
  <div>
    <p class="text-sm text-gray-700"> Ko'rinish
      <span class="font-medium">1</span> dan
      <span class="font-medium">{{ filteredProducts.length }}</span> gacha
      <span class="font-medium">{{ state.total }}</span> natijadan
    </p>
  </div>
</template>



