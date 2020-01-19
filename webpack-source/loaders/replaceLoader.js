const loaderUtils = require('loader-utils')

module.exports = function(source) {
  // console.log(this.query) // options里面的参数对象
  // console.log(source) // souce就是文件内容

  /* this.query */
  const options = loaderUtils.getOptions(this)
  // console.log(options)
  // return source.replace('hello world', options.name)

  /* this.callback */
  // const result = source.replace('hello world', options.name)
  // this.callback(null, result)

  /* this.async */
  // 定义一个异步处理，高速webpack这个loader里有异步事件，callback就是this.callback
  const callback = this.async()
  setTimeout(() => {
    const result = source.replace('hello world', options.name)
    callback(null, result)
  }, 1000)
}
