import router from './router'
import store from './store'
import { getToken } from './utils/auth'
import { Message } from 'element-ui'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  console.log('gsdroles', store.getters.roles)
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        console.log('gsdaaab')
        store.dispatch('GetInfo').then(res => {
          console.log('gsdres666', res)
          next()
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
