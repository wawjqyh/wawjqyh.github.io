<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length" target="_blank">en</a>

# Function.length

length 属性指明函数的形参个数。

Function.length 属性的属性特性：

| 属性         |       |
|:-------------|:------|
| writable     | false |
| enumerable   | false |
| configurable | true  |

## 描述

length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，那些已定义了默认值的参数不算在内，比如function（xx = 0）
的length是0。与之对比的是，  arguments.length 是函数被调用时实际传参的个数。

### Function 构造器的属性

Function 构造器本身也是个Function。他的 length 属性值为 1 。该属性 Writable: false, Enumerable: false, Configurable: true.

### Function 原型对象的属性

Function  原型对象的 length 属性值为 0 。

## 例子

```javascript
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */
console.log((function(...args) {}).length); /* 0, rest parameter is not counted */
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |