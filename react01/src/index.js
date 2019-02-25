import React from 'react' // react核心类
import ReactDOM from 'react-dom' // react-dom
// import App from './App' // App
// import Lifecycle from './Lifecycle'
// import CartSample from './CartSample'
// import CommentList from './components/CommentList'
// import Composition from './components/Composition'
// import Hoc from './components/Hoc'
// import ContextSample from './components/ContextSample'
// import AntdTest from './components/AntdTest'
// import KFormSample from './components/KFormSample'

// 具名导入Provider
import { Provider } from 'react-redux'

// store
import store from './store'
import ReduxTest from './components/ReduxTest'
// function render() {
//   ReactDOM.render(<ReduxTest />, document.querySelector('#root'))
// }
// render()
// store.subscribe(render)

ReactDOM.render(
  <Provider store={store}>
    <ReduxTest />
  </Provider>,
  document.querySelector('#root')
)

// ReactDOM.render(<h1> React初始化 </h1>, document.querySelector('#root'))
// ReactDOM.render(<App />, document.querySelector('#root'))
// ReactDOM.render(<Lifecycle />, document.querySelector('#root'))
// ReactDOM.render(<CommentList />, document.querySelector('#root'))
// ReactDOM.render(<Composition />, document.querySelector('#root'))
// ReactDOM.render(<Hoc stage="React" />, document.querySelector('#root'))
// ReactDOM.render(<ContextSample />, document.querySelector('#root'))
// ReactDOM.render(<AntdTest />, document.querySelector('#root'))
// ReactDOM.render(<KFormSample />, document.querySelector('#root'))
// ReactDOM.render(
//   <CartSample title="react购物车" />,
//   document.querySelector('#root')
// )
