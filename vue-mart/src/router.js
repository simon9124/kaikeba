import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'
import store from './store';
import History from './utils/history';

Vue.use(Router)
Vue.use(History)

// 实例化之前，扩展Router
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}


// 创建router
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      // 用meta来做路由守卫 -> 是否需要登录
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录 -> 检查vuex中的令牌
    if (store.state.token) {
      // 有令牌 -> 正常跳转
      next()
    } else {
      // 无令牌 -> 返回登录页
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    // 无需登录 -> 正常跳转
    next()
  }
})

// afterEach记录历史记录
router.afterEach((to, from) => {
  if (router.isBack) {
    // 后退操作
    History.pop()
    router.isBack = false
  } else {
    History.push(to.path)
  }
})

export default router;