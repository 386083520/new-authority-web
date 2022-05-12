import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes: constantRoute
})

export default router
