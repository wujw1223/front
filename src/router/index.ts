import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes: route,
  history: createWebHashHistory()
})

export default router
