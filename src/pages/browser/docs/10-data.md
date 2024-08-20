# 浏览器中存储数据

## 1 cookie

### 1.1 读取

通过 `document.cookie` 读取：

```js
alert(document.cookie); // cookie1=value1; cookie2=value2;...
```

`document.cookie` 的值由 `name=value` 对组成，以 `;` 分隔

### 1.2 写入

`document.cookie` 但这不是一个数据属性，它是一个 访问器（getter/setter）。对其的赋值操作会被特殊处理

对 `document.cookie` 的写入操作只会更新其中提到的 `cookie`，而不会涉及其他 `cookie`

```js
document.cookie = 'user=John'; // 只会更新名称为 user 的 cookie
alert(document.cookie); // 展示所有 cookie
```

从技术上讲，`cookie` 的名称和值可以是任何字符。为了保持有效的格式，它们应该使用内建的 `encodeURIComponent` 函数对其进行转义：

```js
// 特殊字符（空格），需要编码
let name = 'my name';
let value = 'John Smith';

// 将 cookie 编码为 my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith
```

**存在一些限制：**

- `encodeURIComponent` 编码后的 `name=value` 对，大小不能超过 `4KB`。因此，我们不能在一个 `cookie` 中保存大的东西
- 每个域的 `cookie` 总数不得超过 `20+` 左右，具体限制取决于浏览器

**cookie 选项：**

被列在 `key=value` 之后，以 `;` 分隔，像这样：

```js
document.cookie = 'user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT';
```

### 1.3 path

`path=/mypath`

url 路径前缀必须是绝对路径。它使得该路径下的页面可以访问该 cookie。默认为当前路径

如果一个 cookie 带有 `path=/admin` 设置，那么该 cookie 在 `/admin` 和 `/admin/something` 下都是可见的，但是在 `/home` 或 `/adminpage` 下不可见

通常，我们应该将 path 设置为根目录 `path=/`，以使 `cookie` 对此网站的所有页面可见

### 1.4 domain

`domain=site.com`

domain 控制了可访问 cookie 的域。但是在实际中，有一些限制。无法设置任何域

无法从另一个二级域访问 cookie，因此 `other.com` 永远不会收到在 `site.com` 设置的 cookie

请注意，默认情况下，cookie 也不会共享给子域，例如 `site.com` 和 `forum.site.com`

```js
// 如果我们在 site.com 网站上设置了 cookie……
document.cookie = 'user=John';

// ……在 forum.site.com 域下我们无法访问它
alert(document.cookie); // 没有 user
```

> 如果需要共享给子域，需要明确地将 `domain` 选项设置为根域：`domain=site.com`

例如：

```js
// 在 site.com
// 使 cookie 可以被在任何子域 *.site.com 访问：
document.cookie = 'user=John; domain=site.com';

// 之后

// 在 forum.site.com
alert(document.cookie); // 有 cookie user=John
```

### 1.5 expires max-age

**expires：**

默认情况下，如果一个 `cookie` 没有设置这两个参数中的任何一个，那么在关闭浏览器之后，它就会消失。此类 `cookie` 被称为 `session cookie`

为了让 cookie 在浏览器关闭后仍然存在，我们可以设置 `expires` 或 `max-age` 选项中的一个

`expires=Tue, 19 Jan 2038 03:14:07 GMT`

如果我们将 `expires` 设置为过去的时间，则 `cookie` 会被删除

**max-age：**

`max-age` 指明了 `cookie` 的过期时间距离当前时间的秒数。如果将其设置为 `0` 或负数，`cookie` 会被删除

```js
// cookie 会在一小时后失效
document.cookie = 'user=John; max-age=3600';

// 删除 cookie（让它立即过期）
document.cookie = 'user=John; max-age=0';
```

### 1.6 secure

默认情况下，如果我们在 `http://site.com` 上设置了 `cookie`，那么该 `cookie` 也会出现在 `https://site.com` 上，反之亦然

