const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js')
          },
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              name: 'loader replace' // 参数对象可以通过 loader.js 的 this.query 获取到
            }
          }
        ]
      }
    ]
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
}
