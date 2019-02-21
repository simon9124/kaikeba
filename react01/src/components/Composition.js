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

export default class Composition extends Component {
  render() {
    return (
      <div>
        <WelcomeDiaglog />
      </div>
    )
  }
}
