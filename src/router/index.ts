import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import store from '../store/index'
import NewHome from '../views/kaze/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'web',
    component: NewHome
  },
  // {
  //   path:'/mobile',
  //   name: 'mobile',
  //   component: Mobile
  // },
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
  next()
})


export default router
