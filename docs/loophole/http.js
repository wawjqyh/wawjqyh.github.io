(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/loophole/http"],{"5H2C":function(i,l,p){var t=p("Rxnk"),e=p("R6Av"),o=p("ltRJ"),h=p("PE2v"),r=p("y7Dx"),c=p("AhwI"),s=p("haq3"),S=t(e),n=t(o),a=t(h),T=t(r),g=t(c),u=t(s),d='<h1 id="\u4f20\u8f93\u5b89\u5168">\u4f20\u8f93\u5b89\u5168</h1> <h2 id="1-http-\u7a83\u542c">1 http \u7a83\u542c</h2> <p>http \u534f\u8bae\u662f\u660e\u6587\u534f\u8bae\uff0c\u4e5f\u5c31\u662f\u8bf4\u8bf7\u6c42\u4e0d\u4f1a\u505a\u52a0\u5bc6\u53d8\u6362\uff0c\u76f4\u63a5\u53d1\u9001\u5230\u7f51\u7edc\u4e2d\uff0c\u7136\u540e\u4f20\u8f93\u5230\u670d\u52a1\u5668\u3002\u670d\u52a1\u5668\u7684\u8fd4\u56de\u4e5f\u662f\u660e\u6587\u8fd4\u56de\uff0c\u4e0d\u505a\u52a0\u5bc6\uff0c\u7ecf\u8fc7\u5404\u79cd\u94fe\u8def\u548c\u7f51\u7edc\u8fd4\u56de\u7684\u6d4f\u89c8\u5668</p> <p><img src="'+S+'" alt=""></p> <p>\u8fd9\u91cc\u7684\u94fe\u8def\u5c31\u662f\u7f51\u7edc\u4e0a\u7684\u5404\u79cd\u4e2d\u8f6c\u8bbe\u5907\uff0c\u8def\u7531\u5668\u3001\u7f51\u5173\u7b49</p> <p>\u4e5f\u5c31\u662f\u8bf4\u6d4f\u89c8\u5668\u8ddf\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u4f1a\u7ecf\u8fc7\u975e\u5e38\u591a\u7684\u8282\u70b9\uff0c\u8fd9\u4e9b\u8282\u70b9\u6bcf\u4e00\u4e2a\u90fd\u4f1a\u8f6c\u53d1\u6d41\u91cf\u6570\u636e\uff0c\u8f6c\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u77e5\u9053\u8fd9\u4e9b\u6570\u636e\u7684\u5185\u5bb9\uff0c\u5e76\u4e14\u53ef\u4ee5\u4fee\u6539\u6570\u636e\u3002\u8fd9\u5c31\u662f\u4f20\u8f93\u94fe\u8def\u7684\u7a83\u542c\u548c\u4fee\u6539</p> <p>\u4f7f\u7528 <code>traceroute</code> \u53ef\u4ee5\u67e5\u770b\u4e00\u4e2a\u8bbf\u95ee\u5230\u8fbe\u670d\u52a1\u5668\u9700\u8981\u7ecf\u8fc7\u7684\u8282\u70b9</p> <p><img src="'+n+'" alt=""></p> <h2 id="2-\u5371\u5bb3">2 \u5371\u5bb3</h2> <p>http \u7a83\u542c\uff1a</p> <ul> <li>\u7a83\u542c\u7528\u6237\u5bc6\u7801</li> <li>\u7a83\u542c\u4f20\u8f93\u7684\u654f\u611f\u4fe1\u606f</li> <li>\u975e\u6cd5\u83b7\u53d6\u4e2a\u4eba\u8d44\u6599</li> </ul> <p>http \u7be1\u6539\uff1a</p> <ul> <li>\u63d2\u5165\u5e7f\u544a (\u7f51\u9875\u4e2d\u4f1a\u51fa\u73b0\u4e00\u4e9b\u5e7f\u544a\uff0c\u4f46\u5e76\u4e0d\u662f\u7f51\u7ad9\u7684\u5236\u4f5c\u8005\u653e\u7684\uff0c\u800c\u662f\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u653e\u5165\u7684)</li> <li>\u91cd\u5b9a\u5411\u7f51\u7ad9 (http \u54cd\u5e94\u53ef\u4ee5\u88ab\u968f\u610f\u4fee\u6539)</li> <li>\u65e0\u6cd5\u9632\u5fa1\u7684 XSS \u548c CSRF \u653b\u51fb (\u524d\u9762\u63d0\u5230\u7684\u9632\u5fa1\u65b9\u5f0f\u90fd\u53ef\u4ee5\u88ab\u4fee\u6539)</li> </ul> <h2 id="3-\u6848\u4f8b">3 \u6848\u4f8b</h2> <h3 id="31-\u8fd0\u8425\u5546\u52ab\u6301">3.1 \u8fd0\u8425\u5546\u52ab\u6301</h3> <p>\u8bbf\u95ee\u67d0\u4e2a\u7f51\u9875\u65f6\u5f39\u51fa\u8fd0\u8425\u5546\u7684\u5e7f\u544a\uff0c\u8fd0\u8425\u5546\u53ef\u4ee5\u67e5\u770b\u548c\u4fee\u6539\u4f60\u6240\u6709\u4f20\u8f93\u7684\u6570\u636e\uff1a</p> <p><img src="'+a+'" alt=""> (\u5f39\u9875\u9762\u5f62\u5f0f\u7684\u5e7f\u544a)</p> <p><img src="'+T+'" alt=""> (\u9875\u9762\u5185\u5d4c\u7684\u5c0f\u5e7f\u544a)</p> <h3 id="32-\u5c40\u57df\u7f51\u52ab\u6301">3.2 \u5c40\u57df\u7f51\u52ab\u6301</h3> <p>\u901a\u8fc7\u4e00\u4e9b\u624b\u6bb5\u5c06\u5c40\u57df\u7f51\u4e2d\u7684\u6d41\u91cf\u5bfc\u5165\u5230\u81ea\u5df1\u7684\u673a\u5668\uff0c\u76f8\u5f53\u4e8e\u81ea\u5df1\u7684\u673a\u5668\u6210\u4e86\u4e00\u4e2a\u4ee3\u7406</p> <p><img src="'+g+'" alt=""></p> <p>\u6bd4\u5982\u5f53\u8bbf\u95ee\u652f\u4ed8\u5b9d\u7f51\u9875(\u5df2\u4fee\u590d)\u7684\u65f6\u5019\uff0c\u4f60\u8bbf\u95ee\u5230\u7684\u7f51\u9875\u7ecf\u8fc7\u653b\u51fb\u8005\u7684\u673a\u5668\u540e\uff0c\u5df2\u7ecf\u88ab\u63d2\u5165\u4e86\u4e00\u4e9b\u6076\u610f\u4ee3\u7801\uff0c\u8fd9\u6837\u5c31\u80fd\u76d7\u53d6\u5230\u7528\u6237\u540d\u548c\u5bc6\u7801</p> <h3 id="33-\u516c\u5171-wifi">3.3 \u516c\u5171 wifi</h3> <p>\u8fde\u4e86\u4e00\u4e2a wifi \u540e\uff0c\u4f60\u6240\u6709\u7684\u6d41\u91cf\u90fd\u4f1a\u7ecf\u8fc7\u90a3\u4e2a\u8def\u7531\u5668\u3002\u8fd9\u4e9b\u6570\u636e\u90fd\u53ef\u80fd\u88ab\u67e5\u770b\u548c\u4fee\u6539</p> <h2 id="4-https">4 https</h2> <p>HTTPS\uff08\u5168\u79f0\uff1aHyper Text Transfer Protocol over Secure Socket Layer\uff09\uff0c\u662f\u4ee5\u5b89\u5168\u4e3a\u76ee\u6807\u7684 HTTP \u901a\u9053\uff0c\u7b80\u5355\u8bb2\u662f HTTP \u7684\u5b89\u5168\u7248\u3002\u5373 HTTP \u4e0b\u52a0\u5165 SSL \u5c42\uff0cHTTPS \u7684\u5b89\u5168\u57fa\u7840\u662f SSL\uff0c\u56e0\u6b64\u52a0\u5bc6\u7684\u8be6\u7ec6\u5185\u5bb9\u5c31\u9700\u8981 SSL</p> <p>http \u534f\u8bae\u7684\u7f3a\u70b9\uff1a</p> <ul> <li><strong>\u901a\u4fe1\u4f7f\u7528\u660e\u6587</strong> \u901a\u4fe1\u4f7f\u7528\u660e\u6587\u610f\u5473\u7740\u5b89\u5168\u6027\u5927\u5927\u964d\u4f4e\uff0c\u5f53\u901a\u4fe1\u8fc7\u7a0b\u88ab\u7a83\u542c\u540e\uff0c\u65e0\u9700\u82b1\u8d39\u989d\u5916\u7684\u6295\u5165\u5c31\u53ef\u770b\u5230\u4f20\u8f93\u7684\u6570\u636e\u3002\u4f8b\u5982\u4f7f\u7528\u6293\u5305\u5de5\u5177\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u5c31\u53ef\u67e5\u770b\u4efb\u4f55\u4f7f\u7528 HTTP \u534f\u8bae\u7684\u901a\u4fe1\u6570\u636e</li> <li><strong>\u4e0d\u9a8c\u8bc1\u901a\u4fe1\u65b9\u8eab\u4efd</strong> \u4e0d\u9a8c\u8bc1\u901a\u4fe1\u65b9\u7684\u8eab\u4efd\uff0c\u5c06\u5bfc\u81f4\u901a\u4fe1\u8fc7\u7a0b\u88ab\u7a83\u542c\u540e\uff0c\u53ef\u80fd\u4f1a\u906d\u9047\u4f2a\u88c5\uff0c\u4f8b\u5982\u4f7f\u7528\u6293\u5305\u5de5\u5177\u6293\u53d6\u6570\u636e\u540e\uff0c\u5c31\u53ef\u6309\u7167\u6570\u636e\u5305\u7684\u683c\u5f0f\u6784\u9020 HTTP \u8bf7\u6c42</li> <li><strong>\u65e0\u6cd5\u9a8c\u8bc1\u62a5\u6587\u7684\u5b8c\u6574\u6027</strong> \u4e0d\u9a8c\u8bc1\u62a5\u6587\u7684\u5b8c\u6574\u6027\uff0c\u6570\u636e\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u5c31\u53ef\u80fd\u88ab\u7be1\u6539</li> </ul> <p><code>Https = Http + \u52a0\u5bc6 + \u8ba4\u8bc1 + \u5b8c\u6574\u6027\u9a8c\u8bc1</code></p> <blockquote> <p>\u5982\u679c\u76f4\u63a5\u4f7f\u7528\u5bf9\u79f0\u52a0\u5bc6\u7684\u65b9\u5f0f\u8fdb\u884c\u52a0\u5bc6\uff0c\u5982\u679c\u5bc6\u94a5\u4e0d\u88ab\u6cc4\u6f0f\u662f\u5b89\u5168\uff0c\u4f46\u95ee\u9898\u662f\u5bc6\u94a5\u65e0\u6cd5\u4f20\u9012\u7ed9\u5ba2\u6237\u7aef\u3002\u800c\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u6570\u636e\u4f20\u8f93\u4e4b\u524d\uff0c\u670d\u52a1\u7aef\u5c06\u81ea\u5df1\u7684\u516c\u94a5\u4f20\u8f93\u7ed9\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u5728\u4f20\u8f93\u6570\u636e\u65f6\uff0c\u4f7f\u7528\u63a5\u6536\u7684\u516c\u94a5\u8fdb\u884c\u52a0\u5bc6\uff0c\u670d\u52a1\u7aef\u63a5\u6536\u5230\u6570\u636e\u540e\u4f7f\u7528\u79c1\u94a5\u8fdb\u884c\u89e3\u5bc6\uff0c\u7406\u8bba\u4e0a\u53ef\u884c\uff0c\u4f46\u662f\u89e3\u5bc6\u8ba1\u7b97\u91cf\u5f88\u5927\uff0c\u6548\u7387\u4f4e\u3002\u6240\u4ee5 https \u4f7f\u7528\u5230 TLS(SSL) \u534f\u8bae\u52a0\u5bc6</p> </blockquote> <p>TLS \u534f\u8bae\u7684\u63e1\u624b\u8fc7\u7a0b:</p> <ol> <li>\u5ba2\u6237\u7aef\u5148\u7ed9\u670d\u52a1\u7aef\u53d1\u9001\u4e00\u4e2a\u6d88\u606f\uff0c\u6d88\u606f\u5185\u5bb9\u5305\u62ec\uff1a\u5ba2\u6237\u7aef\u652f\u6301\u7684\u52a0\u5bc6\u65b9\u5f0f\uff0c\u652f\u6301\u7684\u538b\u7f29\u65b9\u6cd5\uff0cSSL \u7684\u7248\u672c\u53f7\uff0c\u5ba2\u6237\u7aef\u751f\u6210\u7684\u968f\u673a\u6570\uff0c\u6587\u672c\u5185\u5bb9\u201cHello\u201d\u7b49</li> <li>\u670d\u52a1\u7aef\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u4e5f\u56de\u53d1\u4e00\u4e2a Hello\uff0c\u5e76\u643a\u5e26\u4ece\u5ba2\u6237\u7aef\u652f\u6301\u7684\u52a0\u5bc6\u65b9\u5f0f\u4e2d\u9009\u62e9\u7684\u52a0\u5bc6\u65b9\u5f0f\uff0c\u670d\u52a1\u7aef\u751f\u6210\u7684\u968f\u673a\u6570\uff0c\u670d\u52a1\u7aef\u7684 SSL \u7248\u672c\u53f7\u7b49\u4fe1\u606f</li> <li>\u968f\u540e\u670d\u52a1\u5668\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a Certificate \u62a5\u6587\uff0c\u62a5\u6587\u4e2d\u5305\u542b\u670d\u52a1\u7aef\u7684\u516c\u94a5\u8bc1\u4e66</li> <li>\u7d27\u63a5\u7740\u670d\u52a1\u5668\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001 Server Hello Done, \u8868\u793a\u6700\u521d\u7684\u534f\u5546\u63e1\u624b\u8fc7\u7a0b\u7ed3\u675f</li> <li>\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u670d\u52a1\u7aef\u53d1\u9001\u7684\u63e1\u624b\u7ed3\u675f\u7684\u6d88\u606f\u540e\uff0c\u4ee5 Client Key Exchange \u4f5c\u4e3a\u56de\u5e94\uff0c\u6b64\u62a5\u6587\u4e2d\u5305\u542b\u901a\u4fe1\u52a0\u5bc6\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u4e00\u79cd\u88ab\u79f0\u4e3a Pre-master secret \u7684\u968f\u673a\u5bc6\u7801\u4e32\uff0c\u5e76\u4f7f\u7528\u7b2c\u4e09\u6b65\u63a5\u6536\u5230\u7684\u516c\u94a5\u8bc1\u4e66\u8fdb\u884c\u4e86\u52a0\u5bc6</li> <li>\u63a5\u7740\u5ba2\u6237\u7aef\u53d1\u9001 Change Cipher Spec \u62a5\u6587\uff0c\u8be5\u62a5\u6587\u544a\u77e5\u670d\u52a1\u7aef\uff0c\u6b64\u6b65\u9aa4\u4e4b\u540e\u7684\u6240\u6709\u6570\u636e\u5c06\u4f7f\u7528\u7b2c\u4e94\u6b65\u4e2d\u751f\u6210\u7684 master secret \u8fdb\u884c\u52a0\u5bc6</li> <li>\u968f\u540e\u5ba2\u6237\u7aef\u53d1\u9001 Finish \u62a5\u6587\uff0c\u6b64\u62a5\u6587\u4e2d\u5305\u542b\u8fde\u63a5\u81f3\u4eca\u6240\u6709\u62a5\u6587\u7684\u6574\u4f53\u6821\u9a8c\u503c\uff0c\u7528\u4e8e\u5b8c\u6574\u6027\u9a8c\u8bc1</li> <li>\u670d\u52a1\u7aef\u63a5\u6536\u5230\u5ba2\u6237\u7aef\u53d1\u9001\u7684 Change Cliper Spec \u62a5\u6587\u540e\uff0c\u540c\u6837\u4ee5 Change Cliper Spec \u62a5\u6587\u4f5c\u4e3a\u56de\u5e94</li> <li>\u63a5\u7740\u670d\u52a1\u7aef\u53d1\u9001 Finish \u62a5\u6587\u7ed9\u5ba2\u6237\u7aef\uff0c\u8868\u793a\u670d\u52a1\u7aef\u5df2\u6b63\u786e\u89e3\u6790\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u6574\u4f53\u6821\u9a8c\u503c\uff0c\u81f3\u6b64\uff0cSSL \u63e1\u624b\u7684\u8fc7\u7a0b\u7ed3\u675f</li> <li>\u968f\u540e\u5f00\u59cb\u4f7f\u7528 HTTP \u534f\u8bae\u4f20\u8f93\u4f7f\u7528 master secret \u52a0\u5bc6\u8fc7\u7684\u6570\u636e</li> </ol> <p><img src="'+u+'" alt=""></p> <blockquote> <p>\u8bc1\u4e66\u9700\u8981\u5411\u6b63\u89c4\u7684\u670d\u52a1\u5546\u7533\u8bf7\uff0c\u800c\u4e14\u6d4f\u89c8\u5668\u5185\u7f6e\u4e86\u4e00\u4e2a\u4fe1\u4efb\u7684 CA \u8bc1\u4e66\u5217\u8868\uff0c\u5982\u679c\u8bc1\u4e66\u4e0d\u662f\u6765\u81ea\u8fd9\u4e2a\u5217\u8868\u90a3\u4e48\u6821\u9a8c\u4e0d\u901a\u8fc7</p> </blockquote> <p>TLS \u534f\u8bae\u5b89\u5168\u6027\u51e0\u4e2a\u5173\u952e\u7684\u70b9\uff1a</p> <ul> <li>\u8bc1\u4e66\u65e0\u6cd5\u4f2a\u9020 (\u8bc1\u4e66\u662f\u5411 CA \u7533\u8bf7\u7684)</li> <li>\u8bc1\u4e66\u79c1\u94a5\u4e0d\u88ab\u6cc4\u6f0f (\u4fdd\u8bc1\u670d\u52a1\u7aef\u4e0d\u88ab\u653b\u51fb\uff0c\u79c1\u94a5\u88ab\u76d7)</li> <li>\u57df\u540d\u7ba1\u7406\u6743\u4e0d\u6cc4\u6f0f</li> <li>CA \u575a\u5b88\u539f\u5219 (CA \u4e0d\u968f\u610f\u53d1\u8bc1\u4e66)</li> </ul> ';i.exports=d}}]);