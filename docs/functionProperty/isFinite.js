(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/functionProperty/isFinite"],{keoA:function(t,i){var e='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite" target="_blank">en</a></p> <h1 id="isfinite">isFinite()</h1> <h2 id="\u6982\u8ff0">\u6982\u8ff0</h2> <p>\u8be5\u5168\u5c40 isFinite() \u51fd\u6570\u7528\u6765\u5224\u65ad\u88ab\u4f20\u5165\u7684\u53c2\u6570\u503c\u662f\u5426\u4e3a\u4e00\u4e2a\u6709\u9650\u6570\u503c\uff08finite number\uff09\u3002\u5728\u5fc5\u8981\u60c5\u51b5\u4e0b\uff0c\u53c2\u6570\u4f1a\u9996\u5148\u8f6c\u4e3a\u4e00\u4e2a\u6570\u503c\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <p><code>isFinite(testValue)</code></p> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>testValue</code> \u7528\u4e8e\u68c0\u6d4b\u6709\u9650\u6027\uff08finiteness\uff09\u7684\u503c\u3002</li> </ul> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>isFinite \u662f\u5168\u5c40\u7684\u65b9\u6cd5\uff0c\u4e0d\u4e0e\u4efb\u4f55\u5bf9\u8c61\u6709\u5173\u7cfb\u3002</p> <p>\u4f60\u53ef\u4ee5\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6765\u5224\u5b9a\u4e00\u4e2a\u6570\u5b57\u662f\u5426\u662f\u6709\u9650\u6570\u5b57\u3002isFinite \u65b9\u6cd5\u68c0\u6d4b\u5b83\u53c2\u6570\u7684\u6570\u503c\u3002\u5982\u679c\u53c2\u6570\u662f NaN\uff0c\u6b63\u65e0\u7a77\u5927\u6216\u8005\u8d1f\u65e0\u7a77\u5927\uff0c\u4f1a\u8fd4\u56defalse\uff0c\u5176\u4ed6\u8fd4\u56de true\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">isFinite(Infinity);  // false\nisFinite(NaN);       // false\nisFinite(-Infinity); // false\n\nisFinite(0);         // true\nisFinite(2e64);      // true, \u5728\u66f4\u5f3a\u58ee\u7684Number.isInfite(null)\u4e2d\u5c06\u4f1a\u5f97\u5230false\n\n\nisFinite(&quot;0&quot;);       // true, \u5728\u66f4\u5f3a\u58ee\u7684Number.isInfite(&#39;0&#39;)\u4e2d\u5c06\u4f1a\u5f97\u5230false</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=e}}]);