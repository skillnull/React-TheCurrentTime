import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

export default function configureStore(preLoadedState) {
  return createStore(
      rootReducer,
      preLoadedState,
      applyMiddleware(thunkMiddleware, promiseMiddleware)
  )
}