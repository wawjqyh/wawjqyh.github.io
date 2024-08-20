# Promise/async/await

## 1 Promise

`resolve/reject` 只需要一个参数（或不包含任何参数），并且将忽略额外的参数

> 建议以 `Error` 对象 `reject`，`reject` 可以使用任何类型的参数。但是建议使用 `Error` 对象（或继承自 `Error` 的对象）

> `Promise` 对象的 ``state`` 和 `result` 属性都是内部的。我们无法直接访问它们。但我们可以对它们使用 `.then/.catch/.finally` 方法

**then**

```js
promise.then(
  function(result) {
    /* handle a successful result */
  },
  function(error) {
    /* handle an error */
  }
);
```

- `.then` 的第一个参数是一个函数，该函数将在 `promise resolved` 后运行并接收结果
- `.then` 的第二个参数也是一个函数，该函数将在 `promise rejected` 后运行并接收 `error`

**catch**

`.catch(f)` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式

**finally**

`finally` 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject

> 如果 promise 为 pending 状态，`then/catch/finally` 处理程序（handler）将等待它。否则，如果 promise 已经是 settled 状态，它们就会运行。我们可以根据需要，在 promise 上多次调用 `.then`。每次调用，我们都会在 “订阅列表” 中添加一个新的 “分析”，一个新的订阅函数

## 2 Promise 链

### 2.1 then

对 `promise.then` 的调用会返回了一个 `promise`，所以我们可以在其之上调用下一个 `.then`。

当处理程序`（handler）`返回一个值时，它将成为该 `promise` 的 `result`

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function(result) {
    alert(result); // 1
    return result * 2;
  })
  .then(function(result) {
    alert(result); // 2
    return result * 2;
  })
  .then(function(result) {
    alert(result); // 4
    return result * 2;
  });
```

### 2.2 返回 Promise

`.then(handler)` 中所使用的处理程序`（handler）`可以创建并返回一个 `promise`。

在这种情况下，其他的处理程序`（handler）`将等待它 `settled` 后再获得其结果`（result）`

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function(result) {
    alert(result); // 1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    alert(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    alert(result); // 4
  });
```

## 3 错误处理

### 3.1 隐式 `try...catch`

当一个 `promise` 被 `reject` 时，控制权将移交至最近的 `rejection` 处理程序（handler）

`Promise` 的执行者（executor）和 `promise` 的处理程序（handler）周围有一个 “隐式的 `try..catch`”。如果发生异常，它就会被捕获，并被视为 `rejection` 进行处理

两段段代码工作上完全相同：

```js
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert); // Error: Whoops!
```

> 链式调用中可以有多个 `catch`。`catch` 中也可以再次抛出错误，错误会在下一个最近的错误处理程序捕获

### 3.2 未处理的 rejection

> 未处理的 `rejection`，会导致脚本中止，并生成一个全局的 `error`

在浏览器中，我们可以使用 `unhandledrejection` 事件来捕获这类 `error`：

```js
window.addEventListener('unhandledrejection', function(event) {
  // 这个事件对象有两个特殊的属性：
  alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
  alert(event.reason); // Error: Whoops! - 未处理的 error 对象
});

new Promise(function() {
  throw new Error('Whoops!');
}); // 没有用来处理 error 的 catch
```

## 4 Promise API

### 4.1 `Promise.all`

`Promise.all` 接受一个 `promise` 数组作为参数（从技术上讲，它可以是任何可迭代的，但通常是一个数组）并返回一个新的 `promise`

结果数组中元素的顺序与其在源 `promise` 中的顺序相同

```js
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
]).then(alert); // 1,2,3
```

> 如果任意一个 `promise` 被 `reject`，由 `Promise.all` 返回的 `promise` 就会立即 `reject`，并且 `reject` 这个 `error`

`Promise.all` 参数数组中允许元素不为 `promise`，那么它将被 “按原样” 传递给结果数组

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),
  2,
  3
]).then(alert); // 1, 2, 3
```

### 4.2 Promise.allSettled

`Promise.allSettled` 等待所有的 `promise` 都被 `settle`，无论结果如何。结果数组具有：

- `{status:"fulfilled", value:result}` 对于成功的响应
- `{status:"rejected", reason:error}` 对于 error

### 4.3 `Promise.race`

`Promise.race` 只等待第一个 settled 的 promise 并获取其结果（或 error）

```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

### 4.4 `Promise.resolve`

`Promise.resolve(value)` 用结果 `value` 创建一个 `resolved` 的 `promise`

如同：

```js
let promise = new Promise(resolve => resolve(value));
```

一般用来做兼容操作，某些函数需要保证返回 `promise`。如果需要返回某个已知的值，就可以使用 `Promise.resolve` 来包装

### 4.5 `Promise.reject`

`Promise.reject(error)` 用 `error` 创建一个 `rejected` 的 `promise`

## 5 微任务

异步任务需要适当的管理。为此，ECMA 标准规定了一个内部队列 `PromiseJobs`，通常被称为 “微任务队列（microtask queue）”（ES8 术语）

- 队列（queue）是先进先出的：首先进入队列的任务会首先运行
- 只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务

当一个 `promise` 准备就绪时，它的 `.then/catch/finally` 处理程序（handler）就会被放入队列中：但是它们不会立即被执行。当 JavaScript 引擎执行完当前的代码，它会从队列中获取任务并执行它

## 6 async await

### 6.1 await

函数总是返回一个 `promise`。其他值将自动被包装在一个 `resolved` 的 `promise` 中

```js
async function f() {
  return 1;
}

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

### 6.1 错误处理

如果一个 `promise` 正常 `resolve`，`await promise` 返回的就是其结果。但是如果 `promise` 被 `reject`，它将 `throw` 这个 `error`，就像在这一行有一个 `throw` 语句那样

```js
// 两段代码效果是一样的
async function f() {
  await Promise.reject(new Error("Whoops!"));
}

async function f() {
  throw new Error("Whoops!");
}
```
