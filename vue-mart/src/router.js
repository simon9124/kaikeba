import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store';

Vue.use(Router)

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

export default router;