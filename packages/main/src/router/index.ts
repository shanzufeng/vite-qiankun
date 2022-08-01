import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
