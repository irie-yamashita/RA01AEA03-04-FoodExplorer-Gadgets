<script setup>
  import { RouterView } from 'vue-router';
  import Header from './views/components/Header.vue';
import { ref } from 'vue';


  const receptes = ref([
    {
      id: 1,
      nom: '',
      ingredients: ['', ''],
      passos: []
    }
  ]);
</script>

<template>
  <Header></Header>
  <RouterView/>
</template>

<style scoped></style>
