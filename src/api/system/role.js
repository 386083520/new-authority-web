import request from '@/utils/request'

export function listRole (query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}
