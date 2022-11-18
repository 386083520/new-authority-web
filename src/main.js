import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'
import './assets/icons'

import RightToolbar from '@/components/RightToolbar'

import '@/assets/styles/index.scss'
import '@/assets/styles/ruoyi.scss'

Vue.config.productionTip = false

Vue.use(Element)

Vue.component('RightToolbar', RightToolbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
