// 引入外部模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //自动清理dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css

module.exports = {
  entry: './index.js', // 入口文件
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // name: '[name].[ext]' // [name]是源文件名称，[ext]是原模块后缀名
            name: '[name]_[hash].[ext]',
            outputPath: 'pics/', // 存放目录
            limit: 2048 // ⼩于limit才转换成base64，否则等效与file-loader（此时url-loader依赖于file-loader）
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // 'style-loader', // 将 JS 字符串生成为 style 节点
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // 公共路径
              hmr: process.env.NODE_ENV === 'development' //开发环境配置热更新
            }
          }, //抽离css时，就不用style-loader了
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader', // 自动添加浏览器前缀
          'sass-loader' // 将 Sass 编译成 CSS
        ]
      }
    ]
  }, // loader
  devServer: {
    port: '3001', //端口号
    contentBase: './dist', // 启动目录
    open: true, //自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:9092'
      }
    } //服务器代理
  }, // 开启服务器
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'html 模板',
      // filename: 'index_[hash].html',
      template: './index.html'
    })
  ], //plugins
  output: {
    // filename: 'bundle.js', // 打包后的文件名（默认为main.js）
    path: path.resolve(__dirname, 'dist') // 绝对路径
  },
  devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/#root
  mode: 'development'
}
