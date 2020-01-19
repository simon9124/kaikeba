console.log('hello world')

/* 自己编写一个Loader */
// https://webpack.js.org/api/loaders/
// loader - 声明式函数（不能用箭头函数，因为该函数中要用到this）
// this - 包含loader里面的所有内容
// souce - 文件内容
// this.query：options里面的参数对象
// this.callback：处理options里返回多个信息
// this.async：处理异步操作（返回值必须是String或Buffer，需结合callback使用）
// loader-utils - 更好的管理参数，loaderUtils.getOptions(this)
