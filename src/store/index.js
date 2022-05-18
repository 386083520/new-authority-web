import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permissions from './modules/permissions'
import tagsView from './modules/tagsView'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    permissions,
    app,
    tagsView
  }
})
