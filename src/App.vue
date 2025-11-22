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
    img: 'https://newmansown.com/wp-content/uploads/2022/03/Homemade-lasagna.png',
    puntuacio: 4
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
    img: 'https://www.eatingwell.com/thmb/S2NGMEcgm11dtdBJ6Hwprwq-nVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-185-278133-4000x2700-56879ac756cd46ea97944768847b7ea5.jpg',
    puntuacio: 2,
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
    img: 'https://corp.ametllerorigen.com/wp-content/uploads/2022/10/Proyecto-nuevo-5.png',
    puntuacio: 3,
  },
  {
    id: 4,
    nom: 'Hamburguesa Clàssica',
    descripcio: 'Una hamburguesa sucosa amb formatge, enciam i tomàquet.',
    ingredients: ['Pa de hamburguesa', 'Carn de vedella', 'Formatge', 'Enciam', 'Tomàquet', 'Ketchup'],
    passos: [
      'Forma la carn en hamburgueses i cuina-les a la planxa fins que quedin al punt',
      'Tosta lleugerament el pa de hamburguesa',
      'Munta la hamburguesa amb formatge, enciam, tomàquet i salsa al gust',
      'Serveix immediatament mentre està calenta'
    ],
    img: 'https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/spain/acm/selling-story-calcmenu/All-American%20Burger-main-header.jpg',
    puntuacio: 5
  },
  {
    id: 5,
    nom: 'Fideuà de Marisc',
    descripcio: 'Un plat típic valencià amb fideus fins i marisc saborós.',
    ingredients: ['Fideus', 'Gamba', 'Calamar', 'Sípia', 'Pebrot', 'Tomàquet', 'Fumet de peix'],
    passos: [
      'Sofregeix les gambes i el marisc fins que estiguin daurats',
      'Afegeix el pebrot i el tomàquet sofregits fins obtenir una base saborosa',
      'Incorpora els fideus i cobreix amb fumet de peix',
      'Coure a foc mitjà fins que els fideus absorbeixin tot el brou'
    ],
    img: 'https://cdn5.recetasdeescandalo.com/wp-content/uploads/2014/09/Fideu%C3%A1-f%C3%A1cil-al-estilo-Delta-del-Ebro.jpg',
    puntuacio: 5
  },
  {
    id: 6,
    nom: 'Donburi de Pollastre',
    descripcio: 'Plat japonès de pollastre i verdures sobre arròs calent.',
    ingredients: ['Pit de pollastre', 'Ceba tendra', 'Ous', 'Salsa soja', 'Mirin', 'Arròs cuit'],
    passos: [
      'Cuina el pollastre tallat a tires amb ceba tendra fins que estigui fet',
      'Afegeix salsa de soja i mirin i deixa reduir lleugerament',
      'Bateix els ous i aboca’ls sobre el pollastre, cuinant fins que quedi suau',
      'Serveix tot sobre un bol d’arròs calent i decora amb ceba tendra'
    ],
    img: 'https://theheirloompantry.co/wp-content/uploads/2022/09/teriyaki-chicken-bowl-donburi-the-heirloom-pantry-03.jpg',
    puntuacio: 5
  }
]);


provide('receptes', receptes)


</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style scoped></style>
