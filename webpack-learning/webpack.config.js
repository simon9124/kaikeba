// 引入外部模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // 将 JS 字符串生成为 style 节点
          { loader: 'css-loader' }, // 将 CSS 转化成 CommonJS 模块
          { loader: 'postcss-loader' }, // 自动添加浏览器前缀
          { loader: 'sass-loader' } // 将 Sass 编译成 CSS
        ]
      }
    ]
  }, // loader
  devServer: {
    port: '3001',
    contentBase: 'dist'
  },
  plugins: [
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
  }
}
