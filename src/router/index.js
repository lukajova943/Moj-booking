import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../../utils/supabase.ts'
import HomePage from '../views/HomePage.vue'
import Letovi from '../views/Letovi.vue'
import Liste from '../views/Liste.vue'
import Onama from '../views/Onama.vue'

  async function getCurrentUser() {
    const { data: {session} } = await supabase.auth.getSession()
    return session
  }

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/letovi',
    name: 'Letovi',
    component: Letovi,
    meta: {requiresAuth: true}
  },
  {
    path: '/liste',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/onama',
    name: 'Onama',
    component: Onama
  }
]
  const router = createRouter({history: createWebHistory(),routes})

  router.beforeEach(async (to, from) => {
    const session = await getCurrentUser()
    const isLoggedIn = !!session

    if (to.meta.requireGuest && isLoggedIn) {
      return '/'
    }

    if (to.meta.requiresAuth && !isLoggedIn) {
      return{
        path:'/',
        query: { login:'true' }
      }
    }

    return true
  })


export default router