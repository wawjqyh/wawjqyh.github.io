# 杂项

## 1 Proxy

### 1.1 概念

一个 Proxy 对象包装另一个对象并拦截诸如 读取/写入 属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。Proxy 被用于了许多库和某些浏览器框架

**语法：**

```js
let proxy = new Proxy(target, handler);
```

- `target` —— 是要包装的对象，可以是任何东西，包括函数
- `handler` —— 代理配置：带有捕捉器的对象

首先，创建一个没有任何捕捉器的代理 `Proxy`：

```js
let target = {};
let proxy = new Proxy(target, {}); // 空的 handler 对象

proxy.test = 5; // 写入 proxy 对象

alert(target.test); // 5，test 属性出现在了 target 中！
alert(proxy.test); // 5，我们也可以从 proxy 对象读取它

for (let key in proxy) alert(key); // test，迭代也正常工作
```

由于没有捕捉器，所有对 `proxy` 的操作都直接转发给了 `target`

没有任何捕捉器，`proxy` 是一个 `target` 的透明包装器

> `Proxy` 是一种特殊的对象。**它没有自己的属性**。如果 `handler` 为空，则透明地将操作转发给 `target`

对于对象的大多数操作，JavaScript 规范中有一个所谓的 “内部方法”，它描述了最底层的工作方式。例如 `[[Get]]`，用于读取属性的内部方法，`[[Set]]`，用于写入属性的内部方法，等等。

> 这些方法仅在规范中使用，我们不能直接通过方法名调用它们。`Proxy` 捕捉器会拦截这些方法的调用

**内部方法对应的捕捉器：**

| 内部方法                | Handler 方法               | 何时触发                                                                                              |
| ----------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `[[Get]]`               | `get`                      | 读取属性                                                                                              |
| `[[Set]]`               | `set`                      | 写入属性                                                                                              |
| `[[HasProperty]]`       | `has`                      | `in` 操作符                                                                                           |
| `[[Delete]]`            | `deleteProperty`           | `delete` 操作符                                                                                       |
| `[[Call]]`              | `apply`                    | 函数调用                                                                                              |
| `[[Construct]]`         | `construct`                | `new` 操作符                                                                                          |
| `[[GetPrototypeOf]]`    | `getPrototypeOf`           | `Object.getPrototypeOf`                                                                               |
| `[[SetPrototypeOf]]`    | `setPrototypeOf`           | `Object.setPrototypeOf`                                                                               |
| `[[IsExtensible]]`      | `isExtensible`             | `Object.isExtensible`                                                                                 |
| `[[PreventExtensions]]` | `preventExtensions`        | `Object.preventExtensions`                                                                            |
| `[[DefineOwnProperty]]` | `defineProperty`           | `Object.defineProperty`, `Object.defineProperties`                                                    |
| `[[GetOwnProperty]]`    | `getOwnPropertyDescriptor` | `Object.getOwnPropertyDescriptor`, `for..in`, `Object.keys/values/entries`                            |
| `[[OwnPropertyKeys]]`   | `ownKeys`                  | `Object.getOwnPropertyNames`, `Object.getOwnPropertySymbols`, `for..in`, `Object/keys/values/entries` |

**内部方法和捕捉器必须满足的条件，其中大多数用于返回值：**

- `[[Set]]` 如果值已成功写入，则必须返回 true，否则返回 false
- `[[Delete]]` 如果已成功删除该值，则必须返回 true，否则返回 false
- 应用于代理（proxy）对象的 `[[GetPrototypeOf]]`，必须返回与应用于被代理对象的 `[[GetPrototypeOf]]` 相同的值

### 1.2 get

**语法：**

```js
get(target, property, receiver);
```

**参数：**

- `target` —— 是目标对象，该对象被作为第一个参数传递给 `new Proxy`
- `property` —— 目标属性名
- `receiver` —— 如果目标属性是一个 `getter` 访问器属性，则 `receiver` 就是本次读取属性所在的 `this` 对象。通常这就是 `proxy` 对象本身

**创建一个对不存在的数组项返回 0 的数组：**

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 默认值
    }
  }
});

alert(numbers[1]); // 1
alert(numbers[123]); // 0（没有这个数组项）
```

### 1.3 set

**语法：**

```js
set(target, property, value, receiver);
```

**参数：**

- `target` —— 是目标对象，该对象被作为第一个参数传递给 new Proxy，
- `property` —— 目标属性名称，
- `value` —— 目标属性的值，
- `receiver` —— 与 get 捕捉器类似，仅与 setter 访问器属性相关

> 如果写入操作成功，`set` 捕捉器应该返回 `true`，否则返回 `false`（触发 TypeError）

**专门用于数字的数组：**

```js
let numbers = [];

numbers = new Proxy(numbers, {
  // (\*)
  set(target, prop, val) {
    // 拦截写入属性操作
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // 添加成功
numbers.push(2); // 添加成功
alert('Length is: ' + numbers.length); // 2

numbers.push('test'); // TypeError（proxy 的 'set' 返回 false）
```

### 1.4 ownKeys 和 getOwnPropertyDescriptor

`Object.keys`，`for..in` 循环和大多数其他遍历对象属性的方法都使用内部方法 `[[OwnPropertyKeys]]`（由 ownKeys 捕捉器拦截) 来获取属性列表。

这些方法在细节上有所不同：

- `Object.getOwnPropertyNames(obj)` 返回非 `Symbol` 键
- `Object.getOwnPropertySymbols(obj)` 返回 `Symbol` 键
- `Object.keys/values()` 返回带有 `enumerable` 标志的非 `Symbol` 键/值
- `for..in` 循环遍历所有带有 `enumerable` 标志的非 `Symbol` 键，以及原型对象的键

**示例，使用 `ownKeys` 捕捉器拦截 `for..in` 对 `user` 的遍历，并使用 `Object.keys` 和 `Object.values` 来跳过以下划线 `_` 开头的属性：**

```js
let user = {
  name: 'John',
  age: 30,
  _password: '***'
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "ownKeys" 过滤掉了 _password
for (let key in user) alert(key); // name，然后是 age

// 对这些方法的效果相同：
alert(Object.keys(user)); // name,age
alert(Object.values(user)); // John,30
```

### 1.5 has

`has` 捕捉器会拦截 `in` 调用

```js
has(target, property);
```

- `target` —— 是目标对象，被作为第一个参数传递给 `new Proxy`
- `property` —— 属性名称

有一个 `range` 对象，想使用 `in` 操作符来检查一个数字是否在 `range` 范围内，示例如下：

```js
let range = {
  start: 1,
  end: 10
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});

alert(5 in range); // true
alert(50 in range); // false
```

### 1.6 apply

**`apply(target, thisArg, args)` 捕捉器能使代理以函数的方式被调用：**

- `target` 是目标对象（在 JavaScript 中，函数就是一个对象）
- `thisArg` 是 `this` 的值
- `args` 是参数列表

```js
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 1 proxy 将“获取 length”的操作转发给目标对象

sayHi('John'); // Hello, John!（3 秒后）
```

## 2 Reflect

### 2.1 概念

`Reflect` 是一个内建对象，可简化 Proxy 的创建

前面所讲过的内部方法，例如 `[[Get]]` 和 `[[Set]]` 等，都只是规范性的，不能直接调用

`Reflect` 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装

| 操作                | Reflect 调用                        | 内部方法        |
| ------------------- | ----------------------------------- | --------------- |
| `obj[prop]`         | `Reflect.get(obj, prop)`            | `[[Get]]`       |
| `obj[prop] = value` | `Reflect.set(obj, prop, value)`     | `[[Set]]`       |
| `delete obj[prop]`  | `Reflect.deleteProperty(obj, prop)` | `[[Delete]]`    |
| `new F(value)`      | `Reflect.construct(F, value)`       | `[[Construct]]` |
| …                   | …                                   | …               |

**例如：**

```js
let user = {};

Reflect.set(user, 'name', 'John');

alert(user.name); // John
```

对于每个可被 `Proxy` 捕获的内部方法，在 `Reflect` 中都有一个对应的方法，其名称和参数与 `Proxy` 捕捉器相同

**示例，捕捉器 get 和 set 均透明地将 读取/写入 操作转发到对象，并显示一条消息：**

```js
let user = {
  name: 'John'
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    alert(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, val, receiver) {
    alert(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver);
  }
});

let name = user.name; // 显示 "GET name"
user.name = 'Pete'; // 显示 "SET name=Pete"
```

如果一个捕捉器想要将调用转发给对象，则只需使用相同的参数调用 `Reflect.<method>` 就足够了。

### 2.2 代理一个 getter

**实例：为什么 `Reflect.get` 更好，为什么 `get/set` 有第三个参数 `receiver`**

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop];
  }
});

alert(userProxy.name); // Guest
```

另一个对象 `admin` 从 `user` 继承后，我们可以观察到错误的行为：

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop]; // target = user
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin'
};

// 期望输出：Admin
alert(admin.name); // 输出：Guest
```

读取 `admin.name` 应该返回 "Admin"，而不是 "Guest"

问题实际上出在代理中。当我们读取 `admin.name` 时，由于 `admin` 对象自身没有对应的的属性，搜索将转到其原型，原型是 `userProxy`

为了解决这种情况，我们需要第三个参数 `receiver`。它保证将正确的 `this` 传递给 `getter`

如何把上下文传递给 `getter`？对于一个常规函数，我们可以使用 `call/apply`，但这是一个 `getter`，它不能被调用只能被访问

**`Reflect.get` 可以做到：**

```js
let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    // receiver = admin
    return Reflect.get(target, prop, receiver);
  }
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin'
};

alert(admin.name); // Admin
```

### 2.3 Proxy 的局限性

todo

### 2.4 私有字段

todo

## 3 Eval：执行代码字符串

```js
let value = eval('1+1');
alert(value); // 2
```

调用 `eval(code)` 会运行代码字符串，并返回最后一条语句的结果

- 在现代 `JavaScript` 编程中，很少使用它，通常也不需要使用它
- 可以访问外部局部变量。这被认为是一个不好的编程习惯
- 要在全局作用域中 `eval` 代码，可以使用 `window.eval(code)` 进行替代
- 此外，如果你的代码需要从外部作用域获取数据，请使用 `new Function`，并将数据作为参数传递给函数

## 4 柯里化（Currying）

### 4.1 概念

柯里化是一种函数的转换，它是指将一个函数从可调用的 `f(a, b, c)` 转换为可调用的 `f(a)(b)(c)`

柯里化不会调用函数。它只是对函数进行转换

```js
function curry(f) {
  // curry(f) 执行柯里化转换
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// 用法
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3
```

### 4.2 高级柯里化

> 只允许确定参数长度的函数，使用 `rest` 参数的函数，例如 `f(...args)`，不能以这种方式进行柯里化

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
```

用例：

```js
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
alert(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
alert(curriedSum(1)(2)(3)); // 6，全柯里化
```

### 4.3 柯里化的作用

可以轻松生成偏函数，(绑定了固定参数的函数)

```js
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
let sum5 = curriedSum(5); // 创建偏函数

console.log(sum5(2)); // 输出 5+2
console.log(sum5(3)); // 输出 5+3
```

### 4.4 无限累加

实现一个 sum 方法

```js
sum(1, 2, 3) == 6;
sum(1)(2, 3) == 6;
sum(1)(2,3)...(x) == 1 + 2 + 3 + ... + x
```

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

## 5 Reference Type

Reference Type 解释 this 丢失问题

```js
let user = {
  name: 'John',
  hi() {
    alert(this.name);
  }
};

// 把获取方法和调用方法拆成两行
let hi = user.hi;
hi(); // 报错了，因为 this 的值是 undefined
```

`Reference Type` 的值是一个三个值的组合 `(base, name, strict)`，其中：

- `base` 是对象
- `name` 是属性名
- `strict` 在 `use strict` 模式下为 `true`

对属性 `user.hi` 访问的结果不是一个函数，而是一个 `Reference Type` 的值

任何例如赋值 `hi = user.hi` 等其他的操作，都会将 `Reference Type` 作为一个整体丢弃掉，而会取 `user.hi`（一个函数）的值并继续传递。所以任何后续操作都“丢失”了 `this`

因此，`this` 的值仅在函数直接被通过点符号 `obj.method()` 或方括号 `obj['method']()` 语法（此处它们作用相同）调用时才被正确传递

## 5 BigInt

`BigInt` 是一种特殊的数字类型，它提供了对任意长度整数的支持

**创建 `bigint` 的方式有两种**：在一个整数字面量后面加 `n` 或者调用 `BigInt` 函数，该函数从字符串、数字等中生成 `bigint`

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // 与 10n 相同
```

### 5.1 数学运算符

BigInt 大多数情况下可以像常规数字类型一样使用，例如：

```js
alert(1n + 2n); // 3

alert(5n / 2n); // 2
```

> **注意：**除法 `5/2` 的结果向零进行舍入，舍入后得到的结果没有了小数部分。对 bigint 的所有操作，返回的结果也是 bigint

**不可以把 bigint 和常规数字类型混合使用：**

```js
alert(1n + 2); // Error: Cannot mix BigInt and other types
```

```js
let bigint = 1n;
let number = 2;

// 将 number 转换为 bigint
alert(bigint + BigInt(number)); // 3

// 将 bigint 转换为 number
alert(Number(bigint) + number); // 3
```

> 如果 bigint 太大而数字类型无法容纳，则会截断多余的位，因此我们应该谨慎进行此类转换

**BigInt 不支持一元加法：**

```js
let bigint = 1n;

alert(+bigint); // error
```

### 5.2 比较运算符

比较运算符，例如 `<` 和 `>`，使用它们来对 `bigint` 和 `number` 类型的数字进行比较没有问题：

```js
alert(2n > 1n); // true

alert(2n > 1); // true
```

> 注意，由于 `number` 和 `bigint` 属于不同类型，它们可能在进行 `==` 比较时相等，但在进行 `===`比较时不相等：

```js
alert(1 == 1n); // true

alert(1 === 1n); // false
```

### 5.3 布尔运算

当在 `if` 或其他布尔运算中时，`bigint` 的行为类似于 `number`

例如，在 `if` 中，`bigint 0n` 为假，其他值为 `true`
