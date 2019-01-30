<template>
  <div class="alert">
    <div class="alert-container"
         v-for="item in alerts"
         :key="item.id"></div>
    <div class="alert-content">
      {{item.content}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alerts: []
    }
  },
  created() {
    // id自增控制
    this.id = 0
  },
  methods: {
    // 添加
    add(options) {
      const id = 'id_' + (this.id++)
      const _alert = { ...options, id: id }
      this.alerts.push(_alert)
      // 自动关闭
      const duration = options.duration || 1
      setTimeout(() => {
        this.del(id)
      }, duration * 1000);
    },
    // 删除
    del() {

    }
  },
}
</script>

<style scoped>
</style>