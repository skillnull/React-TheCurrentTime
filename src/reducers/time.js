export default (state = {
    localTime: new Date().toLocaleString('chinese', {hour12: false}),
    serverTime: null
}, action) => {
    switch (action.type) {
        case 'LOCAL_TIME':
            return Object.assign({}, state, {
                localTime: action.realTimeStr
            })
        case 'SERVER_TIME':
            return Object.assign({}, state, {
                serverTime: action
            })
        default:
            return state
    }
}