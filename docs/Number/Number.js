(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Number/Number"],{SgwB:function(e,p){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">en</a></p> <h1 id="number">Number</h1> <p>JavaScript \u7684 Number \u5bf9\u8c61\u662f\u7ecf\u8fc7\u5c01\u88c5\u7684\u80fd\u8ba9\u4f60\u5904\u7406\u6570\u5b57\u503c\u7684\u5bf9\u8c61\u3002Number \u5bf9\u8c61\u7531 Number() \u6784\u9020\u5668\u521b\u5efa\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">new Number(value);</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>value</code> \u88ab\u521b\u5efa\u5bf9\u8c61\u7684\u6570\u5b57\u503c</li> </ul> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>Number \u5bf9\u8c61\u4e3b\u8981\u7528\u4e8e\uff1a</p> <ul> <li>\u5982\u679c\u53c2\u6570\u65e0\u6cd5\u88ab\u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u5219\u8fd4\u56de NaN</li> <li>\u5728\u975e\u6784\u9020\u5668\u4e0a\u4e0b\u6587\u4e2d (\u5982\uff1a\u6ca1\u6709 new \u64cd\u4f5c\u7b26)\uff0cNumber \u80fd\u88ab\u7528\u6765\u6267\u884c\u7c7b\u578b\u8f6c\u6362</li> </ul> <h2 id="\u5c5e\u6027">\u5c5e\u6027</h2> <p><code>Number.EPSILON</code></p> <p>\u4e24\u4e2a\u53ef\u8868\u793a(representable)\u6570\u4e4b\u95f4\u7684\u6700\u5c0f\u95f4\u9694</p> <p><code>Number.MAX_SAFE_INTEGER</code></p> <p>\u5728 JavaScript \u4e2d\u6700\u5927\u7684\u5b89\u5168\u6574\u6570 (253 - 1)</p> <p><code>Number.MAX_VALUE</code></p> <p>\u80fd\u8868\u793a\u7684\u6700\u5927\u6b63\u6570\u3002\u6700\u5c0f\u7684\u8d1f\u6570\u662f -MAX_VALUE</p> <p><code>Number.MIN_VALUE</code></p> <p>\u80fd\u8868\u793a\u7684\u6700\u5c0f\u6b63\u6570\u5373\u6700\u63a5\u8fd1 0 \u7684\u6b63\u6570 (\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u53d8\u6210 0)\u3002\u6700\u5927\u7684\u8d1f\u6570\u662f -MIN_VALUE</p> <p><code>Number.NaN</code></p> <p>\u7279\u6b8a\u7684\u201c\u975e\u6570\u5b57\u201d\u503c</p> <p><code>Number.NEGATIVE_INFINITY</code></p> <p>\u7279\u6b8a\u7684\u8d1f\u65e0\u7a77\u5927\u503c\uff0c\u5728\u6ea2\u51fa\u65f6\u8fd4\u56de\u8be5\u503c</p> <p><code>Number.POSITIVE_INFINITY</code></p> <p>\u7279\u6b8a\u7684\u6b63\u65e0\u7a77\u5927\u503c\uff0c\u5728\u6ea2\u51fa\u65f6\u8fd4\u56de\u6539\u503c</p> <p><code>Number.prototype</code></p> <p>Number \u5bf9\u8c61\u4e0a\u5141\u8bb8\u7684\u989d\u5916\u5c5e\u6027</p> <h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2> <p><code>Number.isNaN()</code></p> <p>\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u662f NaN</p> <p><code>Number.isFinite()</code></p> <p>\u786e\u5b9a\u4f20\u9012\u7684\u503c\u7c7b\u578b\u53ca\u672c\u8eab\u662f\u5426\u662f\u6709\u9650\u6570</p> <p><code>Number.isInteger()</code></p> <p>\u786e\u5b9a\u4f20\u9012\u7684\u503c\u7c7b\u578b\u662f\u201cnumber\u201d\uff0c\u4e14\u662f\u6574\u6570</p> <p><code>Number.isSafeInteger()</code></p> <p>\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u4e3a\u5b89\u5168\u6574\u6570 ( -(253 - 1) \u81f3 253 - 1\u4e4b\u95f4)</p> <p><code>Number.toInteger()</code></p> <p>\u8ba1\u7b97\u4f20\u9012\u7684\u503c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6574\u6570 (\u6216\u65e0\u7a77\u5927)</p> <p><code>Number.parseFloat()</code></p> <p>\u548c\u5168\u5c40\u5bf9\u8c61 parseFloat() \u4e00\u6837</p> <p><code>Number.parseInt()</code></p> <p>\u548c\u5168\u5c40\u5bf9\u8c61 parseInt() \u4e00\u6837</p> <h2 id="number-\u5b9e\u4f8b">Number \u5b9e\u4f8b</h2> <p>\u6240\u6709 Number \u5b9e\u4f8b\u90fd\u7ee7\u627f\u81ea Number.prototype\u3002\u88ab\u4fee\u6539\u7684 Number \u6784\u9020\u5668\u7684\u539f\u578b\u5bf9\u8c61\u5bf9\u5168\u90e8 Number \u5b9e\u4f8b\u90fd\u751f\u6548\u3002</p> <h3 id="\u65b9\u6cd5-1">\u65b9\u6cd5</h3> <p><code>Number.prototype.toExponential()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u4f7f\u7528\u6307\u6570\u8868\u793a\u6cd5\u8868\u793a\u7684\u8be5\u6570\u503c\u7684\u5b57\u7b26\u4e32\u8868\u793a</p> <p><code>Number.prototype.toFixed()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u4f7f\u7528\u5b9a\u70b9\u8868\u793a\u6cd5\u8868\u793a\u7684\u8be5\u6570\u503c\u7684\u5b57\u7b26\u4e32\u8868\u793a</p> <p><code>Number.prototype.toLocaleString()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u4e0e\u8bed\u8a00\u76f8\u5173\u7684\u8be5\u6570\u503c\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\u3002\u8986\u76d6\u4e86Object.prototype.toLocaleString() \u65b9\u6cd5</p> <p><code>Number.prototype.toPrecision()</code></p> <p>\u4f7f\u7528\u5b9a\u70b9\u8868\u793a\u6cd5\u6216\u6307\u6570\u8868\u793a\u6cd5\u6765\u8868\u793a\u7684\u6307\u5b9a\u663e\u793a\u4f4d\u6570\u7684\u8be5\u6570\u503c\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a</p> <p><code>Number.prototype.toSource()</code></p> <p>\u8fd4\u56de\u8be5\u5bf9\u8c61\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u8868\u793a</p> <p><code>Number.prototype.toString()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u6570\u503c\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6\u4e86 Object.prototype.toString() \u65b9\u6cd5</p> <p><code>Number.prototype.valueOf()</code></p> <p>\u8fd4\u56de\u8be5\u6570\u503c\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002\u8986\u76d6\u4e86 Object.prototype.valueOf() \u65b9\u6cd5</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u4f7f\u7528-number-\u5bf9\u8c61\u7ed9\u6570\u5b57\u53d8\u91cf\u8d4b\u503c">\u4f7f\u7528 Number \u5bf9\u8c61\u7ed9\u6570\u5b57\u53d8\u91cf\u8d4b\u503c</h3> <p>\u4e0b\u4f8b\u4f7f\u7528 Number \u5bf9\u8c61\u7684\u5c5e\u6027\u7ed9\u51e0\u4e2a\u6570\u5b57\u53d8\u91cf\u8d4b\u503c\uff1a</p> <pre><code class="language-javascript">var biggestNum = Number.MAX_VALUE;\nvar smallestNum = Number.MIN_VALUE;\nvar infiniteNum = Number.POSITIVE_INFINITY;\nvar negInfiniteNum = Number.NEGATIVE_INFINITY;\nvar notANum = Number.NaN;</code></pre> <h3 id="\u6574\u6570\u7c7b\u578b\u7684\u8303\u56f4">\u6574\u6570\u7c7b\u578b\u7684\u8303\u56f4</h3> <p>\u4e0b\u4f8b\u5c55\u793a\u4e86Number\u5bf9\u8c61\u6240\u80fd\u8868\u793a\u7684\u6700\u5927\u548c\u6700\u5c0f\u6574\u6570 (\u8be6\u60c5\u8bf7\u53c2\u9605 ECMAScript standard, chapter 8.5 The Number Type):</p> <pre><code class="language-javascript">var biggestInt = 9007199254740992;\nvar smallestInt = -9007199254740992;</code></pre> <p>\u5728\u89e3\u6790\u5e8f\u5217\u5316\u7684JSON\u65f6\uff0c\u5982\u679cJSON\u89e3\u6790\u5668\u5c06\u5b83\u4eec\u5f3a\u5236\u8f6c\u6362\u4e3aNumber\u7c7b\u578b\uff0c\u90a3\u4e48\u8d85\u51fa\u6b64\u8303\u56f4\u7684\u6574\u6570\u503c\u53ef\u80fd\u4f1a\u88ab\u7834\u574f\u3002\u5728\u5de5\u4f5c\u4e2d\u4f7f\u7528String \u7c7b\u578b\u4ee3\u66ff\uff0c\u662f\u4e00\u4e2a\u53ef\u884c\u7684\u89e3\u51b3\u65b9\u6848\u3002</p> <h3 id="\u4f7f\u7528-number-\u8f6c\u6362-date-\u5bf9\u8c61">\u4f7f\u7528 Number \u8f6c\u6362 Date \u5bf9\u8c61</h3> <p>\u4e0b\u4f8b\u4f7f\u7528 Number \u4f5c\u4e3a\u51fd\u6570\u6765\u8f6c\u6362 Date \u5bf9\u8c61\u4e3a\u6570\u5b57\u503c\uff1a</p> <pre><code class="language-javascript">var d = new Date(&quot;December 17, 1995 03:24:00&quot;);\nprint(Number(d));</code></pre> <p>\u8fd9\u5c06\u8f93\u51fa &quot;819199440000&quot;\u3002</p> <h3 id="\u8f6c\u6362\u6570\u5b57\u5b57\u7b26\u4e32\u4e3a\u6570\u5b57">\u8f6c\u6362\u6570\u5b57\u5b57\u7b26\u4e32\u4e3a\u6570\u5b57</h3> <pre><code class="language-javascript">Number(&quot;123&quot;)     // 123\nNumber(&quot;&quot;)        // 0\nNumber(&quot;0x11&quot;)    // 17\nNumber(&quot;0b11&quot;)    // 3\nNumber(&quot;0o11&quot;)    // 9\nNumber(&quot;foo&quot;)     // NaN\nNumber(&quot;100a&quot;)    // NaN</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 1rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';e.exports=t}}]);