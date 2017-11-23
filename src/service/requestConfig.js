import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'

/**
 * @method getRequest => http get method
 * @param url
 * @param params
 * @returns {Promise.<void>}
 */
export const getRequest = async (url, params) => {
    let urlStr = url + `?${translateParams(params)}`
    let encapsulationParams = {
        url: params ? urlStr : url,
        method: 'get'
    }
    let result = await axios.request(encapsulationParams)
    handleExpiredLogin(result)
    return result.data
}

/**
 * @method postRequest => http post method
 * @param url
 * @param params
 * @returns {Promise.<void>}
 */
export const postRequest = async (url, params) => {
    let encapsulationParams = {
        url: url,
        method: 'post',
        data: translateParams(params)
    }
    let result = await axios.request(encapsulationParams)
    handleExpiredLogin(result)
    result
    result.data

}

/**
 * @method translateParams => 将参数拼接到URL
 * @param params
 * @returns {string}
 */
export function translateParams (params) {
    let url = ''
    for (let param in params) {
        url += `${param}=${encodeURIComponent(params[param])}`
    }
    return url.substring(0, url.length - 1)
}

/**
 * @method handleExpiredLogin => 处理过期到登陆
 * @param data
 */
function handleExpiredLogin (data) {

}