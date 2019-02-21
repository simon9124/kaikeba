/*
  Provider & Consumer 跨层传递
*/

import React, { Component } from 'react'

// 1.创建上下文
const Context = React.createContext()
const store = {
  name: '开课吧',
  sayHi() {
    alert(this.name)
  }
}

// 常规写法
// export default class ContextSample extends Component {
//   render() {
//     return (
//       // value是固定写法
//       <Context.Provider value={store}>
//         <div style={{ cursor: 'pointer' }}>
//           {/* 获取数据 */}
//           <Context.Consumer>
//             {/* 必须内嵌1个函数 */}
//             {value => <div onClick={() => value.sayHi()}>{value.name}</div>}
//           </Context.Consumer>
//         </div>
//       </Context.Provider>
//     )
//   }
// }

// 装饰器写法
const withProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props} />
  </Context.Provider>
)

const withConsumer = Comp => props => (
  <Context.Consumer>
    {/* 必须内嵌1个函数 */}
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
)

@withConsumer
class Inner extends Component {
  render() {
    return (
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => this.props.value.sayHi()}
      >
        {this.props.value.name}
      </div>
    )
  }
}

@withProvider
class ContextSample extends Component {
  render() {
    return (
      <div>
        <Inner />
      </div>
    )
  }
}

/* 
  ContextSample要传数据 -> 用withProvider包裹
  Inner要用数据 -> 用withConsumer包裹

  <withProvider>
    <ContextSample>
      <withConsumer>
        <Inner></Inner>
      </withConsumer>
    </ContextSample>
  </withProvider> 
*/

export default ContextSample
