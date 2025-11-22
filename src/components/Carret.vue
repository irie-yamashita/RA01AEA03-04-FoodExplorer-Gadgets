<script setup>
import { computed, inject } from 'vue';
const carret = inject('carret');

const costTotal = computed(()=> carret.value.reduce((total, producte) => total + producte.preu), 0);
</script>

<template>
    <h2>Carret</h2>
    <ul>
        <li v-for="producte in carret">{{ producte.nom }} - {{ producte.preu }}€</li>
    </ul>

</template>