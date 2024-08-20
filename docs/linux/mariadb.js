(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/linux/mariadb"],{VBvV:function(e,n){var a='<h1 id="mariadb">MariaDB</h1> <h2 id="\u5b89\u88c5-mariadb">\u5b89\u88c5 MariaDB</h2> <p>\u5b89\u88c5\u547d\u4ee4</p> <pre><code class="language-bash">yum -y install mariadb mariadb-server</code></pre> <p>\u5b89\u88c5\u5b8c\u6210 MariaDB\uff0c\u9996\u5148\u542f\u52a8 MariaDB</p> <pre><code class="language-bash">systemctl start mariadb</code></pre> <p>\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8</p> <pre><code class="language-bash">systemctl enable mariadb</code></pre> <h2 id="mariadb-\u7684\u76f8\u5173\u7b80\u5355\u914d\u7f6e">MariaDB \u7684\u76f8\u5173\u7b80\u5355\u914d\u7f6e</h2> <p>\u5b89\u88c5\u5b8c mysql-server \u4f1a\u63d0\u793a\u53ef\u4ee5\u8fd0\u884c mysql_secure_installation</p> <p>\u8fd0\u884c mysql_secure_installation \u4f1a\u6267\u884c\u51e0\u4e2a\u8bbe\u7f6e\uff1a</p> <ul> <li>\u4e3a root \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801</li> <li>\u5220\u9664\u533f\u540d\u8d26\u53f7</li> <li>\u53d6\u6d88 root \u7528\u6237\u8fdc\u7a0b\u767b\u5f55</li> <li>\u5220\u9664 test \u5e93\u548c\u5bf9 test \u5e93\u7684\u8bbf\u95ee\u6743\u9650</li> <li>\u5237\u65b0\u6388\u6743\u8868\u4f7f\u4fee\u6539\u751f\u6548</li> </ul> <pre><code class="language-bash">Enter current password for root (enter for none):   # \u521d\u6b21\u8fd0\u884c\u76f4\u63a5\u56de\u8f66\n\n# \u8bbe\u7f6e\u5bc6\u7801\n\nSet root password? [Y/n]                        # \u662f\u5426\u8bbe\u7f6eroot\u7528\u6237\u5bc6\u7801\uff0c\u8f93\u5165y\u5e76\u56de\u8f66\u6216\u76f4\u63a5\u56de\u8f66\nNew password:                                   # \u8bbe\u7f6eroot\u7528\u6237\u7684\u5bc6\u7801\nRe-enter new password:                          # \u518d\u8f93\u5165\u4e00\u6b21\u4f60\u8bbe\u7f6e\u7684\u5bc6\u7801\n\n# \u5176\u4ed6\u914d\u7f6e\n\nRemove anonymous users? [Y/n]                   # \u662f\u5426\u5220\u9664\u533f\u540d\u7528\u6237\uff0c\u56de\u8f66\n\nDisallow root login remotely? [Y/n]             # \u662f\u5426\u7981\u6b62root\u8fdc\u7a0b\u767b\u5f55,\u56de\u8f66,\n\nRemove test database and access to it? [Y/n]    # \u662f\u5426\u5220\u9664test\u6570\u636e\u5e93\uff0c\u56de\u8f66\n\nReload privilege tables now? [Y/n]              # \u662f\u5426\u91cd\u65b0\u52a0\u8f7d\u6743\u9650\u8868\uff0c\u56de\u8f66\n\n# \u5b8c\u6210</code></pre> <h2 id="\u914d\u7f6e-mariadb-\u7684\u5b57\u7b26\u96c6">\u914d\u7f6e MariaDB \u7684\u5b57\u7b26\u96c6</h2> <pre><code class="language-bash"># \u6587\u4ef6 /etc/my.cnf\n# \u5728[mysqld]\u6807\u7b7e\u4e0b\u6dfb\u52a0\ninit_connect=&#39;SET collation_connection = utf8_unicode_ci&#39;\ninit_connect=&#39;SET NAMES utf8&#39;\ncharacter-set-server=utf8\ncollation-server=utf8_unicode_ci\nskip-character-set-client-handshake\n\n# \u6587\u4ef6 /etc/my.cnf.d/client.cnf\n# \u5728[client]\u4e2d\u6dfb\u52a0\ndefault-character-set=utf8\n\n# \u6587\u4ef6/etc/my.cnf.d/mysql-clients.cnf\n# \u5728[mysql]\u4e2d\u6dfb\u52a0\ndefault-character-set=utf8\n\n# \u5168\u90e8\u914d\u7f6e\u5b8c\u6210\uff0c\u91cd\u542fmariadb\nsystemctl restart mariadb</code></pre> <p>\u8fdb\u5165 MariaDB \u67e5\u770b\u5b57\u7b26\u96c6</p> <pre><code class="language-bash">mysql&gt; show variables like &quot;%character%&quot;;show variables like &quot;%collation%&quot;;\n\n# \u663e\u793a\u4e3a\n\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | utf8                       |\n| character_set_connection | utf8                       |\n| character_set_database   | utf8                       |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8                       |\n| character_set_server     | utf8                       |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\n8 rows in set (0.00 sec)\n\n+----------------------+-----------------+\n| Variable_name        | Value           |\n+----------------------+-----------------+\n| collation_connection | utf8_unicode_ci |\n| collation_database   | utf8_unicode_c  |\n| collation_server     | utf8_unicode_ci |\n+----------------------+-----------------+\n3 rows in set (0.00 sec)</code></pre> <h2 id="\u7528\u6237\u53ca\u6743\u9650">\u7528\u6237\u53ca\u6743\u9650</h2> <pre><code class="language-bash"># \u521b\u5efa\u7528\u6237\u547d\u4ee4\nmysql&gt;create user username@localhost identified by &#39;password&#39;;\n\n# \u76f4\u63a5\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743\u7684\u547d\u4ee4\nmysql&gt;grant all on *.* to username@localhost indentified by &#39;password&#39;;\n\n# \u6388\u4e88\u5916\u7f51\u767b\u9646\u6743\u9650\nmysql&gt;grant all privileges on *.* to username@&#39;%&#39; identified by &#39;password&#39;;\n# \u6b64\u5904\u7684&quot;localhost&quot;\uff0c\u662f\u6307\u8be5\u7528\u6237\u53ea\u80fd\u5728\u672c\u5730\u767b\u5f55\uff0c\u4e0d\u80fd\u5728\u53e6\u5916\u4e00\u53f0\u673a\u5668\u4e0a\u8fdc\u7a0b\u767b\u5f55\u3002\u5982\u679c\u60f3\u8fdc\u7a0b\u767b\u5f55\u7684\u8bdd\uff0c\n# \u5c06&quot;localhost&quot;\u6539\u4e3a&quot;%&quot;\uff0c\u8868\u793a\u5728\u4efb\u4f55\u4e00\u53f0\u7535\u8111\u4e0a\u90fd\u53ef\u4ee5\u767b\u5f55\u3002\u4e5f\u53ef\u4ee5\u6307\u5b9a\u67d0\u53f0\u673a\u5668\u53ef\u4ee5\u8fdc\u7a0b\u767b\u5f55\n\n# \u6388\u4e88\u6743\u9650\u5e76\u4e14\u53ef\u4ee5\u6388\u6743\nmysql&gt;grant all privileges on *.* to username@&#39;hostname&#39; identified by &#39;password&#39; with grant option;</code></pre> <p>\u5176\u4e2d\u53ea\u6388\u4e88\u90e8\u5206\u6743\u9650\u628a \u5176\u4e2d all privileges \u6216\u8005 all \u6539\u4e3a select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file \u5176\u4e2d\u4e00\u90e8\u5206</p> ';e.exports=a}}]);