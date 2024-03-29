import axios from 'axios'
import { Loading, Message, MessageBox } from 'element-ui'
import { getToken } from './auth'
import store from '../store'
import { transParams } from '@/utils/ruoyi'
import { saveAs } from 'file-saver'

let downloadLoadingInstance
const isRelogin = { show: false }

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(config => {
  const notToken = (config.headers || {}).notToken === true
  if (getToken() && !notToken) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + transParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }
  return config
}, error => {
  Message({
    message: error,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  console.log('gsdres', res)
  if (res.request.responseType === 'blob') {
    return res.data
  }
  if (code === 401) {
    if (!isRelogin.show) {
      isRelogin.show = true
      MessageBox.confirm('登录状态已过期，请重新登录', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        isRelogin.show = false
        store.dispatch('Logout').then(() => {
          location.href = '/'
        })
      }).catch(() => {
        isRelogin.show = false
      })
    }
    return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'))
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    return Promise.reject(new Error('err'))
  } else {
    return res.data
  }
}, error => {
  let { message } = error
  if (message.includes('timeout')) {
    message = '系统接口请求超时'
  } else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常'
  }
  Message({
    message: message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export function download (url, params, filename) {
  downloadLoadingInstance = Loading.service({
    text: '正在下载数据，请稍候',
    spinner: 'el-icon-loading',
    background: 'rgba(0,0,0,0.7)'
  })
  return service.post(url, params, {
    transformRequest: params => { return transParams(params) },
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    saveAs(res, filename)
    downloadLoadingInstance.close()
  }).catch(r => {
    Message.error('下载文件出现错误，请联系管理员')
    downloadLoadingInstance.close()
  })
}

export default service
