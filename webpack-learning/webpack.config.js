// 引入外部模块
const path = require('path')

module.exports = {
  entry: './index.js', // 入口文件
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: '[name].[ext]' // [name]是源文件名称，[ext]是原模块后缀名
            name: '[name]_[hash].[ext]',
            outputPath: 'pics/' // 存放目录
          }
        }
      }
    ]
  }, // loader
  output: {
    // filename: 'bundle.js', // 打包后的文件名（默认为main.js）
    path: path.resolve(__dirname, 'dist') // 绝对路径
  }
}
