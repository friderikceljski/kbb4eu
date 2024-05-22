<script setup>
import { computed } from 'vue';

const bgImageStyle = computed(() => ({
  backgroundImage: "url('src/assets/72.png')"
}));
</script>

<template>
  <div class="h-screen container p-4 bg-no-repeat bg-contain bg-bottom" :style="bgImageStyle">

    <h1 class="text-pacific font-extrabold text-6xl">Kdo sem?</h1>
    <p>
      Prihajam iz Lesičnega, majhnega kraja sredi pravljičnega Kozjanskega. Domači hribčki z vinogradi in gozdovi so
      mi
      zelo pri srcu, že od nekdaj pa rada spoznavam tudi bolj oddaljene kraje. Tudi zato sem se odločila za študij
      jezikov in magistrirala iz tolmačenja za kombinacijo slovenščina, angleščina in nemščina.
    </p>
    <p>Nekaj časa sem delovala kot samostojna tolmačka in prevajalka, politične izkušnje pa sem nabirala v treh
      različnih parlamentih - v evropskem, nemškem in slovenskem. Trenutno sem zaposlena v državnem zboru kot
      strokovna
      sodelavka v poslanski skupini NSi, kjer se ukvarjam s področji zdravstva, izobraževanja, družine in kulture.</p>
    <p>
      Od leta 2019 vodim Mlado Slovenijo, podmladek NSi, kjer mlade spodbujamo k aktivnemu delovanju v družbi in jih
      izobražujemo za delo v skupno dobro. Ponosna sem na naše mlade člane, ki so dejavni občinski svetniki, in vse,
      ki
      na različne načine prispevajo k boljšemu življenju v svojih domačih okoljih, v družinah, šolah in službah.</p>

  </div>
</template>
