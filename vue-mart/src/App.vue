<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login"
                   v-if="!isLogin">Login</router-link>
      <a @click="logout"
         v-if="isLogin">Logout</a>
    </div> -->

    <!-- router-view -->
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>

    <!-- cube-tab-bar -->
    <cube-tab-bar show-slider
                  v-model="selectLabel"
                  @change="changeHandler">
      <!-- :data="tabs" -->
      <cube-tab v-for="(item,i) in tabs"
                :key="i"
                :icon="item.icon"
                :label="item.value">
        <span class="tabs">{{item.label}}</span>
        <span class="badge"
              v-if="showBadge(item.label)">{{cartTotal}}</span>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogin', 'cartTotal'])
  },
  data() {
    return {
      // 默认页签
      selectLabel: '/',
      tabs: [
        {
          label: 'Home',
          value: '/',
          icon: 'cubeic-home'
        },
        {
          label: 'Cart',
          value: '/cart',
          icon: 'cubeic-mall'
        },
        {
          label: 'Me',
          value: '/login',
          icon: 'cubeic-person'
        },
      ],
      transitionName: 'route-forward'
    }
  },
  watch: {
    // 路由发生变化时，同步tabs选中
    $route(route) {
      this.selectLabel = route.path

      // 动态设置动画方式
      this.transitionName = this.$router.transitionName
    }
  },
  created() {
    // 初始化页签设置
    this.selectLabel = this.$route.path
  },
  methods: {
    // 登出
    logout() {
      this.$http.get('/api/logout')
    },
    // tab切换
    changeHandler(val) {
      this.$router.push(val)
    },
    // 是否显示商品数量
    showBadge(label) {
      return label === 'Cart' && this.cartTotal > 0
    }
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// cube-tab-bar
.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #edf0f4;
  &-slider {
    top: 0;
  }
  .cube-tab {
    height: 54px;
    padding: 8px 0;
    position: relative;

    .tabs {
      display: block;
    }

    // 购物车商品数量
    .badge {
      position: absolute;
      top: 10px;
      right: 30px;
      background: #de3529;
      color: white;
      width: 1.4rem;
      height: 1.4rem;
      line-height: 1.4rem;
      border-radius: 50%;
    }
  }
}

// 页面滑动动画
// 入场前
.route-forward-enter {
  transform: translate3d(-100%, 0, 0);
}
.route-back-enter {
  transform: translate3d(100%, 0, 0);
}
// 出场后
.route-forward-leave-to {
  transform: translate3d(100%, 0, 0);
}
.route-back-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.route-forward-enter-active,
.route-forward-leave-active,
.route-back-leave-active,
.route-back-leave-active {
  transition: transform 0.3s;
}

// 设置每个页面绝对定位 -> 解决切换时页面上跳的bug
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 36px;
}
</style>
