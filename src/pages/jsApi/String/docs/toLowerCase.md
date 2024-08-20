<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" target="_blank">en</a>

# String.prototype.toLowerCase()

toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。

## 语法

```javascript
str.toLowerCase()
```

### 返回值

一个新的字符串，表示串转换为小写的调用字符。

## 描述

toLowerCase 会将调用该方法的字符串值转为小写形式，并返回。toLowerCase 不会影响字符串本身的值。

## 示例

```javascript
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans

​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |