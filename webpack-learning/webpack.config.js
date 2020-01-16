// 引入外部模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //自动清理dist
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css
const webpack = require('webpack') // 启动hmr
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader

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
      }, // 图片资源
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader', // vue里的样式文件
          'style-loader', // 将 JS 字符串生成为 style 节点
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: '../', // 公共路径
          //     hmr: process.env.NODE_ENV === 'development' //开发环境配置热更新
          //   }
          // }, //抽离css时，就不用style-loader了
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader', // 自动添加浏览器前缀
          'sass-loader' // 将 Sass 编译成 CSS
        ]
      }, // 样式文件
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除在外
        loader: 'babel-loader' // 将es6(+)转成es5
        // options会自动从.babelrc文件中获取
      }, // js文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      } // vue文件
    ]
  }, // loader
  devServer: {
    port: '3001', //端口号
    contentBase: './dist', // 启动目录
    open: true, //自动打开浏览器
    hot: true, // 启动hmr
    hotOnly: true, // 即便HMR不⽣效，浏览器也不⾃动刷新
    proxy: {
      '/api': {
        target: 'http://localhost:9092'
      }
    } //服务器代理
  }, // 开启服务器
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css'
    // }), // 抽离css
    new CleanWebpackPlugin(), //自动清理dist
    new HtmlWebpackPlugin({
      title: 'html 模板',
      // filename: 'index_[hash].html',
      template: './index.html'
    }), //自动生成html
    new webpack.HotModuleReplacementPlugin(), // 启动hm
    new VueLoaderPlugin() // vue-loader
  ], //plugins
  output: {
    filename: 'bundle.js', // 打包后的文件名（默认为main.js）
    path: path.resolve(__dirname, 'dist') // 绝对路径
  },
  devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/#root
  mode: 'development'
}
