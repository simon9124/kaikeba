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
        /*
          中间件（在所有请求之前先执行）
        */
        app.use(function (req, res, next) {
          // 检查token
          if (/^\/api/.test(req.path)) {
            // 只校验/api开头的请求
            if (req.path === '/api/login' || req.headers.token) {
              next()
            } else {
              // 错误状态 -> 提示用户需要登录
              res.sendStatus(401)
            }
          } else {
            // 非/api开头的请求 -> 无需校验
            next()
          }
        })

        /* 
          前端模拟api
        */
        // 用户登录
        app.post('/api/login', function (req, res) {

          let body = []
          req.on('data', chunk => {
            // 接收到一部分数据，chunk是Buffer对象）
            console.log(chunk)
            body.push(chunk)
          }).on('end', () => {
            // 数据接收完毕，将body转换为完整的Buffer
            console.log(body)
            console.log(Buffer.concat(body))
            body = Buffer.concat(body).toString()
            console.log(body)
            // 转换并保存前台传递的user
            const {
              username,
              password
            } = JSON.parse(body)
            // 设置登录有效时间为10s，存入token
            const validityTime = new Date().getTime() + 10 * 1000
            if (username === 'simon' && password === '9124') {
              res.json({
                code: 0,
                token: 'loginSuccess-' + validityTime,
              })
            } else {
              res.json({
                code: -1,
                message: '用户名或密码错误！'
              })
            }
          })
        })

        // 用户登出
        app.get('/api/logout', function (req, res) {
          res.json({
            code: -1,
            message: '用户登出'
          })
        })

        // 登录超时
        const API_KEY = 'loginSuccess'
        app.get('/api/authapi', function (req, res) {
          // 获取headers里面的token
          const {
            token
          } = req.headers
          // 如果没有token -> 返回-1
          if (!token) {
            return res.json({
              code: -1
            })
          }
          const [key, expires] = token.split('-')
          const now = new Date().getTime()
          if (key === API_KEY && expires > now) {
            return res.json({
              code: 0,
              data: '经过校验'
            })
          } else {
            return res.json({
              code: -1,
              message: '登录授权过期，请重新登录'
            })
          }
        })

        // 用户名校验
        app.get('/api/check', function (req, res) {
          const username = req.query.username
          if (username === 'simon') {
            res.json({
              code: 1,
              message: '用户存在'
            })
          } else {
            res.json({
              code: 0,
              message: '用户不存在'
            })
          }

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