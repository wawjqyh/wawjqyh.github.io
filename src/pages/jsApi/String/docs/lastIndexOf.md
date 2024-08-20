<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" target="_blank">en</a>

# String.prototype.lastIndexOf()

lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。

## 语法

```javascript
str.lastIndexOf(searchValue[, fromIndex])
```

### 参数

* `searchValue` 一个字符串，表示被查找的值
* `fromIndex 可选` 从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。如果为负值，则被看作 0。
如果 fromIndex > str.length，则 fromIndex 被看作 str.length。

## 描述

字符串中的字符被从左向右索引。首字符的索引（index）是 0，最后一个字符的索引是 stringName.length - 1。

```javascript
"canal".lastIndexOf("a")   // returns 3
"canal".lastIndexOf("a",2) // returns 1
"canal".lastIndexOf("a",0) // returns -1
"canal".lastIndexOf("x")   // returns -1
```

### 区分大小写

lastIndexOf 方法区分大小写。例如，下面的表达式返回 -1：

```javascript
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## 示例

使用 indexOf 和 lastIndexOf

下例使用 indexOf 和 lastIndexOf 方法来定位字符串 "Brave new world" 中的值。

```javascript
var anyString = "Brave new world";

console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
// Displays 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));
// Displays 10

console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));
// Displays 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
// Displays 6
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |