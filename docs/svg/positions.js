(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/svg/positions"],{"2gQg":function(o,e,p){var t=p("Rxnk"),c=p("PFBl"),d=t(c),g='<h1 id="\u5750\u6807\u5b9a\u4f4d">\u5750\u6807\u5b9a\u4f4d</h1> <h2 id="1-\u7f51\u683c">1 \u7f51\u683c</h2> <p>\u5bf9\u4e8e\u6240\u6709\u5143\u7d20\uff0cSVG \u4f7f\u7528\u7684\u5750\u6807\u7cfb\u7edf\u6216\u8005\u8bf4\u7f51\u683c\u7cfb\u7edf\uff0c\u548c Canvas \u7528\u7684\u5dee\u4e0d\u591a\uff08\u6240\u6709\u8ba1\u7b97\u673a\u7ed8\u56fe\u90fd\u5dee\u4e0d\u591a\uff09</p> <p>\u8fd9\u79cd\u5750\u6807\u7cfb\u7edf\u662f\uff1a\u4ee5\u9875\u9762\u7684\u5de6\u4e0a\u89d2\u4e3a <code>(0,0)</code> \u5750\u6807\u70b9\uff0c\u5750\u6807\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\uff0cx \u8f74\u6b63\u65b9\u5411\u662f\u5411\u53f3\uff0cy \u8f74\u6b63\u65b9\u5411\u662f\u5411\u4e0b</p> <p><img src="'+d+'" alt=""></p> <pre><code class="language-xml">&lt;rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot; height=&quot;100&quot; /&gt;</code></pre> <p>\u5b9a\u4e49\u4e00\u4e2a\u77e9\u5f62\uff0c\u5373\u4ece\u5de6\u4e0a\u89d2\u5f00\u59cb\uff0c\u5411\u53f3\u5ef6\u5c55 <code>100px</code>\uff0c\u5411\u4e0b\u5ef6\u5c55 <code>100px</code>\uff0c\u5f62\u6210\u4e00\u4e2a <code>100*100</code> \u5927\u7684\u77e9\u5f62\u3002</p> <h2 id="2-\u4ec0\u4e48\u662f\u50cf\u7d20">2 \u4ec0\u4e48\u662f\u50cf\u7d20</h2> <p>\u57fa\u672c\u4e0a\uff0c\u5728 SVG \u6587\u6863\u4e2d\u7684 1 \u4e2a\u50cf\u7d20\u5bf9\u5e94\u8f93\u51fa\u8bbe\u5907\uff08\u6bd4\u5982\u663e\u793a\u5c4f\uff09\u4e0a\u7684 1 \u4e2a\u50cf\u7d20</p> <p>\u4f46\u662f\u8fd9\u79cd\u60c5\u51b5\u662f\u53ef\u4ee5\u6539\u53d8\u7684\uff0c\u5426\u5219 SVG \u7684\u540d\u5b57\u91cc\u4e5f\u4e0d\u81f3\u4e8e\u4f1a\u6709\u201cScalable\u201d\uff08\u53ef\u7f29\u653e\uff09\u8fd9\u4e2a\u8bcd\u3002\u5982\u540c CSS \u53ef\u4ee5\u5b9a\u4e49\u5b57\u4f53\u7684\u7edd\u5bf9\u5927\u5c0f\u548c\u76f8\u5bf9\u5927\u5c0f\uff0cSVG \u4e5f\u53ef\u4ee5\u5b9a\u4e49\u7edd\u5bf9\u5927\u5c0f\uff08\u6bd4\u5982\u4f7f\u7528\u201cpt\u201d\u6216\u201ccm\u201d\u6807\u8bc6\u7ef4\u5ea6\uff09\u540c\u65f6 SVG \u4e5f\u80fd\u4f7f\u7528\u76f8\u5bf9\u5927\u5c0f\uff0c\u53ea\u9700\u7ed9\u51fa\u6570\u5b57\uff0c\u4e0d\u6807\u660e\u5355\u4f4d\uff0c\u8f93\u51fa\u65f6\u5c31\u4f1a\u91c7\u7528\u7528\u6237\u7684\u5355\u4f4d</p> <p>\u5728\u6ca1\u6709\u8fdb\u4e00\u6b65\u89c4\u8303\u8bf4\u660e\u7684\u60c5\u51b5\u4e0b\uff0c1 \u4e2a\u7528\u6237\u5355\u4f4d\u7b49\u540c\u4e8e 1 \u4e2a\u5c4f\u5e55\u5355\u4f4d</p> <p>\u8981\u660e\u786e\u6539\u53d8\u8fd9\u79cd\u8bbe\u5b9a\uff0cSVG \u91cc\u6709\u591a\u79cd\u65b9\u6cd5\u3002\u6211\u4eec\u4ece svg \u6839\u5143\u7d20\u5f00\u59cb\uff1a</p> <pre><code class="language-xml">&lt;svg width=&quot;100&quot; height=&quot;100&quot;&gt;\u2026&lt;/svg&gt;</code></pre> <p>\u4e0a\u9762\u7684\u5143\u7d20\u5b9a\u4e49\u4e86\u4e00\u4e2a <code>100*100px</code> \u7684 SVG \u753b\u5e03\uff0c\u8fd9\u91cc 1 \u7528\u6237\u5355\u4f4d\u7b49\u540c\u4e8e 1 \u5c4f\u5e55\u5355\u4f4d</p> <pre><code class="language-xml">&lt;svg width=&quot;200&quot; height=&quot;200&quot; viewBox=&quot;0 0 100 100&quot;&gt;\u2026&lt;/svg&gt;</code></pre> <p>\u8fd9\u91cc\u5b9a\u4e49\u7684\u753b\u5e03\u5c3a\u5bf8\u662f <code>200*200px</code>\u3002\u4f46\u662f\uff0cviewBox \u5c5e\u6027\u5b9a\u4e49\u4e86\u753b\u5e03\u4e0a\u53ef\u4ee5\u663e\u793a\u7684\u533a\u57df\uff1a\u4ece <code>(0,0)</code> \u70b9\u5f00\u59cb\uff0c100 \u5bbd<em>100 \u9ad8\u7684\u533a\u57df\u3002\u8fd9\u4e2a `100</em>100<code>\u7684\u533a\u57df\uff0c\u4f1a\u653e\u5230</code>200*200` \u7684\u753b\u5e03\u4e0a\u663e\u793a\u3002\u4e8e\u662f\u5c31\u5f62\u6210\u4e86\u653e\u5927\u4e24\u500d\u7684\u6548\u679c</p> <p>\u7528\u6237\u5355\u4f4d\u548c\u5c4f\u5e55\u5355\u4f4d\u7684\u6620\u5c04\u5173\u7cfb\u88ab\u79f0\u4e3a\u7528\u6237\u5750\u6807\u7cfb\u7edf\u3002\u9664\u4e86\u7f29\u653e\u4e4b\u5916\uff0c\u5750\u6807\u7cfb\u7edf\u8fd8\u53ef\u4ee5\u65cb\u8f6c\u3001\u503e\u659c\u3001\u7ffb\u8f6c\u3002\u9ed8\u8ba4\u7684\u7528\u6237\u5750\u6807\u7cfb\u7edf 1 \u7528\u6237\u50cf\u7d20\u7b49\u4e8e\u8bbe\u5907\u4e0a\u7684 1 \u50cf\u7d20\uff08\u4f46\u662f\u8bbe\u5907\u4e0a\u53ef\u80fd\u4f1a\u81ea\u5df1\u5b9a\u4e49 1 \u50cf\u7d20\u5230\u5e95\u662f\u591a\u5927\uff09\u3002\u5728\u5b9a\u4e49\u4e86\u5177\u4f53\u5c3a\u5bf8\u5355\u4f4d\u7684 SVG \u4e2d\uff0c\u6bd4\u5982\u5355\u4f4d\u662f <code>cm</code> \u6216 <code>in</code>\uff0c\u6700\u7ec8\u56fe\u5f62\u4f1a\u4ee5\u5b9e\u9645\u5927\u5c0f\u7684 1 \u6bd4 1 \u6bd4\u4f8b\u5448\u73b0</p> ';o.exports=g}}]);