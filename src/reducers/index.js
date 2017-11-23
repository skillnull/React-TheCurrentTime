import { combineReducers } from 'redux'
import localTime from './time'
import serverTime from './time'

// 使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    localTime,
    serverTime
})

export default rootReducer