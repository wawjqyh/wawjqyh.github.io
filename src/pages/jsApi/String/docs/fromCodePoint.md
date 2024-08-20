<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank">en</a>

# String.fromCodePoint()

String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。

## 语法

```javascript
String.fromCodePoint(num1[, ...[, numN]])
```

### 参数

* `num1, ..., numN` 一串 Unicode 编码。

### 异常

`RangeError`

如果传入无效的 Unicode 编码，将会抛出一个RangeError (例如： "RangeError: NaN is not a valid code point")。

## 说明

因为 fromCodePoint()  是 String 的一个静态方法，所以只能通过 String.fromCodePoint() 这样的方式来使用，不能在你创建的 String 对象实例上直接调用。

## 例子

使用 fromCodePoint()

```javascript
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
// String.fromCharCode() 方法不能单独获取在高代码点位上的字符
// 另一方面，下列的示例中，可以返回 4 字节，也可以返回 2 字节的字符
// (即，它可以返回单独的字符，使用长度 2 代替 1!）
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |