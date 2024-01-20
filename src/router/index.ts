import { createRouter, createWebHistory } from 'vue-router'
import UnderConstruction from '../views/UnderConstruction.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'under-construction', name: 'home' },
    {
      path: '/under-construction',
      name: 'under-construction',
      component: UnderConstruction
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
