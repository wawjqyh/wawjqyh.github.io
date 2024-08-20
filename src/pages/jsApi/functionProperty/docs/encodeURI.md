<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" target="_blank">en</a>

# encodeURI

encodeURI() 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符
区组成的字符才用四个转义字符编码）。

## 语法

`encodeURI(URI)`

### 参数

* `URI` 一个完整的URI.

## 描述

假定一个URI是完整的URI，那么无需对那些保留的并且在URI中有特殊意思的字符进行编码。

encodeURI 会替换所有的字符，但不包括以下字符，即使它们具有适当的UTF-8转义序列：

| 类型         | 包含                        |
|:-------------|:----------------------------|
| 保留字符     | ; , / ? : @ & = + $         |
| 非转义的字符 | 字母 数字 - _ . ! ~ * ' ( ) |
| 数字符号     | #                           |

请注意，encodeURI 自身无法产生能适用于HTTP GET 或 POST 请求的URI，例如对于 XMLHTTPRequests, 因为 "&", "+", 和 "=" 不会
被编码，然而在 GET 和 POST 请求中它们是特殊字符。然而encodeURIComponent这个方法会对这些字符编码。

另外，如果试图编码一个非高-低位完整的代理字符，将会抛出一个 URIError 错误，例如：

```javascript
// 编码高-低位完整字符 ok
console.log(encodeURI('\uD800\uDFFF'));

// 编码单独的高位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uD800'));

// 编码单独的低位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uDFFF'));
```

并且需要注意，如果URL需要遵循较新的RFC3986标准，那么方括号是被保留的(给IPv6)，因此对于那些没有被编码的URL部分(例如主机)，
可以使用下面的代码：
```javascript
function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |