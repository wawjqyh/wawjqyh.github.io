(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/String/replace"],{CPnA:function(t,e){var r='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">en</a></p> <h1 id="stringprototypereplace">String.prototype.replace()</h1> <p>replace() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7531\u66ff\u6362\u503c\u66ff\u6362\u4e00\u4e9b\u6216\u6240\u6709\u5339\u914d\u7684\u6a21\u5f0f\u540e\u7684\u65b0\u5b57\u7b26\u4e32\u3002\u6a21\u5f0f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u8005\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f, \u66ff\u6362\u503c\u53ef\u4ee5\u662f \u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u8005\u4e00\u4e2a\u6bcf\u6b21\u5339\u914d\u90fd\u8981\u8c03\u7528\u7684\u51fd\u6570\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">str.replace(regexp|substr, newSubStr|function)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>regexp (pattern)</code> \u4e00\u4e2a \u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u6216\u8005\u5176\u5b57\u9762\u91cf\u3002\u8be5\u6b63\u5219\u6240\u5339\u914d\u7684\u5185\u5bb9\u4f1a\u88ab\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u8fd4\u56de\u503c\u66ff\u6362\u6389\u3002</li> <li><code>substr (pattern)</code> \u4e00\u4e2a\u8981\u88ab newSubStr \u66ff\u6362\u7684\u5b57\u7b26\u4e32\u3002\u5176\u88ab\u89c6\u4e3a\u4e00\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4ec5\u4ec5\u662f\u7b2c\u4e00\u4e2a\u5339\u914d\u4f1a\u88ab\u66ff\u6362\u3002</li> <li><code>newSubStr (replacement)</code> \u7528\u4e8e\u66ff\u6362\u6389\u7b2c\u4e00\u4e2a\u53c2\u6570\u5728\u539f\u5b57\u7b26\u4e32\u4e2d\u7684\u5339\u914d\u90e8\u5206\u7684 \u5b57\u7b26\u4e32\u3002\u8be5\u5b57\u7b26\u4e32\u4e2d\u53ef\u4ee5\u5185\u63d2\u4e00\u4e9b\u7279\u6b8a\u7684\u53d8\u91cf\u540d\u3002\u53c2\u8003\u4e0b\u9762\u7684\u4f7f\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\u3002</li> <li><code>function (replacement)</code> \u4e00\u4e2a\u7528\u6765\u521b\u5efa\u65b0\u5b50\u5b57\u7b26\u4e32\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5c06\u66ff\u6362\u6389\u7b2c\u4e00\u4e2a\u53c2\u6570\u5339\u914d\u5230\u7684\u7ed3\u679c\u3002\u53c2\u8003\u4e0b\u9762\u7684\u6307\u5b9a\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u3002</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u4e00\u4e2a\u90e8\u5206\u6216\u5168\u90e8\u5339\u914d\u7531\u66ff\u4ee3\u6a21\u5f0f\u6240\u53d6\u4ee3\u7684\u65b0\u7684\u5b57\u7b26\u4e32\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u8be5\u65b9\u6cd5\u5e76\u4e0d\u6539\u53d8\u8c03\u7528\u5b83\u7684\u5b57\u7b26\u4e32\u672c\u8eab\uff0c\u800c\u53ea\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u66ff\u6362\u540e\u7684\u5b57\u7b26\u4e32\u3002</p> <p>\u5728\u8fdb\u884c\u5168\u5c40\u7684\u641c\u7d22\u66ff\u6362\u65f6\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u9700\u5305\u542b g \u6807\u5fd7\u3002</p> <h3 id="\u4f7f\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570">\u4f7f\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570</h3> <p>\u66ff\u6362\u5b57\u7b26\u4e32\u53ef\u4ee5\u63d2\u5165\u4e0b\u9762\u7684\u7279\u6b8a\u53d8\u91cf\u540d\uff1a</p> <table> <thead> <tr> <th align="left">\u53d8\u91cf\u540d</th> <th align="left">\u4ee3\u8868\u7684\u503c</th> </tr> </thead> <tbody><tr> <td align="left">$$</td> <td align="left">\u63d2\u5165\u4e00\u4e2a &quot;$&quot;</td> </tr> <tr> <td align="left">$&amp;</td> <td align="left">\u63d2\u5165\u5339\u914d\u7684\u5b50\u4e32</td> </tr> <tr> <td align="left">$`</td> <td align="left">\u63d2\u5165\u5f53\u524d\u5339\u914d\u7684\u5b50\u4e32\u5de6\u8fb9\u7684\u5185\u5bb9</td> </tr> <tr> <td align="left">$&#39;</td> <td align="left">\u63d2\u5165\u5f53\u524d\u5339\u914d\u7684\u5b50\u4e32\u53f3\u8fb9\u7684\u5185\u5bb9</td> </tr> <tr> <td align="left">$n</td> <td align="left">\u5047\u5982\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f RegExp\u5bf9\u8c61\uff0c\u5e76\u4e14 n \u662f\u4e2a\u5c0f\u4e8e100\u7684\u975e\u8d1f\u6574\u6570\uff0c\u90a3\u4e48\u63d2\u5165\u7b2c n \u4e2a\u62ec\u53f7\u5339\u914d\u7684\u5b57\u7b26\u4e32</td> </tr> </tbody></table> <h3 id="\u6307\u5b9a\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570">\u6307\u5b9a\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570</h3> <p>\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f53\u5339\u914d\u6267\u884c\u540e\uff0c \u8be5\u51fd\u6570\u5c31\u4f1a\u6267\u884c\u3002 \u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u66ff\u6362\u5b57\u7b26\u4e32\u3002 (\u6ce8\u610f: \u4e0a\u9762 \u63d0\u5230\u7684\u7279\u6b8a\u66ff\u6362\u53c2\u6570\u5728\u8fd9\u91cc\u4e0d\u80fd\u88ab\u4f7f\u7528\u3002) \u53e6\u5916\u8981\u6ce8\u610f\u7684\u662f\uff0c \u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c \u5e76\u4e14\u5176\u4e3a\u5168\u5c40\u5339\u914d\u6a21\u5f0f\uff0c \u90a3\u4e48\u8fd9\u4e2a\u65b9\u6cd5 \u5c06\u88ab\u591a\u6b21\u8c03\u7528\uff0c \u6bcf\u6b21\u5339\u914d\u90fd\u4f1a\u88ab\u8c03\u7528\u3002</p> <p>\u4e0b\u9762\u662f\u8be5\u51fd\u6570\u7684\u53c2\u6570\uff1a</p> <table> <thead> <tr> <th align="left">\u53d8\u91cf\u540d</th> <th align="left">\u4ee3\u8868\u7684\u503c</th> </tr> </thead> <tbody><tr> <td align="left">match</td> <td align="left">\u5339\u914d\u7684\u5b50\u4e32\u3002\uff08\u5bf9\u5e94\u4e8e\u4e0a\u8ff0\u7684$&amp;\u3002\uff09</td> </tr> <tr> <td align="left">p1,p2, ...</td> <td align="left">\u5047\u5982replace()\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2aRegExp \u5bf9\u8c61\uff0c\u5219\u4ee3\u8868\u7b2cn\u4e2a\u62ec\u53f7\u5339\u914d\u7684\u5b57\u7b26\u4e32\u3002\uff08\u5bf9\u5e94\u4e8e\u4e0a\u8ff0\u7684$1\uff0c$2\u7b49\u3002\uff09</td> </tr> <tr> <td align="left">offset</td> <td align="left">\u5339\u914d\u5230\u7684\u5b50\u5b57\u7b26\u4e32\u5728\u539f\u5b57\u7b26\u4e32\u4e2d\u7684\u504f\u79fb\u91cf\u3002\uff08\u6bd4\u5982\uff0c\u5982\u679c\u539f\u5b57\u7b26\u4e32\u662f\u201cabcd\u201d\uff0c\u5339\u914d\u5230\u7684\u5b50\u5b57\u7b26\u4e32\u662f\u201cbc\u201d\uff0c\u90a3\u4e48\u8fd9\u4e2a\u53c2\u6570\u5c06\u662f1\uff09</td> </tr> <tr> <td align="left">string</td> <td align="left">\u88ab\u5339\u914d\u7684\u539f\u5b57\u7b26\u4e32</td> </tr> </tbody></table> <p>(\u7cbe\u786e\u7684\u53c2\u6570\u4e2a\u6570\u4f9d\u8d56\u4e8ereplace()\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5426\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\uff0c \u4ee5\u53ca\u8fd9\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u6307\u5b9a\u4e86\u591a\u5c11\u4e2a\u62ec\u53f7\u5b50\u4e32\u3002)</p> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06\u4f1a\u4f7f newString \u53d8\u6210&#39;abc - 12345 - #$*%&#39;\uff1a</p> <pre><code class="language-javascript">function replacer(match, p1, p2, p3, offset, string) {\n  // p1 is nondigits, p2 digits, and p3 non-alphanumerics\n  return [p1, p2, p3].join(&#39; - &#39;);\n}\nvar newString = &#39;abc12345#$*%&#39;.replace(/([^\\d]*)(\\d*)([^\\w]*)/, replacer);</code></pre> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u5728-replace-\u4e2d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f">\u5728 replace() \u4e2d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f</h3> <p>\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0creplace() \u4e2d\u4f7f\u7528\u4e86\u6b63\u5219\u8868\u8fbe\u5f0f\u53ca\u5ffd\u7565\u5927\u5c0f\u5199\u6807\u793a\u3002</p> <pre><code class="language-javascript">var str = &#39;Twas the night before Xmas...&#39;;\nvar newstr = str.replace(/xmas/i, &#39;Christmas&#39;);\nconsole.log(newstr);  // Twas the night before Christmas...</code></pre> <h3 id="\u5728-replace-\u4e2d\u4f7f\u7528-global-\u548c-ignore-\u9009\u9879">\u5728 replace() \u4e2d\u4f7f\u7528 global \u548c ignore \u9009\u9879</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d,\u6b63\u5219\u8868\u8fbe\u5f0f\u5305\u542b\u6709\u5168\u5c40\u66ff\u6362(g)\u548c\u5ffd\u7565\u5927\u5c0f\u5199(i)\u7684\u9009\u9879,\u8fd9\u4f7f\u5f97replace\u65b9\u6cd5\u7528&#39;oranges&#39;\u66ff\u6362\u6389\u4e86\u6240\u6709\u51fa\u73b0\u7684&quot;apples&quot;.</p> <pre><code class="language-javascript">var re = /apples/gi;\nvar str = &quot;Apples are round, and apples are juicy.&quot;;\nvar newstr = str.replace(re, &quot;oranges&quot;);\n\n// oranges are round, and oranges are juicy.\nconsole.log(newstr);</code></pre> <h3 id="\u4ea4\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e24\u4e2a\u5355\u8bcd">\u4ea4\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u4e24\u4e2a\u5355\u8bcd</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u4ea4\u6362\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u4e24\u4e2a\u5355\u8bcd\u7684\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u811a\u672c\u4f7f\u7528$1 \u548c $2 \u4ee3\u66ff\u66ff\u6362\u6587\u672c\u3002</p> <pre><code class="language-javascript">var re = /(\\w+)\\s(\\w+)/;\nvar str = &quot;John Smith&quot;;\nvar newstr = str.replace(re, &quot;$2, $1&quot;);\n// Smith, John\nconsole.log(newstr);</code></pre> <h3 id="\u4f7f\u7528\u884c\u5185\u51fd\u6570\u6765\u4fee\u6539\u5339\u914d\u5230\u7684\u5b57\u7b26">\u4f7f\u7528\u884c\u5185\u51fd\u6570\u6765\u4fee\u6539\u5339\u914d\u5230\u7684\u5b57\u7b26</h3> <p>\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6240\u6709\u51fa\u73b0\u7684\u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u5c0f\u5199\uff0c\u5e76\u4e14\u5728\u5339\u914d\u4f4d\u7f6e\u524d\u52a0\u4e00\u4e2a\u8fde\u5b57\u7b26\u3002\u91cd\u8981\u7684\u662f\uff0c\u5728\u8fd4\u56de\u4e00\u4e2a\u66ff\u6362\u4e86\u7684\u5b57\u7b26\u4e32\u524d\u9700\u8981\u5728\u5339\u914d\u5143\u7d20\u524d\u9700\u8981\u8fdb\u884c\u6dfb\u52a0\u64cd\u4f5c\u3002</p> <p>\u5728\u8fd4\u56de\u524d\uff0c\u66ff\u6362\u51fd\u6570\u5141\u8bb8\u5339\u914d\u7247\u6bb5\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u4e14\u5c06\u5b83\u548c\u8fde\u5b57\u7b26\u8fdb\u884c\u8fde\u63a5\u4f5c\u4e3a\u65b0\u7684\u7247\u6bb5\u3002</p> <pre><code class="language-javascript">function styleHyphenFormat(propertyName) {\n  function upperToHyphenLower(match) {\n    return &#39;-&#39; + match.toLowerCase();\n  }\n  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);\n}</code></pre> <p>\u6b64\u4ee3\u7801 styleHyphenFormat(&#39;borderTop&#39;) \u5c06\u8fd4\u56de &#39;border-top&#39;\u3002</p> <p>\u56e0\u4e3a\u6211\u4eec\u60f3\u5728\u6700\u7ec8\u7684\u66ff\u6362\u4e2d\u8fdb\u4e00\u6b65\u8f6c\u53d8\u5339\u914d\u7ed3\u679c\uff0c\u6240\u4ee5\u6211\u4eec\u5fc5\u987b\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u3002\u8fd9\u8feb\u4f7f\u6211\u4eec\u5728\u4f7f\u7528toLowerCase()\u65b9\u6cd5\u524d\u8fdb\u884c\u8bc4\u4f30\u3002\u5982\u679c \u6211\u4eec\u5c1d\u8bd5\u4e0d\u7528\u4e00\u4e2a\u51fd\u6570\u8fdb\u884c\u5339\u914d\uff0c\u90a3\u4e48\u4f7f\u7528toLowerCase() \u65b9\u6cd5\u5c06\u4e0d\u4f1a\u6709\u6548\u3002</p> <pre><code class="language-javascript">var newString = propertyName.replace(/[A-Z]/g, &#39;-&#39; + &#39;$&amp;&#39;.toLowerCase());  // won&#39;t work</code></pre> <p>\u8fd9\u662f\u56e0\u4e3a &#39;$&amp;&#39;.toLowerCase() \u4f1a\u5148\u88ab\u89e3\u6790\u6210\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\uff08\u8fd9\u4f1a\u5bfc\u81f4\u76f8\u540c\u7684&#39;$&amp;&#39;)\u800c\u4e0d\u662f\u5f53\u4f5c\u4e00\u4e2a\u6a21\u5f0f\u3002</p> <h3 id="\u5c06\u534e\u6c0f\u6e29\u5ea6\u8f6c\u6362\u4e3a\u5bf9\u7b49\u7684\u6444\u6c0f\u6e29\u5ea6">\u5c06\u534e\u6c0f\u6e29\u5ea6\u8f6c\u6362\u4e3a\u5bf9\u7b49\u7684\u6444\u6c0f\u6e29\u5ea6</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u5982\u4f55\u5c06\u534e\u6c0f\u6e29\u5ea6\u8f6c\u6362\u4e3a\u5bf9\u7b49\u7684\u6444\u6c0f\u6e29\u5ea6\u3002\u534e\u6c0f\u6e29\u5ea6\u7528\u4e00\u4e2a\u6570\u5b57\u52a0\u4e00\u4e2a&quot;F&quot;\u6765\u8868\u793a\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c06\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u52a0&quot;C&quot;\u6765\u8868\u793a\u7684 \u6444\u6c0f\u6e29\u5ea6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8f93\u5165\u662f212F\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c06\u8fd4\u56de100C\u3002\u5982\u679c\u8f93\u5165\u6570\u5b57\u65f60F\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5c06\u8fd4\u56de&quot;-17.77777777777778C&quot;\u3002</p> <p>\u6b63\u5219\u8868\u8fbe\u5f0ftest\u68c0\u67e5\u4efb\u4f55\u6570\u5b57\u662f\u5426\u4ee5 F \u7ed3\u5c3e\u3002\u534e\u6c0f\u6e29\u5ea6\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570p1\u8fdb\u5165\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u57fa\u4e8e\u534e\u6c0f\u6e29\u5ea6\u4f5c\u4e3a\u5b57\u7b26\u4e32\u4f20\u9012\u7ed9f2c\u51fd\u6570\u8bbe \u7f6e\u6210\u6444\u6c0f\u6e29\u5ea6\u3002\u7136\u540ef2c()\u8fd4\u56de\u6444\u6c0f\u6e29\u5ea6\u3002\u8fd9\u4e2a\u51fd\u6570\u4e0ePerl\u7684 s///e \u6807\u5fd7\u76f8\u4f3c\u3002</p> <pre><code class="language-javascript">function f2c(x)\n{\n  function convert(str, p1, offset, s)\n  {\n    return ((p1-32) * 5/9) + &quot;C&quot;;\n  }\n  var s = String(x);\n  var test = /(\\d+(?:\\.\\d*)?)F\\b/g;\n  return s.replace(test, convert);\n}</code></pre> <h3 id="\u4f7f\u7528\u884c\u5185\u51fd\u6570\u548c\u6b63\u5219\u6765\u907f\u514d\u5faa\u73af">\u4f7f\u7528\u884c\u5185\u51fd\u6570\u548c\u6b63\u5219\u6765\u907f\u514d\u5faa\u73af</h3> <p>\u4e0b\u4f8b\u628a\u67d0\u79cd\u6a21\u5f0f\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u6570\u7ec4\uff08\u5176\u5143\u7d20\u4e3a\u5bf9\u8c61\uff09\u3002</p> <p><strong>\u8f93\u5165\uff1a</strong></p> <p>\u4e00\u4e2a\u7531 x\uff0c- \u548c _ \u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002</p> <pre><code class="language-javascript">x-x_\n\n---x---x---x---\n\n-xxx-xx-x-\n\n_x_x___x___x___</code></pre> <p><strong>\u8f93\u51fa\uff1a</strong></p> <p>\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\u3002&#39;x&#39; \u4ea7\u751f\u4e00\u4e2a &#39;on&#39; \u72b6\u6001\uff0c&#39;-&#39;\uff08\u8fde\u63a5\u7b26\uff09\u4ea7\u751f\u4e00\u4e2a &#39;off&#39; \u72b6\u6001\uff0c\u800c &#39;_&#39; \uff08\u4e0b\u5212\u7ebf\uff09\u8868\u793a &#39;on&#39; \u72b6\u6001\u7684\u957f\u5ea6\u3002</p> <pre><code class="language-javascript">[\n  { on: true, length: 1 },\n  { on: false, length: 1 },\n  { on: true, length: 2 }\n  ...\n]</code></pre> <p><strong>\u4ee3\u7801\u7247\u6bb5\uff1a</strong></p> <pre><code class="language-javascript">var str = &#39;x-x_&#39;;\nvar retArr = [];\nstr.replace(/(x_*)|(-)/g, function(match, p1, p2){\n  if(p1) retArr.push({ on: true, length: p1.length });\n  if(p2) retArr.push({ on: false, length: 1 });\n});\n\nconsole.log(retArr);</code></pre> <p>\u8be5\u4ee3\u7801\u7247\u6bb5\u751f\u6210\u4e86\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u4e09\u4e2a\u671f\u671b\u683c\u5f0f\u7684\u5bf9\u8c61\uff0c\u907f\u514d\u4e86\u4f7f\u7528 for \u5faa\u73af\u8bed\u53e5\u3002</p> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=r}}]);