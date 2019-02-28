import { call, put, takeEvery } from 'redux-saga/effects'
// call：在work saga中调用真正的接口的时候，用call调用
// put：操作有了结果以后，用put派发action并更新状态
// takeEvery：事件监听action，action来了以后调用指定的work saga

const api = {
  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'simon' })
        // if (Math.random() > 0.5) {
        //   resolve({ id: 1, name: 'simon' })
        // } else {
        //   reject('用户名或密码错误')
        // }
      }, 1000)
    })
  },
  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
}

// work saga
function* login(action) {
  try {
    const result = yield call(api.login, { name: '在这里传参' })
    yield put({ type: 'login', result })
  } catch (error) {
    yield put({ type: 'login faliure', message: error.message })
  }
}

function* logout(action) {
  try {
    const result = yield call(api.logout)
    yield put({ type: 'logout', result })
  } catch (error) {
    yield put({ type: 'logout faliure', message: error.message })
  }
}

function* mySaga() {
  // 配置监听器
  yield takeEvery('login_request', login)
  yield takeEvery('logout_request', logout)
}

export default mySaga
