const initialState = {
  isLogin: false,
  userInfo: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'login':
      return { isLogin: true }
    case 'logout':
      return { isLogin: false }
    default:
      return state
  }
}

export function login() {
  return dispatch => {
    // mock异步登录
    setTimeout(() => {
      dispatch({ type: 'login' })
    }, 1000)
  }
}

export function logout() {
  return dispatch => {
    // mock异步登出
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1000)
  }
}
