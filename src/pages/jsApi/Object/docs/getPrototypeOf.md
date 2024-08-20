<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf" target="_blank">en</a>

# Object.getPrototypeOf()

Object.getPrototypeOf() 方法返回指定对象的原型（即, 内部[[Prototype]]属性的值）。

## 语法

```javascript
Object.getPrototypeOf(object)
```

### 参数

* `object` 要返回其原型的对象。

### 返回值

给定对象的原型。如果没有继承属性，则返回 null 。

## 示例

```javascript
let proto = {};
let obj = Object.create(proto);

Object.getPrototypeOf(obj) === proto;
 // true
```

## 注释

`在 ES5 中，如果参数不是一个对象类型，将抛出一个  TypeError 异常。在 ES6 /ES2015中，参数被强制转换为一个 Object。`

```javascript
> Object.getPrototypeOf("foo");
TypeError: "foo" is not an object
// ES5 code

> Object.getPrototypeOf("foo");
String.prototype
// ES6 code
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |