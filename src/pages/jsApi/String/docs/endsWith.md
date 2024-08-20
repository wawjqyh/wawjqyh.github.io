<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank">en</a>

# String.prototype.endsWith()

endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

## 语法

```javascript
str.endsWith(searchString [, position]);
```

### 参数

* `searchString` 要搜索的子字符串
* `position 可选` 在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处

## 示例

```javascript
var str = "To be, or not to be, that is the question.";

alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
alert( str.endsWith("To be", 5) );   // true
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |