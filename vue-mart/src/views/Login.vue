<template>
  <div>
    <cube-form :model="model"
               :schema="schema"
               @submit="handleLogin"
               @validate="handleValidate"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 数据模型
      model: {
        username: '',
        password: ''
      },
      // 表单结构模型
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true
            },
            trigger: 'blur',
            messages: {
              required: '用户名为必填项'
            }
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur',
            messages: {
              required: '密码为必填项'
            }
          },
          // 登录按钮
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault();
      // 调用mock接口
      // const res = await this.$http.get('/api/login', {
      //   params: {
      //     username: this.model.username,
      //     password: this.model.password
      //   }
      // })
      const res = await this.$http.post('/api/login', {
        username: this.model.username,
        password: this.model.password
      })
      console.log(res);

      const { code, token, message } = res.data
      if (code === 0) {
        // 登录成功 -> 缓存至本地 & 存入store
        localStorage.setItem('token', token)
        this.$store.commit('setToken', token)
        // 重定向
        const redirect = this.$route.query.redirect || '/';
        this.$router.push(redirect)
      } else {
        // 登录失败
        const toast = this.$createToast({
          time: 2000,
          txt: message || '登录失败',
          type: 'error'
        })
        toast.show()
      }
    },
    handleValidate(ret) {
      console.log('校验' + ret)
    }
  },
}
</script>

<style scoped>
</style>