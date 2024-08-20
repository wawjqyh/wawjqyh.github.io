(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/js/function"],{MoTv:function(e,n,o){var c=o("Rxnk"),l=o("1kSW"),t=o("S2Qc"),i=o("RFvr"),r=c(l),a=c(t),d=c(i),s='<h1 id="\u51fd\u6570\u8fdb\u9636">\u51fd\u6570\u8fdb\u9636</h1> <h2 id="1-\u9012\u5f52">1 \u9012\u5f52</h2> <blockquote> <p>\u9012\u5f52\u8ddf\u5faa\u73af\u76f8\u6bd4\uff0c\u9012\u5f52\u5360\u7528\u66f4\u591a\u5185\u5b58\u3002\u4f46\u662f\u9012\u5f52\u4ee3\u7801\u66f4\u5c11\uff0c\u67d0\u4e9b\u573a\u666f\u903b\u8f91\u66f4\u6e05\u6670</p> </blockquote> <p>\u4e3a\u4ec0\u4e48\u9012\u5f52\u5360\u7528\u66f4\u591a\u5185\u5b58\uff0c\u9700\u8981\u5148\u4e86\u89e3 <code>\u6267\u884c\u4e0a\u4e0b\u6587</code>\uff0c\u9012\u5f52\u51fd\u6570\u6bcf\u6b21\u8c03\u7528\u90fd\u9700\u8981\u4fdd\u5b58\u5b83\u7684 <code>\u6267\u884c\u4e0a\u4e0b\u6587</code></p> <p><strong>\u6267\u884c\u4e0a\u4e0b\u6587\uff1a</strong></p> <p>\u6709\u5173\u6b63\u5728\u8fd0\u884c\u7684\u51fd\u6570\u7684\u6267\u884c\u8fc7\u7a0b\u7684\u76f8\u5173\u4fe1\u606f\u88ab\u5b58\u50a8\u5728\u5176 <code>\u6267\u884c\u4e0a\u4e0b\u6587</code> \u4e2d</p> <p><code>\u6267\u884c\u4e0a\u4e0b\u6587</code> \u662f\u4e00\u4e2a\u5185\u90e8\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u5305\u542b\u6709\u5173\u51fd\u6570\u6267\u884c\u65f6\u7684\u8be6\u7ec6\u7ec6\u8282\uff1a\u5f53\u524d\u63a7\u5236\u6d41\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u5f53\u524d\u7684\u53d8\u91cf\uff0cthis \u7684\u503c\uff0c\u4ee5\u53ca\u5176\u5b83\u7684\u4e00\u4e9b\u5185\u90e8\u7ec6\u8282</p> <p>\u5728\u9012\u5f52\u51fd\u6570\u4e2d\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u51fd\u6570\u5468\u56f4\u7684\u4ee3\u7801</p> <h2 id="2-rest-\u53c2\u6570\u4e0e-spread-\u8bed\u6cd5">2 Rest \u53c2\u6570\u4e0e Spread \u8bed\u6cd5</h2> <h3 id="21-rest-\u53c2\u6570-">2.1 Rest \u53c2\u6570 ...</h3> <p>\u5c06\u53c2\u6570\u6536\u96c6\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d</p> <pre><code class="language-javascript">function sumAll(...args) {\n  // \u6570\u7ec4\u540d\u4e3a args\n  let sum = 0;\n  for (let arg of args) sum += arg;\n  return sum;\n}\n\nalert(sumAll(1)); // 1\nalert(sumAll(1, 2)); // 3\nalert(sumAll(1, 2, 3)); // 6</code></pre> <h3 id="22-arguments-\u53d8\u91cf">2.2 arguments \u53d8\u91cf</h3> <p>\u5728\u8fc7\u53bb\uff0cJavaScript \u4e2d\u6ca1\u6709 rest \u53c2\u6570\uff0c\u800c\u4f7f\u7528 arguments \u662f\u83b7\u53d6\u51fd\u6570\u6240\u6709\u53c2\u6570\u7684\u552f\u4e00\u65b9\u6cd5</p> <p>arguments \u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u662f\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff0c\u4f46\u5b83\u4e0d\u662f\u6570\u7ec4\u3002\u5b83\u4e0d\u652f\u6301\u6570\u7ec4\u65b9\u6cd5</p> <blockquote> <p>\u7bad\u5934\u51fd\u6570\u662f\u6ca1\u6709 arguments</p> </blockquote> <pre><code class="language-javascript">function showName() {\n  alert(arguments.length);\n  alert(arguments[0]);\n  alert(arguments[1]);\n\n  // \u5b83\u662f\u53ef\u904d\u5386\u7684\n  // for(let arg of arguments) alert(arg);\n}\n\n// \u4f9d\u6b21\u663e\u793a\uff1a2\uff0cJulius\uff0cCaesar\nshowName(&#39;Julius&#39;, &#39;Caesar&#39;);</code></pre> <h3 id="23-spread-\u8bed\u6cd5">2.3 Spread \u8bed\u6cd5</h3> <p>\u4f7f\u7528\u573a\u666f\uff1a</p> <ul> <li><code>Rest</code> \u53c2\u6570\u7528\u4e8e\u521b\u5efa\u53ef\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u53c2\u6570\u7684\u51fd\u6570</li> <li><code>Spread</code> \u8bed\u6cd5\u7528\u4e8e\u5c06\u6570\u7ec4\u4f20\u9012\u7ed9\u901a\u5e38\u9700\u8981\u542b\u6709\u8bb8\u591a\u53c2\u6570\u7684\u5217\u8868\u7684\u51fd\u6570</li> </ul> <pre><code class="language-javascript">let arr1 = [1, -2, 3, 4];\nlet arr2 = [8, 3, -8, 1];\n\nalert(Math.max(...arr1, ...arr2)); // 8</code></pre> <p>\u62fc\u548c\u6570\u7ec4\uff1a</p> <pre><code class="language-javascript">let arr = [3, 5, 1];\nlet arr2 = [8, 9, 15];\n\nlet merged = [0, ...arr, 2, ...arr2];</code></pre> <p>\u4efb\u4f55\u53ef\u8fed\u4ee3\u5bf9\u8c61\u90fd\u53ef\u4ee5\u4f7f\u7528 Spread \u8bed\u6cd5\uff1a</p> <pre><code class="language-javascript">let str = &#39;Hello&#39;;\n\nalert([...str]); // H,e,l,l,o \u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b57\u7b26\u6570\u7ec4</code></pre> <h2 id="3-\u53d8\u91cf\u4f5c\u7528\u57df">3 \u53d8\u91cf\u4f5c\u7528\u57df</h2> <p><strong>\u4ec0\u4e48\u662f\u4f5c\u7528\u57df\uff1a</strong></p> <ul> <li>\u4f5c\u7528\u57df\u662f\u6307\u7a0b\u5e8f\u6e90\u4ee3\u7801\u4e2d\u5b9a\u4e49\u53d8\u91cf\u7684\u533a\u57df</li> <li>\u4f5c\u7528\u57df\u89c4\u5b9a\u4e86\u5982\u4f55\u67e5\u627e\u53d8\u91cf\uff0c\u4e5f\u5c31\u662f\u786e\u5b9a\u5f53\u524d\u6267\u884c\u4ee3\u7801\u5bf9\u53d8\u91cf\u7684\u8bbf\u95ee\u6743\u9650</li> <li>JavaScript \u91c7\u7528\u8bcd\u6cd5\u4f5c\u7528\u57df(lexical scoping)\uff0c\u4e5f\u5c31\u662f\u9759\u6001\u4f5c\u7528\u57df</li> <li>\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5728\u51fd\u6570\u5b9a\u4e49\u7684\u65f6\u5019\u5c31\u51b3\u5b9a\u4e86</li> </ul> <blockquote> <p>var \u58f0\u660e\u7684\u53d8\u91cf\u53ea\u6709\u51fd\u6570\u4f5c\u7528\u57df\u548c\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df</p> </blockquote> <p><strong>var \u548c let \u7684\u533a\u522b\uff1a</strong></p> <ol> <li>var \u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df</li> <li>var \u5141\u8bb8\u91cd\u590d\u58f0\u660e\uff0clet \u91cd\u590d\u58f0\u660e\u4f1a\u62a5\u9519</li> <li>var \u5b58\u5728\u53d8\u91cf\u63d0\u5347\uff0c\u4e5f\u5c31\u662f\u53d8\u91cf\u58f0\u660e\u4f1a\u63d0\u5230\u51fd\u6570\u5f00\u5934 (\u53ef\u4ee5\u5148\u4f7f\u7528\uff0c\u518d\u58f0\u660e)\u3002let \u4e0d\u5b58\u5728\u53d8\u91cf\u63d0\u5347</li> </ol> <p><strong>for \u4e2d\u7684 let \u53d8\u91cf\uff1a</strong></p> <pre><code class="language-javascript">var a = [];\nfor (var i = 0; i &lt; 10; i++) {\n  a[i] = function() {\n    console.log(i);\n  };\n}\na[6](); // 10\n\n// \u53d8\u91cfi\u662fvar\u547d\u4ee4\u58f0\u660e\u7684\uff0c\u5728\u5168\u5c40\u8303\u56f4\u5185\u90fd\u6709\u6548\uff0c\u6240\u4ee5\u5168\u5c40\u53ea\u6709\u4e00\u4e2a\u53d8\u91cfi</code></pre> <pre><code class="language-javascript">var a = [];\nfor (let i = 0; i &lt; 10; i++) {\n  a[i] = function() {\n    console.log(i);\n  };\n}\na[6](); // 6\n\n// \u53d8\u91cfi\u662flet\u58f0\u660e\u7684\uff0c\u5f53\u524d\u7684i\u53ea\u5728\u672c\u8f6e\u5faa\u73af\u6709\u6548\uff0c\u6240\u4ee5\u6bcf\u4e00\u6b21\u5faa\u73af\u7684i\u5176\u5b9e\u90fd\u662f\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf</code></pre> <h2 id="4-\u95ed\u5305">4 \u95ed\u5305</h2> <p><code>\u95ed\u5305</code> \u662f\u6307\u5185\u90e8\u51fd\u6570\u603b\u662f\u53ef\u4ee5\u8bbf\u95ee\u5176\u6240\u5728\u7684\u5916\u90e8\u51fd\u6570\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u548c\u53c2\u6570\uff0c\u5373\u4f7f\u5728\u5176\u5916\u90e8\u51fd\u6570\u6267\u884c\u5b8c\u4e86\u4e4b\u540e</p> <p>\u95ed\u5305\u662f\u6307\u4f7f\u7528\u4e00\u4e2a\u7279\u6b8a\u7684\u5c5e\u6027 <code>[[Environment]]</code> \u6765\u8bb0\u5f55\u51fd\u6570\u81ea\u8eab\u7684\u521b\u5efa\u65f6\u7684\u73af\u5883\u7684\u51fd\u6570\u3002\u5b83\u5177\u4f53\u6307\u5411\u4e86\u51fd\u6570\u521b\u5efa\u65f6\u7684\u8bcd\u6cd5\u73af\u5883</p> <h3 id="41-\u8bcd\u6cd5\u73af\u5883">4.1 \u8bcd\u6cd5\u73af\u5883</h3> <p>\u4e3a\u4ec0\u4e48 JavaScript \u4e2d\u7684\u6240\u6709\u51fd\u6570\u90fd\u662f\u95ed\u5305\u7684\uff1f\u8fd9\u91cc\u6d89\u53ca\u8bcd\u6cd5\u73af\u5883\u7684\u6982\u5ff5</p> <p><strong>\u4ec0\u4e48\u662f\u8bcd\u6cd5\u73af\u5883\uff1a</strong></p> <p>\u5728 JavaScript \u4e2d\uff0c\u6bcf\u4e2a\u8fd0\u884c\u7684\u51fd\u6570\uff0c\u4ee3\u7801\u5757 <code>{...}</code> \u4ee5\u53ca\u6574\u4e2a\u811a\u672c\uff0c\u90fd\u6709\u4e00\u4e2a\u88ab\u79f0\u4e3a <code>\u8bcd\u6cd5\u73af\u5883\uff08Lexical Environment\uff09</code> \u7684\u5185\u90e8\uff08\u9690\u85cf\uff09\u7684\u5173\u8054\u5bf9\u8c61</p> <p><strong>\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a</strong></p> <ol> <li><code>\u73af\u5883\u8bb0\u5f55\uff08Environment Record\uff09</code> \u2014\u2014 \u4e00\u4e2a\u5b58\u50a8\u6240\u6709\u5c40\u90e8\u53d8\u91cf\u4f5c\u4e3a\u5176\u5c5e\u6027\uff08\u5305\u62ec\u4e00\u4e9b\u5176\u4ed6\u4fe1\u606f\uff0c\u4f8b\u5982 this \u7684\u503c\uff09\u7684\u5bf9\u8c61</li> <li>\u5bf9 <code>\u5916\u90e8\u8bcd\u6cd5\u73af\u5883</code> \u7684\u5f15\u7528\uff0c\u4e0e\u5916\u90e8\u4ee3\u7801\u76f8\u5173\u8054</li> </ol> <p><strong>\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u90fd\u6709\u4e09\u4e2a\u91cd\u8981\u5c5e\u6027\uff1a</strong></p> <ol> <li>\u53d8\u91cf\u5bf9\u8c61(Variable object\uff0cVO)</li> <li>\u4f5c\u7528\u57df\u94fe(Scope chain)</li> <li>this</li> </ol> <blockquote> <p>\u4e00\u4e2a\u201c\u53d8\u91cf\u201d\u53ea\u662f <code>\u73af\u5883\u8bb0\u5f55</code> \u8fd9\u4e2a\u7279\u6b8a\u7684\u5185\u90e8\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027\u3002\u201c\u83b7\u53d6\u6216\u4fee\u6539\u53d8\u91cf\u201d\u610f\u5473\u7740\u201c\u83b7\u53d6\u6216\u4fee\u6539\u8bcd\u6cd5\u73af\u5883\u7684\u4e00\u4e2a\u5c5e\u6027\u201d</p> </blockquote> <h3 id="42-\u5d4c\u5957\u51fd\u6570\u7684\u8bcd\u6cd5\u73af\u5883">4.2 \u5d4c\u5957\u51fd\u6570\u7684\u8bcd\u6cd5\u73af\u5883</h3> <pre><code class="language-javascript">function makeCounter() {\n  let count = 0;\n\n  return function() {\n    return count++;\n  };\n}\n\nlet counter = makeCounter();</code></pre> <ul> <li>\u5728\u6bcf\u6b21 <code>makeCounter()</code> \u8c03\u7528\u7684\u5f00\u59cb\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\uff0c\u4ee5\u5b58\u50a8\u8be5 <code>makeCounter</code> \u8fd0\u884c\u65f6\u7684\u53d8\u91cf <img src="'+r+'" alt=""></li> <li>\u5728\u6267\u884c <code>makeCounter()</code> \u7684\u8fc7\u7a0b\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u4ec5\u5360\u4e00\u884c\u7684\u5d4c\u5957\u51fd\u6570\uff0c<strong>\u6240\u6709\u7684\u51fd\u6570\u5728\u201c\u8bde\u751f\u201d\u65f6\u90fd\u4f1a\u8bb0\u4f4f\u521b\u5efa\u5b83\u4eec\u7684\u8bcd\u6cd5\u73af\u5883</strong> <img src="'+a+'" alt=""></li> <li>\u56e0\u6b64\uff0c<code>counter.[[Environment]]</code> \u6709\u5bf9 <code>{count: 0}</code> \u8bcd\u6cd5\u73af\u5883\u7684\u5f15\u7528</li> <li>\u5f53\u8c03\u7528 <code>counter()</code> \u65f6\uff0c\u4f1a\u4e3a\u8be5\u8c03\u7528\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u5e76\u4e14\u5176\u5916\u90e8\u8bcd\u6cd5\u73af\u5883\u5f15\u7528\u83b7\u53d6\u4e8e <code>counter.[[Environment]]</code> <img src="'+d+'" alt=""></li> <li>\u73b0\u5728\uff0c\u5f53 <code>counter()</code> \u4e2d\u7684\u4ee3\u7801\u67e5\u627e <code>count</code> \u53d8\u91cf\u65f6\uff0c\u5b83\u9996\u5148\u641c\u7d22\u81ea\u5df1\u7684\u8bcd\u6cd5\u73af\u5883\uff08\u4e3a\u7a7a\uff0c\u56e0\u4e3a\u90a3\u91cc\u6ca1\u6709\u5c40\u90e8\u53d8\u91cf\uff09\uff0c\u7136\u540e\u662f\u5916\u90e8 <code>makeCounter()</code> \u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u5e76\u4e14\u5728\u54ea\u91cc\u627e\u5230\u5c31\u5728\u54ea\u91cc\u4fee\u6539</li> </ul> <h3 id="43-\u5783\u573e\u56de\u6536">4.3 \u5783\u573e\u56de\u6536</h3> <p>\u901a\u5e38\uff0c\u51fd\u6570\u8c03\u7528\u5b8c\u6210\u540e\uff0c\u4f1a\u5c06\u8bcd\u6cd5\u73af\u5883\u548c\u5176\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u4ece\u5185\u5b58\u4e2d\u5220\u9664\u3002\u56e0\u4e3a\u73b0\u5728\u6ca1\u6709\u4efb\u4f55\u5bf9\u5b83\u4eec\u7684\u5f15\u7528\u4e86\u3002\u4e0e JavaScript \u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u5bf9\u8c61\u4e00\u6837\uff0c\u8bcd\u6cd5\u73af\u5883\u4ec5\u5728\u53ef\u8fbe\u65f6\u624d\u4f1a\u88ab\u4fdd\u7559\u5728\u5185\u5b58\u4e2d</p> <p>\u4f46\u662f\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u5d4c\u5957\u7684\u51fd\u6570\u5728\u51fd\u6570\u7ed3\u675f\u540e\u4ecd\u53ef\u8fbe\uff0c\u5219\u5b83\u5c06\u5177\u6709\u5f15\u7528\u8bcd\u6cd5\u73af\u5883\u7684 <code>[[Environment]]</code> \u5c5e\u6027</p> <p>\u7406\u8bba\u4e0a\u5f53\u51fd\u6570\u53ef\u8fbe\u65f6\uff0c\u5b83\u5916\u90e8\u7684\u6240\u6709\u53d8\u91cf\u4e5f\u90fd\u5c06\u5b58\u5728</p> <pre><code class="language-js">function f() {\n  let value = 123;\n\n  return function() {\n    alert(value);\n  };\n}\n\nlet g = f(); // \u5f53 g \u51fd\u6570\u5b58\u5728\u65f6\uff0c\u8be5\u503c\u4f1a\u88ab\u4fdd\u7559\u5728\u5185\u5b58\u4e2d\n\ng = null; // \u2026\u2026\u73b0\u5728\u5185\u5b58\u88ab\u6e05\u7406\u4e86</code></pre> <p><strong>new Function\uff1a</strong></p> <blockquote> <p>\u5982\u679c\u6211\u4eec\u4f7f\u7528 <code>new Function</code> \u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u7684 <code>[[Environment]]</code> \u5e76\u4e0d\u6307\u5411\u5f53\u524d\u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u800c\u662f\u6307\u5411\u5168\u5c40\u73af\u5883\u3002\u56e0\u6b64\uff0c\u6b64\u7c7b\u51fd\u6570\u65e0\u6cd5\u8bbf\u95ee\u5916\u90e8\uff08outer\uff09\u53d8\u91cf\uff0c\u53ea\u80fd\u8bbf\u95ee\u5168\u5c40\u53d8\u91cf</p> </blockquote> <h2 id="5-\u5168\u5c40\u5bf9\u8c61">5 \u5168\u5c40\u5bf9\u8c61</h2> <p>\u5168\u5c40\u5bf9\u8c61\u6709\u4e00\u4e2a\u901a\u7528\u540d\u79f0 <code>globalThis</code></p> <p>\u5728\u6d4f\u89c8\u5668\u4e2d\u5168\u5c40\u5bf9\u8c61\u4e3a <code>window</code>\uff0cNode.js \u4e2d\u5168\u5c40\u5bf9\u8c61\u4e3a <code>global</code></p> <h2 id="6-\u51fd\u6570\u5bf9\u8c61">6 \u51fd\u6570\u5bf9\u8c61</h2> <p>\u5728 JavaScript \u4e2d\uff0c\u51fd\u6570\u5c31\u662f\u503c\u3002\u8fd9\u4e2a\u503c\u5c31\u662f\u5bf9\u8c61\uff0c\u51fd\u6570\u5c31\u662f\u5bf9\u8c61</p> <p>\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u8c03\u7528\u51fd\u6570\uff0c\u8fd8\u80fd\u628a\u51fd\u6570\u5f53\u4f5c\u5bf9\u8c61\u6765\u5904\u7406\uff1a\u589e/\u5220\u5c5e\u6027\uff0c\u6309\u5f15\u7528\u4f20\u9012\u7b49</p> <h3 id="61-name-\u5c5e\u6027">6.1 name \u5c5e\u6027</h3> <p>\u51fd\u6570\u7684\u540d\u5b57\u3002\u901a\u5e38\u53d6\u81ea\u51fd\u6570\u5b9a\u4e49\uff0c\u4f46\u5982\u679c\u51fd\u6570\u5b9a\u4e49\u65f6\u6ca1\u8bbe\u5b9a\u51fd\u6570\u540d\uff0cJavaScript \u4f1a\u5c1d\u8bd5\u901a\u8fc7\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u731c\u4e00\u4e2a\u51fd\u6570\u540d\uff08\u4f8b\u5982\u628a\u8d4b\u503c\u7684\u53d8\u91cf\u540d\u53d6\u4e3a\u51fd\u6570\u540d\uff09</p> <pre><code class="language-js">function sayHi() {\n  alert(&#39;Hi&#39;);\n}\nalert(sayHi.name); // sayHi\n\nlet sayHi = function() {\n  alert(&#39;Hi&#39;);\n};\nalert(sayHi.name); // sayHi</code></pre> <h3 id="62-length-\u5c5e\u6027">6.2 length \u5c5e\u6027</h3> <p>\u8fd4\u56de\u51fd\u6570\u5165\u53c2\u7684\u4e2a\u6570\uff0crest \u53c2\u6570\u4e0d\u53c2\u4e0e\u8ba1\u6570</p> <pre><code class="language-js">function f1(a) {}\nfunction f2(a, b) {}\nfunction many(a, b, ...more) {}\n\nalert(f1.length); // 1\nalert(f2.length); // 2\nalert(many.length); // 2</code></pre> <h3 id="63-\u81ea\u5b9a\u4e49\u5c5e\u6027">6.3 \u81ea\u5b9a\u4e49\u5c5e\u6027</h3> <pre><code class="language-js">function sayHi() {\n  alert(&#39;Hi&#39;);\n  // \u8ba1\u7b97\u8c03\u7528\u6b21\u6570\n  sayHi.counter++;\n}\nsayHi.counter = 0; // \u521d\u59cb\u503c\n\nsayHi(); // Hi\nsayHi(); // Hi\n\nalert(`Called ${sayHi.counter} times`); // Called 2 times</code></pre> <h2 id="7-new-function-\u8bed\u6cd5">7 new Function \u8bed\u6cd5</h2> <h3 id="71-\u8bed\u6cd5">7.1 \u8bed\u6cd5</h3> <p><strong>\u521b\u5efa\u51fd\u6570\u7684\u8bed\u6cd5\uff1a</strong></p> <pre><code class="language-js">let func = new Function([arg1, arg2, ...argN], functionBody);</code></pre> <pre><code class="language-js">let sum = new Function(&#39;a&#39;, &#39;b&#39;, &#39;return a + b&#39;);\n\nalert(sum(1, 2)); // 3</code></pre> <p>\u8fd9\u79cd\u65b9\u6cd5\u6700\u5927\u7684\u4e0d\u540c\u5728\u4e8e\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u901a\u8fc7\u8fd0\u884c\u65f6\u901a\u8fc7\u53c2\u6570\u4f20\u9012\u8fc7\u6765\u7684\u5b57\u7b26\u4e32\u521b\u5efa\u7684</p> <p>\u4f7f\u7528 <code>new Function</code> \u521b\u5efa\u51fd\u6570\u7684\u5e94\u7528\u573a\u666f\u975e\u5e38\u7279\u6b8a\uff0c\u6bd4\u5982\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u4ee3\u7801\u6216\u8005\u52a8\u6001\u5730\u4ece\u6a21\u677f\u7f16\u8bd1\u51fd\u6570\u65f6\u624d\u4f1a\u4f7f\u7528</p> <h3 id="72-\u95ed\u5305">7.2 \u95ed\u5305</h3> <p>\u95ed\u5305\u662f\u6307\u4f7f\u7528\u4e00\u4e2a\u7279\u6b8a\u7684\u5c5e\u6027 <code>[[Environment]]</code> \u6765\u8bb0\u5f55\u51fd\u6570\u81ea\u8eab\u7684\u521b\u5efa\u65f6\u7684\u73af\u5883\u7684\u51fd\u6570\u3002\u5b83\u5177\u4f53\u6307\u5411\u4e86\u51fd\u6570\u521b\u5efa\u65f6\u7684\u8bcd\u6cd5\u73af\u5883</p> <p>\u5982\u679c\u6211\u4eec\u4f7f\u7528 <code>new Function</code> \u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u7684 <code>[[Environment]]</code> \u5e76\u4e0d\u6307\u5411\u5f53\u524d\u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u800c\u662f\u6307\u5411\u5168\u5c40\u73af\u5883</p> <p>\u6b64\u7c7b\u51fd\u6570\u65e0\u6cd5\u8bbf\u95ee\u5916\u90e8\uff08outer\uff09\u53d8\u91cf\uff0c\u53ea\u80fd\u8bbf\u95ee\u5168\u5c40\u53d8\u91cf</p> <pre><code class="language-js">function getFunc() {\n  let value = &#39;test&#39;;\n\n  let func = new Function(&#39;alert(value)&#39;);\n\n  return func;\n}\n\ngetFunc()(); // error: value is not defined</code></pre> <h2 id="8-settimeout-\u548c-setinterval">8 setTimeout \u548c setInterval</h2> <h3 id="81-\u96f6\u5ef6\u65f6\u7684-settimeout">8.1 \u96f6\u5ef6\u65f6\u7684 setTimeout</h3> <p>\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u5d4c\u5957\u5b9a\u65f6\u5668\u7684\u8fd0\u884c\u9891\u7387\u662f\u53d7\u9650\u5236\u7684\u3002\u6839\u636e <a href="https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers">HTML5</a> \u6807\u51c6 \u6240\u8bb2\uff1a<strong>\u7ecf\u8fc7 5 \u91cd\u5d4c\u5957\u5b9a\u65f6\u5668\u4e4b\u540e\uff0c\u65f6\u95f4\u95f4\u9694\u88ab\u5f3a\u5236\u8bbe\u5b9a\u4e3a\u81f3\u5c11 4 \u6beb\u79d2</strong></p> <p><strong>5 \u91cd\u5d4c\u5957</strong> \u662f\u4ec0\u4e48\u610f\u601d\uff1a</p> <pre><code class="language-js">let start = Date.now();\nlet times = [];\n\nsetTimeout(function run() {\n  times.push(Date.now() - start); // \u4fdd\u5b58\u524d\u4e00\u4e2a\u8c03\u7528\u7684\u5ef6\u65f6\n\n  if (start + 100 &lt; Date.now()) alert(times); // 100 \u6beb\u79d2\u4e4b\u540e\uff0c\u663e\u793a\u5ef6\u65f6\u4fe1\u606f\n  else setTimeout(run); // \u5426\u5219\u91cd\u65b0\u8c03\u5ea6\n});\n\n// \u8f93\u51fa\u793a\u4f8b\uff1a\n// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100</code></pre> <p>\u4f7f\u7528 <code>setInterval</code> \u4e5f\u4f1a\u53d1\u751f\u7c7b\u4f3c\u7684\u60c5\u51b5\uff1a<code>setInterval(f)</code> \u4f1a\u4ee5\u96f6\u5ef6\u65f6\u8fd0\u884c\u51e0\u6b21 <code>f</code>\uff0c\u7136\u540e\u4ee5 4 \u6beb\u79d2\u4ee5\u4e0a\u7684\u5f3a\u5236\u5ef6\u65f6\u8fd0\u884c</p> <blockquote> <p>\u5bf9\u4e8e\u670d\u52a1\u7aef\u7684 JavaScript\uff0c\u5c31\u6ca1\u6709\u8fd9\u4e2a\u9650\u5236\uff0c\u5e76\u4e14\u8fd8\u6709\u5176\u4ed6\u8c03\u5ea6\u5373\u65f6\u5f02\u6b65\u4efb\u52a1\u7684\u65b9\u5f0f\u3002\u4f8b\u5982 <code>Node.js</code> \u7684 <code>setImmediate</code></p> </blockquote> <h2 id="9-call-apply">9 call apply</h2> <pre><code class="language-javascript">function say(phrase) {\n  alert(this.name + &#39;: &#39; + phrase);\n}\n\nlet user = { name: &#39;John&#39; };\n\n// user \u6210\u4e3a this\uff0c&quot;Hello&quot; \u6210\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\nsay.call(user, &#39;Hello&#39;); // John: Hello</code></pre> <p><code>call</code> <code>apply</code> \u7ed9\u8c03\u7528\u7684\u65b9\u6cd5\u4f20\u9012\u4e0a\u4e0b\u6587\uff0c\u5373 <code>this</code></p> <p><code>call</code> \u548c <code>apply</code> \u4e4b\u95f4\u552f\u4e00\u7684\u8bed\u6cd5\u533a\u522b\u662f\uff0c<code>call</code> \u671f\u671b\u4e00\u4e2a\u53c2\u6570\u5217\u8868\uff0c\u800c <code>apply</code> \u671f\u671b\u4e00\u4e2a\u5305\u542b\u8fd9\u4e9b\u53c2\u6570\u7684\u7c7b\u6570\u7ec4\u5bf9\u8c61</p> <h2 id="10-\u51fd\u6570\u7ed1\u5b9a-bind">10 \u51fd\u6570\u7ed1\u5b9a bind</h2> <h3 id="101-\u4e22\u5931-this">10.1 \u4e22\u5931 this</h3> <p>\u5f53\u65b9\u6cd5\u4f5c\u4e3a\u56de\u8c03\u8fdb\u884c\u4f20\u9012\u65f6\uff0c\u4f1a\u4e22\u5931 this</p> <pre><code class="language-js">let user = {\n  firstName: &#39;John&#39;,\n  sayHi() {\n    alert(`Hello, ${this.firstName}!`);\n  }\n};\n\nsetTimeout(user.sayHi, 1000); // Hello, undefined!\n\n// \u4e0a\u9762\u4e00\u884c\u76f8\u5f53\u4e8e\u8fd9\u4e2a\u5199\u6cd5\nlet f = user.sayHi;\nsetTimeout(f, 1000); // \u4e22\u5931\u4e86 user \u4e0a\u4e0b\u6587</code></pre> <h3 id="102-\u5305\u88c5\u5668">10.2 \u5305\u88c5\u5668</h3> <p>\u89e3\u51b3\u4e22\u5931 this\uff0c\u53ef\u4ee5\u4f7f\u7528\u5305\u88c5\u51fd\u6570</p> <pre><code class="language-js">let user = {\n  firstName: &#39;John&#39;,\n  sayHi() {\n    alert(`Hello, ${this.firstName}!`);\n  }\n};\n\nsetTimeout(function() {\n  user.sayHi(); // Hello, John!\n}, 1000);\n\n// \u6216\u8005\u7bad\u5934\u51fd\u6570\nsetTimeout(() =&gt; user.sayHi(), 1000); // Hello, John!</code></pre> <h3 id="103-bind">10.3 bind</h3> <p>\u51fd\u6570\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u5efa\u65b9\u6cd5 <code>bind</code>\uff0c\u5b83\u53ef\u4ee5\u7ed1\u5b9a <code>this</code></p> <pre><code class="language-js">let boundFunc = func.bind(context);</code></pre> <p><code>func.bind(context)</code> \u8fd4\u56de\u4e00\u4e2a\u7279\u6b8a\u7684\u7c7b\u4f3c\u4e8e\u51fd\u6570\u7684 <code>\u5916\u6765\u5bf9\u8c61\uff08exotic object\uff09</code>\uff0c\u5b83\u53ef\u4ee5\u50cf\u51fd\u6570\u4e00\u6837\u88ab\u8c03\u7528\uff0c\u5e76\u4e14\u900f\u660e\u5730\u5c06\u8c03\u7528\u4f20\u9012\u7ed9 <code>func</code> \u5e76\u8bbe\u5b9a <code>this=context</code></p> <pre><code class="language-js">let user = {\n  firstName: &#39;John&#39;,\n  sayHi() {\n    alert(`Hello, ${this.firstName}!`);\n  }\n};\n\nlet sayHi = user.sayHi.bind(user); // (*)\n\n// \u53ef\u4ee5\u5728\u6ca1\u6709\u5bf9\u8c61\uff08\u8bd1\u6ce8\uff1a\u4e0e\u5bf9\u8c61\u5206\u79bb\uff09\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u5b83\nsayHi(); // Hello, John!\n\nsetTimeout(sayHi, 1000); // Hello, John!\n\n// \u5373\u4f7f user \u7684\u503c\u5728\u4e0d\u5230 1 \u79d2\u5185\u53d1\u751f\u4e86\u6539\u53d8\n// sayHi \u8fd8\u662f\u4f1a\u4f7f\u7528\u9884\u5148\u7ed1\u5b9a\uff08pre-bound\uff09\u7684\u503c\uff0c\u8be5\u503c\u662f\u5bf9\u65e7\u7684 user \u5bf9\u8c61\u7684\u5f15\u7528\nuser = {\n  sayHi() {\n    alert(&#39;Another user in setTimeout!&#39;);\n  }\n};</code></pre> <h3 id="104-\u504f\u51fd\u6570">10.4 \u504f\u51fd\u6570</h3> <p>\u504f\u51fd\u6570\u662f\u6307\u901a\u8fc7 <code>bind</code> \u7ed1\u5b9a\u5148\u6709\u51fd\u6570\u7684\u4e00\u4e9b\u53c2\u6570\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570</p> <pre><code class="language-js">function mul(a, b) {\n  return a * b;\n}\n\nlet double = mul.bind(null, 2);\n\nalert(double(3)); // = mul(2, 3) = 6\nalert(double(4)); // = mul(2, 4) = 8\nalert(double(5)); // = mul(2, 5) = 10</code></pre> <h2 id="11-\u7bad\u5934\u51fd\u6570">11 \u7bad\u5934\u51fd\u6570</h2> <p><strong>\u7bad\u5934\u51fd\u6570\u7279\u6027\uff1a</strong></p> <ul> <li>\u6ca1\u6709 <code>this</code>\uff0c<code>this</code> \u5728\u5916\u90e8\u8bcd\u6cd5\u73af\u5883\u4e2d\u67e5\u627e</li> <li>\u6ca1\u6709 <code>arguments</code></li> <li>\u4e0d\u80fd\u4f7f\u7528 <code>new</code> \u8fdb\u884c\u8c03\u7528</li> <li>\u6ca1\u6709 <code>super</code></li> </ul> <h2 id="12-\u4f5c\u7528\u57df\u548c\u6267\u884c\u4e0a\u4e0b\u6587">12 \u4f5c\u7528\u57df\u548c\u6267\u884c\u4e0a\u4e0b\u6587</h2> <h3 id="121-\u4f5c\u7528\u57df">12.1 \u4f5c\u7528\u57df</h3> <p><strong>\u4ec0\u4e48\u662f\u4f5c\u7528\u57df\uff1a</strong></p> <ul> <li>\u4f5c\u7528\u57df\u662f\u6307\u7a0b\u5e8f\u6e90\u4ee3\u7801\u4e2d\u5b9a\u4e49\u53d8\u91cf\u7684\u533a\u57df</li> <li>\u4f5c\u7528\u57df\u89c4\u5b9a\u4e86\u5982\u4f55\u67e5\u627e\u53d8\u91cf\uff0c\u4e5f\u5c31\u662f\u786e\u5b9a\u5f53\u524d\u6267\u884c\u4ee3\u7801\u5bf9\u53d8\u91cf\u7684\u8bbf\u95ee\u6743\u9650</li> <li><code>JavaScript</code> \u91c7\u7528\u8bcd\u6cd5\u4f5c\u7528\u57df(lexical scoping)\uff0c\u4e5f\u5c31\u662f\u9759\u6001\u4f5c\u7528\u57df</li> <li>\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5728\u51fd\u6570\u5b9a\u4e49\u7684\u65f6\u5019\u5c31\u51b3\u5b9a\u4e86</li> </ul> <p><strong>\u4f5c\u7528\u57df\u5206\u4e3a\uff1a</strong></p> <ul> <li>\u5168\u5c40\u4f5c\u7528\u57df</li> <li>\u5757\u7ea7\u4f5c\u7528\u57df</li> <li>\u51fd\u6570\u4f5c\u7528\u57df</li> </ul> <h3 id="122-\u6267\u884c\u4e0a\u4e0b\u6587">12.2 \u6267\u884c\u4e0a\u4e0b\u6587</h3> <p><strong>\u4ec0\u4e48\u662f\u6267\u884c\u4e0a\u4e0b\u6587\uff1a</strong></p> <ul> <li>\u6267\u884c\u4e0a\u4e0b\u6587\u662f\u7528\u6765\u8ddf\u8e2a\u8bb0\u5f55\u4ee3\u7801\u8fd0\u884c\u65f6\u73af\u5883\u7684\u62bd\u8c61\u6982\u5ff5</li> <li>\u5f53\u6267\u884c\u5168\u5c40\u7684\u4ee3\u7801\uff0c\u5757\u7ea7\u4ee3\u7801\u6216\u8005\u51fd\u6570\u7684\u65f6\u5019\uff0c\u4f1a\u521b\u5efa\u6267\u884c\u4e0a\u4e0b\u6587</li> </ul> <p><strong>\u5bf9\u4e8e\u6bcf\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u90fd\u6709\u4e09\u4e2a\u91cd\u8981\u5c5e\u6027\uff1a</strong></p> <ol> <li>\u53d8\u91cf\u5bf9\u8c61(Variable object\uff0cVO) (ES6 \u53eb\u505a\u8bcd\u6cd5\u73af\u5883)</li> <li>\u4f5c\u7528\u57df\u94fe(Scope chain)</li> <li>this</li> </ol> <h3 id="123-\u6267\u884c\u4e0a\u4e0b\u6587\u6808">12.3 \u6267\u884c\u4e0a\u4e0b\u6587\u6808</h3> <ul> <li>\u4ee3\u7801\u4e2d\u6709\u5f88\u591a\u5730\u65b9\u9700\u8981\u521b\u5efa\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u901a\u8fc7\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u6765\u7ba1\u7406\uff0c\u53ef\u4ee5\u5c06\u5b83\u770b\u6210\u662f\u4e00\u4e2a\u6570\u7ec4</li> <li>\u8bd5\u60f3\u5f53 <code>JavaScript</code> \u5f00\u59cb\u8981\u89e3\u91ca\u6267\u884c\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u6700\u5148\u9047\u5230\u7684\u5c31\u662f\u5168\u5c40\u4ee3\u7801\uff0c\u6240\u4ee5\u521d\u59cb\u5316\u7684\u65f6\u5019\u9996\u5148\u5c31\u4f1a\u5411\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u538b\u5165\u4e00\u4e2a\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587</li> <li>\u5f53\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u5e76\u4e14\u538b\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808\uff0c\u5f53\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5c06\u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4ece\u6808\u4e2d\u5f39\u51fa</li> </ul> <p>\u4f8b\u5982\uff1a</p> <pre><code class="language-js">function fun3() {\n  console.log(&#39;fun3&#39;);\n}\nfunction fun2() {\n  fun3();\n}\nfunction fun1() {\n  fun2();\n}\n\nfun1();</code></pre> <pre><code class="language-js">// \u6267\u884c\u4e0a\u4e0b\u6587\u6808\u7684\u8fd0\u4f5c\u8fc7\u7a0b\n// \u4f2a\u4ee3\u7801\n\nECStack.push(fun1 functionContext); // fun1()\nECStack.push(fun2 functionContext); // fun1 \u4e2d\u8c03\u7528\u4e86 fun2\uff0c\u8fd8\u8981\u521b\u5efa fun2 \u7684\u6267\u884c\u4e0a\u4e0b\u6587\nECStack.push(fun3 functionContext); // fun2\u8fd8\u8c03\u7528\u4e86 fun3\n\nECStack.pop(); // fun3\u6267\u884c\u5b8c\u6bd5\nECStack.pop(); // fun2\u6267\u884c\u5b8c\u6bd5\nECStack.pop(); // fun1\u6267\u884c\u5b8c\u6bd5\n\n// javascript\u63a5\u7740\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u4f46\u662fECStack\u5e95\u5c42\u6c38\u8fdc\u6709\u4e2aglobalContext</code></pre> <h3 id="124-\u53d8\u91cf\u5bf9\u8c61-\u8bcd\u6cd5\u73af\u5883">12.4 \u53d8\u91cf\u5bf9\u8c61 (\u8bcd\u6cd5\u73af\u5883)</h3> <p><strong>\u5bf9\u4e8e\u6bcf\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u90fd\u6709\u4e09\u4e2a\u91cd\u8981\u5c5e\u6027\uff1a</strong></p> <ol> <li>\u53d8\u91cf\u5bf9\u8c61(Variable object\uff0cVO) (ES6 \u53eb\u505a\u8bcd\u6cd5\u73af\u5883)</li> <li>\u4f5c\u7528\u57df\u94fe(Scope chain)</li> <li>this</li> </ol> <p>\u53d8\u91cf\u5bf9\u8c61\u662f\u4e0e\u6267\u884c\u4e0a\u4e0b\u6587\u76f8\u5173\u7684\u6570\u636e\u4f5c\u7528\u57df\uff0c\u5b58\u50a8\u4e86\u5728\u4e0a\u4e0b\u6587\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u548c\u51fd\u6570\u58f0\u660e</p> <p><strong>\u4ec0\u4e48\u662f\u53d8\u91cf\u5bf9\u8c61\uff1a</strong></p> <ol> <li>\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u521d\u59cb\u5316\u662f\u5168\u5c40\u5bf9\u8c61</li> <li>\u51fd\u6570\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u521d\u59cb\u5316\u53ea\u5305\u62ec <code>arguments</code> \u5bf9\u8c61</li> <li>\u5728\u8fdb\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u65f6\u4f1a\u7ed9\u53d8\u91cf\u5bf9\u8c61\u6dfb\u52a0\u5f62\u53c2\u3001\u51fd\u6570\u58f0\u660e\u3001\u53d8\u91cf\u58f0\u660e\u7b49\u521d\u59cb\u7684\u5c5e\u6027\u503c</li> <li>\u5728\u4ee3\u7801\u6267\u884c\u9636\u6bb5\uff0c\u4f1a\u518d\u6b21\u4fee\u6539\u53d8\u91cf\u5bf9\u8c61\u7684\u5c5e\u6027\u503c</li> </ol> <p>\u4e3e\u4e2a\u4f8b\u5b50\uff1a</p> <pre><code class="language-js">function foo(a) {\n  var b = 2;\n  function c() {}\n  var d = function() {};\n\n  b = 3;\n}\n\nfoo(1);</code></pre> <p>\u5728\u8fdb\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u540e\uff0c\u8fd9\u65f6\u5019\u7684 AO \u662f\uff1a</p> <pre><code class="language-js">AO = {\n    arguments: {\n        0: 1,\n        length: 1\n    },\n    a: 1,\n    b: undefined,\n    c: reference to function c(){},\n    d: undefined\n}</code></pre> <h3 id="125-\u4f5c\u7528\u57df\u94fe">12.5 \u4f5c\u7528\u57df\u94fe</h3> <p><strong>\u4ec0\u4e48\u662f\u4f5c\u7528\u57df\u94fe\uff1a</strong></p> <ul> <li>\u5f53\u67e5\u627e\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u4ece\u5f53\u524d\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u4e2d\u67e5\u627e</li> <li>\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5c31\u4f1a\u4ece\u7236\u7ea7(\u8bcd\u6cd5\u5c42\u9762\u4e0a\u7684\u7236\u7ea7)\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u4e2d\u67e5\u627e\uff0c\u4e00\u76f4\u627e\u5230\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u5168\u5c40\u5bf9\u8c61</li> <li>\u8fd9\u6837\u7531\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u6784\u6210\u7684\u94fe\u8868\u5c31\u53eb\u505a\u4f5c\u7528\u57df\u94fe</li> </ul> <p><strong>\u4f5c\u7528\u57df\u94fe\u662f\u600e\u4e48\u751f\u6210\u7684\uff1a</strong></p> <ol> <li><strong>\u51fd\u6570\u521b\u5efa\uff1a</strong> \u51fd\u6570\u6709\u4e00\u4e2a\u5185\u90e8\u5c5e\u6027 <code>[[scope]]</code>\uff0c\u5f53\u51fd\u6570\u521b\u5efa\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u4fdd\u5b58\u6240\u6709\u7236 \u53d8\u91cf\u5bf9\u8c61(\u8bcd\u6cd5\u73af\u5883) \u5230\u5176\u4e2d</li> <li><strong>\u51fd\u6570\u6fc0\u6d3b\uff1a</strong> \u5f53\u51fd\u6570\u6fc0\u6d3b\u65f6\uff0c\u8fdb\u5165\u51fd\u6570\u4e0a\u4e0b\u6587\uff0c\u521b\u5efa <code>VO/AO(\u8bcd\u6cd5\u73af\u5883)</code> \u540e\uff0c\u5c31\u4f1a\u5c06\u6d3b\u52a8\u5bf9\u8c61\u6dfb\u52a0\u5230\u4f5c\u7528\u94fe\u7684\u524d\u7aef</li> </ol> <h3 id="126-\u5b8c\u6574\u7684\u6d41\u7a0b">12.6 \u5b8c\u6574\u7684\u6d41\u7a0b</h3> <p>\u5206\u6790\u8fd9\u6bb5\u4ee3\u7801\uff1a</p> <pre><code class="language-js">var scope = &#39;global scope&#39;;\nfunction checkscope() {\n  var scope = &#39;local scope&#39;;\n  function f() {\n    return scope;\n  }\n  return f();\n}\ncheckscope();</code></pre> <p><strong>\u6267\u884c\u8fc7\u7a0b\u5982\u4e0b\uff1a</strong></p> <p><strong>1.</strong> \u6267\u884c\u5168\u5c40\u4ee3\u7801\uff0c\u521b\u5efa\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u5168\u5c40\u4e0a\u4e0b\u6587\u88ab\u538b\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808</p> <pre><code>ECStack = [globalContext];</code></pre><p><strong>2.</strong> \u5168\u5c40\u4e0a\u4e0b\u6587\u521d\u59cb\u5316</p> <pre><code>globalContext = {\n  VO: [global],\n  Scope: [globalContext.VO],\n  this: globalContext.VO\n};</code></pre><p><strong>3.</strong> \u521d\u59cb\u5316\u7684\u540c\u65f6\uff0c<code>checkscope</code> \u51fd\u6570\u88ab\u521b\u5efa\uff0c\u4fdd\u5b58\u4f5c\u7528\u57df\u94fe\u5230\u51fd\u6570\u7684\u5185\u90e8\u5c5e\u6027 <code>[[scope]]</code></p> <pre><code>checkscope.[[scope]] = [\n  globalContext.VO\n];</code></pre><p><strong>4.</strong> \u6267\u884c <code>checkscope</code> \u51fd\u6570\uff0c\u521b\u5efa <code>checkscope</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\uff0c<code>checkscope</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u88ab\u538b\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808</p> <pre><code>ECStack = [\n  checkscopeContext,\n  globalContext\n];</code></pre><p><strong>5.</strong> <code>checkscope</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u521d\u59cb\u5316\uff1a</p> <ul> <li>\u590d\u5236\u51fd\u6570 <code>[[scope]]</code> \u5c5e\u6027\u521b\u5efa\u4f5c\u7528\u57df\u94fe</li> <li>\u7528 <code>arguments</code> \u521b\u5efa\u6d3b\u52a8\u5bf9\u8c61</li> <li>\u521d\u59cb\u5316\u6d3b\u52a8\u5bf9\u8c61\uff0c\u5373\u52a0\u5165\u5f62\u53c2\u3001\u51fd\u6570\u58f0\u660e\u3001\u53d8\u91cf\u58f0\u660e</li> <li>\u5c06\u6d3b\u52a8\u5bf9\u8c61\u538b\u5165 <code>checkscope</code> \u4f5c\u7528\u57df\u94fe\u9876\u7aef</li> </ul> <p>\u540c\u65f6 <code>f</code> \u51fd\u6570\u88ab\u521b\u5efa\uff0c\u4fdd\u5b58\u4f5c\u7528\u57df\u94fe\u5230 <code>f</code> \u51fd\u6570\u7684\u5185\u90e8\u5c5e\u6027 <code>[[scope]]</code></p> <pre><code>checkscopeContext = {\n  AO: {\n    arguments: {\n      length: 0\n    },\n    scope: undefined,\n    f: reference to function f(){}\n  },\n  Scope: [AO, globalContext.VO],\n  this: undefined\n}</code></pre><p><strong>6.</strong> \u6267\u884c <code>f</code> \u51fd\u6570\uff0c\u521b\u5efa <code>f</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\uff0c<code>f</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u88ab\u538b\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808</p> <pre><code>ECStack = [\n  fContext,\n  checkscopeContext,\n  globalContext\n];</code></pre><p><strong>7.</strong> <code>f</code> \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u521d\u59cb\u5316, \u4ee5\u4e0b\u8ddf\u7b2c 4 \u6b65\u76f8\u540c\uff1a</p> <ul> <li>\u590d\u5236\u51fd\u6570 <code>[[scope]]</code> \u5c5e\u6027\u521b\u5efa\u4f5c\u7528\u57df\u94fe</li> <li>\u7528 <code>arguments</code> \u521b\u5efa\u6d3b\u52a8\u5bf9\u8c61</li> <li>\u521d\u59cb\u5316\u6d3b\u52a8\u5bf9\u8c61\uff0c\u5373\u52a0\u5165\u5f62\u53c2\u3001\u51fd\u6570\u58f0\u660e\u3001\u53d8\u91cf\u58f0\u660e</li> <li>\u5c06\u6d3b\u52a8\u5bf9\u8c61\u538b\u5165 <code>f</code> \u4f5c\u7528\u57df\u94fe\u9876\u7aef</li> </ul> <pre><code class="language-js">fContext = {\n  AO: {\n    arguments: {\n      length: 0\n    }\n  },\n  Scope: [AO, checkscopeContext.AO, globalContext.VO],\n  this: undefined\n};</code></pre> <p><strong>8.</strong> <code>f</code> \u51fd\u6570\u6267\u884c\uff0c\u6cbf\u7740\u4f5c\u7528\u57df\u94fe\u67e5\u627e <code>scope</code> \u503c\uff0c\u8fd4\u56de <code>scope</code> \u503c</p> <p><strong>9.</strong> <code>f</code> \u51fd\u6570\u6267\u884c\u5b8c\u6bd5\uff0c<code>f</code> \u51fd\u6570\u4e0a\u4e0b\u6587\u4ece\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u4e2d\u5f39\u51fa</p> <pre><code>ECStack = [\n  checkscopeContext,\n  globalContext\n];</code></pre><p><strong>10.</strong> <code>checkscope</code> \u51fd\u6570\u6267\u884c\u5b8c\u6bd5\uff0c<code>checkscope</code> \u6267\u884c\u4e0a\u4e0b\u6587\u4ece\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u4e2d\u5f39\u51fa</p> <pre><code>ECStack = [\n  globalContext\n];</code></pre><h2 id="\u590d\u4e60">\u590d\u4e60</h2> <ul> <li>\u4ec0\u4e48\u662f\u6267\u884c\u4e0a\u4e0b\u6587</li> <li><code>Rest</code> \u53c2\u6570 <code>...</code></li> <li><code>arguments</code> \u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u662f\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff0c\u4f46\u5b83\u4e0d\u662f\u6570\u7ec4</li> <li><code>var</code> \u548c <code>let</code> \u7684\u533a\u522b (3 \u4e2a)</li> <li><code>for</code> \u5faa\u73af\u4e2d <code>var</code> \u548c <code>let</code> \u7684\u533a\u522b</li> <li>\u4ec0\u4e48\u662f\u95ed\u5305\uff1f</li> <li>\u4e3a\u4ec0\u4e48\u4f1a\u6709\u95ed\u5305\uff1f</li> <li>\u95ed\u5305\u76f8\u5173\u7684\u5783\u573e\u56de\u6536\u673a\u5236</li> <li>\u5168\u5c40\u5bf9\u8c61\uff0c\u6d4f\u89c8\u5668\u4e2d\u7684\u5168\u5c40\u5bf9\u8c61\uff0cnodejs \u4e2d\u7684\u5168\u5c40\u5bf9\u8c61</li> <li>\u51fd\u6570\u5bf9\u8c61\uff0c\u51fd\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002<code>name</code> \u5c5e\u6027\u3001<code>length</code> \u5c5e\u6027\u5206\u522b\u662f\u4ec0\u4e48\uff1f</li> <li><code>call</code> <code>apply</code> \u4f5c\u7528\u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u533a\u522b</li> <li>\u51fd\u6570\u7ed1\u5b9a <code>bind</code> \u4f5c\u7528\u662f\u4ec0\u4e48\uff0c<code>bind</code> \u5b9e\u73b0\u504f\u51fd\u6570</li> <li>\u7bad\u5934\u7684\u6570\u7684 4 \u4e2a\u7279\u6027</li> </ul> ';e.exports=s}}]);