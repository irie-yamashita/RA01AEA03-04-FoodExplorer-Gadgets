<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-full h-[400px] overflow-hidden mask-b-from-60% mask-b-to-80%">
        <img src="../assets//images/portada.jpg" alt="imatge portada" class="w-full object-cover">
    </div>
    <main class="flex flex-col justify-center items-center py-8 gap-8">
        <div class="space-y-3 text-center">
            <h1 class="text-5xl font-bold text-[#ff8800]">Benvinguts a FoodExplorer</h1>
            <p>Descobreix, explora i consulta delicioses receptes.</p>
        </div>
        <RouterLink to="/receptes" class="btn">Veure receptes</RouterLink>
    </main>

</template>