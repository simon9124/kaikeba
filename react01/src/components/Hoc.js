import React, { Component } from 'react'

// function Kaikeba(props) {
//   return (
//     <div>
//       {props.stage} - {props.name}
//     </div>
//   )
// }

// 高阶组件withName
const withName = Comp => {
  // 甚至可以重写组件的生命周期
  class NewComponent extends Component {
    componentDidMount() {
      console.log('do sth')
    }
    render() {
      return <Comp {...this.props} name="高阶组件使用介绍" />
    }
  }

  // 假设通过某种特殊手段，获取了本节课的名字
  // return props => <Comp {...props} name="高阶组件使用介绍" />
  return NewComponent
}

// 高阶组件withLog
const withLog = Comp => {
  console.log(Comp.name + '渲染了')
  return props => <Comp {...props} />
}

// 高阶组件链式调用
// export default withLog(withName(Kaikeba))

// 高阶组件装饰器写法：必须用class & 先声明组件
@withLog
@withName
@withLog
class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}
export default Kaikeba
