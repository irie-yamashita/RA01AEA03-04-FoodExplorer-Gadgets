<script setup>
import { computed, inject } from 'vue';
import CarretItem from './CarretItem.vue';
const carret = inject('carret');

const costTotal = computed(() =>
  carret.value.reduce((total, producte) => total + producte.preu, 0)
);


</script>

<template>
   <div class="flex flex-col justify-between gap-4 border-2 border-teal-950 rounded-md p-4 h-full">
    <header class="space-y-2">
        <h2 class="text-teal-900 text-2xl font-bold">Carret</h2>
        <ul class="flex flex-col gap-2">
             <carret-item v-for="producte in carret" :key="producte.id" :producte="producte"></carret-item>
        </ul>
    </header>
    <p class="border-t w-full text-end pt-2">Total: {{ costTotal }}€</p>
   </div>
</template>