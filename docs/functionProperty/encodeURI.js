(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/functionProperty/encodeURI"],{YpqH:function(t,e){var d='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" target="_blank">en</a></p> <h1 id="encodeuri">encodeURI</h1> <p>encodeURI() \u662f\u5bf9\u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26\uff08URI\uff09\u8fdb\u884c\u7f16\u7801\u7684\u65b9\u6cd5\u3002\u5b83\u4f7f\u75281\u52304\u4e2a\u8f6c\u4e49\u5e8f\u5217\u6765\u8868\u793a\u6bcf\u4e2a\u5b57\u7b26\u7684UTF-8\u7f16\u7801\uff08\u53ea\u6709\u7531\u4e24\u4e2a\u4ee3\u7406\u5b57\u7b26 \u533a\u7ec4\u6210\u7684\u5b57\u7b26\u624d\u7528\u56db\u4e2a\u8f6c\u4e49\u5b57\u7b26\u7f16\u7801\uff09\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <p><code>encodeURI(URI)</code></p> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>URI</code> \u4e00\u4e2a\u5b8c\u6574\u7684URI.</li> </ul> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u5047\u5b9a\u4e00\u4e2aURI\u662f\u5b8c\u6574\u7684URI\uff0c\u90a3\u4e48\u65e0\u9700\u5bf9\u90a3\u4e9b\u4fdd\u7559\u7684\u5e76\u4e14\u5728URI\u4e2d\u6709\u7279\u6b8a\u610f\u601d\u7684\u5b57\u7b26\u8fdb\u884c\u7f16\u7801\u3002</p> <p>encodeURI \u4f1a\u66ff\u6362\u6240\u6709\u7684\u5b57\u7b26\uff0c\u4f46\u4e0d\u5305\u62ec\u4ee5\u4e0b\u5b57\u7b26\uff0c\u5373\u4f7f\u5b83\u4eec\u5177\u6709\u9002\u5f53\u7684UTF-8\u8f6c\u4e49\u5e8f\u5217\uff1a</p> <table> <thead> <tr> <th align="left">\u7c7b\u578b</th> <th align="left">\u5305\u542b</th> </tr> </thead> <tbody><tr> <td align="left">\u4fdd\u7559\u5b57\u7b26</td> <td align="left">; , / ? : @ &amp; = + $</td> </tr> <tr> <td align="left">\u975e\u8f6c\u4e49\u7684\u5b57\u7b26</td> <td align="left">\u5b57\u6bcd \u6570\u5b57 - _ . ! ~ * &#39; ( )</td> </tr> <tr> <td align="left">\u6570\u5b57\u7b26\u53f7</td> <td align="left">#</td> </tr> </tbody></table> <p>\u8bf7\u6ce8\u610f\uff0cencodeURI \u81ea\u8eab\u65e0\u6cd5\u4ea7\u751f\u80fd\u9002\u7528\u4e8eHTTP GET \u6216 POST \u8bf7\u6c42\u7684URI\uff0c\u4f8b\u5982\u5bf9\u4e8e XMLHTTPRequests, \u56e0\u4e3a &quot;&amp;&quot;, &quot;+&quot;, \u548c &quot;=&quot; \u4e0d\u4f1a \u88ab\u7f16\u7801\uff0c\u7136\u800c\u5728 GET \u548c POST \u8bf7\u6c42\u4e2d\u5b83\u4eec\u662f\u7279\u6b8a\u5b57\u7b26\u3002\u7136\u800cencodeURIComponent\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5bf9\u8fd9\u4e9b\u5b57\u7b26\u7f16\u7801\u3002</p> <p>\u53e6\u5916\uff0c\u5982\u679c\u8bd5\u56fe\u7f16\u7801\u4e00\u4e2a\u975e\u9ad8-\u4f4e\u4f4d\u5b8c\u6574\u7684\u4ee3\u7406\u5b57\u7b26\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2a URIError \u9519\u8bef\uff0c\u4f8b\u5982\uff1a</p> <pre><code class="language-javascript">// \u7f16\u7801\u9ad8-\u4f4e\u4f4d\u5b8c\u6574\u5b57\u7b26 ok\nconsole.log(encodeURI(&#39;\\uD800\\uDFFF&#39;));\n\n// \u7f16\u7801\u5355\u72ec\u7684\u9ad8\u4f4d\u5b57\u7b26\u629b\u51fa &quot;Uncaught URIError: URI malformed&quot;\nconsole.log(encodeURI(&#39;\\uD800&#39;));\n\n// \u7f16\u7801\u5355\u72ec\u7684\u4f4e\u4f4d\u5b57\u7b26\u629b\u51fa &quot;Uncaught URIError: URI malformed&quot;\nconsole.log(encodeURI(&#39;\\uDFFF&#39;));</code></pre> <p>\u5e76\u4e14\u9700\u8981\u6ce8\u610f\uff0c\u5982\u679cURL\u9700\u8981\u9075\u5faa\u8f83\u65b0\u7684RFC3986\u6807\u51c6\uff0c\u90a3\u4e48\u65b9\u62ec\u53f7\u662f\u88ab\u4fdd\u7559\u7684(\u7ed9IPv6)\uff0c\u56e0\u6b64\u5bf9\u4e8e\u90a3\u4e9b\u6ca1\u6709\u88ab\u7f16\u7801\u7684URL\u90e8\u5206(\u4f8b\u5982\u4e3b\u673a)\uff0c \u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\uff1a</p> <pre><code class="language-javascript">function fixedEncodeURI (str) {\n    return encodeURI(str).replace(/%5B/g, &#39;[&#39;).replace(/%5D/g, &#39;]&#39;);\n}</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3st Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=d}}]);