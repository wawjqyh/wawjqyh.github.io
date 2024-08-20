<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString" target="_blank">en</a>

# String.prototype.toString()

## 概述

toString() 方法返回指定对象的字符串形式。

## 语法

```javascript
str.toString()
```

## 描述

String 对象覆盖了Object 对象的 toString 方法；并没有继承 Object.toString()。对于 String 对象，toString 方法返回该对象的
字符串形式，和 String.prototype.valueOf() 方法返回值一样。

## 示例

下例输出一个字符串对象（String object）的字符串值：

```javascript
var x = new String("Hello world");

alert(x.toString())      // 输出 "Hello world"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |