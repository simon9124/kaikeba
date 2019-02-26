import React, { Component } from 'react'

// Dialog对话框
function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || 'blue'}` }}>
      {/* 等效vue中的匿名插槽 */}
      {props.children}
      {/* 等效vue中的具名插槽 */}
      <div className="footer">{props.footer}</div>
    </div>
  )
}

function WelcomeDiaglog() {
  const confirmButton = (
    <button
      onClick={() => {
        alert(`react很赞`)
      }}
    >
      确定
    </button>
  )
  return (
    <Dialog color="red" footer={confirmButton}>
      <h1>欢迎光临</h1>
      <p>感谢使用</p>
    </Dialog>
  )
}

// 模拟接口
const api = {
  getUser: () => ({ name: 'jerry', age: 20 })
}
function Fetcher(props) {
  let user = api[props.name]()
  return props.children(user)
}

// 过滤掉非<p>标签
function FilterP(props) {
  return (
    <div>
      {/* React.Children提供若干操作嵌套内容的帮助方法 */}
      {React.Children.map(props.children, child => {
        // children是虚拟对象vdom
        console.log(child)
        if (child.type !== 'p') {
          return
        }
        return child
      })}
    </div>
  )
}

function RadioGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { name: props.name })
      })}
    </div>
  )
}

function Radio({ children, ...rest }) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  )
}

export default class Composition extends Component {
  render() {
    return (
      <div>
        <WelcomeDiaglog />
        {/* children内容可以是任意表达式，包括函数 */}
        <Fetcher name="getUser">
          {({ name, age }) => (
            <p>
              {name}-{age}
            </p>
          )}
        </Fetcher>

        {/* 操作children */}
        <FilterP>
          <h3>React</h3>
          <p>React很不错</p>
          <h3>Vue</h3>
          <p>Vue很不错</p>
        </FilterP>

        {/* 编辑children */}
        <RadioGroup name="mvvm">
          <Radio value="vue">Vue</Radio>
          <Radio value="react">React</Radio>
          <Radio value="angular">Angular</Radio>
        </RadioGroup>
      </div>
    )
  }
}
