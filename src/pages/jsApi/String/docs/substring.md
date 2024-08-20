<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank">en</a>

# String.prototype.substring()

substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

## 语法


```javascript
str.substring(indexStart[, indexEnd])
```

### 参数

* `indexStart` 一个 0 到字符串长度之间的整数
* `indexEnd 可选` 一个 0 到字符串长度之间的整数


## 描述

substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：

* 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
* 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
* 如果任一参数小于 0 或为 NaN，则被当作 0。
* 如果任一参数大于 stringName.length，则被当作 stringName.length。

如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。例如，str.substring(1, 0) == str.substring(0, 1)。

## 示例

### 使用 substring

下例使用 substring 输出字符串 "Mozilla" 中的字符：

```javascript
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

### 运用 length 属性来使用 substring()

下面一个例子运用了    String.length 属性去获取指定字符串的倒数元素。显然这个办法更容易记住，因为你不再像上面那个例子那样去记住起始位置和最终位置。

```javascript
// Displays 'illa' the last 4 characters
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

### 替换一个字符串的子字符串

下例替换了一个字符串中的子字符串。可以替换单个字符和子字符串。该例结尾调用的函数将 "Brave New World" 变成了 "Brave New Web"。

```javascript
function replaceString(oldS, newS, fullS) {
// Replaces oldS with newS in the string fullS
  for (var i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
     fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

需要注意的是，如果 oldS 是 newS 的子字符串将会导致死循环。例如，尝试把 "World" 替换成 "OtherWorld"。一个更好的方法如下：

```javascript
function replaceString(oldS, newS,fullS){
  return fullS.split(oldS).join(newS);
}
```

上面的代码只是子字符串操作的一个例子。如果你需要替换子字符串，更多时候会用到 String.prototype.replace()。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |