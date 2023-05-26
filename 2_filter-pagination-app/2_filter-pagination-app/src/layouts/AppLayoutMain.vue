<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <TheNavbar />
    <main class="page">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.page {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
//@import "@/styles/style.scss";
</style>
