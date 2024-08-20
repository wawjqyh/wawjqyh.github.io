(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/String/normalize"],{AhSZ:function(o,t){var n='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank">\u539f\u6587\u94fe\u63a5</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank">en</a></p> <h1 id="stringprototypenormalize">String.prototype.normalize()</h1> <h2 id="\u6982\u8ff0">\u6982\u8ff0</h2> <p>normalize() \u65b9\u6cd5\u4f1a\u6309\u7167\u6307\u5b9a\u7684\u4e00\u79cd Unicode \u6b63\u89c4\u5f62\u5f0f\u5c06\u5f53\u524d\u5b57\u7b26\u4e32\u6b63\u89c4\u5316.</p> <h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2> <pre><code class="language-javascript">str.normalize([form]);</code></pre> <h3 id="\u53c2\u6570">\u53c2\u6570</h3> <ul> <li><code>form</code> \u56db\u79cd Unicode \u6b63\u89c4\u5f62\u5f0f &quot;NFC&quot;, &quot;NFD&quot;, &quot;NFKC&quot;, \u4ee5\u53ca &quot;NFKD&quot; \u5176\u4e2d\u7684\u4e00\u4e2a, \u9ed8\u8ba4\u503c\u4e3a &quot;NFC&quot;.<ul> <li>NFC - Normalization Form Canonical Composition.</li> <li>NFD - Normalization Form Canonical Decomposition.</li> <li>NFKC - Normalization Form Compatibility Composition.</li> <li>NFKD - Normalization Form Compatibility Decomposition.</li> </ul> </li> </ul> <h3 id="\u53ef\u80fd\u51fa\u73b0\u7684\u5f02\u5e38">\u53ef\u80fd\u51fa\u73b0\u7684\u5f02\u5e38</h3> <p><code>RangeError</code></p> <p>\u5982\u679c\u7ed9 form \u4f20\u5165\u4e86\u975e\u6cd5\u7684\u53c2\u6570\u503c, \u5219\u4f1a\u629b\u51fa RangeError \u5f02\u5e38.</p> <h2 id="\u793a\u4f8b">\u793a\u4f8b</h2> <pre><code class="language-javascript">// Initial string\n\n// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE\n// U+0323: COMBINING DOT BELOW\nvar str = &quot;\\u1E9B\\u0323&quot;;\n\n\n// Canonically-composed form (NFC)\n\n// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE\n// U+0323: COMBINING DOT BELOW\nstr.normalize(&quot;NFC&quot;); // &quot;\\u1E9B\\u0323&quot;\nstr.normalize(); // same as above\n\n\n// Canonically-decomposed form (NFD)\n\n// U+017F: LATIN SMALL LETTER LONG S\n// U+0323: COMBINING DOT BELOW\n// U+0307: COMBINING DOT ABOVE\nstr.normalize(&quot;NFD&quot;); // &quot;\\u017F\\u0323\\u0307&quot;\n\n\n// Compatibly-composed (NFKC)\n\n// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE\nstr.normalize(&quot;NFKC&quot;); // &quot;\\u1E69&quot;\n\n\n// Compatibly-decomposed (NFKD)\n\n// U+0073: LATIN SMALL LETTER S\n// U+0323: COMBINING DOT BELOW\n// U+0307: COMBINING DOT ABOVE\nstr.normalize(&quot;NFKD&quot;); // &quot;\\u0073\\u0323\\u0307&quot;</code></pre> <h2 id="\u89c4\u8303">\u89c4\u8303</h2> <table> <thead> <tr> <th align="left">Specification</th> <th align="left">Status</th> <th align="left">Comment</th> </tr> </thead> <tbody><tr> <td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td> <td align="left">Standard</td> <td align="left">Initial definition</td> </tr> </tbody></table> ';o.exports=n}}]);