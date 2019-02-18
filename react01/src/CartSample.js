import React, { Component } from 'react'

function Cart(props) {
  return (
    <table>
      <tbody>
        {props.data.map(item => (
          <tr key={item.text}>
            <td>{item.text}</td>
            <td>
              <button onClick={() => props.minusCount(item)}>-</button>
              {item.count}
              <button onClick={() => props.addCount(item)}>+</button>
            </td>
            <td>￥{item.price * item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default class CartSample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goods: [
        { id: 1, text: 'Web全栈1', price: 666 },
        { id: 2, text: 'Web全栈2', price: 777 }
      ],
      text: '', // 商品名
      cart: [],
      id: 3,
      price: 111
    }

    // 回调写法1
    // this.addGood=this.addGood.bind(this)
  }

  // 回调写法2：用箭头函数(或在事件里用箭头函数)
  addGood() {
    if (this.state.text) {
      // 填写商品名 -> 添加商品
      this.setState(
        prevState => ({
          goods: [
            ...prevState.goods,
            {
              id: prevState.id,
              text: prevState.text,
              price: prevState.price
            }
          ]
        }),
        () => {
          const newId = this.state.id + 1
          const newPrice = this.state.price + 111
          this.setState({ id: newId, text: '', price: newPrice })
          console.log(this.state.goods)
        }
      )
    } else {
      // 未填写商品名 -> 错误提示
      alert('请填写商品名称')
    }
  }

  // 添加到购物车
  addToCart(good) {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === good.text)
    const item = newCart[idx]
    // 如果购物车中不存在 -> 新添加 ; 如果购物车中已存在 -> 数量+1
    if (item) {
      newCart.splice(idx, 1, { ...item, count: item.count + 1 })
    } else {
      newCart.push({ ...good, count: 1 })
    }
    this.setState({ cart: newCart })
  }

  // 购物车指定商品+1
  addCount = item => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === item.text)
    // console.log({ ...item })
    newCart.splice(idx, 1, { ...item, count: item.count + 1 })
    this.setState({ cart: newCart })
  }

  // 购物车指定商品-1
  minusCount = item => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === item.text)
    if (item.count > 1) {
      newCart.splice(idx, 1, { ...item, count: item.count - 1 })
    } else {
      newCart.splice(idx, 1)
    }
    this.setState({ cart: newCart })
  }

  // input值变化 -> 绑定给state里的text值
  textChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const title = this.props.title ? <h1>{this.props.title}</h1> : null

    // 循环：将js对象数组转换为jsx数组
    const goods = this.state.goods.map(good => (
      <li key={good.id}>
        {good.text}&nbsp; &nbsp;
        {good.price}元&nbsp; &nbsp;
        <button onClick={() => this.addToCart(good)}>加购</button>
      </li>
    ))

    return (
      <div>
        {/* 条件语句 */}
        {title}

        {/* 添加商品 */}
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.textChange(e)}
          />
          <button onClick={() => this.addGood()}>添加商品</button>
        </div>

        {/* 列表渲染 */}
        <ul>{goods}</ul>

        {/* 购物车 */}
        <Cart
          data={this.state.cart}
          addCount={this.addCount}
          minusCount={this.minusCount}
        />
      </div>
    )
  }
}
