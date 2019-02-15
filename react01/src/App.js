import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

// 函数型组件传递props
function Welcome1(props) {
  return <div>Hello, {props.name}</div>
}

export default class App extends Component {
  /* 当需要状态时 -> 1创建构造函数 2初始化状态 3更新状态 */

  // 创建构造函数
  constructor(props) {
    super(props)

    // 初始化状态
    this.state = {
      date: new Date(),
      count: 0
    }
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      // 每秒更新状态
      this.setState({
        date: new Date()
      })
    }, 1000)

    // *注意：setState是异步的，在回调函数内更新
    this.setState(
      // {
      //   count: this.state.count + 1
      // },
      (prevState, prevProps) => ({
        count: prevState.count + 1
      }),
      () => {
        // *在回调函数内，setState更新
        console.log(this.state.count)
      }
    )
    // *setState未更新
    // console.log(this.state.count)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

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
        {/* 使用状态 */}
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
