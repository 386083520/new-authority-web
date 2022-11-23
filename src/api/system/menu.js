import request from '@/utils/request'

export function treeselect () {
  return request({
    url: '/system/menu/treeselect'
  })
}
