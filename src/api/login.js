import request from '../utils/request.js'
export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get',
    timeout: 20000
  })
}
