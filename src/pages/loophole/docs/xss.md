# XSS 跨站脚本攻击

XSS (Cross Site Scripting)，全称叫做 `跨站脚本攻击`

一般来说，我们是希望网站运行的东西是来自与本站的。如果网站运行了一个别的网站的东西，那么就产生了一个跨站脚本攻击

跨站脚本攻击并不是一定要引用一个远程的脚本，也可以是一个内联的脚本，比如经常使用 `alert` 来探测是否有 XSS 漏洞

例子中使用的模板引擎为 pug (jade)

## 1 危害

- 获取页面数据 (页面内的任何内容和 js 的数据)
- 获取 Cookies
- 劫持前端逻辑 (比如更改某个按钮的事件)
- 发送请求 (将敏感信息发送到攻击者的服务器)
- 取决于攻击者的想象力

* 偷取网站任意数据
* 偷取用户资料
* 偷取用户密码和登录态
* 欺骗用户

## 2 攻击类型

### 2.1 反射型

url 参数直接注入。攻击代码直接是由 url 带过来的，而且页面直接显示了这段代码

我们经常用 url query 来传递数据

比如 `http://www.xxx.com?name=233`，如果将 name 的值通过 innerHTML 的方式插入到页面中，那么这里就会有 XSS 漏洞

如：`http://www.xxx.com?name=<script>alert(1)<%2Fscript>`

如过 name 的值包含一个脚本，那么打开页面的时候就会运行。如果将这个链接发给别人，别人打开这个链接就能盗取他的信息

### 2.2 存储型

存储到 DB 后读取时注入

比如发表评论或者文章的时候，会先存储到数据库。访问的时候，这条代码会从数据库中读取出来，然后显示到用户的页面上

输入评论的时候可以输入脚本标签，在页面中展示评论的时候，如果未做处理，这么脚本就会在页面中运行

那么任意一个看到这条评论的用户都可能会受到 XSS 攻击

如果这个系统有管理端，甚至可以攻击到管理端，获取管理员的信息

> 反射型的危害略小一些，因为代码直接暴露在 url 中，而存储型很难察觉到，反射型也可以通过生成一个短网址的方式隐藏掉攻击代码

## 3 XSS 攻击注入点

### 3.1 HTML 节点内容

节点内容是动态生成的，展示用户输入的数据

例如：

```html
<!-- 通过后端模板插入数据 -->
<div>
  #{content}
</div>

<!-- 如果数据为一个 script 标签，就会运行 -->
<div>
  <script></script>
</div>
```

### 3.2 HTML 属性

节点属性是用户输入的数据，可能会越出属性的范围

例如：图片的 src 属性，src 是一个动态的值

src 的内容为 `1" onerror="alert(1)` 就会出现下面这种情况

```html
<img src="#{image}" />

<img src="1" onerror="alert(1)" />
```

### 3.3 JavaScript 代码

代码中存在由后台注入的变量，里面包含用户输入的信息，会改变代码运行的逻辑

例如：

```html
<script>
  var data = '#{data}';
  // var data = "hello";alert(1);"";
</script>
```

> 一般前后端分离的项目不会出现这个问题，变量是通过后端模板赋值的，运行时赋值不出现这个问题 (待验证)

### 3.4 富文本

富文本一大段 html 标签，而富文本需要保留 html，html 就会有 XSS 的风险

```html
<script>
  alert(1);
</script>
<img src="1" onerror="alert(1)" />
<a href="javascript:alert(1)">链接</a>
<div onclick="alert(1)">233</div>
```

## 4 XSS 防御

### 4.1 HTML 节点内容

转义标签

将 `<` `>` 转义成 `&lt;` `&gt;`，转义的时机可以是在保存到数据库前，或者是在页面展示的时候转义

转义后 script 标签就会以字符串的形式展示在页面中，而不会运行

用户输入的内容会原样展示在页面上

### 4.2 HTML 属性

转义引号

- 将双引号转义成 `&quto;`
- 单引号转义成 `&#39;`
- 空格转义成 `&#32;` (HTML 属性可以不用引号包裹，所以需要转义空格)

上面的例子就会变成：

```html
<img src="#{image}" />

<img src="1&quto;&#32;onerror=&quto;alert(1)" />
```

### 4.3 JavaScript 代码

转义引号和斜杆

- 将 `'` 转义成 `\\'`，即增加一个转义符
- 将 `"` 转义成 `\\"`，即增加一个转义符
- 将 `\` 转义成 `\\`，即 `str.replace(/\\/g, '\\\\')` 因为输入的斜杆可能会被当作转义符

这一步通常放在后端逻辑中

或者使用 JSON 转义，`JSON.stringify` 会将所以需要转义的内容转义，包括上面提到的引号和斜杆

### 4.4 富文本

XSS 防御最难处理的就是富文本，富文本是一大段 html

既然是富文本，就需要保留这些格式，没办法将标签全部转义

一般的处理方式是过滤，过滤有两种，黑名单和白名单

- 黑名单，过滤 script 标签和 onerror 等属性。实现较简单，但是 html 太繁杂，可能过滤不全
- 按白名单保留部分标签和属性。白名单是较为安全的方式，不过实现复杂

目前也有现成库用来处理富文本 [https://github.com/leizongmin/js-xss](https://github.com/leizongmin/js-xss)

### 4.5 innerHTML

[innerHTML 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)

用 innerHTML 插入文本到网页中并不罕见。但这有可能成为网站攻击的媒介，从而产生潜在的安全风险问题。

```javascript
const name = 'John';
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

尽管这看上去像 `cross-site scripting` 攻击，结果并不会导致什么。HTML 5 中指定不执行由 innerHTML 插入的 `<script>` 标签。

然而，有很多不依赖 `<script>` 标签去执行 JavaScript 的方式。所以当你使用 innerHTML 去设置你无法控制的字符串时，这仍然是一个安全问题。例如：

```javascript
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

基于这个原因，当插入纯文本时，建议不要使用 innerHTML 。取而代之的是使用 Node.textContent ，它不会把给定的内容解析为 HTML，它仅仅是将原始文本插入给定的位置。

## 5 CSP

CSP (Content Security Policy)，它是一个 http 的响应头

全称叫内容安全策略，用于指定哪些内容可执行，即使页面里面有一些注入的内容，它也不会执行

CSP 是一个可行性比较高的 XSS 防御方案

[MDN 文档 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
