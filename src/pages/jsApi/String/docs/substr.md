<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank">en</a>

# String.prototype.substr()

substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。

## 语法

```javascript
str.substr(start[, length])
```

### 参数

* `start` 开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength-3）
* `length` 可选。提取的字符数

### 描述

start 是一个字符的索引。首字符的索引为 0，最后一个字符的索引为 字符串的长度减去1。substr 从 start 位置开始提取字符，提取
length 个字符（或直到字符串的末尾）。

如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。

如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引。如果 start 为负值且 abs(start) 大于字符串的长度，则
substr 使用 0 作为开始提取的索引。注意负的 start 参数不被 Microsoft JScript 所支持。

如果 length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。

## 示例

### 使用 substr

```javascript
var str = "abcdefghij";

console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |