// 注入babel插件
const {
  injectBabelPlugin
} = require('react-app-rewired')

// 导出
module.exports = function override(config, env) {
  // antd按需加载
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }], config)

  // 添加装饰器能力
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {
    'legacy': true
  }], config)

  return config
}