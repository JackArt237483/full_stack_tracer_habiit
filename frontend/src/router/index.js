import { createRouter, createWebHistory } from 'vue-router'
import HeaderName from '@/components/HeaderName.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderName,
    }
  ],
})

export default router
