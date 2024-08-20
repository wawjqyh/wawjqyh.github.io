# 对象属性配置

## 1 属性标志和属性描述符

### 1.1 属性标志

对象属性`（properties）`，除 `value` 外，还有三个特殊的特性`（attributes）`，也就是所谓的“标志”：

- `writable` — 如果为 true，则值可以被修改，否则它是只可读的
- `enumerable` — 如果为 true，则会被在循环中列出，否则不会被列出
- `configurable` — 如果为 true，则此特性可以被删除，这些属性也可以被修改，否则不可以

**writable:**

不能被重新赋值

**enumerable:**

- 不会出现在 `for..in` 循环中
- 会被 `Object.keys` 排除

**configurable:**

- 单向的，无法使用 `defineProperty` 把它改回去
- 不可配置的属性不能被删除
- 不能修改 `configurable` 标志
- 不能修改 `enumerable` 标志
- 不能将 `writable: false` 修改为 `true`（反过来则可以）
- 不能修改访问者属性的 `get/set`（但是如果没有可以分配它们）

> `configurable: false` 的用途是防止更改和删除属性标志，但是允许更改对象的值

### 1.2 查看属性标志信息

```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

```js
let user = {
  name: 'John'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

### 1.3 修改属性标志信息

```js
Object.defineProperty(obj, propertyName, descriptor);
```

如果该属性存在，`defineProperty` 会更新其标志。否则，它会使用给定的值和标志创建属性；在这种情况下，如果没有提供标志，则会默认设为 `false`

```js
let user = {};

Object.defineProperty(user, 'name', {
  value: 'John'
});

Object.defineProperty(user, 'name', {
  writable: false
});
```

### 1.4 对象其他相关方法

限制访问`整个`对象

- `Object.preventExtensions(obj)`
  禁止向对象添加新属性
- `Object.seal(obj)`
  禁止添加/删除属性。为所有现有的属性设置 `configurable: false`
- `Object.freeze(obj)`
  禁止添加/删除/更改属性。为所有现有的属性设置 `configurable: false`, `writable: false`

- `Object.isExtensible(obj)`
  如果添加属性被禁止，则返回 `false`，否则返回 `true`
- `Object.isSealed(obj)`
  如果添加/删除属性被禁止，并且所有现有的属性都具有 `configurable: false` 则返回 `true`
- `Object.isFrozen(obj)`
  如果添加/删除/更改属性被禁止，并且所有当前属性都是 `configurable: false`, `writable: false`，则返回 `true`

## 2 getter 和 setter

### 2.1 概念

有两种类型的对象属性:

- 第一种是 `数据属性`
- 第二种是 `访问器属性（accessor properties）`，它们本质上是用于获取和设置值的函数，但从外部代码来看就像常规属性

```js
let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
```

> `fullName` 只有一个 `getter`。如果我们尝试赋值操作 `user.fullName=`，将会出现错误

### 2.2 访问器描述符

对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数

- `get` —— 一个没有参数的函数，在读取属性时工作
- `set` —— 带有一个参数的函数，当属性被设置时调用
- `enumerable` —— 与数据属性的相同
- `configurable` —— 与数据属性的相同

使用 `defineProperty` 创建一个 `fullName` 访问器，我们可以使用 `get` 和 `set` 来传递描述符:

```js
let user = {
  name: 'John',
  surname: 'Smith'
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
});

alert(user.fullName); // John Smith

for (let key in user) alert(key); // name, surname
```

### 2.3 构造函数中

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User('John', new Date(1992, 6, 1));

alert(john.birthday); // birthday 是可访问的
alert(john.age); // age 也是可访问的
```

## 复习

- 属性标志 (3 个)
- 如何查看属性标志？
- 如何修改属性标志？
- getter 和 setter 怎么用？(两种方式)
