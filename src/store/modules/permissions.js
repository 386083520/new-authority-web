import { getRouters } from '@/api/menu'
import { constantRoute } from '@/router'
import Layout from '@/layout/index.vue'
const permissions = {
  state: {
    sidebarRouters: []
  },
  mutations: {
    SET_SIDEBAR_ROUTES: (state, routes) => {
      state.sidebarRouters = routes
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        getRouters().then(res => {
          const rdata = JSON.parse(JSON.stringify(res.data))
          const sdata = JSON.parse(JSON.stringify(res.data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata)
          commit('SET_SIDEBAR_ROUTES', constantRoute.concat(sidebarRoutes))
          resolve(rewriteRoutes)
        })
      })
    }
  }
}

function filterAsyncRouter (asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children !== null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

function loadView (view) {
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default permissions
