(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Number/toString"],{"N+xk":function(t,e){var o='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString" target="_blank">en</a></p> <h1 id="numberprototypetostring">Number.prototype.toString()</h1> <p>toString() \u65b9\u6cd5\u8fd4\u56de\u6307\u5b9a Number \u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">numObj.toString([radix])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>radix</code> \u6307\u5b9a\u8981\u7528\u4e8e\u6570\u5b57\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u7684\u57fa\u6570(\u4ece2\u523036)\u3002\u5982\u679c\u672a\u6307\u5b9a radix \u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u503c\u4e3a 10\u3002</li> </ul> <h3 id="\u5f02\u5e38\u4fe1\u606f">\u5f02\u5e38\u4fe1\u606f</h3> <ul> <li><code>RangeError</code> \u5982\u679c toString() \u7684 radix \u53c2\u6570\u4e0d\u5728 2 \u5230 36 \u4e4b\u95f4\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2a RangeError\u3002</li> </ul> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>Number \u5bf9\u8c61\u8986\u76d6\u4e86 Object \u5bf9\u8c61\u4e0a\u7684 toString() \u65b9\u6cd5\uff0c\u5b83\u4e0d\u662f\u7ee7\u627f\u7684 Object.prototype.toString()\u3002\u5bf9\u4e8e Number \u5bf9\u8c61\uff0ctoString() \u65b9\u6cd5\u4ee5\u6307\u5b9a\u7684\u57fa\u6570\u8fd4\u56de\u8be5\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\u3002</p> <p>\u5982\u679c\u8f6c\u6362\u7684\u57fa\u6570\u5927\u4e8e10\uff0c\u5219\u4f1a\u4f7f\u7528\u5b57\u6bcd\u6765\u8868\u793a\u5927\u4e8e9\u7684\u6570\u5b57\uff0c\u6bd4\u5982\u57fa\u6570\u4e3a16\u7684\u60c5\u51b5\uff0c\u5219\u4f7f\u7528a\u5230f\u7684\u5b57\u6bcd\u6765\u8868\u793a10\u523015\u3002</p> <p>\u5982\u679c\u57fa\u6570\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4f7f\u7528 10\u3002</p> <p>\u5982\u679c\u5bf9\u8c61\u662f\u8d1f\u6570\uff0c\u5219\u4f1a\u4fdd\u7559\u8d1f\u53f7\u3002\u5373\u4f7fradix\u662f2\u65f6\u4e5f\u662f\u5982\u6b64\uff1a\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u5305\u542b\u4e00\u4e2a\u8d1f\u53f7\uff08-\uff09\u524d\u7f00\u548c\u6b63\u6570\u7684\u4e8c\u8fdb\u5236\u8868\u793a\uff0c\u4e0d\u662f \u6570\u503c\u7684\u4e8c\u8fdb\u5236\u8865\u7801\u3002</p> <h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2> <pre><code class="language-javascript">var count = 10;\n\nconsole.log(count.toString());    // \u8f93\u51fa &#39;10&#39;\nconsole.log((17).toString());     // \u8f93\u51fa &#39;17&#39;\nconsole.log((17.2).toString());   // \u8f93\u51fa &#39;17.2&#39;\n\nvar x = 6;\n\nconsole.log(x.toString(2));       // \u8f93\u51fa &#39;110&#39;\nconsole.log((254).toString(16));  // \u8f93\u51fa &#39;fe&#39;\n\nconsole.log((-10).toString(2));   // \u8f93\u51fa &#39;-1010&#39;\nconsole.log((-0xff).toString(2)); // \u8f93\u51fa &#39;-11111111&#39;</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 1rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=o}}]);