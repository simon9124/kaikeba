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

// 全局引入Header.vue
import KHeader from './components/Header.vue'
Vue.component('k-header', KHeader)

// 创建$createNotice API
import {
  createAPI
} from 'cube-ui'
import Notice from './components/Notice.vue'
createAPI(Vue, Notice, true)

// 全局注册axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')