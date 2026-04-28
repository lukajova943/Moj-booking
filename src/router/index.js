import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Letovi from '../views/Letovi.vue'
import Liste from '../views/Liste.vue'
import Onama from '../views/Onama.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/letovi',
    name: 'Letovi',
    component: Letovi
  },
  {
    path: '/liste',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/o-nama',
    name: 'O-nama',
    component: Onama
  }

]

const router = createRouter({history: createWebHistory(),routes})

export default router