<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="p-5 bg-gradient-to-r from-cerise to-pacific">
      <div class="flex justify-between">
        <img :src="'white-kbb4eu-logo.png'" alt="Beli logotip kampanje Katje Berk Bevc" class="w-20">
        <img src="@/assets/burger-menu.svg" class="w-10 lg:hidden">
      </div>
      <div class="hidden lg:block">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
