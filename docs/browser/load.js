(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/browser/load"],{xC3Y:function(e,o){var d='<h1 id="\u52a0\u8f7d\u6587\u6863\u548c\u5176\u4ed6\u8d44\u6e90">\u52a0\u8f7d\u6587\u6863\u548c\u5176\u4ed6\u8d44\u6e90</h1> <h2 id="1-\u9875\u9762\u751f\u547d\u5468\u671f">1 \u9875\u9762\u751f\u547d\u5468\u671f</h2> <h3 id="11-\u751f\u547d\u5468\u671f">1.1 \u751f\u547d\u5468\u671f</h3> <ul> <li><code>DOMContentLoaded</code> \u4e8b\u4ef6 \u2014\u2014 DOM \u5df2\u7ecf\u5c31\u7eea\uff0c\u56e0\u6b64\u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u67e5\u627e DOM \u8282\u70b9\uff0c\u5e76\u521d\u59cb\u5316\u63a5\u53e3</li> <li><code>load</code> \u4e8b\u4ef6 \u2014\u2014 \u5916\u90e8\u8d44\u6e90\u5df2\u52a0\u8f7d\u5b8c\u6210\uff0c\u6837\u5f0f\u5df2\u88ab\u5e94\u7528\uff0c\u56fe\u7247\u5927\u5c0f\u4e5f\u5df2\u77e5\u4e86</li> <li><code>beforeunload</code> \u4e8b\u4ef6 \u2014\u2014 \u7528\u6237\u6b63\u5728\u79bb\u5f00\uff1a\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u7528\u6237\u662f\u5426\u4fdd\u5b58\u4e86\u66f4\u6539\uff0c\u5e76\u8be2\u95ee\u4ed6\u662f\u5426\u771f\u7684\u8981\u79bb\u5f00</li> <li><code>unload</code> \u4e8b\u4ef6 \u2014\u2014 \u7528\u6237\u51e0\u4e4e\u5df2\u7ecf\u79bb\u5f00\u4e86\uff0c\u4f46\u662f\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u542f\u52a8\u4e00\u4e9b\u64cd\u4f5c\uff0c\u4f8b\u5982\u53d1\u9001\u7edf\u8ba1\u6570\u636e</li> </ul> <h3 id="12-domcontentloaded">1.2 DOMContentLoaded</h3> <p><code>DOMContentLoaded</code> \u4e8b\u4ef6\u53d1\u751f\u5728 <code>document</code> \u5bf9\u8c61\u4e0a</p> <pre><code class="language-js">function ready() {\n  alert(&#39;DOM is ready&#39;);\n\n  // \u56fe\u7247\u76ee\u524d\u5c1a\u672a\u52a0\u8f7d\u5b8c\u6210\uff08\u9664\u975e\u5df2\u7ecf\u88ab\u7f13\u5b58\uff09\uff0c\u6240\u4ee5\u56fe\u7247\u7684\u5927\u5c0f\u4e3a 0x0\n  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);\n}\n\ndocument.addEventListener(&#39;DOMContentLoaded&#39;, ready);</code></pre> <ul> <li><strong><code>DOMContentLoaded</code> \u548c\u811a\u672c\uff1a</strong> \u5f53\u6d4f\u89c8\u5668\u5904\u7406\u4e00\u4e2a <code>HTML</code> \u6587\u6863\u9047\u5230 <code>&lt;script&gt;</code> \u6807\u7b7e\u65f6\uff0c\u4f1a\u5148\u7b49\u5f85\u811a\u672c\u52a0\u8f7d\u5e76\u4e14\u8fd0\u884c\u5b8c\uff0c\u56e0\u4e3a\u811a\u672c\u53ef\u80fd\u60f3\u8981\u4fee\u6539 <code>DOM</code>\uff0c\u6240\u4ee5 <code>DOMContentLoaded</code> \u5fc5\u987b\u7b49\u5f85\u811a\u672c\u6267\u884c\u7ed3\u675f</li> <li><strong><code>DOMContentLoaded</code> \u548c\u6837\u5f0f\uff1a</strong> \u5916\u90e8\u6837\u5f0f\u8868\u4e0d\u4f1a\u5f71\u54cd <code>DOM</code>\uff0c\u56e0\u6b64 <code>DOMContentLoaded</code> \u4e0d\u4f1a\u7b49\u5f85\u6837\u5f0f\u52a0\u8f7d\u3002\u4f46\u662f\u6837\u5f0f\u540e\u9762\u5982\u679c\u6709\u811a\u672c\uff0c\u90a3\u4e48\u8be5\u811a\u672c\u5fc5\u987b\u7b49\u5f85\u6837\u5f0f\u8868\u52a0\u8f7d\u5b8c\u6210\u3002</li> </ul> <pre><code class="language-html">&lt;link type=&quot;text/css&quot; rel=&quot;stylesheet&quot; href=&quot;style.css&quot; /&gt;\n&lt;script&gt;\n  // \u5728\u6837\u5f0f\u8868\u52a0\u8f7d\u5b8c\u6210\u4e4b\u524d\uff0c\u811a\u672c\u90fd\u4e0d\u4f1a\u6267\u884c\n  alert(getComputedStyle(document.body).marginTop);\n&lt;/script&gt;</code></pre> <h3 id="13-windowonload">1.3 window.onload</h3> <p>\u5f53\u6574\u4e2a\u9875\u9762\uff0c\u5305\u62ec\u6837\u5f0f\u3001\u56fe\u7247\u548c\u5176\u4ed6\u8d44\u6e90\u88ab\u52a0\u8f7d\u5b8c\u6210\u65f6\uff0c\u4f1a\u89e6\u53d1 <code>window</code> \u5bf9\u8c61\u4e0a\u7684 <code>load</code> \u4e8b\u4ef6</p> <h3 id="14-windowonbeforeunload">1.4 window.onbeforeunload</h3> <p>\u79bb\u5f00\u9875\u9762\u7684\u5bfc\u822a\uff08navigation\uff09\u6216\u8bd5\u56fe\u5173\u95ed\u7a97\u53e3\uff0c<code>beforeunload</code> \u4f1a\u5f39\u51fa\u786e\u8ba4\u5f39\u6846</p> <blockquote> <p>\u8fd9\u4e2a\u4e8b\u4ef6\u6709\u517c\u5bb9\u95ee\u9898\u3002\u67d0\u4e9b\u65e7\u7684\u6d4f\u89c8\u5668\u4f1a\u5c06\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u63d0\u793a\u8bed\uff0c\u76ee\u524d\u5927\u90e8\u5206\u6d4f\u89c8\u5668\u662f\u65e0\u6cd5\u81ea\u5b9a\u4e49\u63d0\u793a\u8bed\u7684</p> </blockquote> <pre><code class="language-js">window.onbeforeunload = function() {\n  return &#39;There are unsaved changes. Leave now?&#39;;\n};</code></pre> <h3 id="15-windowonunload">1.5 window.onunload</h3> <p>\u79bb\u5f00\u9875\u9762\u65f6\uff0c<code>window</code> \u5bf9\u8c61\u4e0a\u7684 <code>unload</code> \u4e8b\u4ef6\u5c31\u4f1a\u88ab\u89e6\u53d1\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u90a3\u91cc\u505a\u4e00\u4e9b\u4e0d\u6d89\u53ca\u5ef6\u8fdf\u7684\u64cd\u4f5c</p> <p>\u53e6\u5916\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u5728\u79bb\u5f00\u65f6\u6536\u96c6\u4e00\u4e9b\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u5668\uff0c\u4f46\u662f\u8fd9\u662f\u4e00\u4e2a\u8017\u65f6\u64cd\u4f5c</p> <p>\u6709\u4e00\u4e2a\u7279\u6b8a\u7684 <code>navigator.sendBeacon(url, data)</code> \u65b9\u6cd5\u53ef\u4ee5\u6ee1\u8db3\u8fd9\u79cd\u9700\u6c42</p> <blockquote> <p><code>sendBeacon</code> \u5728\u540e\u53f0\u53d1\u9001\u6570\u636e\uff0c\u8f6c\u6362\u5230\u53e6\u5916\u4e00\u4e2a\u9875\u9762\u4e0d\u4f1a\u6709\u5ef6\u8fdf\uff1a\u6d4f\u89c8\u5668\u79bb\u5f00\u9875\u9762\uff0c\u4f46\u4ecd\u7136\u5728\u6267\u884c <code>sendBeacon</code></p> </blockquote> <h3 id="16-readystate">1.6 readyState</h3> <p><code>document.readyState</code> \u5c5e\u6027\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u5f53\u524d\u52a0\u8f7d\u72b6\u6001\u7684\u4fe1\u606f</p> <ul> <li><code>loading</code> \u2014\u2014 \u6587\u6863\u6b63\u5728\u88ab\u52a0\u8f7d</li> <li><code>interactive</code> \u2014\u2014 \u6587\u6863\u88ab\u5168\u90e8\u8bfb\u53d6</li> <li><code>complete</code> \u2014\u2014 \u6587\u6863\u88ab\u5168\u90e8\u8bfb\u53d6\uff0c\u5e76\u4e14\u6240\u6709\u8d44\u6e90\uff08\u4f8b\u5982\u56fe\u7247\u7b49\uff09\u90fd\u5df2\u52a0\u8f7d\u5b8c\u6210</li> </ul> <blockquote> <p><code>readystatechange</code> \u4e8b\u4ef6\uff0c\u4f1a\u5728\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1</p> </blockquote> <h2 id="2-\u811a\u672c-async-defer">2 \u811a\u672c async defer</h2> <p>\u5f53\u6d4f\u89c8\u5668\u52a0\u8f7d HTML \u65f6\u9047\u5230 <code>&lt;script&gt;...&lt;/script&gt;</code> \u6807\u7b7e\uff0c\u6d4f\u89c8\u5668\u5c31\u4e0d\u80fd\u7ee7\u7eed\u6784\u5efa DOM\u3002\u5b83\u5fc5\u987b\u7acb\u523b\u6267\u884c\u6b64\u811a\u672c</p> <h3 id="21-defer">2.1 defer</h3> <p><strong>defer \u7684\u7279\u6027\uff1a</strong></p> <ul> <li>\u5177\u6709 <code>defer</code> \u7279\u6027\u7684\u811a\u672c\u4e0d\u4f1a\u963b\u585e\u9875\u9762</li> <li>\u5177\u6709 <code>defer</code> \u7279\u6027\u7684\u811a\u672c\u603b\u662f\u8981\u7b49\u5230 <code>DOM</code> \u89e3\u6790\u5b8c\u6bd5\uff0c<strong>\u4f46\u5728 <code>DOMContentLoaded</code> \u4e8b\u4ef6\u4e4b\u524d\u6267\u884c</strong></li> </ul> <blockquote> <p>\u5177\u6709 defer \u7279\u6027\u7684\u811a\u672c\u4f1a\u6309\u987a\u5e8f\u6267\u884c\uff0c\u5c31\u50cf\u5e38\u89c4\u811a\u672c\u4e00\u6837</p> </blockquote> <h3 id="22-async">2.2 async</h3> <p><code>async</code> \u7279\u6027\u4e0e <code>defer</code> \u7c7b\u4f3c\u3002\u5b83\u4e5f\u80fd\u591f\u8ba9\u811a\u672c\u4e0d\u963b\u585e\u9875\u9762</p> <p><strong>async \u7684\u7279\u6027\uff1a</strong></p> <ul> <li>\u6d4f\u89c8\u5668\u4e0d\u4f1a\u56e0 <code>async</code> \u811a\u672c\u800c\u963b\u585e\uff08\u4e0e <code>defer</code> \u7c7b\u4f3c\uff09\u3002</li> <li>\u5176\u4ed6\u811a\u672c\u4e0d\u4f1a\u7b49\u5f85 <code>async</code> \u811a\u672c\u52a0\u8f7d\u5b8c\u6210\u3002\u5373\u6ca1\u6709\u5148\u540e\u987a\u5e8f\uff0c\u52a0\u8f7d\u5b8c\u5c31\u4f1a\u6267\u884c</li> <li><code>DOMContentLoaded</code> \u548c <code>async</code> \u5f02\u6b65\u811a\u672c\u65e0\u5173</li> </ul> <h3 id="23-\u52a8\u6001\u811a\u672c">2.3 \u52a8\u6001\u811a\u672c</h3> <p>\u52a8\u6001\u811a\u672c\u5c31\u662f\u4f7f\u7528 <code>JavaScript</code> \u52a8\u6001\u5730\u521b\u5efa <code>script</code> \u6807\u7b7e\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u6587\u6863\u4e2d</p> <blockquote> <p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a8\u6001\u811a\u672c\u7684\u884c\u4e3a\u662f <code>async</code> \u7684</p> </blockquote> <p>\u53ef\u4ee5\u663e\u5f0f\u5730\u8bbe\u7f6e\u4e86 <code>script.async=false</code>\uff0c\u90a3\u4e48\u5b83\u7684\u884c\u4e3a\u5c31\u4f1a\u53d8\u6210 defer</p> <h2 id="3-\u8d44\u6e90\u52a0\u8f7d">3 \u8d44\u6e90\u52a0\u8f7d</h2> <p>\u5177\u6709\u5916\u90e8 <code>src</code> \u7684\u4efb\u4f55\u8d44\u6e90\uff0c\u90fd\u6709 <code>onload/onerror</code> \u4e8b\u4ef6</p> <ul> <li><code>onload</code> \u52a0\u8f7d\u5b8c\u6210\u662f\u89e6\u53d1</li> <li><code>onerror</code> \u52a0\u8f7d\u5931\u8d25\u65f6\u89e6\u53d1\uff0c\u6bd4\u5982\u5730\u5740\u9519\u8bef</li> </ul> <p><strong>\u6ce8\u610f\uff1a</strong></p> <ul> <li>\u5927\u591a\u6570\u8d44\u6e90\u5728\u88ab\u6dfb\u52a0\u5230\u6587\u6863\u4e2d\u540e\uff0c\u4fbf\u5f00\u59cb\u52a0\u8f7d\u3002\u4f46\u662f <code>&lt;img&gt;</code> \u662f\u4e2a\u4f8b\u5916\u3002\u5b83\u8981\u7b49\u5230\u83b7\u5f97 <code>src</code> \u540e\u624d\u5f00\u59cb\u52a0\u8f7d\u3002</li> <li>\u5bf9\u4e8e <code>&lt;iframe&gt;</code> \u6765\u8bf4\uff0ciframe \u52a0\u8f7d\u5b8c\u6210\u65f6\u4f1a\u89e6\u53d1 <code>iframe.onload</code> \u4e8b\u4ef6\uff0c<strong>\u65e0\u8bba\u662f\u6210\u529f\u52a0\u8f7d\u8fd8\u662f\u51fa\u73b0 <code>error</code></strong></li> </ul> <blockquote> <p>\u8de8\u57df\u7684\u811a\u672c\u65e0\u6cd5\u83b7\u53d6\u8be5\u811a\u672c\u4e2d\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u9700\u8981\u5141\u8bb8\u8de8\u6e90\u8bbf\u95ee</p> </blockquote> ';e.exports=d}}]);