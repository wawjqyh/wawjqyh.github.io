<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">en</a>

# Function

Function 构造函数 创建一个新的Function对象。 在 JavaScript 中, 每个函数实际上都是一个Function对象。

## 语法

```javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

### 参数

* `arg1, arg2, ... argN` 被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的JavaScript标识符的字符串，或者一个
用逗号分隔的有效字符串的列表;例如“×”，“theValue”，或“A，B”。
* `functionBody`  一个含有包括函数定义的JavaScript语句的字符串。

## 描述

使用Function构造器生成的Function对象是在函数创建时解析的。这比你使用函数声明或者函数表达式(function)并在你的代码中调用更
为低效，因为使用后者创建的函数是跟其他代码一起解析的。

所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。

`注意: 使用Function构造器生成的函数，并不会在创建它们的上下文中创建闭包；它们一般在全局作用域中被创建。当运行这些函数的时候，
它们只能访问自己的本地变量和全局变量，不能访问Function构造器被调用生成的上下文的作用域。这和使用带有函数表达式代码的 eval 不同。`

以调用函数的方式调用Function的构造函数 (不是用new关键字) 跟以构造函数来调用是一样的.

## 属性和方法

全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从Function.prototype上继承部分属性和方法。

## 原型对象

### 属性

`Function.length`

获取函数的接收参数个数。

`Function.prototype.constructor`

声明函数的原型构造方法，详细请参考 Object.constructor 。

`Function.arguments [已废弃]`

以数组形式获取传入函数的所有参数。此属性已被arguments替代。

`Function.arity [已删除]`

用于指定的函数的参数的个数，但已被删除。使用length属性代替。

`Function.caller [非标准]`

获取调用函数的具体对象。

`Function.name [非标准]`

获取函数的名称。

`Function.displayName [非标准]`

获取函数的display name。

### 方法

`Function.prototype.apply()`

在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。

`Function.prototype.bind()`

bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,
传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

`Function.prototype.toString()`

获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法。

`Function.prototype.call()`

在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。

`Function.prototype.isGenerator() [非标准]`

若函数对象为generator，返回true，反之返回 false。

`Function.prototype.toSource() [非标准]`

获取函数的实现源码的字符串。 覆盖了 Object.prototype.toSource 方法。

## 实例

Function 实例从 Function.prototype 继承了一些属性和方法。 同其他构造函数一样， 你可以改变构造函数的原型从而使得所有的
Function实例的属性和方法发生改变。

## 示例

### 传入参数调用Function构造函数

下面的代码会创建一个需要两个参数的Function对象

```javascript
// 可以直接运行在 JavaScript 控制的代码例子

// 创建了一个能返回两个参数和的函数
const adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
//  8
```

参数"a"和"b"是参数的名字，在函数体中被使用，"return a + b"。

### 大量修改DOM元素的递归快捷方式

使用 Function 构造器创建函数是从一个函数中动态地创建一些不确定数量的有可执行代码的在全局范围里可用的新对象的方式之一。
在下面的例子中，如果你不想使用闭包，那么每创建一个新的查询函数都不可避免地要调用 Function 构造器。

```javascript
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example - a recursive shortcut to massively modify the DOM</title>
<script type="text/javascript">
var domQuery = (function() {
  var aDOMFunc = [
        Element.prototype.removeAttribute,
        Element.prototype.setAttribute,
        CSSStyleDeclaration.prototype.removeProperty,
        CSSStyleDeclaration.prototype.setProperty
      ];

  function setSomething (bStyle, sProp, sVal) {
    var  bSet = Boolean(sVal), fAction = aDOMFunc[bSet | bStyle << 1],
         aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
         aNodeList = bStyle ? this.cssNodes : this.nodes;

    if (bSet && bStyle) { aArgs.push(""); }
    for (
      var nItem = 0, nLen = this.nodes.length;
      nItem < nLen;
      fAction.apply(aNodeList[nItem++], aArgs)
    );
    this.follow = setSomething.caller;
    return this;
  }

  function setStyles (sProp, sVal) { return setSomething.call(this, true, sProp, sVal); }
  function setAttribs (sProp, sVal) { return setSomething.call(this, false, sProp, sVal); }
  function getSelectors () { return this.selectors; };
  function getNodes () { return this.nodes; };

  return (function (sSelectors) {
    var oQuery = new Function('return arguments.callee.follow.apply(arguments.callee, arguments);');
    oQuery.selectors = sSelectors;
    oQuery.nodes = document.querySelectorAll(sSelectors);
    oQuery.cssNodes = Array.prototype.map.call(oQuery.nodes, function (oInlineCSS) { return oInlineCSS.style; });
    oQuery.attributes = setAttribs;
    oQuery.inlineStyle = setStyles;
    oQuery.follow = getNodes;
    oQuery.toString = getSelectors;
    oQuery.valueOf = getNodes;
    return oQuery;
  });
})();
</script>
</head>

<body>

<div class="testClass">Lorem ipsum</div>
<p>Some text</p>
<div class="testClass">dolor sit amet</div>

<script type="text/javascript">
  domQuery('.testClass')
​    .attributes('lang', 'en')('title', 'Risus abundat in ore stultorum')
    .inlineStyle('background-color', 'black')('color', 'white')('width', '100px')('height', '50px');
</script>
</body>

</html>
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |