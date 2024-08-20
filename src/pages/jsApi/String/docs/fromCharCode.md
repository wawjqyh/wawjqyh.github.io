<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">en</a>

# String.fromCharCode()

静态 String.fromCharCode() 方法返回使用指定的Unicode值序列创建的字符串。

## 语法

```javascript
String.fromCharCode(num1, ..., numN)
```

### 参数

`num1, ..., numN` 一组序列数字，表示 Unicode 值。

## 描述

该方法返回一个字符串，而不是一个 String 对象。

由于 fromCharCode 是 String 的静态方法，所以应该像这样使用：String.fromCharCode()，而不是作为你创建的 String 对象的方法。

## 示例

### 例子：使用 fromCharCode

下例返回字符串 "ABC"：

```javascript
String.fromCharCode(65,66,67)
```

## 作用于高位编码（higher values）

尽管绝大部分常用的 Unicode 值可以用一个 16-bit 数字表示（正如 JavaScript 标准化过程早期），并且对于绝大部分值 fromCharCode()
返回一个字符（即对于绝大部分字符 UCS-2 值是 UTF-16 的子集），但是为了处理所有的 Unicode 值（至 21 bits），只用 fromCharCode()
是不足的。由于高位编码字符是用两个低位编码（lower value）表示形成的一个字符，因此String.fromCodePoint() （ES6 草案的一部分）
被用来返回这样一对低位编码，从而可以完全表示这些高位编码字符。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |