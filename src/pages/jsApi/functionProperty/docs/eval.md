<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank">en</a>

# eval()

eval()函数会将传入的字符串当做JavaScript代码进行执行。

## 1、语法

`eval(string)`

### (1) 参数

* `string` 一串表示JavaScript表达式，语句， 或者是一系列语句的字符串。表达式可以包括变量以及已存在对象的属性。

### (2) 返回值

执行指定代码之后的返回值。如果返回值为空，返回undefined

## 2、描述
eval()是全局对象的一个函数属性。

eval()的参数是一个字符串。如果字符串表示的是表达式，eval()会对表达式进行求值。如果参数表示一个或多个JavaScript语句，
那么eval()就会执行这些语句。注意不要用eval()来执行一个四则运算表达式；因为 JavaScript 会自动为四则运算求值并不需要用eval来包裹。

`这里的四则运算是指数学上的运算，如：3 + 4 * 4 / 6。注意这里面并没有变量，只是单纯的数学运算，这样的运算式并不需要调用eval来计算，
直接在代码中计算就可以。其实即便带有变量，JavaScript也是可以直接计算的，但是如果你现在只想声明一个带有变量的表达式，但是想稍后进行运算
（你有可能在声明这个带有变量的运算式之后还有可能对里面的变量进行修改），就可以使用eval。`

如果要将算数表达式构造成为一个字符串，你可以用eval()在随后对其求值。比如，假如你有一个变量 x ，你可以通过一个字符串表达式来对涉及x的表达式延迟求值，
将 "3 * x + 2"，存储为变量，然后在你的脚本后面的一个地方调用eval()。

如果eval()的参数不是字符串，eval()将会将参数原封不动的返回。在下面的例子中，字符串构造器被指定，eval()返回了字符串对象而不是对字符串求值。

```javascript
eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象
eval("2 + 2");             // returns 4
```

你可以使用通用的的方法来绕过这个限制，如使用toString()

```javascript
var expression = new String("2 + 2");
eval(expression.toString());
```

如果你间接的使用 eval(), 如通过一个引用来调用它而不是直接的调用eval。 从ECMAScript 5起它工作在全局作用域而不是局部作用域中；
这就意味着，例如，下面的代码的作用声明创建一个全局函数，并且geval中的这些代码在执行期间不能在被调用的作用域中访问局部变量。

```javascript
function test() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // 直接调用，使用本地作用域，结果是 6
  var geval = eval;
  console.log(geval("x + y")); // 间接调用，使用全局作用域，throws ReferenceError 因为`x`未定义
}
```

## 3、避免在不必要的情况下使用eval

eval() 是一个危险的函数， 他执行的代码拥有着执行者的权利。如果你用eval()运行的字符串代码被恶意方（不怀好意的人）操控修改,
您可能会利用最终在用户机器上运行恶意方部署的恶意代码，并导致您失去您的网页或者扩展程序的权限。更重要的是，第三方代码可以
看到某一个eval()被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的Function就是不容易被攻击的。

eval()的运行效率也普遍的比其他的替代方案慢，因为他会调用js解析器，即便现代的JS引擎中已经对此做了优化。

更为安全（也更快）的替代eval()的是普通的用例。

### (1) 访问成员属性

你不应该去使用eval()来将属性名字转化为对象的属性属性。考虑下面的这个例子，被访问对象的属性在它被执行之前都会未知的。这里虽然可以被处理用exal：

```javascript
var obj = { a: 20, b: 30 };
var propName = getPropName();

eval( 'var result = obj.' + propsName )
```

但是，这里并不是必须得使用eval()。事实上，这里并不支持这样使用。可以使用属性访问器进行代替，它更快而且更安全：

```javascript
var obj = { a: 20, b: 30 }
var propName = getPropName();
var result = obj[ propName ];
```

你还可以使用这个方法去访问子代的属性。如下：

```javascript
var obj = {a: {b: {c: 0}}};
var propPath = getPropPath(); // 返回  例如："a.b.c"

eval( 'var result = obj.' + propPath )
```

这里则通过规避使用Eval()实现了循环获取子代的属性：

```javascript
function getDescendantantProp(obj, desc) {
    var arr = desc.split('.');
    while(arr.length) {
        obj = obj[arr.shift()];
    }
    return obj;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath(); // 返回，例如 "a.b.c"
var result = getDescendantProp(obj, propPath);
```

同样的方法也可实现设置子代的属性值:

```javascript
function setDescendantProp(obj, desc, value) {
  var arr = desc.split('.');
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  obj[arr[0]] = value;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // returns e.g. "a.b.c"
var result = setDescendantProp(obj, propPath, 1);  // test.a.b.c will now be 1
```

### (2) 使用函数而非代码段

JavaScript拥有first-class functions,这意味着你可以将函数直接作为参数传递给其他接口，并将他们保存在变量中或者对象的属性中等等，
很多DOM的API都用这种思路进行设计，你也可以（或者应该）这样子设计你的代码：

```javascript
// instead of setTimeout(" ... ", 1000) use:
setTimeout(function() { ... }, 1000);

// instead of elt.setAttribute("onclick", "...") use:
elt.addEventListener('click', function() { ... } , false);
```

Closures 也可以作为一种创建参数化函数而不连接字符串的方法.

### (3) 解析 JSON（将字符串转化为JavaScript对象）

如果你在调用eval()传入的字符串参数中更包含数据（如：一个数组“\[1,2,3\]”）而不是代码,你应该考虑将其转换为JSON对象，这允许你用JavaScript
语法的子集来表示数据。在扩展中下载JSON和JavaScript

`提示：因为JSON语法子集相对于JavaScript语法子集比较有局限性，很多在JavaScript中可用的特性在JSON中就不起作用了，如：后缀都好JSON就不支持，并且，
对象中的属性名在JSON中必须用引号括起来，所以在使用JSON序列化将字符串转化为JSON对象时需确认字符串格式`

#### 尽量传递数据而非代码

例如，设计用于擦除网页内容的扩展可能会在XPath中定义规则，而不是JavaScript代码。

### (4) Run code with limited privileges

If you must run code, consider running it with reduced privileges. This advice applies mainly to extensions and XUL applications,
which can use Components.utils.evalInSandbox for this.

#### 转化成员属性

你不应该在属性里通过eval来转化属性。考虑下面的例子： getFieldName(n) 函数将指定的表单元素按字符串返回， 将表单的第三个元素赋值给了
一个变量声明 field ，第二句声明使用eval()来展示表单元素的值。

```javascript
var field = getFieldName(3);
document.write("The field named ", field, " has value of ", eval(field + ".value"));
```

也许，这里的eval()不是必要的，事实上，这里使用eval()是不鼓励的。 取而代之的是使用 member operators, 那会快很多:

```javascript
var field = getFieldName(3);
document.write("The field named ", field, " has value of ", field[value]);
```

### (5) Cross-implementation compatibility

应该被注意的是，eval的第二个参数是非标准的，在JavaScript实现中不被支持的；在写这篇文章的时候，Rhino没有提供支持，也不是 Safari's 的核心JavaScript代码。

为了维持兼容性，采用交叉实现，它被推荐第二个参数不被使用，为了达到相同的效果，不如使用 with 声明 。

```javascript
eval(string,object);
```

使用

```javascript
with (object) {
  eval(string);
}
```

## 4、例子

下面的例子展示了使用 document.write来输出。在服务器端的 JavaScript，你可以使用write 函数来达到document.write的效果。

### (1) 使用 eval

在下面的代码中，两种声明都返回了42。第一种是对字符串 "x + y + 1"求值；第二种是对字符串 "42"求值。

```javascript
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z);           // returns 42
```

### (2) 使用 eval 对JavaScript声明求值

下面的例子使用eval() 对str字符串求值。这个字符串包含了JavaScript声明，如果x等于5，就打开一个Alert 对话框，然后对 z 赋值。
否则就对z赋值0。 当第二个声明被执行， eval 将会将str表达式执行，然后会对声明集合求值，并将返回值赋值给z。

```javascript
var str = "if (x == 5) {alert('z is 42'); z = 42;} else z = 0; ";
document.write("<P>z is ", eval(str));
```

### (3) 返回值

eval 将会返回对最后一个表达式的求值结果。

```javascript
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str);  // returns 2
alert("b is : " + b);
a = false;
b = eval(str);  // returns 3
alert("b is : " + b);
```

## 5、规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 1st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |