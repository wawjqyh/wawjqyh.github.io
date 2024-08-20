<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">en</a>

# String.prototype.slice()

slice() 方法提取一个字符串的一部分，并返回一新的字符串。

## 语法

```javascript
str.slice(beginSlice[, endSlice])
```

### 参数

* `beginSlice` 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，
这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)
* `endSlice 可选` 在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，
则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

## 描述

slice() 从一个字符串中提取字符串并返回新字符串。在一个字符串中的改变不会影响另一个字符串。也就是说，slice 不修改原字符串，
只会返回一个包含了原字符串中部分字符的新字符串。

<p class="warning">注意：slice() 提取的新字符串包括beginSlice但不包括 endSlice。</p>

例1：str.slice(1, 4) 提取新字符串从第二个字符到第四个 (字符索引值为 1, 2, 和 3)。

例2：str.slice(2, -1) 提取第三个字符到倒数第二个字符。

## 例子

### 使用 slice() 创建一个新的字符串

下面例子使用 slice() 来创建新字符串:

```javascript
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2); // OUTPUT: morning is upon u
```

### 给 slice() 传入负值索引

下面的例子在 slice() 使用了负值索引:

```javascript
var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |