(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Array/Array"],{bGS2:function(e,r){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">en</a></p> <h1 id="array">Array</h1> <p>JavaScript \u6570\u7ec4\u5bf9\u8c61\u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u9020\u6570\u7ec4\u7684\u5168\u5c40\u5bf9\u8c61; \u5b83\u4eec\u662f\u9ad8\u7ea7\u7684\uff0c\u5217\u8868\u5f0f\u7684\u5bf9\u8c61\u3002</p> <p>\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4</p> <pre><code class="language-javascript">var fruits = [&quot;Apple&quot;, &quot;Banana&quot;];\n\nconsole.log(fruits.length);\n// 2</code></pre> <p>\u901a\u8fc7\u7d22\u5f15\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20</p> <pre><code class="language-javascript">var first = fruits[0];\n// Apple\n\nvar last = fruits[fruits.length - 1];\n// Banana</code></pre> <p>\u904d\u5386\u4e00\u4e2a\u6570\u7ec4</p> <pre><code class="language-javascript">fruits.forEach(function (item, index, array) {\n  console.log(item, index);\n});\n// Apple 0\n// Banana 1</code></pre> <p>\u6dfb\u52a0\u5143\u7d20\u5230\u6570\u7ec4\u7684\u672b\u5c3e</p> <pre><code class="language-javascript">var newLength = fruits.push(&quot;Orange&quot;);\n// [&quot;Apple&quot;, &quot;Banana&quot;, &quot;Orange&quot;]</code></pre> <p>\u5220\u9664\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20</p> <pre><code class="language-javascript">var last = fruits.pop(); // remove Orange (from the end)\n// [&quot;Apple&quot;, &quot;Banana&quot;];</code></pre> <p>\u5220\u9664\u6570\u7ec4\u6700\u524d\u9762\uff08\u5934\u90e8\uff09\u7684\u5143\u7d20</p> <pre><code class="language-javascript">var first = fruits.shift(); // remove Apple from the front\n// [&quot;Banana&quot;];</code></pre> <p>\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u524d\u9762\uff08\u5934\u90e8\uff09</p> <pre><code class="language-javascript">var newLength = fruits.unshift(&quot;Strawberry&quot;) // add to the front\n// [&quot;Strawberry&quot;, &quot;Banana&quot;];</code></pre> <p>\u627e\u5230\u67d0\u4e2a\u5143\u7d20\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15</p> <pre><code class="language-javascript">fruits.push(&#39;Mango&#39;);\n// [&quot;Strawberry&quot;, &quot;Banana&quot;, &quot;Mango&quot;]\n\nvar pos = fruits.indexOf(&quot;Banana&quot;);\n// 1</code></pre> <p>\u901a\u8fc7\u7d22\u5f15\u5220\u9664\u67d0\u4e2a\u5143\u7d20</p> <pre><code class="language-javascript">var removedItem = fruits.splice(pos, 1); // this is how to remove an item\n// [&quot;Strawberry&quot;, &quot;Mango&quot;]</code></pre> <p>\u590d\u5236\u4e00\u4e2a\u6570\u7ec4</p> <pre><code class="language-javascript">var shallowCopy = fruits.slice(); // this is how to make a copy\n// [&quot;Strawberry&quot;, &quot;Mango&quot;]</code></pre> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">[element0, element1, ..., elementN]\nnew Array(element0, element1[, ...[, elementN]])\nnew Array(arrayLength)</code></pre> <h4 id="\u5143\u7d20\u5217--elementn">\u5143\u7d20\u5217 \u2014\u2014 elementN</h4> <p>Array \u6784\u9020\u5668\u5c06\u4f1a\u6839\u636e\u7ed9\u51fa\u7684\u5143\u7d20\u521b\u5efa\u4e00\u4e2a JavaScript \u6570\u7ec4\uff0c\u4f46\u662f\u5f53\u53c2\u6570\u4ec5\u6709\u4e00\u4e2a\u53c2\u6570\u4e14\u5176\u4e3a\u6570\u5b57\u65f6\u9664\u5916\uff0c\u53c2\u8003\u4e0b\u9762\u7684 arrayLength\u3002 \u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u79cd\u60c5\u51b5\u4ec5\u5728\u4f7f\u7528 Array \u6784\u9020\u5668\u65f6\u51fa\u73b0\uff0c\u4f7f\u7528\u5e26\u65b9\u62ec\u53f7\u7684\u6570\u7ec4\u5b57\u9762\u91cf\u5219\u4e0d\u4f1a\u3002</p> <h4 id="\u6570\u7ec4\u957f\u5ea6--arraylength">\u6570\u7ec4\u957f\u5ea6 \u2014\u2014 arrayLength</h4> <p>\u5411 Array \u6784\u9020\u51fd\u6570\u4f20\u5165\u4e00\u4e2a\u5728 0 \u5230 232-1 \u4e4b\u95f4\u7684\u6574\u6570\uff0c\u5c06\u8fd4\u56de\u4e00\u4e2a\u4ee5\u6b64\u4e3a\u957f\u5ea6\u7684\u6570\u7ec4\u5bf9\u8c61\u3002\u901a\u8fc7 length \u5c5e\u6027\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u503c\u3002\u5982\u679c \u4f20\u5165\u7684\u53c2\u6570\u4e0d\u662f\u6709\u6548\u7684\u6570\u503c\uff0c\u5219\u629b\u51fa RangeError \u5f02\u5e38\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u6570\u7ec4\u662f\u7c7b\u4f3c\u5217\u8868\u7684\u5bf9\u8c61\uff0c\u5728\u539f\u578b\u4e2d\u63d0\u4f9b\u4e86\u904d\u5386\u4ee5\u53ca\u6539\u53d8\u5176\u4e2d\u5143\u7d20\u7684\u5f88\u591a\u65b9\u6cd5\u3002 \u6570\u7ec4\u7684\u957f\u5ea6\u53ca\u5176\u4e2d\u5143\u7d20\u7684\u7c7b\u578b\u90fd\u662f\u4e0d\u56fa\u5b9a\u7684\u3002\u56e0\u4e3a\u6570\u7ec4\u7684 \u957f\u5ea6\u53ef\u8bfb\u53ef\u5199\uff0c\u6709\u65f6\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e5f\u4e0d\u662f\u5728\u8fde\u7eed\u7684\u4f4d\u7f6e\uff0c\u6240\u4ee5JavaScript \u6570\u7ec4\u4e0d\u4e00\u5b9a\u662f\u5bc6\u96c6\u7684\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u4e00\u4e9b\u65b9\u4fbf\u7684\u7279\u6027\uff1b\u5982 \u679c\u8fd9\u4e9b\u7279\u6027\u4e0d\u9002\u7528\u4e8e\u4f60\u7684\u7279\u5b9a\u4f7f\u7528\u573a\u666f\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u56fa\u5b9a\u7c7b\u578b\u6570\u7ec4\u3002</p> <p>\u6709\u4e9b\u4eba\u8ba4\u4e3a you shouldn&#39;t use an array as an associative array\u3002\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b, \u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u822c\u7684\u5bf9\u8c61\u6765\u4ee3\u66ff\uff0c\u4e0d\u8fc7\u8fd9\u6837\u505a\u4f1a\u51fa \u73b0\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u3002\u8bf7\u770b\u4f8b\u5b50\uff1a Lightweight JavaScript dictionaries with arbitrary keys .</p> <h3 id="\u8bbf\u95ee\u6570\u7ec4\u91cc\u7684\u5143\u7d20">\u8bbf\u95ee\u6570\u7ec4\u91cc\u7684\u5143\u7d20</h3> <p>JavaScript \u6570\u7ec4\u7684\u7d22\u5f15\u503c\uff08index\uff09\u4ece0\u5f00\u59cb\uff0c\u5373\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u503c\u4e3a0\u3002\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u503c\u7b49\u4e8e\u8be5\u6570\u7ec4\u7684\u957f\u5ea6\u51cf1\uff08Array.length -1\uff09\u3002</p> <pre><code class="language-javascript">var arr = [&#39;this is the first element&#39;, &#39;this is the second element&#39;];\nconsole.log(arr[0]);              // logs &#39;this is the first element&#39;\nconsole.log(arr[1]);              // logs &#39;this is the second element&#39;\nconsole.log(arr[arr.length - 1]); // logs &#39;this is the second element&#39;</code></pre> <p>\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u50cf\u4e00\u4e2a\u5bf9\u8c61\u4ee5\u7d22\u5f15\u4e3a\u5c5e\u6027\u540d,\u5143\u7d20\u4e3a\u5c5e\u6027\u503c\uff0c\u6216\u8005arr=[&#39;a&#39;,&#39;b&#39;]\u6709\u70b9\u50cfarrObj={0:&#39;a&#39;,1:&#39;b&#39;},\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u53ef\u4ee5\u901a\u8fc7 &quot;.&quot;\u6765\u8bbf\u95ee,\u4f46\u662f\u4f7f\u7528\u4e0b\u9762\u8fd9\u6837\u4f7f\u7528\u4f1a\u629b\u51fa\u8bed\u6cd5\u9519\u8bef\uff0c\u56e0\u4e3a\u5c5e\u6027\u540d\u79f0\u662f\u975e\u6cd5\u7684\uff1a</p> <pre><code class="language-javascript">console.log(arr.0); // a syntax error</code></pre> <p>\u8fd9\u662f\u7531\u975e\u6cd5\u5c5e\u6027\u9020\u6210\u7684\uff0c\u4e0d\u662f Array \u7279\u6709\u7684\u3002JavaScript \u4e2d\u6570\u5b57\u5f00\u5934\u7684\u5c5e\u6027\u4e0d\u80fd\u8ddf\u5728\u70b9\u53f7\u540e\u9762\uff1b\u5fc5\u987b\u5728\u65b9\u62ec\u53f7\u4e2d\u4f7f\u7528\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u4f60 \u6709\u4e00\u4e2a\u540d\u4e3a \u20183d\u2019 \u7684\u5c5e\u6027\uff0c\u5b83\u53ea\u80fd\u901a\u8fc7\u65b9\u62ec\u53f7\u7684\u5f62\u5f0f\u8fdb\u884c\u8bbf\u95ee\u3002 \u6362\u8a00\u4e4b\u8bbf\u95ee\u5408\u6cd5\u7684\u5c5e\u6027\u540d\u53ef\u4ee5\u7528&quot;.&quot;\u6216\u8005&quot;[ ]&quot;,\u4f46\u662f\u8bbf\u95ee\u975e\u6cd5\u7684\u5c5e\u6027\u53ea \u80fd\u7528&quot;[ ]&quot;,\u5982\u4e0b\u6240\u793a\uff1a</p> <pre><code class="language-javascript">var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];\nconsole.log(years.0);   // a syntax error\nconsole.log(years[0]);  // works properly\n\nrenderer.3d.setTexture(model, &#39;character.png&#39;);     // a syntax error\nrenderer[&#39;3d&#39;].setTexture(model, &#39;character.png&#39;);  // works properly</code></pre> <p>\u57283d\u7684\u4f8b\u5b50\u4e2d\uff0c&#39;3d&#39;\u7684\u5f15\u53f7\u662f\u5fc5\u987b\u7684\u3002\u8be5\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u7528\u5728 JavaScript \u6570\u7ec4\u4e2d\uff08\u5982\uff1ayears[&#39;2&#39;] \u53ef\u4ee5\u4ee3\u66ff years[2]\uff09\uff0c\u4e0d\u8fc7\u8fd9\u4e0d\u662f\u5fc5\u9700\u7684\u3002 \u5728 years[2] \u4e2d\uff0c2\u4f1a\u88abJavascript \u5f15\u64ce\u81ea\u52a8\u8c03\u7528 toString \u8f6c\u6362\u6210\u4e00\u4e2a string \u7c7b\u578b\u7684\u53d8\u91cf\u3002\u6b63\u56e0\u4e3a\u5982\u6b64\uff0c&#39;2&#39; \u548c &#39;02&#39; \u5728years \u5bf9\u8c61 \u4e2d\u5c06\u4f1a\u6307\u5411\u4e0d\u540c\u7684\u4f4d\u7f6e\uff0c\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c06\u4f1a\u6253\u5370 true\uff1a</p> <pre><code class="language-javascript">console.log(years[&#39;2&#39;] != years[&#39;02&#39;]);</code></pre> <p>\u7c7b\u4f3c\u7684\uff0c\u60f3\u8981\u4f7f\u7528\u4fdd\u7559\u5b57\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u79f0\u7684\uff0c\u53ea\u80fd\u901a\u8fc7\u4ee5\u5355\u5f15\u53f7\u5305\u88f9\u5176\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8bbf\u95ee\uff1a</p> <pre><code class="language-javascript">var promise = {\n  &#39;var&#39;  : &#39;text&#39;,\n  &#39;array&#39;: [1, 2, 3, 4]\n};\n\nconsole.log(promise[&#39;array&#39;]);</code></pre> <h3 id="\u957f\u5ea6\u548c\u6570\u503c\u4e0b\u6807\u5c5e\u6027\u6027\u8d28\u4e4b\u95f4\u7684\u5173\u7cfb">\u957f\u5ea6\u548c\u6570\u503c\u4e0b\u6807\u5c5e\u6027\u6027\u8d28\u4e4b\u95f4\u7684\u5173\u7cfb</h3> <p>JavaScript array \u7684 length \u5c5e\u6027\u548c\u5176\u6570\u5b57\u4e0b\u6807\u662f\u6709\u5173\u7cfb\u7684\u3002\u51e0\u4e2a\u5185\u7f6e\u6570\u7ec4\u7684\u65b9\u6cd5 (\u4f8b\u5982, join, slice, indexOf, \u7b49) \u88ab\u8c03\u7528\u7684\u65f6\u5019 \u4f1a\u4f7f\u7528 \u5230length \u5c5e\u6027\u3002 \u6709\u4e9b\u522b\u7684\u65b9\u6cd5 (\u4f8b\u5982, push, splice, \u7b49) \u4f1a\u6539\u53d8array\u7684 length \u5c5e\u6027\u3002</p> <pre><code class="language-javascript">var fruits = [];\nfruits.push(&#39;banana&#39;, &#39;apple&#39;, &#39;peach&#39;);\n\nconsole.log(fruits.length); // 3</code></pre> <p>\u5f53\u4f60\u5728 array \u4e0a\u4f7f\u7528\u4e00\u4e2a\u5408\u6cd5\u7684\u6570\u7ec4\u4e0b\u6807\uff0c\u800c\u4e14\u8be5\u4e0b\u6807\u8d85\u51fa\u4e86\u5f53\u524d\u6570\u7ec4\u7684\u5927\u5c0f\u7684\u65f6\u5019\uff0c\u5f15\u64ce\u4f1a\u6839\u636e\u5176\u503c\u81ea\u52a8\u66f4\u65b0 array \u7684length\u5c5e\u6027\uff1a</p> <pre><code class="language-javascript">fruits[5] = &#39;mango&#39;;\nconsole.log(fruits[5]); // &#39;mango&#39;\nconsole.log(Object.keys(fruits));  // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;5&#39;]\nconsole.log(fruits.length); // 6</code></pre> <p>\u589e\u5927 length\u3002</p> <pre><code class="language-javascript">fruits.length = 10;\nconsole.log(Object.keys(fruits)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;5&#39;]\nconsole.log(fruits.length); // 10</code></pre> <p>\u51cf\u5c0f array \u7684length\u5c5e\u6027\u4f1a\u5220\u6389\u8d85\u51fa\u7684\u5143\u7d20\u3002</p> <pre><code class="language-javascript">fruits.length = 2;\nconsole.log(Object.keys(fruits)); // [&#39;0&#39;, &#39;1&#39;]\nconsole.log(fruits.length); // 2</code></pre> <h3 id="\u4f7f\u7528\u6b63\u5219\u5339\u914d\u7684\u7ed3\u679c\u6765\u521b\u5efa\u6570\u7ec4">\u4f7f\u7528\u6b63\u5219\u5339\u914d\u7684\u7ed3\u679c\u6765\u521b\u5efa\u6570\u7ec4</h3> <p>\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u5339\u914d\u7ed3\u679c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u3002\u8fd9\u4e2a\u6570\u7ec4\u5305\u542b\u4e86\u6b63\u5219\u5339\u914d\u7684\u5c5e\u6027\u4e0e\u5339\u914d\u7ed3\u679c\u3002RegExp.exec\uff0cString.match\uff0c \u4e0eString.replace\u7684\u8fd4\u56de\u503c\u5c31\u662f\u8fd9\u6837\u7684\u6570\u7ec4\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u5e2e\u52a9\u7406\u89e3\u8fd9\u4e9b\u5c5e\u6027\u548c\u5143\u7d20\u3002</p> <pre><code class="language-javascript">// Match one d followed by one or more b&#39;s followed by one d\n// Remember matched b&#39;s and the following d\n// \u5ffd\u7565\u5927\u5c0f\u5199\n\nmyRe = /d(b+)(d)/i;\nmyArray = myRe.exec(&quot;cdbBdbsbz&quot;);</code></pre> <p>\u8be5\u6b63\u5219\u5339\u914d\u8fd4\u56de\u7684\u5c5e\u6027/\u5143\u7d20\u5217\u8868\uff1a</p> <table> <thead> <tr> <th align="left">Property/Element</th> <th align="left">\u8bf4\u660e</th> <th align="left">\u4f8b\u5b50</th> </tr> </thead> <tbody><tr> <td align="left">input</td> <td align="left">\u539f\u59cb\u7684\u8f93\u5165\u5b57\u7b26\u4e32\uff0c\u53ea\u8bfb\u5c5e\u6027</td> <td align="left">cdbBdbsbz</td> </tr> <tr> <td align="left">index</td> <td align="left">\u5339\u914d\u7684\u5b50\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5728\u539f\u59cb\u5b57\u7b26\u4e32\u4e2d\u7684\u4f4d\u7f6e\uff08\u4ece0\u5f00\u59cb\u7684\u7d22\u5f15\uff0c\u53ea\u8bfb\uff09</td> <td align="left">1</td> </tr> <tr> <td align="left">[0]</td> <td align="left">\u6700\u540e\u4e00\u6b21\u5339\u914d\u7684\u5143\u7d20,\u53ea\u8bfb</td> <td align="left">dbBd</td> </tr> <tr> <td align="left">[1], ...[n]</td> <td align="left">\u51fa\u73b0\u5728\u6b63\u5219\u5339\u914d\u4e2d\u7684\u5b50\u5339\u914d\uff08\u5982\u679c\u6709\uff09</td> <td align="left">[1]: bB <br> [2]: d</td> </tr> </tbody></table> <h2 id="\u5c5e\u6027">\u5c5e\u6027</h2> <p>For properties available on Array instances, see Properties of Array instances.</p> <ul> <li><code>Array.length</code> Array \u6784\u9020\u51fd\u6570\u7684 length \u5c5e\u6027\uff0c\u5176\u503c\u4e3a1\u3002</li> <li><code>Array.prototype</code> \u5141\u8bb8\u4e3a\u6240\u6709\u6570\u7ec4\u5bf9\u8c61\u9644\u52a0\u5c5e\u6027\u3002</li> </ul> <h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2> <p>For methods available on Array instances, see Methods of Array instances.</p> <p><code>Array.from()</code></p> <p>\u4ece\u7c7b\u6570\u7ec4\u6216\u8005\u8fed\u4ee3\u5bf9\u8c61\uff08iterable object\uff09\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u5b9e\u4f8b\u3002</p> <p><code>Array.isArray()</code></p> <p>\u5047\u5982\u4e00\u4e2a\u53d8\u91cf\u662f\u6570\u7ec4\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002</p> <p><code>Array.observe()</code></p> <p>\u5f02\u6b65\u76d1\u89c6\u6570\u7ec4\u7684\u4fee\u6539\u60c5\u51b5\uff0c\u4e0e\u5bf9\u8c61\u7684Object.observe()\u65b9\u6cd5\u7c7b\u4f3c\u3002\u8be5\u65b9\u6cd5\u4f1a\u6839\u636e\u4fee\u6539\u4e8b\u4ef6\u53d1\u751f\u987a\u5e8f\u63d0\u4f9b\u4e00\u4e2a\u4fee\u6539\u6d41\u3002</p> <p><code>Array.of()</code></p> <p>\u521b\u5efa\u4e00\u4e2a\u6709\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u7684\u65b0\u7684\u6570\u7ec4\u5b9e\u4f8b\uff0c\u65e0\u8bba\u53c2\u6570\u6709\u591a\u5c11\u6570\u91cf\uff0c\u800c\u4e14\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u3002</p> <h2 id="\u6570\u7ec4\u5b9e\u4f8b">\u6570\u7ec4\u5b9e\u4f8b</h2> <p>\u6240\u6709\u6570\u7ec4\u5b9e\u4f8b\u7ee7\u627f\u81ea Array.prototype.Array \u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u662f\u53ef\u4fee\u6539\u7684\uff0c\u5176\u4f1a\u5f71\u54cd\u6240\u6709\u7684\u6570\u7ec4\u5b9e\u4f8b\u3002</p> <h2 id="\u5b9e\u4f8b\u5c5e\u6027">\u5b9e\u4f8b\u5c5e\u6027</h2> <p><code>Array.prototype.constructor</code></p> <p>\u6240\u6709\u7684\u6570\u7ec4\u5b9e\u4f8b\u90fd\u7ee7\u627f\u4e86\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5b83\u7684\u503c\u5c31\u662f Array\uff0c\u8868\u660e\u4e86\u6240\u6709\u7684\u6570\u7ec4\u90fd\u662f\u7531 Array \u6784\u9020\u51fa\u6765\u7684\u3002</p> <p><code>Array.prototype.length</code></p> <p>\u4e0a\u9762\u8bf4\u4e86\uff0c\u56e0\u4e3a Array.prototype \u4e5f\u662f\u4e2a\u6570\u7ec4\uff0c\u6240\u4ee5\u5b83\u4e5f\u6709 length \u5c5e\u6027\uff0c\u8fd9\u4e2a\u503c\u4e3a 0\uff0c\u56e0\u4e3a\u5b83\u662f\u4e2a\u7a7a\u6570\u7ec4\u3002</p> <h2 id="\u5b9e\u4f8b\u65b9\u6cd5">\u5b9e\u4f8b\u65b9\u6cd5</h2> <h3 id="mutator-\u65b9\u6cd5">Mutator \u65b9\u6cd5</h3> <p>\u4e0b\u9762\u7684\u8fd9\u4e9b\u65b9\u6cd5\u4f1a\u6539\u53d8\u8c03\u7528\u5b83\u4eec\u7684\u5bf9\u8c61\u81ea\u8eab\u7684\u503c\uff1a</p> <p><code>Array.prototype.copyWithin()</code></p> <p>\u5728\u6570\u7ec4\u5185\u90e8\uff0c\u5c06\u4e00\u6bb5\u5143\u7d20\u5e8f\u5217\u62f7\u8d1d\u5230\u53e6\u4e00\u6bb5\u5143\u7d20\u5e8f\u5217\u4e0a\uff0c\u8986\u76d6\u539f\u6709\u7684\u503c\u3002</p> <p><code>Array.prototype.fill()</code></p> <p>\u5c06\u6570\u7ec4\u4e2d\u6307\u5b9a\u533a\u95f4\u7684\u6240\u6709\u5143\u7d20\u7684\u503c\uff0c\u90fd\u66ff\u6362\u6210\u67d0\u4e2a\u56fa\u5b9a\u7684\u503c\u3002</p> <p><code>Array.prototype.pop()</code></p> <p>\u5220\u9664\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5143\u7d20\u3002</p> <p><code>Array.prototype.push()</code></p> <p>\u5728\u6570\u7ec4\u7684\u672b\u5c3e\u589e\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002</p> <p><code>Array.prototype.reverse()</code></p> <p>\u98a0\u5012\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6392\u5217\u987a\u5e8f\uff0c\u5373\u539f\u5148\u7684\u7b2c\u4e00\u4e2a\u53d8\u4e3a\u6700\u540e\u4e00\u4e2a\uff0c\u539f\u5148\u7684\u6700\u540e\u4e00\u4e2a\u53d8\u4e3a\u7b2c\u4e00\u4e2a\u3002</p> <p><code>Array.prototype.shift()</code></p> <p>\u5220\u9664\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5143\u7d20\u3002</p> <p><code>Array.prototype.sort()</code></p> <p>\u5bf9\u6570\u7ec4\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u6570\u7ec4\u3002</p> <p><code>Array.prototype.splice()</code></p> <p>\u5728\u4efb\u610f\u7684\u4f4d\u7f6e\u7ed9\u6570\u7ec4\u6dfb\u52a0\u6216\u5220\u9664\u4efb\u610f\u4e2a\u5143\u7d20\u3002</p> <p><code>Array.prototype.unshift()</code></p> <p>\u5728\u6570\u7ec4\u7684\u5f00\u5934\u589e\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002</p> <h3 id="accessor-\u65b9\u6cd5">Accessor \u65b9\u6cd5</h3> <p>\u4e0b\u9762\u7684\u8fd9\u4e9b\u65b9\u6cd5\u7edd\u5bf9\u4e0d\u4f1a\u6539\u53d8\u8c03\u7528\u5b83\u4eec\u7684\u5bf9\u8c61\u7684\u503c\uff0c\u53ea\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u6216\u8005\u8fd4\u56de\u4e00\u4e2a\u5176\u5b83\u7684\u671f\u671b\u503c\u3002</p> <p><code>Array.prototype.concat()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u7531\u5f53\u524d\u6570\u7ec4\u548c\u5176\u5b83\u82e5\u5e72\u4e2a\u6570\u7ec4\u6216\u8005\u82e5\u5e72\u4e2a\u975e\u6570\u7ec4\u503c\u7ec4\u5408\u800c\u6210\u7684\u65b0\u6570\u7ec4\u3002</p> <p><code>Array.prototype.includes()</code></p> <p>\u5224\u65ad\u5f53\u524d\u6570\u7ec4\u662f\u5426\u5305\u542b\u67d0\u6307\u5b9a\u7684\u503c\uff0c\u5982\u679c\u662f\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002</p> <p><code>Array.prototype.join()</code></p> <p>\u8fde\u63a5\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7ec4\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002</p> <p><code>Array.prototype.slice()</code></p> <p>\u62bd\u53d6\u5f53\u524d\u6570\u7ec4\u4e2d\u7684\u4e00\u6bb5\u5143\u7d20\u7ec4\u5408\u6210\u4e00\u4e2a\u65b0\u6570\u7ec4\u3002</p> <p><code>Array.prototype.toSource()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5f53\u524d\u6570\u7ec4\u5b57\u9762\u91cf\u7684\u5b57\u7b26\u4e32\u3002\u906e\u853d\u4e86\u539f\u578b\u94fe\u4e0a\u7684 Object.prototype.toSource() \u65b9\u6cd5\u3002</p> <p><code>Array.prototype.toString()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u7531\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7ec4\u5408\u800c\u6210\u7684\u5b57\u7b26\u4e32\u3002\u906e\u853d\u4e86\u539f\u578b\u94fe\u4e0a\u7684 Object.prototype.toString() \u65b9\u6cd5\u3002</p> <p><code>Array.prototype.toLocaleString()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u7531\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7ec4\u5408\u800c\u6210\u7684\u672c\u5730\u5316\u540e\u7684\u5b57\u7b26\u4e32\u3002\u906e\u853d\u4e86\u539f\u578b\u94fe\u4e0a\u7684 Object.prototype.toLocaleString() \u65b9\u6cd5\u3002</p> <p><code>Array.prototype.indexOf()</code></p> <p>\u8fd4\u56de\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u4e0e\u6307\u5b9a\u503c\u76f8\u7b49\u7684\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u5982\u679c\u627e\u4e0d\u5230\u8fd9\u6837\u7684\u5143\u7d20\uff0c\u5219\u8fd4\u56de -1\u3002</p> <p><code>Array.prototype.lastIndexOf()</code></p> <p>\u8fd4\u56de\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u4e2a\uff08\u4ece\u53f3\u8fb9\u6570\u7b2c\u4e00\u4e2a\uff09\u4e0e\u6307\u5b9a\u503c\u76f8\u7b49\u7684\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u5982\u679c\u627e\u4e0d\u5230\u8fd9\u6837\u7684\u5143\u7d20\uff0c\u5219\u8fd4\u56de -1\u3002</p> <h3 id="iteration-\u65b9\u6cd5">Iteration \u65b9\u6cd5</h3> <p>\u5728\u4e0b\u9762\u7684\u4f17\u591a\u904d\u5386\u65b9\u6cd5\u4e2d\uff0c\u6709\u5f88\u591a\u65b9\u6cd5\u90fd\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u3002\u5728\u56de\u8c03\u51fd\u6570\u6267\u884c\u4e4b\u524d\uff0c\u6570\u7ec4\u7684\u957f\u5ea6\u4f1a\u88ab\u7f13\u5b58\u5728\u67d0\u4e2a\u5730\u65b9\uff0c\u6240\u4ee5\uff0c \u5982\u679c\u4f60\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4e3a\u5f53\u524d\u6570\u7ec4\u6dfb\u52a0\u4e86\u65b0\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u90a3\u4e9b\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u662f\u4e0d\u4f1a\u88ab\u904d\u5386\u5230\u7684\u3002\u6b64\u5916\uff0c\u5982\u679c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u5bf9\u5f53\u524d\u6570\u7ec4\u8fdb\u884c\u4e86 \u5176\u5b83\u4fee\u6539\uff0c\u6bd4\u5982\u6539\u53d8\u67d0\u4e2a\u5143\u7d20\u7684\u503c\u6216\u8005\u5220\u6389\u67d0\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u968f\u540e\u7684\u904d\u5386\u64cd\u4f5c\u53ef\u80fd\u4f1a\u53d7\u5230\u672a\u9884\u671f\u7684\u5f71\u54cd\u3002\u603b\u4e4b\uff0c\u4e0d\u8981\u5c1d\u8bd5\u5728\u904d\u5386\u8fc7\u7a0b\u4e2d\u5bf9\u539f \u6570\u7ec4\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\uff0c\u867d\u7136\u89c4\u8303\u5bf9\u8fd9\u6837\u7684\u64cd\u4f5c\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u5b9a\u4e49\uff0c\u4f46\u4e3a\u4e86\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u8bf7\u4e0d\u8981\u8fd9\u6837\u505a\u3002</p> <p><code>Array.prototype.forEach()</code></p> <p>\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\u3002</p> <p><code>Array.prototype.entries()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u8fed\u4ee3\u5668\u4f1a\u5305\u542b\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7684\u952e\u503c\u5bf9\u3002</p> <p><code>Array.prototype.every()</code></p> <p>\u5982\u679c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u6ee1\u8db3\u6d4b\u8bd5\u51fd\u6570\uff0c\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002</p> <p><code>Array.prototype.some()</code></p> <p>\u5982\u679c\u6570\u7ec4\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u6ee1\u8db3\u6d4b\u8bd5\u51fd\u6570\uff0c\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002</p> <p><code>Array.prototype.filter()</code></p> <p>\u5c06\u6240\u6709\u5728\u8fc7\u6ee4\u51fd\u6570\u4e2d\u8fd4\u56de true \u7684\u6570\u7ec4\u5143\u7d20\u653e\u8fdb\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d\u5e76\u8fd4\u56de\u3002</p> <p><code>Array.prototype.find()</code></p> <p>\u627e\u5230\u7b2c\u4e00\u4e2a\u6ee1\u8db3\u6d4b\u8bd5\u51fd\u6570\u7684\u5143\u7d20\u5e76\u8fd4\u56de\u90a3\u4e2a\u5143\u7d20\u7684\u503c\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u8fd4\u56de undefined\u3002</p> <p><code>Array.prototype.findIndex()</code></p> <p>\u627e\u5230\u7b2c\u4e00\u4e2a\u6ee1\u8db3\u6d4b\u8bd5\u51fd\u6570\u7684\u5143\u7d20\u5e76\u8fd4\u56de\u90a3\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u8fd4\u56de -1\u3002</p> <p><code>Array.prototype.keys()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u8fed\u4ee3\u5668\u4f1a\u5305\u542b\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7684\u952e\u3002</p> <p><code>Array.prototype.map()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u7531\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7ec4\u6210\u7684\u65b0\u6570\u7ec4\u3002</p> <p><code>Array.prototype.reduce()</code></p> <p>\u4ece\u5de6\u5230\u53f3\u4e3a\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u628a\u4e0a\u6b21\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u653e\u5728\u4e00\u4e2a\u6682\u5b58\u5668\u4e2d\u4f20\u7ed9\u4e0b\u6b21\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u6700\u540e\u4e00\u6b21\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002</p> <p><code>Array.prototype.reduceRight()</code></p> <p>\u4ece\u53f3\u5230\u5de6\u4e3a\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u628a\u4e0a\u6b21\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u653e\u5728\u4e00\u4e2a\u6682\u5b58\u5668\u4e2d\u4f20\u7ed9\u4e0b\u6b21\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u6700\u540e\u4e00\u6b21\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002</p> <p><code>Array.prototype.values()</code></p> <p>\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u8fed\u4ee3\u5668\u4f1a\u5305\u542b\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7684\u503c\u3002</p> <p><code>Array.prototype[@@iterator]()</code></p> <p>\u548c\u4e0a\u9762\u7684 values() \u65b9\u6cd5\u662f\u540c\u4e00\u4e2a\u51fd\u6570\u3002</p> <h3 id="\u6570\u7ec4\u901a\u7528\u65b9\u6cd5">\u6570\u7ec4\u901a\u7528\u65b9\u6cd5</h3> <p><code>generics\u65b9\u6cd5\u662f\u975e\u6807\u51c6\u7684\uff0c\u5df2\u5f03\u7528\u7684\uff0c\u672a\u6765\u5c06\u4f1a\u88ab\u79fb\u9664\u7684\u6570\u7ec4\u65b9\u6cd5\u3002 \u9700\u6ce8\u610f\u7684\u662f\u6b64\u65b9\u6cd5\u540c\u65f6\u6709\u8de8\u6d4f\u89c8\u5668\u95ee\u9898. \u4f46\u662f Github\u4e0a\u6709\u53ef\u7528\u7684shim\u3002</code></p> <p>\u6709\u65f6\u4f60\u60f3\u5bf9\u5b57\u7b26\u4e32\u6216\u5176\u4ed6\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u4f7f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5\uff08\u5982\u51fd\u6570arguments\uff09\u3002\u901a\u8fc7\u8fd9\u6837\u505a\uff0c\u4f60\u53ef\u4ee5\u628a\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\uff08\u6216\u4ee5\u5176\u4ed6\u65b9\u5f0f \u628a\u975e\u6570\u7ec4\u4f5c\u4e3a\u6570\u7ec4\uff09\u6570\u7ec4\u91cc\u7684\u5b57\u7b26\u6765\u4f7f\u7528\u3002\u4f8b\u5982\uff0c\u4e3a\u4e86\u68c0\u67e5\u53d8\u91cfstr\u6bcf\u4e00\u4e2a\u5b57\u7b26\u662f\u5426\u662f\u5b57\u6bcd\uff0c\u4f60\u4f1a\u8fd9\u6837\u5199\uff1a</p> <pre><code class="language-javascript">function isLetter(character) {\n  return character &gt;= &#39;a&#39; &amp;&amp; character &lt;= &#39;z&#39;;\n}\n\nif (Array.prototype.every.call(str, isLetter)) {\n  console.log(&quot;The string &#39;&quot; + str + &quot;&#39; contains only letters!&quot;);\n}</code></pre> <p>\u8fd9\u79cd\u65b9\u6cd5\u662f\u76f8\u5f53\u8d39\u65f6\u7684\uff0c\u5728JavaScript1.6\u4e2d\u5176\u5f15\u5165\u4e86\u4e00\u4e2a\u901a\u7528\u7684\u7b80\u5199\uff1a</p> <pre><code class="language-javascript">if (Array.every(str, isLetter)) {\n  console.log(&quot;The string &#39;&quot; + str + &quot;&#39; contains only letters!&quot;);\n}</code></pre> <p>Generics\u5728String\u4e5f\u53ef\u7528\u3002</p> <p>\u8fd9\u5e76\u4e0d\u662f ECMAScript \u6807\u51c6\u7684\u4e00\u90e8\u5206\uff08\u867d\u7136 ES2015 \u6807\u51c6\u4e2d\u7684Array.from() \u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u8fd9\u4e2a\uff09\u3002 \u4e0b\u9762\u662f\u4e00\u4e2ashim\uff0c\u5176\u53ef\u4ee5\u5728\u6240\u6709\u7684\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff1a</p> <pre><code class="language-javascript">// Assumes Array extras already present (one may use polyfills for these as well)\n(function() {\n  &#39;use strict&#39;;\n\n  var i,\n    // We could also build the array of methods with the following, but the\n    //   getOwnPropertyNames() method is non-shimable:\n    // Object.getOwnPropertyNames(Array).filter(function(methodName) {\n    //   return typeof Array[methodName] === &#39;function&#39;\n    // });\n    methods = [\n      &#39;join&#39;, &#39;reverse&#39;, &#39;sort&#39;, &#39;push&#39;, &#39;pop&#39;, &#39;shift&#39;, &#39;unshift&#39;,\n      &#39;splice&#39;, &#39;concat&#39;, &#39;slice&#39;, &#39;indexOf&#39;, &#39;lastIndexOf&#39;,\n      &#39;forEach&#39;, &#39;map&#39;, &#39;reduce&#39;, &#39;reduceRight&#39;, &#39;filter&#39;,\n      &#39;some&#39;, &#39;every&#39;, &#39;find&#39;, &#39;findIndex&#39;, &#39;entries&#39;, &#39;keys&#39;,\n      &#39;values&#39;, &#39;copyWithin&#39;, &#39;includes&#39;\n    ],\n    methodCount = methods.length,\n    assignArrayGeneric = function(methodName) {\n      if (!Array[methodName]) {\n        var method = Array.prototype[methodName];\n        if (typeof method === &#39;function&#39;) {\n          Array[methodName] = function() {\n            return method.call.apply(method, arguments);\n          };\n        }\n      }\n    };\n\n  for (i = 0; i &lt; methodCount; i++) {\n    assignArrayGeneric(methods[i]);\n  }\n}());</code></pre> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4">\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4</h3> <p>\u5728\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u957f\u5ea6\u4e3a0\u7684\u7a7a\u6570\u7ec4 msgArray\uff0c\u63a5\u7740\u7ed9 msgArray[0]\u8d4b\u503c\uff0c\u7136\u540e\u7ed9 msgArray[99] \u8d4b\u503c\uff0c\u63a5\u7740\u6570\u7ec4\u957f\u5ea6\u5c31\u53d8\u6210\u4e86100\u3002</p> <pre><code class="language-javascript">var msgArray = [];\nmsgArray[0] = &#39;Hello&#39;;\nmsgArray[99] = &#39;world&#39;;\n\nif (msgArray.length === 100) {\n  console.log(&#39;\u6570\u7ec4\u957f\u5ea6\u4e3a100\u3002&#39;);\n}</code></pre> <h3 id="\u521b\u5efa\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4">\u521b\u5efa\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4</h3> <p>\u8fd9\u4e2a\u4f8b\u5b50\u521b\u5efa\u4e86\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4myVar\uff0c\u7136\u540e\u8d4b\u503c\u3002</p> <pre><code class="language-javascript">var board = [\n  [&#39;R&#39;,&#39;N&#39;,&#39;B&#39;,&#39;Q&#39;,&#39;K&#39;,&#39;B&#39;,&#39;N&#39;,&#39;R&#39;],\n  [&#39;P&#39;,&#39;P&#39;,&#39;P&#39;,&#39;P&#39;,&#39;P&#39;,&#39;P&#39;,&#39;P&#39;,&#39;P&#39;],\n  [&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;],\n  [&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;],\n  [&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;],\n  [&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;,&#39; &#39;],\n  [&#39;p&#39;,&#39;p&#39;,&#39;p&#39;,&#39;p&#39;,&#39;p&#39;,&#39;p&#39;,&#39;p&#39;,&#39;p&#39;],\n  [&#39;r&#39;,&#39;n&#39;,&#39;b&#39;,&#39;q&#39;,&#39;k&#39;,&#39;b&#39;,&#39;n&#39;,&#39;r&#39;] ];\n\nconsole.log(board.join(&#39;\\n&#39;) + &#39;\\n\\n&#39;);\n\n// Move King&#39;s Pawn forward 2\nboard[4][4] = board[6][4];\nboard[6][4] = &#39; &#39;;\nconsole.log(board.join(&#39;\\n&#39;));</code></pre> <p>\u4e0b\u9762\u662f\u8f93\u51fa\uff1a</p> <pre><code class="language-javascript">R,N,B,Q,K,B,N,R\nP,P,P,P,P,P,P,P\n , , , , , , ,\n , , , , , , ,\n , , , , , , ,\n , , , , , , ,\np,p,p,p,p,p,p,p\nr,n,b,q,k,b,n,r\n\nR,N,B,Q,K,B,N,R\nP,P,P,P,P,P,P,P\n , , , , , , ,\n , , , , , , ,\n , , , ,p, , ,\n , , , , , , ,\np,p,p,p, ,p,p,p\nr,n,b,q,k,b,n,r</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 1rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';e.exports=t}}]);