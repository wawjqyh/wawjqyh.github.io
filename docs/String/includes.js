(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/String/includes"],{pnmZ:function(e,t){var n='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes" target="_blank">en</a></p> <h1 id="stringprototypeincludes">String.prototype.includes()</h1> <p>includes() \u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b\u5728\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\uff0c\u6839\u636e\u60c5\u51b5\u8fd4\u56detrue\u6216false\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">str.includes(searchString, position)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>searchString</code> \u8981\u5728\u6b64\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u7684\u5b57\u7b26\u4e32</li> <li><code>position \u53ef\u9009</code> \u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u54ea\u4e2a\u7d22\u5f15\u4f4d\u7f6e\u5f00\u59cb\u641c\u5bfb\u5b50\u5b57\u7b26\u4e32\uff1b\u9ed8\u8ba4\u503c\u4e3a0</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u5982\u679c\u5f53\u524d\u5b57\u7b26\u4e32\u5305\u542b\u88ab\u641c\u5bfb\u7684\u5b57\u7b26\u4e32\uff0c\u5c31\u8fd4\u56detrue\uff1b\u5426\u5219\uff0c\u8fd4\u56defalse\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u4f60\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b\u53e6\u5916\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002</p> <h3 id="\u533a\u5206\u5927\u5c0f\u5199">\u533a\u5206\u5927\u5c0f\u5199</h3> <p>includes() \u65b9\u6cd5\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u4f1a\u8fd4\u56de false \uff1a</p> <pre><code class="language-javascript">&#39;Blue Whale&#39;.includes(&#39;blue&#39;); // returns false</code></pre> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">var str = &#39;To be, or not to be, that is the question.&#39;;\n\nconsole.log(str.includes(&#39;To be&#39;));       // true\nconsole.log(str.includes(&#39;question&#39;));    // true\nconsole.log(str.includes(&#39;nonexistent&#39;)); // false\nconsole.log(str.includes(&#39;To be&#39;, 1));    // false\nconsole.log(str.includes(&#39;TO BE&#39;));       // false</code></pre> <h2 id="\u586b\u5145">\u586b\u5145</h2> <p>\u8fd9\u4e2a\u65b9\u6cd5\u5df2\u7ecf\u88ab\u52a0\u5165\u5230 ECMAScript 6 \u6807\u51c6\u4e2d\uff0c\u4f46\u672a\u5fc5\u5728\u6240\u6709\u7684 JavaScript \u5b9e\u73b0\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730polyfill\u8fd9\u4e2a\u65b9\u6cd5\uff1a</p> <pre><code class="language-javascript">if (!String.prototype.includes) {\n  String.prototype.includes = function(search, start) {\n    &#39;use strict&#39;;\n    if (typeof start !== &#39;number&#39;) {\n      start = 0;\n    }\n\n    if (start + search.length &gt; this.length) {\n      return false;\n    } else {\n      return this.indexOf(search, start) !== -1;\n    }\n  };\n}</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> </tbody></table> ';e.exports=n}}]);