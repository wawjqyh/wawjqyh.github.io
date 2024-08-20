<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank">en</a>

# Number.isFinite()

Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。

## 语法

```javascript
Number.isFinite(value)
```

### 参数
* `value` 要被检测有穷性的值

### 返回值

一个 布尔值 表示给定的值是否是一个有穷数。

## 描述

和全局的 isFinite() 函数相比，这个方法不会强制将一个非数值的参数转换成数值，这就意味着，只有数值类型的值，且是有穷的（finite），才返回 true。

## 示例

```javascript
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, 全局函数 isFinite('0') 会返回 true
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |