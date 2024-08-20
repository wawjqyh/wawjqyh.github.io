# 加载文档和其他资源

## 1 页面生命周期

### 1.1 生命周期

- `DOMContentLoaded` 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口
- `load` 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了
- `beforeunload` 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开
- `unload` 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据

### 1.2 DOMContentLoaded

`DOMContentLoaded` 事件发生在 `document` 对象上

```js
function ready() {
  alert('DOM is ready');

  // 图片目前尚未加载完成（除非已经被缓存），所以图片的大小为 0x0
  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener('DOMContentLoaded', ready);
```

- **`DOMContentLoaded` 和脚本：** 当浏览器处理一个 `HTML` 文档遇到 `<script>` 标签时，会先等待脚本加载并且运行完，因为脚本可能想要修改 `DOM`，所以 `DOMContentLoaded` 必须等待脚本执行结束
- **`DOMContentLoaded` 和样式：** 外部样式表不会影响 `DOM`，因此 `DOMContentLoaded` 不会等待样式加载。但是样式后面如果有脚本，那么该脚本必须等待样式表加载完成。

```html
<link type="text/css" rel="stylesheet" href="style.css" />
<script>
  // 在样式表加载完成之前，脚本都不会执行
  alert(getComputedStyle(document.body).marginTop);
</script>
```

### 1.3 window.onload

当整个页面，包括样式、图片和其他资源被加载完成时，会触发 `window` 对象上的 `load` 事件

### 1.4 window.onbeforeunload

离开页面的导航（navigation）或试图关闭窗口，`beforeunload` 会弹出确认弹框

> 这个事件有兼容问题。某些旧的浏览器会将返回的字符串作为提示语，目前大部分浏览器是无法自定义提示语的

```js
window.onbeforeunload = function() {
  return 'There are unsaved changes. Leave now?';
};
```

### 1.5 window.onunload

离开页面时，`window` 对象上的 `unload` 事件就会被触发。我们可以在那里做一些不涉及延迟的操作

另外我们经常需要在离开时收集一些数据发送到服务器，但是这是一个耗时操作

有一个特殊的 `navigator.sendBeacon(url, data)` 方法可以满足这种需求

> `sendBeacon` 在后台发送数据，转换到另外一个页面不会有延迟：浏览器离开页面，但仍然在执行 `sendBeacon`

### 1.6 readyState

`document.readyState` 属性可以为我们提供当前加载状态的信息

- `loading` —— 文档正在被加载
- `interactive` —— 文档被全部读取
- `complete` —— 文档被全部读取，并且所有资源（例如图片等）都已加载完成

> `readystatechange` 事件，会在状态发生改变时触发

## 2 脚本 async defer

当浏览器加载 HTML 时遇到 `<script>...</script>` 标签，浏览器就不能继续构建 DOM。它必须立刻执行此脚本

### 2.1 defer

**defer 的特性：**

- 具有 `defer` 特性的脚本不会阻塞页面
- 具有 `defer` 特性的脚本总是要等到 `DOM` 解析完毕，**但在 `DOMContentLoaded` 事件之前执行**

> 具有 defer 特性的脚本会按顺序执行，就像常规脚本一样

### 2.2 async

`async` 特性与 `defer` 类似。它也能够让脚本不阻塞页面

**async 的特性：**

- 浏览器不会因 `async` 脚本而阻塞（与 `defer` 类似）。
- 其他脚本不会等待 `async` 脚本加载完成。即没有先后顺序，加载完就会执行
- `DOMContentLoaded` 和 `async` 异步脚本无关

### 2.3 动态脚本

动态脚本就是使用 `JavaScript` 动态地创建 `script` 标签，并将其添加文档中

> 默认情况下，动态脚本的行为是 `async` 的

可以显式地设置了 `script.async=false`，那么它的行为就会变成 defer

## 3 资源加载

具有外部 `src` 的任何资源，都有 `onload/onerror` 事件

- `onload` 加载完成是触发
- `onerror` 加载失败时触发，比如地址错误

**注意：**

- 大多数资源在被添加到文档中后，便开始加载。但是 `<img>` 是个例外。它要等到获得 `src` 后才开始加载。
- 对于 `<iframe>` 来说，iframe 加载完成时会触发 `iframe.onload` 事件，**无论是成功加载还是出现 `error`**

> 跨域的脚本无法获取该脚本中的错误信息，需要允许跨源访问
