import axios from 'axios'

// api
function getGoods() {
  return axios.get('/api/goods')
}

// 存放模拟数据
export default {
  // model的命令空间，区分多个model
  namespace: 'goods',
  // 初始状态 （state必须有）
  state: [
    // { title: 'web全栈' }, { title: 'java架构师' }
  ],
  // 异步操作
  effects: {
    *getList(action, { call, put }) {
      const res = yield call(getGoods)
      // 在export default里面是，type不需要命名空间
      yield put({ type: 'initGoods', payload: res.data.result })
    }
  },
  reducers: {
    // 初始化状态
    initGoods(state, action) {
      return action.payload
    },
    // 更新状态
    addGood(state, action) {
      return [...state, { title: action.payload.title }]
    }
  }
}
