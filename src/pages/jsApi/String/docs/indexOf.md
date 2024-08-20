<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" target="_blank">en</a>

# String.prototype.indexOf()

indexOf() 方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。

如果未找到该值，则返回-1。

## 语法

```javascript
str.indexOf(searchValue[, fromIndex])
```

### 参数

* `searchValue` 一个字符串表示被查找的值
* `fromIndex 可选` 表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0。如果 fromIndex < 0 则查找整个字符
串（如同传进了 0）。如果 fromIndex >= str.length，则该方法返回 -1，除非被查找的字符串是一个空字符串，此时返回 str.length。

### 返回值

指定值的第一次出现的索引; 如果没有找到 -1。

## 描述

字符串中的字符被从左向右索引。首字符的索引（index）为 0，字符串 stringName 的最后一个字符的索引是 stringName.length - 1。

```javascript
"Blue Whale".indexOf("Blue");     // returns  0
"Blue Whale".indexOf("Blute");    // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("", 9);      // returns  9
"Blue Whale".indexOf("", 10);     // returns 10
"Blue Whale".indexOf("", 11);     // returns 10
```

### 区分大小写

indexOf 方法区分大小写。例如，下面的表达式返回 -1：

```javascript
"Blue Whale".indexOf("blue") // returns -1
```

### 检测是否存在某字符串

当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：

```javascript
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false
```

## 示例

### 使用indexOf() 和 lastIndexOf()

下例使用 indexOf() 和 lastIndexOf() 方法定位字符串中 "Brave new world" 的值。

```javascript
var anyString = "Brave new world";

console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
// logs 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));
// logs 10

console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));
// logs 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
// logs 6
```

### indexOf 和区分大小写

下例定义了两个字符串变量。两个变量包含相同的字符串，除了第二个字符串中的某些字符为大写。第一个 log 方法输出 19。但是由于
indexOf 方法区分大小写，因此不会在 myCapString 中发现字符串 “cheddar"，结果第二个 log 方法输出 -1。

```javascript
var myString    = "brie, pepper jack, cheddar";
var myCapString = "Brie, Pepper Jack, Cheddar";

console.log('myString.indexOf("cheddar") is ' + myString.indexOf("cheddar"));
// logs 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf("cheddar"));
// logs -1
```

### 使用 indexOf 统计一个字符串中某个字母出现的次数

在下例中，设置了 count 来记录字母 e 在字符串 str 中出现的次数：

```javascript
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |