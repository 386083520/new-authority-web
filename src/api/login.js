import request from '../utils/request.js'
export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get',
    headers: {
      notToken: true
    },
    timeout: 20000
  })
}

export function getInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    method: 'post',
    headers: {
      notToken: true
    },
    data: data
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}
