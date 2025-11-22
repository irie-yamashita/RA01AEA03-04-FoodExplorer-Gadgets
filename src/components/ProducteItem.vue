<script setup>

const props = defineProps({
    producte: Object
});

</script>

<template>
    
    <li class="flex justify-between">
        <div class="flex gap-4">
            <h3>{{ props.producte.nom }}</h3>
            <p>{{ props.producte.preu }}€</p>
        </div>
        <button class="btn w-fit bg-teal-900!">Afegir al carret</button>
    </li>

</template>