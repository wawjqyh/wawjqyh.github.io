# Frame 和 window

## 1 弹窗和 window 的方法

目前弹窗并不常用，但仍然有一些任务在使用弹窗，例如进行 `OAuth` 授权，因为：弹窗是一个独立的窗口，具有自己的独立 JavaScript 环境。因此，使用弹窗打开一个不信任的第三方网站是安全的

### 1.1 阻止弹窗

很多恶意网站经常滥用弹窗。因此，现在大多数浏览器都会通过阻止弹窗来保护用户

如果弹窗是在**用户触发**的事件处理程序（如 onclick）之外调用的，大多数浏览器都会阻止此类弹窗

### 1.2 window.open

**打开一个弹窗：**

```js
let win = window.open(url, name, params);
```

- `url` 要在新窗口中加载的 URL
- `name` 新窗口的名称。每个窗口都有一个 `window.name`，我们可以指定哪个窗口用于弹窗。如果已经有一个这样名字的窗口 —— 将在该窗口打开给定的 URL，否则会打开一个新窗口
- `params` 新窗口的配置字符串。它包括设置，用逗号分隔。参数之间不能有空格，例如：`width=200,height=100`

**params 参数：**

- `left/top`（数字）—— 屏幕上窗口的左上角的坐标。这有一个限制：不能将新窗口置于屏幕外
- `width/height`（数字）—— 新窗口的宽度和高度。宽度/高度的最小值是有限制的，因此不可能创建一个不可见的窗口
- `menubar`（yes/no）—— 显示或隐藏新窗口的浏览器菜单
- `toolbar`（yes/no）—— 显示或隐藏新窗口的浏览器导航栏（后退，前进，重新加载等）
- `location`（yes/no）—— 显示或隐藏新窗口的 URL 字段。Firefox 和 IE 浏览器不允许默认隐藏它
- `status`（yes/no）—— 显示或隐藏状态栏。同样，大多数浏览器都强制显示它
- `resizable`（yes/no）—— 允许禁用新窗口大小调整。不建议使用
- `scrollbars`（yes/no）—— 允许禁用新窗口的滚动条。不建议使用

**关闭弹窗：**

- 关闭一个窗口：`win.close()`
- 检查一个窗口是否被关闭：`win.closed`

从技术上讲，`close()` 方法可用于任何 `window`，但是如果 `window` 不是通过 `window.open()` 创建的，那么大多数浏览器都会忽略 `window.close()`

如果窗口被关闭了，那么 `closed` 属性则为 `true`。这对于检查弹窗（或主窗口）是否仍处于打开状态很有用

**滚动和调整大小：**

- `win.moveBy(x,y)` 将窗口相对于当前位置向右移动 x 像素，并向下移动 y 像素。允许负值（向上/向左移动）
- `win.moveTo(x,y)` 将窗口移动到屏幕上的坐标 (x,y) 处
- `win.resizeBy(width,height)` 根据给定的相对于当前大小的 `width/height` 调整窗口大小。允许负值
- `win.resizeTo(width,height)` 将窗口调整为给定的大小

**仅对于弹窗**。为了防止滥用，浏览器通常会阻止这些方法

> **没有最小化/最大化**。JavaScript 无法最小化或者最大化一个窗口。这些操作系统级别的功能对于前端开发者而言是隐藏的

### 1.3 同源策略

只有在窗口是同源的时，窗口才能自由访问彼此的内容

**从弹窗访问窗口：**

弹窗也可以使用 window.opener 来访问 opener 窗口。除了弹窗之外，对其他所有窗口来说，window.opener 均为 null

### 1.4 聚焦失焦

从理论上讲，使用 `window.focus()` 和 `window.blur()`方法可以使窗口获得或失去焦点。此外，还有 `focus/blur` 事件，可以捕获到访问者聚焦到一个窗口和切换到其他地方的时刻

> 在实际中它们被进行了严格地限制，因为恶意网站会滥用这些方法。浏览器必须引入很多限制，以禁用此类代码并保护用户免受广告和恶意页面的侵害

## 2 跨窗口通信

### 2.1 同源

**同源策略规定：**

- 如果我们有对另外一个窗口的引用，并且该窗口是同源的，那么我们就具有对该窗口的全部访问权限
- 如果窗口不是同源的，那么我们就无法访问该窗口中的内容：变量，文档，任何东西
- **唯一的例外**是 `location`：我们可以修改它（进而重定向用户）。但是我们无法读取 `location`

### 2.2 document.domain

根据定义，两个具有不同域的 URL 具有不同的源。

但是，如果窗口的二级域相同，例如 `john.site.com`，`peter.site.com` 和 `site.com`（它们共同的二级域是 `site.com`），我们可以使浏览器忽略该差异，使得它们可以被作为“同源”的来对待，以便进行跨窗口通信

为了做到这一点，每个这样的窗口都应该执行下面这行代码：

```js
document.domain = 'site.com';
```

### 2.3 window.frames

可以从 `window.frames` 获取 `iframe` 的 window 对象：

