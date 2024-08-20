<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target="_blank">en</a>

# Function.prototype.apply()

apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。

`注意：该函数的语法与 call() 方法的语法几乎完全相同，唯一的区别在于，call()方法接受的是一个参数列表，而 apply()方法接受
的是一个包含多个参数的数组（或类数组对象）。`

## 语法

```javascript
fun.apply(thisArg[, argsArray])
```

### 参数

* `thisArg` 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个
函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，
字符串，布尔值）的 this 会指向该原始值的自动包装对象。

* `argsArray` 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，
则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。

## 描述

在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可
以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表（原文：a named set of parameters）。
apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。

你也可以使用 arguments  对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的
参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。
被调用对象接下来就负责处理这些参数。

从 ECMAScript 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 length 属性和[0...length) 范围的整数属性。例如现
在可以使用 NodeList 或一个自己定义的类似 {'length': 2, '0': 'eat', '1': 'bananas'} 形式的对象。

需要注意：Chrome 14 以及 Internet Explorer 9 仍然不接受类数组对象。如果传入类数组对象，它们会抛出异常。

## 示例

### 使用apply来链接构造器

你可以使用apply来给一个对象链接构造器，类似于Java. 在接下来的例子中我们会创建一个叫做construct的全局的Function函数,来使
你能够在构造器中使用一个类数组对象而非参数列表。

```javascript
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

`注意: 上面使用的Object.create()方法相对来说比较新。另一种可选的方法是使用闭包，请考虑如下替代方法：`

```javascript
Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() {
    fConstructor.apply(this, aArgs);
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};
```

使用案例：

```javascript
function MyConstructor () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs "Hello world!"
console.log(myInstance instanceof MyConstructor); // logs "true"
console.log(myInstance.constructor);              // logs "MyConstructor"
```

`注意： 这个非native的Function.construct方法无法和一些native构造器（例如Date）一起使用。 在这种情况下你必须使用Function.bind
方法（例如，想象有如下一个数组要用在Date构造器中： [2012, 11, 4]；这时你需要这样写： new (Function.prototype.bind.apply(Date,
[null].concat([2012, 11, 4])))() – -无论如何这不是最好的实现方式并且也许不该用在任何生产环境中).`

### 使用apply和内置函数

聪明的apply用法允许你在某些本来需要写成遍历数组变量的任务中使用内建的函数。在接下里的例子中我们会使用Math.max/Math.min来
找出一个数组中的最大/最小值。

```javascript
/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* vs. simple loop based algorithm */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```

但是当心：如果用上面的方式调用 apply, 你很可能会遇到方法参数个数越界的问题. 当你对一个方法传入非常多的参数 (比如超过1W多
个参数) 时, 就非常有可能会导致越界问题, 这个临界值是根据不同的 JavaScript 引擎而定的 (JavaScript 核心中已经做了硬编码
参数个数限制在65536)，因为这个限制(实际上也是任何用到超大栈空间的行为的自然表现)是未指定的. 有些引擎会抛出异常.  更糟糕
的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失. (举个例子: 如果某个引擎限制了方法参数最多为4个 [实际真正的参数
个数限制当然要高得多了, 这里只是打个比方], 上面的代码中, 真正通过 apply 传到目标方法中的参数为 5, 6, 2, 3, 而不是完整的
numbers 数组.) 如果你的参数数组可能非常大, 那么推荐使用下面这种策略来处理: 将参数数组切块后循环传入目标方法:

```javascript
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### 在"monkey-patching"中使用apply

Apply可以作为monkey-patch一个Firefox或JS库内建函数的最好方式。对于someobject.foo 函数，你可以用一种旁门左道的方式来修改这个函数，像这样：

```javascript
var originalfoo = someobject.foo;
someobject.foo = function() {
  //在调用函数前干些什么
  console.log(arguments);
  //像正常调用这个函数一样来进行调用：
  originalfoo.apply(this,arguments);
  //在这里做一些调用之后的事情。
}
```

这种方法在你想要debug事件，或者与一些没有API的东西配合，例如多种 .on([event]... events, 比如那些在Devtools Inspector中可用的).

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |