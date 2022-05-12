import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permissions from './modules/permissions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    permissions
  }
})