- 通过索引获取：`window.frames[0]` —— 文档中的第一个 iframe 的 window 对象
- 通过名称获取：`window.frames.iframeName` —— 获取 `name="iframeName"` 的 iframe 的 window 对象

一个 iframe 内可能嵌套了其他的 iframe。相应的 window 对象会形成一个层次结构：

- `window.frames` —— 子窗口的集合（用于嵌套的 iframe）
- `window.parent` —— 对父（外部）窗口的引用
- `window.top` —— 对最顶级父窗口的引用

### 2.4 sandbox

`sandbox` 属性允许在 `<iframe>` 中禁止某些特定行为，以防止其执行不被信任的代码。它通过将 `iframe` 视为非同源的，或者应用其他限制来实现 `iframe` 的沙盒化

`<iframe sandbox src="...">` 默认的属性为最严格的限制

可以通过参数配置相关限制：

- `allow-same-origin` 默认情况下，sandbox 会为 iframe 强制实施 “不同来源” 的策略。它使浏览器将 iframe 视为来自另一个源，即使其 src 指向的是同一个网站也是如此。具有所有隐含的脚本限制。此选项会移除这些限制
- `allow-top-navigation` 允许 iframe 更改 parent.location
- `allow-forms` 允许在 iframe 中提交表单
- `allow-scripts` 允许在 iframe 中运行脚本
- `allow-popups` 允许在 iframe 中使用 window.open 打开弹

### 2.5 跨窗口通信

`postMessage` 接口允许窗口之间相互通信，无论是否同源

想要发送消息的窗口需要调用接收窗口的 postMessage 方法

```js
win.postMessage(data, targetOrigin) // win 为接收窗口
```

**参数：**

- `data` 要发送的数据。可以是任何对象，数据会被通过使用结构化序列化算法进行克隆。IE 浏览器只支持字符串，因此我们需要对复杂的对象调用 `JSON.stringify` 方法进行处理，以支持该浏览器
- `targetOrigin` 指定目标窗口的源，以便只有来自给定的源的窗口才能获得该消息

> `targetOrigin` 是一种安全措施。如果目标窗口是非同源的，我们无法在发送方窗口读取它的 `location`。因此，我们无法确定当前在预期的窗口中打开的是哪个网站：用户随时可以导航离开，并且发送方窗口对此一无所知

```html
<iframe src="http://example.com" name="example">

<script>
  let win = window.frames.example;

  win.postMessage("message", "http://example.com");
</script>
```

**onmessage**

目标接口接收消息事件

```js
window.addEventListener("message", function(event) {
  if (event.origin != 'http://javascript.info') {
    return;
  }

  console.log( "received: " + event.data );

  // 可以使用 event.source.postMessage(...) 向回发送消息
});
```

**event 对象具有特殊属性：**

- `data` 从 postMessage 传递来的数据
- `origin` 发送方的源
- `source` 对发送方窗口的引用

## 3 点击劫持攻击

诱导点击透明的 iframe，iframe 内嵌被攻击的网站

### 3.1 传统防御

禁止页面在 iframe 打开

```js
if (top != window) {
  top.location = window.location;
}
```

这个方法并不可靠，有许多方式可以绕过这个限制：

**阻止顶级导航：**

```js
window.onbeforeunload = function() {
  return false;
};
```

当 `iframe` 试图更改 `top.location` 时，访问者会收到一条消息，询问他们是否要离开页面。在大多数情况下，访问者会做出否定的回答

**Sandbox 特性：**

`sandbox` 特性的限制之一就是导航。沙箱化的 `iframe` 不能更改 `top.location`

添加具有 `sandbox="allow-scripts allow-forms"` 的 `iframe`，允许脚本和表单。没添加 `allow-top-navigation`，因此更改 `top.location` 是被禁止的

### 3.2 X-Frame-Options

服务器端 `header` `X-Frame-Options` 可以允许或禁止在 frame 中显示页面。

参数：

- `DENY` 始终禁止在 frame 中显示此页面
- `SAMEORIGIN` 允许在和父文档同源的 frame 中显示此页面
- `ALLOW-FROM domain` 允许在来自给定域的父文档的 frame 中显示此页面

### 3.3 显示禁用的功能

`X-Frame-Options` 有一个副作用。其他的网站即使有充分的理由也无法在 frame 中显示我们的页面

可以用一个 `div` 覆盖整个页面，判断 `window === top` 或者确认不需要防护时，将 `div` 删除

### 3.4 Samesite cookie 特性

具有 `samesite` 特性的 `cookie` 仅在网站是通过直接方式打开（而不是通过 frame 或其他方式）的情况下才发送到网站

```
Set-Cookie: authorization=secret; samesite
```

当不使用 `cookie` 时，`samesite cookie` 特性将不会有任何影响。这可以使其他网站能够轻松地在 `iframe` 中显示我们公开的、未进行身份验证的页面。

然而，这也可能会使得劫持攻击在少数情况下起作用。例如，通过检查 `IP` 地址来防止重复投票的匿名投票网站仍然会受到点击劫持的攻击，因为它不使用 `cookie` 对用户身份进行验证
