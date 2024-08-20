(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/js/object"],{agYG:function(e,o,n){var t=n("Rxnk"),l=n("BhhM"),d=n("pIKD"),c=n("lHZI"),i=n("thLE"),r=n("eFkH"),a=t(l),s=t(d),p=t(c),u=t(i),g=t(r),m='<h1 id="\u5bf9\u8c61">\u5bf9\u8c61</h1> <h2 id="1-\u57fa\u7840\u77e5\u8bc6">1 \u57fa\u7840\u77e5\u8bc6</h2> <h3 id="11-\u8ba1\u7b97\u5c5e\u6027">1.1 \u8ba1\u7b97\u5c5e\u6027</h3> <p>\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5bf9\u8c61\u5b57\u9762\u91cf\u4e2d\u4f7f\u7528\u65b9\u62ec\u53f7\u3002\u8fd9\u53eb\u505a<strong>\u8ba1\u7b97\u5c5e\u6027</strong></p> <pre><code class="language-javascript">let fruit = &#39;apple&#39;;\n\nlet bag = {\n  [fruit]: 5\n};\n\nalert(bag.apple); // \u5982\u679c fruit=&quot;apple&quot;</code></pre> <h3 id="12-in-\u64cd\u4f5c\u7b26">1.2 in \u64cd\u4f5c\u7b26</h3> <p>JavaScript \u7684\u5bf9\u8c61\u6709\u4e00\u4e2a\u7279\u6027\uff1a\u80fd\u591f\u88ab\u8bbf\u95ee\u4efb\u4f55\u5c5e\u6027\u3002<strong>\u5373\u4f7f\u5c5e\u6027\u4e0d\u5b58\u5728\u4e5f\u4e0d\u4f1a\u62a5\u9519</strong></p> <p>\u8bfb\u53d6\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u53ea\u4f1a\u5f97\u5230 <code>undefined</code></p> <pre><code class="language-javascript">let user = { age: 30 };\n\nlet key = &#39;age&#39;;\nalert(key in user); // true\uff0c\u5c5e\u6027 &quot;age&quot; \u5b58\u5728</code></pre> <p>\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4e0e <code>undefined</code> \u8fdb\u884c\u6bd4\u8f83\u6765\u5224\u65ad\u5c31\u53ef\u4ee5\u4e86\uff0c\u4f46\u6709\u4e00\u4e2a\u4f8b\u5916\u60c5\u51b5\uff1a\u5c5e\u6027\u5b58\u5728\uff0c\u4f46\u5b58\u50a8\u7684\u503c\u662f <code>undefined</code> \u7684\u65f6\u5019</p> <pre><code class="language-javascript">let obj = {\n  test: undefined\n};\n\nalert(obj.test); // \u663e\u793a undefined\uff0c\u6240\u4ee5\u5c5e\u6027\u4e0d\u5b58\u5728\uff1f\n\nalert(&#39;test&#39; in obj); // true\uff0c\u5c5e\u6027\u5b58\u5728\uff01</code></pre> <h3 id="13-\u5c5e\u6027\u987a\u5e8f">1.3 \u5c5e\u6027\u987a\u5e8f</h3> <p>\u5bf9\u8c61\u6709\u987a\u5e8f\uff0c\u6574\u6570\u5c5e\u6027\u4f1a\u88ab\u8fdb\u884c\u6392\u5e8f\uff0c\u5176\u4ed6\u5c5e\u6027\u5219\u6309\u7167\u521b\u5efa\u7684\u987a\u5e8f\u663e\u793a</p> <pre><code class="language-javascript">let codes = {\n  &#39;49&#39;: &#39;Germany&#39;,\n  &#39;41&#39;: &#39;Switzerland&#39;,\n  &#39;44&#39;: &#39;Great Britain&#39;,\n  &#39;1&#39;: &#39;USA&#39;\n};\n\nfor (let code in codes) {\n  alert(code); // 1, 41, 44, 49\n}</code></pre> <p>\u5982\u679c\u5c5e\u6027\u540d\u4e0d\u662f\u6574\u6570\uff0c\u90a3\u5b83\u4eec\u5c31\u6309\u7167\u521b\u5efa\u65f6\u7684\u987a\u5e8f\u6765\u6392\u5e8f\uff0c\u4f8b\u5982\uff1a</p> <pre><code class="language-javascript">let user = {\n  name: &#39;John&#39;,\n  5: &#39;Troy&#39;,\n  surname: &#39;Smith&#39;,\n  2: &#39;Tom&#39;\n};\nuser.age = 25; // \u589e\u52a0\u4e00\u4e2a\n\n// \u975e\u6574\u6570\u5c5e\u6027\u662f\u6309\u7167\u521b\u5efa\u7684\u987a\u5e8f\u6765\u6392\u5217\u7684\nfor (let prop in user) {\n  alert(prop); // 2, 5, name, surname, age\n}</code></pre> <h2 id="2-\u5bf9\u8c61\u7684\u5f15\u7528\u548c\u590d\u5236">2 \u5bf9\u8c61\u7684\u5f15\u7528\u548c\u590d\u5236</h2> <h3 id="21-\u6df1\u62f7\u8d1d">2.1 \u6df1\u62f7\u8d1d</h3> <pre><code class="language-javascript">let obj = {\n  name: &#39;John&#39;,\n  other: {\n    age: 20\n  }\n};\n\n// other \u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\uff0cObject.assign \u53ea\u80fd\u62f7\u8d1d\u4e00\u5c42\uff0c\u65e0\u6cd5\u6df1\u62f7\u8d1d\n// \u5e76\u4e14 for in \u53ea\u904d\u5386\u4e00\u5c42\u7684\u8bdd\u4e5f\u65e0\u6cd5\u6df1\u62f7\u8d1d</code></pre> <p>\u6d45\u62f7\u8d1d\u662f\u53ea\u53ea\u62f7\u8d1d\u7b2c\u4e00\u5c42</p> <ul> <li><code>JSON.parse(JSON.stringify({}))</code> \u65e0\u6cd5\u62f7\u8d1d\u5176\u4ed6\u5f15\u7528\u7c7b\u578b\u3001\u62f7\u8d1d\u51fd\u6570\u3001\u5faa\u73af\u5f15\u7528\u7b49\u60c5\u51b5</li> <li><code>for in</code> \u80fd\u904d\u5386\u6240\u6709\u5c5e\u6027\u5417\uff0c\u6709\u4ec0\u4e48\u9650\u5236\uff0c\u7ee7\u627f\u7684\u5c5e\u6027\u80fd\u590d\u5236\u5417\uff1f<ul> <li>\u4f1a\u8df3\u8fc7 <code>Symbol</code> \u5c5e\u6027</li> </ul> </li> <li><code>Object.assign</code> \u4e0d\u80fd\u6df1\u62f7\u8d1d\uff0c\u53ea\u80fd\u62f7\u8d1d\u4e00\u5c42</li> </ul> <h3 id="22-\u5b9e\u73b0\u6df1\u62f7\u8d1d">2.2 \u5b9e\u73b0\u6df1\u62f7\u8d1d</h3> <p><strong>\u6ce8\u610f\u70b9\uff1a</strong></p> <ol> <li>\u5f15\u7528\u7c7b\u578b</li> <li>\u62f7\u8d1d\u51fd\u6570</li> <li>\u5faa\u73af\u5f15\u7528</li> <li>WeakMap \u7684\u7279\u6027</li> </ol> <pre><code class="language-js">function isObject(target) {\n  const type = typeof target;\n  return type !== null &amp;&amp; (type === &#39;object&#39; || type === &#39;function&#39;);\n}\n\nfunction getType(target) {\n  return Object.prototype.toString.call(target);\n}\n\nfunction clone(target, map = new WeakMap()) {\n  if (!isObject(target)) {\n    return target;\n  }\n\n  // \u5224\u65ad\u5faa\u73af\u5f15\u7528\uff0ces5 \u53ef\u4ee5\u7528\u6570\u7ec4\u4ee3\u66ff\n  if (map.get(target)) {\n    return target;\n  }\n\n  // \u7528\u6784\u9020\u51fd\u6570\u751f\u6210\u521d\u59cb\u503c\n  let cloneTarget = new target.constructor();\n\n  map.set(target, cloneTarget);\n\n  // Object Array\n  if (getType(target) === &#39;[object Object]&#39; || getType(target) === &#39;[object Array]&#39;) {\n    cloneTarget = Array.isArray(target) ? [] : {};\n\n    for (let key in target) {\n      cloneTarget[key] = clone(target[key], map);\n    }\n  }\n\n  // \u51fd\u6570\n\n  // \u5176\u4ed6\u7c7b\u578b\n\n  return cloneTarget;\n}</code></pre> <h2 id="3-\u5783\u573e\u56de\u6536">3 \u5783\u573e\u56de\u6536</h2> <h3 id="31-\u6982\u5ff5">3.1 \u6982\u5ff5</h3> <p>\u5bf9\u8c61\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u5b83\u7684\u5783\u573e\u56de\u6536\u673a\u5236\u4f1a\u66f4\u590d\u6742</p> <p>JavaScript \u7684\u5185\u5b58\u7ba1\u7406\u662f\u81ea\u52a8\u7684\uff0cJavaScript \u4e2d\u4e3b\u8981\u7684\u5185\u5b58\u7ba1\u7406\u6982\u5ff5\u662f <code>\u53ef\u8fbe\u6027</code></p> <p>\u4e0b\u9762\u662f\u56fa\u6709\u7684\u53ef\u8fbe\u503c\u7684\u57fa\u672c\u96c6\u5408\uff0c\u8fd9\u4e9b\u503c\u660e\u663e\u4e0d\u80fd\u88ab\u91ca\u653e\uff1a</p> <ul> <li>\u5f53\u524d\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\u548c\u53c2\u6570</li> <li>\u5d4c\u5957\u8c03\u7528\u65f6\uff0c\u5f53\u524d\u8c03\u7528\u94fe\u4e0a\u6240\u6709\u51fd\u6570\u7684\u53d8\u91cf\u4e0e\u53c2\u6570</li> <li>\u5168\u5c40\u53d8\u91cf</li> </ul> <p>\u5bf9\u4e8e\u5bf9\u8c61\uff1a\u5982\u679c\u4e00\u4e2a\u503c\u53ef\u4ee5\u901a\u8fc7\u5f15\u7528\u6216\u5f15\u7528\u94fe\u4ece\u6839\u8bbf\u95ee\u4efb\u4f55\u5176\u4ed6\u503c\uff0c\u5219\u8ba4\u4e3a\u8be5\u503c\u662f\u53ef\u8fbe\u7684</p> <pre><code class="language-javascript">// user \u5177\u6709\u5bf9\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\nlet user = {\n  name: &#39;John&#39;\n};\n\nlet admin = user; // admin \u548c John \u90fd\u6709\u5bf9 John \u7684\u5f15\u7528\n\nuser = null; // John \u4e0d\u4f1a\u88ab\u56de\u6536\uff0c\u8fd8\u5b58\u5728\u5176\u4ed6\u7684\u5f15\u7528\nadmin = null; // \u8fd9\u65f6\u624d\u4f1a\u88ab\u56de\u6536</code></pre> <ul> <li>\u5783\u573e\u56de\u6536\u662f\u81ea\u52a8\u5b8c\u6210\u7684\uff0c\u6211\u4eec\u4e0d\u80fd\u5f3a\u5236\u6267\u884c\u6216\u662f\u963b\u6b62\u6267\u884c</li> <li>\u5f53\u5bf9\u8c61\u662f\u53ef\u8fbe\u72b6\u6001\u65f6\uff0c\u5b83\u4e00\u5b9a\u662f\u5b58\u5728\u4e8e\u5185\u5b58\u4e2d\u7684</li> <li>\u88ab\u5f15\u7528\u4e0e\u53ef\u8bbf\u95ee\uff08\u4ece\u4e00\u4e2a\u6839\uff09\u4e0d\u540c\uff1a\u4e00\u7ec4\u76f8\u4e92\u8fde\u63a5\u7684\u5bf9\u8c61\u53ef\u80fd\u6574\u4f53\u90fd\u4e0d\u53ef\u8fbe</li> </ul> <h3 id="32-\u5783\u573e\u56de\u6536\u7b97\u6cd5">3.2 \u5783\u573e\u56de\u6536\u7b97\u6cd5</h3> <p>\u5783\u573e\u56de\u6536\u7684\u57fa\u672c\u7b97\u6cd5\u88ab\u79f0\u4e3a \u201cmark-and-sweep\u201d\u3002</p> <p>\u5b9a\u671f\u6267\u884c\u4ee5\u4e0b\u201c\u5783\u573e\u56de\u6536\u201d\u6b65\u9aa4\uff1a</p> <ul> <li>\u5783\u573e\u6536\u96c6\u5668\u627e\u5230\u6240\u6709\u7684\u6839\uff0c\u5e76\u201c\u6807\u8bb0\u201d\uff08\u8bb0\u4f4f\uff09\u5b83\u4eec</li> <li>\u7136\u540e\u5b83\u904d\u5386\u5e76\u201c\u6807\u8bb0\u201d\u6765\u81ea\u5b83\u4eec\u7684\u6240\u6709\u5f15\u7528</li> <li>\u7136\u540e\u5b83\u904d\u5386\u6807\u8bb0\u7684\u5bf9\u8c61\u5e76\u6807\u8bb0 \u5b83\u4eec\u7684 \u5f15\u7528\u3002\u6240\u6709\u88ab\u904d\u5386\u5230\u7684\u5bf9\u8c61\u90fd\u4f1a\u88ab\u8bb0\u4f4f\uff0c\u4ee5\u514d\u5c06\u6765\u518d\u6b21\u904d\u5386\u5230\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002</li> <li>\u2026\u2026\u5982\u6b64\u64cd\u4f5c\uff0c\u76f4\u5230\u6240\u6709\u53ef\u8fbe\u7684\uff08\u4ece\u6839\u90e8\uff09\u5f15\u7528\u90fd\u88ab\u8bbf\u95ee\u5230\u3002</li> <li>\u6ca1\u6709\u88ab\u6807\u8bb0\u7684\u5bf9\u8c61\u90fd\u4f1a\u88ab\u5220\u9664\u3002</li> </ul> <p>\u4f8b\u5982\uff1a</p> <p><img src="'+a+'" alt=""></p> <p>\u6211\u4eec\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230\u53f3\u4fa7\u6709\u4e00\u4e2a\u201c\u65e0\u6cd5\u5230\u8fbe\u7684\u5c9b\u5c7f\u201d\u3002\u73b0\u5728\u6211\u4eec\u6765\u770b\u770b\u201c\u6807\u8bb0\u548c\u6e05\u9664\u201d\u5783\u573e\u6536\u96c6\u5668\u5982\u4f55\u5904\u7406\u5b83\u3002</p> <p>\u7b2c\u4e00\u6b65\u6807\u8bb0\u6240\u6709\u7684\u6839\uff1a</p> <p><img src="'+s+'" alt=""></p> <p>\u7136\u540e\u5b83\u4eec\u7684\u5f15\u7528\u88ab\u6807\u8bb0\u4e86\uff1a</p> <p><img src="'+p+'" alt=""></p> <p>\u2026\u2026\u5982\u679c\u8fd8\u6709\u5f15\u7528\u7684\u8bdd\uff0c\u7ee7\u7eed\u6807\u8bb0\uff1a</p> <p><img src="'+u+'" alt=""></p> <p>\u73b0\u5728\uff0c\u65e0\u6cd5\u901a\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\u8bbf\u95ee\u5230\u7684\u5bf9\u8c61\u88ab\u8ba4\u4e3a\u662f\u4e0d\u53ef\u8fbe\u7684\uff0c\u5e76\u4e14\u4f1a\u88ab\u5220\u9664\u3002</p> <p><img src="'+g+'" alt=""></p> <h2 id="4-this">4 this</h2> <h3 id="41-\u51fd\u6570\u4e2d\u7684-this">4.1 \u51fd\u6570\u4e2d\u7684 this</h3> <p>\u5728 JavaScript \u4e2d\uff0c<code>this</code> \u5173\u952e\u5b57\u4e0e\u5176\u4ed6\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u4e0d\u540c\u3002JavaScript \u4e2d\u7684 <code>this</code> \u53ef\u4ee5\u7528\u4e8e\u4efb\u4f55\u51fd\u6570\uff0c\u5373\u4f7f\u5b83\u4e0d\u662f\u5bf9\u8c61\u7684\u65b9\u6cd5</p> <p><code>this</code> \u7684\u503c\u662f\u5728\u4ee3\u7801\u8fd0\u884c\u65f6\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u5b83\u53d6\u51b3\u4e8e\u4ee3\u7801\u4e0a\u4e0b\u6587</p> <pre><code class="language-javascript">let user = { name: &#39;John&#39; };\nlet admin = { name: &#39;Admin&#39; };\n\nfunction sayHi() {\n  alert(this.name);\n}\n\n// \u5728\u4e24\u4e2a\u5bf9\u8c61\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u51fd\u6570\nuser.f = sayHi;\nadmin.f = sayHi;\n\n// \u8fd9\u4e24\u4e2a\u8c03\u7528\u6709\u4e0d\u540c\u7684 this \u503c\n// \u51fd\u6570\u5185\u90e8\u7684 &quot;this&quot; \u662f\u201c\u70b9\u7b26\u53f7\u524d\u9762\u201d\u7684\u90a3\u4e2a\u5bf9\u8c61\nuser.f(); // John\uff08this == user\uff09\nadmin.f(); // Admin\uff08this == admin\uff09\n\nadmin[&#39;f&#39;](); // Admin\uff08\u4f7f\u7528\u70b9\u7b26\u53f7\u6216\u65b9\u62ec\u53f7\u8bed\u6cd5\u6765\u8bbf\u95ee\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u90fd\u6ca1\u6709\u5173\u7cfb\u3002\uff09</code></pre> <blockquote> <p>\u5728\u6ca1\u6709\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\uff1a<code>this == undefined</code>\uff0c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u7684\u60c5\u51b5\u4e0b\uff0cthis \u5c06\u4f1a\u662f\u5168\u5c40\u5bf9\u8c61</p> </blockquote> <pre><code class="language-javascript">function sayHi() {\n  alert(this);\n}\n\nsayHi(); // undefined</code></pre> <blockquote> <p><code>this</code> \u7684\u503c\u662f\u5728\u8c03\u7528\u65f6\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u5b83\u7684\u503c\u5e76\u4e0d\u53d6\u51b3\u4e8e\u65b9\u6cd5\u58f0\u660e\u7684\u4f4d\u7f6e\u3002<code>this</code> \u7684\u503c\u5c31\u662f\u5728\u70b9\u4e4b\u524d\u7684\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u5373\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u5bf9\u8c61</p> </blockquote> <h3 id="42-\u7bad\u5934\u51fd\u6570\u4e2d\u7684-this">4.2 \u7bad\u5934\u51fd\u6570\u4e2d\u7684 this</h3> <p>\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 <code>this</code>\uff0c\u4ece\u5916\u90e8\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6</p> <h2 id="5-\u6784\u9020\u5668-\u548c-new">5 \u6784\u9020\u5668 \u548c new</h2> <h3 id="51-\u6784\u9020\u51fd\u6570">5.1 \u6784\u9020\u51fd\u6570</h3> <p><strong>\u6784\u9020\u51fd\u6570\u5728\u6280\u672f\u4e0a\u662f\u5e38\u89c4\u51fd\u6570\u3002\u4e0d\u8fc7\u6709\u4e24\u4e2a\u7ea6\u5b9a\uff1a</strong></p> <ol> <li>\u5b83\u4eec\u7684\u547d\u540d\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934</li> <li>\u5b83\u4eec\u53ea\u80fd\u7531 <code>new</code> \u64cd\u4f5c\u7b26\u6765\u6267\u884c</li> </ol> <blockquote> <p>\u6784\u9020\u5668\u7684\u4e3b\u8981\u76ee\u7684 \u2014\u2014 \u5b9e\u73b0\u53ef\u91cd\u7528\u7684\u5bf9\u8c61\u521b\u5efa\u4ee3\u7801</p> </blockquote> <p><strong>\u5f53\u4e00\u4e2a\u51fd\u6570\u88ab\u4f7f\u7528 new \u64cd\u4f5c\u7b26\u6267\u884c\u65f6\uff0c\u5b83\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff1a</strong></p> <ol> <li>\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\u88ab\u521b\u5efa\u5e76\u5206\u914d\u7ed9 <code>this</code></li> <li>\u51fd\u6570\u4f53\u6267\u884c\u3002\u901a\u5e38\u5b83\u4f1a\u4fee\u6539 <code>this</code>\uff0c\u4e3a\u5176\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027</li> <li>\u8fd4\u56de <code>this</code> \u7684\u503c</li> </ol> <pre><code class="language-js">function User(name) {\n  // this = {};\uff08\u9690\u5f0f\u521b\u5efa\uff09\n\n  // \u6dfb\u52a0\u5c5e\u6027\u5230 this\n  this.name = name;\n  this.isAdmin = false;\n\n  // return this;\uff08\u9690\u5f0f\u8fd4\u56de\uff09\n}</code></pre> <h3 id="52-newtarget">5.2 new.target</h3> <p>\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 <code>new.target</code> \u5c5e\u6027\u6765\u68c0\u67e5\u5b83\u662f\u5426\u88ab\u4f7f\u7528 <code>new</code> \u8fdb\u884c\u8c03\u7528\u4e86</p> <p>\u5bf9\u4e8e\u5e38\u89c4\u8c03\u7528\uff0c\u5b83\u4e3a\u7a7a\uff0c\u5bf9\u4e8e\u4f7f\u7528 <code>new</code> \u7684\u8c03\u7528\uff0c\u5219\u7b49\u4e8e\u8be5\u51fd\u6570\uff1a</p> <pre><code class="language-javascript">function User() {\n  alert(new.target);\n}\n\n// \u4e0d\u5e26 &quot;new&quot;\uff1a\nUser(); // undefined\n\n// \u5e26 &quot;new&quot;\uff1a\nnew User(); // function User { ... }</code></pre> <h3 id="53-\u6784\u9020\u5668\u7684-return">5.3 \u6784\u9020\u5668\u7684 return</h3> <p>\u901a\u5e38\uff0c\u6784\u9020\u5668\u6ca1\u6709 return \u8bed\u53e5\u3002\u5b83\u4eec\u7684\u4efb\u52a1\u662f\u5c06\u6240\u6709\u5fc5\u8981\u7684\u4e1c\u897f\u5199\u5165 this\uff0c\u5e76\u81ea\u52a8\u8f6c\u6362\u4e3a\u7ed3\u679c\u3002</p> <p>\u4f46\u662f\uff0c\u5982\u679c\u8fd9\u6709\u4e00\u4e2a return \u8bed\u53e5\uff0c\u90a3\u4e48\u89c4\u5219\u5c31\u7b80\u5355\u4e86\uff1a</p> <ul> <li>\u5982\u679c return \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f this</li> <li>\u5982\u679c return \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u539f\u59cb\u7c7b\u578b\uff0c\u5219\u5ffd\u7565</li> </ul> <h2 id="6-\u53ef\u9009\u94fe-">6 \u53ef\u9009\u94fe ?.</h2> <pre><code class="language-javascript">let user = {}; // \u4e00\u4e2a\u6ca1\u6709 &quot;address&quot; \u5c5e\u6027\u7684 user \u5bf9\u8c61\n\nalert(user.address.street); // Error!</code></pre> <p>\u5f88\u591a\u5b9e\u9645\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u66f4\u5e0c\u671b\u5f97\u5230\u7684\u662f <code>undefined</code>\uff08\u8868\u793a\u6ca1\u6709 street \u5c5e\u6027\uff09\u800c\u4e0d\u662f\u4e00\u4e2a\u9519\u8bef</p> <p>\u4e0b\u9762\u8fd9\u662f\u4e00\u79cd\u4f7f\u7528 <code>?.</code> \u5b89\u5168\u5730\u8bbf\u95ee <code>user.address.street</code> \u7684\u65b9\u5f0f\uff1a</p> <pre><code class="language-javascript">let user = {}; // user \u6ca1\u6709 address \u5c5e\u6027\n\nalert(user?.address?.street); // undefined\uff08\u4e0d\u62a5\u9519\uff09</code></pre> <p><strong>\u5176\u5b83\u53d8\u4f53\uff1a<code>?.()</code>\uff0c<code>?.[]</code></strong></p> <pre><code class="language-javascript">let userGuest = {};\nuserGuest.admin?.(); // \u5565\u90fd\u6ca1\u6709\uff08\u6ca1\u6709\u8fd9\u6837\u7684\u65b9\u6cd5\uff09\n\nlet user1 = {\n  firstName: &#39;John&#39;\n};\nlet key = &#39;firstName&#39;;\n\nalert(user1?.[key]?.something?.not?.existing); // undefined</code></pre> <p>\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 <code>?.</code> \u6765\u5b89\u5168\u5730\u8bfb\u53d6\u6216\u5220\u9664\uff0c\u4f46\u4e0d\u80fd\u5199\u5165</p> <pre><code class="language-javascript">let user = null;\n\nuser?.name = &#39;John&#39;; // Error\uff0c\u4e0d\u8d77\u4f5c\u7528\n// \u56e0\u4e3a\u5b83\u5728\u8ba1\u7b97\u7684\u662f undefined = &quot;John&quot;</code></pre> <h2 id="7-symbol-\u7c7b\u578b">7 Symbol \u7c7b\u578b</h2> <h3 id="71-\u6982\u5ff5">7.1 \u6982\u5ff5</h3> <p>\u6839\u636e\u89c4\u8303\uff0c\u5bf9\u8c61\u7684\u5c5e\u6027\u952e\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u6216\u8005 <code>Symbol</code> \u7c7b\u578b\u3002\u4e0d\u662f <code>Number</code>\uff0c\u4e5f\u4e0d\u662f <code>Boolean</code>\uff0c\u53ea\u6709\u5b57\u7b26\u4e32\u6216 <code>Symbol</code> \u8fd9\u4e24\u79cd\u7c7b\u578b\u3002</p> <pre><code class="language-javascript">// id \u662f symbol \u7684\u4e00\u4e2a\u5b9e\u4f8b\u5316\u5bf9\u8c61\nlet id = Symbol();\n\n// id \u662f\u63cf\u8ff0\u4e3a &quot;id&quot; \u7684 Symbol\nlet id = Symbol(&#39;id&#39;);\n\nalert(id.toString()); // Symbol(id)\uff0c\u73b0\u5728\u5b83\u6709\u6548\u4e86\n\n// \u83b7\u53d6 symbol.description \u5c5e\u6027\uff0c\u53ea\u663e\u793a\u63cf\u8ff0\uff08description\uff09\nalert(id.description); // id</code></pre> <pre><code class="language-javascript">let id = Symbol(&#39;id&#39;);\n\nlet user = {\n  name: &#39;John&#39;,\n  [id]: 123 // \u800c\u4e0d\u662f &quot;id&quot;\uff1a123\n};</code></pre> <p><code>Symbol</code> \u4fdd\u8bc1\u662f\u552f\u4e00\u7684\u3002\u5373\u4f7f\u6211\u4eec\u521b\u5efa\u4e86\u8bb8\u591a\u5177\u6709\u76f8\u540c\u63cf\u8ff0\u7684 <code>Symbol</code>\uff0c\u5b83\u4eec\u7684\u503c\u4e5f\u662f\u4e0d\u540c</p> <blockquote> <p><code>Symbol</code> \u4e0d\u4f1a\u88ab\u9690\u5f0f\u8f6c\u6362\uff0c<code>alert(Symbol(&#39;id&#39;))</code> \u4f1a\u62a5\u9519</p> </blockquote> <pre><code class="language-js">let id1 = Symbol(&#39;id&#39;);\nlet id2 = Symbol(&#39;id&#39;);\n\nalert(id1 == id2); // false</code></pre> <h3 id="72-\u9690\u85cf\u5c5e\u6027">7.2 \u9690\u85cf\u5c5e\u6027</h3> <p><code>Symbol</code> \u5141\u8bb8\u6211\u4eec\u521b\u5efa\u5bf9\u8c61\u7684\u201c\u9690\u85cf\u201d\u5c5e\u6027\uff0c\u4ee3\u7801\u7684\u4efb\u4f55\u5176\u4ed6\u90e8\u5206\u90fd\u4e0d\u80fd\u610f\u5916\u8bbf\u95ee\u6216\u91cd\u5199\u8fd9\u4e9b\u5c5e\u6027</p> <ol> <li>Symbol \u5728 <code>for\u2026in</code> \u4e2d\u4f1a\u88ab\u8df3\u8fc7</li> <li><code>Object.keys()</code> \u4e5f\u4f1a\u5ffd\u7565 Symbol</li> <li>\u76f8\u53cd <code>Object.assign</code> \u4f1a\u540c\u65f6\u590d\u5236\u5b57\u7b26\u4e32\u548c symbol \u5c5e\u6027</li> </ol> <h3 id="72-\u5168\u5c40-symbol">7.2 \u5168\u5c40 Symbol</h3> <p><code>\u5168\u5c40 Symbol \u6ce8\u518c\u8868</code>\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e2d\u521b\u5efa <code>Symbol</code> \u5e76\u5728\u7a0d\u540e\u8bbf\u95ee\u5b83\u4eec\uff0c\u5b83\u53ef\u4ee5\u786e\u4fdd\u6bcf\u6b21\u8bbf\u95ee\u76f8\u540c\u540d\u5b57\u7684 <code>Symbol</code> \u65f6\uff0c\u8fd4\u56de\u7684\u90fd\u662f\u76f8\u540c\u7684 <code>Symbol</code></p> <p><strong>Symbol.for(key)</strong></p> <p>\u8be5\u8c03\u7528\u4f1a\u68c0\u67e5\u5168\u5c40\u6ce8\u518c\u8868\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u63cf\u8ff0\u4e3a <code>key</code> \u7684 <code>Symbol</code>\uff0c\u5219\u8fd4\u56de\u8be5 <code>Symbol</code>\uff0c\u5426\u5219\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0 <code>Symbol\uff08Symbol(key)\uff09</code>\uff0c\u5e76\u901a\u8fc7\u7ed9\u5b9a\u7684 <code>key</code> \u5c06\u5176\u5b58\u50a8\u5728\u6ce8\u518c\u8868\u4e2d</p> <pre><code class="language-js">// \u4ece\u5168\u5c40\u6ce8\u518c\u8868\u4e2d\u8bfb\u53d6\nlet id = Symbol.for(&#39;id&#39;); // \u5982\u679c\u8be5 Symbol \u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u5b83\n\n// \u518d\u6b21\u8bfb\u53d6\uff08\u53ef\u80fd\u662f\u5728\u4ee3\u7801\u4e2d\u7684\u53e6\u4e00\u4e2a\u4f4d\u7f6e\uff09\nlet idAgain = Symbol.for(&#39;id&#39;);\n\n// \u76f8\u540c\u7684 Symbol\nalert(id === idAgain); // true</code></pre> <p><strong>Symbol.keyFor</strong></p> <p>\u901a\u8fc7\u5168\u5c40 Symbol \u8fd4\u56de\u4e00\u4e2a\u540d\u5b57</p> <pre><code class="language-js">// \u901a\u8fc7 name \u83b7\u53d6 Symbol\nlet sym = Symbol.for(&#39;name&#39;);\nlet sym2 = Symbol.for(&#39;id&#39;);\n\n// \u901a\u8fc7 Symbol \u83b7\u53d6 name\nalert(Symbol.keyFor(sym)); // name\nalert(Symbol.keyFor(sym2)); // id</code></pre> <h3 id="73-\u7cfb\u7edf-symbol">7.3 \u7cfb\u7edf Symbol</h3> <ul> <li><code>Symbol.hasInstance</code> \u5f53\u5bf9\u8c61\u4f7f\u7528 instanceof \u8fd0\u7b97\u7b26\uff0c\u5224\u65ad\u662f\u5426\u4e3a\u8be5\u5bf9\u8c61\u7684\u5b9e\u4f8b\u65f6\uff0c\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5</li> <li><code>Symbol.isConcatSpreadable</code> \u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u5bf9\u8c61\u7528\u4e8e<code>Array.prototype.concat()</code>\u65f6\uff0c\u662f\u5426\u53ef\u4ee5\u5c55\u5f00</li> <li><code>Symbol.species</code> \u6307\u5411\u5f53\u524d\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570</li> <li><code>Symbol.match</code> \u6307\u5411\u4e00\u4e2a\u51fd\u6570\u3002\u5f53\u6267\u884c <code>str.match(myObject)</code> \u65f6\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u5b58\u5728\uff0c\u4f1a\u8c03\u7528\u5b83\uff0c\u8fd4\u56de\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c</li> <li><code>Symbol.replace</code> \u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u8be5\u5bf9\u8c61\u88ab <code>String.prototype.replace</code> \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4f1a\u8fd4\u56de\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c</li> <li><code>Symbol.search</code> \u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u8be5\u5bf9\u8c61\u88ab <code>String.prototype.search</code> \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4f1a\u8fd4\u56de\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c</li> <li><code>Symbol.split</code> \u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u8be5\u5bf9\u8c61\u88ab <code>String.prototype.split</code> \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4f1a\u8fd4\u56de\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c</li> <li><code>Symbol.iterator</code> \u6307\u5411\u8be5\u5bf9\u8c61\u7684\u9ed8\u8ba4\u904d\u5386\u5668\u65b9\u6cd5</li> <li><code>Symbol.toPrimitive</code> \u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\u3002\u8be5\u5bf9\u8c61\u88ab\u8f6c\u4e3a\u539f\u59cb\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd4\u56de\u8be5\u5bf9\u8c61\u5bf9\u5e94\u7684\u539f\u59cb\u7c7b\u578b\u503c</li> <li><code>Symbol.toStringTag</code> \u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\u3002\u5728\u8be5\u5bf9\u8c61\u4e0a\u9762\u8c03\u7528 <code>Object.prototype.toString</code> \u65b9\u6cd5\u65f6\uff0c\u5982\u679c\u8fd9\u4e2a\u5c5e\u6027\u5b58\u5728\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u4f1a\u51fa\u73b0\u5728 toString \u65b9\u6cd5\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u4e4b\u4e2d\uff0c\u8868\u793a\u5bf9\u8c61\u7684\u7c7b\u578b</li> <li><code>Symbol.unscopables</code> \u5411\u4e00\u4e2a\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u6307\u5b9a\u4e86\u4f7f\u7528 with \u5173\u952e\u5b57\u65f6\uff0c\u54ea\u4e9b\u5c5e\u6027\u4f1a\u88ab with \u73af\u5883\u6392\u9664</li> </ul> <h2 id="8-\u5bf9\u8c61--\u539f\u59cb\u503c\u8f6c\u6362">8 \u5bf9\u8c61 \u2014 \u539f\u59cb\u503c\u8f6c\u6362</h2> <h3 id="81-\u6982\u5ff5">8.1 \u6982\u5ff5</h3> <p>\u5f53\u5bf9\u8c61\u76f8\u52a0 <code>obj1 + obj2</code>\uff0c\u76f8\u51cf <code>obj1 - obj2</code>\uff0c\u6216\u8005\u4f7f\u7528 <code>alert(obj)</code> \u6253\u5370\u65f6\uff0c\u5bf9\u8c61\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\uff0c\u7136\u540e\u6267\u884c\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c<code>Date</code> \u5bf9\u8c61\u53ef\u4ee5\u76f8\u51cf\uff0c<code>date1 - date2</code> \u7684\u7ed3\u679c\u662f\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u5dee\u503c</p> <ul> <li>\u6240\u6709\u7684\u5bf9\u8c61\u5728\u5e03\u5c14\u4e0a\u4e0b\u6587\u4e2d\u5747\u4e3a true\u3002\u6240\u4ee5\u5bf9\u4e8e\u5bf9\u8c61\uff0c\u4e0d\u5b58\u5728 <code>to-boolean</code> \u8f6c\u6362\uff0c<strong>\u53ea\u6709\u5b57\u7b26\u4e32\u548c\u6570\u503c\u8f6c\u6362</strong></li> <li>\u6570\u503c\u8f6c\u6362\u53d1\u751f\u5728\u5bf9\u8c61\u76f8\u51cf\u6216\u5e94\u7528\u6570\u5b66\u51fd\u6570\u65f6\u3002\u4f8b\u5982\uff0c<code>Date</code> \u5bf9\u8c61\u53ef\u4ee5\u76f8\u51cf\uff0c<code>date1 - date2</code> \u7684\u7ed3\u679c\u662f\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u5dee\u503c</li> <li>\u5b57\u7b26\u4e32\u8f6c\u6362 \u2014\u2014 \u901a\u5e38\u53d1\u751f\u5728\u50cf <code>alert(obj)</code> \u8fd9\u6837\u8f93\u51fa\u4e00\u4e2a\u5bf9\u8c61\u548c\u7c7b\u4f3c\u7684\u4e0a\u4e0b\u6587\u4e2d</li> </ul> <h3 id="82-hint">8.2 hint</h3> <p>\u5f53\u4e00\u4e2a\u5bf9\u8c61\u88ab\u7528\u5728\u9700\u8981\u539f\u59cb\u503c\u7684\u4e0a\u4e0b\u6587\u4e2d\u65f6\uff0c\u5bf9\u8c61\u4f1a\u88ab\u8f6c\u6362\u4e3a\u539f\u59cb\u503c</p> <p>\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u4f1a\u8f6c\u6362\u6210\u4e0d\u540c\u7684\u539f\u59cb\u503c\uff0c\u8fd9\u79cd\u6839\u636e\u573a\u666f\u8f6c\u6362\u79f0\u4e3a <code>hint</code></p> <p><strong>hint \u6709\u4e09\u4e2a\u503c\uff1a</strong></p> <p><strong>string</strong></p> <p>\u5bf9\u8c61\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\uff1a</p> <pre><code class="language-js">// \u8f93\u51fa\nalert(obj);\n\n// \u5c06\u5bf9\u8c61\u4f5c\u4e3a\u5c5e\u6027\u952e\nanotherObj[obj] = 123;</code></pre> <p><strong>number</strong></p> <p>\u5bf9\u8c61\u5230\u6570\u5b57\u7684\u8f6c\u6362\uff1a</p> <pre><code class="language-js">// \u663e\u5f0f\u8f6c\u6362\nlet num = Number(obj);\n\n// \u6570\u5b66\u8fd0\u7b97\uff08\u9664\u4e86\u4e8c\u5143\u52a0\u6cd5\uff09\nlet n = +obj; // \u4e00\u5143\u52a0\u6cd5\nlet delta = date1 - date2;\n\n// \u5c0f\u4e8e/\u5927\u4e8e\u7684\u6bd4\u8f83\nlet greater = user1 &gt; user2;</code></pre> <p><strong>default</strong></p> <p>\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\u53d1\u751f\uff0c\u5f53\u8fd0\u7b97\u7b26\u4e0d\u786e\u5b9a\u671f\u671b\u503c\u7684\u7c7b\u578b\u65f6\uff0c<code>hint</code> \u4e3a <code>default</code></p> <p>\u4f8b\u5982\uff0c\u4e8c\u5143\u52a0\u6cd5 + \u53ef\u7528\u4e8e\u5b57\u7b26\u4e32\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6570\u5b57\u76f8\u52a0\uff0c\u6240\u4ee5\u5b57\u7b26\u4e32\u548c\u6570\u5b57\u8fd9\u4e24\u79cd\u7c7b\u578b\u90fd\u53ef\u4ee5\u3002\u56e0\u6b64\uff0c\u5f53\u4e8c\u5143\u52a0\u6cd5\u5f97\u5230\u5bf9\u8c61\u7c7b\u578b\u7684\u53c2\u6570\u65f6\uff0c\u5b83\u5c06\u4f9d\u636e <code>default</code> <code>hint</code> \u6765\u5bf9\u5176\u8fdb\u884c\u8f6c\u6362\u3002\u5982\u679c\u5bf9\u8c61\u88ab\u7528\u4e8e\u4e0e\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u6216 <code>symbol</code> \u8fdb\u884c == \u6bd4\u8f83\uff0c\u8fd9\u65f6\u5230\u8f6c\u6362\u4e5f\u4e0d\u662f\u5f88\u660e\u786e\uff0c\u56e0\u6b64\u4f7f\u7528 <code>default</code> <code>hint</code></p> <pre><code class="language-js">// \u4e8c\u5143\u52a0\u6cd5\u4f7f\u7528\u9ed8\u8ba4 hint\nlet total = obj1 + obj2;\n\n// obj == number \u4f7f\u7528\u9ed8\u8ba4 hint\nif (user == 1) {\n  // ...\n}</code></pre> <blockquote> <p>\u9664\u4e86\u4e00\u79cd\u60c5\u51b5\uff08Date \u5bf9\u8c61\uff09\u4e4b\u5916\uff0c\u6240\u6709\u5185\u5efa\u5bf9\u8c61\u90fd\u4ee5\u548c <code>number</code> \u76f8\u540c\u7684\u65b9\u5f0f\u5b9e\u73b0 <code>default</code> \u8f6c\u6362</p> </blockquote> <blockquote> <p><strong>\u6ca1\u6709 <code>boolean</code> <code>hint</code></strong>\uff0c\u5728\u5e03\u5c14\u4e0a\u4e0b\u6587\u4e2d\u6240\u6709\u5bf9\u8c61\u90fd\u662f true</p> </blockquote> <p><strong>JavaScript \u4f1a\u67e5\u627e\u5e76\u8c03\u7528\u4e0b\u9762\u4e09\u4e2a\u5bf9\u8c61\u65b9\u6cd5\u8fdb\u884c\u8f6c\u6362\uff1a</strong></p> <ol> <li><code>obj[Symbol.toPrimitive](hint)</code> \u2014\u2014 \u5e26\u6709 <code>symbol</code> \u952e <code>Symbol.toPrimitive</code>\uff08\u7cfb\u7edf symbol\uff09\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u8fd9\u4e2a\u65b9\u6cd5\u5b58\u5728\u7684\u8bdd</li> <li><code>hint</code> \u662f <code>string</code> \u2014\u2014 \u5c1d\u8bd5 <code>obj.toString()</code> \u548c <code>obj.valueOf()</code>\uff0c\u65e0\u8bba\u54ea\u4e2a\u5b58\u5728</li> <li><code>hint</code> \u662f <code>number</code> \u6216 <code>default</code> \u2014\u2014 \u5c1d\u8bd5 <code>obj.valueOf()</code> \u548c <code>obj.toString()</code>\uff0c\u65e0\u8bba\u54ea\u4e2a\u5b58\u5728</li> </ol> <h3 id="83-symboltoprimitive">8.3 Symbol.toPrimitive</h3> <pre><code class="language-js">obj[Symbol.toPrimitive] = function(hint) {\n  // \u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c\n  // hint = &quot;string&quot;\u3001&quot;number&quot; \u548c &quot;default&quot; \u4e2d\u7684\u4e00\u4e2a\n};</code></pre> <pre><code class="language-js">let user = {\n  name: &#39;John&#39;,\n  money: 1000,\n\n  [Symbol.toPrimitive](hint) {\n    alert(`hint: ${hint}`);\n    return hint == &#39;string&#39; ? `{name: &quot;${this.name}&quot;}` : this.money;\n  }\n};\n\nalert(user); // hint: string -&gt; {name: &quot;John&quot;}\nalert(+user); // hint: number -&gt; 1000\nalert(user + 500); // hint: default -&gt; 1500</code></pre> <h3 id="84-tostringvalueof">8.4 toString/valueOf</h3> <p><strong>\u5982\u679c\u6ca1\u6709 <code>Symbol.toPrimitive</code>\uff0c\u5c31\u4f1a\u6309\u7167\u4e0b\u9762\u7684\u987a\u5e8f\u8fdb\u884c\u5c1d\u8bd5\uff1a</strong></p> <ol> <li>\u5bf9\u4e8e string hint\uff0c<code>toString -&gt; valueOf</code></li> <li>\u5176\u4ed6\u60c5\u51b5\uff0c<code>valueOf -&gt; toString</code></li> </ol> <blockquote> <p>\u8fd9\u4e9b\u65b9\u6cd5\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c\u3002\u5982\u679c toString \u6216 valueOf \u8fd4\u56de\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u8fd4\u56de\u503c\u4f1a\u88ab\u5ffd\u7565</p> </blockquote> <p><strong>\u9ed8\u8ba4\u7684 toString \u548c valueOf \u65b9\u6cd5\uff1a</strong></p> <ul> <li><code>toString</code> \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32 <code>&quot;[object Object]&quot;</code></li> <li><code>valueOf</code> \u65b9\u6cd5\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab</li> </ul> <pre><code class="language-js">let user = { name: &#39;John&#39; };\n\nalert(user); // [object Object]\nalert(user.valueOf() === user); // true</code></pre> <p>\u6539\u5199 <code>toString</code> \u548c <code>valueOf</code> \u65b9\u6cd5\uff1a</p> <pre><code class="language-js">let user = {\n  name: &#39;John&#39;,\n  money: 1000,\n\n  // \u5bf9\u4e8e hint=&quot;string&quot;\n  toString() {\n    return `{name: &quot;${this.name}&quot;}`;\n  },\n\n  // \u5bf9\u4e8e hint=&quot;number&quot; \u6216 &quot;default&quot;\n  valueOf() {\n    return this.money;\n  }\n};\n\nalert(user); // toString -&gt; {name: &quot;John&quot;}\nalert(+user); // valueOf -&gt; 1000\nalert(user + 500); // valueOf -&gt; 1500</code></pre> <p><strong>\u8fd4\u56de\u7c7b\u578b\uff1a</strong></p> <ol> <li>\u8fd9\u4e9b\u65b9\u6cd5\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c\uff0c\u800c\u4e0d\u662f\u5bf9\u8c61</li> <li>\u4f46\u662f\u6ca1\u6709\u9650\u5236\u8fd4\u56de\u5177\u4f53\u7684\u539f\u59cb\u503c\u7c7b\u578b\uff0c\u4f8b\u5982\u6ca1\u6709\u9650\u5236 <code>toString()</code> \u662f\u5426\u8fd4\u56de\u5b57\u7b26\u4e32\uff0c\u6216 <code>Symbol.toPrimitive</code> \u65b9\u6cd5\u662f\u5426\u4e3a hint number \u8fd4\u56de\u6570\u5b57</li> <li>\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u5982\u679c <code>toString</code> \u6216 <code>valueOf</code> \u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c<strong>\u4e0d\u4f1a\u51fa\u73b0 error</strong></li> <li><code>Symbol.toPrimitive</code> \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c\uff0c\u5426\u5219\u5c31\u4f1a\u51fa\u73b0 error</li> </ol> <h3 id="85-\u4e8c\u6b21\u8f6c\u6362">8.5 \u4e8c\u6b21\u8f6c\u6362</h3> <p>\u5982\u679c\u6211\u4eec\u5c06\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u5982\u679c\u751f\u6210\u7684\u539f\u59cb\u503c\u7684\u7c7b\u578b\u4e0d\u6b63\u786e\uff0c\u4f1a\u7ee7\u7eed\u8fdb\u884c\u8f6c\u6362</p> <p>\u4f8b\u5982\uff1a</p> <pre><code class="language-js">let obj = {\n  // toString \u5728\u6ca1\u6709\u5176\u4ed6\u65b9\u6cd5\u7684\u60c5\u51b5\u4e0b\u5904\u7406\u6240\u6709\u8f6c\u6362\n  toString() {\n    return &#39;2&#39;;\n  }\n};\n\nalert(obj * 2); // 4\uff0c\u5bf9\u8c61\u88ab\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\u5b57\u7b26\u4e32 &quot;2&quot;\uff0c\u4e4b\u540e\u5b83\u88ab\u4e58\u6cd5\u8f6c\u6362\u4e3a\u6570\u5b57 2\u3002</code></pre> <ol> <li>\u4e58\u6cd5 <code>obj * 2</code> \u9996\u5148\u5c06\u5bf9\u8c61\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\uff08\u5b57\u7b26\u4e32 &quot;2&quot;\uff09</li> <li>\u4e4b\u540e <code>&quot;2&quot; * 2</code> \u53d8\u4e3a <code>2 * 2</code>\uff08\u5b57\u7b26\u4e32\u88ab\u8f6c\u6362\u4e3a\u6570\u5b57\uff09</li> </ol> <h2 id="\u590d\u4e60">\u590d\u4e60</h2> <ul> <li>in \u64cd\u4f5c\u7b26\uff0c<code>key in object</code> \u5bf9\u8c61\u662f\u5426\u6709\u67d0\u4e2a\u5c5e\u6027</li> <li>\u8ba1\u7b97\u5c5e\u6027 <code>[]</code> \u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf</li> <li>\u5c5e\u6027\u987a\u5e8f\uff0c\u6574\u6570\u6309\u5927\u5c0f\uff0c\u5176\u4ed6\u6309\u6dfb\u52a0\u987a\u5e8f</li> <li>\u6df1\u62f7\u8d1d <code>Object.assign</code> \u53ea\u80fd\u62f7\u8d1d\u7b2c\u4e00\u5c42</li> <li><code>JSON.parse(JSON.stringify({}))</code> \u65e0\u6cd5\u62f7\u8d1d\u5176\u4ed6\u5f15\u7528\u7c7b\u578b\u3001\u62f7\u8d1d\u51fd\u6570\u3001\u5faa\u73af\u5f15\u7528\u7b49\u60c5\u51b5</li> <li>\u5b9e\u73b0\u6df1\u62f7\u8d1d</li> <li>\u56fa\u6709\u53ef\u8fbe\u503c\u4e0d\u4f1a\u88ab\u91ca\u653e\uff1a\u5f53\u524d\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\u548c\u53c2\u6570\uff1b\u5d4c\u5957\u8c03\u7528\u65f6\uff0c\u5f53\u524d\u8c03\u7528\u94fe\u4e0a\u6240\u6709\u51fd\u6570\u7684\u53d8\u91cf\u4e0e\u53c2\u6570\uff1b\u5168\u5c40\u53d8\u91cf</li> <li>\u5783\u573e\u56de\u6536\u7b97\u6cd5\uff0c\u4e3e\u4f8b</li> <li><code>this</code> \u7684\u503c\u662f\u5728\u4ee3\u7801\u8fd0\u884c\u65f6\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u5b83\u53d6\u51b3\u4e8e\u4ee3\u7801\u4e0a\u4e0b\u6587 (\u8c01\u8c03\u7528\u5b83\uff0cthis \u6307\u5411\u8c01)</li> <li>\u7bad\u5934\u51fd\u6570\u7684 <code>this</code></li> <li>\u6784\u9020\u51fd\u6570\u5224\u65ad\u4f7f\u7528\u4e86 <code>new</code> \u8fd8\u662f\u76f4\u63a5\u8c03\u7528\uff0c<code>new.target</code></li> <li>\u6784\u9020\u51fd\u6570\u4e2d\u7684 <code>return</code> \u600e\u4e48\u8fd4\u56de</li> <li>\u53ef\u9009\u94fe <code>user?.address?.street</code></li> <li><code>Symbol</code>\uff1a\u5bf9\u8c61\u5c5e\u6027\u952e\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u6216\u8005 <code>Symbol</code> \u7c7b\u578b</li> <li><code>Symbol</code> \u7684\u57fa\u672c\u7528\u6cd5\uff0c<code>Symbol</code> \u4fdd\u8bc1\u503c\u662f\u552f\u4e00\u7684</li> <li><code>Symbol</code> \u5e94\u7528\u573a\u666f\uff1a\u9690\u85cf\u5c5e\u6027\uff0c\u4f7f\u7528\u7cfb\u7edf Symbol \u6539\u53d8\u5185\u7f6e\u884c\u4e3a</li> <li><code>Symbol</code> \u7684\u7279\u6027\uff1a<ul> <li><code>Symbol</code> \u5728 <code>for\u2026in</code> \u4e2d\u4f1a\u88ab\u8df3\u8fc7</li> <li><code>Object.keys()</code> \u4e5f\u4f1a\u5ffd\u7565 <code>Symbol</code></li> <li>\u76f8\u53cd <code>Object.assign</code> \u4f1a\u540c\u65f6\u590d\u5236\u5b57\u7b26\u4e32\u548c <code>symbol</code> \u5c5e\u6027</li> </ul> </li> <li>\u5bf9\u8c61-\u539f\u59cb\u503c\u8f6c\u6362<ul> <li>\u8c03\u7528 <code>obj[Symbol.toPrimitive](hint)</code> \u2014\u2014 \u5e26\u6709 <code>symbol</code> \u952e <code>Symbol.toPrimitive</code></li> <li>\u5426\u5219\uff0c\u5982\u679c <code>hint</code> \u662f &quot;string&quot; \u2014\u2014 \u5c1d\u8bd5 <code>obj.toString()</code> \u548c <code>obj.valueOf()</code></li> <li>\u5426\u5219\uff0c\u5982\u679c <code>hint</code> \u662f &quot;number&quot; \u6216 &quot;default&quot; \u2014\u2014 \u5c1d\u8bd5 <code>obj.valueOf()</code> \u548c <code>obj.toString()</code></li> </ul> </li> </ul> ';e.exports=m}}]);