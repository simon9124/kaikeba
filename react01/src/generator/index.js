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
  // 知道迭代完成
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

// 输出{ value: '1', done: false }
// a的值非该返回值，而是下次next参数
// it.next()仅仅执行到下一次yield，就停止了
console.log(it.next())

// 输出'我是呗传进来的1'
// 输出{ value: '2', done: false }
console.log(it.next('我是被传进来的1'))

// 输出'我是呗传进来的2'
// 输出{ value: undefined, done: true }
console.log(it.next('我是被传进来的2'))
