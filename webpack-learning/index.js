// es module
// commonjs require

import a from './a'
import b from './b'

import './index.css'
import './index.scss'

// var a = require('./a')
// var b = require('./b')

a()
b()

// webpack默认值认识js模块，而且支持模块语法
var pic = require('./userAvatar.jpg') // 默认不支持 -> 用loader处理
consoe.log(pic)

/* devServer */
// webpack-dev-server - 启动服务器

/* loaders */
// file-loader - 静态资源处理（jpg/jpeg/png/gif/svg/webp/csv/excel...）
// url-loader - 转换成base64位码
// sass-loader & css-loader & style-loader - 样式文件处理
// postcss-loader  - 自动添加不同浏览器的css3前缀

/* plugin */
// HtmlWebpackPlugin - 打包后，生成html文件
// clean-webpack-plugin - 打包前，自动清理dist文件夹
// mini-css-extract-plugin - 抽离css文件
