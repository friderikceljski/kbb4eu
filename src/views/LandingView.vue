<script setup>
import { computed } from 'vue';

const bgImageStyle = computed(() => ({
  backgroundImage: "url('src/assets/kbb3.jpg')"
}))
</script>

<template>
  <main class="">
    <div class="bg-cover bg-center h-screen bg-red-600" :style="bgImageStyle"></div>
  </main>
</template>
