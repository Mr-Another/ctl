import request from '@/utils/request'

/**
 *
 * @param {id} query
 */
export function read(query) {
  return request({
    url: '/data/read',
    method: 'get',
    params: query
  })
}
