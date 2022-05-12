import { getRouters } from '@/api/menu'
import { constantRoute } from '@/router'
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
          commit('SET_SIDEBAR_ROUTES', constantRoute.concat(res.data))
          resolve(res)
        })
      })
    }
  }
}

export default permissions
