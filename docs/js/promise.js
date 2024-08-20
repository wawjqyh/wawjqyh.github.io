(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/js/promise"],{Irfj:function(e,o){var r='<h1 id="promiseasyncawait">Promise/async/await</h1> <h2 id="1-promise">1 Promise</h2> <p><code>resolve/reject</code> \u53ea\u9700\u8981\u4e00\u4e2a\u53c2\u6570\uff08\u6216\u4e0d\u5305\u542b\u4efb\u4f55\u53c2\u6570\uff09\uff0c\u5e76\u4e14\u5c06\u5ffd\u7565\u989d\u5916\u7684\u53c2\u6570</p> <blockquote> <p>\u5efa\u8bae\u4ee5 <code>Error</code> \u5bf9\u8c61 <code>reject</code>\uff0c<code>reject</code> \u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7c7b\u578b\u7684\u53c2\u6570\u3002\u4f46\u662f\u5efa\u8bae\u4f7f\u7528 <code>Error</code> \u5bf9\u8c61\uff08\u6216\u7ee7\u627f\u81ea <code>Error</code> \u7684\u5bf9\u8c61\uff09</p> </blockquote> <blockquote> <p><code>Promise</code> \u5bf9\u8c61\u7684 <code>state</code> \u548c <code>result</code> \u5c5e\u6027\u90fd\u662f\u5185\u90e8\u7684\u3002\u6211\u4eec\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u5b83\u4eec\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u5bf9\u5b83\u4eec\u4f7f\u7528 <code>.then/.catch/.finally</code> \u65b9\u6cd5</p> </blockquote> <p><strong>then</strong></p> <pre><code class="language-js">promise.then(\n  function(result) {\n    /* handle a successful result */\n  },\n  function(error) {\n    /* handle an error */\n  }\n);</code></pre> <ul> <li><code>.then</code> \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u5728 <code>promise resolved</code> \u540e\u8fd0\u884c\u5e76\u63a5\u6536\u7ed3\u679c</li> <li><code>.then</code> \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u5728 <code>promise rejected</code> \u540e\u8fd0\u884c\u5e76\u63a5\u6536 <code>error</code></li> </ul> <p><strong>catch</strong></p> <p><code>.catch(f)</code> \u8c03\u7528\u662f <code>.then(null, f)</code> \u7684\u5b8c\u5168\u7684\u6a21\u62df\uff0c\u5b83\u53ea\u662f\u4e00\u4e2a\u7b80\u5199\u5f62\u5f0f</p> <p><strong>finally</strong></p> <p><code>finally</code> \u603b\u662f\u5728 promise \u88ab settled \u65f6\u8fd0\u884c\uff1a\u5373 promise \u88ab resolve \u6216 reject</p> <blockquote> <p>\u5982\u679c promise \u4e3a pending \u72b6\u6001\uff0c<code>then/catch/finally</code> \u5904\u7406\u7a0b\u5e8f\uff08handler\uff09\u5c06\u7b49\u5f85\u5b83\u3002\u5426\u5219\uff0c\u5982\u679c promise \u5df2\u7ecf\u662f settled \u72b6\u6001\uff0c\u5b83\u4eec\u5c31\u4f1a\u8fd0\u884c\u3002\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\uff0c\u5728 promise \u4e0a\u591a\u6b21\u8c03\u7528 <code>.then</code>\u3002\u6bcf\u6b21\u8c03\u7528\uff0c\u6211\u4eec\u90fd\u4f1a\u5728 \u201c\u8ba2\u9605\u5217\u8868\u201d \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 \u201c\u5206\u6790\u201d\uff0c\u4e00\u4e2a\u65b0\u7684\u8ba2\u9605\u51fd\u6570</p> </blockquote> <h2 id="2-promise-\u94fe">2 Promise \u94fe</h2> <h3 id="21-then">2.1 then</h3> <p>\u5bf9 <code>promise.then</code> \u7684\u8c03\u7528\u4f1a\u8fd4\u56de\u4e86\u4e00\u4e2a <code>promise</code>\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e4b\u4e0a\u8c03\u7528\u4e0b\u4e00\u4e2a <code>.then</code>\u3002</p> <p>\u5f53\u5904\u7406\u7a0b\u5e8f<code>\uff08handler\uff09</code>\u8fd4\u56de\u4e00\u4e2a\u503c\u65f6\uff0c\u5b83\u5c06\u6210\u4e3a\u8be5 <code>promise</code> \u7684 <code>result</code></p> <pre><code class="language-js">new Promise(function(resolve, reject) {\n  setTimeout(() =&gt; resolve(1), 1000); // (*)\n})\n  .then(function(result) {\n    alert(result); // 1\n    return result * 2;\n  })\n  .then(function(result) {\n    alert(result); // 2\n    return result * 2;\n  })\n  .then(function(result) {\n    alert(result); // 4\n    return result * 2;\n  });</code></pre> <h3 id="22-\u8fd4\u56de-promise">2.2 \u8fd4\u56de Promise</h3> <p><code>.then(handler)</code> \u4e2d\u6240\u4f7f\u7528\u7684\u5904\u7406\u7a0b\u5e8f<code>\uff08handler\uff09</code>\u53ef\u4ee5\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a <code>promise</code>\u3002</p> <p>\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5176\u4ed6\u7684\u5904\u7406\u7a0b\u5e8f<code>\uff08handler\uff09</code>\u5c06\u7b49\u5f85\u5b83 <code>settled</code> \u540e\u518d\u83b7\u5f97\u5176\u7ed3\u679c<code>\uff08result\uff09</code></p> <pre><code class="language-js">new Promise(function(resolve, reject) {\n  setTimeout(() =&gt; resolve(1), 1000);\n})\n  .then(function(result) {\n    alert(result); // 1\n\n    return new Promise((resolve, reject) =&gt; {\n      setTimeout(() =&gt; resolve(result * 2), 1000);\n    });\n  })\n  .then(function(result) {\n    alert(result); // 2\n\n    return new Promise((resolve, reject) =&gt; {\n      setTimeout(() =&gt; resolve(result * 2), 1000);\n    });\n  })\n  .then(function(result) {\n    alert(result); // 4\n  });</code></pre> <h2 id="3-\u9519\u8bef\u5904\u7406">3 \u9519\u8bef\u5904\u7406</h2> <h3 id="31-\u9690\u5f0f-trycatch">3.1 \u9690\u5f0f <code>try...catch</code></h3> <p>\u5f53\u4e00\u4e2a <code>promise</code> \u88ab <code>reject</code> \u65f6\uff0c\u63a7\u5236\u6743\u5c06\u79fb\u4ea4\u81f3\u6700\u8fd1\u7684 <code>rejection</code> \u5904\u7406\u7a0b\u5e8f\uff08handler\uff09</p> <p><code>Promise</code> \u7684\u6267\u884c\u8005\uff08executor\uff09\u548c <code>promise</code> \u7684\u5904\u7406\u7a0b\u5e8f\uff08handler\uff09\u5468\u56f4\u6709\u4e00\u4e2a \u201c\u9690\u5f0f\u7684 <code>try..catch</code>\u201d\u3002\u5982\u679c\u53d1\u751f\u5f02\u5e38\uff0c\u5b83\u5c31\u4f1a\u88ab\u6355\u83b7\uff0c\u5e76\u88ab\u89c6\u4e3a <code>rejection</code> \u8fdb\u884c\u5904\u7406</p> <p>\u4e24\u6bb5\u6bb5\u4ee3\u7801\u5de5\u4f5c\u4e0a\u5b8c\u5168\u76f8\u540c\uff1a</p> <pre><code class="language-js">new Promise((resolve, reject) =&gt; {\n  throw new Error(&#39;Whoops!&#39;);\n}).catch(alert); // Error: Whoops!\n\nnew Promise((resolve, reject) =&gt; {\n  reject(new Error(&#39;Whoops!&#39;));\n}).catch(alert); // Error: Whoops!</code></pre> <blockquote> <p>\u94fe\u5f0f\u8c03\u7528\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a <code>catch</code>\u3002<code>catch</code> \u4e2d\u4e5f\u53ef\u4ee5\u518d\u6b21\u629b\u51fa\u9519\u8bef\uff0c\u9519\u8bef\u4f1a\u5728\u4e0b\u4e00\u4e2a\u6700\u8fd1\u7684\u9519\u8bef\u5904\u7406\u7a0b\u5e8f\u6355\u83b7</p> </blockquote> <h3 id="32-\u672a\u5904\u7406\u7684-rejection">3.2 \u672a\u5904\u7406\u7684 rejection</h3> <blockquote> <p>\u672a\u5904\u7406\u7684 <code>rejection</code>\uff0c\u4f1a\u5bfc\u81f4\u811a\u672c\u4e2d\u6b62\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u5168\u5c40\u7684 <code>error</code></p> </blockquote> <p>\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 <code>unhandledrejection</code> \u4e8b\u4ef6\u6765\u6355\u83b7\u8fd9\u7c7b <code>error</code>\uff1a</p> <pre><code class="language-js">window.addEventListener(&#39;unhandledrejection&#39;, function(event) {\n  // \u8fd9\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\u6709\u4e24\u4e2a\u7279\u6b8a\u7684\u5c5e\u6027\uff1a\n  alert(event.promise); // [object Promise] - \u751f\u6210\u8be5\u5168\u5c40 error \u7684 promise\n  alert(event.reason); // Error: Whoops! - \u672a\u5904\u7406\u7684 error \u5bf9\u8c61\n});\n\nnew Promise(function() {\n  throw new Error(&#39;Whoops!&#39;);\n}); // \u6ca1\u6709\u7528\u6765\u5904\u7406 error \u7684 catch</code></pre> <h2 id="4-promise-api">4 Promise API</h2> <h3 id="41-promiseall">4.1 <code>Promise.all</code></h3> <p><code>Promise.all</code> \u63a5\u53d7\u4e00\u4e2a <code>promise</code> \u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff08\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u5b83\u53ef\u4ee5\u662f\u4efb\u4f55\u53ef\u8fed\u4ee3\u7684\uff0c\u4f46\u901a\u5e38\u662f\u4e00\u4e2a\u6570\u7ec4\uff09\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 <code>promise</code></p> <p>\u7ed3\u679c\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u987a\u5e8f\u4e0e\u5176\u5728\u6e90 <code>promise</code> \u4e2d\u7684\u987a\u5e8f\u76f8\u540c</p> <pre><code class="language-js">Promise.all([\n  new Promise(resolve =&gt; setTimeout(() =&gt; resolve(1), 3000)), // 1\n  new Promise(resolve =&gt; setTimeout(() =&gt; resolve(2), 2000)), // 2\n  new Promise(resolve =&gt; setTimeout(() =&gt; resolve(3), 1000)) // 3\n]).then(alert); // 1,2,3</code></pre> <blockquote> <p>\u5982\u679c\u4efb\u610f\u4e00\u4e2a <code>promise</code> \u88ab <code>reject</code>\uff0c\u7531 <code>Promise.all</code> \u8fd4\u56de\u7684 <code>promise</code> \u5c31\u4f1a\u7acb\u5373 <code>reject</code>\uff0c\u5e76\u4e14 <code>reject</code> \u8fd9\u4e2a <code>error</code></p> </blockquote> <p><code>Promise.all</code> \u53c2\u6570\u6570\u7ec4\u4e2d\u5141\u8bb8\u5143\u7d20\u4e0d\u4e3a <code>promise</code>\uff0c\u90a3\u4e48\u5b83\u5c06\u88ab \u201c\u6309\u539f\u6837\u201d \u4f20\u9012\u7ed9\u7ed3\u679c\u6570\u7ec4</p> <pre><code class="language-js">Promise.all([\n  new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; resolve(1), 1000);\n  }),\n  2,\n  3\n]).then(alert); // 1, 2, 3</code></pre> <h3 id="42-promiseallsettled">4.2 Promise.allSettled</h3> <p><code>Promise.allSettled</code> \u7b49\u5f85\u6240\u6709\u7684 <code>promise</code> \u90fd\u88ab <code>settle</code>\uff0c\u65e0\u8bba\u7ed3\u679c\u5982\u4f55\u3002\u7ed3\u679c\u6570\u7ec4\u5177\u6709\uff1a</p> <ul> <li><code>{status:&quot;fulfilled&quot;, value:result}</code> \u5bf9\u4e8e\u6210\u529f\u7684\u54cd\u5e94</li> <li><code>{status:&quot;rejected&quot;, reason:error}</code> \u5bf9\u4e8e error</li> </ul> <h3 id="43-promiserace">4.3 <code>Promise.race</code></h3> <p><code>Promise.race</code> \u53ea\u7b49\u5f85\u7b2c\u4e00\u4e2a settled \u7684 promise \u5e76\u83b7\u53d6\u5176\u7ed3\u679c\uff08\u6216 error\uff09</p> <pre><code class="language-js">Promise.race([\n  new Promise((resolve, reject) =&gt; setTimeout(() =&gt; resolve(1), 1000)),\n  new Promise((resolve, reject) =&gt; setTimeout(() =&gt; reject(new Error(&#39;Whoops!&#39;)), 2000)),\n  new Promise((resolve, reject) =&gt; setTimeout(() =&gt; resolve(3), 3000))\n]).then(alert); // 1</code></pre> <h3 id="44-promiseresolve">4.4 <code>Promise.resolve</code></h3> <p><code>Promise.resolve(value)</code> \u7528\u7ed3\u679c <code>value</code> \u521b\u5efa\u4e00\u4e2a <code>resolved</code> \u7684 <code>promise</code></p> <p>\u5982\u540c\uff1a</p> <pre><code class="language-js">let promise = new Promise(resolve =&gt; resolve(value));</code></pre> <p>\u4e00\u822c\u7528\u6765\u505a\u517c\u5bb9\u64cd\u4f5c\uff0c\u67d0\u4e9b\u51fd\u6570\u9700\u8981\u4fdd\u8bc1\u8fd4\u56de <code>promise</code>\u3002\u5982\u679c\u9700\u8981\u8fd4\u56de\u67d0\u4e2a\u5df2\u77e5\u7684\u503c\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 <code>Promise.resolve</code> \u6765\u5305\u88c5</p> <h3 id="45-promisereject">4.5 <code>Promise.reject</code></h3> <p><code>Promise.reject(error)</code> \u7528 <code>error</code> \u521b\u5efa\u4e00\u4e2a <code>rejected</code> \u7684 <code>promise</code></p> <h2 id="5-\u5fae\u4efb\u52a1">5 \u5fae\u4efb\u52a1</h2> <p>\u5f02\u6b65\u4efb\u52a1\u9700\u8981\u9002\u5f53\u7684\u7ba1\u7406\u3002\u4e3a\u6b64\uff0cECMA \u6807\u51c6\u89c4\u5b9a\u4e86\u4e00\u4e2a\u5185\u90e8\u961f\u5217 <code>PromiseJobs</code>\uff0c\u901a\u5e38\u88ab\u79f0\u4e3a \u201c\u5fae\u4efb\u52a1\u961f\u5217\uff08microtask queue\uff09\u201d\uff08ES8 \u672f\u8bed\uff09</p> <ul> <li>\u961f\u5217\uff08queue\uff09\u662f\u5148\u8fdb\u5148\u51fa\u7684\uff1a\u9996\u5148\u8fdb\u5165\u961f\u5217\u7684\u4efb\u52a1\u4f1a\u9996\u5148\u8fd0\u884c</li> <li>\u53ea\u6709\u5728 JavaScript \u5f15\u64ce\u4e2d\u6ca1\u6709\u5176\u5b83\u4efb\u52a1\u5728\u8fd0\u884c\u65f6\uff0c\u624d\u5f00\u59cb\u6267\u884c\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1</li> </ul> <p>\u5f53\u4e00\u4e2a <code>promise</code> \u51c6\u5907\u5c31\u7eea\u65f6\uff0c\u5b83\u7684 <code>.then/catch/finally</code> \u5904\u7406\u7a0b\u5e8f\uff08handler\uff09\u5c31\u4f1a\u88ab\u653e\u5165\u961f\u5217\u4e2d\uff1a\u4f46\u662f\u5b83\u4eec\u4e0d\u4f1a\u7acb\u5373\u88ab\u6267\u884c\u3002\u5f53 JavaScript \u5f15\u64ce\u6267\u884c\u5b8c\u5f53\u524d\u7684\u4ee3\u7801\uff0c\u5b83\u4f1a\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u4efb\u52a1\u5e76\u6267\u884c\u5b83</p> <h2 id="6-async-await">6 async await</h2> <h3 id="61-await">6.1 await</h3> <p>\u51fd\u6570\u603b\u662f\u8fd4\u56de\u4e00\u4e2a <code>promise</code>\u3002\u5176\u4ed6\u503c\u5c06\u81ea\u52a8\u88ab\u5305\u88c5\u5728\u4e00\u4e2a <code>resolved</code> \u7684 <code>promise</code> \u4e2d</p> <pre><code class="language-js">async function f() {\n  return 1;\n}\n\nasync function f() {\n  return Promise.resolve(1);\n}\n\nf().then(alert); // 1</code></pre> <h3 id="61-\u9519\u8bef\u5904\u7406">6.1 \u9519\u8bef\u5904\u7406</h3> <p>\u5982\u679c\u4e00\u4e2a <code>promise</code> \u6b63\u5e38 <code>resolve</code>\uff0c<code>await promise</code> \u8fd4\u56de\u7684\u5c31\u662f\u5176\u7ed3\u679c\u3002\u4f46\u662f\u5982\u679c <code>promise</code> \u88ab <code>reject</code>\uff0c\u5b83\u5c06 <code>throw</code> \u8fd9\u4e2a <code>error</code>\uff0c\u5c31\u50cf\u5728\u8fd9\u4e00\u884c\u6709\u4e00\u4e2a <code>throw</code> \u8bed\u53e5\u90a3\u6837</p> <pre><code class="language-js">// \u4e24\u6bb5\u4ee3\u7801\u6548\u679c\u662f\u4e00\u6837\u7684\nasync function f() {\n  await Promise.reject(new Error(&quot;Whoops!&quot;));\n}\n\nasync function f() {\n  throw new Error(&quot;Whoops!&quot;);\n}</code></pre> ';e.exports=r}}]);