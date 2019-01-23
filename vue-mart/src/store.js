import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 令牌
    token: localStorage.getItem('token') || '',
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  mutations: {
    // 存入令牌
    setToken(state, token) {
      state.token = token
    },
    // 购物车+1
    addCart(state, item) {
      const good = state.cart.find(v => v.id === item.id)
      if (good) {
        good.cartCount++
      } else {
        state.cart.push({
          ...item,
          cartCount: 1
        })
      }
    },
    // 购物车-1
    countMinus(state, index) {
      const item = state.cart[index]
      if (item.cartCount > 1) {
        item.cartCount--
      } else {
        state.cart.splice(index, 1)
      }
    },
    countAdd(state, index) {
      state.cart[index].cartCount += 1
    }
  },
  actions: {},
  getters: {
    isLogin: state => {
      // 如果令牌不存在 -> 转换为布尔值
      return !!state.token;
    },
    cartTotal: state => {
      let num = 0
      state.cart.forEach(v => {
        num += v.cartCount
      });
      return num
    },
    // 计算购物车项目总数量
    total: state => {
      return state.cart.reduce((num, v) => {
        num += v.cartCount * v.price, 0
      })
    }
  }
})

// 订阅store变化
store.subscribe((mutation, state) => {
  switch (mutation.type) {
    case 'setToken':
      localStorage.setItem('token', JSON.stringify(state.token))
      break;
    case 'addCart':
      localStorage.setItem('cart', JSON.stringify(state.cart))
      break;
  }
})

export default store