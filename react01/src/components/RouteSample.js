import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { login, logout } from '../store/user.redux'
import store from '../store'

function App(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/foo">foo</Link>
        </li>
      </ul>

      {/* 路由配置 - exact确切匹配 */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detail/:course" component={Detail} />
        {/* <Route path="/about" component={About} /> */}
        <PrivateRoute path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

// 路由守卫：定义可以验证的高阶组件
@connect(state => ({ isLogin: state.user.isLogin }))
// function PrivateRoute({ component: Component, ...rest }) {
class PrivateRoute extends Component {
  render() {
    const { isLogin, component: Component, ...rest } = this.props
    // render和component，二选一
    return (
      <Route
        {...rest}
        render={props =>
          // auth.isLogin ? (
          this.props.isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location.pathname }
              }}
            />
          )
        }
      />
    )
  }
}

// 接口
// const auth = {
//   isLogin: false,
//   login(cb) {
//     this.isLogin = true
//     setTimeout(cb, 300)
//   },
//   logout(cb) {
//     this.isLogin = false
//     setTimeout(cb, 300)
//   }
// }

// 登录组件
@connect(
  state => ({ isLogin: state.user.isLogin }),
  { login }
)
class Login extends Component {
  // 如果用auth接口
  // state = { isLogin: false }
  // login = () => {
  //   auth.login(() => {
  //     this.setState({ isLogin: true })
  //   })
  // }

  render() {
    const from = this.props.location.state.from || '/'
    // if (this.state.isLogin) {
    if (this.props.isLogin) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <p>请先登录！</p>
        {/* <button onClick={this.login}>登录</button> */}
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

// 404页面不匹配path -> 需要在路由外层添加Switch -> 用Switch就不用exact了
function NoMatch() {
  return <div>404</div>
}

function Home({ location }) {
  console.log('接收参数：', location.state)

  return (
    <div>
      <ul>
        <li>
          <Link to="/detail/web">Web</Link>
        </li>
        <li>
          <Link to="/detail/python">Python</Link>
        </li>
        <li>
          <Link to="/detail/java">Java</Link>
        </li>
      </ul>
    </div>
  )
}

function Detail({ match, history, location }) {
  // match：参数获取等路由信息
  // history：导航
  // location：url定位
  console.log(match, history, location)

  return (
    <div>
      {/* 获取参数 */}
      {match.params.course}
      {/* 命令式导航 */}
      <button onClick={history.goBack}>后退</button>
      <button onClick={() => history.push('/')}>回到首页</button>
      {/* 传参方式 */}
      <button
        onClick={() => history.push({ pathname: '/', state: { foo: 'bar' } })}
      >
        回到首页（接收参数）
      </button>
    </div>
  )
}

@connect(
  state => ({ isLogin: state.user.isLogin }),
  { logout }
)
class About extends Component {
  // 如果用auth接口
  // logout = () => {
  //   auth.logout()
  // }
  render() {
    return (
      <div>
        {/* 显示用户信息和订单 */}
        <h2>用户中心</h2>
        <div>
          <Link to="/about/me">个人信息</Link>
          <Link to="/about/order">订单</Link>
        </div>

        <Switch>
          <Route path="/about/me" component={() => <div>我的信息</div>} />
          <Route path="/about/order" component={() => <div>订单</div>} />

          {/* 重定向 -> 点击about就默认进入“我的信息” */}
          <Redirect to="/about/me" />
        </Switch>

        {/* 登出 */}
        {/* <button onClick={this.logout}> */}
        <button onClick={this.props.logout}>
          <Link to="/about/me">注销</Link>
        </button>
      </div>
    )
  }
}

export default class RouteSample extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
  }
}
