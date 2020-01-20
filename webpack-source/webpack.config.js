const path = require('path')

module.exports = {
  entry: './index.js',
  resolveLoader: {
    // 优先到./loaders里面找，如果找不到再到node_modules里面找
    modules: ['node_modules', './loaders/']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js')
            loader: 'replaceLoaderAsync' // 配置resolveLoader可简化路径
          },
          {
            // loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            loader: 'replaceLoader',
            options: {
              name: 'loader replace' // 参数对象可以通过 loader.js 的 this.query 获取到
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
}
