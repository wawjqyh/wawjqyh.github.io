(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Object/isPrototypeOf"],{rZ06:function(t,e){var o='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" target="_blank">en</a></p> <h1 id="objectprototypeisprototypeof">Object.prototype.isPrototypeOf()</h1> <p>isPrototypeOf() \u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002</p> <p><code>Note: isPrototypeOf() \u4e0e instanceof \u8fd0\u7b97\u7b26\u4e0d\u540c\u3002\u5728\u8868\u8fbe\u5f0f &quot;object instanceof AFunction&quot;\u4e2d\uff0c\u5bf9\u8c61\u539f\u578b\u94fe\u662f\u9488\u5bf9 AFunction.prototype \u8fdb\u884c\u68c0\u67e5\u7684\uff0c\u800c\u4e0d\u662f\u9488\u5bf9 AFunction \u672c\u8eab\u3002</code></p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">prototypeObj.isPrototypeOf(object)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>object</code> \u5728\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u641c\u5bfb</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>Boolean\uff0c\u8868\u793a\u8c03\u7528\u5bf9\u8c61\u662f\u5426\u5728\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>isPrototypeOf \u65b9\u6cd5\u5141\u8bb8\u4f60\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002</p> <p>\u4f8b\u5982\uff0c\u8003\u8651\u4e0b\u9762\u7684\u539f\u578b\u94fe\uff1a</p> <pre><code class="language-javascript">function Fee() {\n  // . . .\n}\n\nfunction Fi() {\n  // . . .\n}\nFi.prototype = new Fee();\n\nfunction Fo() {\n  // . . .\n}\nFo.prototype = new Fi();\n\nfunction Fum() {\n  // . . .\n}\nFum.prototype = new Fo();</code></pre> <p>\u4e0b\u9762\u521b\u5efa\u4e00\u4e2a Fum \u5b9e\u4f8b\uff0c\u68c0\u6d4b Fi.prototype \u662f\u5426\u5b58\u5728\u4e8e\u8be5\u5b9e\u4f8b\u7684\u539f\u578b\u94fe\u4e0a\u3002</p> <pre><code class="language-javascript">var fum = new Fum();\n. . .\n\nif (Fi.prototype.isPrototypeOf(fum)) {\n  // do something safe\n}</code></pre> <p>\u5f53\u9700\u8981\u5224\u65ad\u5bf9\u8c61\u7684\u540e\u4ee3\u662f\u5426\u5728\u7279\u5b9a\u539f\u578b\u94fe\u4e0a\uff0c\u4f8b\u5982\uff0c\u4ee5\u4fdd\u8bc1\u4e00\u5b9a\u7684\u65b9\u6cd5\u6216\u5c5e\u6027\u5c06\u5b58\u5728\u8be5\u5bf9\u8c61\u4e0a\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u7528\u5230 instanceof\u3002</p> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=o}}]);