<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase" target="_blank">en</a>

# String.prototype.toLocaleLowerCase()

toLocaleLowerCase()方法根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。

## 语法

```javascript
str.toLocaleLowerCase()
```

### 返回值

根据任何特定于语言环境的案例映射，将表示调用字符串的新字符串转换为小写。

## 描述

toLocaleLowerCase()方法返回调用该方法的字符串被转换成小写之后的值，转换规则根据任何本地化特定的大小写映射。toLocaleLowerCase()
并不会影响字符串自身的值。在大多数情况下，该方法产生的结果和调用toLowerCase()的结果相同，但是在某些本地环境中，比如土耳
其语，它的大小写映射并不遵循在Unicode中的默认的大小写映射，因此会有一个不同的结果。

## 例子

```javascript
console.log('ALPHABET'.toLocaleLowerCase());
// 'alphabet'

console.log('中文简体 zh-CN || zh-Hans'.toLocaleLowerCase());
// '中文简体 zh-cn || zh-hans'
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |