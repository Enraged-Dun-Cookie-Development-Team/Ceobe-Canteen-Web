import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'web',
    component: () => import('@/views/home/index-miao.vue'),
    props: route => ({
      type: route.query.version,
      position: route.query.position
    }),
  },
  {
    path: '/old-home',
    name: 'OldHome',
    component: () => import('@/views/home/index.vue'),
    props: route => ({
      type: route.query.version,
      position: route.query.position
    }),
  },
]

let history = null

if (process.env.NODE_ENV == 'production') {
  history = createWebHistory(process.env.BASE_URL)
} else {
  history = createWebHashHistory(process.env.BASE_URL)
}

const router = createRouter({
  history: history,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('setFullpath', to.fullPath)
  next()
})


export default router
