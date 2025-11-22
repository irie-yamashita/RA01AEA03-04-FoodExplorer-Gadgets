<script setup>
import { inject, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';

const receptes = inject('receptes');

console.log('receptes', receptes.value[0].nom)
</script>

<template>
    <main>
        <h1>Recepetes</h1>
        <ul class="grid grid-cols-3 gap-x-4">
            <li class="flex flex-col bg-gray-100" v-for="recepta in receptes" :key="recepta.id">
                <h2>{{recepta.nom}}</h2>
                <p>{{ recepta.descripcio }}</p>
                <RouterLink :to="`receptes/${recepta.id}`">Veure detall</RouterLink>
            </li>
        </ul>
    </main>
</template>