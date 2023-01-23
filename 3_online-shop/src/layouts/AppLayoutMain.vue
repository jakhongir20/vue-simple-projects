<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import LoginModal from "@/components/modals/LoginModal.vue";


</script>

<template>
  <div class="wrapper">
    <TheNavbar/>
    <main class="page">
      <slot/>
      <LoginModal />
    </main>
    <TheFooter/>
  </div>
</template>

<style lang="scss">

</style>
