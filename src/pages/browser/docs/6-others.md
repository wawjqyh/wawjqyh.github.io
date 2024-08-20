# 其他

## 1 DOM 变动观察器

`MutationObserver` 是一个内建对象，它观察 DOM 元素，并在检测到更改时触发回调

### 1.1 语法

```js
// 创建一个带有回调函数的观察器
let observer = new MutationObserver(callback);

// 然后将其附加到一个 DOM 节点：
observer.observe(node, config);
```

**config：**

- `childList` —— node 的直接子节点的更改
- `subtree` —— node 的所有后代的更改
- `attributes` —— node 的特性（attribute）
- `attributeFilter` —— 特性名称数组，只观察选定的特性
- `characterData` —— 是否观察 node.data（文本内容）

**其他几个选项：**

- `attributeOldValue` —— 如果为 true，则将特性的旧值和新值都传递给回调，否则只传新值（需要 `attributes` 选项）
- `characterDataOldValue` —— 如果为 true，则将 `node.data` 的旧值和新值都传递给回调，否则只传新值（需要 `characterData` 选项）

在发生任何更改后，执行回调：更改被作为一个 `MutationRecord` 对象列表传入第一个参数，观察器自身作为第二个参数

**MutationRecord 对象：**

- `type` —— 变动类型，以下类型之一：
  - `attributes`：特性被修改了
  - `characterData`：数据被修改了，用于文本节点
  - `childList`：添加/删除了子元素
- `target` —— 更改发生的地方：`attributes` 所在的元素，或 `characterData` 所在的文本节点，或 `childList` 变动所在的元素
- `addedNodes/removedNodes` —— 添加/删除的节点
- `previousSibling/nextSibling` —— 添加/删除的节点的上一个/下一个兄弟节点
- `attributeName/attributeNamespace` —— 被更改的特性的名称/命名空间（用于 XML）
- `oldValue` —— 之前的值，仅适用于特性或文本更改，如果设置了相应选项 `attributeOldValue/characterDataOldValue`

### 1.2 用于集成

`MutationObserver` 的使用场景：

例如添加一个第三方脚本，该脚本不仅包含有用的功能，还会执行一些我们不想要的操作，例如显示广告

使用 `MutationObserver`，我们可以监测到我们不需要的元素何时出现在我们的 DOM 中，并将其删除

### 1.3 其他方法

**`observer.disconnect()` 停止观察：**

停止观察时，观察器可能尚未处理某些更改

**`observer.takeRecords()` 获取尚未处理的变动记录列表：**

表中记录的是已经发生，但回调暂未处理的变动

**垃圾回收：**

观察器在内部对节点使用弱引用，并不能阻止垃圾回收

## 2 Selection 和 Range

可用作自动选中，比如选中某段文字

### 2.1 Range 方法

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<script>
  // 选择 `Example: <i>italic</i>`。它是 `<p>` 的前两个子节点（文本节点也算在内）：
  let range = new Range();

  range.setStart(p, 0);
  range.setEnd(p, 2);

  // 范围的 toString 以文本形式返回其内容（不带标签）
  alert(range); // Example: italic

  // 将此范围应用于文档选择
  document.getSelection().addRange(range);
</script>
```

**设置范围的起点：**

- `setStart(node, offset)` 将起点设置在：node 中的位置 offset
- `setStartBefore(node)` 将起点设置在：node 前面
- `setStartAfter(node)` 将起点设置在：node 后面

**设置范围的终点：**

- `setEnd(node, offset)` 将终点设置为：node 中的位置 offset
- `setEndBefore(node)` 将终点设置为：node 前面
- `setEndAfter(node)` 将终点设置为：node 后面

> node 既可以是文本节点，也可以是元素节点：对于文本节点，offset 偏移的是字符数，而对于元素节点则是子节点数

**其他：**

- `selectNode(node)` 设置范围以选择整个 node
- `selectNodeContents(node)` 设置范围以选择整个 node 的内容
- `collapse(toStart)` 如果 `toStart = true` 则设置 `end = start`，否则设置 `start = end`，从而折叠范围
- `cloneRange()` 创建一个具有相同起点/终点的新范围

**操纵范围内的内容：**

- `deleteContents()` —— 从文档中删除范围内容
- `extractContents()` —— 从文档中删除范围内容，并将删除的内容作为 `DocumentFragment` 返回
- `cloneContents()` —— 复制范围内容，并将复制的内容作为 `DocumentFragment` 返回
- `insertNode(node)` —— 在范围的起始处将 node 插入文档
- `surroundContents(node)` —— 使用 node 将所选范围内容包裹起来。要使此操作有效，则该范围必须包含其中所有元素的开始和结束标签：不能像 `<i>abc` 这样的部分范围

**range 对象属性：**

- `startContainer`, `startOffset` —— 起始节点和偏移量
- `endContainer`, `endOffset` —— 结束节点和偏移量
- `collapsed` —— 布尔值，如果范围在同一点上开始和结束（所以范围内没有内容）则为 `true`
- `commonAncestorContainer` —— 在范围内的所有节点中最近的共同祖先节点

**实例：**

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
<p id="result"></p>

<script>
  let range = new Range();

  let p = document.querySelector('#p');
  let result = document.querySelector('#result');

  // 下面演示了上述的每个方法：
  let methods = {
    deleteContents() {
      range.deleteContents();
    },

    extractContents() {
      let content = range.extractContents();
      result.innerHTML = '';
      result.append('extracted: ', content);
    },

    cloneContents() {
      let content = range.cloneContents();
      result.innerHTML = '';
      result.append('cloned: ', content);
    },

    insertNode() {
      let newNode = document.createElement('u');
      newNode.innerHTML = 'NEW NODE';
      range.insertNode(newNode);
    },

    surroundContents() {
      let newNode = document.createElement('u');
      try {
        range.surroundContents(newNode);
      } catch (e) {
        console.log(e);
      }
    },

    resetExample() {
      p.innerHTML = `Example: <i>italic</i> and <b>bold</b>`;
      result.innerHTML = '';

      range.setStart(p.firstChild, 2);
      range.setEnd(p.querySelector('b').firstChild, 3);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  for (let method in methods) {
    document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`);
  }

  methods.resetExample();
</script>
```

还有比较范围的方法，但是很少使用。参考 [MDN 手册](https://developer.mozilla.org/zh-CN/docs/Web/api/Range)

### 2.2 Selection 方法

`Range` 是用于管理选择范围的通用对象。在视觉上不会自行选择任何内容

文档选择是由 `Selection` 对象表示的，可通过 `window.getSelection()` 或 `document.getSelection()` 来获取

只有 Firefox 支持选中多个范围，其他浏览器最多支持 1 个范围

```js
let selection = window.getSelection();

selection.addRange(range);
```

与范围相似，选择的起点称为 `锚点（anchor）`，终点称为 `焦点（focus）`

**Selection 属性：**

- `anchorNode` —— 选择的起始节点
- `anchorOffset` —— 选择开始的 `anchorNode` 中的偏移量
- `focusNode` —— 选择的结束节点
- `focusOffset` —— 选择开始处 `focusNode` 的偏移量
- `isCollapsed` —— 如果未选择任何内容（空范围）或不存在，则为 `true`
- `rangeCount` —— 选择中的范围数，除 Firefox 外，其他浏览器最多为 1

> 在文档中，选择的终点可能在起点之前。其中的某些方式，例如鼠标，允许从两个方向创建相同的选择：“从左到右”和“从右到左”

**Selection 方法：**

**添加/移除范围：**

- `getRangeAt(i)` —— 获取从 0 开始的第 i 个范围。在除 Firefox 之外的所有浏览器中，仅使用 0
- `addRange(range)` —— 将 `range` 添加到选择中。如果选择已有关联的范围，则除 Firefox 外的所有浏览器都将忽略该调用
- `removeRange(range)` —— 从选择中删除 `range`
- `removeAllRanges()` —— 删除所有范围
- `empty()` —— `removeAllRanges` 的别名

**可以直接操作选择范围的方法，无需使用 `Range`：**

- `collapse(node, offset)` —— 用一个新的范围替换选定的范围，该新范围从给定的 `node` 处开始，到偏移 `offset` 处结束
- `setPosition(node, offset)` —— `collapse` 的别名
- `collapseToStart()` —— 折叠（替换为空范围）到选择起点
- `collapseToEnd()` —— 折叠到选择终点
- `extend(node, offset)` —— 将选择的焦点（focus）移到给定的 `node`，位置偏移 `offset`
- `setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)` —— 用给定的起点 `anchorNode/anchorOffset` 和终点 `focusNode/focusOffset` 来替换选择范围。选中它们之间的所有内容
- `selectAllChildren(node)` —— 选择 `node` 的所有子节点
- `deleteFromDocument()` —— 从文档中删除所选择的内容
- `containsNode(node, allowPartialContainment = false)` —— 检查选择中是否包含 `node`（特别是如果第二个参数是 true 的话）

**例子：选择段落 `<p>` 的全部内容**

```html
<p id="p">Select me: <i>italic</i> and <b>bold</b></p>

<script>
  // 从 <p> 的第 0 个子节点选择到最后一个子节点
  document.getSelection().setBaseAndExtent(p, 0, p, p.childNodes.length);
</script>

<script>
  // 使用 Range 来完成同一个操作：
  let range = new Range();
  range.selectNodeContents(p); // 或者也可以使用 selectNode(p) 来选择 <p> 标签

  document.getSelection().removeAllRanges(); // 清除现有选择（如果有的话）
  document.getSelection().addRange(range);
