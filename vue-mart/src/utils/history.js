// 模拟历史纪录的堆栈
const History = {
  _history: [],
  install(Vue) {
    // 提供Vue插件所需安装方法
    Object.defineProperty(Vue.prototype, '$routerHistory', {
      get() {
        return History
      }
    })
  },
  // 入栈
  push(path) {
    this._history.push(path)
  },
  // 出栈
  pop() {
    this._history.pop()
  },
  // 判断能否后退
  canBack() {
    return this._history.length > 1
  }
}

export default History