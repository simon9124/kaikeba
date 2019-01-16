<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      // 登录授权过期
      this.$http.get('/api/authapi').then((res) => {
        if (res.data.code === -1) {
          const toast = this.$createToast({
            time: 2000,
            txt: res.data.message,
            type: 'error'
          })
          toast.show()
        }
      })
    }
  },
}
</script>
