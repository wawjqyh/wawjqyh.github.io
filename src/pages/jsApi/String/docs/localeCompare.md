<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank">en</a>

# String.prototype.localeCompare()

localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。

新的 locales 、 options 参数能让应用程序定制函数的行为即指定用来排序的语言。  locales 和 options 参数是依赖于具体实现的，
在旧的实现中这两个参数是完全被忽略的。

## 语法

```javascript
referenceStr.localeCompare(compareString[, locales[, options]])
```

### 参数

查阅浏览器支持部分来确定哪些浏览器支持 locales 参数和 options 参数， 在功能检测中检查对 locales 、options 参数的支持。

* `compareString` 用来比较的字符串

## 描述

返回一个数字表示是否 引用字符串 在排序中位于 比较字符串 的前面，后面，或者二者相同。

* 当 引用字符串 在 比较字符串 前面时返回 -1
* 当 引用字符串 在 比较字符串 后面时返回 1
* 相同位置时返回 0

切勿依赖于 -1 或 1 这样特定的返回值。不同浏览器之间（以及不同浏览器版本之间） 返回的正负数的值各有不同，因为W3C规范中只
要求返回值是正值和负值，而没有规定具体的值。一些浏览器可能返回-2或2或其他一些负的、正的值。

## 示例

### 使用 localeCompare()

```javascript
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c');
// -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against');
// 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a');
// 0
```

### 检查浏览器对扩展参数的支持

locales 和 options 参数还没有被所有阅览器所支持。检查是否被支持， 使用 "i" 参数 (a requirement that illegal language
tags are rejected) 判断是否有异常 RangeError抛出:

```javascript
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare​('bar', 'i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
```

### 使用 locales 参数

在不同的语言下 localeCompare() 所提供的结果是不一致的。 为了能让用户得到正确的比较值， 通过使用 locales 参数来提供要比较
的语言 (and possibly some fallback languages) :

```javascript
console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts with a
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z
```

### 使用 options 参数

localeCompare() 所提供的结果可以通过 options 参数来制定:

```javascript
// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // a positive value
```

## 性能相关

当比较大量字符串时， 比如比较大量数组时， 最好创建一个Intl.Collator 对象并使用compare 属性所提供的函数。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |