(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/algorithm/set"],{rr0w:function(e,t){var l='<h1 id="\u96c6\u5408">\u96c6\u5408</h1> <h2 id="1-\u6982\u5ff5">1 \u6982\u5ff5</h2> <p>\u96c6\u5408\u662f\u4e00\u79cd\u65e0\u5e8f\u4e14\u552f\u4e00\u7684\u6570\u636e\u7ed3\u6784\uff0cjs \u4e2d\u6709\u96c6\u5408\u8fd9\u79cd\u6570\u636e\u7ed3\u6784 Set</p> <p>\u96c6\u5408\u7684\u5e38\u7528\u64cd\u4f5c\uff1a\u53bb\u91cd\u3001\u5224\u65ad\u67d0\u5143\u7d20\u662f\u5426\u5728\u96c6\u5408\u4e2d\u3001\u6c42\u4ea4\u96c6</p> <h2 id="2-javascript-\u4e2d\u7684-set">2 JavaScript \u4e2d\u7684 Set</h2> <h3 id="21-\u6982\u5ff5">2.1 \u6982\u5ff5</h3> <p>Set \u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u7c7b\u578b\u96c6\u5408 \u2014\u2014 \u201c\u503c\u7684\u96c6\u5408\u201d\uff08\u6ca1\u6709\u952e\uff09\uff0c\u5b83\u7684\u6bcf\u4e00\u4e2a\u503c\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\u3002</p> <p>\u5b83\u7684\u4e3b\u8981\u65b9\u6cd5\u5982\u4e0b\uff1a</p> <ul> <li><code>new Set(iterable)</code> \u2014\u2014 \u521b\u5efa\u4e00\u4e2a set\uff0c\u5982\u679c\u63d0\u4f9b\u4e86\u4e00\u4e2a iterable \u5bf9\u8c61\uff08\u901a\u5e38\u662f\u6570\u7ec4\uff09\uff0c\u5c06\u4f1a\u4ece\u6570\u7ec4\u91cc\u9762\u590d\u5236\u503c\u5230 set \u4e2d</li> <li><code>set.add(value)</code> \u2014\u2014 \u6dfb\u52a0\u4e00\u4e2a\u503c\uff0c\u8fd4\u56de set \u672c\u8eab</li> <li><code>set.delete(value)</code> \u2014\u2014 \u5220\u9664\u503c\uff0c\u5982\u679c value \u5728\u8fd9\u4e2a\u65b9\u6cd5\u8c03\u7528\u7684\u65f6\u5019\u5b58\u5728\u5219\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false</li> <li><code>set.has(value)</code> \u2014\u2014 \u5982\u679c value \u5728 set \u4e2d\uff0c\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false</li> <li><code>set.clear()</code> \u2014\u2014 \u6e05\u7a7a set</li> <li><code>set.size</code> \u2014\u2014 \u8fd4\u56de\u5143\u7d20\u4e2a\u6570</li> </ul> <blockquote> <p>Set \u4e3b\u8981\u7279\u70b9\u662f\uff0c\u91cd\u590d\u4f7f\u7528\u540c\u4e00\u4e2a\u503c\u8c03\u7528 set.add(value) \u5e76\u4e0d\u4f1a\u53d1\u751f\u4ec0\u4e48\u6539\u53d8\u3002\u8fd9\u5c31\u662f Set \u91cc\u9762\u7684\u6bcf\u4e00\u4e2a\u503c\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u539f\u56e0</p> </blockquote> <h3 id="22-set-\u8fed\u4ee3">2.2 Set \u8fed\u4ee3</h3> <p>Map \u4e2d\u7528\u4e8e\u8fed\u4ee3\u7684\u65b9\u6cd5\u5728 Set \u4e2d\u4e5f\u540c\u6837\u652f\u6301\uff1a</p> <ul> <li><code>set.keys()</code> \u2014\u2014 \u904d\u5386\u5e76\u8fd4\u56de\u6240\u6709\u7684\u503c\uff08returns an iterable object for values\uff09</li> <li><code>set.values()</code> \u2014\u2014 \u4e0e <code>set.keys()</code> \u4f5c\u7528\u76f8\u540c\uff0c\u8fd9\u662f\u4e3a\u4e86\u517c\u5bb9 Map</li> <li><code>set.entries()</code> \u2014\u2014 \u904d\u5386\u5e76\u8fd4\u56de\u6240\u6709\u7684\u5b9e\u4f53\uff08returns an iterable object for entries\uff09<code>[value, value]</code>\uff0c\u5b83\u7684\u5b58\u5728\u4e5f\u662f\u4e3a\u4e86\u517c\u5bb9 Map</li> </ul> <h2 id="3-\u5b9e\u4f8b">3 \u5b9e\u4f8b</h2> <h3 id="31-leetcode-349-\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6">3.1 leetcode 349 \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6</h3> ';e.exports=l}}]);