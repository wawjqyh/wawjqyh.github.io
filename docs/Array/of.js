(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/of"],{m6Ve:function(e,a){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of" target="_blank">en</a></p> <h1 id="arrayof">Array.of()</h1> <p>Array.of() \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u7684\u65b0\u6570\u7ec4\u5b9e\u4f8b\uff0c\u800c\u4e0d\u8003\u8651\u53c2\u6570\u7684\u6570\u91cf\u6216\u7c7b\u578b\u3002</p> <p>Array.of() \u548c Array \u6784\u9020\u51fd\u6570\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e\u5904\u7406\u6574\u6570\u53c2\u6570\uff1aArray.of(7) \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u5355\u4e2a\u5143\u7d20 7 \u7684\u6570\u7ec4\uff0c\u800c Array(7) \u521b\u5efa\u4e00\u4e2a\u5305\u542b 7 \u4e2a undefined \u5143\u7d20\u7684\u6570\u7ec4\u3002</p> <pre><code class="language-javascript">Array.of(7);       // [7]\nArray.of(1, 2, 3); // [1, 2, 3]\n\nArray(7);          // [ , , , , , , ]\nArray(1, 2, 3);    // [1, 2, 3]</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">Array.of(element0[, element1[, ...[, elementN]]])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>elementN</code> \u4efb\u610f\u4e2a\u53c2\u6570\uff0c\u5c06\u6309\u987a\u5e8f\u6210\u4e3a\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u3002</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u65b0\u7684 Array \u5b9e\u4f8b\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u6b64\u51fd\u6570\u662fECMAScript 2015\u6807\u51c6\u7684\u4e00\u90e8\u5206\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">Array.of(1);         // [1]\nArray.of(1, 2, 3);   // [1, 2, 3]\nArray.of(undefined); // [undefined]</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2017 Draft (ECMA-262)</td> <td align="left">Draft</td> <td align="left"></td> </tr> </tbody></table> ';e.exports=t}}]);