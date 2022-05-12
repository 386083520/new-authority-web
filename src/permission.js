import router from './router'
import store from './store'
import { getToken } from './utils/auth'
import { Message } from 'element-ui'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          store.dispatch('GenerateRoutes').then(accessRoutes => {
            console.log('gsd', accessRoutes)
            next()
          })
        }).catch(err => {
          Message.error(err)
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
