<template>
  <div class="home">

    <!-- 页头 -->
    <k-header title="开课吧商城"></k-header>

    <!-- 轮播图 -->
    <cube-slide :data="slider"
                :interval="5000">
      <cube-slide-item v-for="item in slider"
                       :key="item.id">
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img"
               class="slider">
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- 触发分类选择button -->
    <cube-button @click="showCat">选择分类</cube-button>

    <!-- 商品列表 -->
    <goods-list :goods="filterGoods"
                @addCart="onAddCart"></goods-list>

    <!-- 商品分类列表 -->
    <cube-drawer ref="drawer"
                 title="请选择分类"
                 :data="[drawerList]"
                 @select="selectHandler">
    </cube-drawer>

    <!-- 加购动画载体 -->
    <div class="ball-wrap">
      <transition @before-enter="beforEnter"
                  @enter="enter"
                  @after-enter="afterEnter">
        <div class="ball"
             v-show="ball.show">球</div>
      </transition>
    </div>

  </div>
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'

// 中英文映射
const labels = {
  fe: '前端',
  python: 'Python',
  java: 'Java',
  bigdata: '大数据',
  ai: '人工智能'
}

export default {
  name: 'home',
  components: {
    GoodsList
  },
  data() {
    return {
      // 小球动画
      ball: {
        // 显示控制
        show: false,
        // 目标dom引用
        el: null
      },
      slider: [],
      // 所有分类
      keys: [],
      // 分类过滤时使用
      selectedKeys: [],
      // 所有商品列表
      goods: [],
      // drawerList: []
    }
  },
  async created() {
    const { data: { data: goods, slider, keys } } = await this.$http.get('/api/goods')
    // console.log(goods, slider)
    this.slider = slider
    this.goods = goods
    this.keys = keys
    // 默认选中所有分类
    this.selectedKeys = [...this.keys]
  },
  methods: {
    // 显示分类列表
    showCat() {
      this.$refs.drawer.show()
      // 创建Notice实例
      const notice = this.$createNotice()
      notice.add({ content: '请选择分类', duration: 1 })
    },
    // 选择商品分类
    selectHandler(val) {
      this.selectedKeys = [...val]
    },
    // 监听GoodsList组件的购物车添加事件
    onAddCart(el) {
      this.ball.el = el
      this.ball.show = true
    },
    // 动画初始值设置
    beforEnter() {
      // 1.获取点击dom的坐标
      const dom = this.ball.el
      const rect = dom.getBoundingClientRect()
      console.log(rect)
      // 2.计算点击坐标
      const x = -(rect.left - window.innerWidth / 2)
      const y = (window.innerHeight - rect.top - 30)
      dom.style.display = 'block'
      dom.style.transition = '0.8s'
      // dom.style.zIndex = '200'
      dom.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    // 动画开始
    enter(el, done) {
      // 获取offsetHeight，触发重绘（必须重绘，否则动画无法开始）
      document.body.offsetHeight
      // 设置动画结束点
      el.style.transform = `translate3d(0, 0, 0)`
      el.addEventListener('transitionend', done)
    },
    // 动画结束
    afterEnter(el) {
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  computed: {
    filterGoods() {
      let ret = []
      this.selectedKeys.forEach(v => {
        ret = ret.concat(this.goods[v])
      })
      return ret
    },
    drawerList() {
      // 中文映射
      return this.keys.map(v => {
        return {
          value: v,
          // 转换为中文标签
          text: labels[v]
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>
.cube-slide {
  height: auto;
  img {
    width: 100%;
  }
}

.ball-wrap {
  .ball {
    width: 30px;
    height: 30px;
    position: fixed;
    left: 50%;
    bottom: 10px;
    z-index: 200;
    color: red;
    transition: all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }
}
</style>

