<script setup lang="ts">
import {toRef} from "@vue/reactivity";
import moment from "moment";

defineEmits(['checkedItem', 'deleteItem']);
const props = defineProps({
  item: Object
});
toRef(props, 'item');

</script>
<template>
  <div class="d-flex align-items-center">
    <input
        @click="$emit('checkedItem', item.id)"
        :value="item.checked"
        :checked="item.checked"
        class="form-check-input me-2"
        type="checkbox"
    />
    <span
        :class="item.checked && 'text-decoration-line-through'"
        class="mt-1"
    >
      {{ item.text }}
    </span>
  </div>
  <div class="ms-3 d-flex align-items-center">
    <small class="me-3">{{ moment(item.creationDate).format("DD.MM.YYYY") }}</small>
    <i @click="$emit('deleteItem', item.id)" class="bi bi-trash3 ms-auto"></i>
  </div>
</template>
