import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'
import './assets/icons'
import plugins from './plugins'
import { download } from '@/utils/request'

import RightToolbar from '@/components/RightToolbar'
import Pagination from '@/components/Pagination'

import DictData from '@/components/DictData'

import { resetForm, addDateRange } from '@/utils/ruoyi'

import '@/assets/styles/index.scss'
import '@/assets/styles/ruoyi.scss'

Vue.config.productionTip = false

Vue.use(Element)

Vue.use(plugins)

DictData.install()

Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.download = download

Vue.component('RightToolbar', RightToolbar)
Vue.component('Pagination', Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
