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

// redux-thunk用
// export function login() {
//   return dispatch => {
//     // mock异步登录
//     setTimeout(() => {
//       dispatch({ type: 'login' })
//     }, 1000)
//   }
// }

// export function logout() {
//   return dispatch => {
//     // mock异步登出
//     setTimeout(() => {
//       dispatch({ type: 'logout' })
//     }, 1000)
//   }
// }

// redux-saga用
export function login() {
  return { type: 'login_request' }
}
export function logout() {
  return { type: 'logout_request' }
}
