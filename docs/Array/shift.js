(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/shift"],{Mnp7:function(t,e){var n='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">en</a></p> <h1 id="arrayprototypeshift">Array.prototype.shift()</h1> <p>shift() \u65b9\u6cd5\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002\u6b64\u65b9\u6cd5\u66f4\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u3002</p> <pre><code class="language-javascript">let a = [1, 2, 3];\nlet b = a.shift();\n\nconsole.log(a);\n// [2, 3]\n\nconsole.log(b);\n// 1</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.shift()</code></pre> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7684\u5143\u7d20; undefined \u5982\u679c\u6570\u7ec4\u4e3a\u7a7a\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>shift \u65b9\u6cd5\u79fb\u9664\u7d22\u5f15\u4e3a 0 \u7684\u5143\u7d20(\u5373\u7b2c\u4e00\u4e2a\u5143\u7d20)\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20\uff0c\u5176\u4ed6\u5143\u7d20\u7684\u7d22\u5f15\u503c\u968f\u4e4b\u51cf 1\u3002\u5982\u679c length \u5c5e\u6027\u7684\u503c\u4e3a 0 (\u957f\u5ea6\u4e3a 0)\uff0c\u5219\u8fd4\u56de undefined\u3002</p> <p>shift \u65b9\u6cd5\u5e76\u4e0d\u5c40\u9650\u4e8e\u6570\u7ec4\uff1a\u8be5\u65b9\u6cd5\u4ea6\u53ef\u901a\u8fc7 call \u6216 apply \u4f5c\u7528\u4e8e\u5bf9\u8c61\u4e0a\u3002\u5bf9\u4e8e\u4e0d\u5305\u542b length \u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5c06\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a 0 \u7684 length \u5c5e\u6027\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u79fb\u9664\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20">\u79fb\u9664\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20</h3> <p>\u4ee5\u4e0b\u4ee3\u7801\u663e\u793a\u4e86\u5220\u9664\u5176\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u548c\u4e4b\u540e\u7684myFish\u6570\u7ec4\u3002\u5b83\u8fd8\u663e\u793a\u5df2\u5220\u9664\u7684\u5143\u7d20\uff1a</p> <pre><code class="language-javascript">let myFish = [&#39;angel&#39;, &#39;clown&#39;, &#39;mandarin&#39;, &#39;surgeon&#39;];\n\nconsole.log(&#39;\u8c03\u7528 shift \u4e4b\u524d: &#39; + myFish);\n// &quot;\u8c03\u7528 shift \u4e4b\u524d: angel,clown,mandarin,surgeon&quot;\n\nvar shifted = myFish.shift();\n\nconsole.log(&#39;\u8c03\u7528 shift \u4e4b\u540e: &#39; + myFish);\n// &quot;\u8c03\u7528 shift \u4e4b\u540e: clown,mandarin,surgeon&quot;\n\nconsole.log(&#39;\u88ab\u5220\u9664\u7684\u5143\u7d20: &#39; + shifted);\n// &quot;\u88ab\u5220\u9664\u7684\u5143\u7d20: angel&quot;</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3st Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=n}}]);