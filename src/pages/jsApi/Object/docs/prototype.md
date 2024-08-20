<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" target="_blank">en</a>

# Object.prototype

## 概述

Object.prototype 属性表示对象 Object 的原型对象。

| 属性         |       |
|:-------------|:------|
| writable     | false |
| enumerable   | false |
| configurable | false |

## 描述

在JavaScript中，所有的对象都是基于 Object；所有的对象都继承了Object.prototype的属性和方法，它们可以被覆盖（除了以null为
原型的对象，如 Object.create(null)）。例如，新的构造函数的原型覆盖原来的构造函数的原型，提供它们自己的 toString() 方法.。
对象的原型的改变会传播到所有对象上，除非这些属性和方法被其他对原型链更里层的改动所覆盖。

## 例子

由于JavaScript没有子类对象，原型是一种常用的方法，用于为某些表现为对象的函数创建一个“基类”对象。例如：
```javascript
var Person = function() {
  this.canTalk = true;
  this.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I\'m ' + this.name);
    }
  };
};

var Employee = function(name, title) {
  this.name = name;
  this.title = title;
  this.greet = function() {
    if (this.canTalk) {
      console.log("Hi, I'm " + this.name + ", the " + this.title);
    }
  };
};
Employee.prototype = new Person();

var Customer = function(name) {
  this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
  this.name = name;
  this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');
bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();
```

输出：

```javascript
Hi, I'm Bob, the Builder
Hi, I'm Joe
Hi, I'm Red Green, the Handyman
Hi, I'm Mike
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |