<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank">en</a>

# Object.is()

Object.is() 方法确定两个值是否是 相同的值。

## 语法

```javascript
Object.is(value1, value2);
```

### 参数

* `value1` 需要比较的第一个值。
* `value2` 需要比较的第二个值。

### 返回值

一个 布尔值指示两个参数是否相同的。

## 描述

Object.is() 会在下面这些情况下认为两个值是相同的：

* 两个值都是 undefined
* 两个值都是 null
* 两个值都是 true 或者都是 false
* 两个值是由相同个数的字符按照相同的顺序组成的字符串
* 两个值指向同一个对象
* 两个值都是数字并且
    * 都是正零 +0
    * 都是负零 -0
    * 都是 NaN
    * 都是除零和 NaN 外的其它同一个数字

这种相等性判断逻辑和传统的 == 运算符所用的不同，== 运算符会对它两边的操作数做隐式的类型转换（如果它们是不同类型的值的话），
然后才进行相等性比较，（所以才会有类似 "" == false 为 true 的现象），但 Object.is 不会做这种类型转换。

当然，严格相等运算符 === 也不会对操作数进行类型转换，但是它会把 -0 和 +0 这两个数值视为相同的，还会把两个 NaN 看成是不相等的。

## 示例

```javascript
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |