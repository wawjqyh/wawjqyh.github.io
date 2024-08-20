(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Number/isNaN"],{mvN1:function(N,a){var e='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank">en</a></p> <h1 id="numberisnan">Number.isNaN()</h1> <p>Number.isNaN() \u65b9\u6cd5\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u4e3a NaN\u548c\u5176\u7c7b\u578b\u662f Number\u3002\u5b83\u662f\u539f\u59cb\u7684\u5168\u5c40isNaN()\u7684\u66f4\u5f3a\u5927\u7684\u7248\u672c\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">Number.isNaN(value)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>value</code> \u8981\u88ab\u68c0\u6d4b\u662f\u5426\u662f NaN \u7684\u503c</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u662f NaN\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u5728 JavaScript \u4e2d\uff0cNaN \u6700\u7279\u6b8a\u7684\u5730\u65b9\u5c31\u662f\uff0c\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u76f8\u7b49\u8fd0\u7b97\u7b26\uff08== \u548c ===\uff09\u6765\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u662f NaN\uff0c\u56e0\u4e3a NaN == NaN \u548c NaN === NaN \u90fd\u4f1a\u8fd4\u56de false\u3002\u56e0\u6b64\uff0c\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u5224\u65ad\u503c\u662f\u5426\u662f NaN \u7684\u65b9\u6cd5\u3002</p> <p>\u548c\u5168\u5c40\u51fd\u6570 isNaN() \u76f8\u6bd4\uff0c\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u5f3a\u5236\u5c06\u53c2\u6570\u8f6c\u6362\u6210\u6570\u5b57\uff0c\u53ea\u6709\u5728\u53c2\u6570\u662f\u771f\u6b63\u7684\u6570\u5b57\u7c7b\u578b\uff0c\u4e14\u503c\u4e3a NaN \u7684\u65f6\u5019\u624d\u4f1a\u8fd4\u56de true\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">Number.isNaN(NaN);        // true\nNumber.isNaN(Number.NaN); // true\nNumber.isNaN(0 / 0)       // true\n\n// \u4e0b\u9762\u8fd9\u51e0\u4e2a\u5982\u679c\u4f7f\u7528\u5168\u5c40\u7684 isNaN() \u65f6\uff0c\u4f1a\u8fd4\u56de true\u3002\nNumber.isNaN(&quot;NaN&quot;);      // false\uff0c\u5b57\u7b26\u4e32 &quot;NaN&quot; \u4e0d\u4f1a\u88ab\u9690\u5f0f\u8f6c\u6362\u6210\u6570\u5b57 NaN\u3002\nNumber.isNaN(undefined);  // false\nNumber.isNaN({});         // false\nNumber.isNaN(&quot;blabla&quot;);   // false\n\n// \u4e0b\u9762\u7684\u90fd\u8fd4\u56de false\nNumber.isNaN(true);\nNumber.isNaN(null);\nNumber.isNaN(37);\nNumber.isNaN(&quot;37&quot;);\nNumber.isNaN(&quot;37.37&quot;);\nNumber.isNaN(&quot;&quot;);\nNumber.isNaN(&quot; &quot;);</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> </tbody></table> ';N.exports=e}}]);