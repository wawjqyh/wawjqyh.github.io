<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank">en</a>

# Number.isNaN()

Number.isNaN() 方法确定传递的值是否为 NaN和其类型是 Number。它是原始的全局isNaN()的更强大的版本。

## 语法

```javascript
Number.isNaN(value)
```

### 参数

* `value` 要被检测是否是 NaN 的值

### 返回值

一个布尔值，表示给定的值是否是 NaN。

## 描述

在 JavaScript 中，NaN 最特殊的地方就是，我们不能使用相等运算符（== 和 ===）来判断一个值是否是 NaN，因为 NaN == NaN 和
NaN === NaN 都会返回 false。因此，必须要有一个判断值是否是 NaN 的方法。

和全局函数 isNaN() 相比，该方法不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true。

## 示例

```javascript
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN("NaN");      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |