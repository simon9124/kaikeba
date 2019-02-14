import React from 'react' // react核心类
import ReactDOM from 'react-dom' // react-dom
import App from './App' // App

// ReactDOM.render( < h1 > React初始化 < /h1>, document.querySelector('#root'))

// 动态渲染
// function tick() {
//   ReactDOM.render( < h2 > {
//     new Date().toLocaleTimeString()
//   } < /h2> , document.querySelector('#root'))
//   }

//   setInterval(tick, 1000);

ReactDOM.render( < App / > , document.querySelector('#root'))