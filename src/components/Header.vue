<script setup>
    import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute();

</script>

<template>
<header class="flex w-full justify-between px-8 py-4">
    <RouterLink to="/" class="flex items-center gap-2">
        <img src="../assets/images/logo.svg" alt="logo" class="size-6">
        <p :class="`font-bold text-[#ff8800]`">Food Explorer</p>
    </RouterLink>
    <nav class="flex gap-6">
        <RouterLink to="/" :class="route.path == '/' ? 'border-b border-[#ff8800]' : ''" class="hover:scale-105 transition-transform">Home</RouterLink>
        <RouterLink to="/receptes" :class="route.path == '/receptes' ? 'border-b border-[#ff8800]' : ''" class="hover:scale-105 transition-transform">Receptes</RouterLink>
        <RouterLink to="/gadgets" :class="route.path == '/gadgets' ? 'border-b border-teal-900' : ''" class="hover:scale-105 transition-transform">Gadgets</RouterLink>
    </nav>
</header>
</template>