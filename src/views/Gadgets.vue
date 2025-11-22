<script setup>
    import { inject } from 'vue';
    import ProducteItem from '@/components/ProducteItem.vue';
    import Carret from '@/components/Carret.vue';
    
    const productes = inject('productes');
</script>

<template>
    <main class="">
        <h1>Botiga Gadgets</h1>
        <div class="flex items-stretch gap-8">
            <section class="w-[80%]">
                <h2>Productes</h2>
                <ul>
                    <producte-item v-for="producte in productes" :key="producte.id" :producte="producte"></producte-item>
                </ul>
            </section>
            <aside class="bg-purple-300 flex-1">
                <carret>    </carret>
            </aside>
        </div>
    </main>
</template>