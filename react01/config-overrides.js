// 注入babel插件
const {
  injectBabelPlugin
} = require('react-app-rewired')

// 导出
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }], config)
  return config
}