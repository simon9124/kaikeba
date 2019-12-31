// es module
// commonjs require

import a from './a'
import b from './b'

// var a = require('./a')
// var b = require('./b')

a()
b()

// webpack默认值认识js模块，而且支持模块语法
// var pic = require('./pic.jpg') // 不支持
