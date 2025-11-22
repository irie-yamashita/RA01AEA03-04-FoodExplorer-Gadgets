<script setup>
import { computed, inject } from 'vue';
import CarretItem from './CarretItem.vue';
const carret = inject('carret');

const costTotal = computed(() =>
  carret.value.reduce((total, producte) => total + producte.preu, 0)
);

const handleBuidarCarret = () => {
    const confirmation = confirm('Estàs segur@ que vols buidar el carret?');

    if(confirmation) {
        carret.value.length = 0;
    }
}


</script>

<template>
   <div class="flex flex-col justify-between gap-4 border-2 border-teal-950 rounded-md p-4 h-full">
    <header class="space-y-2">
        <div class="flex justify-between items-end">
            <h2 class="text-teal-900 text-2xl font-bold">Carret</h2>
            <button @click="handleBuidarCarret" class="cursor-pointer hover:brightness-110 hover:scale-105 transition-transform">
                <img src="../assets/images/cart-cross.svg" class="text-teal-500 size-7" alt="buidar carret">
            </button>
        </div>
        <ul class="flex flex-col gap-2">
             <carret-item v-for="producte in carret" :key="producte.id" :producte="producte"></carret-item>
        </ul>
    </header>
    <p class="border-t w-full text-end pt-2">Total: {{ costTotal }}€</p>

   </div>
</template>