(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/RegExp/group"],{"xIk/":function(e,c){var d='<h1 id="\u5206\u7ec4">\u5206\u7ec4</h1> <h2 id="1-\u5206\u7ec4">1 \u5206\u7ec4</h2> <p>\u5982\u679c\u6211\u4eec\u50cf\u5339\u914d\u4e00\u4e2a\u5355\u8bcd\u591a\u6b21\uff0c\u6bd4\u5982 <code>byron</code></p> <p>\u5982\u679c\u8fd9\u4e48\u5199 <code>\\byron{3}\\g</code>\uff0c\u53ea\u80fd\u5339\u914d\u672b\u5c3e\u7684 <code>n</code> 3 \u6b21\uff0c\u4e0d\u80fd\u5339\u914d\u6574\u4e2a\u5355\u8bcd</p> <p>\u9700\u8981\u5339\u914d\u6574\u4e2a\u5355\u8bcd\u9700\u8981\u4f7f\u7528\u5206\u7ec4</p> <blockquote> <p>\u4f7f\u7528 <code>()</code> \u8868\u793a\u5206\u7ec4\uff0c\u4f7f\u91cf\u8bcd\u4f5c\u7528\u4e8e\u5206\u7ec4</p> </blockquote> <p>\u5b9e\u73b0\u4e0a\u9762\u7684\u529f\u80fd\u5c31\u53ef\u4ee5\u8fd9\u4e48\u5199 <code>\\(byron){3}\\g</code></p> <h3 id="11-\u4f8b\u5b50">1.1 \u4f8b\u5b50</h3> <pre><code class="language-javascript">&#39;a1b3c3def&#39;.replace(/([a-z]\\d){3}/g, &#39;X&#39;); // Xdef</code></pre> <h2 id="2-\u6216">2 \u6216</h2> <p>\u5c06 a1b \u6216 a2b \u66ff\u6362\u6210 X</p> <pre><code class="language-javascript">&#39;a1b a2b a3b abc&#39;.replace(/a(1|2)b/g, &#39;X&#39;); // X X a3b abc</code></pre> <h2 id="3-\u6355\u83b7\u5206\u7ec4">3 \u6355\u83b7\u5206\u7ec4</h2> <p>\u5206\u7ec4\u4e4b\u540e\u53ef\u4ee5\u6355\u83b7\u5206\u7ec4\uff0c\u4e5f\u5c31\u662f\u62ff\u5230\u5206\u7ec4\u5339\u914d\u5230\u7684\u503c\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u573a\u666f\uff1a</p> <p>\u5c06 <code>2015-12-25</code> \u8f6c\u6362\u6210 <code>25/12/2015</code></p> <pre><code class="language-javascript">&#39;2015-12-25&#39;.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, &#39;$3/$2/$1&#39;); // 25/12/2015</code></pre> <h2 id="4-\u5ffd\u7565\u5206\u7ec4">4 \u5ffd\u7565\u5206\u7ec4</h2> <p>(:?xxx) <code>:?</code> \u5ffd\u7565\u5206\u7ec4</p> <p>\u5047\u5982\u6709\u573a\u666f\u6709\u5206\u7ec4\uff0c\u4f46\u662f\u4e0d\u60f3\u8bb0\u4f4f\u5206\u7ec4\uff0c\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5ffd\u7565\u5e74\u4efd</p> <p>\u5c06 <code>2015-12-25</code> \u8f6c\u6362\u6210 <code>25/12/2015</code></p> <pre><code class="language-javascript">&#39;2015-12-25&#39;.replace(/(:?\\d{4})-(\\d{2})-(\\d{2})/, &#39;$2/$1&#39;); // 25/12</code></pre> ';e.exports=d}}]);