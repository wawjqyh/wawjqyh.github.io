# 网络请求

## 1 Fetch

### 1.1 语法

对于来自 `JavaScript` 的网络请求，有一个总称术语 `AJAX`（Asynchronous JavaScript And XML 的简称）。但是我们不必使用 `XML`,这个术语诞生于很久以前

`fetch()` 方法是一种现代通用的方法，旧版本的浏览器不支持它（可以 polyfill）

**基本语法：**

```js
let promise = fetch(url, [options]);
```

- `url` —— 要访问的 `URL`
- `options` —— 可选参数：`method`，`header` 等

**获取响应通常需要经过两个阶段：**

**第一阶段，当服务器发送了响应头（response header），fetch 返回的 promise 就使用内建的 Response class 对象来对响应头进行解析**

在这个阶段，我们可以通过检查响应头，来检查 `HTTP` 状态以确定请求是否成功，当前还没有响应体（response body）

如果 `fetch` 无法建立一个 `HTTP` 请求，例如网络问题，亦或是请求的网址不存在，那么 `promise` 就会 `reject`。异常的 `HTTP` 状态，例如 404 或 500，不会导致出现 `error`

我们可以在 `response` 的属性中看到 `HTTP` 状态：

- `status` —— `HTTP` 状态码，例如 200
- `ok` —— 布尔值，如果 `HTTP` 状态码为 `200-299`，则为 true

例如：

```js
let response = await fetch(url);

if (response.ok) {
  // 如果 HTTP 状态码为 200-299
  // 获取 response body（此方法会在下面解释）
  let json = await response.json();
} else {
  alert('HTTP-Error: ' + response.status);
}
```

**第二阶段，为了获取 response body，我们需要使用一个其他的方法调用：**

`Response` 提供了多种基于 `promise` 的方法，来以不同的格式访问 `body`：

- `response.text()` —— 读取 `response`，并以文本形式返回 `response`
- `response.json()` —— 将 `response` 解析为 `JSON`
- `response.formData()` —— 以 FormData 对象（在 下一章 有解释）的形式返回 response，
- `response.blob()` —— 以 Blob（具有类型的二进制数据）形式返回 response，
- `response.arrayBuffer()` —— 以 ArrayBuffer（低级别的二进制数据）形式返回 response，
- `response.body` 是 `ReadableStream` 对象，它允许逐块读取 `body`

> **重要：**我们只能选择一种读取 body 的方法。
> 如果我们已经使用了 `response.text()` 方法来获取 `response`，那么如果再用 `response.json()`，则不会生效，因为 `body` 内容已经被处理过了

### 1.1 Response header

Response header 位于 `response.headers` 中的一个类似于 `Map` 的 `header` 对象

它不是真正的 `Map`，但是它具有类似的方法

```js
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// 获取一个 header
const contentType = response.headers.get('Content-Type'); // application/json; charset=utf-8

// 迭代所有 header
for (let [key, value] of response.headers) {
  alert(`${key} = ${value}`);
}
```

### 1.3 Request header

要在 `fetch` 中设置 `request header`，我们可以使用 `headers` 选项。它有一个带有输出 `header` 的对象

如下所示：

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

**无法设置的 header：**

- Accept-Charset, Accept-Encoding
- Access-Control-Request-Headers
- Access-Control-Request-Method
- Connection
- Content-Length
- Cookie, Cookie2
- Date
- DNT
- Expect
- Host
- Keep-Alive
- Origin
- Referer
- TE
- Trailer
- Transfer-Encoding
- Upgrade
- Via
- Proxy-\*
- Sec-\*

> 这些 `header` 保证了 `HTTP` 的正确性和安全性，所以它们仅由浏览器控制

### 1.4 POST 请求

要创建一个 `POST` 请求，或者其他方法的请求，需要使用 `fetch` 选项：

- `method` —— `HTTP` 方法，例如 `POST`
- `body` —— `request body`，其中之一
  - 字符串（例如 JSON 编码的）
  - `FormData` 对象，以 `multipart/form-data` 形式发送数据
  - `Blob/BufferSource` 发送二进制数据
  - `URLSearchParams`，以 `x-www-form-urlencoded` 编码形式发送数据，很少使用

例如，以 `JSON` 形式发送 `user` 对象：

```js
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

> 注意，如果请求的 `body` 是字符串，则 `Content-Type` 会默认设置为 `text/plain;charset=UTF-8`

### 1.5 发送图片

我们可以使用 `Blob` 或 `BufferSource` 对象通过 `fetch` 提交二进制数据

```js
async function submit() {
  let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

  let response = await fetch('/article/fetch/post/image', {
    method: 'POST',
    body: blob
  });

  let result = await response.json();
  alert(result.message);
}
```

> 注意，这里没有手动设置 `Content-Type header`，因为 Blob 对象具有内建的类型（这里是 `image/png`，通过 `toBlob` 生成的）。对于 `Blob` 对象，这个类型就变成了 `Content-Type` 的值

## 2 FormData

网络方法例如 `fetch` 可以接受一个 `FormData` 对象作为 `body`。它会带有 `Content-Type: multipart/form-data`

从服务器角度来看，它就像是一个普通的表单提交

### 2.1 FormData 方法

我们可以使用以下方法修改 FormData 中的字段：

- `formData.append(name, value)` —— 添加具有给定 `name` 和 `value` 的表单字段
- `formData.append(name, blob, fileName)` —— 添加一个字段，就像它是 `<input type="file">`，第三个参数 `fileName` 设置文件名（而不是表单字段名），因为它是用户文件系统中文件的名称
- `formData.delete(name)` —— 移除带有给定 `name` 的字段
- `formData.get(name)` —— 获取带有给定 `name` 的字段值
- `formData.has(name)` —— 如果存在带有给定 `name` 的字段，则返回 `true`，否则返回 `false`

> 一个表单可以包含多个具有相同 `name` 的字段，因此，多次调用 append 将会添加多个具有相同名称的字段

> `set` 方法，语法与 `append` 相同。不同之处在于 `.set` 移除所有具有给定 `name` 的字段，然后附加一个新字段。因此，它确保了只有一个具有这种 `name` 的字段，其他的和 `append` 一样

### 2.2 发送带有文件的表单

表单始终以 `Content-Type: multipart/form-data` 来发送数据，这个编码允许发送文件。因此 `<input type="file">` 字段也能被发送，类似于普通的表单提交

示例：

```html
<form id="formElem">
  <input type="text" name="firstName" value="John" />
  <input type="file" name="picture" accept="image/*" />

  <input type="submit" />
</form>

<script>
  formElem.onsubmit = async e => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user-avatar', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
```

### 2.3 发送具有 Blob 数据的表单

但在实际中，通常更方便的发送图片的方式不是单独发送，而是将其作为表单的一部分，并带有附加字段一起发送

下面这个例子使用 `FormData` 将一个来自 `<canvas>` 的图片和一些其他字段一起作为一个表单提交：

```js
let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

let formData = new FormData();
formData.append('firstName', 'John');
formData.append('image', imageBlob, 'image.png');
```

## 3 Fetch：下载进度

`fetch` 方法允许去跟踪下载进度

> 注意：到目前为止，`fetch` 方法无法跟踪上传进度。请使用 `XMLHttpRequest`

要跟踪下载进度，我们可以使用 `response.body` 属性。它是 `ReadableStream` —— 一个特殊的对象，它可以逐块（chunk）提供 `body`

**从 `response.body` 读取 `response` 的示例代码：**

```js
// 代替 response.json() 以及其他方法
const reader = response.body.getReader();

// 在 body 下载时，一直为无限循环
while (true) {
  // 当最后一块下载完成时，done 值为 true
  // value 是块字节的 Uint8Array
  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`);
}
```

**`await reader.read()` 调用的结果是一个具有两个属性的对象：**

- `done` —— 当读取完成时为 `true`，否则为 `false`
- `value` —— 字节的类型化数组：`Uint8Array`

**更多说明：**

```js
// Step 1：启动 fetch，并获得一个 reader
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Step 2：获得总长度（length）
const contentLength = +response.headers.get('Content-Length');

// Step 3：读取数据
let receivedLength = 0; // 当前接收到了这么多字节
let chunks = []; // 接收到的二进制块的数组（包括 body）

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`);
}

// Step 4：将块连接到单个 Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;

for (let chunk of chunks) {
  chunksAll.set(chunk, position); // (4.2)
  position += chunk.length;
}

// Step 5：解码成字符串
let result = new TextDecoder('utf-8').decode(chunksAll);

// 我们完成啦！
let commits = JSON.parse(result);
alert(commits[0].author.login);
```

## 4 Fetch：中止

`fetch` 返回一个 `promise`。`JavaScript` 通常并没有【中止】 `promise` 的概念

那么怎样才能取消一个正在执行的 `fetch` 呢

为此有一个特殊的内建对象：`AbortController`。它不仅可以中止 `fetch`，还可以中止其他异步任务

### 4.1 AbortController 对象

创建一个控制器（controller）：

```js
let controller = new AbortController();
```

- 它具有单个方法 `abort()`
- 和单个属性 `signal`，我们可以在这个属性上设置事件监听器

**当 abort() 被调用时：**

- `controller.signal` 就会触发 `abort` 事件
- `controller.signal.aborted` 属性变为 `true`

**通常，处理分为两部分：**

- 一部分是一个可取消的操作，它在 `controller.signal` 上设置一个监听器
- 另一部分是取消：在需要的时候调用 `controller.abort()`

```js
let controller = new AbortController();
let signal = controller.signal;

// 可取消的操作这一部分
// 获取 "signal" 对象，
// 并将监听器设置为在 controller.abort() 被调用时触发
signal.addEventListener('abort', () => alert('abort!'));

// 另一部分，取消（在之后的任何时候）：
controller.abort(); // 中止！

// 事件触发，signal.aborted 变为 true
alert(signal.aborted); // true
```

`AbortController` 只是在 `abort()` 被调用时传递 `abort` 事件的一种方式。我们可以自己在代码中实现相同类型的事件监听，而不需要 `AbortController` 对象

> 但是，`fetch` 知道如何与 `AbortController` 对象一起工作。它们是集成在一起的

### 4.2 与 fetch 一起使用

将 `AbortController` 的 `signal` 属性作为 `fetch` 的一个可选参数进行传递

`fetch` 会监听 `signal` 上的 `abort` 事件，调用 `controller.abort()` 就可以中止 `fetch`

```js
let controller = new AbortController();

fetch(url, {
  signal: controller.signal
});

controller.abort();
```

当一个 `fetch` 被中止，它的 `promise` 就会以一个 error `AbortError` reject

**完整的示例：**

```js
// 1 秒后中止
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('/article/fetch-abort/demo/hang', {
    signal: controller.signal
  });
} catch (err) {
  if (err.name == 'AbortError') {
    // handle abort()
    alert('Aborted!');
  } else {
    throw err;
  }
}
```

> `AbortController` 是可伸缩的。它允许一次取消多个 `fetch`

## 5 Fetch 跨源请求

### 5.1 安全请求

**安全请求需要满足下面两个条件：**

- 安全的方法：`GET`，`POST` 或 `HEAD`
- 安全的 `header` —— 仅允许自定义下列 `header`
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type` 的值为 `application/x-www-form-urlencoded`，`multipart/form-data` 或 `text/plain`

任何其他请求都被认为是非安全请求。例如，具有 `PUT` 方法或 `API-Key` HTTP-header 的请求就不是安全请求

当发送一个非安全请求时，浏览器会发送一个特殊的 `预检` 请求到服务器 —— 询问服务器是否接受此类跨源请求

并且，除非服务器明确通过 `header` 进行确认，否则非安全请求不会被发送

### 5.2 用于安全请求的 CORS

如果一个请求是跨源的，浏览器始终会向其添加 `Origin header`

```
GET /request
Host: anywhere.com
Origin: https://javascript.info
...
```

服务器可以检查 `Origin`，如果同意接受这样的请求，就会在响应中添加一个特殊的 `header` `Access-Control-Allow-Origin`。该 `header` 包含了允许的源或者一个星号 `*`

> 注意：默认不返回 `Content-Length` header，因此，如果我们正在下载某些内容，并希望跟踪进度百分比，则需要额外的权限才能访问该 header。服务器必须发送 `Access-Control-Expose-Headers` header。它包含一个以逗号分隔的应该被设置为可访问的非安全 header 名称列表

**例如：**

```
200 OK
Content-Type:text/html; charset=UTF-8
Content-Length: 12345
API-Key: 2c9de507f2c54aa1
Access-Control-Allow-Origin: https://javascript.info
Access-Control-Expose-Headers: Content-Length,API-Key
```

### 5.3 非安全请求

非安全请求会先发送一个 `预检` 请求，来请求许可

**预检请求使用 `OPTIONS` 方法，它没有 `body`，但是有三个 `header`：**

- `Access-Control-Request-Method` 带有非安全请求的方法
- `Access-Control-Request-Headers` 提供一个以逗号分隔的非安全 `HTTP-header` 列表

如果服务器同意处理请求会相应 200，没有 `body`，具有 `header`：

- `Access-Control-Allow-Origin` 必须为 `*` 或进行请求的源才能允许此请求
- `Access-Control-Allow-Methods` 必须具有允许的方法
- `Access-Control-Allow-Headers` 必须具有一个允许的 `header` 列表
- `Access-Control-Max-Age` 可以指定缓存此权限的秒数。因此，浏览器不是必须为满足给定权限的后续请求发送预检

### 5.4 凭据（Credentials）

默认情况下，由 JavaScript 代码发起的跨源请求不会带来任何凭据（`cookies` 或者 `HTTP` 认证）

要在 `fetch` 中发送凭据，我们需要添加 `credentials: "include"` 选项：

```js
fetch('http://another.com', {
  credentials: 'include'
});
```

如果服务器同意接受带有凭据的请求，则除了 `Access-Control-Allow-Origin` 外，服务器还应该在响应中添加 `Access-Control-Allow-Credentials: true`

## 6 Fetch API

**所有可能的 `fetch` 选项及其默认值的完整列表：**

```js
let promise = fetch(url, {
  method: "GET", // POST，PUT，DELETE，等。
  headers: {
    // 内容类型 header 值通常是自动设置的
    // 取决于 request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined // string，FormData，Blob，BufferSource，或 URLSearchParams
  referrer: "about:client", // 或 "" 以不发送 Referer header，
  // 或者是当前源的 url
  referrerPolicy: "no-referrer-when-downgrade", // no-referrer，origin，same-origin...
  mode: "cors", // same-origin，no-cors
  credentials: "same-origin", // omit，include
  cache: "default", // no-store，reload，no-cache，force-cache，或 only-if-cached
  redirect: "follow", // manual，error
  integrity: "", // 一个 hash，像 "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController 来中止请求
  window: window // null
});
```

### 6.1 referrer referrerPolicy

通常 `referrer` 是被自动设置的，并包含了**发出请求的页面的 url**

`referer` 选项允许设置任何 Referer（在当前域的），或者移除它

```js
// 不发送 referer，可以将 referer 设置为空字符串：
fetch('/page', {
  referrer: '' // 没有 Referer header
});

// 设置在当前域内的另一个 url：
fetch('/page', {
  // 假设我们在 https://javascript.info
  // 我们可以设置任何 Referer header，但必须是在当前域内的
  referrer: 'https://javascript.info/anotherpage'
});
```

`referrerPolicy` 告诉浏览器针对各个请求类型的一般的规则

**`Referrer Policy` 可能的值：**

- `no-referrer-when-downgrade` —— 默认值：除非我们从 `HTTPS` 发送请求到 `HTTP`（到安全性较低的协议），否则始终会发送完整的 `Referer`
- `no-referrer` —— 从不发送 `Referer`
- `origin` —— 只发送在 `Referer` 中的域，而不是完整的页面 `URL`
- `origin-when-cross-origin` —— 发送完整的 `Referer` 到相同的源，但对于跨源请求，只发送域部分（同上）
- `same-origin` —— 发送完整的 `Referer` 到相同的源，但对于跨源请求，不发送 `Referer`
- `strict-origin` —— 只发送域，对于 `HTTPS→HTTP` 请求，则不发送 `Referer`
- `strict-origin-when-cross-origin` —— 对于同源情况下则发送完整的 `Referer`，对于跨源情况下，则只发送域，如果是 `HTTPS→HTTP` 请求，则什么都不发送
- `unsafe-url` —— 在 `Referer` 中始终发送完整的 `url`，即使是 `HTTPS→HTTP` 请求

### 6.2 mode

**`mode` 选项是一种安全措施，可以防止偶发的跨源请求：**

- `cors` —— 默认值，允许跨源请求
- `same-origin` —— 禁止跨源请求
- `no-cors` —— 只允许安全的跨源请求

当 `fetch` 的 `URL` 来自于第三方，并且我们想要一个“断电开关”来限制跨源能力时，此选项可能很有用

### 6.3 credentials

`credentials` 选项指定 `fetch` 是否应该随请求发送 `cookie` 和 `HTTP-Authorization` header

- `same-origin` —— 默认值，对于跨源请求不发送
- `include` —— 总是发送，需要来自跨源服务器的 `Access-Control-Allow-Credentials`，才能使 JavaScript 能够访问响应
- `omit` —— 不发送，即使对于同源请求

### 6.4 cache

默认情况下，`fetch` 请求使用标准的 HTTP 缓存。就是说，它遵从 `Expires`，`Cache-Control header`，发送 `If-Modified-Since`，等。**就像常规的 HTTP 请求那样**

**使用 `cache` 选项可以忽略 HTTP 缓存或者对其用法进行微调：**

- `default` —— `fetch` 使用标准的 HTTP 缓存规则和 header
- `no-store` —— 完全忽略 HTTP 缓存，如果我们设置 header `If-Modified-Since`，`If-None-Match`，`If-Unmodified-Since`，`If-Match`，或 `If-Range`，则此模式会成为默认模式
- `reload` —— 不从 HTTP 缓存中获取结果（如果有），而是使用响应填充缓存（如果 `response header` 允许此操作）
- `no-cache` —— 如果有一个已缓存的响应，则创建一个有条件的请求，否则创建一个普通的请求。使用响应填充 HTTP 缓存
- `force-cache` —— 使用来自 HTTP 缓存的响应，即使该响应已过时（stale）。如果 HTTP 缓存中没有响应，则创建一个常规的 HTTP 请求，行为像正常那样
- `only-if-cached` —— 使用来自 HTTP 缓存的响应，即使该响应已过时（stale）。如果 HTTP 缓存中没有响应，则报错。只有当 mode 为 same-origin 时生效

### 6.5 redirect

通常来说，`fetch` 透明地遵循 HTTP 重定向，例如 `301`，`302` 等

**`redirect` 选项允许对重定向进行更改：**

- `follow` —— 默认值，遵循 HTTP 重定向
- `error` —— HTTP 重定向时报错
- `manual` —— 允许手动处理 HTTP 重定向。在重定向的情况下，我们将获得一个特殊的响应对象，其中包含 `response.type="opaqueredirect"` 和归零/空状态以及大多数其他属性

### 6.6 integrity

`integrity` 选项允许检查响应是否与已知的预先校验和相匹配

支持的哈希函数有 `SHA-256`，`SHA-384`，和 `SHA-512`，可能还有其他的，这取决于浏览器

例如，我们下载一个文件，假如它的 `SHA-256` 校验和为 “abcdef”

我们可以将其放在 integrity 选项中，就像这样:

```js
fetch('http://site.com/file', {
  integrity: 'sha256-abcdef'
});
```

然后 `fetch` 将自行计算 `SHA-256` 并将其与我们的字符串进行比较。如果不匹配，则会触发错误

### 6.7 keepalive

`keepalive` 选项表示该请求可能会在**网页关闭**后继续存在

例如，我们收集有关当前访问者是如何使用我们的页面（鼠标点击，他查看的页面片段）的统计信息，以分析和改善用户体验。当访问者离开我们的网页时 —— 我们希望能够将数据保存到我们的服务器上

我们可以使用 `window.onunload` 事件来实现：

```js
window.onunload = function() {
  fetch('/analytics', {
    method: 'POST',
    body: 'statistics',
    keepalive: true
  });
};
```

> 通常，当一个文档被卸载时（unloaded），所有相关的网络请求都会被中止。但是，`keepalive` 选项告诉浏览器，即使在离开页面后，也要在后台执行请求

**`keepalive` 有一些限制：**

- 我们无法发送兆字节的数据：`keepalive` 请求的 `body` 限制为 `64KB`
  - 如果我们需要收集有关访问的大量统计信息，我们则应该将其定期以数据包的形式发送出去，这样就不会留下太多数据给最后的 `onunload` 请求了
  - 此限制是被应用于当前所有 `keepalive` 请求的总和的。换句话说，我们可以并行执行多个 `keepalive` 请求，但它们的 `body` 长度之和不得超过 `64KB`
- 如果文档（document）已卸载（unloaded），我们就无法处理服务器响应。因此，在我们的示例中，`fetch` 会成功，但是后续的函数将无法正常工作
  - 在大多数情况下，例如发送统计信息，这不是问题，因为服务器只接收数据，并通常向此类请求发送空的响应

## 7 URL 对象

### 7.1 创建 URL 对象

创建一个新 URL 对象的语法：

```js
new URL(url, [base]);
```

- `url` —— 完整的 `URL`，或者仅路径（如果设置了 base）
- `base` —— 可选的 `base URL`：如果设置了此参数，且参数 `url` 只有路径，则会根据这个 `base` 生成 `URL`

**例如：**

```js
let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

alert(url1); // https://javascript.info/profile/admin
alert(url2); // https://javascript.info/profile/admin
```

**解析 url：**

```js
let url = new URL('https://javascript.info/url');

alert(url.protocol); // https:
alert(url.host); // javascript.info
alert(url.pathname); // /url
```

**URL 的属性：**

![](../images/9-network_20220705224337.png)

- `href` 是完整的 URL，与 `url.toString()` 相同
- `protocol` 以冒号字符 `:` 结尾
- `search` —— 以问号 `?` 开头的一串参数
- `hash` 以哈希字符 `#` 开头
- 如果存在 `HTTP` 身份验证，则这里可能还会有 `user` 和 `password` 属性：`http://login:password@site.com`（很少被用到）

> 我们可以在 `fetch` 或 `XMLHttpRequest` 中使用 `URL` 对象，几乎可以在任何需要 `URL` 字符串的地方都能使用 `URL` 对象

### 7.2 SearchParams

假设，我们想要创建一个具有给定搜索参数的 `url`，例如：`https://google.com/search?query=JavaScript`

我们可以在 `URL` 字符串中提供它们。但是，如果参数中包含空格，非拉丁字母等，参数就需要被编码

因此，有一个 `URL` 属性用于解决这个问题：`url.searchParams`，`URLSearchParams` 类型的对象

**它为搜索参数提供了简便的方法：**

- `append(name, value)` —— 按照 `name` 添加参数
- `delete(name)` —— 按照 `name` 移除参数
- `get(name)` —— 按照 `name` 获取参数
- `getAll(name)` —— 获取相同 `name` 的所有参数（例如 `?user=John&user=Pete`）
- `has(name)` —— 按照 `name` 检查参数是否存在
- `set(name, value)` —— `set/replace` 参数
- `sort()` —— 按 `name` 对参数进行排序，很少使用
- 它是可迭代的，类似于 `Map`

**示例：**

```js
let url = new URL('https://google.com/search');

url.searchParams.set('q', 'test me!'); // 添加带有一个空格和一个 ! 的参数
alert(url); // https://google.com/search?q=test+me%21

url.searchParams.set('tbs', 'qdr:y'); // 添加带有一个冒号 : 的参数
alert(url); // https://google.com/search?q=test+me%21&tbs=qdr%3Ay

// 遍历搜索参数（被解码）
for (let [name, value] of url.searchParams) {
  alert(`${name}=${value}`); // q=test me!，然后是 tbs=qdr:y
}
```

### 7.3 编码

`RFC3986` 标准定义了 `URL` 中允许哪些字符，不允许哪些字符

那些不被允许的字符必须被编码，例如非拉丁字母和空格 —— 用其 `UTF-8` 代码代替，前缀为 `%`，例如 `%20`（空格可以用 `+` 编码，但这是一个例外）

**编码字符串**

在出现 `URL` 对象之前，使用字符串作为 `URL`。

如果使用字符串，则需要手动编码/解码特殊字符

**用于编码/解码 URL 的内建函数：**

- `encodeURI` —— 编码整个 `URL`
- `decodeURI` —— 解码为编码前的状态
- `encodeURIComponent` —— 编码 `URL` 组件，例如搜索参数，或者 `hash`，或者 `pathname`
- `decodeURIComponent` —— 解码为编码前的状态

`encodeURIComponent` 和 `encodeURI` 之间有什么区别？我们什么时候应该使用哪个？

- `encodeURI` 仅编码 `URL` 中完全禁止的字符
- `encodeURIComponent` 也编码这类字符，此外，还编码 `# $ & + , / : ; = ? @` 字符

**`encode*` 与 `URL` 之间的编码差异:**

`URL` 和 `URLSearchParams` 基于最新的 `URL` 规范：`RFC3986`，而 `encode*` 函数是基于过时的 `RFC2396`

它们之间有一些区别，例如对 `IPv6` 地址的编码方式不同：

```js
// IPv6 地址的合法 url
let url = 'http://[2607:f8b0:4005:802::1007]/';

alert(encodeURI(url)); // http://%5B2607:f8b0:4005:802::1007%5D/
alert(new URL(url)); // http://[2607:f8b0:4005:802::1007]/
```

`encodeURI` 替换了方括号 `[]`，这是不正确的。因为在 `RFC2396` (August 1998) 时代，还不存在 `IPv6` url

## 8 XMLHttpRequest

`XMLHttpRequest` 是一个内建的浏览器对象，它允许使用 `JavaScript` 发送 `HTTP` 请求

在现代 `Web` 开发中，出于以下三种原因，我们还在使用 `XMLHttpRequest`：

1. 历史原因：我们需要支持现有的使用了 `XMLHttpRequest` 的脚本
1. 我们需要兼容旧浏览器，并且不想用 `polyfill`（例如为了使脚本更小）
1. 我们需要做一些 `fetch` 目前无法做到的事情，例如跟踪上传进度

### 8.1 XMLHttpRequest 基础

**请求示例：**

```js
// 1. 创建一个 new XMLHttpRequest 对象
let xhr = new XMLHttpRequest();

// 2. 配置它：从 URL /article/.../load GET-request
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. 通过网络发送请求
xhr.send();

// 4. 当接收到响应后，将调用此函数
xhr.onload = function() {
  if (xhr.status != 200) {
    // 分析响应的 HTTP 状态
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // 例如 404: Not Found
  } else {
    // 显示结果
    alert(`Done, got ${xhr.response.length} bytes`); // response 是服务器响应
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
  }
};

xhr.onerror = function() {
  alert('Request failed');
};
```

**xhr.open：**

```js
xhr.open(method, URL, [async, user, password]);
```

- `method` —— `HTTP` 方法。通常是 `GET` 或 `POST`
- `URL` —— 要请求的 URL，通常是一个字符串，也可以是 `URL` 对象
- `async` —— 如果显式地设置为 `false`，那么请求将会以同步的方式处理，我们稍后会讲到它
- `user，password` —— `HTTP` 基本身份验证（如果需要的话）的登录名和密码

**xhr 事件：**

- `load` —— 当请求完成（即使 HTTP 状态为 400 或 500 等），并且响应已完全下载
- `error` —— 当无法发出请求，例如网络中断或者无效的 URL
- `progress` —— 在下载响应期间定期触发，报告已经下载了多少

**status：**

`HTTP` 状态码（一个数字）：`200`，`404`，`403` 等，如果出现非 `HTTP` 错误，则为 `0`

**statusText：**

`HTTP` 状态消息（一个字符串）：状态码为 `200` 对应于 `OK`，`404` 对应于 `Not Found`，`403` 对应于 `Forbidden`

**response：**

服务器 `response body`

**超时时间：**

```js
xhr.timeout = 10000; // timeout 单位是 ms，此处即 10 秒
```

如果在给定时间内请求没有成功执行，请求就会被取消，并且触发 `timeout` 事件

### 8.2 响应类型

**我们可以使用 `xhr.responseType` 属性来设置响应格式：**

- `""`（默认）—— 响应格式为字符串
- `"text"` —— 响应格式为字符串
- `"arraybuffer"` —— 响应格式为 `ArrayBuffer`（对于二进制数据，请参见 `ArrayBuffer`，二进制数组）
- `"blob"` —— 响应格式为 `Blob`（对于二进制数据，请参见 `Blob`）
- `"document"` —— 响应格式为 `XML document`（可以使用 `XPath` 和其他 `XML` 方法）
- `"json"` —— 响应格式为 `JSON`（自动解析）

### 8.3 readyState

```js
UNSENT = 0; // 初始状态
OPENED = 1; // open 被调用
HEADERS_RECEIVED = 2; // 接收到 response header
LOADING = 3; // 响应正在被加载（接收到一个数据包）
DONE = 4; // 请求完成
```

我们可以使用 `readystatechange` 事件来跟踪它们：

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState == 3) {
    // 加载中
  }
  if (xhr.readyState == 4) {
    // 请求完成
  }
};
```

> 你可能在非常老的代码中找到 `readystatechange` 这样的事件监听器，它的存在是有历史原因的，因为曾经有很长一段时间都没有 `load` 以及其他事件。如今，它已被 `load/error/progress` 事件处理程序所替代

### 8.4 中止请求

**我们可以随时终止请求。调用 `xhr.abort()` 即可：**

```js
xhr.abort(); // 终止请求
```

它会触发 `abort` 事件，且 `xhr.status` 变为 `0`

### 8.5 HTTP-header

`XMLHttpRequest` 允许发送自定义 `header`，并且可以从响应中读取 `header`

```js
setRequestHeader(name, value);

xhr.setRequestHeader('Content-Type', 'application/json');

getResponseHeader(name); // 获取具有给定 name 的 header
getAllResponseHeaders(); // 返回除 Set-Cookie 和 Set-Cookie2 外的所有 response header
```

### 8.6 FormData

要建立一个 `POST` 请求，我们可以使用内建的 `FormData` 对象

```js
// 发送 FormData
let formData = new FormData([form]); // 创建一个对象，可以选择从 <form> 中获取数据

formData.append(name, value); // 附加一个字段

xhr.send(formData);
```

```js
// 发送 JSON 字符串
let xhr = new XMLHttpRequest();

let json = JSON.stringify({
  name: 'John',
  surname: 'Smith'
});

xhr.open('POST', '/submit');
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);
```

### 8.7 上传进度

`progress` 事件仅在下载阶段触发

如果我们要上传的东西很大，那么我们肯定会对跟踪上传进度感兴趣。但是 `xhr.onprogress` 在这里并不起作用

这里有另一个对象，它没有方法，它专门用于跟踪上传事件：`xhr.upload`

它会生成事件，类似于 `xhr`，但是 `xhr.upload` 仅在上传时触发它们：

- `loadstart` —— 上传开始
- `progress` —— 上传期间定期触发
- `abort` —— 上传中止
- `error` —— 非 `HTTP` 错误
- `load` —— 上传成功完成
- `timeout` —— 上传超时（如果设置了 `timeout` 属性）
- `loadend` —— 上传完成，无论成功还是 `error`

```js
xhr.upload.onprogress = function(event) {
  alert(`Uploaded ${event.loaded} of ${event.total} bytes`);
};

xhr.upload.onload = function() {
  alert(`Upload finished successfully.`);
};

xhr.upload.onerror = function() {
  alert(`Error during the upload: ${xhr.status}`);
};
```

### 8.8 跨源请求

`XMLHttpRequest` 可以使用和 `fetch` 相同的 `CORS` 策略进行跨源请求。

就像 `fetch` 一样，默认情况下不会将 `cookie` 和 `HTTP` 授权发送到其他域。要启用它们，可以将 `xhr.withCredentials` 设置为 `true`

```js
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open('POST', 'http://anywhere.com/request');
```

## 9 可恢复的文件上传

### 9.1 概念

对于大文件，可恢复的上传应该带有上传进度提示。由于 fetch 不允许跟踪上传进度，我们将会使用 `XMLHttpRequest`

**要恢复上传，我们需要知道在连接断开前已经上传了多少**

我们有 `xhr.upload.onprogress` 来跟踪上传进度

但是它不会帮助我们在此处恢复上传，因为它会在数据被发送时触发，但是服务器是否接收到了？浏览器并不知道

要恢复上传，我们需要**确切地**知道服务器接收的字节数。因此，需要发送请求询问服务器

### 9.2 实现

首先，创建一个文件 `id`，以唯一地标识我们要上传的文件：

```js
let fileId = file.name + '-' + file.size + '-' + file.lastModified;
```

向服务器发送一个请求，询问它已经有了多少字节：

```js
let response = await fetch('status', {
  headers: {
    'X-File-Id': fileId
  }
});

// 服务器已有的字节数
let startByte = +(await response.text());
```

然后，我们可以使用 `Blob` 和 `slice` 方法来发送从 `startByte` 开始的文件：

```js
xhr.open('POST', 'upload', true);

// 文件 id，以便服务器知道我们要恢复的是哪个文件
xhr.setRequestHeader('X-File-Id', fileId);

// 发送我们要从哪个字节开始恢复，因此服务器知道我们正在恢复
xhr.setRequestHeader('X-Start-Byte', startByte);

xhr.upload.onprogress = e => {
  console.log(`Uploaded ${startByte + e.loaded} of ${startByte + e.total}`);
};

// 文件可以是来自 input.files[0]，或者另一个源
xhr.send(file.slice(startByte));
```

服务器应该检查其记录，如果有一个上传的该文件，并且当前已上传的文件大小恰好是 `X-Start-Byte`，那么就将数据附加到该文件

[完整实例](https://zh.javascript.info/resume-upload)

## 10 长轮询

长轮询是与服务器保持持久连接的最简单的方式，它不使用任何特定的协议，例如 `WebSocket` 或者 `Server Sent Event`

### 10.1 常规轮询

从服务器获取新信息的最简单的方式是定期轮询。例如，每 10 秒一次

**缺点：**

- 消息传递的延迟最多为 10 秒（两个请求之间）
- 即使没有消息，服务器也会每隔 10 秒被请求轰炸一次，即使用户切换到其他地方或者处于休眠状态，也是如此。就性能而言，这是一个很大的负担

### 10.2 长轮询

长轮询是轮询服务器的一种更好的方式

它也很容易实现，并且可以无延迟地传递消息

**流程：**

- 请求发送到服务器
- 服务器在有消息之前不会关闭连接
- 当消息出现时 —— 服务器将对其请求作出响应
- 浏览器立即发出一个新的请求

如果连接丢失，可能是因为网络错误，浏览器会立即发送一个新请求

**示例：**

```js
async function subscribe() {
  let response = await fetch('/subscribe');

  if (response.status == 502) {
    // 状态 502 是连接超时错误，
    // 连接挂起时间过长时可能会发生，
    // 远程服务器或代理会关闭它
    // 让我们重新连接
    await subscribe();
  } else if (response.status != 200) {
    // 一个 error —— 让我们显示它
    showMessage(response.statusText);
    // 一秒后重新连接
    await new Promise(resolve => setTimeout(resolve, 1000));
    await subscribe();
  } else {
    // 获取并显示消息
    let message = await response.text();
    showMessage(message);
    // 再次调用 subscribe() 以获取下一条消息
    await subscribe();
  }
}

