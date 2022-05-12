import request from '../utils/request.js'
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
