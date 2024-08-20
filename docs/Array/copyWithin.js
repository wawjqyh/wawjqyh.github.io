(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/copyWithin"],{Eq7T:function(t,a){var o='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" target="_blank">en</a></p> <h1 id="arrayprototypecopywithin-">Array.prototype.copyWithin() *</h1> <p>\u65b9\u6cd5\u6d45\u590d\u5236\u6570\u7ec4\u7684\u4e00\u90e8\u5206\u5230\u540c\u4e00\u6570\u7ec4\u4e2d\u7684\u53e6\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u5e76\u8fd4\u56de\u5b83\uff0c\u800c\u4e0d\u4fee\u6539\u5176\u5927\u5c0f\u3002</p> <pre><code class="language-javascript">[&quot;alpha&quot;, &quot;beta&quot;, &quot;copy&quot;, &quot;delta&quot;].copyWithin(1, 2, 3);\n// 0:&quot;alpha&quot; 1:&quot;beta&quot; 2:&quot;copy&quot; 3:&quot;delta&quot;\n// [&quot;alpha&quot;, &quot;copy&quot;, &quot;copy&quot;, &quot;delta&quot;]\n// 0:&quot;alpha&quot; 1:&quot;copy&quot; 2:&quot;copy&quot; 3:&quot;delta&quot;\n\n// target === 1:&quot;beta&quot;\n// start === 2:&quot;copy&quot;,\n// end === 3:&quot;delta&quot;\n\n// 1:&quot;beta&quot; =&gt; 1:&quot;copy&quot;\n\n[&#39;alpha&#39;, &#39;bravo&#39;, &#39;charlie&#39;, &#39;delta&#39;].copyWithin(2, 0);\n\n// results in [&quot;alpha&quot;, &quot;bravo&quot;, &quot;alpha&quot;, &quot;bravo&quot;]</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">arr.copyWithin(target)\n\narr.copyWithin(target, start)\n\narr.copyWithin(target, start, end)\n\narr.copyWithin(\u76ee\u6807\u7d22\u5f15, [\u6e90\u5f00\u59cb\u7d22\u5f15], [\u7ed3\u675f\u6e90\u7d22\u5f15])</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><p><code>target</code> 0 \u4e3a\u57fa\u5e95\u7684\u7d22\u5f15\uff0c\u590d\u5236\u5e8f\u5217\u5230\u8be5\u4f4d\u7f6e\u3002\u5982\u679c\u662f\u8d1f\u6570\uff0ctarget \u5c06\u4ece\u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97\u3002\u5982\u679c target \u5927\u4e8e\u7b49\u4e8e arr.length\uff0c\u5c06\u4f1a \u4e0d\u53d1\u751f\u62f7\u8d1d\u3002\u5982\u679c target \u5728 start \u4e4b\u540e\uff0c\u590d\u5236\u7684\u5e8f\u5217\u5c06\u88ab\u4fee\u6539\u4ee5\u7b26\u5408 arr.length\u3002</p> </li> <li><p><code>start</code> 0 \u4e3a\u57fa\u5e95\u7684\u7d22\u5f15\uff0c\u5f00\u59cb\u590d\u5236\u5143\u7d20\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002\u5982\u679c\u662f\u8d1f\u6570\uff0cstart \u5c06\u4ece\u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97\u3002\u5982\u679c start \u88ab\u5ffd\u7565\uff0ccopyWithin \u5c06\u4f1a\u4ece0\u5f00\u59cb\u590d\u5236\u3002</p> </li> <li><p><code>end</code> 0 \u4e3a\u57fa\u5e95\u7684\u7d22\u5f15\uff0c\u5f00\u59cb\u590d\u5236\u5143\u7d20\u7684\u7ed3\u675f\u4f4d\u7f6e\u3002copyWithin \u5c06\u4f1a\u62f7\u8d1d\u5230\u8be5\u4f4d\u7f6e\uff0c\u4f46\u4e0d\u5305\u62ec end \u8fd9\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\u3002\u5982\u679c\u662f\u8d1f\u6570\uff0c end \u5c06\u4ece\u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97\u3002\u5982\u679c end \u88ab\u5ffd\u7565\uff0ccopyWithin \u5c06\u4f1a\u590d\u5236\u5230 arr.length\u3002</p> </li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u6539\u53d8\u4e86\u7684\u6570\u7ec4\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u53c2\u6570target,start\u548cend \u5fc5\u987b\u4e3a\u6574\u6570\u3002</p> <p>\u5982\u679cstart\u4e3a\u8d1f\uff0c\u5219\u5176\u6307\u5b9a\u7684\u7d22\u5f15\u4f4d\u7f6e\u7b49\u540c\u4e8elength+start\uff0clength\u4e3a\u6570\u7ec4\u7684\u957f\u5ea6\u3002end\u4e5f\u662f\u5982\u6b64\u3002</p> <p>copyWithin\u65b9\u6cd5\u4e0d\u8981\u6c42\u5176this\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\uff1b\u9664\u6b64\u4e4b\u5916\uff0ccopyWithin\u662f\u4e00\u4e2a\u53ef\u53d8\u65b9\u6cd5\uff0c\u5b83\u53ef\u4ee5\u6539\u53d8this\u5bf9\u8c61\u672c\u8eab\uff0c\u5e76\u4e14\u8fd4\u56de\u5b83\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5b83\u7684\u62f7\u8d1d\u3002</p> <p>copyWithin \u5c31\u50cf C \u548c C++ \u7684 memcpy \u51fd\u6570\u4e00\u6837\uff0c\u4e14\u5b83\u662f\u7528\u6765\u79fb\u52a8 Array \u6216\u8005 TypedArray \u6570\u636e\u7684\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u65b9\u6cd5\u3002\u590d\u5236\u4ee5\u53ca\u7c98\u8d34\u5e8f \u5217\u8fd9\u4e24\u8005\u662f\u4e3a\u4e00\u4f53\u7684\u64cd\u4f5c;\u5373\u4f7f\u590d\u5236\u548c\u7c98\u8d34\u533a\u57df\u91cd\u53e0\uff0c\u7c98\u8d34\u7684\u5e8f\u5217\u4e5f\u4f1a\u6709\u62f7\u8d1d\u6765\u7684\u503c\u3002</p> <p>copyWithin \u51fd\u6570\u662f\u8bbe\u8ba1\u4e3a\u901a\u7528\u7684\uff0c\u5176\u4e0d\u8981\u6c42\u5176 this \u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\u3002</p> <p>The copyWithin \u662f\u4e00\u4e2a\u53ef\u53d8\u65b9\u6cd5\uff0c\u5b83\u4e0d\u4f1a\u6539\u53d8 this \u7684 length\uff0c\u4f46\u662f\u4f1a\u6539\u53d8 this \u672c\u8eab\u7684\u5185\u5bb9\uff0c\u4e14\u9700\u8981\u65f6\u4f1a\u521b\u5efa\u65b0\u7684\u5c5e\u6027\u3002</p> <h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2> <pre><code class="language-javascript">[1, 2, 3, 4, 5].copyWithin(-2);\n// [1, 2, 3, 1, 2]\n\n[1, 2, 3, 4, 5].copyWithin(0, 3);\n// [4, 5, 3, 4, 5]\n\n[1, 2, 3, 4, 5].copyWithin(0, 3, 4);\n// [4, 2, 3, 4, 5]\n\n[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);\n// [1, 2, 3, 3, 4]\n\n[].copyWithin.call({length: 5, 3: 1}, 0, 3);\n// {0: 1, 3: 1, length: 5}\n\n// ES2015 Typed Arrays are subclasses of Array\nvar i32a = new Int32Array([1, 2, 3, 4, 5]);\n\ni32a.copyWithin(0, 2);\n// Int32Array [3, 4, 5, 4, 5]\n\n// On platforms that are not yet ES2015 compliant:\n[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);\n// Int32Array [4, 2, 3, 4, 5]</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 2016 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript Latest Draft (ECMA-262)</td> <td align="left">Draft</td> <td align="left"></td> </tr> </tbody></table> ';t.exports=o}}]);