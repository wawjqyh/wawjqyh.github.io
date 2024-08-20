<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">en</a>

# String.prototype.charAt()

## 概述

charAt() 方法从一个字符串中返回指定的字符。

## 语法

```javascript
str.charAt(index)
```

### 参数

* `index` 一个介于0 和字符串长度减1之间的整数， (0~length-1)，如果没有提供索引，charAt() 将使用0

## 描述

字符串中的字符从左向右索引，第一个字符的索引值为 0，最后一个字符（假设该字符位于字符串 stringName 中）的索引值为 stringName.length - 1。
如果指定的 index 值超出了该范围，则返回一个空字符串。

## 示例

### 输出字符串中不同位置的字符

下例输出字符串 "Brave new world" 不同位置处的字符：

```javascript
var anyString = "Brave new world";

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

上面代码的输出为：

```javascript
The character at index 0 is 'B'
The character at index 1 is 'r'
The character at index 2 is 'a'
The character at index 3 is 'v'
The character at index 4 is 'e'
The character at index 999 is ''
```

### 获取所有字符

以下提供了一种确保通过字符串循环总是提供整个字符的方法，即使该字符串包含不在基本多文种平面（BMP）中的字符。

```javascript
var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  } // Adapt this line at the top of each loop, passing in the whole string and
    // the current iteration and returning a variable to represent the
    // individual character

  alert(chr);
}

function getWholeChar (str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return ''; // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i+1))  {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i+1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i)+str.charAt(i+1);
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i-1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
```

在允许解构分配的独占JavaScript 1.7+环境（如Firefox）中，以下是一个更简洁和更灵活的替代方法，它会自动递增一个递增变量（如果字符保证它是一个替代对）。

```javascript
var str = 'A\uD87E\uDC04Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  alert(chr);
}

function getWholeCharAndI (str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return ''; // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]; // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i+1))  {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i+1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return [str.charAt(i)+str.charAt(i+1), i+1];
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i-1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // Return the next character instead (and increment)
  return [str.charAt(i+1), i+1];
}
```

### 修复charAt以支持非基本多文种平面（BMP）字符

虽然上面的例子对于那些希望支持非BMP字符的用户可能更有用（因为它不要求调用者知道任何非BMP字符可能出现在哪里），在人们希望
的情况下，在选择字符 通过索引，将字符串中的替代对作为它们表示的单个字符，可以使用以下：

```javascript
function fixedCharAt (str, idx) {
  var ret = '';
  str += '';
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return '';
  }

  ret += str.charAt(idx);

  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx+1))) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx+1);
  }
  return ret;
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |