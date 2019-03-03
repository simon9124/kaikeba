export default {
  /*
    config里的路径，是相对于pages的，umi里原本约定的路由将失效 
  */
  routes: [
    { path: '/', component: './index' },
    { path: '/goods', component: './goods' },
    {
      path: '/about',
      component: './about',
      // 路由守卫：相对于根目录，后缀名不能省略
      Routes: ['./routes/PrivateRoute.js']
    },
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        { path: '/users/', component: './users/index' },
        { path: '/users/:id', component: './users/$id' }
      ]
    },
    { path: '/login', component: './login' },
    { component: './notfound' }
  ],
  // 引入antd & dva
  plugins: [['umi-plugin-react', { antd: true, dva: true }]]
}
