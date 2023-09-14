import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import Mobile from '../views/mobile/index.vue'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'web',
    alias: '/index',
    component: Home,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('setFullpath', to.fullPath)
  if (to.fullPath === '/index') {
    to.params = { type: 'audit' }
  }
  next()
})


export default router
