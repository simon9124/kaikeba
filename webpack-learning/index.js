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
console.log(pic)

// axios默认会有跨域问题，需要配置proxy服务器代理，用"/api"代替proxy里target的值
// import axios from 'axios'
// axios.get('http://localhost:9092/api/info').then(res => {
// axios.get('/api/info').then(res => {
//   console.log(res)
// })


// css的hmr热模块替换（需非抽离css）
var btn = document.createElement('button')
btn.innerHTML = '新增'
document.body.appendChild(btn)

btn.onclick = function () {
  var div = document.createElement('div')
  console.log('1')
  div.innerHTML = 'item'
  document.body.appendChild(div)
}

// js的hmr热模块替换
import counter from "./counter";
import number from "./number";
counter();
number();
if (module.hot) {
  module.hot.accept("./number", function () {
    document.body.removeChild(document.getElementById("number"));
    number();
  });
}


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

/* devServer */
// port - 端口号
// contentBase - 启动目录
// open - 自动在浏览器打开
// hot - 启动hmr，更新保存代码后，浏览器不用刷新即可自动渲染（抽离css后无效）
// hotOnly - 即便HMR不⽣效，浏览器也不⾃动刷新
// proxy - 服务器代理

/* sourceMap */
// 源代码与打包后的对应关系，dev模式自动开启