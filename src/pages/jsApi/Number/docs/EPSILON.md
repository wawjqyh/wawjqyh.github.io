<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON" target="_blank">en</a>

# Number.EPSILON

Number.EPSILON 属性表示 1 和大于 1 的最小值（可表示为 Number）的差值。

你不必创建一个 Number 对象来访问这个静态属性（直接使用 Number.EPSILON）。

Number.EPSILON 属性的属性特性：

|             |       |
|:------------|:------|
|writable     | false |
|enumerable   | false |
|configurable | false |

## 描述

EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。

## 示例

### 测试是否相等

```javascript
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |