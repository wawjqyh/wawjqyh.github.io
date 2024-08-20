(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/toString"],{"3Uuo":function(t,a){var r='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" target="_blank">en</a></p> <h1 id="arrayprototypetostring">Array.prototype.toString()</h1> <h2 id="\u6982\u8ff0">\u6982\u8ff0</h2> <p>toString() \u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6307\u5b9a\u7684\u6570\u7ec4\u53ca\u5176\u5143\u7d20\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.toString()</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <p>\u65e0</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>Array \u5bf9\u8c61\u8986\u76d6\u4e86 Object \u7684 toString \u65b9\u6cd5\u3002\u5bf9\u4e8e\u6570\u7ec4\u5bf9\u8c61\uff0ctoString \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u7531\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u7684 toString() \u8fd4\u56de\u503c\u7ecf\u8c03\u7528 join() \u65b9\u6cd5\u8fde\u63a5\uff08\u7531\u9017\u53f7\u9694\u5f00\uff09\u7ec4\u6210\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u4f7f\u7528 toString \u65b9\u6cd5\u628a\u8be5\u6570\u7ec4\u8f6c\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002</p> <pre><code class="language-javascript">var monthNames = [&#39;Jan&#39;, &#39;Feb&#39;, &#39;Mar&#39;, &#39;Apr&#39;];\nvar myVar = monthNames.toString(); // assigns &quot;Jan,Feb,Mar,Apr&quot; to myVar.</code></pre> <p>\u5f53\u4e00\u4e2a\u6570\u7ec4\u88ab\u4f5c\u4e3a\u6587\u672c\u503c\u6216\u8005\u8fdb\u884c\u5b57\u7b26\u4e32\u8fde\u63a5\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u8c03\u7528\u5176 toString \u65b9\u6cd5\u3002</p> <h3 id="ecmascript-5-semantics">ECMAScript 5 semantics</h3> <p>\u4ece JavaScript 1.8.5 (Firefox 4) \u5f00\u59cb\uff0c\u548c ECMAScript \u7b2c5\u7248\u8bed\u4e49\uff08semantics\uff09\u4e00\u81f4\uff0ctoString() \u65b9\u6cd5\u662f\u901a\u7528\u7684\uff0c\u53ef\u88ab\u7528\u4e8e\u4efb\u4f55\u5bf9\u8c61\u3002 \u5982\u679c\u5bf9\u8c61\u6709\u4e00\u4e2a join() \u65b9\u6cd5\uff0c\u5c06\u4f1a\u88ab\u8c03\u7528\uff0c\u5176\u8fd4\u56de\u503c\u5c06\u88ab\u8fd4\u56de\u3002\u6ca1\u6709\u5219\u8c03\u7528 Object.prototype.toString() \u65b9\u6cd5\u3002</p> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 1st Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=r}}]);