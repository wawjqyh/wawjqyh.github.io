(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/RegExp/classifier"],{GPDD:function(t,d){var l='<h1 id="\u91cf\u8bcd">\u91cf\u8bcd</h1> <h2 id="1-\u91cf\u8bcd">1 \u91cf\u8bcd</h2> <table> <thead> <tr> <th align="left">\u91cf\u8bcd</th> <th align="left">\u63cf\u8ff0</th> </tr> </thead> <tbody><tr> <td align="left">n+</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u81f3\u5c11\u4e00\u4e2a n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n*</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u96f6\u4e2a\u6216\u591a\u4e2a n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n?</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u96f6\u4e2a\u6216\u4e00\u4e2a n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n{X}</td> <td align="left">\u5339\u914d\u5305\u542b X \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n{X,Y}</td> <td align="left">\u5339\u914d\u5305\u542b X \u81f3 Y \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n{X,}</td> <td align="left">\u5339\u914d\u5305\u542b\u81f3\u5c11 X \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">n$</td> <td align="left">\u5339\u914d\u4efb\u4f55\u7ed3\u5c3e\u4e3a n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">^n</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5f00\u5934\u4e3a n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">?=n</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5176\u540e\u7d27\u63a5\u6307\u5b9a\u5b57\u7b26\u4e32 n \u7684\u5b57\u7b26\u4e32</td> </tr> <tr> <td align="left">?!n</td> <td align="left">\u5339\u914d\u4efb\u4f55\u5176\u540e\u6ca1\u6709\u7d27\u63a5\u6307\u5b9a\u5b57\u7b26\u4e32 n \u7684\u5b57\u7b26\u4e32</td> </tr> </tbody></table> <h2 id="2-\u8d2a\u5a6a\u6a21\u5f0f">2 \u8d2a\u5a6a\u6a21\u5f0f</h2> <p>\u6b63\u5219\u8868\u8fbe\u5f0f\u4f1a\u5c3d\u53ef\u80fd\u591a\u7684\u5339\u914d\uff0c\u4e5f\u5c31\u662f\u8d2a\u5a6a\u6a21\u5f0f\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a</p> <pre><code class="language-javascript">&#39;12345678&#39;.replace(/\\d{3,6}?/g, &#39;X&#39;); // X78\n\n// 12345678 =&gt; X78</code></pre> <h2 id="3-\u975e\u8d2a\u5a6a\u6a21\u5f0f">3 \u975e\u8d2a\u5a6a\u6a21\u5f0f</h2> <p>\u8ba9\u6b63\u5219\u8868\u8fbe\u5f0f\u5c3d\u53ef\u80fd\u5c11\u7684\u5339\u914d\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u65e6\u5339\u914d\u6210\u529f\u5c31\u4e0d\u518d\u7ee7\u7eed\u5339\u914d\uff0c\u5c31\u662f\u975e\u8d2a\u5a6a\u6a21\u5f0f</p> <p>\u5728\u91cf\u8bcd\u540e\u9762\u52a0\u4e0a <code>?</code> \u5c31\u80fd\u5b9e\u73b0\u975e\u8d2a\u5a6a\u6a21\u5f0f</p> <pre><code class="language-javascript">&#39;12345678&#39;.replace(/\\d{3,6}?/g, &#39;X&#39;); // XX78\n\n// 12345678 =&gt; XX78</code></pre> <p>\u4e0a\u9762\u7684\u4f8b\u5b50\u662f\u5339\u914d\u4e00\u4e2a\u6570\u5b57 3-6 \u6b21\uff0c\u975e\u8d2a\u5a6a\u6a21\u5f0f\u5339\u914d 3 \u6b21\u5c31\u4f1a\u7ed3\u675f</p> <pre><code class="language-javascript">&#39;12345678&#39;.replace(/\\d+/g, &#39;X&#39;); // X\n&#39;12345678&#39;.replace(/\\d+?/g, &#39;X&#39;); // XXXXXXXX</code></pre> ';t.exports=l}}]);