import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // 该中间件会让actions支持函数，并且传入dispatch，getState作为参数
    promiseMiddleware
)(createStore)

export default function configureStore (initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
