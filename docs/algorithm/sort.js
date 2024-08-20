(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/algorithm/sort"],{bhGQ:function(n,r){var e='<h1 id="\u6392\u5e8f">\u6392\u5e8f</h1> <p>\u7b97\u6cd5\u52a8\u753b\u6f14\u793a <a href="https://visualgo.net/zh">https://visualgo.net/zh</a></p> <h2 id="1-\u5192\u6ce1\u6392\u5e8f">1 \u5192\u6ce1\u6392\u5e8f</h2> <blockquote> <p>\u5192\u6ce1\u6392\u5e8f\uff0c\u5bf9\u6bd4\u76f8\u90bb\u7684\u5143\u7d20\uff0c\u5c06\u5927\u7684\u9010\u6b65\u79fb\u5230\u672b\u5c3e</p> </blockquote> <p><strong>\u601d\u8def\uff1a</strong></p> <p>\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\u6bd4\u8f83\uff0c\u5927\u7684\u5f80\u540e\u632a</p> <p><strong>\u65f6\u95f4\u590d\u6742\u5ea6\uff1a</strong></p> <p><code>O(n^2)</code></p> <pre><code class="language-js">function sort(arr) {\n  for (let i = 0; i &lt; arr.length - 1; i++) {\n    for (let j = 0; j &lt; arr.length - i - 1; j++) {\n      if (arr[j] &gt; arr[j + 1]) {\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n  return arr;\n}</code></pre> <h2 id="2-\u9009\u62e9\u6392\u5e8f">2 \u9009\u62e9\u6392\u5e8f</h2> <blockquote> <p>\u9009\u62e9\u6392\u5e8f\uff0c\u5373\u9009\u62e9\u6700\u5c0f\u7684\u5143\u7d20\u653e\u5728\u5934\u90e8</p> </blockquote> <p><strong>\u601d\u8def\uff1a</strong></p> <ul> <li>\u904d\u5386\u6570\u7ec4\uff0c\u8bb0\u4f4f\u6700\u5c0f\u5143\u7d20\u7684\u4f4d\u7f6e</li> <li>\u5c06\u6700\u5c0f\u7684\u5143\u7d20\u8ddf\u6570\u7ec4\u5934\u90e8(\u672a\u6392\u5e8f\u8fc7\u7684)\u5143\u7d20\u4ea4\u6362\u4f4d\u7f6e</li> </ul> <p><strong>\u65f6\u95f4\u590d\u6742\u5ea6\uff1a</strong></p> <p><code>O(n^2)</code></p> <pre><code class="language-js">function sort(arr) {\n  for (let i = 0; i &lt; arr.length; i++) {\n    let minIndex = i;\n\n    // i \u4e4b\u524d\u7684\u5143\u7d20\u662f\u6392\u5e8f\u8fc7\u7684\n    for (let j = i; j &lt; arr.length; j++) {\n      // \u627e\u51fa\u540e\u9762\u6700\u5c0f\u7684\u5143\u7d20\n      if (arr[j] &lt; arr[minIndex]) {\n        minIndex = j;\n      }\n    }\n\n    // i \u662f\u5f85\u4ea4\u6362\u7684\u5143\u7d20\n    let temp = arr[i];\n    arr[i] = arr[minIndex];\n    arr[minIndex] = temp;\n  }\n\n  return arr;\n}</code></pre> <h2 id="3-\u63d2\u5165\u6392\u5e8f">3 \u63d2\u5165\u6392\u5e8f</h2> <blockquote> <p>\u63d2\u5165\u6392\u5e8f\uff0c\u5c06\u540e\u9762\u7684\u5143\u7d20\u63d2\u5165\u5230\u524d\u9762\u6392\u5e8f\u597d\u7684\u6570\u7ec4\u4e2d</p> </blockquote> <p><strong>\u601d\u8def\uff1a</strong></p> <ul> <li>\u6570\u7ec4\u5206\u4e3a\u524d\u534a\u6bb5\u548c\u540e\u534a\u6bb5\u5c06\uff0c\u524d\u534a\u6bb5\u662f\u6392\u5e8f\u597d\u7684</li> <li>\u53d6\u540e\u534a\u6bb5\u7b2c\u4e00\u4e2a\u5f85\u6392\u5e8f\u7684\u5143\u7d20\uff0c\u63d0\u51fa\u6765</li> <li>\u9010\u4e00\u5f80\u524d\u5bf9\u6bd4\uff0c\u63d2\u5165\u5230\u5408\u9002\u7684\u4f4d\u7f6e</li> </ul> <p><strong>\u65f6\u95f4\u590d\u6742\u5ea6\uff1a</strong></p> <ul> <li><code>O(n^2)</code> \u6700\u574f</li> <li><code>O(n)</code> \u6700\u597d</li> </ul> <pre><code class="language-js">function sort(arr) {\n  for (let i = 1; i &lt; arr.length; i++) {\n    let target = arr[i]; // \u5f85\u63d2\u5165\u7684\u5143\u7d20\n\n    for (let j = i - 1; j &gt;= 0; j--) {\n      // \u6bd4\u63d2\u5165\u7684\u5143\u7d20\u5927\uff0c\u5c31\u5f80\u540e\u632a\n      if (arr[j] &gt; target) {\n        arr[j + 1] = arr[j];\n        arr[j] = target;\n      }\n\n      // \u8fd9\u91cc\u8868\u793a\u632a\u5230\u4e86\u5408\u9002\u7684\u4f4d\u7f6e\uff0c\u524d\u9762\u7684\u6570\u56e0\u4e3a\u662f\u6392\u5e8f\u597d\u7684\uff0c\u4e0d\u9700\u8981\u7ee7\u7eed\u5bf9\u6bd4\u4e86\n      else {\n        break;\n      }\n    }\n  }\n\n  return arr;\n}</code></pre> <h2 id="4-\u5f52\u5e76\u6392\u5e8f">4 \u5f52\u5e76\u6392\u5e8f</h2> <blockquote> <p>\u5f52\u5e76\u6392\u5e8f\uff0c\u62c6\u5206\u5408\u5e76\u6709\u5e8f\u6570\u7ec4\u3002\u91c7\u7528\u5206\u800c\u6cbb\u4e4b\u7684\u601d\u60f3\uff0c\u5c06\u5927\u95ee\u9898\u62c6\u5206\u4e3a\u91cd\u590d\u7684\u5c0f\u95ee\u9898</p> </blockquote> <p><strong>\u601d\u8def\uff1a</strong></p> <ul> <li>\u5c06\u6570\u7ec4\u62c6\u5206\u4e3a\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u7684\u6709\u5e8f\u6570\u7ec4</li> <li>\u9010\u6b65\u7684\u5408\u5e76\u6709\u5e8f\u6570\u7ec4</li> </ul> <p><strong>\u590d\u6742\u5ea6\uff1a</strong></p> <p><code>O(n log n)</code></p> <pre><code class="language-js">function sort(arr) {\n  if (arr.length === 1) return arr;\n\n  // \u62c6\u5206\u6570\u7ec4\n  let midIndex = Math.floor(arr.length / 2);\n  let left = arr.slice(0, midIndex);\n  let right = arr.slice(midIndex, arr.length);\n\n  let sLeft = sort(left);\n  let sRight = sort(right);\n\n  // \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\n  let newArr = [];\n\n  while (sLeft.length &amp;&amp; sRight.length) {\n    if (sLeft[0] &lt; sRight[0]) {\n      newArr.push(sLeft.shift());\n    } else {\n      newArr.push(sRight.shift());\n    }\n  }\n\n  while (sLeft.length) {\n    newArr.push(sLeft.shift());\n  }\n\n  while (sRight.length) {\n    newArr.push(sRight.shift());\n  }\n\n  return newArr;\n}</code></pre> <p><strong>\u62c6\u5206\u903b\u8f91\uff1a</strong></p> <pre><code class="language-js">// \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\nfunction merge2(arr1, arr2) {\n  let arr = [];\n\n  while (arr1.length &amp;&amp; arr2.length) {\n    if (arr1[0] &lt; arr2[0]) {\n      arr.push(arr1.shift());\n    } else {\n      arr.push(arr2.shift());\n    }\n  }\n\n  while (arr1.length) {\n    arr.push(arr1.shift());\n  }\n  while (arr2.length) {\n    arr.push(arr2.shift());\n  }\n\n  return arr;\n}\n\nfunction sort(arr) {\n  if (arr.length === 1) return arr;\n\n  // \u62c6\u5206\u6570\u7ec4\n  let midIndex = Math.floor(arr.length / 2);\n  let left = arr.slice(0, midIndex);\n  let right = arr.slice(midIndex, arr.length);\n\n  let sLeft = sort(left);\n  let sRight = sort(right);\n\n  return merge2(sLeft, sRight);\n}</code></pre> <h2 id="5-\u5feb\u901f\u6392\u5e8f">5 \u5feb\u901f\u6392\u5e8f</h2> <p><strong>\u601d\u8def\uff1a</strong></p> <ul> <li>\u9009\u62e9\u7b2c\u4e00\u5143\u7d20\u4e3a\u57fa\u51c6\u70b9\uff0c\u5c06\u6bd4\u5b83\u5c0f\u7684\u653e\u5de6\u8fb9\uff0c\u6bd4\u4ed6\u5927\u7684\u653e\u53f3\u8fb9</li> <li>\u9012\u5f52\u7684\u5c06\u5de6\u53f3\u4e24\u4e2a\u6570\u7ec4\u6267\u884c\u4e0a\u9762\u7684\u6b65\u9aa4</li> </ul> <p><strong>\u590d\u6742\u5ea6\uff1a</strong></p> <p><code>O(n log n)</code></p> <pre><code class="language-js">function sort(arr) {\n  if (arr.length &lt; 2) return arr;\n\n  let left = [];\n  let right = [];\n  const mid = arr[0];\n\n  for (let i = 1; i &lt; arr.length; i++) {\n    if (arr[i] &lt; mid) {\n      left.push(arr[i]);\n    } else {\n      right.push(arr[i]);\n    }\n  }\n\n  let sLeft = sort(left);\n  let sRight = sort(right);\n\n  return [...sLeft, mid, ...sRight];\n}</code></pre> <h2 id="6-\u987a\u5e8f\u641c\u7d22">6 \u987a\u5e8f\u641c\u7d22</h2> <h2 id="7-\u4e8c\u5206\u641c\u7d22">7 \u4e8c\u5206\u641c\u7d22</h2> <h2 id="8-leetcode">8 LeetCode</h2> <h3 id="81-leetcode-21-\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868">8.1 LeetCode 21 \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868</h3> <h3 id="82-leetcode-374-\u731c\u6570\u5b57\u5927\u5c0f">8.2 LeetCode 374 \u731c\u6570\u5b57\u5927\u5c0f</h3> ';n.exports=e}}]);