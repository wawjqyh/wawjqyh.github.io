(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/network/uriFormat"],{Ep9f:function(p,e,t){var i=t("Rxnk"),h=t("6ZgD"),r=t("7Awx"),R=i(h),o=i(r),I='<h1 id="uri-\u683c\u5f0f">URI \u683c\u5f0f</h1> <p>\u4e0a\u4e00\u8bb2\u91cc\u6211\u4eec\u4e00\u8d77\u5b66\u4e60\u4e86 HTTP \u534f\u8bae\u91cc\u7684\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5176\u4e2d\u6700\u5e38\u7528\u7684\u4e00\u4e2a\u662f GET\uff0c\u5b83\u7528\u6765\u4ece\u670d\u52a1\u5668\u4e0a\u67d0\u4e2a\u8d44\u6e90\u83b7\u53d6\u6570\u636e\uff0c\u53e6\u4e00\u4e2a\u662f POST\uff0c\u5411\u67d0\u4e2a\u8d44\u6e90\u63d0\u4ea4\u6570\u636e\u3002</p> <p>\u6211\u4eec\u5e38\u7528 GET \u8bf7\u6c42\u6765\u83b7\u53d6\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u67d0\u4e2a\u8d44\u6e90\uff0c\u90a3\u4e48\uff0c\u5e94\u8be5\u7528\u4ec0\u4e48\u6765\u6807\u8bb0\u670d\u52a1\u5668\u4e0a\u7684\u8d44\u6e90\u5462\uff1f\u600e\u4e48\u533a\u5206\u201c\u8fd9\u4e2a\u201d\u8d44\u6e90\u548c\u201c\u90a3\u4e2a\u201d\u8d44\u6e90\u5462\uff1f</p> <p>\u90a3\u5c31\u662f URI\uff0c\u4e5f\u5c31\u662f\u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26\uff08Uniform Resource Identifier\uff09\u3002\u56e0\u4e3a\u5b83\u7ecf\u5e38\u51fa\u73b0\u5728\u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f\u91cc\uff0c\u6240\u4ee5\u4fd7\u79f0\u4e3a\u201c\u7f51\u7edc\u5730\u5740\u201d\uff0c\u7b80\u79f0\u201c\u7f51\u5740\u201d\u3002</p> <p>\u4e25\u683c\u5730\u8bf4\uff0cURI \u4e0d\u5b8c\u5168\u7b49\u540c\u4e8e\u7f51\u5740\uff0c\u5b83\u5305\u542b\u6709 URL \u548c URN \u4e24\u4e2a\u90e8\u5206\uff0c\u5728 HTTP \u4e16\u754c\u91cc\u7528\u7684\u7f51\u5740\u5b9e\u9645\u4e0a\u662f URL\u2014\u2014\u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26\uff08Uniform Resource Locator\uff09\u3002\u4f46\u56e0\u4e3a URL \u5b9e\u5728\u662f\u592a\u666e\u53ca\u4e86\uff0c\u6240\u4ee5\u5e38\u5e38\u628a\u8fd9\u4e24\u8005\u7b80\u5355\u5730\u89c6\u4e3a\u76f8\u7b49\u3002</p> <h2 id="1-uri-\u7684\u683c\u5f0f">1 URI \u7684\u683c\u5f0f</h2> <p>URI \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u7684\u4f5c\u7528\u662f\u552f\u4e00\u5730\u6807\u8bb0\u8d44\u6e90\u7684\u4f4d\u7f6e\u6216\u8005\u540d\u5b57\u3002</p> <p>\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b83\u4e0d\u4ec5\u80fd\u591f\u6807\u8bb0\u4e07\u7ef4\u7f51\u7684\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u6807\u8bb0\u5176\u4ed6\u7684\uff0c\u5982\u90ae\u4ef6\u7cfb\u7edf\u3001\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7b49\u4efb\u610f\u8d44\u6e90\u3002\u800c\u201c\u8d44\u6e90\u201d\u65e2\u53ef\u4ee5\u662f\u5b58\u5728\u78c1\u76d8\u4e0a\u7684\u9759\u6001\u6587\u672c\u3001\u9875\u9762\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u662f\u7531 Java\u3001PHP \u63d0\u4f9b\u7684\u52a8\u6001\u670d\u52a1\u3002</p> <p>\u4e0b\u9762\u7684\u8fd9\u5f20\u56fe\u663e\u793a\u4e86 URI \u6700\u5e38\u7528\u7684\u5f62\u5f0f\uff0c\u7531 scheme\u3001host:port\u3001path \u548c query \u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u4f46\u6709\u7684\u90e8\u5206\u53ef\u4ee5\u89c6\u60c5\u51b5\u7701\u7565\u3002</p> <p><img src="'+R+'" alt=""></p> <h2 id="2-uri-\u7684\u57fa\u672c\u7ec4\u6210">2 URI \u7684\u57fa\u672c\u7ec4\u6210</h2> <p>URI \u7b2c\u4e00\u4e2a\u7ec4\u6210\u90e8\u5206\u53eb scheme\uff0c\u7ffb\u8bd1\u6210\u4e2d\u6587\u53eb\u201c\u65b9\u6848\u540d\u201d\u6216\u8005\u201c\u534f\u8bae\u540d\u201d\uff0c\u8868\u793a\u8d44\u6e90\u5e94\u8be5\u4f7f\u7528\u54ea\u79cd\u534f\u8bae\u6765\u8bbf\u95ee\u3002</p> <p>\u6700\u5e38\u89c1\u7684\u5f53\u7136\u5c31\u662f\u201chttp\u201d\u4e86\uff0c\u8868\u793a\u4f7f\u7528 HTTP \u534f\u8bae\u3002\u53e6\u5916\u8fd8\u6709\u201chttps\u201d\uff0c\u8868\u793a\u4f7f\u7528\u7ecf\u8fc7\u52a0\u5bc6\u3001\u5b89\u5168\u7684 HTTPS \u534f\u8bae\u3002\u6b64\u5916\u8fd8\u6709\u5176\u4ed6\u4e0d\u662f\u5f88\u5e38\u89c1\u7684 scheme\uff0c\u4f8b\u5982 ftp\u3001ldap\u3001file\u3001news \u7b49\u3002</p> <p>\u6d4f\u89c8\u5668\u6216\u8005\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u770b\u5230 URI \u91cc\u7684 scheme\uff0c\u5c31\u77e5\u9053\u4e0b\u4e00\u6b65\u8be5\u600e\u4e48\u8d70\u4e86\uff0c\u4f1a\u8c03\u7528\u76f8\u5e94\u7684 HTTP \u6216\u8005 HTTPS \u4e0b\u5c42 API\u3002\u663e\u7136\uff0c\u5982\u679c\u4e00\u4e2a URI \u6ca1\u6709\u63d0\u4f9b scheme\uff0c\u5373\u4f7f\u540e\u9762\u7684\u5730\u5740\u518d\u5b8c\u5584\uff0c\u4e5f\u662f\u65e0\u6cd5\u5904\u7406\u7684\u3002</p> <p>\u5728 scheme \u4e4b\u540e\uff0c\u5fc5\u987b\u662f\u4e09\u4e2a\u7279\u5b9a\u7684\u5b57\u7b26\u201c://\u201d\uff0c\u5b83\u628a scheme \u548c\u540e\u9762\u7684\u90e8\u5206\u5206\u79bb\u5f00\u3002</p> <p>\u5728\u201c://\u201d\u4e4b\u540e\uff0c\u662f\u88ab\u79f0\u4e3a\u201cauthority\u201d\u7684\u90e8\u5206\uff0c\u8868\u793a\u8d44\u6e90\u6240\u5728\u7684\u4e3b\u673a\u540d\uff0c\u901a\u5e38\u7684\u5f62\u5f0f\u662f\u201chost:port\u201d\uff0c\u5373\u4e3b\u673a\u540d\u52a0\u7aef\u53e3\u53f7\u3002</p> <p>\u4e3b\u673a\u540d\u53ef\u4ee5\u662f IP \u5730\u5740\u6216\u8005\u57df\u540d\u7684\u5f62\u5f0f\uff0c\u5fc5\u987b\u8981\u6709\uff0c\u5426\u5219\u6d4f\u89c8\u5668\u5c31\u4f1a\u627e\u4e0d\u5230\u670d\u52a1\u5668\u3002\u4f46\u7aef\u53e3\u53f7\u6709\u65f6\u53ef\u4ee5\u7701\u7565\uff0c\u6d4f\u89c8\u5668\u7b49\u5ba2\u6237\u7aef\u4f1a\u4f9d\u636e scheme \u4f7f\u7528\u9ed8\u8ba4\u7684\u7aef\u53e3\u53f7\uff0c\u4f8b\u5982 HTTP \u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7\u662f 80\uff0cHTTPS \u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7\u662f 443\u3002</p> <p>\u6709\u4e86\u534f\u8bae\u540d\u548c\u4e3b\u673a\u5730\u5740\u3001\u7aef\u53e3\u53f7\uff0c\u518d\u52a0\u4e0a\u540e\u9762\u6807\u8bb0\u8d44\u6e90\u6240\u5728\u4f4d\u7f6e\u7684 path\uff0c\u6d4f\u89c8\u5668\u5c31\u53ef\u4ee5\u8fde\u63a5\u670d\u52a1\u5668\u8bbf\u95ee\u8d44\u6e90\u4e86\u3002</p> <p>\u8fd9\u91cc\u6211\u4e5f\u8981\u518d\u6b21\u63d0\u9192\u4f60\u6ce8\u610f\uff0cURI \u7684 path \u90e8\u5206\u5fc5\u987b\u4ee5\u201c/\u201d\u5f00\u59cb\uff0c\u4e5f\u5c31\u662f\u5fc5\u987b\u5305\u542b\u201c/\u201d\uff0c\u4e0d\u8981\u628a\u201c/\u201d\u8bef\u8ba4\u4e3a\u5c5e\u4e8e\u524d\u9762 authority\u3002</p> <p>\u9700\u8981\u6ce8\u610f\u7684\u662f file \u534f\u8bae\uff1a</p> <pre><code>file:///D:/http_study/www/</code></pre><p>\u5b83\u7684\u534f\u8bae\u540d\u4e0d\u662f\u201chttp\u201d\uff0c\u800c\u662f\u201cfile\u201d\uff0c\u8868\u793a\u8fd9\u662f\u672c\u5730\u6587\u4ef6\uff0c\u800c\u540e\u9762\u5c45\u7136\u6709\u4e09\u4e2a\u659c\u6760</p> <p>\u8fd9\u4e09\u4e2a\u659c\u6760\u91cc\u7684\u524d\u4e24\u4e2a\u5c5e\u4e8e URI \u7279\u6b8a\u5206\u9694\u7b26\u201c://\u201d\uff0c\u7136\u540e\u540e\u9762\u7684\u201c/D:/http_study/www/\u201d\u662f\u8def\u5f84\uff0c\u800c\u4e2d\u95f4\u7684\u4e3b\u673a\u540d\u88ab\u201c\u7701\u7565\u201d\u4e86\u3002\u8fd9\u5b9e\u9645\u4e0a\u662f file \u7c7b\u578b URI \u7684\u201c\u7279\u4f8b\u201d\uff0c\u5b83\u5141\u8bb8\u7701\u7565\u4e3b\u673a\u540d\uff0c\u9ed8\u8ba4\u662f\u672c\u673a localhost\u3002</p> <h2 id="3-uri-\u7684\u67e5\u8be2\u53c2\u6570">3 URI \u7684\u67e5\u8be2\u53c2\u6570</h2> <p>\u4f7f\u7528\u201c\u534f\u8bae\u540d + \u4e3b\u673a\u540d + \u8def\u5f84\u201d\u7684\u65b9\u5f0f\uff0c\u5df2\u7ecf\u53ef\u4ee5\u7cbe\u786e\u5b9a\u4f4d\u7f51\u7edc\u4e0a\u7684\u4efb\u4f55\u8d44\u6e90\u4e86\u3002\u4f46\u8fd9\u8fd8\u4e0d\u591f\uff0c\u5f88\u591a\u65f6\u5019\u6211\u4eec\u8fd8\u60f3\u5728\u64cd\u4f5c\u8d44\u6e90\u7684\u65f6\u5019\u9644\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u4fee\u9970\u53c2\u6570\u3002</p> <p>\u4e3e\u51e0\u4e2a\u4f8b\u5b50\uff1a\u83b7\u53d6\u5546\u54c1\u56fe\u7247\uff0c\u4f46\u60f3\u8981\u4e00\u4e2a 32\xd732 \u7684\u7f29\u7565\u56fe\u7248\u672c\uff1b\u83b7\u53d6\u5546\u54c1\u5217\u8868\uff0c\u4f46\u8981\u6309\u67d0\u79cd\u89c4\u5219\u505a\u5206\u9875\u548c\u6392\u5e8f\uff1b\u8df3\u8f6c\u9875\u9762\uff0c\u4f46\u60f3\u8981\u6807\u8bb0\u8df3\u8f6c\u524d\u7684\u539f\u59cb\u9875\u9762\u3002</p> <p>\u4ec5\u7528\u201c\u534f\u8bae\u540d + \u4e3b\u673a\u540d + \u8def\u5f84\u201d\u7684\u65b9\u5f0f\u662f\u65e0\u6cd5\u9002\u5e94\u8fd9\u4e9b\u573a\u666f\u7684\uff0c\u6240\u4ee5 URI \u540e\u9762\u8fd8\u6709\u4e00\u4e2a\u201cquery\u201d\u90e8\u5206\uff0c\u5b83\u5728 path \u4e4b\u540e\uff0c\u7528\u4e00\u4e2a\u201c?\u201d\u5f00\u59cb\uff0c\u4f46\u4e0d\u5305\u542b\u201c?\u201d\uff0c\u8868\u793a\u5bf9\u8d44\u6e90\u9644\u52a0\u7684\u989d\u5916\u8981\u6c42\u3002\u8fd9\u662f\u4e2a\u5f88\u5f62\u8c61\u7684\u7b26\u53f7\uff0c\u6bd4\u201c://\u201d\u8981\u597d\u7684\u591a\uff0c\u5f88\u660e\u663e\u5730\u8868\u793a\u4e86\u201c\u67e5\u8be2\u201d\u7684\u542b\u4e49\u3002</p> <p>\u67e5\u8be2\u53c2\u6570 query \u6709\u4e00\u5957\u81ea\u5df1\u7684\u683c\u5f0f\uff0c\u662f\u591a\u4e2a\u201ckey=value\u201d\u7684\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e9b KV \u503c\u7528\u5b57\u7b26\u201c&amp;\u201d\u8fde\u63a5\uff0c\u6d4f\u89c8\u5668\u548c\u5ba2\u6237\u7aef\u90fd\u53ef\u4ee5\u6309\u7167\u8fd9\u4e2a\u683c\u5f0f\u628a\u957f\u4e32\u7684\u67e5\u8be2\u53c2\u6570\u89e3\u6790\u6210\u53ef\u7406\u89e3\u7684\u5b57\u5178\u6216\u5173\u8054\u6570\u7ec4\u5f62\u5f0f\u3002</p> <p>\u4f8b\u5982\uff1a</p> <pre><code>https://search.jd.com/Search?keyword=openresty&amp;enc=utf-8&amp;qrst=1&amp;rt=1&amp;stop=1&amp;vt=2&amp;wq=openresty&amp;psort=3&amp;click=0</code></pre><h2 id="4-uri-\u7684\u5b8c\u6574\u683c\u5f0f">4 URI \u7684\u5b8c\u6574\u683c\u5f0f</h2> <p>URI \u8fd8\u6709\u4e00\u4e2a\u201c\u771f\u6b63\u201d\u7684\u5b8c\u6574\u5f62\u6001\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002</p> <p><img src="'+o+'" alt=""></p> <p>\u8fd9\u4e2a\u201c\u771f\u6b63\u201d\u5f62\u6001\u6bd4\u57fa\u672c\u5f62\u6001\u591a\u4e86\u4e24\u90e8\u5206\u3002</p> <p>\u7b2c\u4e00\u4e2a\u591a\u51fa\u7684\u90e8\u5206\u662f\u534f\u8bae\u540d\u4e4b\u540e\u3001\u4e3b\u673a\u540d\u4e4b\u524d\u7684\u8eab\u4efd\u4fe1\u606f\u201cuser:passwd@\u201d\uff0c\u8868\u793a\u767b\u5f55\u4e3b\u673a\u65f6\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4f46\u73b0\u5728\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u5f62\u5f0f\u4e86\uff08RFC7230\uff09\uff0c\u56e0\u4e3a\u5b83\u628a\u654f\u611f\u4fe1\u606f\u4ee5\u660e\u6587\u5f62\u5f0f\u66b4\u9732\u51fa\u6765\uff0c\u5b58\u5728\u4e25\u91cd\u7684\u5b89\u5168\u9690\u60a3\u3002</p> <p>\u7b2c\u4e8c\u4e2a\u591a\u51fa\u7684\u90e8\u5206\u662f\u67e5\u8be2\u53c2\u6570\u540e\u7684\u7247\u6bb5\u6807\u8bc6\u7b26\u201c#fragment\u201d\uff0c\u5b83\u662f URI \u6240\u5b9a\u4f4d\u7684\u8d44\u6e90\u5185\u90e8\u7684\u4e00\u4e2a\u201c\u951a\u70b9\u201d\u6216\u8005\u8bf4\u662f\u201c\u6807\u7b7e\u201d\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5728\u83b7\u53d6\u8d44\u6e90\u540e\u76f4\u63a5\u8df3\u8f6c\u5230\u5b83\u6307\u793a\u7684\u4f4d\u7f6e\u3002</p> <p>\u4f46\u7247\u6bb5\u6807\u8bc6\u7b26\u4ec5\u80fd\u7531\u6d4f\u89c8\u5668\u8fd9\u6837\u7684\u5ba2\u6237\u7aef\u4f7f\u7528\uff0c\u670d\u52a1\u5668\u662f\u770b\u4e0d\u5230\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6d4f\u89c8\u5668\u6c38\u8fdc\u4e0d\u4f1a\u628a\u5e26\u201c#fragment\u201d\u7684 URI \u53d1\u9001\u7ed9\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u4e5f\u6c38\u8fdc\u4e0d\u4f1a\u7528\u8fd9\u79cd\u65b9\u5f0f\u53bb\u5904\u7406\u8d44\u6e90\u7684\u7247\u6bb5\u3002</p> <h2 id="5-uri-\u7684\u7f16\u7801">5 URI \u7684\u7f16\u7801</h2> <p>\u521a\u624d\u6211\u4eec\u770b\u5230\u4e86\uff0c\u5728 URI \u91cc\u53ea\u80fd\u4f7f\u7528 ASCII \u7801\uff0c\u4f46\u5982\u679c\u8981\u5728 URI \u91cc\u4f7f\u7528\u82f1\u8bed\u4ee5\u5916\u7684\u6c49\u8bed\u3001\u65e5\u8bed\u7b49\u5176\u4ed6\u8bed\u8a00\u8be5\u600e\u4e48\u529e\u5462\uff1f</p> <p>\u8fd8\u6709\uff0c\u67d0\u4e9b\u7279\u6b8a\u7684 URI\uff0c\u4f1a\u5728 path\u3001query \u91cc\u51fa\u73b0\u201c@&amp;?&quot;\u7b49\u8d77\u754c\u5b9a\u7b26\u4f5c\u7528\u7684\u5b57\u7b26\uff0c\u4f1a\u5bfc\u81f4 URI \u89e3\u6790\u9519\u8bef\uff0c\u8fd9\u65f6\u53c8\u8be5\u600e\u4e48\u529e\u5462\uff1f</p> <p>\u6240\u4ee5\uff0cURI \u5f15\u5165\u4e86\u7f16\u7801\u673a\u5236\uff0c\u5bf9\u4e8e ASCII \u7801\u4ee5\u5916\u7684\u5b57\u7b26\u96c6\u548c\u7279\u6b8a\u5b57\u7b26\u505a\u4e00\u4e2a\u7279\u6b8a\u7684\u64cd\u4f5c\uff0c\u628a\u5b83\u4eec\u8f6c\u6362\u6210\u4e0e URI \u8bed\u4e49\u4e0d\u51b2\u7a81\u7684\u5f62\u5f0f\u3002\u8fd9\u5728 RFC \u89c4\u8303\u91cc\u79f0\u4e3a\u201cescape\u201d\u548c\u201cunescape\u201d\uff0c\u4fd7\u79f0\u201c\u8f6c\u4e49\u201d\u3002</p> <p>URI \u8f6c\u4e49\u7684\u89c4\u5219\u6709\u70b9\u201c\u7b80\u5355\u7c97\u66b4\u201d\uff0c\u76f4\u63a5\u628a\u975e ASCII \u7801\u6216\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362\u6210\u5341\u516d\u8fdb\u5236\u5b57\u8282\u503c\uff0c\u7136\u540e\u524d\u9762\u518d\u52a0\u4e0a\u4e00\u4e2a\u201c%\u201d\u3002</p> <p>\u4f8b\u5982\uff0c\u7a7a\u683c\u88ab\u8f6c\u4e49\u6210\u201c%20\u201d\uff0c\u201c?\u201d\u88ab\u8f6c\u4e49\u6210\u201c%3F\u201d\u3002\u800c\u4e2d\u6587\u3001\u65e5\u6587\u7b49\u5219\u901a\u5e38\u4f7f\u7528 UTF-8 \u7f16\u7801\u540e\u518d\u8f6c\u4e49\uff0c\u4f8b\u5982\u201c\u94f6\u6cb3\u201d\u4f1a\u88ab\u8f6c\u4e49\u6210\u201c%E9%93%B6%E6%B2%B3\u201d\u3002</p> <p>\u6709\u4e86\u8fd9\u4e2a\u7f16\u7801\u89c4\u5219\u540e\uff0cURI \u5c31\u66f4\u52a0\u5b8c\u7f8e\u4e86\uff0c\u53ef\u4ee5\u652f\u6301\u4efb\u610f\u7684\u5b57\u7b26\u96c6\u7528\u4efb\u4f55\u8bed\u8a00\u6765\u6807\u8bb0\u8d44\u6e90\u3002</p> <h2 id="6-\u603b\u7ed3">6 \u603b\u7ed3</h2> <ol> <li>URI \u662f\u7528\u6765\u552f\u4e00\u6807\u8bb0\u670d\u52a1\u5668\u4e0a\u8d44\u6e90\u7684\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u901a\u5e38\u4e5f\u79f0\u4e3a URL\uff1b</li> <li>URI \u901a\u5e38\u7531 scheme\u3001host:port\u3001path \u548c query \u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u6709\u7684\u53ef\u4ee5\u7701\u7565\uff1b</li> <li>scheme \u53eb\u201c\u65b9\u6848\u540d\u201d\u6216\u8005\u201c\u534f\u8bae\u540d\u201d\uff0c\u8868\u793a\u8d44\u6e90\u5e94\u8be5\u4f7f\u7528\u54ea\u79cd\u534f\u8bae\u6765\u8bbf\u95ee\uff1b</li> <li>\u201chost:port\u201d\u8868\u793a\u8d44\u6e90\u6240\u5728\u7684\u4e3b\u673a\u540d\u548c\u7aef\u53e3\u53f7\uff1b</li> <li>path \u6807\u8bb0\u8d44\u6e90\u6240\u5728\u7684\u4f4d\u7f6e\uff1b</li> <li>query \u8868\u793a\u5bf9\u8d44\u6e90\u9644\u52a0\u7684\u989d\u5916\u8981\u6c42\uff1b</li> <li>\u5728 URI \u91cc\u5bf9\u201c@&amp;/\u201d\u7b49\u7279\u6b8a\u5b57\u7b26\u548c\u6c49\u5b57\u5fc5\u987b\u8981\u505a\u7f16\u7801\uff0c\u5426\u5219\u670d\u52a1\u5668\u6536\u5230 HTTP \u62a5\u6587\u540e\u4f1a\u65e0\u6cd5\u6b63\u786e\u5904\u7406\u3002</li> </ol> <h2 id="7-\u6269\u5c55\u95ee\u9898">7 \u6269\u5c55\u95ee\u9898</h2> <ol> <li>HTTP \u534f\u8bae\u5141\u8bb8\u5728\u5728\u8bf7\u6c42\u884c\u91cc\u4f7f\u7528\u5b8c\u6574\u7684 URI\uff0c\u4f46\u4e3a\u4ec0\u4e48\u6d4f\u89c8\u5668\u6ca1\u6709\u8fd9\u4e48\u505a\u5462\uff1f</li> <li>URI \u7684\u67e5\u8be2\u53c2\u6570\u548c\u5934\u5b57\u6bb5\u5f88\u76f8\u4f3c\uff0c\u90fd\u662f key-value \u5f62\u5f0f\uff0c\u90fd\u53ef\u4ee5\u4efb\u610f\u81ea\u5b9a\u4e49\uff0c\u90a3\u4e48\u5b83\u4eec\u5728\u4f7f\u7528\u65f6\u8be5\u5982\u4f55\u533a\u522b\u5462\uff1f</li> </ol> ';p.exports=I}}]);