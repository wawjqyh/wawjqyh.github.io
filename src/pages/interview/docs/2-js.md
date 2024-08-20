# JavaScript

## 1 原型链

### 1.1 什么是原型

- 每一个 JavaScript 对象会有一个特殊的隐藏属性 `[[Prototype]]`，该对象被称为“原型”，每一个对象都会从原型"继承"属性
- `__proto__` 是 `[[Prototype]]` 的因历史原因而留下来的 `getter/setter`
- `F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[Prototype]]` 赋值
- 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止

```js
function Person() {}

let p = new Person();

console.log(Person.prototype.constructor === Person); // true
console.log(p.__proto__ === Person.prototype); // true
```

### 1.2 什么是原型链

- 每一个 JavaScript 对象会有一个特殊的隐藏属性 `[[Prototype]]`，该对象被称为“原型”
- 而原型也有它自己的原型
- 原型的原型这条关系链，就叫原型链

```js
// 例如一个数组实例
let arr = [];

arr.__proto__ === Array.prototype;

// 而且
Array.prototype.__proto__ === Object.prototype;

// 所以
arr.__proto__.__proto__ === Object.prototype;
```

### 题目：解释一下原型链

## 2 继承

### 2.1 组合式继承

```js
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);

  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

console.log(child1);
```

**组合继承最大的缺点是会调用两次父构造函数**

- 一次是设置子类型实例的原型的时候：`Child.prototype = new Parent();`
- 一次在创建子类型实例的时候： `var child1 = new Child('kevin', '18');`

> 打印 `child1` 对象，我们会发现 `Child.prototype` 和 `child1` 都有一个属性为 `colors`，属性值为 `['red', 'blue', 'green']`

### 2.2 寄生组合式继承

比较完美的继承方式

```js
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 关键的三步
var F = function() {};
F.prototype = Parent.prototype;
Child.prototype = new F();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

console.log(child1);
```

> 这种方式的高效率体现它只调用了一次 `Parent` 构造函数，并且因此避免了在 `Parent.prototype` 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 `instanceof` 和 `isPrototypeOf`

**封装这个继承方法：**

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```

## 3 作用域

### 3.1 作用域分类

**什么是作用域：**

作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期

执行上下文中，有一个变量环境，和词法环境。而作用域就是就是通过变量环境来实现的，变量环境存放当前作用域的变量

**JavaScript 是如何支持块级作用域的：**

词法环境存放 let const 声明的变量，当用到一个变量的时候会先从词法环境查找，然后再查找变量环境

**作用域分类：**

- 全局作用域
- 函数作用域
- 块级作用域

**var 和 let 的区别：**

1. `var` 没有块级作用域
1. `var` 允许重复声明，`let` 重复声明会报错
1. `var` 存在变量提升，也就是变量声明会提到函数开头 (可以先使用，再声明)。`let` 不存在变量提升

### 3.2 作用域链

1. 在每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，我们把这个外部引用称为 `outer`
1. 当访问一个变量的时候，会先从自己的执行上下文中查找，如果没有查找到就去指向的外部执行上下文的变量环境中查找
1. 外部的变量环境也有一个 outer 引用，这个就是作用域链

### 题目：谈谈你对作用域的理解

## 4 闭包

### 4.1 什么是闭包

> **闭包** 是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在 `JavaScript` 中，所有函数都是天生闭包的

### 4.2 闭包的原理

1. 执行一个函数的时候，会先进行编译，创建一个空的执行上下文
1. 执行上下文里面有一个变量环境，是保存当前作用域的变量的
1. 编译遇到里面有函数的时候，会进行一次快速的词法扫描
1. 发现里面有用到外部变量，就会创建一个闭包到堆空间 (解释堆空间和栈空间)
1. 变量环境有对这个闭包的引用
1. 非闭包的变量是直接存在变量环境的，而闭包的变量是存放在堆空间的
1. 所以即使外部函数执行完了，内部还是还保留了对这个包的引用

### 题目：闭包的作用和原理

## 5 变量提升

### 5.1 什么是变量提升

所谓的变量提升，是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。变量被提升后，会给变量设置默认值，这个默认值就是我们熟悉的 undefined

**var 和 let 的区别：**

1. `var` 没有块级作用域
1. `var` 允许重复声明，`let` 重复声明会报错
1. `var` 存在变量提升，也就是变量声明会提到函数开头 (可以先使用，再声明)。`let` 不存在变量提升

**为什么会有变量提升：**

1. 一段 js 运行前会进行编译，这时会创建一个执行上下文
2. 执行上下文里面有一个变量环境，它是一个对象，保存当前作用域的变量
3. 编译的时候，变量就会在里面声明，值是 undefined

### 题目：谈谈变量提升

## 6 this 的指向

### 6.1 this 的指向

`this` 始终是点符号 . 前面的对象

### 6.2 this 指向的原理

**Reference Type：**

`Reference Type` 是 `ECMA` 中的一个“规范类型”。我们不能直接使用它，但它被用在 `JavaScript` 语言内部

`Reference Type` 的值是一个三个值的组合 (base, name, strict)，其中：

1. `base` 是对象
1. `name` 是属性名
1. `strict` 在 `use strict` 模式下为 `true`

**this 是如何传递的：**

1. 点 `.` 返回的不是一个函数，而是一个特殊的 `Reference Type` 的值
2. `Reference Type` 是一个特殊的“中间人”内部类型，目的是从 `.` 传递信息给 `()` 调用
3. 赋值 `hi = user.hi` 等其他的操作，都会将 `Reference Type` 作为一个整体丢弃掉
4. 而会取 `user.hi`（一个函数）的值并继续传递。所以任何后续操作都“丢失”了 `this`

## 7 立即执行函数

**什么是立即执行函数：**

就是声明后一个函数表达式然后立即执行它

```js
(function() {})();
```

在 es5 中没有块级的作用域。立即执行函数相对于是模拟了块级作用域

### 题目：什么是立即执行函数

## 8 instanceof 原理

### 8.1 知识点

**1. 首先判断目标对象是否有 Symbol.hasInstance**

如果有 `Symbol.hasInstance`，就调用这个方法判断

```js
// 设置 instanceOf 检查
// 并假设具有 canEat 属性的都是 animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true：Animal[Symbol.hasInstance](obj) 被调用
```

**2. 如果没有 Symbol.hasInstance 就逐步对比原型链**

大多数 `class` 没有 `Symbol.hasInstance`。在这种情况下，标准的逻辑是：使用 `obj instanceOf Class` 检查 `Class.prototype` 是否等于 `obj` 的原型链中的原型之一

```js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?

// 如果任意一个的答案为 true，则返回 true
// 否则，如果我们已经检查到了原型链的尾端，则返回 false
```

## 9 bind 实现

### 9.1 bind 是什么

```js
let bound = func.bind(context, [arg1], [arg2], ...);
```

`bind()` 方法会创建一个新函数。当这个新函数被调用时，`bind()` 的第一个参数将作为它运行时的 `this`，之后的一序列参数将会在传递的实参前传入作为它的参数

### 9.2 bind 实现

```js
Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function() {};

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
```

### 题目：bind 的实现

## 10 apply 和 call

### 10.1 知识点

`apply` 和 `call` 都能够改变函数执行时的上下文，即传递 `this`

**例子：**

```js
function say(phrase) {
  alert(this.name + ': ' + phrase);
}

let user = { name: 'John' };

// user 成为 this，"Hello" 成为第一个参数
say.call(user, 'Hello'); // John: Hello
```

**call 和 apply 的区别：**

`call` 和 `apply` 之间唯一的语法区别是，`call` 期望一个参数列表，而 `apply` 期望一个包含这些参数的类数组对象 (arguments)

## 11 柯里化

### 11.1 柯里化相关概念

[柯里化相关概念](/js/others)

### 11.2 题目：实现 add(1)(2)(3)

**固定参数个数：**

```js
const curry = (fn, ...args) =>
  // 函数的参数个数可以直接通过函数数的.length属性来访问
  // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数，否则继续科里化
  args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args);
```

**参数个数不固定：**

```js
function add(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }

  return sum;
}

function currying(fn) {
  let sum = 0;

  let curringFn = function(...args) {
    let val = fn(...args);
    sum += val;
    return curringFn;
  };

  curringFn.toString = function() {
    return sum;
  };

  return curringFn;
}

let sum = currying(add);

console.log(sum(1)(2)(3)(4, 5).toString());
```

## 12 v8 垃圾回收机制

### 12.1 垃圾回收机制

js 内存空间分为代码空间、栈空间、堆空间

**栈空间：**

1. 执行 js 代码的时候，首先会创建一个全局的执行上下文
1. 当遇到函数的情况时，会为其创建一个函数执行上下文(Context)环境
1. 执行上下文会被添加到调用堆栈的栈顶
1. 执行上下文中的变量对象包含了它的参数和所有变量
1. 当该函数执行完毕后，对应的执行上下文从栈顶弹出，函数的作用域会随之销毁，其包含的所有变量也会统一释放并被自动回收

**堆空间：**

1. 对象是引用类型，存在堆空间中，变量对它只是引用
1. 就是说一个变量它指向一个对象，这个变量会在执行上下文的变量对象中，但是这个对象不在栈空间，而是在堆空间
1. 从根节点出发(window)对象，遍历一遍标记对象是否被引用 (这一步包含很多操作)
1. 遍历完后，没有被引用的对象就会被回收

- 垃圾回收器会在内部构建一个根列表，用于从根节点出发去寻找那些可以被访问到的变量。比如在 `JavaScript` 中，`window` 全局对象可以看成一个根节点
- 然后，垃圾回收器从所有根节点出发，遍历其可以访问到的子节点，并将其标记为活动的，根节点不能到达的地方即为非活动的，将会被视为垃圾
- 最后，垃圾回收器将会释放所有非活动的内存块，并将其归还给操作系统

### 12.2 相关概念

**内存结构：**

- **新生代(new_space)：**大多数的对象开始都会被分配在这里，这个区域相对较小但是垃圾回收特别频繁，该区域被分为两半，一半用来分配内存，另一半用于在垃圾回收时将需要保留的对象复制过来
- **老生代(old_space)：**新生代中的对象在存活一段时间后就会被转移到老生代内存区，相对于新生代该内存区域的垃圾回收频率较低。老生代又分为老生代指针区和老生代数据区，前者包含大多数可能存在指向其他对象的指针的对象，后者只保存原始数据对象，这些对象没有指向其他对象的指针
- **大对象区(large_object_space)：**存放体积超越其他区域大小的对象，每个对象都会有自己的内存，垃圾回收不会移动大对象区
- **代码区(code_space)：**代码对象，会被分配在这里，唯一拥有执行权限的内存区域
- **map 区(map_space)：**存放 `Cell` 和 `Map`，每个区域都是存放相同大小的元素

### 12.3 如何避免内存泄露

1. **尽可能少的创建全局变量：** 全局变量不会释放，除非手动设置为 null
2. **手动清除定时器：** 比如 `setInterval`，不清除会一直执行
3. **少用闭包：** 注意清除引用
4. **清除 DOM 的引用：** 比如 `let ele = document.getElementById('button')`，如果 `ele` 为清除，那么即使节点在 html 中被删除，也还会留在内存中
5. **弱引用：** WeakMap、WeakSet

### 题目：v8 垃圾回收机制

## 13 浮点数精度

### 13.1 为什么会精度丢失

在内部，数字是以 64 位格式 IEEE-754 表示的，所以正好有 64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置（对于整数，它们为零），而 1 位用于符号

一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。二进制形式中 0.1，0.2 这样的小数是无限循环小数

使用二进制数字系统无法 精确 存储 0.1 或 0.2，就像没有办法将三分之一存储为十进制小数一样

### 13.2 题目：0.1+0.2 为什么不等于 0.3

## 14 new 操作符

### 14.1 概念

**new 是什么：**

new 运算符创建一个 用户定义的对象类型 或 具有构造函数的内置对象类型 的实例

**new 操作符具体做了什么：**

1. 创建了一个新对象
2. 让新对象能够访问构造函数里面的属性
3. 能够访问构造函数 `prototype` 中的属性

**实现一个方法模拟 new 的功能：**

```js
function objectFactory(Constructor, ...args) {
  let obj = new Object();

  obj.__proto__ = Constructor.prototype;

  let ret = Constructor.call(obj, ...args);

  // 构造函数的特性
  // 如果构造函数返回了一个对象，那么 new 返回的就是这个对象
  // 如果是原始值，那么就忽略，返回一个实例化的对象
  return typeof ret === 'object' ? ret : obj;
}
```

### 题目：new 操作符具体做了什么

## 15 事件循环机制

### 15.1 知识点

**同步任务和异步任务：**

1. JS 分为同步任务和异步任务
1. 同步任务都在主线程上执行，形成一个执行栈
1. 主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件
1. 一旦执行栈中的所有同步任务执行完毕（此时 `JS` 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行

**事件循环机制：**

1. 主线程运行时会产生执行栈
1. 栈中的代码调用某些 `api` 时，它们会在事件队列中添加各种事件（当满足触发条件后，如 `ajax` 请求完毕）
1. 而栈中的代码执行完毕，就会读取事件队列中的事件，去执行那些回调
1. 如此循环
1. 注意，总是要等待栈中的代码执行完毕后才会去读取事件队列中的事件

**微任务和宏任务：**

- `macrotask`（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
  1. 每一个 `task` 会从头到尾将这个任务执行完毕，不会执行其它
  1. 浏览器为了能够使得 `JS` 内部 `task` 与 `DOM` 任务能够有序的执行，会在一个 `task` 执行结束后，在下一个 `task` 执行开始前，对页面进行重新渲染
- `microtask`（又称为微任务），可以理解是在当前 `task` 执行结束后立即执行的任务
  1. 也就是说，在当前 `task` 任务后，下一个 `task` 之前，在渲染之前，会执行 **所有的** 微任务
  1. 所以它的响应速度相比 `setTimeout`（`setTimeout` 是 `task`）会更快，因为无需等渲染

> 也就是说，在某一个 `macrotask` 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）

**分别很么样的场景会形成 `macrotask` 和 `microtask`：**

- `macrotask`：主代码块，`setTimeout`，`setInterval` 等（可以看到，事件队列中的每一个事件都是一个 `macrotask`）
- `microtask`：`Promise`，`process.nextTick`，`MutationObserver`

宏任务：

- 渲染事件（如解析 DOM、计算布局、绘制）
- 用户交互事件（如鼠标点击、滚动页面、放大缩小等）
- JavaScript 脚本执行事件
- 网络请求完成、文件读写完成事件

### 题目：谈下事件循环机制

## 16 promise 原理

### 16.1 Promise 知识点

[Promise 相关知识点](/js/promise)

### 16.2 实现 promise

```js
class MyPromise {
  constructor(fn) {
    this.state = 'pending'; // padding/fulfilled/rejected
    this.value = null;
    this.resolveCbs = [];
    this.rejectCbs = [];

    let resolve = value => {
      if (this.state !== 'pending') return;

      this.state = 'fulfilled';
      this.value = value;

      this.resolveCbs.forEach(cb => cb(this.value));
    };

    let reject = value => {
      if (this.state !== 'pending') return;

      this.state = 'rejected';
      this.value = value;

      this.rejectCbs.forEach(cb => cb(this.value));
    };

    fn(resolve, reject);
  }

  then(fnResolve, fnReject) {
    return new MyPromise((resolve, reject) => {
      this.resolveCbs.push(value => {
        if (typeof fnResolve !== 'function') fnResolve = value => value;

        let res = fnResolve(value);
        res instanceof MyPromise ? res.then(resolve, reject) : resolve(res);
      });

      this.rejectCbs.push(value => {
        if (typeof fnReject !== 'function')
          fnReject = value => {
            throw value;
          };

        let res = fnReject(value);
        res instanceof MyPromise ? res.then(resolve, reject) : reject(res);
      });
    });
  }

  catch(fnReject) {
    this.then(null, fnReject);
  }

  finally(fn) {
    // finally 的特点：总会执行，并且也是返回 Promise，但向下会传递的是上一次的值而不是 finally 中的值
    return this.then(
      res => {
        return MyPromise.resolve(fn()).then(() => res);
      },
      err => {
        return MyPromise.resolve(fn()).then(null, () => {
          throw err;
        });
      }
    );
  }
}

MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
};

MyPromise.reject = function(value) {
  return new MyPromise((resolve, reject) => {
    reject(value);
  }).then(null, value);
};

MyPromise.all = function(promises) {
  // 接受一个数组，只有都成功才算成功，一个错就异常
  return new MyPromise((resolve, reject) => {
    let arr = []; // 接受每个 promise 的返回值，和 promises 一一对应，顺序一致
    let count = 0;

    promises.forEach((p, i) => {
      if (p instanceof MyPromise) {
        p.then(
          res => {
            arr[i] = res;
            count++;
            if (count >= promises.length) resolve(arr);
          },
          err => {
            reject(err);
          }
        );
      } else {
        arr[i] = p;
        count++;
        if (count >= promises.length) resolve(arr);
      }
    });
  });
};

MyPromise.race = function(promises) {
  // 接受一个数组，最先返回成功就成功，最先失败就失败
  return new MyPromise((resolve, reject) => {
    promises.forEach(p => {
      if (p instanceof Promise) {
        p.then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
      } else {
        resolve(p);
      }
    });
  });
};
```

### 16.2 题目：实现一个 promise

## 17 generator 原理

### 题目：说下 generator 原理