subscribe();
```

> 服务器架构必须能够处理许多挂起的连接。某些服务器架构是每个连接对应一个进程，导致进程数和连接数一样多，而每个进程都会消耗相当多的内存。因此，过多的连接会消耗掉全部内存。使用像 `PHP` 和 `Ruby` 语言编写的后端程序会经常遇到这个问题。使用 `Node.js` 编写的服务端程序通常不会出现此类问题

### 10.3 使用场景

在消息很少的情况下，长轮询很有效

如果消息比较频繁就不适合，每个消息都是一个单独的请求，并带有 `header`，身份验证开销（authentication overhead）等

因此，在这种情况下，首选另一种方法，例如：`Websocket` 或 `Server Sent Events`

## 11 WebSocket

### 11.1 WebSocket 基础

`WebSocket` 协议提供了一种在浏览器和服务器之间建立持久连接来交换数据的方法。数据可以作为“数据包”在两个方向上传递，而不会断开连接和其他 `HTTP` 请求

同样也有一个加密的 `wss://` 协议。类似于 `WebSocket` 中的 `HTTPS`

> **始终使用 wss://**。`wss://` 协议不仅是被加密的，而且更可靠

```js
let socket = new WebSocket('ws://javascript.info');
```

**socket 上的事件：**

- **open** —— 连接已建立
- **message** —— 接收到数据
- **error** —— `WebSocket` 错误
- **close** —— 连接已关闭

`socket.send(data)` 发送数据

**示例：**

```js
let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

socket.onopen = function(e) {
  alert('[open] Connection established');
  alert('Sending to server');
  socket.send('My name is John');
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // 例如服务器进程被杀死或网络中断
    // 在这种情况下，event.code 通常为 1006
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
```

### 11.2 建立 WebSocket

当 `new WebSocket(url)` 被创建后，它将立即开始连接

![](../images/9-network_20220706181817.png)

这是由 `new WebSocket("wss://javascript.info/chat")` 发出的请求的浏览器 header 示例:

```
GET /chat
Host: javascript.info
Origin: https://javascript.info
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
Sec-WebSocket-Version: 13
```

- `Origin` —— 客户端页面的源，例如 `https://javascript.info`。`WebSocket` 对象是原生支持跨源的。没有特殊的 `header` 或其他限制。旧的服务器无法处理 `WebSocket`，因此不存在兼容性问题。但是 `Origin header` 很重要，因为它允许服务器决定是否使用 `WebSocket` 与该网站通信
- `Connection: Upgrade` —— 表示客户端想要更改协议
- `Upgrade: websocket` —— 请求的协议是 `websocket`
- `Sec-WebSocket-Key` —— 浏览器随机生成的安全密钥
- `Sec-WebSocket-Version` —— `WebSocket` 协议版本，当前为 13

> 无法模拟 `WebSocket` 握手。不能使用 `XMLHttpRequest` 或 `fetch` 来进行这种 `HTTP` 请求，因为不允许 JavaScript 设置这些 `header`

如果服务器同意切换为 `WebSocket` 协议，服务器应该返回响应码 `101`：

```
101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=
```

这里 `Sec-WebSocket-Accept` 是 `Sec-WebSocket-Key`，是使用特殊的算法重新编码的。浏览器使用它来确保响应与请求相对应

然后，就使用 WebSocket 协议传输数据，我们很快就会看到它的结构（“frames”）。它根本不是 HTTP。

**扩展和子协议**

`Sec-WebSocket-Extensions: deflate-frame` 表示浏览器支持数据压缩。扩展与传输数据有关，扩展了 `WebSocket` 协议的功能。`Sec-WebSocket-Extensions` header 由浏览器自动发送，其中包含其支持的所有扩展的列表

`Sec-WebSocket-Protocol: soap, wamp` 表示我们不仅要传输任何数据，还要传输 `SOAP` 或 `WAMP`（“The WebSocket Application Messaging Protocol”）协议中的数据。`WebSocket` 子协议已经在 `IANA catalogue` 中注册

这个可选的 header 是使用 `new WebSocket` 的第二个参数设置的。它是子协议数组

```js
let socket = new WebSocket('wss://javascript.info/chat', ['soap', 'wamp']);
```

服务器应该使用同意使用的协议和扩展的列表进行响应

### 11.3 数据传输

`WebSocket` 通信由 frames（即数据片段）组成，可以从任何一方发送，并且有以下几种类型：

- `text frames` —— 包含各方发送给彼此的文本数据
- `binary data frames` —— 包含各方发送给彼此的二进制数据
- `ping/pong frames` 被用于检查从服务器发送的连接，浏览器会自动响应它们
- `connection close frame` 以及其他服务 `frames`

`socket.send(body)` 调用允许 `body` 是字符串或二进制格式，包括 `Blob`，`ArrayBuffer` 等。不需要额外的设置，可以直接发送

当我们收到数据时，文本总是以字符串形式呈现。而对于二进制数据，我们可以在 Blob 和 ArrayBuffer 格式之间进行选择。

二进制数据格式可以由 `socket.binaryType` 属性设置的，默认为 `blob`

```js
socket.binaryType = 'arraybuffer';
socket.onmessage = event => {
  // event.data 可以是文本（如果是文本），也可以是 arraybuffer（如果是二进制数据）
};
```

### 11.4 限速

我们可以反复地调用 `socket.send(data)`。但是数据将会缓冲（储存）在内存中，并且只能在网速允许的情况下尽快将数据发送出去

`socket.bufferedAmount` 属性储存了目前已缓冲的字节数，等待通过网络发送

可以检查它的状态来控制是否发送数据：

```js
// 每 100ms 检查一次 socket
// 仅当所有现有的数据都已被发送出去时，再发送更多数据
setInterval(() => {
  if (socket.bufferedAmount == 0) {
    socket.send(moreData());
  }
}, 100);
```

### 11.5 连接关闭

通常，当一方想要关闭连接时（浏览器和服务器都具有相同的权限），它们会发送一个带有数字码（numeric code）和文本形式的原因的 `connection close frame`

```js
socket.close([code], [reason]);
```

