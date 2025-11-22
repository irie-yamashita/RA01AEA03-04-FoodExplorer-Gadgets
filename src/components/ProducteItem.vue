<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
    producte: Object
});

const emit = defineEmits(['add-product'])

const onAfegirProducte = (producte) => {
    const confirmation = confirm("Vols afegir '"+producte.nom+"' al teu carret?");

    if(confirmation) {
        emit('add-product', props.producte)
    }
}

</script>

<template>
    
    <li class="flex justify-between py-2 px-4 bg-stone-800 border border-teal-950 items-center rounded-md">
        <div class="flex gap-4 items-center">
            <h3>{{ props.producte.nom }}</h3>
            <p class="text-teal-900 font-bold text-[18px]">{{ props.producte.preu }}€</p>
        </div>
        <button @click="onAfegirProducte(producte)" class="btn w-fit bg-teal-900!">Afegir al carret</button>
    </li>

</template>