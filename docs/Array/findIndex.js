(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/findIndex"],{LuCL:function(e,n){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">en</a></p> <h1 id="arrayprototypefindindex">Array.prototype.findIndex()</h1> <p>findIndex()\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u3002\u5426\u5219\u8fd4\u56de-1\u3002</p> <pre><code class="language-javascript">function isBigEnough(element) {\n  return element &gt;= 15;\n}\n\n[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3</code></pre> <p>\u53e6\u8bf7\u53c2\u89c1 find() \u65b9\u6cd5\uff0c\u5b83\u8fd4\u56de\u6570\u7ec4\u4e2d\u627e\u5230\u7684\u5143\u7d20\u7684\u503c\uff0c\u800c\u4e0d\u662f\u5176\u7d22\u5f15\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.findIndex(callback[, thisArg])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>callback</code> \u9488\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20, \u90fd\u4f1a\u6267\u884c\u8be5\u56de\u8c03\u51fd\u6570, \u6267\u884c\u65f6\u4f1a\u81ea\u52a8\u4f20\u5165\u4e0b\u9762\u4e09\u4e2a\u53c2\u6570:<ul> <li><code>element</code> \u5f53\u524d\u5143\u7d20.</li> <li><code>index</code> \u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15.</li> <li><code>array</code> \u8c03\u7528findIndex\u7684\u6570\u7ec4.</li> </ul> </li> <li><code>thisArg \u53ef\u9009</code> \u6267\u884c callback \u65f6\u4f5c\u4e3a this\u5bf9\u8c61 \u7684\u503c.</li> </ul> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>findIndex() \u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\u76f4\u81f3\u6709\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u8fd4\u56de\u771f\u503c \u3002\u5982\u679c\u627e\u5230\u4e86\u4e00\u4e2a\u8fd9\u6837\u7684\u5143\u7d20\uff0c \u5219 findIndex \u5c06\u4f1a\u7acb\u523b\u8fd4\u56de\u8fd9\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u3002\u5426\u5219 findIndex \u5c06\u4f1a\u8fd4\u56de -1\u3002\u56de\u8c03\u51fd\u6570\u53ea\u6709\u5728\u6570\u7ec4\u7684\u7d22\u5f15\u88ab\u5206\u914d\u503c\u7684\u65f6\u5019\u624d\u4f1a\u88ab\u8c03\u7528\uff0c\u82e5\u662f\u7d22\u5f15\u88ab\u5220\u9664 \u6216\u8005\u6ca1\u6709\u88ab\u8d4b\u503c\u5c06\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002</p> <p>\u56de\u8c03\u51fd\u6570\u8c03\u7528\u65f6\u6709\u4e09\u4e2a\u53c2\u6570\uff1a\u5143\u7d20\u7684\u503c\uff0c\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u4ee5\u53ca\u88ab\u904d\u5386\u7684\u6570\u7ec4\u3002</p> <p>\u5982\u679c\u4e00\u4e2a thisArg \u53c2\u6570\u88ab\u63d0\u4f9b\u7ed9 findIndex, \u5b83\u5c06\u4f1a\u88ab\u5f53\u4f5c this \u4f7f\u7528\u5728\u6bcf\u6b21\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u7684\u65f6\u5019\u3002\u5982\u679c\u6ca1\u6709\u88ab\u63d0\u4f9b\uff0c\u5c06\u4f1a\u4f7f\u7528undefined\u3002</p> <p>findIndex \u4e0d\u4f1a\u4fee\u6539\u6240\u8c03\u7528\u7684\u6570\u7ec4\u3002</p> <p>\u5728\u7b2c\u4e00\u6b21\u8c03\u7528callback\u51fd\u6570\u65f6\u4f1a\u786e\u5b9a\u5143\u7d20\u7684\u7d22\u5f15\u8303\u56f4\uff0c\u56e0\u6b64\u5728findIndex\u65b9\u6cd5\u5f00\u59cb\u6267\u884c\u4e4b\u540e\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u65b0\u5143\u7d20\u5c06\u4e0d\u4f1a\u88abcallback\u51fd\u6570\u8bbf \u95ee\u5230\u3002\u5982\u679c\u6570\u7ec4\u4e2d\u4e00\u4e2a\u5c1a\u672a\u88abcallback\u51fd\u6570\u8bbf\u95ee\u5230\u7684\u5143\u7d20\u7684\u503c\u88abcallback\u51fd\u6570\u6240\u6539\u53d8\uff0c\u90a3\u4e48\u5f53callback\u51fd\u6570\u8bbf\u95ee\u5230\u5b83\u65f6\uff0c\u5b83\u7684\u503c\u662f\u5c06\u662f\u6839 \u636e\u5b83\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u6240\u8bbf\u95ee\u5230\u7684\u5f53\u524d\u503c\u3002\u88ab\u5220\u9664\u7684\u5143\u7d20\u4e0d\u4f1a\u88ab\u8bbf\u95ee\u5230\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <p>\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u67e5\u627e\u4e00\u4e2a\u6570\u7ec4\u4e2d\u9996\u4e2a\u8d28\u6570\u5143\u7d20\u7684\u7d22\u5f15, \u627e\u4e0d\u5230\u5219\u8fd4\u56de -1.</p> <pre><code class="language-javascript">function isPrime(element, index, array) {\n    var start = 2;\n    while (start &lt;= Math.sqrt(element)) {\n        if (element % start++ &lt; 1) return false;\n    }\n    return (element &gt; 1);\n}\n\nconsole.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, \u6ca1\u627e\u5230\u8d28\u6570\u5143\u7d20\nconsole.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> </tbody></table> ';e.exports=t}}]);