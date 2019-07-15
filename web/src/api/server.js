import request from '@/utils/request'

/**
 * @return {Promise}
 */
export function getList() {
  return request({
    url: '/server/getList',
    method: 'get',
    params: {}
  })
}

/**
 * @return {Promise}
 */
export function getOption() {
  return request({
    url: '/server/getOption',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/server/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/server/edit',
    method: 'post',
    data
  })
}