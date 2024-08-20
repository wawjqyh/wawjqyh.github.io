# UI 事件

## 1 鼠标事件

### 1.1 鼠标事件类型

- `mousedown/mouseup` 在元素上点击/释放鼠标按钮
- `mouseover/mouseout` 鼠标指针从一个元素上移入/移出
- `mousemove` 鼠标在元素上的每个移动都会触发此事件
- `click` 如果使用的是鼠标左键，则在同一个元素上的 mousedown 及 mouseup 相继触发后，触发该事件
- `dblclick` 在短时间内双击同一元素后触发。如今已经很少使用了
- `contextmenu` 在鼠标右键被按下时触发。还有其他打开上下文菜单的方式，例如使用特殊的键盘按键，在这种情况下它也会被触发，因此它并不完全是鼠标事件
- ...

### 1.2 事件顺序

一个用户操作可能会触发多个事件

例如，点击鼠标左键，在鼠标左键被按下时，会首先触发 `mousedown`，然后当鼠标左键被释放时，会触发 `mouseup` 和 `click`

> 在单个动作触发多个事件时，事件的顺序是固定的

### 1.3 鼠标按钮

与点击相关的事件始终具有 button 属性，该属性允许获取确切的鼠标按钮

**`event.button` 的所有可能值如下：**

| 鼠标按键状态     | event.button |
| ---------------- | ------------ |
| 左键 (主要按键)  | 0            |
| 中键 (辅助按键)  | 1            |
| 右键 (次要按键)  | 2            |
| X1 键 (后退按键) | 3            |
| X2 键 (前进按键) | 4            |

触屏设备中的点按操作也会触发类似的事件

**过时的 `event.which`**，一些老代码可能会使用 `event.which` 属性来获得按下的按键

### 1.4 组合键

所有的鼠标事件都包含有关按下的组合键的信息

组合键：`shift`，`alt`，`ctrl`，`meta`

**事件属性：**

- **shiftKey：** Shift
- **altKey：** Alt（或对于 Mac 是 Opt）
- **ctrlKey：** Ctrl
- **metaKey：** 对于 Mac 是 Cmd

> 注意：在 Mac 上我们通常使用 Cmd 代替 Ctrl

如果在事件期间按下了相应的键，则它们为 true

下面这个按钮仅在 Alt+Shift+click 时才有效：

```html
<button id="button">Alt+Shift+Click on me!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Hooray!');
    }
  };
</script>
```

### 1.5 坐标

所有的鼠标事件都提供了两种形式的坐标：

- 相对于窗口的坐标：`clientX` 和 `clientY`
- 相对于文档的坐标：`pageX` 和 `pageY`

相对于文档的坐标 `pageX/Y` 以文档的左上角为参照物，并且同一位置的坐标**不随**页面的滚动而改变。相对于窗口的坐标 `clientX/Y` 以当前窗口的左上角为参照物，并且同一位置的坐标**会随**着页面的滚动而改变

## 2 鼠标移动

### 2.1 mouseover 和 mouseout

当鼠标指针移到某个元素上时，`mouseover` 事件就会发生，而当鼠标离开该元素时，`mouseout` 事件就会发生

这些事件很特别，因为它们具有 `relatedTarget` 属性

此属性是对 `target` 的补充。当鼠标从一个元素离开并去往另一个元素时，其中一个元素就变成了 `target`，另一个就变成了 `relatedTarget`

**对于 mouseover：**

- `event.target` —— 是鼠标移过的那个元素
- `event.relatedTarget` —— 是鼠标来自的那个元素（relatedTarget → target）

**对于 mouseout ：**

- `event.target` —— 是鼠标离开的元素。
- `event.relatedTarget` —— 是鼠标移动到的，当前指针位置下的元素（target → relatedTarget）。

> `relatedTarget` 可以为 `null`，意味着鼠标不是来自另一个元素，而是来自窗口之外。或者它离开了窗口

### 2.2 跳过元素

浏览器会一直检查鼠标的位置。如果发现了变化，就会触发事件。这意味着，如果访问者非常快地移动鼠标，那么某些 DOM 元素就可能被跳过

> 但是如果 `mouseover` 被触发了，则必须有 `mouseout` <br>
> 在鼠标快速移动的情况下，中间元素可能会被忽略，但是我们可以肯定一件事：如果鼠标指针进入了一个元素（生成了 `mouseover` 事件），那么一旦它离开，我们就会得到 `mouseout`

> 当移动到一个子元素时会触发 `mouseout`

### 2.3 mouseenter 和 mouseleave

事件 mouseenter/mouseleave 类似于 mouseover/mouseout。它们在鼠标指针进入/离开元素时触发

**但是有两个重要的区别：**

- 元素内部与后代之间的转换不会产生影响
- 事件 mouseenter/mouseleave 不会冒泡

## 3 鼠标拖拽

基础的拖放算法如下所示：

1. 在 `mousedown` 上 —— 根据需要准备要移动的元素
1. 然后在 mousemove 上，通过更改 `position:absolute` 情况下的 `left/top` 来移动它
1. 在 `mouseup` 上 —— 执行与完成的拖放相关的所有行为

## 4 指针事件

指针事件（Pointer Events）是一种用于处理来自各种输入设备（例如鼠标、触控笔和触摸屏等）的输入信息的现代化解决方案

### 4.1 历史

很早以前，只存在鼠标事件

后来，触屏设备开始普及，尤其是手机和平板电脑。为了使现有的脚本仍能正常工作，它们生成（现在仍生成）鼠标事件。例如，轻触屏幕就会生成 `mousedown` 事件。因此，触摸设备可以很好地与网页配合使用

但是，触摸设备比鼠标具有更多的功能。例如，我们可以同时触控多点（多点触控）。然而，鼠标事件并没有相关属性来处理这种多点触控

因此，引入了触摸事件，例如 `touchstart`、`touchend` 和 `touchmove`，它们具有特定于触摸的属性

不过这还是不够完美。因为很多其他输入设备（如触控笔）都有自己的特性。而且同时维护两份分别处理鼠标事件和触摸事件的代码，显得有些笨重

为了解决这些问题，人们引入了全新的规范「指针事件」。它为各种指针输入设备提供了一套统一的事件

目前，各大主流浏览器已经支持了 `Pointer Events Level 2` 标准，版本更新的 `Pointer Events Level 3` 已经发布，并且大多数情况下与 `Pointer Events Level 2` 兼容

> 因此，除非你写的代码需要兼容旧版本的浏览器，例如 `IE 10` 或 `Safari 12` 或更低的版本，否则无需继续使用鼠标事件或触摸事件 —— **我们可以使用指针事件**

### 4.2 指针事件类型

指针事件的命名方式和鼠标事件类似：

| 指针事件           | 类似的鼠标事件 |
| ------------------ | -------------- |
| pointerdown        | mousedown      |
| pointerup          | mouseup        |
| pointermove        | mousemove      |
| pointerover        | mouseover      |
| pointerout         | mouseout       |
| pointerenter       | mouseenter     |
| pointerleave       | mouseleave     |
| pointercancel      | -              |
| gotpointercapture  | -              |
| lostpointercapture | -              |

### 4.3 指针事件属性

**指针事件具备和鼠标事件完全相同的属性，包括 `clientX/Y` 和 `target` 等，以及一些其他属性：**

- `pointerId` —— 触发当前事件的指针唯一标识符。浏览器生成的。使我们能够处理多指针的情况，例如带有触控笔和多点触控功能的触摸屏
- `pointerType` —— 指针的设备类型。可以是：`mouse`、`pen` 或 `touch`
- `isPrimary` —— 当指针为首要指针（多点触控时按下的第一根手指）时为 true

**有些指针设备会测量接触面积和点按压力（例如一根手指压在触屏上），对于这种情况可以使用以下属性：**

- `width` —— 指针（例如手指）接触设备的区域的宽度。对于不支持的设备（如鼠标），这个值总是 1
- `height` —— 指针（例如手指）接触设备的区域的长度。对于不支持的设备，这个值总是 1
- `pressure` —— 触摸压力，是一个介于 0 到 1 之间的浮点数。对于不支持压力检测的设备，这个值总是 0.5（按下时）或 0
- `tangentialPressure` —— 归一化后的切向压力（tangential pressure）
- `tiltX`, `tiltY`, `twist` —— 针对触摸笔的几个属性，用于描述笔和屏幕表面的相对位置

### 4.4 多点触控

指针事件使我们能够通过 `pointerId` 和 `isPrimary` 属性的帮助，能够处理多点触控

第一个手指触摸：`pointerdown` 事件触发，`isPrimary = true`，并且被指派了一个 `pointerId`

第二个和后续的更多个手指触摸（假设第一个手指仍在触摸）：`pointerdown` 事件触发，`isPrimary = false`，并且每一个触摸都被指派了不同的 `pointerId`

### 4.5 pointercancel 事件

`pointercancel` 事件将会在一个正处于活跃状态的指针交互由于某些原因被中断时触发。也就是在这个事件之后，该指针就不会继续触发更多事件了

**导致指针中断的可能原因如下：**

