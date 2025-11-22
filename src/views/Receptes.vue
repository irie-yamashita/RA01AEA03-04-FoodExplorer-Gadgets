<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router';

const receptes = inject('receptes');

</script>

<template>
    <main class="flex flex-col gap-6">
        <h1 class="text-2xl uppercase text-[#ff8800] font-bold">Recepetes</h1>
        <ul class="grid grid-cols-3 gap-4">
            <li class="flex flex-col bg-stone-800 rounded-md overflow-hidden hover:bg-stone-700 hover:scale-[101%] transition-transform" v-for="recepta in receptes" :key="recepta.id">
                <img :src="recepta.img" alt="img recepta" class="h-[200px] object-cover">

                <div class="flex flex-col justify-between gap-6 p-6 h-full">
                    <div>
                        <h2 class="text-[#ff8800] uppercase font-bold text-[18px] tracking-wider">{{recepta.nom}}</h2>
                        <p>{{ recepta.descripcio }}</p>
                    </div>
                    <RouterLink :to="`receptes/${recepta.id}`" class="btn w-fit self-end">Veure detall</RouterLink>
                </div>
            </li>
        </ul>
    </main>
</template>