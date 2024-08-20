(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Date/toJSON"],{vcBN:function(t,e){var a='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">en</a></p> <h1 id="dateprototypetojson">Date.prototype.toJSON()</h1> <p>toJSON() \u65b9\u6cd5\u8fd4\u56de Date \u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">dateObj.toJSON()</code></pre> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>Date \u5b9e\u4f8b\u5f15\u7528\u4e00\u4e2a\u5177\u4f53\u7684\u65f6\u95f4\u70b9\u3002 \u8c03\u7528 toJSON() \u8fd4\u56de\u4e00\u4e2a JSON \u683c\u5f0f\u5b57\u7b26\u4e32(\u4f7f\u7528 toISOString())\uff0c\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u8fd9\u4e2a\u65b9\u6cd5\u5e38\u7528\u4e8e JSON\u5e8f\u5217\u5316Date\u5bf9\u8c61\u3002</p> <h2 id="\u6837\u4f8b">\u6837\u4f8b</h2> <p>toJSON() \u6837\u4f8b</p> <pre><code class="language-javascript">var jsonDate = (new Date()).toJSON();\nvar backToDate = new Date(jsonDate);\n\nconsole.log(&quot;Serialized date object: &quot; + jsonDate);</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=a}}]);