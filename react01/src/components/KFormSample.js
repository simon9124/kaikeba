/* 
  编写高阶组件，对KFormSample进行功能扩充
*/

import React, { Component } from 'react'
import { Icon } from 'antd'

// 高阶组件：包装用户表担，增加数据管理能力、校验
function kFormCreate(Comp) {
  return class extends Component {
    constructor(props) {
      super(props)
      // 字段选项设置
      this.options = {}
      // 各字段的值
      this.state = {}
    }

    // 处理表单项输入事件
    handleChange = e => {
      const { name, value } = e.target

      this.setState(
        {
          [name]: value
        },
        // 数值变化后，在回调函数中做校验
        () => {
          this.validateField(name)
        }
      )
    }

    // 表单项校验
    validateField = field => {
      const rules = this.options[field].rules
      // 校验结果（只要任何一项失败，即失败）
      const ret = rules.some(rule => {
        if (rule.required) {
          // 仅验证必填项
          if (!this.state[field]) {
            // 校验失败
            this.setState({
              [field + 'Message']: rule.message
            })
            // 若有校验失败 -> 返回true
            return true
          }
        }
      })
      // 若校验没有失败
      if (!ret) {
        this.setState({ [field + 'Message']: '' })
      }
      return !ret
    }

    // 校验所有字段
    validate = cb => {
      const rets = Object.keys(this.options).map(field =>
        this.validateField(field)
      )
      // 校验结果数组中全部为true -> 校验成功
      const ret = rets.every(v => v === true)
      cb(ret)
    }

    getFieldDec = (field, option, InputComp) => {
      this.options[field] = option

      return (
        <div>
          {React.cloneElement(InputComp, {
            // 控件name
            name: field,
            // 控件值
            value: this.state[field] || '',
            // change事件处理
            onChange: this.handleChange,
            // 判断控件是否获得焦点
            onFocus: this.handleFocus
          })}

          {/* 错误信息显示在FormItem组件中 */}
          {/* {this.state[field + 'Message'] && (
            <p style={{ color: 'red' }}>{this.state[field + 'Message']}</p>
          )} */}
        </div>
      )
    }

    // 获取焦点
    handleFocus = e => {
      const field = e.target.name
      this.setState({
        [field + 'Focus']: true
      })
    }

    // 判断组件是否被用户点击过
    isFieldTouched = field => !!this.state[field + 'Focus']

    // 获取对应的错误信息
    getFieldError = field => this.state[field + 'Message']

    render() {
      return (
        <Comp
          {...this.props}
          getFieldDec={this.getFieldDec}
          value={this.state}
          validate={this.validate}
          isFieldTouched={this.isFieldTouched}
          getFieldError={this.getFieldError}
        />
      )
    }
  }
}

class FormItem extends Component {
  render() {
    return (
      <div className="formItem">
        {this.props.children}
        {this.props.validateStatus === 'error' && (
          <p style={{ color: 'red' }}>{this.props.help}</p>
        )}
      </div>
    )
  }
}

class KInput extends Component {
  render() {
    return (
      <div>
        {/* 前缀图标 */}
        {this.props.prefix}
        {/* 父组件传来的属性展开 */}
        <input {...this.props} />
      </div>
    )
  }
}
@kFormCreate
class KFormSample extends Component {
  // 表单提交
  onSubmit = () => {
    // console.log(this.props.value)
    this.props.validate(isValid => {
      if (isValid) {
        alert('校验成功，提交登录')
        console.log(this.props.value)
      } else {
        alert('校验失败')
      }
    })
  }

  render() {
    const { getFieldDec, isFieldTouched, getFieldError } = this.props
    const userNameError = isFieldTouched('uname') && getFieldError('uname')
    const passwordError = isFieldTouched('pwd') && getFieldError('pwd')

    return (
      <div>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDec(
            'uname',
            {
              rules: [{ required: true, message: '请填写用户名!' }]
            },
            <KInput type="text" prefix={<Icon type="user" />} />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDec(
            'pwd',
            {
              rules: [{ required: true, message: '请填写密码!' }]
            },
            <KInput type="password" prefix={<Icon type="lock" />} />
          )}
        </FormItem>

        {/* 作为getFieldDec方法的第三个参数 */}
        {/* <input type="text" /> */}
        {/* <input type="password" /> */}
        <button onClick={this.onSubmit}>登录</button>
      </div>
    )
  }
}

export default KFormSample
