import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 令牌
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    // 存入令牌
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {

  },
  getters: {
    isLogin: state => {
      // 如果令牌不存在 -> 转换为布尔值
      return !!state.token;
    }
  }
})