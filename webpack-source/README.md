# 自己编写一个 Loader

- https:-webpack.js.org/api/loaders/
- loader：声明式函数（不能用箭头函数，因为该函数中要用到 this）
- this：包含 loader 里面的所有内容
- souce：文件内容
- this.query：options 里面的参数对象
- this.callback：处理 options 里返回多个信息
- this.async：处理 异步操作（返回值必须是 String 或 Buffer，需结合 callback 使用）
- loader-utils：更好的管理参数，loaderUtils.getOptions(this)
- resolveLoader：配置 loader 的默认文件路径

# 自己编写一个 Plugins

- plugin：是一个 class
- constructor(option){}：option 是参数
- apply(compiler){}
- compiler.hooks.compile.tap
- compiler.hooks.emit.tapAsync：资源文件已经打包到目路时触发的钩子

# script - debug

- debugger
