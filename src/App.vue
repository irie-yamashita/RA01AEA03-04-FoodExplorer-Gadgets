<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';
  import { ref } from 'vue';
  import { provide } from 'vue';


const receptes = ref([
  {
    id: 1,
    nom: 'Lasanya',
    descripcio: 'Una pasta al forn amb capes de carn, beixamel i formatge gratinat.',
    ingredients: ['Làmines de lasanya', 'Carn picada', 'Tomàquet fregit', 'Beixamel', 'Formatge ratllat'],
    passos: [
      'Sofregeix la carn picada amb ceba fins que estigui ben daurada',
      'Afegeix el tomàquet fregit i deixa-ho coure uns minuts',
      'Munta capes de pasta, carn i beixamel en una safata',
      'Cobreix amb formatge ratllat i enforna fins que quedi gratinat'
    ],
    img: 'https://www.tasteofhome.com/wp-content/uploads/2025/07/Best-Lasagna_EXPS_ATBBZ25_36333_DR_07_01_2b.jpg',
    color:'amber'
  },
  {
    id: 2,
    nom: 'Amanida Mediterrània',
    descripcio: 'Una amanida fresca i lleugera típica de la dieta mediterrània.',
    ingredients: ['Enciam', 'Tomàquet', 'Olives', 'Formatge Feta', 'Oli d’Oliva'],
    passos: [
      'Renta i talla totes les verdures en trossos regulars',
      'Afegeix el formatge feta esmicolat per damunt',
      'Amaneix amb oli d’oliva i una mica d’orenga',
      'Barreja-ho tot suaument per integrar els sabors'
    ],
    img: '',
    color:''
  },
  {
    id: 3,
    nom: 'Crema de Carbassa',
    descripcio: 'Una crema suau i reconfortant ideal per als dies freds.',
    ingredients: ['Carbassa', 'Ceba', 'Pastanaga', 'Brou de Verdures', 'Sal'],
    passos: [
      'Sofregeix la ceba fins que quedi transparent',
      'Afegeix la carbassa i la pastanaga tallades i cuina uns minuts',
      'Aboca-hi el brou i deixa-ho bullir fins que tot sigui tou',
      'Tritura la barreja fins obtenir una textura fina i homogènia'
    ],
      img: '',
    color:''
  }
]);


provide('receptes', receptes)

</script>

<template>
  <Header></Header>
  <RouterView/>
</template>

<style scoped></style>
