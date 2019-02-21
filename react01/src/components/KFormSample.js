/* 
  编写高阶组件，对KFormSample进行功能扩充
*/

import React, { Component } from 'react'

function KFormCreate(Comp) {
  constructor(props) {
    super(props)
    // 字段选项设置
    this.options = {}
    // 各字段的值
    this.state = {}
  }
  
  return (
    <div>
      
    </div>
  )
}


export default class KFormSample extends Component {
  render() {
    return (
      <div>
        {
          getFieldDec()(<input type="text" />)
        )}
        {/* <input type="text" /> -> 作为getFieldDec方法的第二个参数 */}
        <input type="password" />
        <button>登录</button>
      </div>
    )
  }
}
