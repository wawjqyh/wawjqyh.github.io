(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/reduceRight"],{"4Kxm":function(t,e){var r='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight" target="_blank">en</a></p> <h1 id="arrayprototypereduceright">Array.prototype.reduceRight()</h1> <h2 id="\u6982\u8ff0">\u6982\u8ff0</h2> <p>reduceRight() \u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u7d2f\u52a0\u5668\uff08accumulator\uff09\uff0c\u8ba9\u6bcf\u4e2a\u503c\uff08\u4ece\u53f3\u5230\u5de6\uff0c\u4ea6\u5373\u4ece\u5c3e\u5230\u5934\uff09\u7f29\u51cf\u4e3a\u4e00\u4e2a\u503c\u3002\uff08\u4e0e reduce() \u7684\u6267\u884c\u65b9\u5411\u76f8\u53cd\uff09</p> <pre><code class="language-javascript">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {\n    return a.concat(b);\n}, []);\n\n// flattened is [4, 5, 2, 3, 0, 1]</code></pre> <p>\u5bf9\u4e8e\u4ece\u5de6\u81f3\u53f3\u904d\u5386\u7684\u76f8\u4f3c\u65b9\u6cd5\u8bf7\u53c2\u9605 Array.prototype.reduce().</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.reduceRight(callback[, initialValue])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>callback</code> \u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u7528\u6765\u64cd\u4f5c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u53ef\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\uff1a<ul> <li><code>previousValue</code> \u4e0a\u4e00\u6b21\u8c03\u7528\u56de\u8c03\u7684\u8fd4\u56de\u503c\uff0c\u6216\u63d0\u4f9b\u7684 initialValue</li> <li><code>currentValue</code> \u5f53\u524d\u88ab\u5904\u7406\u7684\u5143\u7d20</li> <li><code>index</code> \u5f53\u524d\u5904\u7406\u5143\u7d20\u7684\u7d22\u5f15</li> <li><code>array</code> \u8c03\u7528 reduce \u7684\u6570\u7ec4</li> </ul> </li> <li><code>initialValue</code> \u53ef\u4f5c\u4e3a\u7b2c\u4e00\u6b21\u8c03\u7528\u56de\u8c03 callback \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u6267\u884c\u4e4b\u540e\u7684\u8fd4\u56de\u503c</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>reduceRight \u4e3a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528\u4e00\u6b21 callback \u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f\u6570\u7ec4\u4e2d\u88ab\u5220\u9664\u7684\u7d22\u5f15\u6216\u4ece\u672a\u88ab\u8d4b\u503c\u7684\u7d22\u5f15\u4f1a\u8df3\u8fc7\u3002\u56de\u8c03\u51fd\u6570\u63a5\u53d7\u56db\u4e2a \u53c2\u6570\uff1a\u521d\u59cb\u503c\uff08\u6216\u4e0a\u6b21\u8c03\u7528\u56de\u8c03\u7684\u8fd4\u56de\u503c\uff09\u3001\u5f53\u524d\u5143\u7d20\u503c\u3001\u5f53\u524d\u7d22\u5f15\uff0c\u4ee5\u53ca\u8c03\u7528 reduce \u7684\u6570\u7ec4\u3002</p> <p>\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u8c03\u7528 reduceRight \u7684\u56de\u8c03\u51fd\u6570 callback\uff1a</p> <pre><code class="language-javascript">array.reduceRight(function(previousValue, currentValue, index, array) {\n    // ...\n});</code></pre> <p>\u9996\u6b21\u8c03\u7528\u56de\u8c03\u51fd\u6570\u65f6\uff0cpreviousValue \u548c currentValue \u53ef\u4ee5\u662f\u4e24\u4e2a\u503c\u4e4b\u4e00\u3002\u5982\u679c\u8c03\u7528 reduceRight \u65f6\u63d0\u4f9b\u4e86 initialValue \u53c2\u6570\uff0c \u5219 previousValue \u7b49\u4e8e initialValue\uff0ccurrentValue \u7b49\u4e8e\u6570\u7ec4\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u503c\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b initialValue \u53c2\u6570\uff0c\u5219 previousValue \u7b49\u4e8e\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u503c\uff0c currentValue \u7b49\u4e8e\u6570\u7ec4\u4e2d\u5012\u6570\u7b2c\u4e8c\u4e2a\u503c\u3002</p> <p>\u5982\u679c\u6570\u7ec4\u4e3a\u7a7a\uff0c\u4e14\u6ca1\u6709\u63d0\u4f9b initialValue \u53c2\u6570\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2a TypeError \u9519\u8bef\u3002\u5982\u679c\u6570\u7ec4\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u4e14\u6ca1\u6709\u63d0\u4f9b initialValue \u53c2\u6570\uff0c \u6216\u8005\u63d0\u4f9b\u4e86 initialValue \u53c2\u6570\uff0c\u4f46\u662f\u6570\u7ec4\u4e3a\u7a7a\u5c06\u4f1a\u76f4\u63a5\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u90a3\u4e00\u4e2a\u5143\u7d20\u6216 initialValue \u53c2\u6570\uff0c\u800c\u4e0d\u4f1a\u8c03\u7528 callback\u3002</p> <p>\u8be5\u51fd\u6570\u7684\u5b8c\u6574\u6267\u884c\u8fc7\u7a0b\u89c1\u4e0b\u4f8b\uff1a</p> <pre><code class="language-javascript">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {\n    return previousValue + currentValue;\n});</code></pre> <p>\u56de\u8c03\u5c06\u4f1a\u88ab\u8c03\u7528\u56db\u6b21\uff0c\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u53ca\u8fd4\u56de\u503c\u5982\u4e0b\uff1a</p> <table> <thead> <tr> <th align="center">accumulator</th> <th align="center">currentValue</th> <th align="center">index</th> <th align="center">array</th> <th align="center">return</th> <th align="center">value</th> </tr> </thead> <tbody><tr> <td align="center">first call</td> <td align="center">4</td> <td align="center">3</td> <td align="center">3</td> <td align="center">[0,1,2,3,4]</td> <td align="center">7</td> </tr> <tr> <td align="center">second call</td> <td align="center">7</td> <td align="center">2</td> <td align="center">2</td> <td align="center">[0,1,2,3,4]</td> <td align="center">9</td> </tr> <tr> <td align="center">third call</td> <td align="center">9</td> <td align="center">1</td> <td align="center">1</td> <td align="center">[0,1,2,3,4]</td> <td align="center">10</td> </tr> <tr> <td align="center">fourth call</td> <td align="center">10</td> <td align="center">0</td> <td align="center">0</td> <td align="center">[0,1,2,3,4]</td> <td align="center">10</td> </tr> </tbody></table> <p>reduceRight \u8fd4\u56de\u503c\u662f\u6700\u540e\u4e00\u6b21\u8c03\u7528\u56de\u8c03\u7684\u8fd4\u56de\u503c\uff0810\uff09\u3002</p> <p>\u5982\u679c\u63d0\u4f9b\u4e86\u4e00\u4e2a initialValue \u53c2\u6570\uff0c\u5219\u7ed3\u679c\u5982\u4e0b\uff1a</p> <pre><code class="language-javascript">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {\n    return previousValue + currentValue;\n}, 10);</code></pre> <table> <thead> <tr> <th align="center">accumulator</th> <th align="center">currentValue</th> <th align="center">index</th> <th align="center">array</th> <th align="center">return</th> <th align="center">value</th> </tr> </thead> <tbody><tr> <td align="center">first call</td> <td align="center">10</td> <td align="center">4</td> <td align="center">4</td> <td align="center">[0,1,2,3,4]</td> <td align="center">14</td> </tr> <tr> <td align="center">second call</td> <td align="center">14</td> <td align="center">3</td> <td align="center">3</td> <td align="center">[0,1,2,3,4]</td> <td align="center">17</td> </tr> <tr> <td align="center">third call</td> <td align="center">17</td> <td align="center">2</td> <td align="center">2</td> <td align="center">[0,1,2,3,4]</td> <td align="center">19</td> </tr> <tr> <td align="center">fourth call</td> <td align="center">19</td> <td align="center">1</td> <td align="center">1</td> <td align="center">[0,1,2,3,4]</td> <td align="center">20</td> </tr> <tr> <td align="center">fifth call</td> <td align="center">20</td> <td align="center">0</td> <td align="center">0</td> <td align="center">[0,1,2,3,4]</td> <td align="center">20</td> </tr> </tbody></table> <p>reduceRight \u8fd4\u56de\u503c\u4e3a 20\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u6c42\u4e00\u4e2a\u6570\u7ec4\u4e2d\u6240\u6709\u503c\u7684\u548c">\u6c42\u4e00\u4e2a\u6570\u7ec4\u4e2d\u6240\u6709\u503c\u7684\u548c</h3> <pre><code class="language-javascript">var total = [0, 1, 2, 3].reduceRight(function(a, b) {\n    return a + b;\n});\n// total == 6</code></pre> <h3 id="\u6241\u5e73\u5316\uff08flatten\uff09\u4e00\u4e2a\u5143\u7d20\u4e3a\u6570\u7ec4\u7684\u6570\u7ec4">\u6241\u5e73\u5316\uff08flatten\uff09\u4e00\u4e2a\u5143\u7d20\u4e3a\u6570\u7ec4\u7684\u6570\u7ec4</h3> <pre><code class="language-javascript">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {\n    return a.concat(b);\n}, []);\n// flattened is [4, 5, 2, 3, 0, 1]</code></pre> <h3 id="reduce-\u4e0e-reduceright-\u4e4b\u95f4\u7684\u533a\u522b">reduce \u4e0e reduceRight \u4e4b\u95f4\u7684\u533a\u522b</h3> <pre><code class="language-javascript">var a = [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;];\nvar left  = a.reduce(function(prev, cur)      { return prev + cur; });\nvar right = a.reduceRight(function(prev, cur) { return prev + cur; });\n\nconsole.log(left);  // &quot;12345&quot;\nconsole.log(right); // &quot;54321&quot;</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=r}}]);