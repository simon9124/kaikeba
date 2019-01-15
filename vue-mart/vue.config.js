module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      before(app) {
        // 中间件
        // app.use(function (req, res, next) {
        //   // 检查token
        //   if (/^\/api/.test(req.path)) {
        //     // 只校验/api开头的请求
        //     if (req.path === '/api/login' || req.headers.token) {
        //       next()
        //     } else {
        //       // 错误状态 -> 提示用户需要登录
        //       res.sendStatus(401)
        //     }
        //   }
        // })

        app.get('/api/login', function (req, res) {
          const {
            username,
            password
          } = req.query
          if (username === 'simon' && password === '9124') {
            res.json({
              code: 0,
              token: 'loginSuccess'
            })
          } else {
            res.json({
              code: -1,
              message: '用户名或密码错误！'
            })
          }
        })
        app.get('/api/logout', function (req, res) {
          res.json({
            code: -1,
            message: '用户登出'
          })
        })
        app.get('/api/goods', function (req, res) {
          res.json({
            code: 0,
            message: '用户登出'
          })
        })
      }
    }
  }
}