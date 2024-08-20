<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank">原文链接</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank">en</a>

# encodeURIComponent()

## 概述

encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的
UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。

## 语法

`encodeURIComponent(str);`

### 参数

`str` String.URI 的组成部分。

## 描述
encodeURIComponent 转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符。

注意，如果试图编码一个非高-低位完整的代理字符，将会抛出一个 URIError 错误，例如：

```javascript
// 高低位完整
alert(encodeURIComponent('\uD800\uDFFF'));

// 只有高位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uD800'));

// 只有低位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uDFFF'));
```

为了避免服务器收到不可预知的请求，对任何用户输入的作为URI部分的内容你都需要用encodeURIComponent进行转义。比如，一个用户
可能会输入"Thyme &time=again"作为comment变量的一部分。如果不使用encodeURIComponent对此内容进行转义，服务器得到的将是
comment=Thyme%20&time=again。请注意，"&"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是comment=Thyme，
另一个则是time=again），而不是一个键值对。

对于 application/x-www-form-urlencoded (POST) 这种数据方式，空格需要被替换成 '+'，所以通常使用 encodeURIComponent 的时候
还会把 "%20" 替换为 "+"。

为了更严格的遵循 RFC 3986（它保留 !, ', (, ), 和 *），即使这些字符并没有正式划定 URI 的用途，下面这种方式是比较安全的：
```javascript
function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
```

## 示例

下面这个例子提供了 UTF-8 下 Content-Disposition 和 Link 的服务器响应头信息的参数（例如 UTF-8 文件名)：

```javascript
var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''" + encodeRFC5987ValueChars(fileName);

console.log(header);
// 输出 "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).

        // 注意，仅管 RFC3986 保留 "!"，但 RFC5987 并没有
        // 所以我们并不需要过滤它
        replace(/['()]/g, escape).  // i.e., %27 %28 %29

        replace(/\*/g, '%2A').

        // 下面的并不是 RFC5987 中 URI 编码必须的
        // 所以对于 |`^ 这3个字符我们可以稍稍提高一点可读性
        replace(/%(?:7C|60|5E)/g, unescape);
}
```

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3st Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |