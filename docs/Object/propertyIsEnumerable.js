(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Object/propertyIsEnumerable"],{o70E:function(e,r){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" target="_blank">en</a></p> <h1 id="objectprototypepropertyisenumerable">Object.prototype.propertyIsEnumerable()</h1> <h2 id="\u6982\u8ff0">\u6982\u8ff0</h2> <p>propertyIsEnumerable() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u660e\u6307\u5b9a\u7684\u5c5e\u6027\u540d\u662f\u5426\u662f\u5f53\u524d\u5bf9\u8c61\u53ef\u679a\u4e3e\u7684\u81ea\u8eab\u5c5e\u6027\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">obj.propertyIsEnumerable(prop)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>prop</code> \u9700\u8981\u6d4b\u8bd5\u7684\u5c5e\u6027\u540d\u3002</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u4e00\u4e2a Boolean \u7528\u6765\u8868\u660e\u6307\u5b9a\u7684\u5c5e\u6027\u540d\u662f\u5426\u53ef\u679a\u4e3e</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709 propertyIsEnumerable \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5224\u65ad\u51fa\u6307\u5b9a\u5bf9\u8c61\u91cc\u7684\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\uff0c\u4e5f\u5c31\u662f\u8bf4\u8be5\u5c5e\u6027\u662f\u5426\u53ef\u4ee5\u901a\u8fc7 for...in \u5faa\u73af\u7b49\u904d\u5386\u5230\uff0c\u4e0d\u8fc7\u6709\u4e9b\u5c5e\u6027\u867d\u7136\u53ef\u4ee5\u901a\u8fc7 for...in \u5faa\u73af\u904d\u5386\u5230\uff0c\u4f46\u56e0\u4e3a\u5b83\u4eec\u4e0d\u662f\u81ea\u8eab\u5c5e\u6027\uff0c\u800c\u662f\u4ece\u539f\u578b\u94fe\u4e0a\u7ee7\u627f\u7684\u5c5e\u6027,\u6240\u4ee5\u8be5\u65b9\u6cd5 \u4e5f\u4f1a\u8fd4\u56defalse\u3002\u5982\u679c\u5bf9\u8c61\u6ca1\u6709\u6307\u5b9a\u7684\u5c5e\u6027\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de false\u3002</p> <h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2> <h3 id="propertyisenumerable\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5">propertyIsEnumerable\u65b9\u6cd5\u7684\u57fa\u672c\u7528\u6cd5</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86propertyIsEnumerable\u65b9\u6cd5\u5728\u666e\u901a\u5bf9\u8c61\u548c\u6570\u7ec4\u4e0a\u7684\u57fa\u672c\u7528\u6cd5:</p> <pre><code class="language-javascript">var o = {};\nvar a = [];\no.prop = &#39;is enumerable&#39;;\na[0] = &#39;is enumerable&#39;;\n\no.propertyIsEnumerable(&#39;prop&#39;);   //  \u8fd4\u56de true\na.propertyIsEnumerable(0);        // \u8fd4\u56de true</code></pre> <h3 id="\u7528\u6237\u81ea\u5b9a\u4e49\u5bf9\u8c61\u548c\u5f15\u64ce\u5185\u7f6e\u5bf9\u8c61">\u7528\u6237\u81ea\u5b9a\u4e49\u5bf9\u8c61\u548c\u5f15\u64ce\u5185\u7f6e\u5bf9\u8c61</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u7528\u6237\u81ea\u5b9a\u4e49\u5bf9\u8c61\u548c\u5f15\u64ce\u5185\u7f6e\u5bf9\u8c61\u4e0a\u5c5e\u6027\u53ef\u679a\u4e3e\u6027\u7684\u533a\u522b.</p> <pre><code class="language-javascript">var a = [&#39;is enumerable&#39;];\n\na.propertyIsEnumerable(0);          // \u8fd4\u56de true\na.propertyIsEnumerable(&#39;length&#39;);   // \u8fd4\u56de false\n\nMath.propertyIsEnumerable(&#39;random&#39;);   // \u8fd4\u56de false\nthis.propertyIsEnumerable(&#39;Math&#39;);     // \u8fd4\u56de false</code></pre> <h3 id="\u81ea\u8eab\u5c5e\u6027\u548c\u7ee7\u627f\u5c5e\u6027">\u81ea\u8eab\u5c5e\u6027\u548c\u7ee7\u627f\u5c5e\u6027</h3> <pre><code class="language-javascript">var a = [];\na.propertyIsEnumerable(&#39;constructor&#39;);         // \u8fd4\u56de false\n\nfunction firstConstructor() {\n  this.property = &#39;is not enumerable&#39;;\n}\n\nfirstConstructor.prototype.firstMethod = function() {};\n\nfunction secondConstructor() {\n  this.method = function method() { return &#39;is enumerable&#39;; };\n}\n\nsecondConstructor.prototype = new firstConstructor;\nsecondConstructor.prototype.constructor = secondConstructor;\n\nvar o = new secondConstructor();\no.arbitraryProperty = &#39;is enumerable&#39;;\n\no.propertyIsEnumerable(&#39;arbitraryProperty&#39;);   // \u8fd4\u56de true\no.propertyIsEnumerable(&#39;method&#39;);              // \u8fd4\u56de true\no.propertyIsEnumerable(&#39;property&#39;);            // \u8fd4\u56de false\n\no.property = &#39;is enumerable&#39;;\n\no.propertyIsEnumerable(&#39;property&#39;);            // \u8fd4\u56de true\n\n// \u8fd9\u4e9b\u8fd4\u56defasle\uff0c\u662f\u56e0\u4e3a\uff0c\u5728\u539f\u578b\u94fe\u4e0apropertyIsEnumerable\u4e0d\u88ab\u8003\u8651\n// (\u5c3d\u7ba1\u6700\u540e\u4e24\u4e2a\u5728for-in\u5faa\u73af\u4e2d\u53ef\u4ee5\u88ab\u5faa\u73af\u51fa\u6765)\u3002\no.propertyIsEnumerable(&#39;prototype&#39;);   // \u8fd4\u56de false (\u6839\u636e JS 1.8.1/FF3.6)\no.propertyIsEnumerable(&#39;constructor&#39;); // \u8fd4\u56de false\no.propertyIsEnumerable(&#39;firstMethod&#39;); // \u8fd4\u56de false</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 3rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';e.exports=t}}]);