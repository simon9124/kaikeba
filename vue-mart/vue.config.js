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

        app.get("/api/goods", function (req, res) {
          res.json({
            code: 0,
            slider: [{
                id: 21,
                img: "/img/01.jpg"
              },
              {
                id: 22,
                img: "/img/02.jpg"
              },
              {
                id: 23,
                img: "/img/03.jpg"
              },
              {
                id: 24,
                img: "/img/04.jpg"
              }
            ],
            data: {
              fe: [{
                  id: 1,
                  title: "Vue2.x实战",
                  price: "100",
                  img: "/img/01.jpg",
                  count: 100
                },
                {
                  id: 2,
                  title: "React16.x实战",
                  price: "120",
                  img: "/img/03.jpg",
                  count: 100
                },
                {
                  id: 3,
                  title: "nodejs实战",
                  price: "80",
                  img: "/img/02.jpg",
                  count: 100
                },
                {
                  id: 4,
                  title: "前端工程化",
                  price: "110",
                  img: "/img/04.jpg",
                  count: 100
                },
                {
                  id: 5,
                  title: "面试",
                  price: "200",
                  img: "/img/02.jpg",
                  count: 100
                },
                {
                  id: 6,
                  title: "前端安全",
                  price: "30",
                  img: "/img/05.jpg",
                  count: 100
                }
              ],
              python: [{
                  id: 7,
                  title: "Python基础语法",
                  price: "120",
                  img: "/img/03.jpg",
                  count: 101
                },
                {
                  id: 8,
                  title: "Flask实战",
                  price: "80",
                  img: "/img/02.jpg",
                  count: 100
                },
                {
                  id: 9,
                  title: "Django实战",
                  price: "110",
                  img: "/img/01.jpg",
                  count: 100
                },
                {
                  id: 10,
                  title: "Python语法进阶",
                  price: "200",
                  img: "/img/04.jpg",
                  count: 100
                }
              ],
              java: [{
                  id: 11,
                  title: "java入门实战",
                  price: "80",
                  img: "/img/02.jpg",
                  count: 100
                },
                {
                  id: 12,
                  title: "spring boot实战",
                  price: "110",
                  img: "/img/01.jpg",
                  count: 100
                },
                {
                  id: 13,
                  title: "Java高并发",
                  price: "30",
                  img: "/img/04.jpg",
                  count: 100
                }
              ],
              bigdata: [{
                  id: 14,
                  title: "大数据实战",
                  price: "200",
                  img: "/img/01.jpg",
                  count: 100
                },
                {
                  id: 15,
                  title: "Hadoop实战",
                  price: "120",
                  img: "/img/03.jpg",
                  count: 100
                },
                {
                  id: 16,
                  title: "Kafka平台",
                  price: "80",
                  img: "/img/02.jpg",
                  count: 100
                }
              ],
              ai: [{
                  id: 17,
                  title: "算法实战",
                  price: "100",
                  img: "/img/01.jpg",
                  count: 100
                },
                {
                  id: 18,
                  title: "个性化推荐",
                  price: "120",
                  img: "/img/03.jpg",
                  count: 100
                },
                {
                  id: 19,
                  title: "机器学习",
                  price: "80",
                  img: "/img/02.jpg",
                  count: 100
                },
                {
                  id: 20,
                  title: "AI实战",
                  price: "110",
                  img: "/img/05.jpg",
                  count: 100
                }
              ]
            },
            keys: ["fe", "python", "java", "bigdata", "ai"]
          });
        });
      }
    }
  }
}