import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import counter from './counter.redux'
import user from './user.redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

/*
  redux-saga
*/
// 1.创建中间件
const mid = createSagaMiddleware()

// 2.应用中间件
// createStore接收2个参数：reducer & enhancer
const store = createStore(
  // 用combineReducers，将reducer模块化，访问状态时要添加key(ReduxTest - @connect - state)
  combineReducers({
    counter,
    user
  }),
  applyMiddleware(logger, mid)
)

// run方法需要先应用，再执行
mid.run(saga)

export default store

/*
  redux-thunk
*/
// createStore接收2个参数：reducer & enhancer
// export default createStore(
//   // 用combineReducers，将reducer模块化，访问状态时要添加key(ReduxTest - @connect - state)
//   combineReducers({
//     counter,
//     user
//   }),
//   applyMiddleware(
//     logger,
//     thunk
//   )
// )
