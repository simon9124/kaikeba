import axios from 'axios'
import store from './store'
import router from './router'

/*
  http拦截器，拦截axios的所有http请求，预先放入token请求头
*/
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      // 若存在令牌 -> 放入请求头
      config.headers.token = store.state.token
    }
    return config
  }
)

/*
  响应拦截器，提前预处理响应
*/
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // response.states为200 -> 响应成功
      const data = response.data
      // 如果code是-1 -> 用户已登出/token已过期
      if (data.code == -1) {
        clearHandler()
      }
    }
    return response
  },
  err => {
    if (err.response.status === 401) {
      // response.states为401 -> 未授权
      clearHandler()
    }
  }
)

function clearHandler() {
  // 清空缓存
  store.commit('setToken', '')
  localStorage.removeItem('token')
  // 跳转至登录页
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.path
    }
  })
}