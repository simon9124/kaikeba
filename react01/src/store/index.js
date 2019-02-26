import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import counter from './counter.redux'
import user from './user.redux'

export default createStore(
  // 用combineReducers，将reducer模块化，访问状态时要添加key(ReduxTest - @connect - state)
  combineReducers({
    counter,
    user
  }),
  applyMiddleware(logger, thunk)
)
