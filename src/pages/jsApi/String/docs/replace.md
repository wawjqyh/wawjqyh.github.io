<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">en</a>

# String.prototype.replace()

replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是
一个字符串或者一个每次匹配都要调用的函数。

## 语法

```javascript
str.replace(regexp|substr, newSubStr|function)
```

### 参数

* `regexp (pattern)` 一个 正则表达式对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
* `substr (pattern)` 一个要被 newSubStr 替换的字符串。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。
* `newSubStr (replacement)` 用于替换掉第一个参数在原字符串中的匹配部分的 字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
* `function (replacement)` 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。

### 返回值

一个部分或全部匹配由替代模式所取代的新的字符串。

## 描述

该方法并不改变调用它的字符串本身，而只是返回一个新的替换后的字符串。

在进行全局的搜索替换时，正则表达式需包含 g 标志。

### 使用字符串作为参数

替换字符串可以插入下面的特殊变量名：

| 变量名 | 代表的值 |
|:-------|:---------|
| $$     | 插入一个 "$" |
| $&     | 插入匹配的子串 |
| $`     | 插入当前匹配的子串左边的内容 |
| $'     | 插入当前匹配的子串右边的内容 |
| $n     | 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串 |

### 指定一个函数作为参数

你可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后， 该函数就会执行。 函数的返回值作为替换字符串。 (注意:  上面
提到的特殊替换参数在这里不能被使用。) 另外要注意的是， 如果第一个参数是正则表达式， 并且其为全局匹配模式， 那么这个方法
将被多次调用， 每次匹配都会被调用。

下面是该函数的参数：

| 变量名     | 代表的值 |
|:-----------|:---------|
| match      | 匹配的子串。（对应于上述的$&。） |
| p1,p2, ... | 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。） |
| offset     | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是“abcd”，匹配到的子字符串是“bc”，那么这个参数将是1） |
| string     | 被匹配的原字符串 |

(精确的参数个数依赖于replace()的第一个参数是否是一个正则表达式对象， 以及这个正则表达式中指定了多少个括号子串。)

下面的例子将会使 newString 变成'abc - 12345 - #$*%'：

```javascript
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
```

## 示例

### 在 replace() 中使用正则表达式

在下面的例子中，replace() 中使用了正则表达式及忽略大小写标示。

```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

### 在 replace() 中使用 global 和 ignore 选项

下面的例子中,正则表达式包含有全局替换(g)和忽略大小写(i)的选项,这使得replace方法用'oranges'替换掉了所有出现的"apples".

```javascript
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");

// oranges are round, and oranges are juicy.
console.log(newstr);
```

### 交换字符串中的两个单词

下面的例子演示了如何交换一个字符串中两个单词的位置，这个脚本使用$1 和 $2 代替替换文本。

```javascript
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);
```

### 使用行内函数来修改匹配到的字符

在这个例子中，所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。重要的是，在返回一个替换了的字符串前需要在匹配元素前需要进行添加操作。

在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。

```javascript
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

此代码 styleHyphenFormat('borderTop') 将返回 'border-top'。

因为我们想在最终的替换中进一步转变匹配结果，所以我们必须使用一个函数。这迫使我们在使用toLowerCase()方法前进行评估。如果
我们尝试不用一个函数进行匹配，那么使用toLowerCase() 方法将不会有效。

```javascript
var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work
```

这是因为 '$&'.toLowerCase() 会先被解析成字符串字面量（这会导致相同的'$&')而不是当作一个模式。

### 将华氏温度转换为对等的摄氏温度

下面的例子演示如何将华氏温度转换为对等的摄氏温度。华氏温度用一个数字加一个"F"来表示，这个函数将返回一个数字加"C"来表示的
摄氏温度。例如，如果输入是212F，这个函数将返回100C。如果输入数字时0F，这个方法将返回"-17.77777777777778C"。

正则表达式test检查任何数字是否以 F 结尾。华氏温度通过第二个参数p1进入函数。这个函数基于华氏温度作为字符串传递给f2c函数设
置成摄氏温度。然后f2c()返回摄氏温度。这个函数与Perl的 s///e 标志相似。

```javascript
function f2c(x)
{
  function convert(str, p1, offset, s)
  {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### 使用行内函数和正则来避免循环

下例把某种模式的字符串转换为一个对象数组（其元素为对象）。

**输入：**

一个由 x，- 和 _ 组成的字符串。

```javascript
x-x_

---x---x---x---

-xxx-xx-x-

_x_x___x___x___
```

**输出：**

一个数组对象。'x' 产生一个 'on' 状态，'-'（连接符）产生一个 'off' 状态，而 '_' （下划线）表示 'on' 状态的长度。

```javascript
[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]
```

**代码片段：**

```javascript
var str = 'x-x_';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2){
  if(p1) retArr.push({ on: true, length: p1.length });
  if(p2) retArr.push({ on: false, length: 1 });
});

console.log(retArr);
```

该代码片段生成了一个数组，包含三个期望格式的对象，避免了使用 for 循环语句。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |