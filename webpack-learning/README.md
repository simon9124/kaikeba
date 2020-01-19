# loaders

- file-loader - 静态资源处理（jpg/jpeg/png/gif/svg/webp/csv/excel...）
- url-loader - 转换成 base64 位码
- sass-loader & css-loader & style-loader - 样式文件处理
- postcss-loader - 自动添加不同浏览器的 css3 前缀

# plugin

- HtmlWebpackPlugin - 打包后，生成 html 文件
- clean-webpack-plugin - 打包前，自动清理 dist 文件夹
- mini-css-extract-plugin - 抽离 css 文件

# devServer

- port - 端口号
- contentBase - 启动目录
- open - 自动在浏览器打开
- hot - 启动 hmr，更新保存代码后，浏览器不用刷新即可自动渲染（抽离 css 后无效）
- hotOnly - 即便 HMR 不⽣效，浏览器也不⾃动刷新
- proxy - 服务器代理

# sourceMap

- 源代码与打包后的对应关系，dev 模式自动开启

# babel

- 将 es6(或更高) 语法转成 es5，以适配浏览器
- babel-loader、@babel/core、@babel/preset-env
- @babel/polyfill - 按需加载（全局变量），适合做项目
- @babel/plugin-transform-runtime - 按需加载（闭包），适合组件库/工具库

# 集成 react

- react、react-dom、@babel/preset-react

# 集成 vue

- vue、vue-loader、vue-template-compiler

# 懒加载

- @babel/plugin-syntax-dynamic-import -D
