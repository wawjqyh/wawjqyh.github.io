(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/network/networkModel"],{bNY0:function(l,t,i){var e=i("Rxnk"),P=i("AhPL"),d=e(P),p='<h1 id="\u7f51\u7edc\u5206\u5c42\u6a21\u578b">\u7f51\u7edc\u5206\u5c42\u6a21\u578b</h1> <h2 id="1-tcpip-\u7f51\u7edc\u5206\u5c42\u6a21\u578b">1 TCP/IP \u7f51\u7edc\u5206\u5c42\u6a21\u578b</h2> <p>\u8fd8\u662f\u5148\u4ece TCP/IP \u534f\u8bae\u5f00\u59cb\u8bb2\u8d77\uff0c\u4e00\u662f\u56e0\u4e3a\u5b83\u975e\u5e38\u7ecf\u5178\uff0c\u4e8c\u662f\u56e0\u4e3a\u5b83\u662f\u76ee\u524d\u4e8b\u5b9e\u4e0a\u7684\u7f51\u7edc\u901a\u4fe1\u6807\u51c6\uff0c\u7814\u7a76\u5b83\u7684\u5b9e\u7528\u4ef7\u503c\u6700\u5927\u3002</p> <p>TCP/IP \u5f53\u521d\u7684\u8bbe\u8ba1\u8005\u63d0\u51fa\u4e86\u201c\u5206\u5c42\u201d\u7684\u6982\u5ff5\uff0c\u628a\u590d\u6742\u7684\u7f51\u7edc\u901a\u4fe1\u5212\u5206\u51fa\u591a\u4e2a\u5c42\u6b21\uff0c\u518d\u7ed9\u6bcf\u4e00\u4e2a\u5c42\u6b21\u5206\u914d\u4e0d\u540c\u7684\u804c\u8d23\uff0c\u5c42\u6b21\u5185\u53ea\u4e13\u5fc3\u505a\u81ea\u5df1\u7684\u4e8b\u60c5\u5c31\u597d\uff0c\u7528\u201c\u5206\u800c\u6cbb\u4e4b\u201d\u7684\u601d\u60f3\u628a\u4e00\u4e2a\u201c\u5927\u9ebb\u70e6\u201d\u62c6\u5206\u6210\u4e86\u6570\u4e2a\u201c\u5c0f\u9ebb\u70e6\u201d\uff0c\u4ece\u800c\u89e3\u51b3\u4e86\u7f51\u7edc\u901a\u4fe1\u7684\u96be\u9898\u3002</p> <p>TCP/IP \u534f\u8bae\u603b\u5171\u6709\u56db\u5c42\uff0c\u5c31\u50cf\u642d\u79ef\u6728\u4e00\u6837\uff0c\u6bcf\u4e00\u5c42\u9700\u8981\u4e0b\u5c42\u7684\u652f\u6491\uff0c\u540c\u65f6\u53c8\u652f\u6491\u7740\u4e0a\u5c42\uff0c\u4efb\u4f55\u4e00\u5c42\u88ab\u62bd\u6389\u90fd\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6574\u4e2a\u534f\u8bae\u6808\u574d\u584c\u3002</p> <p>TCP/IP \u534f\u8bae\u4e0d\u662f TCP \u548c IP \u8fd9\u4e24\u4e2a\u534f\u8bae\u7684\u5408\u79f0\uff0c\u800c\u662f\u6307\u56e0\u7279\u7f51\u6574\u4e2a TCP/IP \u534f\u8bae\u65cf</p> <table> <thead> <tr> <th align="left">OSI 7 \u5c42\u6a21\u578b</th> <th align="left">TCP/IP 4 \u5c42\u6a21\u578b</th> <th align="left"></th> </tr> </thead> <tbody><tr> <td align="left">\u5e94\u7528\u5c42<br>\u8868\u793a\u5c42<br>\u4f1a\u8bdd\u5c42</td> <td align="left">\u5e94\u7528\u5c42</td> <td align="left">HTTP\u3001FTP\u3001DNS</td> </tr> <tr> <td align="left">\u4f20\u8f93\u5c42</td> <td align="left">\u4f20\u8f93\u5c42</td> <td align="left">TCP\u3001UDP</td> </tr> <tr> <td align="left">\u7f51\u7edc\u5c42</td> <td align="left">\u7f51\u9645\u4e92\u8054\u5c42</td> <td align="left">IP</td> </tr> <tr> <td align="left">\u6570\u636e\u94fe\u8def\u5c42</td> <td align="left">\u7f51\u7edc\u63a5\u53e3\u5c42</td> <td align="left">Ethernet 802.3</td> </tr> <tr> <td align="left">\u7269\u7406\u5c42</td> <td align="left"></td> <td align="left"></td> </tr> </tbody></table> <h3 id="11-\u7f51\u7edc\u63a5\u53e3\u5c42">1.1 \u7f51\u7edc\u63a5\u53e3\u5c42</h3> <p>\u7b2c\u4e00\u5c42\u53eb\u201c\u94fe\u63a5\u5c42\u201d\uff08link layer\uff09\uff0c\u8d1f\u8d23\u5728\u4ee5\u592a\u7f51\u3001WiFi \u8fd9\u6837\u7684\u5e95\u5c42\u7f51\u7edc\u4e0a\u53d1\u9001\u539f\u59cb\u6570\u636e\u5305\uff0c\u5de5\u4f5c\u5728\u7f51\u5361\u8fd9\u4e2a\u5c42\u6b21\uff0c\u4f7f\u7528 MAC \u5730\u5740\u6765\u6807\u8bb0\u7f51\u7edc\u4e0a\u7684\u8bbe\u5907\uff0c\u6240\u4ee5\u6709\u65f6\u5019\u4e5f\u53eb MAC \u5c42\u3002</p> <p>\u6570\u636e\u94fe\u8def\u5c42\u662f\u8d1f\u8d23\u63a5\u6536 IP \u6570\u636e\u5305\u5e76\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\uff0c\u6216\u8005\u4ece\u7f51\u7edc\u4e0a\u63a5\u6536\u7269\u7406\u5e27\uff0c\u62bd\u51fa IP \u6570\u636e\u5305\uff0c\u4ea4\u7ed9 IP \u5c42\u3002ARP \u662f\u6b63\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff0c\u901a\u8fc7\u5df2\u77e5\u7684 IP\uff0c\u5bfb\u627e\u5bf9\u5e94\u4e3b\u673a\u7684 MAC \u5730\u5740\u3002RARP \u662f\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff0c\u901a\u8fc7 MAC \u5730\u5740\u786e\u5b9a IP \u5730\u5740\u3002\u6bd4\u5982\u65e0\u76d8\u5de5\u4f5c\u7ad9\u8fd8\u6709 DHCP \u670d\u52a1\u3002</p> <p>\u7f51\u7edc\u63a5\u53e3\u5c42\u76f8\u5173\u534f\u8bae\uff1a</p> <ul> <li><code>Ethernet 802.3</code></li> <li><code>Token Ring 802.5</code></li> <li><code>X.25</code></li> <li><code>Frame relay</code></li> <li><code>HDLC</code></li> <li><code>PPP ATM</code></li> </ul> <h3 id="12-\u7f51\u7edc\u5c42">1.2 \u7f51\u7edc\u5c42</h3> <p>\u7b2c\u4e8c\u5c42\u53eb\u201c\u7f51\u9645\u5c42\u201d\u6216\u8005\u201c\u7f51\u7edc\u4e92\u8fde\u5c42\u201d\uff08internet layer\uff09\uff0cIP \u534f\u8bae\u5c31\u5904\u5728\u8fd9\u4e00\u5c42\u3002\u56e0\u4e3a IP \u534f\u8bae\u5b9a\u4e49\u4e86\u201cIP \u5730\u5740\u201d\u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u5c31\u53ef\u4ee5\u5728\u201c\u94fe\u63a5\u5c42\u201d\u7684\u57fa\u7840\u4e0a\uff0c\u7528 IP \u5730\u5740\u53d6\u4ee3 MAC \u5730\u5740\uff0c\u628a\u8bb8\u8bb8\u591a\u591a\u7684\u5c40\u57df\u7f51\u3001\u5e7f\u57df\u7f51\u8fde\u63a5\u6210\u4e00\u4e2a\u865a\u62df\u7684\u5de8\u5927\u7f51\u7edc\uff0c\u5728\u8fd9\u4e2a\u7f51\u7edc\u91cc\u627e\u8bbe\u5907\u65f6\u53ea\u8981\u628a IP \u5730\u5740\u518d\u201c\u7ffb\u8bd1\u201d\u6210 MAC \u5730\u5740\u5c31\u53ef\u4ee5\u4e86\u3002</p> <p>\u7f51\u7edc\u5c42\u8d1f\u8d23\u76f8\u90bb\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\u3002</p> <p>\u5176\u529f\u80fd\u5305\u62ec\u4e09\u65b9\u9762\uff1a</p> <ol> <li>\u5904\u7406\u6765\u81ea\u4f20\u8f93\u5c42\u7684\u5206\u7ec4\u53d1\u9001\u8bf7\u6c42\uff0c\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5c06\u5206\u7ec4\u88c5\u5165 IP \u6570\u636e\u62a5\uff0c\u586b\u5145\u62a5\u5934\uff0c\u9009\u62e9\u53bb\u5f80\u4fe1\u5bbf\u673a\u7684\u8def\u5f84\uff0c\u7136\u540e\u5c06\u6570\u636e\u62a5\u53d1\u5f80\u9002\u5f53\u7684\u7f51\u7edc\u63a5\u53e3</li> <li>\u5904\u7406\u8f93\u5165\u6570\u636e\u62a5\uff1a\u9996\u5148\u68c0\u67e5\u5176\u5408\u6cd5\u6027\uff0c\u7136\u540e\u8fdb\u884c\u5bfb\u5f84--\u5047\u5982\u8be5\u6570\u636e\u62a5\u5df2\u5230\u8fbe\u4fe1\u5bbf\u673a\uff0c\u5219\u53bb\u6389\u62a5\u5934\uff0c\u5c06\u5269\u4e0b\u90e8\u5206\u4ea4\u7ed9\u9002\u5f53\u7684\u4f20\u8f93\u534f\u8bae\uff1b\u5047\u5982\u8be5\u6570\u636e\u62a5\u5c1a\u672a\u5230\u8fbe\u4fe1\u5bbf\uff0c\u5219\u8f6c\u53d1\u8be5\u6570\u636e\u62a5</li> <li>\u5904\u7406\u8def\u5f84\u3001\u6d41\u63a7\u3001\u62e5\u585e\u7b49\u95ee\u9898</li> </ol> <p>\u7f51\u7edc\u5c42\u76f8\u5173\u534f\u8bae\uff1a</p> <ul> <li><code>IP</code> (Internet Protocol\uff09\u534f\u8bae</li> <li><code>ICMP</code> (Internet Control Message Protocol)\u63a7\u5236\u62a5\u6587\u534f\u8bae</li> <li><code>ARP</code> (Address Resolution Protocol\uff09\u5730\u5740\u8f6c\u6362\u534f\u8bae</li> <li><code>RARP</code> (Reverse ARP)\u53cd\u5411\u5730\u5740\u8f6c\u6362\u534f\u8bae</li> </ul> <p>IP \u662f\u7f51\u7edc\u5c42\u7684\u6838\u5fc3\uff0c\u901a\u8fc7\u8def\u7531\u9009\u62e9\u5c06\u4e0b\u4e00\u6761 IP \u5c01\u88c5\u540e\u4ea4\u7ed9\u63a5\u53e3\u5c42\u3002IP \u6570\u636e\u62a5\u662f\u65e0\u8fde\u63a5\u670d\u52a1\u3002</p> <p>ICMP \u662f\u7f51\u7edc\u5c42\u7684\u8865\u5145\uff0c\u53ef\u4ee5\u56de\u9001\u62a5\u6587\u3002\u7528\u6765\u68c0\u6d4b\u7f51\u7edc\u662f\u5426\u901a\u7545\u3002</p> <p>Ping \u547d\u4ee4\u5c31\u662f\u53d1\u9001 ICMP \u7684 echo \u5305\uff0c\u901a\u8fc7\u56de\u9001\u7684 echo relay \u8fdb\u884c\u7f51\u7edc\u6d4b\u8bd5\u3002</p> <h3 id="13-\u4f20\u8f93\u5c42">1.3 \u4f20\u8f93\u5c42</h3> <p>\u7b2c\u4e09\u5c42\u53eb\u201c\u4f20\u8f93\u5c42\u201d\uff08transport layer\uff09\uff0c\u8fd9\u4e2a\u5c42\u6b21\u534f\u8bae\u7684\u804c\u8d23\u662f\u4fdd\u8bc1\u6570\u636e\u5728 IP \u5730\u5740\u6807\u8bb0\u7684\u4e24\u70b9\u4e4b\u95f4\u201c\u53ef\u9760\u201d\u5730\u4f20\u8f93\uff0c\u662f TCP \u534f\u8bae\u5de5\u4f5c\u7684\u5c42\u6b21\uff0c\u4f20\u8f93\u5c42\u53e6\u5916\u8fd8\u6709 UDP \u534f\u8bae</p> <p>\u63d0\u4f9b\u5e94\u7528\u7a0b\u5e8f\u95f4\u7684\u901a\u4fe1\u3002\u5176\u529f\u80fd\u5305\u62ec\uff1a\u4e00\u3001\u683c\u5f0f\u5316\u4fe1\u606f\u6d41\uff1b\u4e8c\u3001\u63d0\u4f9b\u53ef\u9760\u4f20\u8f93\u3002\u4e3a\u5b9e\u73b0\u540e\u8005\uff0c\u4f20\u8f93\u5c42\u534f\u8bae\u89c4\u5b9a\u63a5\u6536\u7aef\u5fc5\u987b\u53d1\u56de\u786e\u8ba4\uff0c\u5e76\u4e14\u5047\u5982\u5206\u7ec4\u4e22\u5931\uff0c\u5fc5\u987b\u91cd\u65b0\u53d1\u9001\uff0c\u5373\u8033\u719f\u80fd\u8be6\u7684\u201c\u4e09\u6b21\u63e1\u624b\u201d\u8fc7\u7a0b\uff0c\u4ece\u800c\u63d0\u4f9b\u53ef\u9760\u7684\u6570\u636e\u4f20\u8f93\u3002</p> <ul> <li><code>TCP</code> \u4f20\u8f93\u63a7\u5236\u534f\u8bae (Transmission Control Protocol\uff09</li> <li><code>UDP</code> \u7528\u6237\u6570\u636e\u62a5\u534f\u8bae (User Datagram protocol\uff09</li> </ul> <p>TCP \u662f\u4e00\u4e2a\u6709\u72b6\u6001\u7684\u534f\u8bae\uff0c\u9700\u8981\u5148\u4e0e\u5bf9\u65b9\u5efa\u7acb\u8fde\u63a5\u7136\u540e\u624d\u80fd\u53d1\u9001\u6570\u636e\uff0c\u800c\u4e14\u4fdd\u8bc1\u6570\u636e\u4e0d\u4e22\u5931\u4e0d\u91cd\u590d\u3002\u800c UDP \u5219\u6bd4\u8f83\u7b80\u5355\uff0c\u5b83\u65e0\u72b6\u6001\uff0c\u4e0d\u7528\u4e8b\u5148\u5efa\u7acb\u8fde\u63a5\u5c31\u53ef\u4ee5\u4efb\u610f\u53d1\u9001\u6570\u636e\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u6570\u636e\u4e00\u5b9a\u4f1a\u53d1\u5230\u5bf9\u65b9\u3002\u4e24\u4e2a\u534f\u8bae\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u533a\u522b\u5728\u4e8e\u6570\u636e\u7684\u5f62\u5f0f\u3002TCP \u7684\u6570\u636e\u662f\u8fde\u7eed\u7684\u201c\u5b57\u8282\u6d41\u201d\uff0c\u6709\u5148\u540e\u987a\u5e8f\uff0c\u800c UDP \u5219\u662f\u5206\u6563\u7684\u5c0f\u6570\u636e\u5305\uff0c\u662f\u987a\u5e8f\u53d1\uff0c\u4e71\u5e8f\u6536\u3002</p> <h3 id="14-\u5e94\u7528\u5c42">1.4 \u5e94\u7528\u5c42</h3> <p>\u534f\u8bae\u6808\u7684\u7b2c\u56db\u5c42\u53eb\u201c\u5e94\u7528\u5c42\u201d\uff08application layer\uff09\uff0c\u7531\u4e8e\u4e0b\u9762\u7684\u4e09\u5c42\u628a\u57fa\u7840\u6253\u5f97\u975e\u5e38\u597d\uff0c\u6240\u4ee5\u5728\u8fd9\u4e00\u5c42\u5c31\u201c\u767e\u82b1\u9f50\u653e\u201d\u4e86\uff0c\u6709\u5404\u79cd\u9762\u5411\u5177\u4f53\u5e94\u7528\u7684\u534f\u8bae\u3002\u4f8b\u5982 Telnet\u3001SSH\u3001FTP\u3001SMTP \u7b49\u7b49\uff0c\u5f53\u7136\u8fd8\u6709\u6211\u4eec\u7684 HTTP\u3002</p> <p>\u5411\u7528\u6237\u63d0\u4f9b\u4e00\u7ec4\u5e38\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6bd4\u5982\u7535\u5b50\u90ae\u4ef6\u3001\u6587\u4ef6\u4f20\u8f93\u8bbf\u95ee\u3001\u8fdc\u7a0b\u767b\u5f55\u7b49\u3002\u8fdc\u7a0b\u767b\u5f55 TELNET \u4f7f\u7528 TELNET \u534f\u8bae\u63d0\u4f9b\u5728\u7f51\u7edc\u5176\u5b83\u4e3b\u673a\u4e0a\u6ce8\u518c\u7684\u63a5\u53e3\u3002TELNET \u4f1a\u8bdd\u63d0\u4f9b\u4e86\u57fa\u4e8e\u5b57\u7b26\u7684\u865a\u62df\u7ec8\u7aef\u3002\u6587\u4ef6\u4f20\u8f93\u8bbf\u95ee FTP \u4f7f\u7528 FTP \u534f\u8bae\u6765\u63d0\u4f9b\u7f51\u7edc\u5185\u673a\u5668\u95f4\u7684\u6587\u4ef6\u62f7\u8d1d\u529f\u80fd\u3002</p> <p>\u5e94\u7528\u5c42\u76f8\u5173\u534f\u8bae\uff1a</p> <ul> <li><code>FTP</code> (File Transfer Protocol\uff09\u662f\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u4e00\u822c\u4e0a\u4f20\u4e0b\u8f7d\u7528 FTP \u670d\u52a1\uff0c\u6570\u636e\u7aef\u53e3\u662f 20H\uff0c\u63a7\u5236\u7aef\u53e3\u662f 21H\u3002</li> <li><code>Telnet</code> \u670d\u52a1\u662f\u7528\u6237\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\uff0c\u4f7f\u7528 23H \u7aef\u53e3\uff0c\u4f7f\u7528\u660e\u7801\u4f20\u9001\uff0c\u4fdd\u5bc6\u6027\u5dee\u3001\u7b80\u5355\u65b9\u4fbf\u3002</li> <li><code>DNS</code> (Domain Name Service\uff09\u662f\u57df\u540d\u89e3\u6790\u670d\u52a1\uff0c\u63d0\u4f9b\u57df\u540d\u5230 IP \u5730\u5740\u4e4b\u95f4\u7684\u8f6c\u6362\uff0c\u4f7f\u7528\u7aef\u53e3 53\u3002</li> <li><code>SMTP</code> (Simple Mail Transfer Protocol\uff09\u662f\u7b80\u5355\u90ae\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u7528\u6765\u63a7\u5236\u4fe1\u4ef6\u7684\u53d1\u9001\u3001\u4e2d\u8f6c\uff0c\u4f7f\u7528\u7aef\u53e3 25\u3002</li> <li><code>NFS</code>\uff08Network File System\uff09\u662f\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\uff0c\u7528\u4e8e\u7f51\u7edc\u4e2d\u4e0d\u540c\u4e3b\u673a\u95f4\u7684\u6587\u4ef6\u5171\u4eab\u3002</li> <li><code>HTTP</code> (Hypertext Transfer Protocol\uff09\u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u7528\u4e8e\u5b9e\u73b0\u4e92\u8054\u7f51\u4e2d\u7684 WWW \u670d\u52a1\uff0c\u4f7f\u7528\u7aef\u53e3 80\u3002</li> </ul> <h2 id="2-osi-\u7f51\u7edc\u5206\u5c42\u6a21\u578b">2 OSI \u7f51\u7edc\u5206\u5c42\u6a21\u578b</h2> <p>OSI\uff0c\u5168\u79f0\u662f\u201c\u5f00\u653e\u5f0f\u7cfb\u7edf\u4e92\u8054\u901a\u4fe1\u53c2\u8003\u6a21\u578b\u201d\uff08Open System Interconnection Reference Model\uff09\u3002</p> <p>TCP/IP \u53d1\u660e\u4e8e 1970 \u5e74\u4ee3\uff0c\u5f53\u65f6\u9664\u4e86\u5b83\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7684\u7f51\u7edc\u534f\u8bae\uff0c\u6574\u4e2a\u7f51\u7edc\u4e16\u754c\u6bd4\u8f83\u6df7\u4e71\u3002\u8fd9\u4e2a\u65f6\u5019\u56fd\u9645\u6807\u51c6\u7ec4\u7ec7\uff08ISO\uff09\u6ce8\u610f\u5230\u4e86\u8fd9\u79cd\u73b0\u8c61\u3002\u4e8e\u662f\u8bbe\u8ba1\u51fa\u4e86\u4e00\u4e2a\u65b0\u7684\u7f51\u7edc\u5206\u5c42\u6a21\u578b\uff0c\u60f3\u7528\u8fd9\u4e2a\u65b0\u6846\u67b6\u6765\u7edf\u4e00\u65e2\u5b58\u7684\u5404\u79cd\u7f51\u7edc\u534f\u8bae\u3002</p> <p>OSI \u6a21\u578b\u5206\u6210\u4e86\u4e03\u5c42\uff0c\u90e8\u5206\u5c42\u6b21\u4e0e TCP/IP \u5f88\u50cf\uff0c\u5206\u522b\u662f\uff1a</p> <table> <thead> <tr> <th align="left">\u5c42</th> <th align="left">\u6a21\u578b</th> <th align="left">\u534f\u8bae</th> <th align="left">\u6570\u636e\u5355\u4f4d</th> </tr> </thead> <tbody><tr> <td align="left">7</td> <td align="left">\u5e94\u7528\u5c42</td> <td align="left">\u5e94\u7528\u5c42\u534f\u8bae</td> <td align="left">APDU</td> </tr> <tr> <td align="left">6</td> <td align="left">\u8868\u793a\u5c42</td> <td align="left">\u8868\u793a\u5c42\u534f\u8bae</td> <td align="left">PPDU</td> </tr> <tr> <td align="left">5</td> <td align="left">\u4f1a\u8bdd\u5c42</td> <td align="left">\u4f1a\u8bdd\u5c42\u534f\u8bae</td> <td align="left">SPDU</td> </tr> <tr> <td align="left">4</td> <td align="left">\u4f20\u8f93\u5c42</td> <td align="left">\u4f20\u8f93\u5c42\u534f\u8bae</td> <td align="left">TPDU</td> </tr> <tr> <td align="left">3</td> <td align="left">\u7f51\u7edc\u5c42</td> <td align="left">\u7f51\u7edc\u5c42\u534f\u8bae</td> <td align="left">\u62a5\u6587</td> </tr> <tr> <td align="left">2</td> <td align="left">\u6570\u636e\u94fe\u8def\u5c42</td> <td align="left">\u6570\u636e\u94fe\u8def\u5c42\u534f\u8bae</td> <td align="left">\u5e27</td> </tr> <tr> <td align="left">1</td> <td align="left">\u7269\u7406\u5c42</td> <td align="left">\u7269\u7406\u5c42\u534f\u8bae</td> <td align="left">\u6bd4\u7279</td> </tr> </tbody></table> <ul> <li>\u7b2c\u4e00\u5c42\uff1a\u7269\u7406\u5c42\uff0c\u7f51\u7edc\u7684\u7269\u7406\u5f62\u5f0f\uff0c\u4f8b\u5982\u7535\u7f06\u3001\u5149\u7ea4\u3001\u7f51\u5361\u3001\u96c6\u7ebf\u5668\u7b49\u7b49</li> <li>\u7b2c\u4e8c\u5c42\uff1a\u6570\u636e\u94fe\u8def\u5c42\uff0c\u5b83\u57fa\u672c\u76f8\u5f53\u4e8e TCP/IP \u7684\u94fe\u63a5\u5c42\u3002\u6210\u5e27\u3001\u7528 MAC \u5730\u5740\u8bbf\u95ee\u5a92\u4ecb\u3001\u9519\u8bef\u68c0\u6d4b\u4e0e\u4fee\u6b63</li> <li>\u7b2c\u4e09\u5c42\uff1a\u7f51\u7edc\u5c42\uff0c\u76f8\u5f53\u4e8e TCP/IP \u91cc\u7684\u7f51\u9645\u5c42\u3002\u63d0\u4f9b\u903b\u8f91\u5730\u5740\u3001\u9009\u8def</li> <li>\u7b2c\u56db\u5c42\uff1a\u4f20\u8f93\u5c42\uff0c\u76f8\u5f53\u4e8e TCP/IP \u91cc\u7684\u4f20\u8f93\u5c42\u3002\u53ef\u9760\u4e0e\u4e0d\u53ef\u9760\u7684\u4f20\u8f93\u3001\u4f20\u8f93\u524d\u7684\u9519\u8bef\u68c0\u67e5\u3001\u6d41\u63a7</li> <li>\u7b2c\u4e94\u5c42\uff1a\u4f1a\u8bdd\u5c42\uff0c\u7ef4\u62a4\u7f51\u7edc\u4e2d\u7684\u8fde\u63a5\u72b6\u6001\uff0c\u5373\u4fdd\u6301\u4f1a\u8bdd\u548c\u540c\u6b65</li> <li>\u7b2c\u516d\u5c42\uff1a\u8868\u793a\u5c42\uff0c\u628a\u6570\u636e\u8f6c\u6362\u4e3a\u5408\u9002\u3001\u53ef\u7406\u89e3\u7684\u8bed\u6cd5\u548c\u8bed\u4e49</li> <li>\u7b2c\u4e03\u5c42\uff1a\u5e94\u7528\u5c42\uff0c\u9762\u5411\u5177\u4f53\u7684\u5e94\u7528\u4f20\u8f93\u6570\u636e</li> </ul> <p>TCP/IP \u7b49\u534f\u8bae\u5df2\u7ecf\u5728\u8bb8\u591a\u7f51\u7edc\u4e0a\u5b9e\u9645\u8fd0\u884c\uff0c\u518d\u63a8\u7ffb\u91cd\u6765\u662f\u4e0d\u53ef\u80fd\u7684\u3002\u6240\u4ee5\uff0cOSI \u5206\u5c42\u6a21\u578b\u5728\u53d1\u5e03\u7684\u65f6\u5019\u5c31\u660e\u786e\u5730\u8868\u660e\u662f\u4e00\u4e2a\u201c\u53c2\u8003\u201d\uff0c\u4e0d\u662f\u5f3a\u5236\u6807\u51c6</p> <p>\u4f46 OSI \u6a21\u578b\u4e5f\u662f\u6709\u4f18\u70b9\u7684\u3002\u5bf9\u6bd4\u4e00\u4e0b\u5c31\u53ef\u4ee5\u770b\u51fa\uff0cTCP/IP \u662f\u4e00\u4e2a\u7eaf\u8f6f\u4ef6\u7684\u6808\uff0c\u6ca1\u6709\u7f51\u7edc\u5e94\u6709\u7684\u6700\u6839\u57fa\u7684\u7535\u7f06\u3001\u7f51\u5361\u7b49\u7269\u7406\u8bbe\u5907\u7684\u4f4d\u7f6e\u3002\u800c OSI \u5219\u8865\u8db3\u4e86\u8fd9\u4e2a\u7f3a\u5931\uff0c\u5728\u7406\u8bba\u5c42\u9762\u4e0a\u63cf\u8ff0\u7f51\u7edc\u66f4\u52a0\u5b8c\u6574\u3002</p> <p>\u8fd8\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u5f62\u5f0f\u4e0a\u7684\u4f18\u70b9\uff1aOSI \u4e3a\u6bcf\u4e00\u5c42\u6807\u8bb0\u4e86\u660e\u786e\u4e86\u7f16\u53f7\uff0c\u6700\u5e95\u5c42\u662f\u4e00\u5c42\uff0c\u6700\u4e0a\u5c42\u662f\u4e03\u5c42\uff0c\u800c TCP/IP \u7684\u5c42\u6b21\u4ece\u6765\u53ea\u6709\u540d\u5b57\u800c\u6ca1\u6709\u7f16\u53f7\u3002\u663e\u7136\uff0c\u5728\u4ea4\u6d41\u7684\u65f6\u5019\u8bf4\u201c\u4e03\u5c42\u201d\u8981\u6bd4\u201c\u5e94\u7528\u5c42\u201d\u66f4\u7b80\u5355\u5feb\u6377\uff0c\u7279\u522b\u662f\u82f1\u6587\uff0c\u5bf9\u6bd4\u4e00\u4e0b\u201cLayer seven\u201d\u4e0e\u201capplication layer\u201d\u3002</p> <p>\u7efc\u5408\u4ee5\u4e0a\u51e0\u70b9\uff0c\u5728 OSI \u6a21\u578b\u4e4b\u540e\uff0c\u201c\u56db\u5c42\u201d\u201c\u4e03\u5c42\u201d\u8fd9\u6837\u7684\u8bf4\u6cd5\u5c31\u9010\u6e10\u6d41\u884c\u5f00\u4e86\u3002\u4e0d\u8fc7\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u4f60\u4e00\u5b9a\u8981\u6ce8\u610f\uff0c\u8fd9\u79cd\u8bf4\u6cd5\u53ea\u662f\u201c\u7406\u8bba\u4e0a\u201d\u7684\u5c42\u6b21\uff0c\u5e76\u4e0d\u662f\u4e0e\u73b0\u5b9e\u5b8c\u5168\u5bf9\u5e94\u3002</p> <h2 id="3-\u4e24\u4e2a\u5206\u5c42\u6a21\u578b\u7684\u6620\u5c04\u5173\u7cfb">3 \u4e24\u4e2a\u5206\u5c42\u6a21\u578b\u7684\u6620\u5c04\u5173\u7cfb</h2> <p>\u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e24\u4e2a\u7f51\u7edc\u5206\u5c42\u6a21\u578b\uff1aTCP/IP \u548c OSI\uff0c\u65b0\u7684\u95ee\u9898\u53c8\u51fa\u73b0\u4e86\uff0c\u4e00\u4e2a\u662f\u56db\u5c42\u6a21\u578b\uff0c\u4e00\u4e2a\u662f\u4e03\u5c42\u6a21\u578b\uff0c\u8fd9\u4e24\u8005\u5e94\u8be5\u5982\u4f55\u4e92\u76f8\u6620\u5c04\u6216\u8005\u8bf4\u4e92\u76f8\u89e3\u91ca\u5462\uff1f</p> <p>\u597d\u5728 OSI \u5728\u8bbe\u8ba1\u4e4b\u521d\u5c31\u53c2\u8003\u4e86 TCP/IP \u7b49\u591a\u4e2a\u534f\u8bae\uff0c\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u4f46\u4e0d\u662f\u5f88\u7cbe\u786e\u5730\u5b9e\u73b0\u5bf9\u5e94\u5173\u7cfb\u3002</p> <p><img src="'+d+'" alt=""></p> <ul> <li>\u7b2c\u4e00\u5c42\uff1a\u7269\u7406\u5c42\uff0cTCP/IP \u91cc\u65e0\u5bf9\u5e94</li> <li>\u7b2c\u4e8c\u5c42\uff1a\u6570\u636e\u94fe\u8def\u5c42\uff0c\u5bf9\u5e94 TCP/IP \u7684\u94fe\u63a5\u5c42</li> <li>\u7b2c\u4e09\u5c42\uff1a\u7f51\u7edc\u5c42\uff0c\u5bf9\u5e94 TCP/IP \u7684\u7f51\u9645\u5c42</li> <li>\u7b2c\u56db\u5c42\uff1a\u4f20\u8f93\u5c42\uff0c\u5bf9\u5e94 TCP/IP \u7684\u4f20\u8f93\u5c42</li> <li>\u7b2c\u4e94\u3001\u516d\u3001\u4e03\u5c42\uff1a\u7edf\u4e00\u5bf9\u5e94\u5230 TCP/IP \u7684\u5e94\u7528\u5c42</li> </ul> <p>\u6240\u4ee5\u4f60\u770b\uff0c\u8fd9\u5c31\u662f\u201c\u7406\u60f3\u4e0e\u73b0\u5b9e\u201d\u4e4b\u95f4\u7684\u77db\u76fe\u3002\u7406\u60f3\u5f88\u7f8e\u597d\uff0c\u6709\u4e03\u5c42\uff0c\u4f46\u73b0\u5b9e\u5f88\u6b8b\u9177\uff0c\u53ea\u6709\u56db\u5c42\uff0c\u201c\u591a\u4f59\u201d\u7684\u4e94\u5c42\u3001\u516d\u5c42\u5c31\u8fd9\u6837\u201c\u6d88\u5931\u201d\u4e86\u3002</p> <p>\u4f46\u8fd9\u4e5f\u6709\u4e00\u5b9a\u7684\u5b9e\u9645\u539f\u56e0\u3002</p> <p>OSI \u7684\u5206\u5c42\u6a21\u578b\u5728\u56db\u5c42\u4ee5\u4e0a\u5206\u7684\u592a\u7ec6\uff0c\u800c TCP/IP \u5b9e\u9645\u5e94\u7528\u65f6\u7684\u4f1a\u8bdd\u7ba1\u7406\u3001\u7f16\u7801\u8f6c\u6362\u3001\u538b\u7f29\u7b49\u548c\u5177\u4f53\u5e94\u7528\u7ecf\u5e38\u8054\u7cfb\u7684\u5f88\u7d27\u5bc6\uff0c\u5f88\u96be\u5206\u5f00\u3002\u4f8b\u5982\uff0cHTTP \u534f\u8bae\u5c31\u540c\u65f6\u5305\u542b\u4e86\u8fde\u63a5\u7ba1\u7406\u548c\u6570\u636e\u683c\u5f0f\u5b9a\u4e49\u3002</p> <p>\u5230\u8fd9\u91cc\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u660e\u767d\u4e00\u5f00\u59cb\u90a3\u4e9b\u201c\u67d0\u67d0\u5c42\u201d\u7684\u6982\u5ff5\u4e86\u3002</p> <p>\u6240\u8c13\u7684\u201c\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u201d\u5c31\u662f\u6307\u5de5\u4f5c\u5728\u4f20\u8f93\u5c42\u4e0a\uff0c\u57fa\u4e8e TCP/IP \u534f\u8bae\u7684\u7279\u6027\uff0c\u4f8b\u5982 IP \u5730\u5740\u3001\u7aef\u53e3\u53f7\u7b49\u5b9e\u73b0\u5bf9\u540e\u7aef\u670d\u52a1\u5668\u7684\u8d1f\u8f7d\u5747\u8861\u3002</p> <p>\u6240\u8c13\u7684\u201c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u201d\u5c31\u662f\u6307\u5de5\u4f5c\u5728\u5e94\u7528\u5c42\u4e0a\uff0c\u770b\u5230\u7684\u662f HTTP \u534f\u8bae\uff0c\u89e3\u6790 HTTP \u62a5\u6587\u91cc\u7684 URI\u3001\u4e3b\u673a\u540d\u3001\u8d44\u6e90\u7c7b\u578b\u7b49\u6570\u636e\uff0c\u518d\u7528\u9002\u5f53\u7684\u7b56\u7565\u8f6c\u53d1\u7ed9\u540e\u7aef\u670d\u52a1\u5668\u3002</p> <h2 id="4-tcpip-\u534f\u8bae\u6808\u7684\u5de5\u4f5c\u65b9\u5f0f">4 TCP/IP \u534f\u8bae\u6808\u7684\u5de5\u4f5c\u65b9\u5f0f</h2> <p>\u4f60\u53ef\u4ee5\u628a HTTP \u5229\u7528 TCP/IP \u534f\u8bae\u6808\u4f20\u8f93\u6570\u636e\u60f3\u8c61\u6210\u4e00\u4e2a\u53d1\u5feb\u9012\u7684\u8fc7\u7a0b\u3002</p> <p>\u5047\u8bbe\u4f60\u60f3\u628a\u4e00\u4ef6\u6bdb\u7ed2\u73a9\u5177\u9001\u7ed9\u670b\u53cb\uff0c\u4f46\u4f60\u8981\u5148\u62ff\u4e2a\u5851\u6599\u888b\u5957\u4e00\u4e0b\uff0c\u8fd9\u4ef6\u73a9\u5177\u5c31\u76f8\u5f53\u4e8e HTTP \u534f\u8bae\u91cc\u8981\u4f20\u8f93\u7684\u5185\u5bb9\uff0c\u6bd4\u5982 HTML\uff0c\u7136\u540e HTTP \u534f\u8bae\u4e3a\u5b83\u52a0\u4e00\u4e2a HTTP \u4e13\u7528\u9644\u52a0\u6570\u636e\u3002</p> <p>\u4f60\u628a\u73a9\u5177\u4ea4\u7ed9\u5feb\u9012\u5c0f\u54e5\uff0c\u4e3a\u4e86\u4fdd\u62a4\u8d27\u7269\uff0c\u4ed6\u53c8\u52a0\u4e86\u5c42\u5305\u88c5\u518d\u8d34\u4e86\u4e2a\u6807\u7b7e\uff0c\u76f8\u5f53\u4e8e\u5728 TCP \u5c42\u7ed9\u6570\u636e\u518d\u6b21\u6253\u5305\uff0c\u52a0\u4e0a\u4e86 TCP \u5934\u3002</p> <p>\u63a5\u7740\u5feb\u9012\u5c0f\u54e5\u4e0b\u697c\uff0c\u628a\u5305\u88f9\u653e\u8fdb\u4e86\u4e09\u8f6e\u8f66\u91cc\uff0c\u8fd0\u5230\u96c6\u6563\u70b9\uff0c\u7136\u540e\u518d\u88c5\u8fdb\u66f4\u5927\u7684\u5361\u8f66\u91cc\uff0c\u76f8\u5f53\u4e8e\u5728 IP \u5c42\u3001MAC \u5c42\u5bf9 TCP \u6570\u636e\u5305\u52a0\u4e0a\u4e86 IP \u5934\u3001MAC \u5934\u3002</p> <p>\u4e4b\u540e\u7ecf\u8fc7\u6f2b\u957f\u7684\u8fd0\u8f93\uff0c\u5305\u88f9\u5230\u8fbe\u76ee\u7684\u5730\uff0c\u8981\u5378\u8d27\u518d\u653e\u8fdb\u53e6\u4e00\u4f4d\u5feb\u9012\u5458\u7684\u4e09\u8f6e\u8f66\uff0c\u5c31\u662f\u5728 IP \u5c42\u3001MAC \u5c42\u4f20\u8f93\u540e\u62c6\u5305\u3002</p> <p>\u5feb\u9012\u5458\u5230\u4e86\u4f60\u670b\u53cb\u7684\u5bb6\u95e8\u53e3\uff0c\u6495\u6389\u6807\u7b7e\uff0c\u53bb\u9664\u4e86 TCP \u5c42\u7684\u5934\uff0c\u4f60\u670b\u53cb\u518d\u62c6\u6389\u5851\u6599\u888b\u5305\u88c5\uff0c\u4e5f\u5c31\u662f HTTP \u5934\uff0c\u6700\u540e\u5c31\u62ff\u5230\u4e86\u73a9\u5177\uff0c\u4e5f\u5c31\u662f\u771f\u6b63\u7684 HTML \u9875\u9762\u3002</p> <p>\u8fd9\u4e2a\u6bd4\u55bb\u91cc\u7701\u7565\u4e86\u5f88\u591a TCP/IP \u534f\u8bae\u91cc\u7684\u7ec6\u8282\uff0c\u6bd4\u5982\u5efa\u8fde\u3001\u8def\u7531\u3001\u6570\u636e\u5207\u5206\u4e0e\u91cd\u7ec4\u3001\u9519\u8bef\u68c0\u67e5\u7b49\uff0c\u4f46\u6838\u5fc3\u7684\u6570\u636e\u4f20\u8f93\u8fc7\u7a0b\u662f\u5dee\u4e0d\u591a\u7684\u3002</p> <p>HTTP \u534f\u8bae\u7684\u4f20\u8f93\u8fc7\u7a0b\u5c31\u662f\u8fd9\u6837\u901a\u8fc7\u534f\u8bae\u6808\u9010\u5c42\u5411\u4e0b\uff0c\u6bcf\u4e00\u5c42\u90fd\u6dfb\u52a0\u672c\u5c42\u7684\u4e13\u6709\u6570\u636e\uff0c\u5c42\u5c42\u6253\u5305\uff0c\u7136\u540e\u901a\u8fc7\u4e0b\u5c42\u53d1\u9001\u51fa\u53bb\u3002</p> <p>\u63a5\u6536\u6570\u636e\u662f\u5219\u662f\u76f8\u53cd\u7684\u64cd\u4f5c\uff0c\u4ece\u4e0b\u5f80\u4e0a\u7a7f\u8fc7\u534f\u8bae\u6808\uff0c\u9010\u5c42\u62c6\u5305\uff0c\u6bcf\u5c42\u53bb\u6389\u672c\u5c42\u7684\u4e13\u6709\u5934\uff0c\u4e0a\u5c42\u5c31\u4f1a\u62ff\u5230\u81ea\u5df1\u7684\u6570\u636e\u3002</p> <p>\u4f46\u4e0b\u5c42\u7684\u4f20\u8f93\u8fc7\u7a0b\u5bf9\u4e8e\u4e0a\u5c42\u662f\u5b8c\u5168\u201c\u900f\u660e\u201d\u7684\uff0c\u4e0a\u5c42\u4e5f\u4e0d\u9700\u8981\u5173\u5fc3\u4e0b\u5c42\u7684\u5177\u4f53\u5b9e\u73b0\u7ec6\u8282\uff0c\u6240\u4ee5\u5c31 HTTP \u5c42\u6b21\u6765\u770b\uff0c\u5b83\u4e0d\u7ba1\u4e0b\u5c42\u662f\u4e0d\u662f TCP/IP \u534f\u8bae\uff0c\u770b\u5230\u7684\u53ea\u662f\u4e00\u4e2a\u53ef\u9760\u7684\u4f20\u8f93\u94fe\u8def\uff0c\u53ea\u8981\u628a\u6570\u636e\u52a0\u4e0a\u81ea\u5df1\u7684\u5934\uff0c\u5bf9\u65b9\u5c31\u80fd\u539f\u6837\u6536\u5230\u3002</p> <h2 id="5-\u603b\u7ed3">5 \u603b\u7ed3</h2> <ol> <li>TCP/IP \u5206\u4e3a\u56db\u5c42\uff0c\u6838\u5fc3\u662f\u4e8c\u5c42\u7684 IP \u548c\u4e09\u5c42\u7684 TCP\uff0cHTTP \u5728\u7b2c\u56db\u5c42</li> <li>OSI \u5206\u4e3a\u4e03\u5c42\uff0c\u57fa\u672c\u5bf9\u5e94 TCP/IP\uff0cTCP \u5728\u7b2c\u56db\u5c42\uff0cHTTP \u5728\u7b2c\u4e03\u5c42</li> <li>OSI \u53ef\u4ee5\u6620\u5c04\u5230 TCP/IP\uff0c\u4f46\u8fd9\u671f\u95f4\u4e00\u3001\u4e94\u3001\u516d\u5c42\u6d88\u5931\u4e86</li> <li>\u65e5\u5e38\u4ea4\u6d41\u7684\u65f6\u5019\u6211\u4eec\u901a\u5e38\u4f7f\u7528 OSI \u6a21\u578b\uff0c\u7528\u56db\u5c42\u3001\u4e03\u5c42\u7b49\u672f\u8bed</li> <li>HTTP \u5229\u7528 TCP/IP \u534f\u8bae\u6808\u9010\u5c42\u6253\u5305\u518d\u62c6\u5305\uff0c\u5b9e\u73b0\u4e86\u6570\u636e\u4f20\u8f93\uff0c\u4f46\u4e0b\u9762\u7684\u7ec6\u8282\u5e76\u4e0d\u53ef\u89c1</li> </ol> <p>\u6709\u4e00\u4e2a\u8fa8\u522b\u56db\u5c42\u548c\u4e03\u5c42\u6bd4\u8f83\u597d\u7684\uff08\u4f46\u4e0d\u662f\u7edd\u5bf9\u7684\uff09\u5c0f\u7a8d\u95e8\uff0c\u201c\u4e24\u4e2a\u51e1\u662f\u201d\uff1a\u51e1\u662f\u7531\u64cd\u4f5c\u7cfb\u7edf\u8d1f\u8d23\u5904\u7406\u7684\u5c31\u662f\u56db\u5c42\u6216\u56db\u5c42\u4ee5\u4e0b\uff0c\u5426\u5219\uff0c\u51e1\u662f\u9700\u8981\u7531\u5e94\u7528\u7a0b\u5e8f\uff08\u4e5f\u5c31\u662f\u4f60\u81ea\u5df1\u5199\u4ee3\u7801\uff09\u8d1f\u8d23\u5904\u7406\u7684\u5c31\u662f\u4e03\u5c42\u3002</p> <h2 id="6-\u6269\u5c55\u95ee\u9898">6 \u6269\u5c55\u95ee\u9898</h2> <ol> <li>\u4f60\u80fd\u7528\u81ea\u5df1\u7684\u8bdd\u89e3\u91ca\u4e00\u4e0b\u201c\u4e8c\u5c42\u8f6c\u53d1\u201d\u201c\u4e09\u5c42\u8def\u7531\u201d\u5417\uff1f</li> <li>\u4f60\u8ba4\u4e3a\u4e0a\u4e00\u8bb2\u4e2d\u7684 DNS \u534f\u8bae\u4f4d\u4e8e\u54ea\u4e00\u5c42\u5462\uff1f</li> <li>\u4f60\u8ba4\u4e3a CDN \u5de5\u4f5c\u5728\u90a3\u4e00\u5c42\u5462\uff1f</li> </ol> ';l.exports=p}}]);