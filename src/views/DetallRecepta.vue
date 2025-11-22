<script setup>
    import { inject } from 'vue';
    import { useRoute } from 'vue-router';

    
    const route = useRoute();
    const receptaId =  parseInt(route.params.id);
    
    const receptes = inject('receptes');
    const recepta = receptes.value.find(recepta => recepta.id === receptaId)


</script>

<template>
    <main class="flex justify-center gap-12 py-10 mt-8 px-5">
        <img class="w-[30%] object-cover rounded-md" :src="recepta.img" alt="foto recepta">
        <div class="flex flex-col gap-4">
            <header class="space-y-1">
                <h1 :class="`text-3xl font-bold text-${recepta.color}-500`">{{recepta.nom}}</h1>
                <p>{{ recepta.descripcio }}</p>
            </header>
            
            <div class="space-y-2">
                <p class="font-bold">Ingredients:</p>
                <ul class="list-disc ml-8">
                    <li v-for="(ingredient,i) in recepta.ingredients" :key="i">{{ ingredient }}</li>
                </ul>
            </div>
            <div class="space-y-2">
                <p class="font-bold">Pas a pas:</p>
                <ol class="list-decimal ml-8">
                    <li v-for="(pas,i) in recepta.passos" :key="i">{{ pas }}</li>
                </ol>
            </div>
        </div>

    </main>

</template>