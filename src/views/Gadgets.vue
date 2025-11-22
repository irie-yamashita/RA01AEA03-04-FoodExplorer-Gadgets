<script setup>
    import { inject } from 'vue';
    import ProducteItem from '@/components/ProducteItem.vue';
    import Carret from '@/components/Carret.vue';
    
    const productes = inject('productes');
    const carret = inject('carret');


    //handlers
    const handleAddProducte = (producte) => {
        carret.value.push(producte);
    }



</script>

<template>

    <main>
        <h1 class="text-teal-900 text-3xl uppercase text-center font-bold">Botiga Gadgets</h1>
        <div class="flex items-stretch gap-8">
            <section class="w-[75%]">
                <h2 class="text-teal-900 text-2xl font-bold mb-3">Productes</h2>
                <ul class="flex flex-col gap-3">
                    <producte-item @add-product="handleAddProducte" v-for="producte in productes" :key="producte.id" :producte="producte"></producte-item>
                </ul>
            </section>
            <aside class="flex-1">
                <carret></carret>
            </aside>
        </div>
    </main>
</template>