也就是说，`cookie` 是基于域的，它们不区分协议

使用 `secure` 选项，就可以区分 `http` 和 `https`。如果一个 `cookie` 包含绝不应该通过未加密的 `HTTP` 协议发送的敏感内容，那么就应该设置 `secure` 标识

```js
// 假设我们现在在 HTTPS 环境下
// 设置 cookie secure（只在 HTTPS 环境下可访问）
document.cookie = 'user=John; secure';
```

### 1.7 samesite

`samesite` 用于防止 `XSRF`（跨网站请求伪造）攻击

可能的值：

- `strict` 最为严格，完全禁止第三方 cookie，跨站点时，任何情况下都不会发送 cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 cookie
- `lax` 稍宽松，大多数情况也是不发送第三方 cookie。需同时满足：HTTP 方法是安全的（例如 GET 方法，而不是 POST）、该操作执行顶级导航，如果导航是在一个 `<iframe>` 中执行的，那么它就不是顶级的
- `none`（显式关闭 `SameSite` 属性，必须同时设置 Secure 属性（cookie 只能通过 HTTPS 协议发送），否则无效），目前 `Chrome 80` 已经将该属性默认设置为 `Lax` 规则

samesite 在 2017 年左右的旧版本浏览器不兼容

### 1.8 httpOnly

这个选项只能在服务端设置

`httpOnly` 禁止任何 JavaScript 访问 cookie。使用 `document.cookie` 看不到此类 cookie，也无法对此类 cookie 进行操作

### 1.9 Cookie 函数

```js
// 返回具有给定 name 的 cookie，
// 如果没找到，则返回 undefined
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
```

```js
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // 如果需要，可以在这里添加其他默认值
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;

    let optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// 使用范例：
setCookie('user', 'John', { secure: true, 'max-age': 3600 });
```

```js
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1
  });
}
```

### 1.10 第三方 cookie

如果 cookie 是由用户所访问的页面的域以外的域放置的，则称其为第三方 cookie

例如：

1. `site.com` 网站的一个页面加载了另外一个网站的 banner：`<img src="https://ads.com/banner.png">`
1. `ads.com` 的远程服务器可能会设置带有 `id=1234` 这样的 cookie 的 `Set-Cookie header`。此类 cookie 源自 `ads.com` 域，并且仅在 `ads.com` 中可见
1. 下次访问 `ads.com` 网站时，远程服务器可以获取 cookie id 并识别用户
1. 当用户从 `site.com` 网站跳转至另一个也带有 banner 的网站 `other.com` 时，`ads.com` 会获得该 cookie，因为它属于 `ads.com`，从而识别用户并在他在网站之间切换时对其进行跟踪

由于它的性质，第三方 cookie 通常用于跟踪和广告服务。它们被绑定在原始域上，因此 `ads.com` 可以在**不同网站之间跟踪同一用户**，如果这些网站都可以访问 `ads.com` 的话

## 2 localStorage sessionStorage

### 2.1 概念

与 cookie 不同，`localStorage` `sessionStorage` 不会随每个请求被发送到服务器。大多数现代浏览器都允许保存至少 `5MB` 的数据

还有一点和 cookie 不同，服务器无法通过 `HTTP header` 操纵存储对象。一切都是在 JavaScript 中完成的

存储绑定到源（域/协议/端口三者）。也就是说，不同协议或子域对应不同的存储对象，它们之间无法访问彼此数据

在所有同源的窗口之间，`localStorage` 数据可以共享。因此，如果我们在一个窗口中设置了数据，则在另一个窗口中也可以看到数据变化

**方法和属性：**

- `setItem(key, value)` —— 存储键/值对
- `getItem(key)` —— 按照键获取值
- `removeItem(key)` —— 删除键及其对应的值
- `clear()` —— 删除所有数据
- `key(index)` —— 获取该索引下的键名
- `length` —— 存储的内容的长度

### 2.2 类对象形式访问

可以像使用一个普通对象那样，读取/设置键：

```js
// 设置 key
localStorage.test = 2;

// 获取 key
alert(localStorage.test); // 2

// 删除 key
delete localStorage.test;
```

这是历史原因造成的，并且大多数情况下都可行，但通常不建议这样做，因为：

如果键是由用户生成的，那么它可以是任何内容，例如 `length` 或 `toString`，也可以是 localStorage 的另一种内建方法。在这种情况下，`getItem/setItem` 可以正常工作，而类对象访问的方式则会失败

### 2.3 遍历键

像遍历数组那样遍历：

```js
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

使用 `for key in localStorage` 循环，就像处理常规对象一样，但也会输出一些我们不需要的内建字段睿 `setItem` `getItem`

使用 `Object.keys` 获取只属于自己的键，再遍历：

```js
// Object.keys 只返回属于对象的键，会忽略原型上的
let keys = Object.keys(localStorage);

for (let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

### 2.4 仅字符串

注意，键和值都必须是字符串

如果是任何其他类型，例数字或对象，它会被自动转换为字符串

```js
localStorage.user = { name: 'John' };

alert(localStorage.user); // [object Object]
```

我们可以使用 `JSON` 来存储对象：

```js
localStorage.user = JSON.stringify({ name: 'John' });

// sometime later
let user = JSON.parse(localStorage.user);

alert(user.name); // John
```

### 2.5 sessionStorage

`sessionStorage` 对象的使用频率比 `localStorage` 对象低得多

**属性和方法是相同的，但是它有更多的限制：**

- `sessionStorage` 的数据只存在于当前浏览器标签页
  - 具有相同页面的另一个标签页中将会有不同的存储
  - 但是，它在同一标签页下的 `iframe` 之间是共享的（假如它们来自相同的源）
- 数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留

### 2.6 storage 事件

当 `localStorage` 或 `sessionStorage` 中的数据更新后，`storage` 事件就会触发，它具有以下属性：

- `key` —— 发生更改的数据的 `key`（如果调用的是 `.clear()` 方法，则为 `null`）
- `oldValue` —— 旧值（如果是新增数据，则为 `null`）
- `newValue` —— 新值（如果是删除数据，则为 `null`）
- `url` —— 发生数据更新的文档的 `url`
- `storageArea` —— 发生数据更新的 `localStorage` 或 `sessionStorage` 对象

> 该事件会在所有可访问到存储对象的 `window` 对象上触发，导致当前数据改变的 `window` 对象除外

这个特性可以用于不用窗口交换消息

现代浏览器还支持 `Broadcast channel API`，这是用于同源窗口之间通信的特殊 API，它的功能更全，但被支持的情况不好。有一些库基于 `localStorage` 来 `polyfill` 该 API

## 3 IndexedDB

`IndexedDB` 是一个浏览器内建的数据库，它比 `localStorage` 强大得多

- 通过支持多种类型的键，来存储几乎可以是任何类型的值
- 支撑事务的可靠性
- 支持键值范围查询、索引
- 和 `localStorage` 相比，它可以存储更大的数据量

对于传统的 `客户端-服务器` 应用，这些功能通常是没有必要的。`IndexedDB` 适用于离线应用，可与 `ServiceWorkers` 和其他技术相结合使用

`IndexedDB` 的本机接口是基于事件的。我们还可以在基于 `promise` 的包装器，如 [https://github.com/jakearchibald/idb](https://github.com/jakearchibald/idb) 的帮助下使用 `async/await`

### 3.1 打开数据库

```js
let openRequest = indexedDB.open(name, version);
```

- `name` —— 字符串，即数据库名称
- `version` —— 一个正整数版本，默认为 1

数据库可以有许多不同的名称，但是必须存在于当前的源（域/协议/端口）中。不同的网站不能相互访问对方的数据库

调用之后会返回 `openRequest` 对象，我们需要监听该对象上的事件：

- `success` 数据库准备就绪，`openRequest.result` 中有了一个数据库对象 `Database Object`，我们应该将其用于进一步的调用
- `error` 打开失败
- `upgradeneeded` 数据库已准备就绪，但其版本已过时

> `IndexedDB` 具有内建的 `模式（scheme）版本控制` 机制，这在服务器端数据库中是不存在的

**数据库版本：**

开发人员无法随时都能访问 `IndexedDB`。因此，当我们发布了新版本的应用程序，我们可能需要更新该数据库

如果本地数据库版本低于 `open` 中指定的版本，会触发一个特殊事件 `upgradeneeded`。我们可以根据需要比较版本并升级数据结构

当数据库还不存在时（从技术上讲，其版本为 0），也会触发 `upgradeneeded` 事件。因此，我们可以执行初始化

发布应用程序的第一个版本，并在一个 `upgradeneeded` 的处理程序中执行初始化，如下所示：

```js
let openRequest = indexedDB.open("store", 1);

openRequest.onupgradeneeded = function() {
  // 如果客户端没有数据库则触发
  // ...执行初始化...
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
  let db = openRequest.result;
  // 继续使用 db 对象处理数据库
};
```

发布第二个版本时，进行升级：

```js
let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = function(event) {
  // 现有的数据库版本小于 2（或不存在）
  let db = openRequest.result;
  switch(event.oldVersion) { // 现有的 db 版本
    case 0:
      // 版本 0 表示客户端没有数据库
      // 执行初始化
    case 1:
      // 客户端版本为 1
      // 更新
  }
};
```

**删除数据库：**

```js
let deleteRequest = indexedDB.deleteDatabase(name)
// deleteRequest.onsuccess/onerror 追踪（tracks）结果
```

**并行更新问题：**

- 一个用户在一个浏览器标签页中打开了数据库版本为 1 的我们的网站
- 接下来我们发布了一个更新，使得代码更新了
- 接下来同一个用户在另一个浏览器标签中打开了这个网站

这时，有一个标签页和版本为 1 的数据库建立了一个连接，而另一个标签页试图在其 `upgradeneeded` 处理程序中将数据库版本升级到 2

要执行版本 2 的更新，必须关闭对版本 1 的所有连接，包括第一个标签页中的那个

为了解决这一问题，`versionchange` 事件会在过时的数据库对象上触发。我们需要监听这个事件，关闭对旧版本数据库的连接（还应该建议访问者重新加载页面，以加载最新的代码）

如果我们不监听 `versionchange` 事件，也不去关闭旧连接，那么新的连接就不会建立。`openRequest` 对象会产生 `blocked` 事件，而不是 `success` 事件。因此第二个标签页无法正常工作

下面是能够正确处理并行升级情况的代码。它安装了 `onversionchange` 处理程序，如果当前数据库连接过时（数据库版本在其他位置被更新）并关闭连接，则会触发该处理程序。

```js
let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = ...;
openRequest.onerror = ...;

openRequest.onsuccess = function() {
  let db = openRequest.result;

  db.onversionchange = function() {
    db.close();
    alert("Database is outdated, please reload the page.")
  };

  // ……数据库已经准备好，请使用它……
};

openRequest.onblocked = function() {
  // 如果我们正确处理了 onversionchange 事件，这个事件就不应该触发

  // 这意味着还有另一个指向同一数据库的连接
  // 并且在 db.onversionchange 被触发后，该连接没有被关闭
};
```

在这我们做两件事：

- 如果当前数据库版本过时，`db.onversionchange` 监听器会通知我们并行尝试更新
- `openRequest.onblocked` 监听器通知我们相反的情况：在其他地方有一个与过时的版本的连接未关闭，因此无法建立新的连接
