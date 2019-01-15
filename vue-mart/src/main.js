import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios拦截器
/* eslint-disable no-unused-vars */
import interceptor from './http-interceptor'

Vue.config.productionTip = false

// 全局注册axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')