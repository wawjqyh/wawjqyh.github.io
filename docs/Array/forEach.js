(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/forEach"],{"/UJm":function(e,o){var n='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">en</a></p> <h1 id="arrayprototypeforeach">Array.prototype.forEach()</h1> <p>forEach() \u65b9\u6cd5\u5bf9\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u63d0\u4f9b\u7684\u51fd\u6570\u3002</p> <pre><code class="language-javascript">let a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];\n\na.forEach(function(element) {\n    console.log(element);\n});\n\n// a\n// b\n// c</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">array.forEach(callback(currentValue, index, array){\n    //do something\n}, this)\n\narray.forEach(callback[, thisArg])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>callback</code> \u4e3a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e09\u4e2a\u53c2\u6570\uff1a<ul> <li><code>currentValue(\u5f53\u524d\u503c)</code> \u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20\u3002</li> <li><code>index(\u7d22\u5f15)</code> \u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15\u3002</li> <li><code>array</code> forEach()\u65b9\u6cd5\u6b63\u5728\u64cd\u4f5c\u7684\u6570\u7ec4\u3002</li> </ul> </li> <li><code>thisArg \u53ef\u9009</code> \u53ef\u9009\u53c2\u6570\u3002\u5f53\u6267\u884c\u56de\u8c03 \u51fd\u6570\u65f6\u7528\u4f5cthis\u7684\u503c(\u53c2\u8003\u5bf9\u8c61)\u3002</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>undefined.</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>forEach \u65b9\u6cd5\u6309\u5347\u5e8f\u4e3a\u6570\u7ec4\u4e2d\u542b\u6709\u6548\u503c\u7684\u6bcf\u4e00\u9879\u6267\u884c\u4e00\u6b21callback \u51fd\u6570\uff0c\u90a3\u4e9b\u5df2\u5220\u9664\uff08\u4f7f\u7528delete\u65b9\u6cd5\u7b49\u60c5\u51b5\uff09\u6216\u8005\u672a\u521d\u59cb\u5316\u7684\u9879\u5c06\u88ab\u8df3 \u8fc7\uff08\u4f46\u4e0d\u5305\u62ec\u90a3\u4e9b\u503c\u4e3a undefined \u7684\u9879\uff09\uff08\u4f8b\u5982\u5728\u7a00\u758f\u6570\u7ec4\u4e0a\uff09\u3002</p> <p>callback \u51fd\u6570\u4f1a\u88ab\u4f9d\u6b21\u4f20\u5165\u4e09\u4e2a\u53c2\u6570\uff1a</p> <ul> <li>\u6570\u7ec4\u5f53\u524d\u9879\u7684\u503c</li> <li>\u6570\u7ec4\u5f53\u524d\u9879\u7684\u7d22\u5f15</li> <li>\u6570\u7ec4\u5bf9\u8c61\u672c\u8eab</li> </ul> <p>\u5982\u679c\u7ed9forEach\u4f20\u9012\u4e86thisArg\u53c2\u6570\uff0c\u5f53\u8c03\u7528\u65f6\uff0c\u5b83\u5c06\u88ab\u4f20\u7ed9callback \u51fd\u6570\uff0c\u4f5c\u4e3a\u5b83\u7684this\u503c\u3002\u5426\u5219\uff0c\u5c06\u4f1a\u4f20\u5165 undefined \u4f5c\u4e3a\u5b83\u7684this\u503c\u3002 callback\u51fd\u6570\u6700\u7ec8\u53ef\u89c2\u5bdf\u5230this\u503c\uff0c\u8fd9\u53d6\u51b3\u4e8e \u51fd\u6570\u89c2\u5bdf\u5230this\u7684\u5e38\u7528\u89c4\u5219\u3002</p> <p>forEach \u904d\u5386\u7684\u8303\u56f4\u5728\u7b2c\u4e00\u6b21\u8c03\u7528 callback \u524d\u5c31\u4f1a\u786e\u5b9a\u3002\u8c03\u7528forEach \u540e\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\u7684\u9879\u4e0d\u4f1a\u88ab callback \u8bbf\u95ee\u5230\u3002\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u7684 \u503c\u88ab\u6539\u53d8\uff0c\u5219\u4f20\u9012\u7ed9 callback \u7684\u503c\u662fforEach \u904d\u5386\u5230\u4ed6\u4eec\u90a3\u4e00\u523b\u7684\u503c\u3002\u5df2\u5220\u9664\u7684\u9879\u4e0d\u4f1a\u88ab\u904d\u5386\u5230\u3002\u5982\u679c\u5df2\u8bbf\u95ee\u7684\u5143\u7d20\u5728\u8fed\u4ee3\u65f6\u88ab\u5220\u9664\u4e86 (\u4f8b\u5982\u4f7f\u7528 shift()) \uff0c\u4e4b\u540e\u7684\u5143\u7d20\u5c06\u88ab\u8df3\u8fc7 - \u53c2\u89c1\u4e0b\u9762\u7684\u793a\u4f8b\u3002</p> <p>forEach() \u4e3a\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u6267\u884ccallback\u51fd\u6570\uff1b\u4e0d\u50cfmap() \u6216\u8005reduce() \uff0c\u5b83\u603b\u662f\u8fd4\u56de undefined\u503c\uff0c\u5e76\u4e14\u4e0d\u53ef\u94fe\u5f0f\u8c03\u7528\u3002\u5178\u578b\u7528\u4f8b\u662f \u5728\u4e00\u4e2a\u94fe\u7684\u6700\u540e\u6267\u884c\u526f\u4f5c\u7528\u3002</p> <p><code>\u6ce8\u610f\uff1a \u6ca1\u6709\u529e\u6cd5\u4e2d\u6b62\u6216\u8005\u8df3\u51fa forEach \u5faa\u73af\uff0c\u9664\u4e86\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\u5982\u679c\u4f60\u9700\u8981\u8fd9\u6837\uff0c\u4f7f\u7528forEach()\u65b9\u6cd5\u662f\u9519\u8bef\u7684\uff0c\u4f60\u53ef\u4ee5\u7528\u4e00\u4e2a\u7b80\u5355 \u7684\u5faa\u73af\u4f5c\u4e3a\u66ff\u4ee3\u3002\u5982\u679c\u60a8\u6b63\u5728\u6d4b\u8bd5\u4e00\u4e2a\u6570\u7ec4\u91cc\u7684\u5143\u7d20\u662f\u5426\u7b26\u5408\u67d0\u6761\u4ef6\uff0c\u4e14\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u90a3\u4e48\u53ef\u4f7f\u7528 Array.every \u6216 Array.some\u3002 \u5982\u679c\u53ef\u7528\uff0c\u65b0\u65b9\u6cd5 find() \u6216\u8005findIndex() \u4e5f\u53ef\u88ab\u7528\u4e8e\u771f\u503c\u6d4b\u8bd5\u7684\u63d0\u65e9\u7ec8\u6b62\u3002</code></p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u6253\u5370\u51fa\u6570\u7ec4\u7684\u5185\u5bb9">\u6253\u5370\u51fa\u6570\u7ec4\u7684\u5185\u5bb9*</h3> <p>\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u8f93\u51fa\u4e00\u884c\u8bb0\u5f55\uff1a</p> <pre><code class="language-javascript">function logArrayElements(element, index, array) {\n    console.log(&quot;a[&quot; + index + &quot;] = &quot; + element);\n}\n\n// \u6ce8\u610f\u7d22\u5f152\u88ab\u8df3\u8fc7\u4e86\uff0c\u56e0\u4e3a\u5728\u6570\u7ec4\u7684\u8fd9\u4e2a\u4f4d\u7f6e\u6ca1\u6709\u9879\n[2, 5, ,9].forEach(logArrayElements);\n\n// a[0] = 2\n// a[1] = 5\n// a[3] = 9\n\n[2, 5,&quot;&quot; ,9].forEach(logArrayElements);\n// a[0] = 2\n// a[1] = 5\n// a[2] =\n// a[3] = 9\n\n[2, 5, undefined ,9].forEach(logArrayElements);\n// a[0] = 2\n// a[1] = 5\n// a[2] = undefined\n// a[3] = 9\n\n\nlet xxx;\n// undefined\n\n[2, 5, xxx ,9].forEach(logArrayElements);\n// a[0] = 2\n// a[1] = 5\n// a[2] = undefined\n// a[3] = 9</code></pre> <h3 id="\u4f7f\u7528thisarg">\u4f7f\u7528thisArg</h3> <p>\u4e3e\u4e2a\u52c9\u5f3a\u7684\u4f8b\u5b50\uff0c\u4ece\u6bcf\u4e2a\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u503c\u4e2d\u66f4\u65b0\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\uff1a</p> <pre><code class="language-javascript">function Counter() {\n    this.sum = 0;\n    this.count = 0;\n}\n\nCounter.prototype.add = function(array) {\n    array.forEach(function(entry) {\n        this.sum += entry;\n        ++this.count;\n    }, this);\n    //console.log(this);\n};\n\nvar obj = new Counter();\nobj.add([1, 3, 5, 7]);\n\nobj.count;\n// 4 === (1+1+1+1)\nobj.sum;\n// 16 === (1+3+5+7)</code></pre> <p>\u56e0\u4e3athisArg\u53c2\u6570 (this) \u4f20\u7ed9\u4e86forEach()\uff0c\u6bcf\u6b21\u8c03\u7528\u65f6\uff0c\u5b83\u90fd\u88ab\u4f20\u7ed9callback\u51fd\u6570\uff0c\u4f5c\u4e3a\u5b83\u7684this\u503c\u3002</p> <p><code>\u6ce8\u610f\uff1a\u5982\u679c\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\u4f20\u5165\u51fd\u6570\u53c2\u6570\uff0cthisArg \u53c2\u6570\u4f1a\u88ab\u5ffd\u7565\uff0c\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u5728\u8bcd\u6cd5\u4e0a\u7ed1\u5b9a\u4e86this\u503c\u3002</code></p> <h3 id="\u5bf9\u8c61\u590d\u5236\u51fd\u6570">\u5bf9\u8c61\u590d\u5236\u51fd\u6570</h3> <p>\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u521b\u5efa\u4e00\u4e2a\u7ed9\u5b9a\u5bf9\u8c61\u7684\u526f\u672c\u3002 \u521b\u5efa\u5bf9\u8c61\u7684\u526f\u672c\u6709\u4e0d\u540c\u7684\u65b9\u6cd5\uff0c\u4ee5\u4e0b\u662f\u53ea\u662f\u4e00\u79cd\u65b9\u6cd5\uff0c\u5e76\u89e3\u91ca\u4e86Array.prototype.forEach() \u662f\u5982\u4f55\u4f7f\u7528ECMAScript 5 Object.* \u5143\u5c5e\u6027\uff08meta property \uff09\u51fd\u6570\u5de5\u4f5c\u7684\u3002</p> <pre><code class="language-javascript">function copy(obj) {\n  var copy = Object.create(Object.getPrototypeOf(obj));\n  var propNames = Object.getOwnPropertyNames(obj);\n\n  propNames.forEach(function(name) {\n    var desc = Object.getOwnPropertyDescriptor(obj, name);\n    Object.defineProperty(copy, name, desc);\n  });\n\n  return copy;\n}\n\nvar obj1 = { a: 1, b: 2 };\nvar obj2 = copy(obj1); // obj2 looks like obj1 now</code></pre> <h3 id="\u5982\u679c\u6570\u7ec4\u5728\u8fed\u4ee3\u65f6\u88ab\u4fee\u6539\u4e86\uff0c\u5219\u5176\u4ed6\u5143\u7d20\u4f1a\u88ab\u8df3\u8fc7">\u5982\u679c\u6570\u7ec4\u5728\u8fed\u4ee3\u65f6\u88ab\u4fee\u6539\u4e86\uff0c\u5219\u5176\u4ed6\u5143\u7d20\u4f1a\u88ab\u8df3\u8fc7</h3> <p>\u4e0b\u9762\u7684\u4f8b\u5b50\u8f93\u51fa&quot;one&quot;, &quot;two&quot;, &quot;four&quot;\u3002\u5f53\u5230\u8fbe\u5305\u542b\u503c&quot;two&quot;\u7684\u9879\u65f6\uff0c\u6574\u4e2a\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u9879\u88ab\u79fb\u9664\u4e86\uff0c\u8fd9\u5bfc\u81f4\u6240\u6709\u5269\u4e0b\u7684\u9879\u4e0a\u79fb\u4e00\u4e2a\u4f4d\u7f6e\u3002 \u56e0\u4e3a\u5143\u7d20 &quot;four&quot;\u73b0\u5728\u5728\u6570\u7ec4\u66f4\u524d\u7684\u4f4d\u7f6e\uff0c&quot;three&quot;\u4f1a\u88ab\u8df3\u8fc7\u3002 forEach()\u4e0d\u4f1a\u5728\u8fed\u4ee3\u4e4b\u524d\u521b\u5efa\u6570\u7ec4\u7684\u526f\u672c\u3002</p> <pre><code class="language-javascript">var words = [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;, &quot;four&quot;];\nwords.forEach(function(word) {\n  console.log(word);\n  if (word === &quot;two&quot;) {\n    words.shift();\n  }\n});\n// one\n// two\n// four</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';e.exports=n}}]);