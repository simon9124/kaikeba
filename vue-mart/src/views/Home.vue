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
    <goods-list :goods="filterGoods"></goods-list>

    <!-- 商品分类列表 -->
    <cube-drawer ref="drawer"
                 title="请选择分类"
                 :data="[drawerList]"
                 @select="selectHandler">
    </cube-drawer>

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
    },
    // 选择商品分类
    selectHandler(val) {
      this.selectedKeys = [...val]
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
</style>

