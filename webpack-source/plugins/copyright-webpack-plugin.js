class CopyrightWebpackPlugin {
  constructor(option) {
    // console.log('plugin开始')
    // console.log(option)
  }
  apply(compiler) {
    // console.log(compiler)
    // console.log(compiler.hooks)

    /* compile钩子： */
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', compilation => {
      console.log('触发compile钩子')
    })
    debugger
    /* emit钩子：资源文件已经打包到目路时触发 */
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, callback) => {
        // console.log(compilation.assets)
        // 添加一个copyright.txt文件
        compilation.assets['copyright.txt'] = {
          source: function() {
            return 'hello copyright !'
          }, // 定义文件的内容
          size: function() {
            return 30
          } //定义文件内大小
        }
        callback()
      }
    )
  }
}

module.exports = CopyrightWebpackPlugin
