(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/performance/transmission"],{"U/za":function(t,l,i){var e=i("Rxnk"),p=i("CtzT"),h=i("aGwp"),n=i("6VzC"),s=e(p),o=e(h),r=e(n),d='<h1 id="\u4f20\u8f93\u4f18\u5316">\u4f20\u8f93\u4f18\u5316</h1> <h2 id="1-\u61d2\u52a0\u8f7d">1 \u61d2\u52a0\u8f7d</h2> <p>\u61d2\u52a0\u8f7d\u4e5f\u53eb\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u6307\u7684\u662f\u5728\u957f\u7f51\u9875\u4e2d\u5ef6\u8fdf\u52a0\u8f7d\u56fe\u50cf\uff0c\u662f\u4e00\u79cd\u5f88\u597d\u4f18\u5316\u7f51\u9875\u6027\u80fd\u7684\u65b9\u5f0f\u3002\u7528\u6237\u6eda\u52a8\u5230\u5b83\u4eec\u4e4b\u524d\uff0c\u53ef\u89c6\u533a\u57df\u5916\u7684\u56fe\u50cf\u4e0d\u4f1a\u52a0\u8f7d\u3002\u8fd9\u4e0e\u56fe\u50cf\u9884\u52a0\u8f7d\u76f8\u53cd\uff0c\u5728\u957f\u7f51\u9875\u4e0a\u4f7f\u7528\u5ef6\u8fdf\u52a0\u8f7d\u5c06\u4f7f\u7f51\u9875\u52a0\u8f7d\u66f4\u5feb\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b83\u8fd8\u53ef\u4ee5\u5e2e\u52a9\u51cf\u5c11\u670d\u52a1\u5668\u8d1f\u8f7d\u3002\u5e38\u9002\u7528\u56fe\u7247\u5f88\u591a\uff0c\u9875\u9762\u5f88\u957f\u7684\u7535\u5546\u7f51\u7ad9\u573a\u666f\u4e2d\u3002</p> <h3 id="11-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u61d2\u52a0\u8f7d">1.1 \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u61d2\u52a0\u8f7d</h3> <ul> <li>\u80fd\u63d0\u5347\u7528\u6237\u7684\u4f53\u9a8c\uff0c\u4f8b\u5982\u7528\u6237\u6253\u5f00\u50cf\u624b\u673a\u6dd8\u5b9d\u957f\u9875\u9762\u7684\u65f6\u5019\uff0c\u5982\u679c\u9875\u9762\u4e0a\u6240\u6709\u7684\u56fe\u7247\u90fd\u9700\u8981\u52a0\u8f7d\uff0c\u7531\u4e8e\u56fe\u7247\u6570\u76ee\u8f83\u5927\uff0c\u7b49\u5f85\u65f6\u95f4\u5c31\u4f1a\u5f88\u957f\uff0c\u8fd9\u5c31\u4e25\u91cd\u5f71\u54cd\u7528\u6237\u4f53\u9a8c</li> <li>\u51cf\u5c11\u65e0\u6548\u8d44\u6e90\u7684\u52a0\u8f7d\uff0c\u8fd9\u6837\u80fd\u660e\u663e\u51cf\u5c11\u4e86\u670d\u52a1\u5668\u7684\u538b\u529b\u548c\u6d41\u91cf\uff0c\u4e5f\u80fd\u591f\u51cf\u5c0f\u6d4f\u89c8\u5668\u7684\u8d1f\u62c5</li> <li>\u9632\u6b62\u5e76\u53d1\u52a0\u8f7d\u7684\u8d44\u6e90\u8fc7\u591a\u4f1a\u963b\u585e js \u7684\u52a0\u8f7d\uff0c\u5f71\u54cd\u7f51\u7ad9\u7684\u6b63\u5e38\u4f7f\u7528</li> </ul> <h3 id="12-\u5b9e\u73b0\u539f\u7406">1.2 \u5b9e\u73b0\u539f\u7406</h3> <p>\u9996\u5148\u5c06\u9875\u9762\u4e0a\u7684\u56fe\u7247\u7684 src \u5c5e\u6027\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u800c\u56fe\u7247\u7684\u771f\u5b9e\u8def\u5f84\u5219\u8bbe\u7f6e\u5728 data-src \u5c5e\u6027\u4e2d\u3002</p> <p>\u5f53\u9875\u9762\u6eda\u52a8\u7684\u65f6\u5019\u9700\u8981\u53bb\u76d1\u542c scroll \u4e8b\u4ef6\uff0c\u5728 scroll \u4e8b\u4ef6\u7684\u56de\u8c03\u4e2d\uff0c\u5224\u65ad\u6211\u4eec\u7684\u61d2\u52a0\u8f7d\u7684\u56fe\u7247\u662f\u5426\u8fdb\u5165\u53ef\u89c6\u533a\u57df,\u5982\u679c\u56fe\u7247\u5728\u53ef\u89c6\u533a\u5185\u5c06\u56fe\u7247\u7684 src \u5c5e\u6027\u8bbe\u7f6e\u4e3a data-src \u7684\u503c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5ef6\u8fdf\u52a0\u8f7d</p> <h2 id="2-\u9884\u52a0\u8f7d">2 \u9884\u52a0\u8f7d</h2> <p>\u8d44\u6e90\u9884\u52a0\u8f7d\u662f\u53e6\u4e00\u4e2a\u6027\u80fd\u4f18\u5316\u6280\u672f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8be5\u6280\u672f\u6765\u9884\u5148\u544a\u77e5\u6d4f\u89c8\u5668\u67d0\u4e9b\u8d44\u6e90\u53ef\u80fd\u5728\u5c06\u6765\u4f1a\u88ab\u4f7f\u7528\u5230\u3002</p> <p>\u9884\u52a0\u8f7d\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5c06\u6240\u6709\u6240\u9700\u7684\u8d44\u6e90\u63d0\u524d\u8bf7\u6c42\u52a0\u8f7d\u5230\u672c\u5730\uff0c\u8fd9\u6837\u540e\u9762\u5728\u9700\u8981\u7528\u5230\u65f6\u5c31\u76f4\u63a5\u4ece\u7f13\u5b58\u53d6\u8d44\u6e90</p> <h3 id="21-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u9884\u52a0\u8f7d">2.1 \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u9884\u52a0\u8f7d</h3> <p>\u5728\u7f51\u9875\u5168\u90e8\u52a0\u8f7d\u4e4b\u524d\uff0c\u5bf9\u4e00\u4e9b\u4e3b\u8981\u5185\u5bb9\u8fdb\u884c\u52a0\u8f7d\uff0c\u4ee5\u63d0\u4f9b\u7ed9\u7528\u6237\u66f4\u597d\u7684\u4f53\u9a8c\u3002</p> <p>\u901a\u5e38\u9002\u7528\u4e8e\u4ea4\u4e92\u6bd4\u8f83\u591a\u7684\u9875\u9762\u6216\u8005\u6e38\u620f\u3002\u6bd4\u5982\u9875\u9762\u4e00\u90e8\u5206\u9700\u8981\u7528\u6237\u7684\u4ea4\u4e92\u624d\u4f1a\u51fa\u73b0\uff0c\u5982\u679c\u6ca1\u6709\u7528\u9884\u52a0\u8f7d\u7684\u8bdd\uff0c\u540e\u7eed\u51fa\u73b0\u7684\u5185\u5bb9\u6216\u8005\u4ea4\u4e92\u7684\u97f3\u6548\u5c31\u4f1a\u56e0\u4e3a\u6ca1\u6709\u52a0\u8f7d\u5b8c\u6210\u800c\u4e0d\u4f1a\u53ca\u65f6\u7684\u51fa\u73b0\uff0c\u90a3\u4e48\u4f53\u9a8c\u5c31\u4f1a\u5f88\u5dee\u3002</p> <h3 id="22-\u5b9e\u73b0\u65b9\u6cd5">2.2 \u5b9e\u73b0\u65b9\u6cd5</h3> <ul> <li>html \u6807\u7b7e</li> <li>image \u5bf9\u8c61</li> <li>ajax\uff0c\u53ef\u4ee5\u66f4\u7cbe\u7ec6\u7684\u63a7\u5236\u52a0\u8f7d\u8fc7\u7a0b</li> <li>preloadJS \u5e93</li> </ul> <h2 id="3-\u8d44\u6e90\u52a0\u8f7d">3 \u8d44\u6e90\u52a0\u8f7d</h2> <p>\u6d4f\u89c8\u5668\u662f\u5e76\u884c\u52a0\u8f7d\u8d44\u6e90\u7684\uff0c\u4f46\u662f\u5e76\u53d1\u53d7\u57df\u540d\u9650\u5236\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u57df\u540d\u53ea\u80fd\u5e76\u53d1\u52a0\u8f7d\u4e00\u5b9a\u6570\u91cf\u7684\u8d44\u6e90\u3002</p> <p>\u5f53 HTML \u89e3\u6790\u5668\u88ab\u811a\u672c\u963b\u585e\u65f6\uff0c\u89e3\u6790\u5668\u867d\u7136\u4f1a\u505c\u6b62\u6784\u5efa DOM\uff0c\u4f46\u4ecd\u7136\u4f1a\u8bc6\u522b\u8be5\u811a\u672c\u540e\u9762\u7684\u8d44\u6e90\uff0c\u5e76\u8fdb\u884c\u9884\u52a0\u8f7d\u3002</p> <h3 id="21-\u9a8c\u8bc1\u5e76\u53d1\u52a0\u8f7d">2.1 \u9a8c\u8bc1\u5e76\u53d1\u52a0\u8f7d</h3> <p>\u5982\u4e0b\u56fe\uff0c\u540c\u57df\u540d\u53ea\u4f1a\u540c\u65f6\u52a0\u8f7d 6 \u4e2a\u8d44\u6e90</p> <p><img src="'+s+'" alt=""></p> <p>\u6bcf\u4e2a\u6d4f\u89c8\u5668\u7684\u5e76\u53d1\u6570\u53ef\u80fd\u4f1a\u4e0d\u4e00\u6837\uff08\u8fd9\u4e2a\u56fe\u642c\u8fd0\u6765\u7684\uff0c\u5b9e\u9645\u60c5\u51b5\u53ef\u80fd\u4e0d\u4e00\u81f4\uff0c\u968f\u7740\u6d4f\u89c8\u5668\u66f4\u65b0\u9ed8\u8ba4\u503c\u4e5f\u53ef\u80fd\u53d8\u52a8\uff09\uff0c\u5e76\u53d1\u6570\u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539</p> <p><img src="'+o+'" alt=""></p> <p><strong>\u7ed3\u8bba\uff1a</strong></p> <ul> <li>\u8d44\u6e90\u4f1a\u5e76\u53d1\u52a0\u8f7d</li> <li>\u5e76\u53d1\u52a0\u8f7d\u6709\u6570\u91cf\u9650\u5236 (\u5e76\u4e0d\u662f\u8d8a\u591a\u8d8a\u597d)</li> <li>\u5404\u6d4f\u89c8\u5668\u7684\u9650\u5236\u4e0d\u4e00\u6837</li> </ul> <h3 id="22-\u9a8c\u8bc1-js-\u963b\u585e\u662f\u5426\u5f71\u54cd\u8d44\u6e90\u52a0\u8f7d">2.2 \u9a8c\u8bc1 js \u963b\u585e\u662f\u5426\u5f71\u54cd\u8d44\u6e90\u52a0\u8f7d</h3> <p>html \u4ee3\u7801\u5982\u4e0b\uff1a</p> <pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;zh_CN&quot;&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n    &lt;title&gt;test&lt;/title&gt;\n\n    &lt;script&gt;\n      function sleep(time) {\n        let endTime = new Date().getTime() + time * 1000;\n\n        while (new Date().getTime() &lt; endTime) {}\n      }\n\n      sleep(3);\n    &lt;/script&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div class=&quot;text1&quot;&gt;line1&lt;/div&gt;\n    &lt;link href=&quot;./styles.css&quot; rel=&quot;stylesheet&quot; /&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre> <p>\u5728 header \u4e2d\u6709\u4e00\u6bb5 js \u4ee3\u7801\uff0c\u4f1a\u963b\u585e 3 \u79d2\u949f\u3002</p> <p><img src="'+r+'" alt=""></p> <p><strong>\u7ed3\u8bba\uff1a</strong></p> <ul> <li>js \u963b\u585e\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u8d44\u6e90\u7684\u52a0\u8f7d</li> </ul> <h2 id="4-\u542f\u7528-gzip">4 \u542f\u7528 gzip</h2> <h2 id="5-\u542f\u7528-keep-alive">5 \u542f\u7528 Keep Alive</h2> <h2 id="6-server-workers">6 server workers</h2> <h2 id="7-http2">7 http2</h2> <h2 id="8-ssr-\u670d\u52a1\u7aef\u6e32\u67d3">8 SSR \u670d\u52a1\u7aef\u6e32\u67d3</h2> <h2 id="9-\u6d4f\u89c8\u5668\u7f13\u5b58">9 \u6d4f\u89c8\u5668\u7f13\u5b58</h2> <p>\u89c1\u4e0b\u4e00\u8282</p> ';t.exports=d}}]);