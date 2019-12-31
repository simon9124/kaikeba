// 引入外部模块
const path = require('path')

module.exports = {
  entry: './index.js', // 入口文件
  output: {
    // filename: 'bundle.js', // 打包后的文件名（默认为main.js）
    path: path.resolve(__dirname, 'dist') // 绝对路径
  }
}
