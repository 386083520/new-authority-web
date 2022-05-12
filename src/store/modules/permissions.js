import { getRouters } from '@/api/menu'
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
          commit('SET_SIDEBAR_ROUTES', res.data)
          resolve(res)
        })
      })
    }
  }
}

export default permissions
