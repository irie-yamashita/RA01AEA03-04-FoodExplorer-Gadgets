<script setup>
    import { RouterLink } from 'vue-router';

</script>

<template>
<header class="flex w-full justify-between px-8 py-4 bg-amber-100">
    <div class="flex">
        <img src="" alt="logo">
        <p>Food Explorer</p>
    </div>
    <nav class="flex gap-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="receptes">Receptes</RouterLink>
        <RouterLink to="gadgets">Gadgets</RouterLink>
    </nav>
</header>
</template>