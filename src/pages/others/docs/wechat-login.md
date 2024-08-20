# 多标签页通信-不刷新页面实现微信第三方登录

最近开发的一个项目“在线编程平台”需要做微信和 QQ 的第三方登录。第三方登录需要进行几次重定向，参考了很多网站，发现第三方登录都会跳转或者刷新页面，这个体验不太好。一是重新加载页面需要时间，二是如果填写了一些内容跳转后会被清空。所以研究了一下如何不刷新当前页面的情况下实现第三方登录。

原理就是扫码页面用新的窗口打开，然后通过 localstorage 来传递数据。localstorage 有个特性：在其他标签页面中变更 localstorage 中的数据，当前标签页面可以监听到事件，但是当前标签页的变更不会触发事件，所以这个特性非常适合这个场景。

## 1 浏览器间多个标签之间的通信

### 1.1 websocket 通信

WebSocket 是 HTML5 新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器

WebSocket 连接必须由浏览器发起，特点：

1. 建立在 TCP 协议之上，服务器端的实现比较容易
2. 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器
3. 数据格式比较轻量，性能开销小，通信高效
4. 可以发送文本，也可以发送二进制数据
5. 没有同源限制，客户端可以与任意服务器通信
6. 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL

### 1.2 定时器 + cookie

在页面 A 设置一个使用  setInterval  定时器不断刷新，检查  Cookies  的值是否发生变化，如果变化就进行刷新的操作。由于  Cookies  是在同域可读的，所以在页面 B 审核的时候改变  Cookies  的值，页面 A 自然是可以拿到的。这样做确实可以实现想要的功能，但是这样的方法相当浪费资源。虽然在这个性能过盛的时代，浪费不浪费也感觉不出来，但是这种实现方案不够优雅

### 1.3 SharedWorker

JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰

SharedWorkerm，不同的线程可以共享一个线程，他们的数据也是共享的

[阮一峰 Web Worker](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

[SharedWorker 文档](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/SharedWorker)

### 1.4 localstorage

localstorage 是浏览器多个标签共用的存储空间，localstorge 在一个标签页里被添加、修改或删除时，都会触发一个 storage 事件，通过在另一个标签页里监听 storage 事件，即可得到 localstorge 存储的值，实现不同标签页之间的通信。

这次分享使用的方法就是 localstorage

## 2 微信第三方登录

微信 OAuth2.0 授权登录让微信用户使用微信身份安全登录第三方应用或网站，在微信用户授权登录已接入微信 OAuth2.0 的第三方应用后，第三方可以获取到用户的接口调用凭证（access_token），通过 access_token 可以进行微信开放平台授权关系接口调用，从而可实现获取微信用户基本开放信息和帮助用户实现基础开放功能等。

流程：

1. 第三方发起微信授权登录请求，微信用户允许授权第三方应用后，微信会拉起应用或重定向到第三方网站，并且带上授权临时票据 code 参数；
2. 通过 code 参数加上 AppID 和 AppSecret 等，通过 API 换取 access_token；
3. 通过 access_token 进行接口调用，获取用户基本数据资源或帮助用户实现基本操作。

## 实现

前端的主要工作就是拿到 code

### 验证应用及域名是否有效

直接在浏览器打开地址

```
https://open.weixin.qq.com/connect/qrconnect?appid=你的appid&redirect_uri=配置的重定向域名&response_type=code&scope=snsapi_login&state=#wechat_redirect
```

如果你能看到一个扫码页面，那么说明成功了。特别注意，最好在这步成功后再进行后续的操作

### 获取 code

```javascript
import qs from 'qs';
import store from 'store';

/**
 * @description 打开微信扫码窗口
 */
function getWechatCode() {
  // 先清除storage事件
  window.removeEventListener('storage', handleStorageChange);

  // 发起请求需要传的数据
  let param = qs.stringify({
    appid: '填appid',
    redirect_uri: encodeURI(`http://www.test.com/getcode`), // 微信重定向回来的地址，这个地址接收code
    response_type: 'code',
    scope: 'snsapi_login',
    state: '' // 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击）
  });

  let url = `https://open.weixin.qq.com/connect/qrconnect?${param}#wechat_redirect`;

  // 打开一个新窗口
  window.open(
    url,
    'wechatLogin',
    'width=600,height=560,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=0'
  );

  // 监听storage变化
  window.addEventListener('storage', handleStorageChange);
}

/**
 * @description 监听storage变化
 */
function handleStorageChange(e) {
  const wechat = store.get('wechat');

  if (wechat && wechat.code) {
    window.removeEventListener('storage', handleStorageChange);
    store.remove('wechat');

    // 这里已经拿到了code，可以给后台发请求
    // ...
  }
}
```

```javascript
// 重定向页面的代码（即接收code的页面）

// 获取url上面的code
let param = qs.parse(window.location.href.split('?')[1]);

// 将code保存在localstorage，这时其他页面就会触发事件
store.set('wechat', param);

// 关闭当前的窗口
window.opener = null;
window.close();
```

注意：`window.close()` 只能关闭 js 打开的页面，在浏览器直接输 url 打开的页面用这个方法是无效的