- 指针设备硬件在物理层面上被禁用
- 设备方向旋转（例如给平板转了个方向）
- 浏览器打算自行处理这一交互，比如将其看作是一个专门的鼠标手势或缩放操作等 (需要禁用 drag 事件)

### 4.6 指针捕获

指针捕获（Pointer capturing）是针对指针事件的一个特性

**主要的方法是：**

`elem.setPointerCapture(pointerId)` —— 将给定的 `pointerId` 绑定到 `elem`

在调用之后，所有具有相同 `pointerId` 的指针事件都将 `elem` 作为目标（就像事件发生在 `elem` 上一样），无论这些 `elem` 在文档中的实际位置是什么

换句话说，`elem.setPointerCapture(pointerId)` 将所有具有给定 `pointerId` 的后续事件重新定位到 `elem`

**绑定会在以下情况下被移除：**

- 当 `pointerup` 或 `pointercancel` 事件出现时，绑定会被自动地移除
- 当 `elem` 被从文档中移除后，绑定会被自动地移除
- 当 `elem.releasePointerCapture(pointerId)` 被调用，绑定会被移除

**指针捕获为我们带来了两个好处：**

1. 代码变得更加简洁，我们不再需要在整个 document 上添加/移除处理程序。绑定会被自动释放
1. 如果文档中有其他指针事件处理程序，则在用户拖动滑动条时，它们不会因指针的移动被意外地触发

**还有两个与指针捕获相关的事件：**

- `gotpointercapture` 会在一个元素使用 `setPointerCapture` 来启用捕获后触发
- `lostpointercapture` 会在捕获被释放后触发：其触发可能是由于 `releasePointerCapture` 的显式调用，或是 `pointerup/pointercancel` 事件触发后的自动调用

## 5 键盘事件

### 5.1 keydown 和 keyup

**event.code 和 event.key**

- 事件对象的 `key` 属性允许获取字符
- 而事件对象的 `code` 属性则允许获取 “物理按键代码”

| Key     | event.key | event.code |
| ------- | --------- | ---------- |
| Z       | z（小写） | KeyZ       |
| Shift+Z | Z（大写） | KeyZ       |

> 如果用户使用不同的语言，那么切换到另一种语言将产生完全不同的字符，而不是 "Z"

> 如果按键没有给出任何字符。例如，`Shift` 或 `F1` 或其他。对于这些按键，它们的 `event.key` 与 `event.code` 大致相同

> `event.code` 准确地标明了哪个键被按下了。例如，大多数键盘有两个 `Shift` 键，一个在左边，一个在右边。`event.code` 返回按下了哪个键，而 `event.key` 返回它是什么（一个 Shift）

`event.code` 可能由于意外的键盘布局而与错误的字符进行了匹配。不同键盘布局中的相同字母可能会映射到不同的物理键，从而导致了它们有不同的代码

### 5.2 自动重复

如果按下一个键足够长的时间，它就会开始自动重复：`keydown` 会被一次又一次地触发，然后当按键被释放时，我们最终会得到 `keyup`。因此，有很多 `keydown` 却只有一个 `keyup` 是很正常的

> 对于由自动重复触发的事件，`event` 对象的 `event.repeat` 属性被设置为 `true`

### 5.2 默认行为

**默认行为例如：**

- 出现在屏幕上的一个字符
- 一个字符被删除（Delete 键）
- 滚动页面（PageDown 键）
- 浏览器打开保存页面对话框（Ctrl+S）

阻止对 `keydown` 的默认行为可以取消大多数的行为，但基于 OS 的特殊按键除外。例如，在 Windows 中，`Alt+F4` 会关闭当前浏览器窗口。并且无法通过在 JavaScript 中阻止默认行为来阻止它

> 从事件处理程序返回 `false` 会阻止事件的默认行为

### 5.3 遗存

过去曾经有一个 `keypress` 事件，还有事件对象的 `keyCod`e、`charCode` 和 `which` 属性

大多数浏览器对它们都存在兼容性问题，以致使该规范的开发者不得不弃用它们并创建新的现代的事件（本文上面所讲的这些事件）。旧的代码仍然有效，因为浏览器还在支持它们，但现在完全没必要再使用它们

## 6 滚动事件

scroll 事件在 window 和可滚动元素上都可以运行。

**阻止滚动：**

我们不能通过在 `onscroll` 监听器中使用 `event.preventDefault()` 来阻止滚动，因为它会在滚动发生 `之后` 才触发

但是我们可以在导致滚动的事件上，例如在 `pageUp` 和 `pageDown` 的 `keydown` 事件上，使用 `event.preventDefault()` 来阻止滚动

启动滚动的方式有很多，使用 CSS 的 `overflow` 属性更加可靠
