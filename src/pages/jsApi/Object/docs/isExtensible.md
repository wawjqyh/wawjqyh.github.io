<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank">en</a>

# Object.isExtensible()

## 概述
Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

## 语法

```javascript
Object.isExtensible(obj)
```

### 参数

* `obj` 需要检测的对象

## 描述

默认情况下，对象是可扩展的：即可以为他们添加新的属性。以及它们的 \_\_proto\_\_  属性可以被更改。Object.preventExtensions，
Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展（non-extensible）。

## 例子

```javascript
// 新对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty); // === true

// ...可以变的不可扩展.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## 注意

在 ES5 中，如果参数不是一个对象类型，将抛出一个 TypeError 异常。在 ES6 中， non-object 参数将被视为一个不可扩展的普通对象，
因此会返回 false 。

```javascript
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES6 code)
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |