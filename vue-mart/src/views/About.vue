<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created() {
    // 登录授权过期
    this.$http.get('/api/authapi')
  },
}
</script>
