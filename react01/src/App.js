import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

// 函数型组件传递props
function Welcome1(props) {
  return <div>Hello, {props.name}</div>
}

export default class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName
  }
  render() {
    const name = 'Simon'

    // jsx本身也是表达式
    const jsx = <p> jsx本身也是表达式 </p>

    return (
      <div>
        App组件
        {/* 表达式 */}
        <h1> {name} </h1>
        <p>
          {this.formatName({
            firstName: 'Simon',
            lastName: 'CoCo'
          })}
        </p>
        {/* 属性 */}
        <img
          src={logo}
          style={{
            width: 100
          }}
          className="img"
          alt=""
        />
        {/* jsx也是表达式 */}
        {jsx}
        {/* 组件属性传值 */}
        <Welcome1 name="CoCo" />
      </div>
    )
  }
}
