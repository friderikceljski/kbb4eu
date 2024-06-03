<script setup>
import { RouterLink, RouterView } from 'vue-router'

import LandingView from './views/LandingView.vue'
import AboutView from './views/AboutView.vue'
import PrinciplesView from './views/PrinciplesView.vue'
import FlagView from './views/FlagView.vue'
</script>

<template>
  <header class="p-3 bg-gradient-to-r from-cerise to-pacific fixed bottom-0 w-full sm:relative z-20">
    <nav class="container mx-auto lg:p-2">
      <div class="flex justify-between">
        <img :src="'white-kbb4eu-logo.png'" alt="Beli logotip kampanje Katje Berk Bevc" class="w-20">
        <img src="@/assets/burger-menu.svg" class="sm:hidden w-10">
        <div class="hidden sm:block uppercase text-white font-bold h-min my-auto space-x-7">
          <RouterLink to="/">domov</RouterLink>
          <RouterLink to="/about">o meni</RouterLink>
          <RouterLink to="/about">zakaj kandidiram</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <LandingView />
  <AboutView />
  <PrinciplesView />
  <FlagView />
</template>

<style scoped></style>
