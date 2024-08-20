<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw" target="_blank">en</a>

# String.raw()

## 概述

String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @，是用来获取一个模板字符串的原始字面量值的。

## 语法

```javascript
String.raw(callSite, ...substitutions)
```

### 参数

* `callSite` 一个模板字符串的“调用点对象”
* `...substitutions` 任意个可选的参数，表示任意个内插表达式对应的值

### 异常

`TypeError`

如果第一个参数没有传入一个格式良好的调用点对象，则会抛出 TypeError 异常。

## 描述

不要被上面复杂的参数要求吓到，因为像所有的标签函数一样，你通常不需要把它看成一个普通函数，你只需要把它放在模板字符串前面
就可以了，而不是在它后面加个括号和一堆参数来调用它，引擎会替你去调用它。

String.raw() 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

## 示例

```javascript
String.raw `Hi\n!`;
// "Hi\\n!"，这里得到的不是 Hi 后面跟个换行符，而是跟着 \ 和 n 两个字符

String.raw `Hi\u000A!`;
// "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6个字符，
// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length

let name = "Bob";
String.raw `Hi\n${name}!`;
// "Hi\\nBob!"，内插表达式还可以正常运行

String.raw({raw: "test"}, 0, 1, 2);
// "t0e1s2t"，我认为你通常不需要把它当成普通函数来调用
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |