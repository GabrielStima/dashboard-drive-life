import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StressedRankView from '../views/StressedRankView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stressed-rank',
      name: 'stressed-rank',
      component: StressedRankView
    }
  ]
})

export default router
