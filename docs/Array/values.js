(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/values"],{ribA:function(e,r){var a='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" target="_blank">en</a></p> <h1 id="arrayprototypevalues">Array.prototype.values()</h1> <p>values() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Array Iterator \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b\u6570\u7ec4\u6bcf\u4e2a\u7d22\u5f15\u7684\u503c\u3002</p> <p><code>PS: Chrome \u672a\u5b9e\u73b0</code></p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.values()</code></pre> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u4f7f\u7528-forof-\u5faa\u73af\u8fdb\u884c\u8fed\u4ee3">\u4f7f\u7528 for...of \u5faa\u73af\u8fdb\u884c\u8fed\u4ee3</h3> <pre><code class="language-javascript">let arr = [&#39;w&#39;, &#39;y&#39;, &#39;k&#39;, &#39;o&#39;, &#39;p&#39;];\nlet eArr = arr.values();\n// \u60a8\u7684\u6d4f\u89c8\u5668\u5fc5\u987b\u652f\u6301 for..of \u5faa\u73af\n// \u4ee5\u53ca let \u2014\u2014 \u5c06\u53d8\u91cf\u4f5c\u7528\u57df\u9650\u5b9a\u5728 for \u5faa\u73af\u4e2d\nfor (let letter of eArr) {\n  console.log(letter);\n}</code></pre> <h3 id="\u53e6\u4e00\u79cd\u8fed\u4ee3\u65b9\u5f0f">\u53e6\u4e00\u79cd\u8fed\u4ee3\u65b9\u5f0f</h3> <pre><code class="language-javascript">let arr = [&#39;w&#39;, &#39;y&#39;, &#39;k&#39;, &#39;o&#39;, &#39;p&#39;];\nlet eArr = arr.values();\nconsole.log(eArr.next().value); // w\nconsole.log(eArr.next().value); // y\nconsole.log(eArr.next().value); // k\nconsole.log(eArr.next().value); // o\nconsole.log(eArr.next().value); // p</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> </tbody></table> ';e.exports=a}}]);