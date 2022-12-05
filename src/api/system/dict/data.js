import request from '@/utils/request'
export function getDicts (dictType) {
  return request({
    url: '/system/dict/data/type/' + dictType,
    method: 'get'
  })
}
