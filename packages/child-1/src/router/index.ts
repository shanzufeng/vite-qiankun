import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/child_home'
  },
  {
    path: '/child_home',
    name: 'child_home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue') // 懒加载组件
  }
]

let history: any = null
let router: any = null

// 创建路由
const createRouterFun = () => {
  history = createWebHashHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/child1' : '/')
  router = createRouter({
    history,
    routes
  })
}

// 销毁路由
const destroyRouterFun = () => {
  history.destroy() // 不卸载  router 会导致其他应用路由失败
  router = null
}

export { router, createRouterFun, destroyRouterFun }
