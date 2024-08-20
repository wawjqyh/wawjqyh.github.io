<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">en</a>

# Array.prototype.reverse()

reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。

## 语法

```javascript
arr.reverse()
```

### 参数

无

## 描述

reverse 方法颠倒数组中元素的位置，并返回该数组的引用。

## 示例

### 颠倒数组中的元素

下例将会创建一个数组 myArray，其包含三个元素，然后颠倒该数组。

```javascript
var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |