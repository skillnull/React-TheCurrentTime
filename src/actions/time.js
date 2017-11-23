import {getUrl} from '../config/index'
import {getRequest, postRequest} from '../service/requestConfig'
import {LOCAL_TIME,SERVER_TIME} from '../config/actionType'

export const getLocalTime = () => {
    let realTimeStr = new Date().toLocaleString('chinese', {hour12: false})
    return {type: LOCAL_TIME, realTimeStr}
}

export const getServerTime = async (params) => {
    try {
        const url = getUrl('serverTime', 'getServerTime')
        let result = await getRequest(url, params)
        return {type: SERVER_TIME, result}
    } catch (err) {
        console.log(err)
    }
}