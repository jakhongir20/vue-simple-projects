<script lang="ts">
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import  AppLayoutEmpty  from "./AppLayoutEmpty.vue";
import AppLayoutMain from "./AppLayoutMain.vue";
import AppLayoutLogin from "./AppLayoutLogin.vue";

export default {
  name: "AppLayout",
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout || AppLayoutEmpty)
    };
  },
  components: {
    AppLayoutMain,
    AppLayoutLogin
  }
};
</script>

<template>
  <component :is="layout">
    <slot/>
  </component>
</template>
