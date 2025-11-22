import DetallRecepta from '@/views/DetallRecepta.vue'
import Gadgets from '@/views/Gadgets.vue'
import Home from '@/views/Home.vue'
import NoTrobat from '@/views/NoTrobat.vue'
import Receptes from '@/views/Receptes.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/receptes",
      name: "receptes",
      component: Receptes
    },
    {
      path: "/receptes/:id",
      name: "detallRecepta",
      component: DetallRecepta
    },
    {
      path: "/gadgets",
      name: "gadgets",
      component: Gadgets
    },
    {
      path: "/no-trobat",
      name: "noTrobat",
      component: NoTrobat
    },
    { 
      path: "/:pathMatch(.*)*",
      name: "NoTrobat",
      component: NoTrobat
    }
  ],
})


export default router
