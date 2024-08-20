<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" target="_blank">en</a>

# String.prototype.repeat()

repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。

## 语法

```javascript
/**
 * str: String
 * count: Number
 */

let resultString = str.repeat(count);
```

### 参数

* `count` 介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串。

### 返回值

包含指定字符串的指定数量副本的新字符串。

### 异常

* `RangeError`: 重复次数不能为负数。
* `RangeError`: 重复次数必须小于 infinity，且长度不会大于最长的字符串。

## 示例

```javascript
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity

({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
//"abcabc",repeat是一个通用方法,也就是它的调用者可以不是一个字符串对象.
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |