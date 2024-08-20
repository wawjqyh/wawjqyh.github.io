<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase" target="_blank">en</a>

# String.prototype.toLocaleUpperCase()

toLocaleUpperCase() 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。

## 语法

```javascript
str.toLocaleUpperCase()
```

### 返回值

一个新的字符串，即根据本地化的大小写映射规则将输入的字符串转化成大写形式的结果。

## 描述

toLocaleUpperCase() 方法返回的是将输入的字符串根据本地化的大小写映射规则转化成的大写形式的新字符串。toLocaleUpperCase()
不会影响输入的字符串本身的值. 大多数情况下，这个方法与 toUpperCase() 会产生相同的值，但是对于一些语言（locale）,例如土耳
其语，因为它们的大小写映射规则与Unicode默认的映射规则不同，所以调用这两个方法将会产生不同的结果。

## 例子

```javascript
console.log('alphabet'.toLocaleUpperCase()); // 'ALPHABET'
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |