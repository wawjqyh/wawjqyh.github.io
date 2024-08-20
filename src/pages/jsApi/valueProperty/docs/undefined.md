<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank">en</a>

# undefined

全局属性undefined表示原始值undefined。它是一个JavaScript的 原始数据类型

| 属性         |       |
|:------------|:-----|
| writable     | false |
| enumerable   | false |
| configurable | false |

## 1、语法

`undefined `

## 2、描述

undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。undefined的最初值就是原始数据类型undefined。

在现代浏览器（`JavaScript 1.8.5/Firefox 4+`），自`ECMAscript5`标准以来undefined是一个不能被配置（`non-configurable`），
不能被重写（non-writable）的属性。即便事实并非如此，也要避免去重写它。

一个没有被赋值的变量是undefined类型。一个方法或者是语句如果在执行期间没有变量被赋值也会返回undefined（对于这句话持疑惑态度，请查看英文原文来理解）。
一个函数如果没有返回值，就会返回一个undefined值。

`但是它可能被使用作为一个标识符（变量名）在任何作用域中，而不仅仅是在全局作用域中(因为undefined不是一个保留字))，这样做是一个非常坏的主意，因为这样会使你的代码难以去维护和排错。`

```javascript
// 不要这样做！

// 打印 'foo string' PS：说明undefined的值和类型都已经改变
(function() {
var undefined = 'foo';
console.log(undefined, typeof undefined)
})()

// 打印 'foo string' PS：说明undefined的值和类型都已经改变
(function(undefined) {
console.log(undefined, typeof undefined)
})('foo')
```

## 3、示例

### (1) 严格相等和undefined

你可以使用undefined和严格相等或不相等操作符来决定一个变量是否拥有值。在下面的代码中，变量x是未定义的，if 语句的求值结果将是true

```javascript
var x;

if (x === undefined) {
// 执行这些语句
} else {
// 这些语句不会被执行
}
```

`注意：这里是必须使用严格相等操作符（===）而不是标准相等操作符（==），因为 x == undefined 会检查x是不是null，但是严格相等不会检查。null 和 undefined是不相等的。移步比较操作符查看详情。`

### (2) Typeof 操作符和undefined

可替换的是，typeof可以被使用：

```javascript
var x;
if(typeof x === 'undefined') {
    // 执行这些语句
}
```

还有一个原因去使用 typeof的是它不会在一个变量没有被声明的时候抛出一个错误。

```javascript
// 这里没有声明x
if(typeof x === 'undefined') { // 没有错误，执行结果为true
    // 执行这些语句
}

if(x === undefined) { // 抛出一个错误，ReferenceError

}
```

但是，技术方面看来这样的使用方法应该被避免。JavaScript是一个静态作用域语言，所以可以知道，一个变量是否可以被读取只要看它是否在一个封闭的上下文中被声明。
唯一的例外是全局作用域，但是全局作用域是被绑定在全局对象上的，所以检查一个变量是否在全局上下文中存在只要检查全局对象上面是否存在这个属性（使用in操作符）。

### (3) Void操作符和undefined

void 操作符是第三种可以替代的方法。

```javascript
var x;
if(x === void 0) {
    // 执行这些语句
}

// 没有声明y
if(y === void 0) {
    // 抛出一个RenferenceError错误(与`typeof`相比)
}
```

## 4、规范

| Specification                           | Status   | Comment                           |
|:-----------------------------------|:--------|:------------------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition JavaScript 1.3 |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |