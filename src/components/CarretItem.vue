



<script setup>
    const props = defineProps({
        producte: Object
    })
</script>

<template>
    <li class="bg-stone-800 rounded-md p-2">{{ producte.nom }} - {{ producte.preu }}€</li>
</template>