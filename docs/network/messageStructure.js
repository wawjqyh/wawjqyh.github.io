(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/network/messageStructure"],{j0zm:function(e,p,i){var o=i("Rxnk"),l=i("EEY3"),T=i("i9/h"),t=i("xn4p"),r=i("+N7b"),n=i("4y6r"),h=i("8H0j"),d=i("cyhi"),s=i("off+"),H=o(l),P=o(T),a=o(t),c=o(r),E=o(n),C=o(h),w=o(d),g=o(s),m='<h1 id="http-\u62a5\u6587\u7ed3\u6784">http \u62a5\u6587\u7ed3\u6784</h1> <p>\u901a\u8fc7\u89c2\u5bdf http \u7684\u8bf7\u6c42\u8fc7\u7a0b\u53ef\u4ee5\u770b\u5230\uff0cHTTP \u7684\u5de5\u4f5c\u6a21\u5f0f\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u7531\u4e8e TCP/IP \u534f\u8bae\u8d1f\u8d23\u5e95\u5c42\u7684\u5177\u4f53\u4f20\u8f93\u5de5\u4f5c\uff0cHTTP \u534f\u8bae\u57fa\u672c\u4e0a\u4e0d\u7528\u7ba1\u5e95\u5c42\u4f20\u8f93\u3002\u5355\u4ece\u8fd9\u4e00\u70b9\u4e0a\u6765\u770b\uff0c\u6240\u8c13\u7684\u201c\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\u201d\u5176\u5b9e\u5e76\u4e0d\u600e\u4e48\u7ba1\u201c\u4f20\u8f93\u201d\u7684\u4e8b\u60c5\u3002</p> <p>\u90a3\u4e48 HTTP \u534f\u8bae\u7684\u6838\u5fc3\u90e8\u5206\u662f\u4ec0\u4e48\u5462\uff1f\u7b54\u6848\u5c31\u662f\u5b83\u4f20\u8f93\u7684\u62a5\u6587\u5185\u5bb9\u3002</p> <p>HTTP \u534f\u8bae\u5728\u89c4\u8303\u6587\u6863\u91cc\u8be6\u7ec6\u5b9a\u4e49\u4e86\u62a5\u6587\u7684\u683c\u5f0f\uff0c\u89c4\u5b9a\u4e86\u7ec4\u6210\u90e8\u5206\uff0c\u89e3\u6790\u89c4\u5219\uff0c\u8fd8\u6709\u5904\u7406\u7b56\u7565\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728 TCP/IP \u5c42\u4e4b\u4e0a\u5b9e\u73b0\u66f4\u7075\u6d3b\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u8fde\u63a5\u63a7\u5236\uff0c\u7f13\u5b58\u7ba1\u7406\u3001\u6570\u636e\u7f16\u7801\u3001\u5185\u5bb9\u534f\u5546\u7b49\u7b49\u3002</p> <h2 id="1-\u62a5\u6587\u7ed3\u6784">1 \u62a5\u6587\u7ed3\u6784</h2> <p>\u4f60\u4e5f\u8bb8\u5bf9 TCP/UDP \u7684\u62a5\u6587\u683c\u5f0f\u6709\u6240\u4e86\u89e3\uff0c\u62ff TCP \u62a5\u6587\u6765\u4e3e\u4f8b\uff0c\u5b83\u5728\u5b9e\u9645\u8981\u4f20\u8f93\u7684\u6570\u636e\u4e4b\u524d\u9644\u52a0\u4e86\u4e00\u4e2a 20 \u5b57\u8282\u7684\u5934\u90e8\u6570\u636e\uff0c\u5b58\u50a8 TCP \u534f\u8bae\u5fc5\u987b\u7684\u989d\u5916\u4fe1\u606f\uff0c\u4f8b\u5982\u53d1\u9001\u65b9\u7684\u7aef\u53e3\u53f7\u3001\u63a5\u6536\u65b9\u7684\u7aef\u53e3\u53f7\u3001\u5305\u5e8f\u53f7\u3001\u6807\u5fd7\u4f4d\u7b49\u7b49\u3002</p> <p>\u6709\u4e86\u8fd9\u4e2a\u9644\u52a0\u7684 TCP \u5934\uff0c\u6570\u636e\u5305\u624d\u80fd\u591f\u6b63\u786e\u4f20\u8f93\uff0c\u5230\u4e86\u76ee\u7684\u5730\u540e\u628a\u5934\u90e8\u53bb\u6389\uff0c\u5c31\u53ef\u4ee5\u62ff\u5230\u771f\u6b63\u7684\u6570\u636e\u3002</p> <p><img src="'+H+'" alt=""></p> <p>HTTP \u534f\u8bae\u4e5f\u662f\u4e0e TCP/UDP \u7c7b\u4f3c\uff0c\u540c\u6837\u4e5f\u9700\u8981\u5728\u5b9e\u9645\u4f20\u8f93\u7684\u6570\u636e\u524d\u9644\u52a0\u4e00\u4e9b\u5934\u6570\u636e\uff0c\u4e0d\u8fc7\u4e0e TCP/UDP \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u662f\u4e00\u4e2a\u201c\u7eaf\u6587\u672c\u201d\u7684\u534f\u8bae\uff0c\u6240\u4ee5\u5934\u6570\u636e\u90fd\u662f ASCII \u7801\u7684\u6587\u672c\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u8089\u773c\u9605\u8bfb\uff0c\u4e0d\u7528\u501f\u52a9\u7a0b\u5e8f\u89e3\u6790\u4e5f\u80fd\u591f\u770b\u61c2\u3002</p> <p>HTTP \u534f\u8bae\u7684\u8bf7\u6c42\u62a5\u6587\u548c\u54cd\u5e94\u62a5\u6587\u7684\u7ed3\u6784\u57fa\u672c\u76f8\u540c\uff0c\u7531\u4e09\u5927\u90e8\u5206\u7ec4\u6210\uff1a</p> <ol> <li>\u8d77\u59cb\u884c\uff08start line\uff09\uff1a\u63cf\u8ff0\u8bf7\u6c42\u6216\u54cd\u5e94\u7684\u57fa\u672c\u4fe1\u606f\uff1b</li> <li>\u5934\u90e8\u5b57\u6bb5\u96c6\u5408\uff08header\uff09\uff1a\u4f7f\u7528 key-value \u5f62\u5f0f\u66f4\u8be6\u7ec6\u5730\u8bf4\u660e\u62a5\u6587\uff1b</li> <li>\u6d88\u606f\u6b63\u6587\uff08entity\uff09\uff1a\u5b9e\u9645\u4f20\u8f93\u7684\u6570\u636e\uff0c\u5b83\u4e0d\u4e00\u5b9a\u662f\u7eaf\u6587\u672c\uff0c\u53ef\u4ee5\u662f\u56fe\u7247\u3001\u89c6\u9891\u7b49\u4e8c\u8fdb\u5236\u6570\u636e\u3002</li> </ol> <p>\u8fd9\u5176\u4e2d\u524d\u4e24\u90e8\u5206\u8d77\u59cb\u884c\u548c\u5934\u90e8\u5b57\u6bb5\u7ecf\u5e38\u53c8\u5408\u79f0\u4e3a\u201c\u8bf7\u6c42\u5934\u201d\u6216\u201c\u54cd\u5e94\u5934\u201d\uff0c\u6d88\u606f\u6b63\u6587\u53c8\u79f0\u4e3a\u201c\u5b9e\u4f53\u201d\uff0c\u4f46\u4e0e\u201cheader\u201d\u5bf9\u5e94\uff0c\u5f88\u591a\u65f6\u5019\u5c31\u76f4\u63a5\u79f0\u4e3a\u201cbody\u201d\u3002</p> <p>HTTP \u534f\u8bae\u89c4\u5b9a\u62a5\u6587\u5fc5\u987b\u6709 header\uff0c\u4f46\u53ef\u4ee5\u6ca1\u6709 body\uff0c\u800c\u4e14\u5728 header \u4e4b\u540e\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u201c\u7a7a\u884c\u201d\uff0c\u4e5f\u5c31\u662f\u201cCRLF\u201d\uff0c\u5341\u516d\u8fdb\u5236\u7684\u201c0D0A\u201d\u3002</p> <p>\u6240\u4ee5\uff0c\u4e00\u4e2a\u5b8c\u6574\u7684 HTTP \u62a5\u6587\u5c31\u50cf\u662f\u4e0b\u56fe\u7684\u8fd9\u4e2a\u6837\u5b50\uff0c\u6ce8\u610f\u5728 header \u548c body \u4e4b\u95f4\u6709\u4e00\u4e2a\u201c\u7a7a\u884c\u201d\u3002</p> <p><img src="'+P+'" alt=""></p> <p>\u770b\u4e00\u4e0b\u6211\u4eec\u4e4b\u524d\u7528 Wireshark \u6293\u7684\u5305\u5427\u3002</p> <p><img src="'+a+'" alt=""></p> <p>\u5728\u8fd9\u4e2a\u6d4f\u89c8\u5668\u53d1\u51fa\u7684\u8bf7\u6c42\u62a5\u6587\u91cc\uff0c\u7b2c\u4e00\u884c\u201cGET / HTTP/1.1\u201d\u5c31\u662f\u8bf7\u6c42\u884c\uff0c\u800c\u540e\u9762\u7684\u201cHost\u201d\u201cConnection\u201d\u7b49\u7b49\u90fd\u5c5e\u4e8e header\uff0c\u62a5\u6587\u7684\u6700\u540e\u662f\u4e00\u4e2a\u7a7a\u767d\u884c\u7ed3\u675f\uff0c\u6ca1\u6709 body\u3002</p> <p>\u5728\u5f88\u591a\u65f6\u5019\uff0c\u7279\u522b\u662f\u6d4f\u89c8\u5668\u53d1\u9001 GET \u8bf7\u6c42\u7684\u65f6\u5019\u90fd\u662f\u8fd9\u6837\uff0cHTTP \u62a5\u6587\u7ecf\u5e38\u662f\u53ea\u6709 header \u800c\u6ca1 body\uff0c\u76f8\u5f53\u4e8e\u53ea\u53d1\u4e86\u4e00\u4e2a\u5934\u8fc7\u6765</p> <p>\u4e0d\u8fc7\u8fd9\u4e2a\u201c\u5934\u201d\u4e5f\u4e0d\u80fd\u592a\u5927\uff0c\u867d\u7136 HTTP \u534f\u8bae\u5bf9 header \u7684\u5927\u5c0f\u6ca1\u6709\u505a\u9650\u5236\uff0c\u4f46\u5404\u4e2a Web \u670d\u52a1\u5668\u90fd\u4e0d\u5141\u8bb8\u8fc7\u5927\u7684\u8bf7\u6c42\u5934\uff0c\u56e0\u4e3a\u5934\u90e8\u592a\u5927\u53ef\u80fd\u4f1a\u5360\u7528\u5927\u91cf\u7684\u670d\u52a1\u5668\u8d44\u6e90\uff0c\u5f71\u54cd\u8fd0\u884c\u6548\u7387\u3002</p> <h2 id="2-\u8bf7\u6c42\u884c">2 \u8bf7\u6c42\u884c</h2> <p>\u8bf7\u6c42\u62a5\u6587\u91cc\u7684\u8d77\u59cb\u884c\u4e5f\u5c31\u662f\u8bf7\u6c42\u884c\uff08request line\uff09\uff0c\u5b83\u7b80\u8981\u5730\u63cf\u8ff0\u4e86\u5ba2\u6237\u7aef\u60f3\u8981\u5982\u4f55\u64cd\u4f5c\u670d\u52a1\u5668\u7aef\u7684\u8d44\u6e90\u3002</p> <p>\u8bf7\u6c42\u884c\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1a</p> <ol> <li>\u8bf7\u6c42\u65b9\u6cd5\uff1a\u662f\u4e00\u4e2a\u52a8\u8bcd\uff0c\u5982 GET/POST\uff0c\u8868\u793a\u5bf9\u8d44\u6e90\u7684\u64cd\u4f5c\uff1b</li> <li>\u8bf7\u6c42\u76ee\u6807\uff1a\u901a\u5e38\u662f\u4e00\u4e2a URI\uff0c\u6807\u8bb0\u4e86\u8bf7\u6c42\u65b9\u6cd5\u8981\u64cd\u4f5c\u7684\u8d44\u6e90\uff1b</li> <li>\u7248\u672c\u53f7\uff1a\u8868\u793a\u62a5\u6587\u4f7f\u7528\u7684 HTTP \u534f\u8bae\u7248\u672c\u3002</li> </ol> <p>\u8fd9\u4e09\u4e2a\u90e8\u5206\u901a\u5e38\u4f7f\u7528\u7a7a\u683c\uff08space\uff09\u6765\u5206\u9694\uff0c\u6700\u540e\u8981\u7528 CRLF \u6362\u884c\u8868\u793a\u7ed3\u675f\u3002</p> <p><img src="'+c+'" alt=""></p> <p>\u4f8b\u5982\uff1a</p> <pre><code>GET / HTTP/1.1</code></pre><p>\u5728\u8fd9\u4e2a\u8bf7\u6c42\u884c\u91cc\uff0c\u201cGET\u201d\u662f\u8bf7\u6c42\u65b9\u6cd5\uff0c\u201c/\u201d\u662f\u8bf7\u6c42\u76ee\u6807\uff0c\u201cHTTP/1.1\u201d\u662f\u7248\u672c\u53f7\uff0c\u628a\u8fd9\u4e09\u90e8\u5206\u8fde\u8d77\u6765\uff0c\u610f\u601d\u5c31\u662f\u201c\u670d\u52a1\u5668\u4f60\u597d\uff0c\u6211\u60f3\u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684\u9ed8\u8ba4\u6587\u4ef6\uff0c\u6211\u7528\u7684\u534f\u8bae\u7248\u672c\u53f7\u662f 1.1\uff0c\u8bf7\u4e0d\u8981\u7528 1.0 \u6216\u8005 2.0 \u56de\u590d\u6211\u3002\u201d</p> <p>\u522b\u770b\u8bf7\u6c42\u884c\u5c31\u4e00\u884c\uff0c\u8c8c\u4f3c\u5f88\u7b80\u5355\uff0c\u5176\u5b9e\u8fd9\u91cc\u9762\u7684\u201c\u8bb2\u7a76\u201d\u662f\u975e\u5e38\u591a\u7684\uff0c\u5c24\u5176\u662f\u524d\u9762\u7684\u8bf7\u6c42\u65b9\u6cd5\u548c\u8bf7\u6c42\u76ee\u6807\uff0c\u7ec4\u5408\u8d77\u6765\u53d8\u5316\u591a\u7aef\uff0c\u540e\u9762\u8fd8\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002</p> <h2 id="3-\u72b6\u6001\u884c">3 \u72b6\u6001\u884c</h2> <p>\u770b\u5b8c\u4e86\u8bf7\u6c42\u884c\uff0c\u6211\u4eec\u518d\u770b\u54cd\u5e94\u62a5\u6587\u91cc\u7684\u8d77\u59cb\u884c\uff0c\u5728\u8fd9\u91cc\u5b83\u4e0d\u53eb\u201c\u54cd\u5e94\u884c\u201d\uff0c\u800c\u662f\u53eb\u201c\u72b6\u6001\u884c\u201d\uff08status line\uff09\uff0c\u610f\u601d\u662f\u670d\u52a1\u5668\u54cd\u5e94\u7684\u72b6\u6001\u3002</p> <p>\u6bd4\u8d77\u8bf7\u6c42\u884c\u6765\u8bf4\uff0c\u72b6\u6001\u884c\u8981\u7b80\u5355\u4e00\u4e9b\uff0c\u540c\u6837\u4e5f\u662f\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1a</p> <ol> <li>\u7248\u672c\u53f7\uff1a\u8868\u793a\u62a5\u6587\u4f7f\u7528\u7684 HTTP \u534f\u8bae\u7248\u672c\uff1b</li> <li>\u72b6\u6001\u7801\uff1a\u4e00\u4e2a\u4e09\u4f4d\u6570\uff0c\u7528\u4ee3\u7801\u7684\u5f62\u5f0f\u8868\u793a\u5904\u7406\u7684\u7ed3\u679c\uff0c\u6bd4\u5982 200 \u662f\u6210\u529f\uff0c500 \u662f\u670d\u52a1\u5668\u9519\u8bef\uff1b</li> <li>\u539f\u56e0\uff1a\u4f5c\u4e3a\u6570\u5b57\u72b6\u6001\u7801\u8865\u5145\uff0c\u662f\u66f4\u8be6\u7ec6\u7684\u89e3\u91ca\u6587\u5b57\uff0c\u5e2e\u52a9\u4eba\u7406\u89e3\u539f\u56e0\u3002</li> </ol> <p><img src="'+E+'" alt=""></p> <p>\u4f8b\u5982\uff1a</p> <pre><code>HTTP/1.1 200 OK</code></pre><p>\u610f\u601d\u5c31\u662f\uff1a\u201c\u6d4f\u89c8\u5668\u4f60\u597d\uff0c\u6211\u5df2\u7ecf\u5904\u7406\u5b8c\u4e86\u4f60\u7684\u8bf7\u6c42\uff0c\u8fd9\u4e2a\u62a5\u6587\u4f7f\u7528\u7684\u534f\u8bae\u7248\u672c\u53f7\u662f 1.1\uff0c\u72b6\u6001\u7801\u662f 200\uff0c\u4e00\u5207 OK\u3002\u201d</p> <p>\u800c\u53e6\u4e00\u4e2a\u201cGET /favicon.ico HTTP/1.1\u201d\u7684\u54cd\u5e94\u62a5\u6587\u72b6\u6001\u884c\u662f\uff1a</p> <pre><code>HTTP/1.1 404 Not Found</code></pre><p>\u7ffb\u8bd1\u6210\u4eba\u8bdd\u5c31\u662f\uff1a\u201c\u62b1\u6b49\u554a\u6d4f\u89c8\u5668\uff0c\u521a\u624d\u4f60\u7684\u8bf7\u6c42\u6536\u5230\u4e86\uff0c\u4f46\u6211\u6ca1\u627e\u5230\u4f60\u8981\u7684\u8d44\u6e90\uff0c\u9519\u8bef\u4ee3\u7801\u662f 404\uff0c\u63a5\u4e0b\u6765\u7684\u4e8b\u60c5\u4f60\u5c31\u770b\u7740\u529e\u5427\u3002\u201d</p> <h2 id="4-\u5934\u90e8\u5b57\u6bb5">4 \u5934\u90e8\u5b57\u6bb5</h2> <p>\u8bf7\u6c42\u884c\u6216\u72b6\u6001\u884c\u518d\u52a0\u4e0a\u5934\u90e8\u5b57\u6bb5\u96c6\u5408\u5c31\u6784\u6210\u4e86 HTTP \u62a5\u6587\u91cc\u5b8c\u6574\u7684\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934</p> <p><img src="'+C+'" alt=""></p> <p><img src="'+w+'" alt=""></p> <p>\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u7684\u7ed3\u6784\u662f\u57fa\u672c\u4e00\u6837\u7684\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u8d77\u59cb\u884c\uff0c\u6240\u4ee5\u6211\u628a\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u91cc\u7684\u5b57\u6bb5\u653e\u5728\u4e00\u8d77\u4ecb\u7ecd\u3002</p> <p>\u5934\u90e8\u5b57\u6bb5\u662f key-value \u7684\u5f62\u5f0f\uff0ckey \u548c value \u4e4b\u95f4\u7528\u201c:\u201d\u5206\u9694\uff0c\u6700\u540e\u7528 CRLF \u6362\u884c\u8868\u793a\u5b57\u6bb5\u7ed3\u675f\u3002\u6bd4\u5982\u5728\u201cHost: 127.0.0.1\u201d\u8fd9\u4e00\u884c\u91cc key \u5c31\u662f\u201cHost\u201d\uff0cvalue \u5c31\u662f\u201c127.0.0.1\u201d\u3002</p> <p>HTTP \u5934\u5b57\u6bb5\u975e\u5e38\u7075\u6d3b\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u91cc\u7684 Host\u3001Connection \u7b49\u5df2\u6709\u5934\uff0c\u4e5f\u53ef\u4ee5\u4efb\u610f\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5934\uff0c\u8fd9\u5c31\u7ed9 HTTP \u534f\u8bae\u5e26\u6765\u4e86\u65e0\u9650\u7684\u6269\u5c55\u53ef\u80fd\u3002</p> <p>\u4e0d\u8fc7\u4f7f\u7528\u5934\u5b57\u6bb5\u9700\u8981\u6ce8\u610f\u4e0b\u9762\u51e0\u70b9\uff1a</p> <ol> <li>\u5b57\u6bb5\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u4f8b\u5982\u201cHost\u201d\u4e5f\u53ef\u4ee5\u5199\u6210\u201chost\u201d\uff0c\u4f46\u9996\u5b57\u6bcd\u5927\u5199\u7684\u53ef\u8bfb\u6027\u66f4\u597d\uff1b</li> <li>\u5b57\u6bb5\u540d\u91cc\u4e0d\u5141\u8bb8\u51fa\u73b0\u7a7a\u683c\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fde\u5b57\u7b26\u201c-\u201d\uff0c\u4f46\u4e0d\u80fd\u4f7f\u7528\u4e0b\u5212\u7ebf\u201c_\u201d\u3002\u4f8b\u5982\uff0c\u201ctest-name\u201d\u662f\u5408\u6cd5\u7684\u5b57\u6bb5\u540d\uff0c\u800c\u201ctest name\u201d\u201ctest_name\u201d\u662f\u4e0d\u6b63\u786e\u7684\u5b57\u6bb5\u540d\uff1b</li> <li>\u5b57\u6bb5\u540d\u540e\u9762\u5fc5\u987b\u7d27\u63a5\u7740\u201c:\u201d\uff0c\u4e0d\u80fd\u6709\u7a7a\u683c\uff0c\u800c\u201c:\u201d\u540e\u7684\u5b57\u6bb5\u503c\u524d\u53ef\u4ee5\u6709\u591a\u4e2a\u7a7a\u683c\uff1b</li> <li>\u5b57\u6bb5\u7684\u987a\u5e8f\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff0c\u53ef\u4ee5\u4efb\u610f\u6392\u5217\u4e0d\u5f71\u54cd\u8bed\u4e49\uff1b</li> <li>\u5b57\u6bb5\u539f\u5219\u4e0a\u4e0d\u80fd\u91cd\u590d\uff0c\u9664\u975e\u8fd9\u4e2a\u5b57\u6bb5\u672c\u8eab\u7684\u8bed\u4e49\u5141\u8bb8\uff0c\u4f8b\u5982 Set-Cookie\u3002</li> </ol> <p>\u4e0b\u9762\u662f\u4e24\u4e2a\u6700\u7b80\u5355\u7684 HTTP \u8bf7\u6c42\uff0c\u7b2c\u4e00\u4e2a\u5728\u201c:\u201d\u540e\u6709\u591a\u4e2a\u7a7a\u683c\uff0c\u7b2c\u4e8c\u4e2a\u5728\u201c:\u201d\u524d\u6709\u7a7a\u683c\u3002</p> <pre><code>GET /09-1 HTTP/1.1\nHost: www.chrono.com\n\nGET /09-1 HTTP/1.1\nHost : www.chrono.com</code></pre><p>\u7b2c\u4e00\u4e2a\u53ef\u4ee5\u6b63\u786e\u83b7\u53d6\u670d\u52a1\u5668\u7684\u54cd\u5e94\u62a5\u6587\uff0c\u800c\u7b2c\u4e8c\u4e2a\u5f97\u5230\u7684\u4f1a\u662f\u4e00\u4e2a\u201c400 Bad Request\u201d\uff0c\u8868\u793a\u8bf7\u6c42\u62a5\u6587\u683c\u5f0f\u6709\u8bef\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u6b63\u786e\u5904\u7406\uff1a</p> <pre><code>HTTP/1.1 400 Bad Request\nServer: openresty/1.15.8.1\nConnection: close</code></pre><h2 id="5-\u5e38\u7528\u5934\u5b57\u6bb5">5 \u5e38\u7528\u5934\u5b57\u6bb5</h2> <p>HTTP \u534f\u8bae\u89c4\u5b9a\u4e86\u975e\u5e38\u591a\u7684\u5934\u90e8\u5b57\u6bb5\uff0c\u5b9e\u73b0\u5404\u79cd\u5404\u6837\u7684\u529f\u80fd\uff0c\u4f46\u57fa\u672c\u4e0a\u53ef\u4ee5\u5206\u4e3a\u56db\u5927\u7c7b\uff1a</p> <ol> <li>\u901a\u7528\u5b57\u6bb5\uff1a\u5728\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u91cc\u90fd\u53ef\u4ee5\u51fa\u73b0\uff1b</li> <li>\u8bf7\u6c42\u5b57\u6bb5\uff1a\u4ec5\u80fd\u51fa\u73b0\u5728\u8bf7\u6c42\u5934\u91cc\uff0c\u8fdb\u4e00\u6b65\u8bf4\u660e\u8bf7\u6c42\u4fe1\u606f\u6216\u8005\u989d\u5916\u7684\u9644\u52a0\u6761\u4ef6\uff1b</li> <li>\u54cd\u5e94\u5b57\u6bb5\uff1a\u4ec5\u80fd\u51fa\u73b0\u5728\u54cd\u5e94\u5934\u91cc\uff0c\u8865\u5145\u8bf4\u660e\u54cd\u5e94\u62a5\u6587\u7684\u4fe1\u606f\uff1b</li> <li>\u5b9e\u4f53\u5b57\u6bb5\uff1a\u5b83\u5b9e\u9645\u4e0a\u5c5e\u4e8e\u901a\u7528\u5b57\u6bb5\uff0c\u4f46\u4e13\u95e8\u63cf\u8ff0 body \u7684\u989d\u5916\u4fe1\u606f\u3002</li> </ol> <p>\u5bf9 HTTP \u62a5\u6587\u7684\u89e3\u6790\u548c\u5904\u7406\u5b9e\u9645\u4e0a\u4e3b\u8981\u5c31\u662f\u5bf9\u5934\u5b57\u6bb5\u7684\u5904\u7406\uff0c\u7406\u89e3\u4e86\u5934\u5b57\u6bb5\u4e5f\u5c31\u7406\u89e3\u4e86 HTTP \u62a5\u6587\u3002</p> <h3 id="51-host">5.1 Host</h3> <p>Host \u5b57\u6bb5\uff0c\u5b83\u5c5e\u4e8e\u8bf7\u6c42\u5b57\u6bb5\uff0c\u53ea\u80fd\u51fa\u73b0\u5728\u8bf7\u6c42\u5934\u91cc\uff0c\u5b83\u540c\u65f6\u4e5f\u662f\u552f\u4e00\u4e00\u4e2a HTTP/1.1 \u89c4\u8303\u91cc\u8981\u6c42\u5fc5\u987b\u51fa\u73b0\u7684\u5b57\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u8bf7\u6c42\u5934\u91cc\u6ca1\u6709 Host\uff0c\u90a3\u8fd9\u5c31\u662f\u4e00\u4e2a\u9519\u8bef\u7684\u62a5\u6587\u3002</p> <p>Host \u5b57\u6bb5\u544a\u8bc9\u670d\u52a1\u5668\u8fd9\u4e2a\u8bf7\u6c42\u5e94\u8be5\u7531\u54ea\u4e2a\u4e3b\u673a\u6765\u5904\u7406\uff0c\u5f53\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u6258\u7ba1\u4e86\u591a\u4e2a\u865a\u62df\u4e3b\u673a\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u7aef\u5c31\u9700\u8981\u7528 Host \u5b57\u6bb5\u6765\u9009\u62e9\uff0c\u6709\u70b9\u50cf\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u201c\u8def\u7531\u91cd\u5b9a\u5411\u201d\u3002</p> <p>\u4f8b\u5982\u6211\u4eec\u7684\u8bd5\u9a8c\u73af\u5883\uff0c\u5728 127.0.0.1 \u4e0a\u6709\u4e09\u4e2a\u865a\u62df\u4e3b\u673a\uff1a\u201c<a href="http://www.chrono.com%E2%80%9D%E2%80%9Cwww.metroid.net%E2%80%9D%E5%92%8C%E2%80%9Corigin.io%E2%80%9D%E3%80%82%E9%82%A3%E4%B9%88%E5%BD%93%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E7%9A%84%E6%96%B9%E5%BC%8F%E8%AE%BF%E9%97%AE%E6%97%B6%EF%BC%8C%E5%B0%B1%E5%BF%85%E9%A1%BB%E8%A6%81%E7%94%A8">www.chrono.com\u201d\u201cwww.metroid.net\u201d\u548c\u201corigin.io\u201d\u3002\u90a3\u4e48\u5f53\u4f7f\u7528\u57df\u540d\u7684\u65b9\u5f0f\u8bbf\u95ee\u65f6\uff0c\u5c31\u5fc5\u987b\u8981\u7528</a> Host \u5b57\u6bb5\u6765\u533a\u5206\u8fd9\u4e09\u4e2a IP \u76f8\u540c\u4f46\u57df\u540d\u4e0d\u540c\u7684\u7f51\u7ad9\uff0c\u5426\u5219\u670d\u52a1\u5668\u5c31\u4f1a\u627e\u4e0d\u5230\u5408\u9002\u7684\u865a\u62df\u4e3b\u673a\uff0c\u65e0\u6cd5\u5904\u7406\u3002</p> <h3 id="52-user-agent">5.2 User-Agent</h3> <p>User-Agent \u662f\u8bf7\u6c42\u5b57\u6bb5\uff0c\u53ea\u51fa\u73b0\u5728\u8bf7\u6c42\u5934\u91cc\u3002\u5b83\u4f7f\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u6765\u63cf\u8ff0\u53d1\u8d77 HTTP \u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u4f9d\u636e\u5b83\u6765\u8fd4\u56de\u6700\u5408\u9002\u6b64\u6d4f\u89c8\u5668\u663e\u793a\u7684\u9875\u9762\u3002</p> <p>\u4f46\u7531\u4e8e\u5386\u53f2\u7684\u539f\u56e0\uff0cUser-Agent \u975e\u5e38\u6df7\u4e71\uff0c\u6bcf\u4e2a\u6d4f\u89c8\u5668\u90fd\u81ea\u79f0\u662f\u201cMozilla\u201d\u201cChrome\u201d\u201cSafari\u201d\uff0c\u4f01\u56fe\u4f7f\u7528\u8fd9\u4e2a\u5b57\u6bb5\u6765\u4e92\u76f8\u201c\u4f2a\u88c5\u201d\uff0c\u5bfc\u81f4 User-Agent \u53d8\u5f97\u8d8a\u6765\u8d8a\u957f\uff0c\u6700\u7ec8\u53d8\u5f97\u6beb\u65e0\u610f\u4e49\u3002</p> <p>\u4e0d\u8fc7\u6709\u7684\u6bd4\u8f83\u201c\u8bda\u5b9e\u201d\u7684\u722c\u866b\u4f1a\u5728 User-Agent \u91cc\u7528\u201cspider\u201d\u6807\u660e\u81ea\u5df1\u662f\u722c\u866b\uff0c\u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u5b57\u6bb5\u5b9e\u73b0\u7b80\u5355\u7684\u53cd\u722c\u866b\u7b56\u7565\u3002</p> <h3 id="53-date">5.3 Date</h3> <p>Date \u5b57\u6bb5\u662f\u4e00\u4e2a\u901a\u7528\u5b57\u6bb5\uff0c\u4f46\u901a\u5e38\u51fa\u73b0\u5728\u54cd\u5e94\u5934\u91cc\uff0c\u8868\u793a HTTP \u62a5\u6587\u521b\u5efa\u7684\u65f6\u95f4\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65f6\u95f4\u518d\u642d\u914d\u5176\u4ed6\u5b57\u6bb5\u51b3\u5b9a\u7f13\u5b58\u7b56\u7565\u3002</p> <h3 id="54-server">5.4 Server</h3> <p>Server \u5b57\u6bb5\u662f\u54cd\u5e94\u5b57\u6bb5\uff0c\u53ea\u80fd\u51fa\u73b0\u5728\u54cd\u5e94\u5934\u91cc\u3002\u5b83\u544a\u8bc9\u5ba2\u6237\u7aef\u5f53\u524d\u6b63\u5728\u63d0\u4f9b Web \u670d\u52a1\u7684\u8f6f\u4ef6\u540d\u79f0\u548c\u7248\u672c\u53f7\uff0c\u4f8b\u5982\u5728\u6211\u4eec\u7684\u5b9e\u9a8c\u73af\u5883\u91cc\u5b83\u5c31\u662f\u201cServer: openresty/1.15.8.1\u201d\uff0c\u5373\u4f7f\u7528\u7684\u662f OpenResty 1.15.8.1\u3002</p> <p>Server \u5b57\u6bb5\u4e5f\u4e0d\u662f\u5fc5\u987b\u8981\u51fa\u73b0\u7684\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u628a\u670d\u52a1\u5668\u7684\u4e00\u90e8\u5206\u4fe1\u606f\u66b4\u9732\u7ed9\u5916\u754c\uff0c\u5982\u679c\u8fd9\u4e2a\u7248\u672c\u6070\u597d\u5b58\u5728 bug\uff0c\u90a3\u4e48\u9ed1\u5ba2\u5c31\u6709\u53ef\u80fd\u5229\u7528 bug \u653b\u9677\u670d\u52a1\u5668\u3002\u6240\u4ee5\uff0c\u6709\u7684\u7f51\u7ad9\u54cd\u5e94\u5934\u91cc\u8981\u4e48\u6ca1\u6709\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u8981\u4e48\u5c31\u7ed9\u51fa\u4e00\u4e2a\u5b8c\u5168\u65e0\u5173\u7684\u63cf\u8ff0\u4fe1\u606f\u3002</p> <p>\u6bd4\u5982 GitHub\uff0c\u5b83\u7684 Server \u5b57\u6bb5\u91cc\u5c31\u770b\u4e0d\u51fa\u662f\u4f7f\u7528\u4e86 Apache \u8fd8\u662f Nginx\uff0c\u53ea\u662f\u663e\u793a\u4e3a\u201cGitHub.com\u201d\u3002</p> <p><img src="'+g+'" alt=""></p> <h3 id="55-content-length">5.5 Content-Length</h3> <p>\u5b9e\u4f53\u5b57\u6bb5\u91cc\u8981\u8bf4\u7684\u4e00\u4e2a\u662f Content-Length\uff0c\u5b83\u8868\u793a\u62a5\u6587\u91cc body \u7684\u957f\u5ea6\uff0c\u4e5f\u5c31\u662f\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u7a7a\u884c\u540e\u9762\u6570\u636e\u7684\u957f\u5ea6\u3002\u670d\u52a1\u5668\u770b\u5230\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u5c31\u77e5\u9053\u4e86\u540e\u7eed\u6709\u591a\u5c11\u6570\u636e\uff0c\u53ef\u4ee5\u76f4\u63a5\u63a5\u6536\u3002\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u90a3\u4e48 body \u5c31\u662f\u4e0d\u5b9a\u957f\u7684\uff0c\u9700\u8981\u4f7f\u7528 chunked \u65b9\u5f0f\u5206\u6bb5\u4f20\u8f93\u3002</p> <h2 id="6-\u603b\u7ed3">6 \u603b\u7ed3</h2> <ol> <li>HTTP \u62a5\u6587\u7ed3\u6784\u5c31\u50cf\u662f\u201c\u5927\u5934\u513f\u5b50\u201d\uff0c\u7531\u201c\u8d77\u59cb\u884c + \u5934\u90e8 + \u7a7a\u884c + \u5b9e\u4f53\u201d\u7ec4\u6210\uff0c\u7b80\u5355\u5730\u8bf4\u5c31\u662f\u201cheader+body\u201d\uff1b</li> <li>HTTP \u62a5\u6587\u53ef\u4ee5\u6ca1\u6709 body\uff0c\u4f46\u5fc5\u987b\u8981\u6709 header\uff0c\u800c\u4e14 header \u540e\u4e5f\u5fc5\u987b\u8981\u6709\u7a7a\u884c\uff0c\u5f62\u8c61\u5730\u8bf4\u5c31\u662f\u201c\u5927\u5934\u201d\u5fc5\u987b\u8981\u5e26\u7740\u201c\u8116\u5b50\u201d\uff1b</li> <li>\u8bf7\u6c42\u5934\u7531\u201c\u8bf7\u6c42\u884c + \u5934\u90e8\u5b57\u6bb5\u201d\u6784\u6210\uff0c\u54cd\u5e94\u5934\u7531\u201c\u72b6\u6001\u884c + \u5934\u90e8\u5b57\u6bb5\u201d\u6784\u6210\uff1b</li> <li>\u8bf7\u6c42\u884c\u6709\u4e09\u90e8\u5206\uff1a\u8bf7\u6c42\u65b9\u6cd5\uff0c\u8bf7\u6c42\u76ee\u6807\u548c\u7248\u672c\u53f7\uff1b</li> <li>\u72b6\u6001\u884c\u4e5f\u6709\u4e09\u90e8\u5206\uff1a\u7248\u672c\u53f7\uff0c\u72b6\u6001\u7801\u548c\u539f\u56e0\u5b57\u7b26\u4e32\uff1b</li> <li>\u5934\u90e8\u5b57\u6bb5\u662f key-value \u7684\u5f62\u5f0f\uff0c\u7528\u201c:\u201d\u5206\u9694\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u987a\u5e8f\u4efb\u610f\uff0c\u9664\u4e86\u89c4\u5b9a\u7684\u6807\u51c6\u5934\uff0c\u4e5f\u53ef\u4ee5\u4efb\u610f\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u5b9e\u73b0\u529f\u80fd\u6269\u5c55\uff1b</li> <li>HTTP/1.1 \u91cc\u552f\u4e00\u8981\u6c42\u5fc5\u987b\u63d0\u4f9b\u7684\u5934\u5b57\u6bb5\u662f Host\uff0c\u5b83\u5fc5\u987b\u51fa\u73b0\u5728\u8bf7\u6c42\u5934\u91cc\uff0c\u6807\u8bb0\u865a\u62df\u4e3b\u673a\u540d\u3002</li> </ol> <h2 id="7-\u6269\u5c55\u95ee\u9898">7 \u6269\u5c55\u95ee\u9898</h2> <ol> <li>\u5982\u679c\u62fc HTTP \u62a5\u6587\u7684\u65f6\u5019\uff0c\u5728\u5934\u5b57\u6bb5\u540e\u591a\u52a0\u4e86\u4e00\u4e2a CRLF\uff0c\u5bfc\u81f4\u51fa\u73b0\u4e86\u4e00\u4e2a\u7a7a\u884c\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f</li> <li>\u8bb2\u5934\u5b57\u6bb5\u65f6\u8bf4\u201c:\u201d\u540e\u7684\u7a7a\u683c\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u90a3\u4e3a\u4ec0\u4e48\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ea\u4f7f\u7528\u4e00\u4e2a\u7a7a\u683c\u5462\uff1f</li> <li>\u6b22\u8fce\u4f60\u628a\u81ea\u5df1\u7684\u7b54\u6848\u5199\u5728\u7559\u8a00\u533a\uff0c\u4e0e\u6211\u548c\u5176\u4ed6\u540c\u5b66\u4e00\u8d77\u8ba8\u8bba\u3002\u5982\u679c\u4f60\u89c9\u5f97\u6709\u6240\u6536\u83b7\uff0c\u4e5f\u6b22\u8fce\u628a\u6587\u7ae0\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\u3002</li> </ol> ';e.exports=m}}]);