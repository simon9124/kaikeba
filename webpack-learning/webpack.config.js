// 引入外部模块
const path = require('path')

module.exports = {
  entry: './index.js', // 入口文件
  module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // name: '[name].[ext]' // [name]是源文件名称，[ext]是原模块后缀名
      //       name: '[name]_[hash].[ext]',
      //       outputPath: 'pics/' // 存放目录
      //     }
      //   }
      // }
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader ',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'pics/',
            limit: 2048 // ⼩于2048才转换成base64，否则等效与file-loader（此时url-loader依赖于file-loader）
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
