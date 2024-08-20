<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">en</a>

# Array.prototype.join()

join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。

`PS: join() 方法，不会改变数组！`

```javascript
let a = ['Wind', 'Rain', 'Fire'];

a.join();
// 默认为 ","
// 'Wind,Rain,Fire'

a.join("");
// 分隔符 === 空字符串 ""
// "WindRainFire"

a.join("-");
// 分隔符 "-"
// 'Wind-Rain-Fire'

console.log(a);
// ['Wind', 'Rain', 'Fire']
```

## 语法

```javascript
str = arr.join()
// 默认为 ","

str = arr.join("")
// 分隔符 === 空字符串 ""

str = arr.join(separator)
// 分隔符
```

### 参数

* `separator` 指定一个字符串来分隔数组的每个元素。如果需要(separator)，将分隔符转换为字符串。如果省略()，数组元素用逗号
分隔。默认为 ","。如果separator是空字符串("")，则所有元素之间都没有任何字符。

### 返回值

一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串

## 描述

所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。如果元素是undefined 或者null， 则会转化成空字符串。

## 例子

### 使用四种不同的分隔符连接数组元素

下例首先创建了一个数组 a，包含有三个元素，然后用四种不同的分隔符连接所有数组元素。首先是默认的分隔符逗号，然后是一个逗号
加空格，接下来是一个加号前后加空格，最后是一个空字符串。

```javascript
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |