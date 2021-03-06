function* g() {
  yield 'a'
  yield 'b'
  yield 'c'
  return 'ending'
  // yield 'd'
}

// 返回迭代器Iterator
const gen = g()
// console.log(g())

// 返回结果对象{ value: 'a', done: false } -> value是yield后面表达式的结果
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

/*
  递归执行生成器
*/
function next() {
  // 启动实例
  let { value, done } = gen.next()
  // 依次打印
  console.log(value)
  // 直到迭代完成
  if (!done) {
    next()
  }
}
// next()

/* 
  传值
*/
function* say() {
  let a = yield '1'
  console.log(a)
  let b = yield '2'
  console.log(b)
}

// 返回迭代器
let it = say()

// console.log(it.next())
// it.next()仅仅执行到下一次yield，就停止了
// 输出{ value: '1', done: false }
// ****a的值非该返回值，a的值取决于下次next的传参

// console.log(it.next('我是被传进来的1'))
// 输出'我是被传进来的1' -> 赋值给a
// 输出{ value: '2', done: false }

// console.log(it.next('我是被传进来的2'))
// 输出'我是被传进来的2' -> 赋值给b
// 输出{ value: undefined, done: true }

/*
  结合Promise
*/
function* r(num) {
  const r1 = yield compute(num)
  yield compute(r1)
}

// compute为异步操作，结合Promise使用可以轻松实现异步操作队列（顺序执行2个Promise）
function compute(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ret = num * num
      // 输出处理结果
      console.log(ret)
      // 操作成功
      resolve(ret)
    }, 1000)
  })
}

// 不使用递归函数
let it2 = r(2)
//  {value:Promise,done:false}
// it2.next().value.then(num => {
//   it2.next(num)
// })

// 使用递归函数 -> 可处理Promise的next
function next2(data) {
  // 启动
  let { value, done } = it2.next(data)
  if (!done) {
    value.then(num => {
      next2(num)
    })
  }
}
next2()
