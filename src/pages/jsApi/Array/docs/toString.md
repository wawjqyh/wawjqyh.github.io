<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" target="_blank">en</a>

# Array.prototype.toString()

## 概述

toString() 返回一个字符串，表示指定的数组及其元素。

## 语法
```javascript
arr.toString()
```

### 参数

无

## 描述
Array 对象覆盖了 Object 的 toString 方法。对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString()
返回值经调用 join() 方法连接（由逗号隔开）组成。例如，下面的代码创建了一个数组，然后使用 toString 方法把该数组转成一个字符串。

```javascript
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.
```

当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法。

### ECMAScript 5 semantics

从 JavaScript 1.8.5 (Firefox 4) 开始，和 ECMAScript 第5版语义（semantics）一致，toString() 方法是通用的，可被用于任何对象。
如果对象有一个 join() 方法，将会被调用，其返回值将被返回。没有则调用 Object.prototype.toString() 方法。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |