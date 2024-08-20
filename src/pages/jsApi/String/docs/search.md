<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search" target="_blank">en</a>

# String.prototype.search()

search() 方法执行正则表达式和 String对象之间的一个搜索匹配。

## 语法

```javascript
str.search(regexp)
```

### 参数

* `regexp` 一个正则表达式（regular expression）对象。如果传入一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象。

### 返回值

如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。

## 描述

当你想要知道字符串中是否存在某个模式（pattern）时可使用 search，类似于正则表达式的 test 方法。当要了解更多匹配信息时，
可使用 match（会更慢），该方法类似于正则表达式的 exec 方法。

## 示例

下例记录了一个消息字符串，该字符串的内容取决于匹配是否成功。

```javascript
function testinput(re, str){
  var midstring;
  if (str.search(re) != -1){
    midstring = " contains ";
  } else {
    midstring = " does not contain ";
  }
  console.log (str + midstring + re);
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |