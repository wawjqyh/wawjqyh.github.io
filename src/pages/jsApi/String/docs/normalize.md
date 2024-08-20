<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank">en</a>

# String.prototype.normalize()

## 概述

normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化.

## 语法

```javascript
str.normalize([form]);
```

### 参数

* `form` 四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".
    * NFC - Normalization Form Canonical Composition.
    * NFD - Normalization Form Canonical Decomposition.
    * NFKC - Normalization Form Compatibility Composition.
    * NFKD - Normalization Form Compatibility Decomposition.

### 可能出现的异常

`RangeError`

如果给 form 传入了非法的参数值, 则会抛出 RangeError 异常.

## 示例

```javascript
// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = "\u1E9B\u0323";


// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // "\u1E9B\u0323"
str.normalize(); // same as above


// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // "\u017F\u0323\u0307"


// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // "\u1E69"


// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // "\u0073\u0323\u0307"
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |