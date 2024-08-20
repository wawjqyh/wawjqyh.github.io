(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/algorithm/graph"],{"1vrt":function(e,i,n){var d=n("Rxnk"),o=n("b4bC"),c=n("0pZB"),l=n("IXLk"),h=d(o),t=d(c),p=d(l),s='<h1 id="\u56fe">\u56fe</h1> <h2 id="1-\u6982\u5ff5">1 \u6982\u5ff5</h2> <p>\u6d89\u53ca\u56fe\u7684\u7b97\u6cd5\u6709\u5f88\u591a\uff0c\u4e5f\u975e\u5e38\u590d\u6742\uff0c\u6bd4\u5982\u56fe\u7684\u641c\u7d22\u3001\u6700\u77ed\u8def\u5f84\u3001\u6700\u5c0f\u751f\u6210\u6811\u3001\u4e8c\u5206\u56fe\u7b49</p> <ul> <li>\u9876\u70b9\uff1a\u6811\u4e2d\u7684\u5143\u7d20\u6211\u4eec\u79f0\u4e3a\u8282\u70b9\uff0c\u56fe\u4e2d\u7684\u5143\u7d20\u6211\u4eec\u5c31\u53eb\u4f5c\u9876\u70b9\uff08vertex\uff09</li> <li>\u8fb9\uff1a\u56fe\u4e2d\u7684\u4e00\u4e2a\u9876\u70b9\u53ef\u4ee5\u4e0e\u4efb\u610f\u5176\u4ed6\u9876\u70b9\u5efa\u7acb\u8fde\u63a5\u5173\u7cfb\u3002\u6211\u4eec\u628a\u8fd9\u79cd\u5efa\u7acb\u7684\u5173\u7cfb\u53eb\u4f5c\u8fb9\uff08edge\uff09</li> <li>\u6709\u5411\u56fe\uff1a\u8fb9\u6709\u65b9\u5411\u7684\u56fe\u53eb\u4f5c <code>\u6709\u5411\u56fe</code></li> <li>\u65e0\u5411\u56fe\uff1a\u8fb9\u6ca1\u6709\u65b9\u5411\u7684\u56fe\u5c31\u53eb\u4f5c <code>\u65e0\u5411\u56fe</code></li> <li>\u5165\u5ea6\uff1a\u8868\u793a\u6709\u591a\u5c11\u6761\u8fb9\u6307\u5411\u8fd9\u4e2a\u9876\u70b9\u3002\u5728\u6709\u5411\u56fe\u4e2d\u624d\u6709\u5165\u5ea6\u51fa\u5ea6</li> <li>\u51fa\u5ea6\uff1a\u8868\u793a\u6709\u591a\u5c11\u6761\u8fb9\u662f\u4ee5\u8fd9\u4e2a\u9876\u70b9\u4e3a\u8d77\u70b9\u6307\u5411\u5176\u4ed6\u9876\u70b9\u3002\u5bf9\u5e94\u5230\u5fae\u535a\u7684\u4f8b\u5b50\uff0c\u5165\u5ea6\u5c31\u8868\u793a\u6709\u591a\u5c11\u7c89\u4e1d\uff0c\u51fa\u5ea6\u5c31\u8868\u793a\u5173\u6ce8\u4e86\u591a\u5c11\u4eba</li> <li>\u5e26\u6743\u56fe\uff1a\u5728\u5e26\u6743\u56fe\u4e2d\uff0c\u6bcf\u6761\u8fb9\u90fd\u6709\u4e00\u4e2a\u6743\u91cd\uff08weight\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6743\u91cd\u6765\u8868\u793a QQ \u597d\u53cb\u95f4\u7684\u4eb2\u5bc6\u5ea6</li> </ul> <h2 id="2-\u56fe\u7684\u5b58\u50a8">2 \u56fe\u7684\u5b58\u50a8</h2> <h3 id="21-\u90bb\u63a5\u77e9\u9635">2.1 \u90bb\u63a5\u77e9\u9635</h3> <p>\u56fe\u6700\u76f4\u89c2\u7684\u4e00\u79cd\u5b58\u50a8\u65b9\u6cd5\u5c31\u662f\uff0c\u90bb\u63a5\u77e9\u9635\uff08Adjacency Matrix\uff09</p> <p>\u90bb\u63a5\u77e9\u9635\u7684\u5e95\u5c42\u4f9d\u8d56\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u3002\u5bf9\u4e8e\u65e0\u5411\u56fe\u6765\u8bf4\uff0c\u5982\u679c\u9876\u70b9 <code>i</code> \u4e0e\u9876\u70b9 <code>j</code> \u4e4b\u95f4\u6709\u8fb9\uff0c\u6211\u4eec\u5c31\u5c06 <code>A[i][j]</code> \u548c <code>A[j][i]</code> \u6807\u8bb0\u4e3a <code>1</code>\uff1b\u5bf9\u4e8e\u6709\u5411\u56fe\u6765\u8bf4\uff0c\u5982\u679c\u9876\u70b9 <code>i</code> \u5230\u9876\u70b9 <code>j</code> \u4e4b\u95f4\uff0c\u6709\u4e00\u6761\u7bad\u5934\u4ece\u9876\u70b9 <code>i</code> \u6307\u5411\u9876\u70b9 <code>j</code> \u7684\u8fb9\uff0c\u90a3\u6211\u4eec\u5c31\u5c06 <code>A[i][j]</code> \u6807\u8bb0\u4e3a <code>1</code>\u3002\u540c\u7406\uff0c\u5982\u679c\u6709\u4e00\u6761\u7bad\u5934\u4ece\u9876\u70b9 <code>j</code> \u6307\u5411\u9876\u70b9 <code>i</code> \u7684\u8fb9\uff0c\u6211\u4eec\u5c31\u5c06 <code>A[j][i]</code> \u6807\u8bb0\u4e3a <code>1</code>\u3002\u5bf9\u4e8e\u5e26\u6743\u56fe\uff0c\u6570\u7ec4\u4e2d\u5c31\u5b58\u50a8\u76f8\u5e94\u7684\u6743\u91cd</p> <p><img src="'+h+'" alt=""></p> <p>\u4f18\u7f3a\u70b9\uff1a</p> <ul> <li>\u7b80\u5355\u3001\u76f4\u89c2</li> <li>\u65b9\u4fbf\u8ba1\u7b97\uff0c\u53ef\u4ee5\u5c06\u5f88\u591a\u56fe\u7684\u8fd0\u7b97\u8f6c\u6362\u6210\u77e9\u9635\u4e4b\u95f4\u7684\u8fd0\u7b97\u3002\u6bd4\u5982\u6c42\u89e3\u6700\u77ed\u8def\u5f84\u95ee\u9898\u65f6\u4f1a\u63d0\u5230\u4e00\u4e2a <code>Floyd-Warshall</code> \u7b97\u6cd5</li> <li>\u6bd4\u8f83\u6d6a\u8d39\u5b58\u50a8\u7a7a\u95f4</li> </ul> <h3 id="23-\u90bb\u63a5\u8868">2.3 \u90bb\u63a5\u8868</h3> <p>\u90bb\u63a5\u8868\u6bcf\u4e2a\u9876\u70b9\u5bf9\u5e94\u4e00\u6761\u94fe\u8868\uff0c\u94fe\u8868\u4e2d\u5b58\u50a8\u7684\u662f\u4e0e\u8fd9\u4e2a\u9876\u70b9\u76f8\u8fde\u63a5\u7684\u5176\u4ed6\u9876\u70b9</p> <p><img src="'+t+'" alt=""></p> <p>\u90bb\u63a5\u77e9\u9635\u5b58\u50a8\u8d77\u6765\u6bd4\u8f83\u6d6a\u8d39\u7a7a\u95f4\uff0c\u4f46\u662f\u4f7f\u7528\u8d77\u6765\u6bd4\u8f83\u8282\u7701\u65f6\u95f4\u3002\u76f8\u53cd\uff0c\u90bb\u63a5\u8868\u5b58\u50a8\u8d77\u6765\u6bd4\u8f83\u8282\u7701\u7a7a\u95f4\uff0c\u4f46\u662f\u4f7f\u7528\u8d77\u6765\u5c31\u6bd4\u8f83\u8017\u65f6\u95f4</p> <h2 id="3-\u56fe\u7684\u904d\u5386">3 \u56fe\u7684\u904d\u5386</h2> <ul> <li>\u6df1\u5ea6\u4f18\u5148\u904d\u5386\uff08Depth-First-Search\uff09\uff1a\u5c3d\u53ef\u80fd\u6df1\u7684\u641c\u7d22\u56fe\u7684\u5206\u652f</li> <li>\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff08Breadth-First-Search\uff09\uff1a\u5148\u8bbf\u95ee\u79bb\u6839\u8282\u70b9\u6700\u8fd1\u7684\u8282\u70b9</li> </ul> <h3 id="31-\u6df1\u5ea6\u4f18\u5148\u904d\u5386">3.1 \u6df1\u5ea6\u4f18\u5148\u904d\u5386</h3> <p>\u7b97\u6cd5\u5b9e\u73b0\u6b65\u9aa4\uff1a</p> <ol> <li>\u8bbf\u95ee\u4e00\u4e2a\u8d77\u59cb\u9876\u70b9</li> <li>\u5bf9\u9876\u70b9\u7684 <code>\u6ca1\u8bbf\u95ee\u8fc7\u7684\u76f8\u90bb\u9876\u70b9</code> \u6328\u4e2a\u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386</li> </ol> <p>\u4e0b\u9762\u5bf9\u8fd9\u4e2a\u56fe\u8fdb\u884c\u904d\u5386\uff1a</p> <p><img src="'+p+'" alt=""></p> <pre><code class="language-js">const graph = {\n  0: [1, 2],\n  1: [2],\n  2: [0, 3],\n  3: [3]\n};\n\nfunction dfs(graph, vertex) {\n  const visited = new Set(); // \u8bb0\u5f55\u8bbf\u95ee\u8fc7\u7684\u9876\u70b9\n\n  function visit(v) {\n    console.log(v); // \u8bbf\u95ee\u5f53\u524d\u9876\u70b9\n    visited.add(v);\n\n    // \u904d\u5386\u76f8\u90bb\u9876\u70b9\n    graph[v].forEach(n =&gt; {\n      // \u5224\u65ad\u76f8\u90bb\u7684\u9876\u70b9\u662f\u5426\u88ab\u8bbf\u95ee\u8fc7\n      if (!visited.has(n)) {\n        visit(n);\n      }\n    });\n  }\n\n  visit(vertex);\n}\n\ndfs(graph, 2);</code></pre> <h3 id="32-\u5e7f\u5ea6\u4f18\u5148\u904d\u5386">3.2 \u5e7f\u5ea6\u4f18\u5148\u904d\u5386</h3> <p>\u7b97\u6cd5\u5b9e\u73b0\u6b65\u9aa4\uff1a</p> <ol> <li>\u65b0\u5efa\u4e00\u4e2a\u961f\u5217\uff0c\u628a\u8d77\u59cb\u9876\u70b9\u5165\u961f</li> <li>\u628a\u961f\u5934\u51fa\u961f\u5e76\u8bbf\u95ee</li> <li>\u628a\u961f\u5934\u7684 <code>\u6ca1\u8bbf\u95ee\u8fc7\u7684\u76f8\u90bb\u9876\u70b9</code> \u5165\u961f</li> <li>\u91cd\u590d\u7b2c\u4e8c\u3001\u4e09\u6b65\uff0c\u76f4\u5230\u961f\u5217\u4e3a\u7a7a</li> </ol> <pre><code class="language-js">const graph = {\n  0: [1, 2],\n  1: [2],\n  2: [0, 3],\n  3: [3]\n};\n\nfunction bfs(graph, vertex) {\n  const visited = new Set(); // \u8bb0\u5f55\u8bbf\u95ee\u8fc7\u7684\u9876\u70b9\n  let queue = [vertex]; // \u5f85\u8bbf\u95ee\u7684\u9876\u70b9\u7684\u961f\u5217\n\n  while (queue.length) {\n    const v = queue.shift(); // \u628a\u961f\u5934\u51fa\u961f\u5e76\u8bbf\u95ee\n    console.log(v);\n    visited.add(v);\n\n    // \u904d\u5386\u76f8\u90bb\u9876\u70b9\n    graph[v].forEach(n =&gt; {\n      // \u5224\u65ad\u76f8\u90bb\u7684\u9876\u70b9\u662f\u5426\u88ab\u8bbf\u95ee\u8fc7\n      if (!visited.has(n)) {\n        queue.push(n); // \u628a\u6ca1\u8bbf\u95ee\u8fc7\u7684\u76f8\u90bb\u9876\u70b9\u5165\u961f\n      }\n    });\n  }\n}\n\nbfs(graph, 2);</code></pre> <h2 id="4-\u5b9e\u4f8b">4 \u5b9e\u4f8b</h2> <h3 id="41-leetcode-65-\u6709\u6548\u6570\u5b57">4.1 LeetCode 65 \u6709\u6548\u6570\u5b57</h3> <h3 id="42-leetcode-417-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898">4.2 LeetCode 417 \u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898</h3> <h3 id="43-leetcode-133-\u514b\u9686\u56fe">4.3 LeetCode 133 \u514b\u9686\u56fe</h3> ';e.exports=s}}]);