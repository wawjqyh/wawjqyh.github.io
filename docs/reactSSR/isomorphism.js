(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/reactSSR/isomorphism"],{PwTq:function(t,e,n){var r=n("Rxnk"),o=n("OLDR"),a=n("Gnp4"),c=r(o),p=r(a),l='<h1 id="\u540c\u6784">\u540c\u6784</h1> <p>demo \u5730\u5740 <a href="https://github.com/wawjqyh/demo-react-ssr/tree/master/3-isomorphism">https://github.com/wawjqyh/demo-react-ssr/tree/master/3-isomorphism</a></p> <h2 id="1-\u540c\u6784\u7684\u6982\u5ff5">1 \u540c\u6784\u7684\u6982\u5ff5</h2> <p>\u540c\u6784\u7684\u610f\u601d\u5c31\u662f\u4e00\u5957 react \u4ee3\u7801\uff0c\u5728\u670d\u52a1\u7aef\u6267\u884c\u4e00\u6b21\uff0c\u518d\u5230\u5ba2\u6237\u7aef\u7aef\u6267\u884c\u4e00\u6b21\u3002</p> <p>\u4e3a\u4ec0\u4e48\u8981\u505a\u540c\u6784\u5462\uff0c\u5148\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a</p> <pre><code class="language-javascript">class Index extends Component {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;h1&gt;\u540c\u6784&lt;/h1&gt;\n        &lt;button\n          onClick={() =&gt; {\n            alert(&#39;\u6211\u88ab\u70b9\u51fb\u4e86&#39;);\n          }}\n        &gt;\n          \u70b9\u51fb\n        &lt;/button&gt;\n      &lt;/div&gt;\n    );\n  }\n}</code></pre> <p>\u4e0a\u9762\u7684\u7ec4\u4ef6\u4e2d\u6709\u4e00\u4e2a\u6309\u94ae\uff0c\u5e76\u4e14\u7ed1\u5b9a\u4e86\u4e8b\u4ef6\uff0c\u5982\u679c\u4f7f\u7528\u670d\u52a1\u7aef\u6e32\u67d3\u70b9\u51fb\u4e8b\u4ef6\u4e0d\u4f1a\u88ab\u89e6\u53d1\uff0c\u56e0\u4e3a <code>renderToString</code> \u53ea\u662f\u5c06\u865a\u62df dom \u8f6c\u6210\u5b57\u7b26\u4e32\u8fd4\u56de\uff0c\u6240\u4ee5\u70b9\u51fb\u4e8b\u4ef6\u6839\u672c\u6ca1\u6709\u7ed1\u5b9a\u3002\u6240\u4ee5\u8fd9\u91cc\u5c31\u9700\u8981\u4f7f\u7528\u540c\u6784\uff0c\u9700\u8981\u5c06 react \u4ee3\u7801\u518d\u5230\u6d4f\u89c8\u5668\u6267\u884c\u4e00\u6b21\u3002</p> <p>\u4f7f\u7528\u67e5\u770b\u6e90\u7801\u67e5\u770b\u670d\u52a1\u5668\u8fd4\u56de\u7684\u5185\u5bb9\uff08\u53ef\u4ee5\u770b\u5230\u5e76\u6ca1\u6709\u7ed1\u5b9a\u4e8b\u4ef6\uff09\uff1a</p> <p><img src="'+c+'" alt=""></p> <h2 id="2-\u5982\u4f55\u5b9e\u73b0\u540c\u6784">2 \u5982\u4f55\u5b9e\u73b0\u540c\u6784</h2> <p>\u5b9e\u73b0\u540c\u6784\u4e5f\u5c31\u662f\u65e2\u8981\u670d\u52a1\u5668\u6e32\u67d3\u4e5f\u8981\u5ba2\u6237\u7aef\u6e32\u67d3\uff0c\u670d\u52a1\u7aef\u6e32\u67d3\u5df2\u7ecf\u5b9e\u73b0\u4e86\uff0c\u5ba2\u6237\u7aef\u6e32\u67d3\u5c31\u8ddf\u4f20\u7edf\u7684 react \u9879\u76ee\u4e00\u6837\uff0c\u5728 html \u4e2d\u5f15\u5165\u6253\u5305\u540e\u7684 js \u6587\u4ef6\u3002</p> <p>\u4e0d\u540c\u7684\u662f\u6e32\u67d3\u8981\u7684\u65b9\u6cd5\u4e0d\u4e00\u6837\uff0c\u540c\u6784\u4f7f\u7528\u7684\u662f <code>hydrate</code> \u65b9\u6cd5\u3002<code>render</code> \u65b9\u6cd5\u4f1a\u518d\u6b21\u6e32\u67d3\u9875\u9762\uff0c\u56e0\u4e3a\u670d\u52a1\u7aef\u6e32\u67d3\u5df2\u7ecf\u62ff\u5230\u4e86\u9875\u9762\u7684\u5185\u5bb9\uff0c\u4e0d\u9700\u8981\u518d\u5b8c\u6574\u7684\u6e32\u67d3\u4e00\u6b21\uff0c\u53ea\u9700\u8981\u505a\u4e00\u4e9b\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u3002</p> <p>\u4e0b\u9762\u6458\u6284\u81ea react \u5b98\u7f51\uff1a</p> <pre><code class="language-javascript">ReactDOM.hydrate(element, container[, callback])</code></pre> <blockquote> <p>\u4e0e render() \u76f8\u540c\uff0c\u4f46\u5b83\u7528\u4e8e\u5728 ReactDOMServer \u6e32\u67d3\u7684\u5bb9\u5668\u4e2d\u5bf9 HTML \u7684\u5185\u5bb9\u8fdb\u884c hydrate \u64cd\u4f5c\u3002React \u4f1a\u5c1d\u8bd5\u5728\u5df2\u6709\u6807\u8bb0\u4e0a\u7ed1\u5b9a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002</p> </blockquote> <p>\u6ce8\u610f\u70b9\uff1a</p> <ul> <li>\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u4ee3\u7801\u90fd\u9700\u8981\u4f7f\u7528 webpack \u6253\u5305</li> <li>\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4f7f\u7528\u7684\u662f\u540c\u4e00\u5957\u4ee3\u7801\uff08\u90fd\u662f\u8c03\u7528\u7684 client/pages \u4e0b\u7684\u7ec4\u4ef6\uff09\uff0c\u552f\u4e00\u4e0d\u540c\u7684\u662f rander \u65b9\u6cd5\u4e0d\u4e00\u6837</li> <li>\u9700\u8981\u5728 html \u4e2d\u5f15\u5165\u6253\u5305\u540e\u7684 js \u6587\u4ef6</li> </ul> <p>\u4e0b\u9762\u662f\u9879\u76ee\u7684\u7ed3\u6784\uff08\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u6f14\u793a\u9879\u76ee\uff0c\u5b9e\u9645\u9879\u76ee\u81ea\u884c\u5b8c\u5584\uff09\uff1a</p> <p><img src="'+p+'" alt=""></p> <pre><code class="language-javascript">// src/main.jsx \u4ee3\u7801\n\nconst appTarget = document.getElementById(&#39;root&#39;);\n// \u540c\u6784\u9700\u8981\u4f7f\u7528 hydrate\nReactDOM.hydrate(&lt;Index /&gt;, appTarget);</code></pre> <pre><code class="language-javascript">// server/router.js \u4ee3\u7801\nrouter.get(&#39;/&#39;, (ctx, next) =&gt; {\n  const content = renderToString(&lt;Home /&gt;);\n\n  ctx.body = `\n    &lt;html&gt;\n      &lt;head&gt;\n        &lt;title&gt;react srr&lt;/title&gt;\n      &lt;/head&gt;\n      &lt;body&gt;\n        &lt;div id=&quot;root&quot;&gt;${content}&lt;/div&gt;\n        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;\n      &lt;/body&gt;\n    &lt;/html&gt;\n  `;\n});\n\n// &lt;div id=&quot;root&quot;&gt;&lt;/div&gt; \u4e2d\u95f4\u4e0d\u8981\u6709\u7a7a\u683c\u6216\u8005\u6362\u884c\uff0c\u4e0d\u7136\u4f1a\u6709\u8b66\u544a\n// \u5728 body \u4e2d\u5f15\u5165\u6253\u5305\u540e\u7684\u5ba2\u6237\u7aef js</code></pre> ';t.exports=l}}]);