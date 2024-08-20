<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">en</a>

# Math.min()

Math.min() 返回零个或更多个数值的最小值。

## 语法

```javascript
Math.min([value1[,value2, ...]])
```

### 参数

* `value1, value2, ...` 一组数值

### 返回值

给定数值中最小的数。如果任一参数不能转换为数值，则返回NaN。

## 描述

由于 min 是 Math 的静态方法，所以应该像这样使用：Math.min()，而不是作为你创建的 Math 实例的方法（Math 不是构造函数）。

如果没有参数，结果为Infinity。

如果有任一参数不能被转换为数值，结果为 NaN。

## 示例

### 使用 Math.min()

下例找出 x 和 y 的最小值，并把它赋值给 z：

```javascript
var x = 10, y = -20;
var z = Math.min(x, y);
```

### 使用 Math.min() 裁剪值（Clipping a value）

Math.min 经常用于裁剪一个值，以便使其总是小于或等于某个边界值。例如：

```javascript
var x = f(foo);

if (x > boundary) {
    x = boundary;
}
```

可以写成：

```javascript
var x = Math.min(f(foo), boundary);
```

另外，Math.max() 也可以被用来以相似的方式裁剪一个值。

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |