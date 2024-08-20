# 表单

## 1 表单属性和方法

### 1.1 获取元素

文档中的表单是特殊集合 `document.forms` 的成员

这就是所谓的命名的集合：既是被命名了的，也是有序的。我们既可以使用名字，也可以使用在文档中的编号来获取表单

- `document.forms.my` - `name = "my"` 的表单
- `document.forms[0]` - 文档中的第一个表单

```html
<form name="my">
  <input name="one" value="1" />
  <input name="two" value="2" />
</form>

<script>
  // 获取表单
  let form = document.forms.my; // <form name="my"> 元素
  // 获取表单中的元素
  let elem = form.elements.one; // <input name="one"> 元素

  alert(elem.value); // 1
</script>
```

**子表单 Fieldset：**

一个表单内会有一个或多个 `<fieldset>` 元素。它们也具有 `elements` 属性，该属性列出了 `<fieldset>` 中的表单控件

```html
<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text" />
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // <input name="login">

    let fieldset = form.elements.userFields;
    alert(fieldset); // HTMLFieldSetElement

    // 我们可以通过名字从表单和 fieldset 中获取 input
    alert(fieldset.elements.login == form.elements.login); // true
  </script>
</body>
```

### 1.2 反向引用

对于任何元素，其对应的表单都可以通过 `element.form` 访问到。因此，表单引用了所有元素，元素也引用了表单

**例如：**

```html
<form id="form">
  <input type="text" name="login" />
</form>

<script>
  // form -> element
  let login = form.login;

  // element -> form
  alert(login.form); // HTMLFormElement
</script>
```

### 1.3 表单元素

**input 和 textarea**

可以通过 `input.value`（字符串）或 `input.checked`（布尔值）来访问复选框（checkbox）的 `value`

**select 和 option**

一个 `<select>` 元素有 3 个重要的属性：

- `select.options` —— `<option>` 的子元素的集合
- `select.value` —— 当前所选择的 `<option>` 的 value
- `select.selectedIndex` —— 当前所选择的 `<option>` 的编号

提供了三种为 `<select>` 设置 `value` 的不同方式：

1. 找到对应的 `<option>` 元素，并将 `option.selected` 设置为 `true`
1. 将 `select.value` 设置为对应的 `value`
1. 将 `select.selectedIndex` 设置为对应 `<option>` 的编号

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  // 所有这三行做的是同一件事
  select.options[2].selected = true;
  select.selectedIndex = 2;
  select.value = 'banana';
</script>
```

**new Option**

用来创建 Option 元素，较少使用

```js
option = new Option(text, value, defaultSelected, selected);
```

- `text` —— `<option>` 中的文本
- `value` —— `<option>` 的 value
- `defaultSelected` —— 如果为 true，那么 `selected` HTML-特性（attribute）就会被创建
- `selected` —— 如果为 true，那么这个 `<option>` 就会被选中

## 2 focus 和 blur

### 2.1 事件

当元素聚焦时，会触发 `focus` 事件，当元素失去焦点时，会触发 `blur` 事件

### 2.2 方法

`elem.focus()` 和 `elem.blur()` 方法可以设置和移除元素上的焦点

> 注意，我们无法通过在 `onblur` 事件处理程序中调用 `event.preventDefault()` 来 “阻止失去焦点”，因为 `onblur` 事件处理程序是在元素失去焦点 `之后` 运行的

### 2.3 tabindex

默认情况下，很多元素不支持聚焦。使用 HTML-特性（attribute）`tabindex` 可以改变这种情况

任何具有 `tabindex` attribute 的元素，都会变成可聚焦的。该 attribute 的 `value` 是当使用 Tab 在元素之间进行切换时，元素的顺序号

**有两个特殊的值：**

- `tabindex = "0"` 会使该元素被与那些不具有 `tabindex` 的元素放在一起。具有 `tabindex = "0"` 的元素将排在那些具有 `tabindex ≥ 1` 的元素的后面
- `tabindex = "-1"` 只允许以编程的方式聚焦于元素。Tab 键会忽略这样的元素，但是 `elem.focus()` 有效

### 2.4 focus 和 blur 委托

> `focus` 和 `blur` 事件不会向上冒泡

**有两个解决方案：**

1. `focus/blur` 不会向上冒泡，但会在捕获阶段向下传播。将处理程序置于捕获阶段
1. 可以使用 `focusin` 和 `focusout` 事件，与 `focus/blur` 事件完全一样，只是它们会冒泡

## 3 事件 change input cut copy paste

### 3.1 change

当元素**更改完成**时，将触发 `change` 事件

- 对于文本输入框，当其失去焦点时，就会触发 `change` 事件
- 对于其它元素：`select` `input type=checkbox/radio`，会在选项更改后立即触发 `change` 事件

### 3.2 input

每当用户对输入值进行修改后，就会触发 `input` 事件

与键盘事件不同，只要值改变了，`input` 事件就会触发，即使那些不涉及键盘行为的值的更改也是如此：使用鼠标粘贴，或者使用语音识别来输入文本

> 无法阻止 `oninput` 中的任何事件。当输入值更改后，就会触发 `input` 事件。所以，我们无法使用 `event.preventDefault()`

### 3.3 cut copy paste

它们属于 `ClipboardEvent` 类，并提供了对 剪切/拷贝/粘贴 的数据的访问方法

> 可以使用 `event.preventDefault()` 来中止行为

> 注意，在 `剪切/复制` 事件处理程序中调用 `event.clipboardData.getData(...)` 只会得到一个空字符串。从技术上讲，这是因为此时数据还未存入剪切板。如果我们使用 `event.preventDefault()`，则它根本不会被复制。使用 `document.getSelection()` 来得到被选中的文本

另外，还有一个可以访问剪切板的异步 API：`navigator.clipboard`，火狐浏览器（Firefox）尚未支持

### 3.4 安全限制

剪贴板是全局操作系统级别的东西。用户可能会在各种应用程序之间切换，而浏览器页面不应该能访问这些内容

因此，大多数浏览器仅允许在某些用户操作范围内（例如复制/粘贴等）对剪切板进行无缝的读/写访问

除火狐（Firefox）浏览器外，所有浏览器都禁止使用 `dispatchEvent` 生成自定义剪贴板事件，即使我们设法调度此类事件

此外，如果想将 `event.clipboardData` 保存在事件处理程序中，然后稍后再访问它，这也不会生效

`event.clipboardData` 仅在用户启动的事件处理程序的上下文中生效

另外, `navigator.clipboard` 是一个较新的 API，适用于任何上下文。如果需要，它会请求用户的许可。火狐（Firefox）浏览器尚未支持

## 4 表单事件

### 4.1 submit 事件

**提交表单主要有两种方式：**

1. 点击 `<input type="submit">` 或 `<input type="image">`
1. 在 `input` 字段中按下 `Enter` 键

`event.preventDefault()` 可以阻止表单提交

**submit 和 click 的关系：**

> 在输入框中使用 Enter 发送表单时，会在 `<input type="submit">` 上触发一次 `click` 事件，实际上根本没有点击

这是一个示例：

<form onsubmit="return false">
 <input type="text" size="30" value="Focus here and press enter">
 <input type="submit" value="Submit" onclick="alert('click')">
</form>

### 4.2 submit 方法

如果要手动将表单提交到服务器，我们可以调用 `form.submit()`
