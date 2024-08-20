(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/js/error"],{ALTU:function(r,e){var o='<h1 id="\u9519\u8bef\u5904\u7406">\u9519\u8bef\u5904\u7406</h1> <h2 id="1-try-catch">1 try catch</h2> <h3 id="11-\u76f8\u5173\u6982\u5ff5">1.1 \u76f8\u5173\u6982\u5ff5</h3> <blockquote> <p><code>try..catch</code> \u4ec5\u5bf9\u8fd0\u884c\u65f6\u7684 <code>error</code> \u6709\u6548</p> </blockquote> <p>\u8981\u4f7f\u5f97 <code>try..catch</code> \u80fd\u5de5\u4f5c\uff0c\u4ee3\u7801\u5fc5\u987b\u662f\u53ef\u6267\u884c\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u5fc5\u987b\u662f\u6709\u6548\u7684 JavaScript \u4ee3\u7801\u3002\u5982\u679c\u4ee3\u7801\u5305\u542b\u8bed\u6cd5\u9519\u8bef\uff0c\u90a3\u4e48 <code>try..catch</code> \u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c</p> <p>\u5728\u8bfb\u53d6\u9636\u6bb5\u53d1\u751f\u7684\u9519\u8bef\u88ab\u79f0\u4e3a\u201c\u89e3\u6790\u65f6\u95f4\uff08parse-time\uff09\u201d\u9519\u8bef\uff0c\u5e76\u4e14\u65e0\u6cd5\u6062\u590d\uff08\u4ece\u8be5\u4ee3\u7801\u5185\u90e8\uff09\u3002\u8fd9\u662f\u56e0\u4e3a\u5f15\u64ce\u65e0\u6cd5\u7406\u89e3\u8be5\u4ee3\u7801</p> <p>\u6240\u4ee5\uff0c<code>try..catch</code> \u53ea\u80fd\u5904\u7406\u6709\u6548\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u9519\u8bef\u3002\u8fd9\u7c7b\u9519\u8bef\u88ab\u79f0\u4e3a\u201c\u8fd0\u884c\u65f6\u7684\u9519\u8bef\uff08runtime errors\uff09\u201d\uff0c\u6709\u65f6\u88ab\u79f0\u4e3a\u201c\u5f02\u5e38\uff08exceptions\uff09\u201d</p> <blockquote> <p><code>try..catch</code> \u540c\u6b65\u5de5\u4f5c\uff0c\u4f8b\u5982\u56de\u8c03\u51fd\u6570\u4e2d\u7684\u5f02\u5e38\u4e0d\u4f1a\u88ab\u6355\u83b7</p> </blockquote> <h3 id="12-error-\u5bf9\u8c61">1.2 Error \u5bf9\u8c61</h3> <p>\u53d1\u751f\u9519\u8bef\u65f6\uff0cJavaScript \u751f\u6210\u4e00\u4e2a\u5305\u542b\u6709\u5173\u5176\u8be6\u7ec6\u4fe1\u606f\u7684\u5bf9\u8c61\u3002\u7136\u540e\u5c06\u8be5\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9 <code>catch</code></p> <p><code>error</code> \u5bf9\u8c61\u4e3b\u8981\u7684\u5c5e\u6027\uff1a</p> <ul> <li><code>name</code> Error \u540d\u79f0\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u672a\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u540d\u79f0\u662f &quot;ReferenceError&quot;</li> <li><code>message</code> \u5173\u4e8e error \u7684\u8be6\u7ec6\u6587\u5b57\u63cf\u8ff0</li> <li><code>stack</code> \u5f53\u524d\u7684\u8c03\u7528\u6808\uff1a\u7528\u4e8e\u8c03\u8bd5\u76ee\u7684\u7684\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u5bfc\u81f4 error \u7684\u5d4c\u5957\u8c03\u7528\u5e8f\u5217\u7684\u4fe1\u606f</li> </ul> <h3 id="13-\u629b\u51fa\u81ea\u5b9a\u4e49\u7684-error">1.3 \u629b\u51fa\u81ea\u5b9a\u4e49\u7684 error</h3> <p>throw \u64cd\u4f5c\u7b26\u4f1a\u751f\u6210\u4e00\u4e2a error \u5bf9\u8c61</p> <pre><code class="language-js">throw &lt;error object&gt;</code></pre> <blockquote> <p>\u6280\u672f\u4e0a\u8bb2\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4efb\u4f55\u4e1c\u897f\u7528\u4f5c <code>error</code> \u5bf9\u8c61\u3002\u751a\u81f3\u53ef\u4ee5\u662f\u4e00\u4e2a\u539f\u59cb\u7c7b\u578b\u6570\u636e\uff0c\u4f8b\u5982\u6570\u5b57\u6216\u5b57\u7b26\u4e32\uff0c\u4f46\u6700\u597d\u4f7f\u7528\u5bf9\u8c61\uff0c\u6700\u597d\u4f7f\u7528\u5177\u6709 <code>name</code> \u548c <code>message</code> \u5c5e\u6027\u7684\u5bf9\u8c61\uff08\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u4fdd\u6301\u4e0e\u5185\u5efa <code>error</code> \u7684\u517c\u5bb9\u6027\uff09</p> </blockquote> <blockquote> <p>JavaScript \u4e2d\u6709\u5f88\u591a\u5185\u5efa\u7684\u6807\u51c6 <code>error</code> \u7684\u6784\u9020\u5668\uff1a<code>Error\uff0cSyntaxError\uff0cReferenceError\uff0cTypeError</code> \u7b49\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u521b\u5efa <code>error</code> \u5bf9\u8c61</p> </blockquote> <p>\u5bf9\u4e8e\u5185\u5efa\u7684 error\uff08\u4e0d\u662f\u5bf9\u4e8e\u5176\u4ed6\u4efb\u4f55\u5bf9\u8c61\uff0c\u4ec5\u4ec5\u662f\u5bf9\u4e8e error\uff09\uff0cname \u5c5e\u6027\u521a\u597d\u5c31\u662f\u6784\u9020\u5668\u7684\u540d\u5b57\u3002message \u5219\u6765\u81ea\u4e8e\u53c2\u6570\uff08argument\uff09</p> <pre><code class="language-js">let error = new Error(&#39;Things happen o_O&#39;);\n\nalert(error.name); // Error\nalert(error.message); // Things happen o_O</code></pre> <h3 id="14-trycatchfinally">1.4 <code>try\u2026catch\u2026finally</code></h3> <pre><code class="language-js">try {\n  //  ... \u5c1d\u8bd5\u6267\u884c\u7684\u4ee3\u7801 ...\n} catch (e) {\n  //  ... \u5904\u7406 error ...\n} finally {\n  //  ... \u603b\u662f\u4f1a\u6267\u884c\u7684\u4ee3\u7801 ...\n}</code></pre> <p>\u5982\u679c try \u91cc\u9762\u6709 return\uff0c\u4e5f\u4f1a\u5728 return \u524d\u5148\u6267\u884c finally \u4e2d\u7684\u4ee3\u7801</p> <pre><code class="language-js">function func() {\n  try {\n    return 1;\n  } catch (e) {\n    /* ... */\n  } finally {\n    alert(&#39;finally&#39;);\n  }\n}\n\nalert(func()); // \u5148\u6267\u884c finally \u4e2d\u7684 alert\uff0c\u7136\u540e\u6267\u884c\u8fd9\u4e2a alert</code></pre> <h3 id="14-\u5168\u5c40-catch">1.4 \u5168\u5c40 catch</h3> <ul> <li><code>Node.JS</code> \u6709 <code>process.on(&quot;uncaughtException&quot;)</code></li> <li>\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u6709 <code>window.onerror</code> \u5c5e\u6027\uff0c\u8be5\u51fd\u6570\u5c06\u5728\u53d1\u751f\u672a\u6355\u83b7\u7684 <code>error</code> \u65f6\u6267\u884c</li> </ul> <pre><code class="language-js">window.onerror = function(message, url, line, col, error) {\n  // ...\n};</code></pre> <ul> <li><code>message</code> Error \u4fe1\u606f</li> <li><code>url</code> \u53d1\u751f error \u7684\u811a\u672c\u7684 URL</li> <li><code>line\uff0ccol</code> \u53d1\u751f error \u5904\u7684\u4ee3\u7801\u7684\u884c\u53f7\u548c\u5217\u53f7</li> <li><code>error</code> Error \u5bf9\u8c61</li> </ul> <blockquote> <p>\u5168\u5c40\u9519\u8bef\u5904\u7406\u7a0b\u5e8f <code>window.onerror</code> \u7684\u4f5c\u7528\u901a\u5e38\u4e0d\u662f\u6062\u590d\u811a\u672c\u7684\u6267\u884c\uff0c\u5b83\u53ea\u80fd\u6355\u83b7\u9519\u8bef\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5c06\u9519\u8bef\u4fe1\u606f\u53d1\u9001\u7ed9\u5f00\u53d1\u8005</p> </blockquote> <h2 id="2-\u81ea\u5b9a\u4e49-error">2 \u81ea\u5b9a\u4e49 Error</h2> <h3 id="21-\u6269\u5c55-error">2.1 \u6269\u5c55 Error</h3> <p>\u5f53\u6211\u4eec\u5728\u5f00\u53d1\u67d0\u4e9b\u4e1c\u897f\u65f6\uff0c\u7ecf\u5e38\u4f1a\u9700\u8981\u6211\u4eec\u81ea\u5df1\u7684 <code>error</code> \u7c7b\u6765\u53cd\u6620\u5728\u6211\u4eec\u7684\u4efb\u52a1\u4e2d\u53ef\u80fd\u51fa\u9519\u7684\u7279\u5b9a\u4efb\u52a1</p> <p>\u5bf9\u4e8e\u7f51\u7edc\u64cd\u4f5c\u4e2d\u7684 <code>error</code>\uff0c\u6211\u4eec\u9700\u8981 <code>HttpError</code>\uff0c\u5bf9\u4e8e\u6570\u636e\u5e93\u64cd\u4f5c\u4e2d\u7684 <code>error</code>\uff0c\u6211\u4eec\u9700\u8981 <code>DbError</code>\uff0c\u5bf9\u4e8e\u641c\u7d22\u64cd\u4f5c\u4e2d\u7684 <code>error</code>\uff0c\u6211\u4eec\u9700\u8981 <code>NotFoundError</code>\uff0c\u7b49\u7b49</p> <p>JavaScript \u5141\u8bb8\u5c06 <code>throw</code> \u4e0e\u4efb\u4f55\u53c2\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u6240\u4ee5\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u7684 <code>error</code> \u4e0d\u9700\u8981\u4ece <code>Error</code> \u4e2d\u7ee7\u627f\u3002\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u7ee7\u627f\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528 <code>obj instanceof Error</code> \u6765\u8bc6\u522b <code>error</code> \u5bf9\u8c61</p> <pre><code class="language-js">class ValidationError extends Error {\n  constructor(message) {\n    super(message); // (1)\n    this.name = &#39;ValidationError&#39;; // (2)\n  }\n}\n\nfunction test() {\n  throw new ValidationError(&#39;Whoops!&#39;);\n}\n\ntry {\n  test();\n} catch (err) {\n  alert(err.message); // Whoops!\n  alert(err.name); // ValidationError\n  alert(err.stack); // \u4e00\u4e2a\u5d4c\u5957\u8c03\u7528\u7684\u5217\u8868\uff0c\u6bcf\u4e2a\u8c03\u7528\u90fd\u6709\u5bf9\u5e94\u7684\u884c\u53f7\n}</code></pre> ';r.exports=o}}]);