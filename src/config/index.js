/**
 *  接口统一出口
 */

import serverTime from './urlConfig/serverTime'

const url = Object.assign(serverTime)

export function getUrl (type, path) {
    const env = process.env.NODE_ENV || 'production'
    return (`${url[type].domain[env]}/${url[type].path[path]}`)
}