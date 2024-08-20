<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" target="_blank">en</a>

# Object.prototype.valueOf()

valueOf() 方法返回指定对象的原始值。

## 语法

```javascript
object.valueOf()
```

### 返回值

返回值为该对象的原始值。

## 描述

JavaScript 调用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）。 你很少需要自己调用此函数；当遇到一
种需要转换成一个原始值情况时候， JavaScript 会自动调用此函数。

默认情况下, valueOf() 会被每个对象Object继承。每一个内置对象都会覆盖这个方法为了返回一个合理的值，如果对象没有原始值，
valueOf() 就会返回对象自身。


你可以在自己的代码中使用 valueOf 方法用来把内置对象的值转换成原始值。 当你创建了自定义对象时，你可以覆盖 Object.prototype.valueOf()
并调用来取代 Object 方法。

### 覆盖自定义对象的 valueOf 方法

你可以创建一个取代 valueOf 方法的函数，你的方法必须不能传入参数。

假设你有个对象叫 myNumberType 而你想为它创建一个 valueOf 方法。 下面的代码为valueOf方法赋予了一个用户自定义函数：

```javascript
myNumberType.prototype.valueOf = function() { return customPrimitiveValue; };
```

有了这样的一个方法，下一次每当 myNumberType 要被转换为原始类型值时, JavaScript 在此之前会自动调用自定义的 valueOf 方法。

valueOf 方法一般都会被 JavaScript 自动调用，但你也可以像下面代码显示的那样自己去调用:

```javascript
myNumber.valueOf()
```

`注意: Objects 是字符串时，转换是调用 toString() 方法, 这个和 String 对象转换为原始类型的字符串所用的 valueOf是不一样的.
每个对象都自己的字符串转换方法, if only "[object type]". 但是很多对象不转换成 number, boolean, 或 function.`

## 示例

### 使用 valueOf

```javascript
function myNumberType(n) {
    this.number = n;
}

myNumberType.prototype.valueOf = function() {
    return this.number;
};

myObj = new myNumberType(4);
myObj + 3; // 7
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |