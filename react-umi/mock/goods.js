let data = [{ title: 'web全栈' }, { title: 'java架构师' }]

// 模拟接口
export default {
  // get后面记得加空格
  'get /api/goods': function(req, res) {
    setTimeout(() => {
      res.json({ result: data })
    }, 1250)
  }
}