</script>
```

### 2.3 选择事件

- `elem.onselectstart` —— 当选择从 elem 上开始时，例如，用户按下鼠标键并开始移动鼠标。阻止默认行为会使选择无法开始
- `document.onselectionchange` —— 当选择变动时。此处理程序**只能在 document 上设置**

### 2.4 表单控件中的选择

诸如 `input` 和 `textarea` 等表单元素提供了专用的选择 API，没有 `Selection` 或 `Range` 对象

由于输入值是纯文本而不是 HTML，因此不需要此类对象

**属性：**

- `input.selectionStart` —— 选择的起始位置（可写）
- `input.selectionEnd` —— 选择的结束位置（可写）
- `input.selectionDirection` —— 选择方向，`forward/backward/none`（例如使用鼠标双击进行的选择）

**事件：**

- `input.onselect` —— 当某个东西被选择时触发

**方法：**

- `input.select()` —— 选择文本控件中的所有内容（可以是 textarea 而不是 input）
- `input.setSelectionRange(start, end, [direction])` —— 在给定方向上（可选），从 start 一直选择到 end
- `input.setRangeText(replacement, [start], [end], [selectionMode])` —— 用新文本替换范围中的文本。可选参数 start 和 end，如果提供的话，则设置范围的起点和终点，否则使用用户的选择。最后一个参数 `selectionMode` 决定替换文本后如何设置选择。可能的值为：
  - `select` —— 将选择新插入的文本
  - `start` —— 选择范围将在插入的文本之前折叠（光标将在其之前）
  - `end` —— 选择范围将在插入的文本之后折叠（光标将紧随其后）
  - `preserve` —— 尝试保留选择。这是默认值

> 表单控件内的选择不应该触发 `document.onselectionchange` 事件，因为它与 document 选择和范围不相关。一些浏览器会生成它，但我们不应该依赖它

### 2.5 禁止选中

要使某些内容不可选，有三种方式：

1. 使用 CSS 属性 `user-select: none`
1. 阻止 `onselectstart` 或 `mousedown` 事件中的默认行为
1. 使用 `document.getSelection().empty()` 来在选择发生后清除选择。很少使用这种方法，因为这会在选择项消失导致闪烁

## 3 事件循环：微任务和宏任务

### 3.1 概念

浏览器中 `JavaScript` 的执行流程和 `Node.js` 中的流程都是基于 `事件循环` 的

**任务分类：**

- 同步任务
- 异步任务
  - 宏任务
  - 微任务

**宏任务：**

- 浏览器事件
- 异步请求
- `setInterval()`
- `setTimeout()`
- `requestAnimationFrame`

> 每个宏任务之后，引擎会立即执行微任务队列中的 **所有任务**，然后再执行其他的宏任务，或渲染，或进行其他任何操作

**微任务：**

- `new Promise()`
- `new MutaionObserver()` 监听 DOM 变化

> 微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成。即执行微任务队列的时候不会有渲染

### 3.2 事件循环

**事件循环机制解决什么问题：**

1. JS 是单线程非阻塞的
2. 要实现非阻塞就需要事件循环机制
3. 非阻塞则是当代码需要进行一项异步任务，主线程会挂起（pending）这个任务，然后在异步任务返回结果的时候再根据一定规则去执行相应的回调

**执行栈：**

- `执行上下文：` 存储当前方法(或代码块)的私有作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的 `this` 对象
- `执行栈：` 因为 js 是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为执行栈

**同步代码的执行流程：**

1. 脚本第一次执行的时候，js 引擎会解析这段代码
1. 将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行
1. 如果当前执行的是一个方法，那么 js 会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码
1. 当这个执行环境中的代码 执行完毕并返回结果后，js 会退出这个执行环境并把这个执行环境销毁
1. 回到上一个方法的执行环境，这个过程反复进行，直到执行栈中的代码全部执行完毕

**异步代码的执行流程：**

1. js 引擎遇到一个异步事件后并不会一直等待其返回结果
1. 会将这个事件挂起，继续执行执行栈中的其他任务
1. 当一个异步事件返回结果后，js 会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列
1. 被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕
1. 主线程处于闲置状态时，会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码
1. 这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”

**事件循环算法:**

- 从 **宏任务** 队列中出队并执行最早的任务
- 执行 **所有微任务**：
  - 当微任务队列非空时：
    - 出队（dequeue）并执行最早的微任务
- 执行渲染，如果有
- 如果宏任务队列为空，则休眠直到出现宏任务
- 转到步骤 1

**安排一个新的宏任务：**

使用零延迟的 `setTimeout(f)`

**安排一个新的微任务：**

- 使用 `queueMicrotask(f)`
- `promise` 处理程序也会通过微任务队列