- `code` 是一个特殊的 WebSocket 关闭码（可选）
- `reason` 是一个描述关闭原因的字符串（可选）

然后，另外一方通过 close 事件处理器获取了关闭码和关闭原因，例如：

```js
// 关闭方：
socket.close(1000, 'Work complete');

// 另一方
socket.onclose = event => {
  // event.code === 1000
  // event.reason === "Work complete"
  // event.wasClean === true (clean close)
};
```

**常见的数字码：**

- `1000` —— 默认，正常关闭（如果没有指明 code 时使用它）
- `1006` —— 没有办法手动设定这个数字码，表示连接丢失（没有 close frame）
- `1001` —— 一方正在离开，例如服务器正在关闭，或者浏览器离开了该页面
- `1009` —— 消息太大，无法处理
- `1011` —— 服务器上发生意外错误

小于 1000 的码都是被保留的，如果我们尝试设置这样的码，将会出现错误

### 11.6 连接状态

要获取连接状态，可以通过带有值的 `socket.readyState` 属性：

- `0` —— “CONNECTING”：连接还未建立
- `1` —— “OPEN”：通信中
- `2` —— “CLOSING”：连接关闭中
- `3` —— “CLOSED”：连接已关闭

## 12 Server Sent Events

Server-Sent Events 规范描述了一个内建的类 `EventSource`，它能保持与服务器的连接，并允许从中接收事件

与 `WebSocket` 类似，其连接是**持久的**

**但是两者之间有几个重要的区别：**

| WebSocket                        | EventSource              |
| -------------------------------- | ------------------------ |
| 双向：客户端和服务端都能交换消息 | 单向：仅服务端能发送消息 |
| 二进制和文本数据                 | 仅文本数据               |
| WebSocket 协议                   | 常规 HTTP 协议           |

> 与 `WebSocket` 相比，`EventSource` 是与服务器通信的一种不那么强大的方式。我们为什么要使用它？主要原因是简单。在很多应用中，`WebSocket` 有点大材小用

我们需要从服务器接收一个数据流：可能是聊天消息或者市场价格等。这正是 `EventSource` 所擅长的。它还支持自动重新连接，而在 `WebSocket` 中这个功能需要我们手动实现。此外，它是一个普通的旧的 HTTP，不是一个新协议

### 12.1 获取消息

创建 `new EventSource(url)` 即可开始接收消息

浏览器将会连接到 `url` 并保持连接打开，等待事件

服务器响应状态码应该为 `200`，`header` 为 `Content-Type: text/event-stream`，然后保持此连接并以一种特殊的格式写入消息

```
data: Message 1

data: 后为消息文本，冒号后面的空格是可选的

data: {"user":"John","message":"First line\n Second line"}
```

**消息会生成 `message` 事件：**

```js
let eventSource = new EventSource('/events/subscribe');

eventSource.onmessage = function(event) {
  console.log('New message', event.data);
};

// 或 eventSource.addEventListener('message', ...)
```

**跨源请求：**

`EventSource` 支持跨源请求，就像 `fetch` 和任何其他网络方法

远程服务器将会获取到 Origin header，并且必须以 `Access-Control-Allow-Origin` 响应来处理

要传递凭证（credentials），设置附加选项 `withCredentials`：

```js
let source = new EventSource('https://another-site.com/events', {
  withCredentials: true
});
```

### 12.2 重新连接

断开连接后会自动重连，我们不用去关心重新连接的事情

每次重新连接之间有一点小的延迟，服务器可以使用 `retry:` 来设置需要的延迟响应时间（以毫秒为单位）

```
retry: 15000
data: Hello, I set the reconnection delay to 15 seconds
retry: 既可以与某些数据一起出现，也可以作为独立的消息出现
```

- 服务器想要浏览器停止重新连接，那么它应该使用 HTTP 状态码 `204` 进行响应
- 浏览器想要关闭连接，则应该调用 `eventSource.close()`

并且，如果响应具有不正确的 `Content-Type` 或者其 HTTP 状态码不是 301，307，200 和 204，则不会进行重新连接。在这种情况下，将会发出 `error` 事件，并且浏览器不会重新连接

> 注意：当连接最终被关闭时，就无法重新打开。如果我们想要再次连接，需要创建一个新的 `EventSource`

### 12.3 消息 id

当一个连接由于网络问题而中断时，客户端和服务器都无法确定哪些消息已经收到哪些没有收到

为了正确地恢复连接，每条消息都应该有一个 `id` 字段，就像这样：

```
data: Message 1
id: 1

data: Message 2
id: 2

data: Message 3
data: of two lines
id: 3
```

当收到具有 id 的消息时，浏览器会：

- 将属性 `eventSource.lastEventId` 设置为其值
- 重新连接后，发送带有 `id` 的 header `Last-Event-ID`，以便服务器可以重新发送后面的消息

> 注意：服务器应该将 `id` 附加到 `data` 消息后，以确保在收到消息后 `lastEventId` 会被更新

### 12.4 连接状态 readyState

`EventSource` 对象有 `readyState` 属性，该属性具有下列值之一：

```js
EventSource.CONNECTING = 0; // 连接中或者重连中
EventSource.OPEN = 1; // 已连接
EventSource.CLOSED = 2; // 连接已关闭
```

对象创建完成或者连接断开后，它始终是 `EventSource.CONNECTING`（等于 0）

### 12.5 Event 类型

默认情况下 `EventSource` 对象生成三个事件：

- `message` —— 收到消息，可以用 `event.data` 访问
- `open` —— 连接已打开
- `error` —— 无法建立连接，例如，服务器返回 HTTP 500 状态码

服务器可以在事件开始时使用 `event: ...` 指定另一种类型事件

```
event: join
data: Bob

data: Hello

event: leave
data: Bob
```

要处理自定义事件，我们必须使用 `addEventListener`：

```js
eventSource.addEventListener('join', event => {
  alert(`Joined ${event.data}`);
});

eventSource.addEventListener('message', event => {
  alert(`Said: ${event.data}`);
});

eventSource.addEventListener('leave', event => {
  alert(`Left ${event.data}`);
});
```
