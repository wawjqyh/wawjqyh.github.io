(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/isArray"],{"Z+OU":function(r,a){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank">en</a></p> <h1 id="arrayisarray">Array.isArray()</h1> <p>\u8be5\u65b9\u6cd5\u9002\u7528\u4e8e\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u4e3aArray\u3002</p> <pre><code class="language-javascript">Array.isArray([1, 2, 3]);  // true\nArray.isArray({foo: 123}); // false\nArray.isArray(&quot;foobar&quot;);   // false\nArray.isArray(undefined);  // false</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">Array.isArray(obj)</code></pre> <h2 id="\u53c2\u6570">\u53c2\u6570</h2> <ul> <li><code>obj</code> \u9700\u8981\u68c0\u6d4b\u7684\u503c\u3002</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u5982\u679c\u5bf9\u8c61\u662f Array\uff0c\u5219\u4e3atrue; \u5426\u5219\u4e3afalse\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">// \u4e0b\u9762\u7684\u51fd\u6570\u8c03\u7528\u90fd\u8fd4\u56de true\nArray.isArray([]);\nArray.isArray([1]);\nArray.isArray(new Array());\n// \u9c9c\u4e3a\u4eba\u77e5\u7684\u4e8b\u5b9e\uff1a\u5176\u5b9e Array.prototype \u4e5f\u662f\u4e00\u4e2a\u6570\u7ec4\u3002\nArray.isArray(Array.prototype);\n\n// \u4e0b\u9762\u7684\u51fd\u6570\u8c03\u7528\u90fd\u8fd4\u56de false\nArray.isArray();\nArray.isArray({});\nArray.isArray(null);\nArray.isArray(undefined);\nArray.isArray(17);\nArray.isArray(&#39;Array&#39;);\nArray.isArray(true);\nArray.isArray(false);\nArray.isArray({ __proto__: Array.prototype });</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript Latest Draft (ECMA-262)</td> <td align="left">Draft</td> <td align="left"></td> </tr> </tbody></table> ';r.exports=t}}]);