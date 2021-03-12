import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting路由级代码拆分
    // this generates a separate chunk (about.[hash].js) for this route这将为此路由生成一个单独的块（关于[hash].js）
    // which is lazy-loaded when the route is visited.当访问路由时，它是延迟加载的。
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
