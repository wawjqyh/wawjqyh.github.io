# 错误处理

## 1 try catch

### 1.1 相关概念

> `try..catch` 仅对运行时的 `error` 有效

要使得 `try..catch` 能工作，代码必须是可执行的。换句话说，它必须是有效的 JavaScript 代码。如果代码包含语法错误，那么 `try..catch` 将无法正常工作

在读取阶段发生的错误被称为“解析时间（parse-time）”错误，并且无法恢复（从该代码内部）。这是因为引擎无法理解该代码

所以，`try..catch` 只能处理有效代码中出现的错误。这类错误被称为“运行时的错误（runtime errors）”，有时被称为“异常（exceptions）”

> `try..catch` 同步工作，例如回调函数中的异常不会被捕获

### 1.2 Error 对象

发生错误时，JavaScript 生成一个包含有关其详细信息的对象。然后将该对象作为参数传递给 `catch`

`error` 对象主要的属性：

- `name` Error 名称。例如，对于一个未定义的变量，名称是 "ReferenceError"
- `message` 关于 error 的详细文字描述
- `stack` 当前的调用栈：用于调试目的的一个字符串，其中包含有关导致 error 的嵌套调用序列的信息

### 1.3 抛出自定义的 error

throw 操作符会生成一个 error 对象

```js
throw <error object>
```

> 技术上讲，我们可以将任何东西用作 `error` 对象。甚至可以是一个原始类型数据，例如数字或字符串，但最好使用对象，最好使用具有 `name` 和 `message` 属性的对象（某种程度上保持与内建 `error` 的兼容性）

> JavaScript 中有很多内建的标准 `error` 的构造器：`Error，SyntaxError，ReferenceError，TypeError` 等。我们也可以使用它们来创建 `error` 对象

对于内建的 error（不是对于其他任何对象，仅仅是对于 error），name 属性刚好就是构造器的名字。message 则来自于参数（argument）

```js
let error = new Error('Things happen o_O');

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

### 1.4 `try…catch…finally`

```js
try {
  //  ... 尝试执行的代码 ...
} catch (e) {
  //  ... 处理 error ...
} finally {
  //  ... 总是会执行的代码 ...
}
```

如果 try 里面有 return，也会在 return 前先执行 finally 中的代码

```js
function func() {
  try {
    return 1;
  } catch (e) {
    /* ... */
  } finally {
    alert('finally');
  }
}

alert(func()); // 先执行 finally 中的 alert，然后执行这个 alert
```

### 1.4 全局 catch

- `Node.JS` 有 `process.on("uncaughtException")`
- 在浏览器中，有 `window.onerror` 属性，该函数将在发生未捕获的 `error` 时执行

```js
window.onerror = function(message, url, line, col, error) {
  // ...
};
```

- `message` Error 信息
- `url` 发生 error 的脚本的 URL
- `line，col` 发生 error 处的代码的行号和列号
- `error` Error 对象

> 全局错误处理程序 `window.onerror` 的作用通常不是恢复脚本的执行，它只能捕获错误，它的作用是将错误信息发送给开发者

## 2 自定义 Error

### 2.1 扩展 Error

当我们在开发某些东西时，经常会需要我们自己的 `error` 类来反映在我们的任务中可能出错的特定任务

对于网络操作中的 `error`，我们需要 `HttpError`，对于数据库操作中的 `error`，我们需要 `DbError`，对于搜索操作中的 `error`，我们需要 `NotFoundError`，等等

JavaScript 允许将 `throw` 与任何参数一起使用，所以从技术上讲，我们自定义的 `error` 不需要从 `Error` 中继承。但是，如果我们继承，那么就可以使用 `obj instanceof Error` 来识别 `error` 对象

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = 'ValidationError'; // (2)
  }
}

function test() {
  throw new ValidationError('Whoops!');
}

try {
  test();
} catch (err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // 一个嵌套调用的列表，每个调用都有对应的行号
}
```
