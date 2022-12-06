import request from '@/utils/request'

export function treeselect () {
  return request({
    url: '/system/menu/treeselect'
  })
}

export function roleMenuTreeselect (roleId) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}
