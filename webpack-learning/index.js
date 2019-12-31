// es module
// commonjs require

import a from './a'
import b from './b'

// var a = require('./a')
// var b = require('./b')

a()
b()

// webpack默认值认识js模块，而且支持模块语法
var pic = require('./userAvatar.jpg') // 默认不支持 -> 用loader处理
console.log(pic)

// file-loader - 静态资源处理（jpg/jpeg/png/gif/svg/webp/csv/excel...）
