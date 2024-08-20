<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString" target="_blank">en</a>

# Boolean.prototype.toString()

toString() 方法返回指定的布尔对象的字符串形式。

## 语法

```javascript
bool.toString()
```

### 参数

无

## 描述

Boolean 对象覆盖了 Object 对象的  toString 方法。并没有继承 Object.prototype.toString()。对于布尔对象，toString 方法返回该对象的字符串形式。

当一个布尔对象作为文本值或进行字符串连接时，JavaScript 会自动调用其 toString 方法。

对于布尔对象或值，内置的 toString 方法返回字符串 "true" 或 "false"，具体返回哪个取决于布尔对象的值。

## 示例

例子：使用 toString

下面的代码，flag.toString 返回 "true"：

```javascript
var flag = new Boolean(true)
var myVar = flag.toString()
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |