<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank">en</a>

# Object.getOwnPropertyDescriptor()

## 概述

Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需
要从原型链上进行查找的属性）

## 语法

```javascript
Object.getOwnPropertyDescriptor(obj, prop)
```

### 参数

* `obj` 在该对象上查看属性
* `prop` 一个属性名称，该属性的属性描述符将被返回

### 返回值

如果指定的属性存在于对象上，则返回其属性描述符（property descriptor），否则返回 undefined。

## 描述

该方法允许对一个属性的描述进行检索。在 Javascript 中， 属性 由一个字符串类型的“名字”（name）和一个“属性描述符”
（property descriptor）对象构成。更多关于属性描述符类型以及他们属性的信息可以查看：Object.defineProperty.

一个属性描述符是一个记录，由下面属性当中的某些组成的：

* `value` 该属性的值(仅针对数据属性描述符有效)
* `writable` 当且仅当属性的值可以被改变时为true。(仅针对数据属性描述有效)
* `get` 获取该属性的访问器函数（getter）。如果没有访问器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)
* `set` 获取该属性的设置器函数（setter）。 如果没有设置器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)
* `configurable` 当且仅当指定对象的属性描述可以被改变或者属性可被删除时，为true。
* `enumerable` 当且仅当指定对象的属性可以被枚举出时，为 true。

## 示例

```javascript
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d is { configurable: true, enumerable: true, get: /*访问器函数*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d is { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", { value: 8675309, writable: false, enumerable: false });
d = Object.getOwnPropertyDescriptor(o, "baz");
// d is { value: 8675309, writable: false, enumerable: false, configurable: false }
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |