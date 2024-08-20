<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of" target="_blank">en</a>

# Array.of()

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。

```javascript
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```
## 语法

```javascript
Array.of(element0[, element1[, ...[, elementN]]])
```

### 参数
* `elementN` 任意个参数，将按顺序成为返回数组中的元素。

### 返回值

新的 Array 实例。

## 描述

此函数是ECMAScript 2015标准的一部分。

## 示例

```javascript
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## 规范

| Specification                                | Status   | Comment            |
|:---------------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262)      | Standard | Initial definition |
| ECMAScript 2017 Draft (ECMA-262)             | Draft    |                    |