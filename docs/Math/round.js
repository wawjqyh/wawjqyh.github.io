(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/Math/round"],{E3R3:function(n,e){var t='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">en</a></p> <h1 id="mathround">Math.round()</h1> <p>Math.round() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u56db\u820d\u4e94\u5165\u540e\u6700\u63a5\u8fd1\u7684\u6574\u6570\u503c\u3002</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">Math.round(x)</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>x</code> \u4e00\u4e2a\u6570\u503c</li> </ul> <h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3> <p>\u7ed9\u5b9a\u6570\u5b57\u7684\u503c\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002</p> <h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2> <p>\u5982\u679c number \u7684\u5c0f\u6570\u90e8\u5206\u662f .5 \u6216\u8005\u66f4\u5927\uff0c\u8f93\u5165\u7684\u53c2\u6570\u88ab\u56db\u820d\u4e94\u5165\u5230\u4e0b\u4e00\u4e2a\u7edd\u5bf9\u503c\u66f4\u5927\u7684\u6574\u6570\u3002 \u5982\u679c number \u7684\u5c0f\u6570\u90e8\u5206\u5c0f\u4e8e .5\uff0c\u8f93\u5165 \u7684\u53c2\u6570\u88ab\u56db\u820d\u4e94\u5165\u5230\u4e0b\u4e00\u4e2a\u7edd\u5bf9\u503c\u66f4\u5c0f\u7684\u6574\u6570\u3002</p> <p>\u5982\u679c number \u7684\u5c0f\u6570\u90e8\u5206\u6070\u597d\u7b49\u4e8e .5\uff0c\u8f93\u5165\u7684\u53c2\u6570\u88ab\u56db\u820d\u4e94\u5165\u5230\u4e0b\u4e00\u4e2a\u5728\u6b63\u65e0\u7a77\uff08+\u221e\uff09\u65b9\u5411\u4e0a\u7684\u6574\u6570\u3002\u6ce8\u610f\uff0c\u4e0e\u5f88\u591a\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684round() \u51fd\u6570\u4e0d\u540c\uff0cMath.round()\u5e76\u4e0d\u603b\u662f\u56db\u820d\u4e94\u5165\u5230\u8fdc\u79bb0\u7684\u65b9\u5411\uff08\u5c24\u5176\u662f\u5728\u8d1f\u6570\u7684\u5c0f\u6570\u90e8\u5206\u6070\u597d\u7b49\u4e8e.5\u7684\u60c5\u51b5\u4e0b\uff09\u3002</p> <p>\u56e0\u4e3a round \u662f Math \u7684\u9759\u6001\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528\u4f5c Math.round()\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u4e00\u4e2a\u4f60\u81ea\u5df1\u521b\u5efa\u7684 Math \u5bf9\u8c61\u7684\u65b9\u6cd5\u3002</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <h3 id="\u4f7f\u7528-mathround">\u4f7f\u7528 Math.round</h3> <pre><code class="language-javascript">// \u8fd4\u56de 20\nx = Math.round(20.49);\n\n// \u8fd4\u56de 21\nx = Math.round(20.5);\n\n// \u8fd4\u56de -20\nx = Math.round(-20.5);\n\n// \u8fd4\u56de -21\nx = Math.round(-20.51)\n\n// Returns the value 1 (!)\n// Note the rounding error because of inaccurate floating point arithmetics\n// Compare this with Math.round10(1.005, -2) from the example below\nx = Math.round(1.005*100)/100;</code></pre> <h3 id="\u5341\u8fdb\u5236\u8c03\u6574">\u5341\u8fdb\u5236\u8c03\u6574</h3> <pre><code class="language-javascript">// Closure\n(function(){\n\n  /**\n   * Decimal adjustment of a number.\n   *\n   * @param {String}  type  The type of adjustment.\n   * @param {Number}  value The number.\n   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).\n   * @returns {Number}      The adjusted value.\n   */\n  function decimalAdjust(type, value, exp) {\n    // If the exp is undefined or zero...\n    if (typeof exp === &#39;undefined&#39; || +exp === 0) {\n      return Math[type](value);\n    }\n    value = +value;\n    exp = +exp;\n    // If the value is not a number or the exp is not an integer...\n    if (isNaN(value) || !(typeof exp === &#39;number&#39; &amp;&amp; exp % 1 === 0)) {\n      return NaN;\n    }\n    // Shift\n    value = value.toString().split(&#39;e&#39;);\n    value = Math[type](+(value[0] + &#39;e&#39; + (value[1] ? (+value[1] - exp) : -exp)));\n    // Shift back\n    value = value.toString().split(&#39;e&#39;);\n    return +(value[0] + &#39;e&#39; + (value[1] ? (+value[1] + exp) : exp));\n  }\n\n  // Decimal round\n  if (!Math.round10) {\n    Math.round10 = function(value, exp) {\n      return decimalAdjust(&#39;round&#39;, value, exp);\n    };\n  }\n  // Decimal floor\n  if (!Math.floor10) {\n    Math.floor10 = function(value, exp) {\n      return decimalAdjust(&#39;floor&#39;, value, exp);\n    };\n  }\n  // Decimal ceil\n  if (!Math.ceil10) {\n    Math.ceil10 = function(value, exp) {\n      return decimalAdjust(&#39;ceil&#39;, value, exp);\n    };\n  }\n\n})();\n\n// Round\nMath.round10(55.55, -1); // 55.6\nMath.round10(55.549, -1); // 55.5\nMath.round10(55, 1); // 60\nMath.round10(54.9, 1); // 50\nMath.round10(-55.55, -1); // -55.5\nMath.round10(-55.551, -1); // -55.6\nMath.round10(-55, 1); // -50\nMath.round10(-55.1, 1); // -60\nMath.round10(1.005, -2); // 1.01 -- compare this with Math.round(1.005*100)/100 above\n// Floor\nMath.floor10(55.59, -1); // 55.5\nMath.floor10(59, 1); // 50\nMath.floor10(-55.51, -1); // -55.6\nMath.floor10(-51, 1); // -60\n// Ceil\nMath.ceil10(55.51, -1); // 55.6\nMath.ceil10(51, 1); // 60\nMath.ceil10(-55.59, -1); // -55.5\nMath.ceil10(-59, 1); // -50</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 1rd Edition (ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> <tr> <td align="left">ECMAScript 5.1 (ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> <tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left"></td> </tr> </tbody></table> ';n.exports=t}}]);