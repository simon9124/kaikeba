import React, { Component } from 'react'
// import store from '../store'
import { add, minus, asyncAdd } from '../store/counter.redux'
import { connect } from 'react-redux'

// 装饰器写法
@connect(
  // 状态映射
  state => ({ num: state.counter }),
  // dispatch映射
  { add, minus, asyncAdd }
  // {
  //   add: () => ({ type: 'add' }),
  //   minus: () => ({ type: 'minus' }),
  //   asyncAdd: () => dispatch => {
  //     // 模拟异步操作
  //     setTimeout(() => {
  //       dispatch({ type: 'add' })
  //     }, 1000)
  //   }
  // }
)
class ReduxTest extends Component {
  render() {
    return (
      // 用redux方法
      // <div>
      //   <p>{store.getState()}</p>
      //   <button
      //     onClick={() => {
      //       store.dispatch({ type: 'minus' })
      //     }}
      //   >
      //     -
      //   </button>
      //   <button
      //     onClick={() => {
      //       store.dispatch({ type: 'add' })
      //     }}
      //   >
      //     +
      //   </button>
      // </div>

      // 用react-redux方法
      <div>
        <p>{this.props.num}</p>
        <button onClick={() => this.props.minus()}>-</button>
        <button onClick={() => this.props.add()}>+</button>
        <button onClick={() => this.props.asyncAdd()}>asyncAdd</button>
      </div>
    )
  }
}

// 非装饰器写法
// const mapStateToProps = state => ({ num: state })
// const mapDispatchToProps = dispatch => ({
//   add: () => dispatch({ type: 'add' }),
//   minus: () => dispatch({ type: 'minus' })
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReduxTest)

// 装饰器写法
export default ReduxTest
