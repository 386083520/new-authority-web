const tagsView = {
  state: {
    visitedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }))
    },
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    addView ({ dispatch }, view) {
      dispatch('addVisitedView', view)
    },
    addVisitedView ({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    delView ({ dispatch }, view) {
      dispatch('delVisitedView', view)
    },
    delVisitedView ({ commit }, view) {
      commit('DEL_VISITED_VIEW', view)
    }
  }
}
export default {
  namespaced: true,
  ...tagsView
}
