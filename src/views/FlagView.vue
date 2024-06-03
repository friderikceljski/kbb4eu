<template>

    <div class="container mx-auto bg-cover bg-no-repeat bg-center p-12 md:p-24 md:bg-cover" :style="bgImageStyle">
        <div class="text-center">
            <h1 class="text-3xl font-extrabold md:text-5xl md:font-bold text-pacific">Kozjansko naj dobi evroposlanko!
            </h1>
            <h2 class="font-cursive text-4xl">Katja Berk Bevc</h2>
            <p>Hvaležna sem našim prednikom in očetom Evrope, da so s krepitvijo sodelovanja med evropskimi državami
                zagotovili mir in poskrbeli, da mi, njihovi potomci, danes živimo bolje kot oni. Želim si delati za to,
                da bodo enako lahko rekle tudi generacije, ki pridejo za mano.</p>
        </div>
    </div>


</template>

<script setup>
import { computed } from 'vue';

const bgImageStyle = computed(() => ({
    backgroundImage: "url('src/assets/flags-cropped.png')"
}))
</script>