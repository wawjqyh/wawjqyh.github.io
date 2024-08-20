<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" target="_blank">en</a>

# Array.prototype.toLocaleString()

## 概述

toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使
用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

## 语法
```javascript
arr.toLocaleString();
```

## 描述

数组中的元素将会使用各自的 toLocaleString 方法：

* Object: Object.prototype.toLocaleString()
* Number: Number.prototype.toLocaleString()
* Date: Date.prototype.toLocaleString()

## 示例

### 使用 toLocaleString

```javascript
var number = 1337;
var date = new Date();
var myArr = [number, date, "foo"];

var str = myArr.toLocaleString();

console.log(str);
// 输出 "1337,2015/2/27 下午8:29:04,foo"
// 假定运行在中文（zh-CN）环境，北京时区
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3st Edition (ECMA-262)       | Draft    | Initial definition |
