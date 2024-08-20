<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" target="_blank">en</a>

# null

值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。

## 1、语法

`null`

## 2、描述

null 是一个字面量（而不是全局对象的一个属性，undefined 是）。在 APIs 中，null 常被放在期望一个对象，但是不引用任何对象的参数位置。
当检测 null 或 undefined 时，注意相等（==）与全等（===）两个操作符的区别 （前者会执行类型转换）。

```javascript
// foo不存在，它从来没有被定义过或者是初始化过：
> foo
"ReferenceError: foo is not defined"

// foo现在已经是知存在的，但是它没有类型或者是值：
> var foo = null; foo
"null"
```

### (1) null 与 undefined 的不同点

```javascript
typeof null        // object (因为一些以前的原因而不是'null')
typeof undefined   // undefined
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```

## 3、规范

| Specification                           | Status   | Comment                           |
|:-----------------------------------|:--------|:------------------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition JavaScript 1.3 |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |