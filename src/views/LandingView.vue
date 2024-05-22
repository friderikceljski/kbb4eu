<script setup>
import HeroButton from '../components/HeroButton.vue';
import { computed } from 'vue';

const bgImageStyle = computed(() => ({
  backgroundImage: "url('src/assets/kbb2.jpg')"
}))
</script>

<template>
  <div class="z-0 bg-top bg-cover h-screen grid content-center p-5" :style="bgImageStyle">
    <div class="container mx-auto space-y-2">
      <h1 class="text-5xl font-extrabold text-white">Katja Berk Bevc</h1>
      <h2 class="text-xl font-light text-white uppercase">kandidatka za poslanko v EP</h2>
      <HeroButton />
    </div>
  </div>
</template>
