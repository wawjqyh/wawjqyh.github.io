(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/sequelize/migrations"],{f0Fa:function(e,o){var s='<h1 id="migrations---\u8fc1\u79fb">Migrations - \u8fc1\u79fb</h1> <p>\u5c31\u50cf\u60a8\u4f7f\u7528Git / SVN\u6765\u7ba1\u7406\u6e90\u4ee3\u7801\u7684\u66f4\u6539\u4e00\u6837\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fc1\u79fb\u6765\u8ddf\u8e2a\u6570\u636e\u5e93\u7684\u66f4\u6539\u3002 \u901a\u8fc7\u8fc1\u79fb\uff0c\u60a8\u53ef\u4ee5\u5c06\u73b0\u6709\u7684\u6570\u636e\u5e93\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u72b6\u6001\uff0c\u53cd\u4e4b\u4ea6\u7136\uff1a\u8fd9\u4e9b\u72b6\u6001\u8f6c\u6362\u5c06\u4fdd\u5b58\u5728\u8fc1\u79fb\u6587\u4ef6\u4e2d\uff0c\u5b83\u4eec\u63cf\u8ff0\u4e86\u5982\u4f55\u8fdb\u5165\u65b0\u72b6\u6001\u4ee5\u53ca\u5982\u4f55\u8fd8\u539f\u66f4\u6539\u4ee5\u6062\u590d\u65e7\u72b6\u6001\u3002</p> <p>\u60a8\u5c06\u9700\u8981<a href="https://github.com/sequelize/cli">Sequelize CLI</a>\u3002 CLI\u652f\u6301\u8fc1\u79fb\u548c\u9879\u76ee\u5f15\u5bfc\u3002</p> <h2 id="\u547d\u4ee4\u884c\u754c\u9762">\u547d\u4ee4\u884c\u754c\u9762</h2> <h3 id="\u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762">\u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762</h3> <p>\u8ba9\u6211\u4eec\u4ece\u5b89\u88c5CLI\u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u5728 <a href="https://github.com/sequelize/cli">\u8fd9\u91cc</a> \u627e\u5230\u8bf4\u660e\u3002 \u6700\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u8fd9\u6837\u5b89\u88c5</p> <pre><code class="language-bash">$ npm install --save sequelize-cli</code></pre> <h3 id="\u5f15\u5bfc">\u5f15\u5bfc</h3> <p>\u8981\u521b\u5efa\u4e00\u4e2a\u7a7a\u9879\u76ee\uff0c\u4f60\u9700\u8981\u6267\u884c <code>init</code> \u547d\u4ee4</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize init</code></pre> <p>\u8fd9\u5c06\u521b\u5efa\u4ee5\u4e0b\u6587\u4ef6\u5939</p> <ul> <li><code>config</code>, \u5305\u542b\u914d\u7f6e\u6587\u4ef6\uff0c\u5b83\u544a\u8bc9CLI\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93</li> <li><code>models</code>,\u5305\u542b\u60a8\u7684\u9879\u76ee\u7684\u6240\u6709\u6a21\u578b</li> <li><code>migrations</code>, \u5305\u542b\u6240\u6709\u8fc1\u79fb\u6587\u4ef6</li> <li><code>seeders</code>, \u5305\u542b\u6240\u6709\u79cd\u5b50\u6587\u4ef6</li> </ul> <h4 id="\u7ed3\u6784">\u7ed3\u6784</h4> <p>\u5728\u7ee7\u7eed\u8fdb\u884c\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9 CLI \u5982\u4f55\u8fde\u63a5\u5230\u6570\u636e\u5e93\u3002 \u4e3a\u6b64\uff0c\u53ef\u4ee5\u6253\u5f00\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 <code>config/config.json</code>\u3002 \u770b\u8d77\u6765\u50cf\u8fd9\u6837</p> <pre><code class="language-json">{\n  development: {\n    username: &#39;root&#39;,\n    password: null,\n    database: &#39;database_development&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  test: {\n    username: &#39;root&#39;,\n    password: null,\n    database: &#39;database_test&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  production: {\n    username: process.env.PROD_DB_USERNAME,\n    password: process.env.PROD_DB_PASSWORD,\n    database: process.env.PROD_DB_NAME,\n    host: process.env.PROD_DB_HOSTNAME,\n    dialect: &#39;mysql&#39;\n  }\n}</code></pre> <p>\u73b0\u5728\u7f16\u8f91\u6b64\u6587\u4ef6\u5e76\u8bbe\u7f6e\u6b63\u786e\u7684\u6570\u636e\u5e93\u51ed\u636e\u548c\u65b9\u8a00\u3002</p> <p><strong>\u6ce8\u610f:</strong> <em>\u5982\u679c\u4f60\u7684\u6570\u636e\u5e93\u8fd8\u4e0d\u5b58\u5728\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 <code>db:create</code> \u547d\u4ee4\u3002 \u901a\u8fc7\u6b63\u786e\u7684\u8bbf\u95ee\uff0c\u5b83\u5c06\u4e3a\u60a8\u521b\u5efa\u8be5\u6570\u636e\u5e93\u3002</em></p> <h3 id="\u521b\u5efa\u7b2c\u4e00\u4e2a\u6a21\u578b\uff08\u548c\u8fc1\u79fb\uff09">\u521b\u5efa\u7b2c\u4e00\u4e2a\u6a21\u578b\uff08\u548c\u8fc1\u79fb\uff09</h3> <p>\u4e00\u65e6\u60a8\u6b63\u786e\u914d\u7f6e\u4e86CLI\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u5c31\u53ef\u4ee5\u9996\u5148\u521b\u5efa\u8fc1\u79fb\u3002 \u5b83\u50cf\u6267\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u4e00\u6837\u7b80\u5355\u3002</p> <p>\u6211\u4eec\u5c06\u4f7f\u7528 <code>model:generate</code> \u547d\u4ee4\u3002 \u6b64\u547d\u4ee4\u9700\u8981\u4e24\u4e2a\u9009\u9879</p> <ul> <li><code>name</code>, \u6a21\u578b\u7684\u540d\u79f0</li> <li><code>attributes</code>, \u6a21\u578b\u7684\u5c5e\u6027\u5217\u8868</li> </ul> <p>\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u53eb <code>User</code> \u7684\u6a21\u578b</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string</code></pre> <p>\u8fd9\u5c06\u53d1\u751f\u4ee5\u4e0b\u4e8b\u60c5</p> <ul> <li>\u5728 <code>models</code> \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a <code>user</code> \u6a21\u578b\u6587\u4ef6</li> <li>\u5728 <code>migrations</code> \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u5b57\u50cf <code>XXXXXXXXXXXXXX-create-user.js</code> \u7684\u8fc1\u79fb\u6587\u4ef6</li> </ul> <p><strong>\u6ce8\u610f:</strong> _Sequelize \u5c06\u53ea\u4f7f\u7528\u6a21\u578b\u6587\u4ef6\uff0c\u5b83\u662f\u8868\u63cf\u8ff0\u3002\u53e6\u4e00\u8fb9\uff0c\u8fc1\u79fb\u6587\u4ef6\u662f\u8be5\u6a21\u578b\u7684\u66f4\u6539\uff0c\u6216\u66f4\u5177\u4f53\u7684\u662f\u8bf4 CLI \u6240\u4f7f\u7528\u7684\u8868\u3002 \u5904\u7406\u8fc1\u79fb\uff0c\u5982\u63d0\u4ea4\u6216\u65e5\u5fd7\uff0c\u4ee5\u8fdb\u884c\u6570\u636e\u5e93\u7684\u67d0\u4e9b\u66f4\u6539\u3002 _</p> <h3 id="\u8fd0\u884c\u8fc1\u79fb">\u8fd0\u884c\u8fc1\u79fb</h3> <p>\u76f4\u5230\u8fd9\u4e00\u6b65\uff0cCLI\u6ca1\u6709\u5c06\u4efb\u4f55\u4e1c\u897f\u63d2\u5165\u6570\u636e\u5e93\u3002 \u6211\u4eec\u521a\u521a\u4e3a\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6a21\u578b <code>User</code> \u521b\u5efa\u4e86\u5fc5\u9700\u7684\u6a21\u578b\u548c\u8fc1\u79fb\u6587\u4ef6\u3002 \u73b0\u5728\u8981\u5728\u6570\u636e\u5e93\u4e2d\u5b9e\u9645\u521b\u5efa\u8be5\u8868\uff0c\u9700\u8981\u8fd0\u884c <code>db:migrate</code> \u547d\u4ee4\u3002</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize db:migrate</code></pre> <p>\u6b64\u547d\u4ee4\u5c06\u6267\u884c\u8fd9\u4e9b\u6b65\u9aa4</p> <ul> <li>\u5c06\u5728\u6570\u636e\u5e93\u4e2d\u786e\u4fdd\u4e00\u4e2a\u540d\u4e3a <code>SequelizeMeta</code> \u7684\u8868\u3002 \u6b64\u8868\u7528\u4e8e\u8bb0\u5f55\u5728\u5f53\u524d\u6570\u636e\u5e93\u4e0a\u8fd0\u884c\u7684\u8fc1\u79fb</li> <li>\u5f00\u59cb\u5bfb\u627e\u5c1a\u672a\u8fd0\u884c\u7684\u4efb\u4f55\u8fc1\u79fb\u6587\u4ef6\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5 <code>SequelizeMeta</code> \u8868\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u5c06\u8fd0\u884c\u6211\u4eec\u5728\u6700\u540e\u4e00\u6b65\u4e2d\u521b\u5efa\u7684 <code>XXXXXXXXXXXXXX-create-user.js</code> \u8fc1\u79fb\uff0c\u3002</li> <li>\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a <code>Users</code> \u7684\u8868\uff0c\u5176\u4e2d\u5305\u542b\u5176\u8fc1\u79fb\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u6240\u6709\u5217\u3002</li> </ul> <h3 id="\u64a4\u6d88\u8fc1\u79fb">\u64a4\u6d88\u8fc1\u79fb</h3> <p>\u73b0\u5728\u6211\u4eec\u7684\u8868\u5df2\u521b\u5efa\u5e76\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\u3002 \u901a\u8fc7\u8fc1\u79fb\uff0c\u53ea\u9700\u8fd0\u884c\u547d\u4ee4\u5373\u53ef\u6062\u590d\u4e3a\u65e7\u72b6\u6001\u3002</p> <p>\u60a8\u53ef\u4ee5\u4f7f\u7528 <code>db:migrate:undo</code>\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c06\u4f1a\u6062\u590d\u6700\u8fd1\u7684\u8fc1\u79fb\u3002</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize db:migrate:undo</code></pre> <p>\u901a\u8fc7\u4f7f\u7528 <code>db:migrate:undo:all</code> \u547d\u4ee4\u64a4\u6d88\u6240\u6709\u8fc1\u79fb\uff0c\u53ef\u4ee5\u6062\u590d\u5230\u521d\u59cb\u72b6\u6001\u3002 \u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5c06\u5176\u540d\u79f0\u4f20\u9012\u5230 <code>--to</code> \u9009\u9879\u4e2d\u6765\u6062\u590d\u5230\u7279\u5b9a\u7684\u8fc1\u79fb\u3002</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js</code></pre> <h3 id="\u521b\u5efa\u7b2c\u4e00\u4e2a\u79cd\u5b50">\u521b\u5efa\u7b2c\u4e00\u4e2a\u79cd\u5b50</h3> <p>\u5047\u8bbe\u6211\u4eec\u5e0c\u671b\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u4e00\u4e9b\u6570\u636e\u63d2\u5165\u5230\u51e0\u4e2a\u8868\u4e2d\u3002 \u5982\u679c\u6211\u4eec\u8ddf\u8fdb\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4e3a <code>User</code> \u8868\u521b\u5efa\u6f14\u793a\u7528\u6237\u3002</p> <p>\u8981\u7ba1\u7406\u6240\u6709\u6570\u636e\u8fc1\u79fb\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 <code>seeders</code>\u3002 \u79cd\u5b50\u6587\u4ef6\u662f\u6570\u636e\u7684\u4e00\u4e9b\u53d8\u5316\uff0c\u53ef\u7528\u4e8e\u4f7f\u7528\u6837\u672c\u6570\u636e\u6216\u6d4b\u8bd5\u6570\u636e\u586b\u5145\u6570\u636e\u5e93\u8868\u3002</p> <p>\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u79cd\u5b50\u6587\u4ef6\uff0c\u5b83\u4f1a\u5c06\u4e00\u4e2a\u6f14\u793a\u7528\u6237\u6dfb\u52a0\u5230\u6211\u4eec\u7684 <code>User</code> \u8868\u4e2d\u3002</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize seed:generate --name demo-user</code></pre> <p>\u8fd9\u4e2a\u547d\u4ee4\u5c06\u4f1a\u5728 <code>seeders</code> \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u79cd\u5b50\u6587\u4ef6\u3002\u6587\u4ef6\u540d\u770b\u8d77\u6765\u50cf\u662f <code>XXXXXXXXXXXXXX-demo-user.js</code>\uff0c\u5b83\u9075\u5faa\u76f8\u540c\u7684 <code>up/down</code> \u8bed\u4e49\uff0c\u5982\u8fc1\u79fb\u6587\u4ef6\u3002</p> <p>\u73b0\u5728\u6211\u4eec\u5e94\u8be5\u7f16\u8f91\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5c06\u6f14\u793a\u7528\u6237\u63d2\u5165<code>User</code>\u8868\u3002</p> <pre><code class="language-js">&#39;use strict&#39;;\n\nmodule.exports = {\n  up: (queryInterface, Sequelize) =&gt; {\n    return queryInterface.bulkInsert(&#39;Users&#39;, [{\n        firstName: &#39;John&#39;,\n        lastName: &#39;Doe&#39;,\n        email: &#39;demo@demo.com&#39;\n      }], {});\n  },\n\n  down: (queryInterface, Sequelize) =&gt; {\n    return queryInterface.bulkDelete(&#39;Users&#39;, null, {});\n  }\n};\n</code></pre> <h3 id="\u8fd0\u884c\u79cd\u5b50">\u8fd0\u884c\u79cd\u5b50</h3> <p>\u5728\u4e0a\u4e00\u6b65\u4e2d\uff0c\u4f60\u521b\u5efa\u4e86\u4e00\u4e2a\u79cd\u5b50\u6587\u4ef6\u3002 \u4f46\u5b83\u8fd8\u6ca1\u6709\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u3002</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize db:seed:all</code></pre> <p>\u8fd9\u5c06\u6267\u884c\u8be5\u79cd\u5b50\u6587\u4ef6\uff0c\u60a8\u5c06\u6709\u4e00\u4e2a\u6f14\u793a\u7528\u6237\u63d2\u5165 <code>User</code> \u8868\u3002</p> <p><strong>\u6ce8\u610f:</strong> _ <code>seeders</code> \u6267\u884c\u4e0d\u4f1a\u5b58\u50a8\u5728\u4efb\u4f55\u4f7f\u7528 <code>SequelizeMeta</code> \u8868\u7684\u8fc1\u79fb\u7684\u5730\u65b9\u3002 \u5982\u679c\u4f60\u60f3\u8986\u76d6\u8fd9\u4e2a\uff0c\u8bf7\u9605\u8bfb <code>\u5b58\u50a8</code> \u90e8\u5206_</p> <h3 id="\u64a4\u9500\u79cd\u5b50">\u64a4\u9500\u79cd\u5b50</h3> <p>Seeders \u5982\u679c\u4f7f\u7528\u4e86\u4efb\u4f55\u5b58\u50a8\u90a3\u4e48\u5c31\u53ef\u4ee5\u88ab\u64a4\u6d88\u3002 \u6709\u4e24\u4e2a\u53ef\u7528\u7684\u547d\u4ee4</p> <p>\u5982\u679c\u4f60\u60f3\u64a4\u6d88\u6700\u8fd1\u7684\u79cd\u5b50</p> <pre><code class="language-bash">node_modules/.bin/sequelize db:seed:undo</code></pre> <p>\u5982\u679c\u4f60\u60f3\u64a4\u6d88\u6240\u6709\u7684\u79cd\u5b50</p> <pre><code class="language-bash">node_modules/.bin/sequelize db:seed:undo:all</code></pre> <h2 id="\u9ad8\u7ea7\u4e13\u9898">\u9ad8\u7ea7\u4e13\u9898</h2> <h3 id="\u8fc1\u79fb\u6846\u67b6">\u8fc1\u79fb\u6846\u67b6</h3> <p>\u4ee5\u4e0b\u6846\u67b6\u663e\u793a\u4e86\u4e00\u4e2a\u5178\u578b\u7684\u8fc1\u79fb\u6587\u4ef6\u3002</p> <pre><code class="language-js">module.exports = {\n  up: (queryInterface, Sequelize) =&gt; {\n    // \u8f6c\u53d8\u4e3a\u65b0\u72b6\u6001\u7684\u903b\u8f91\n  },\n\n  down: (queryInterface, Sequelize) =&gt; {\n    // \u6062\u590d\u66f4\u6539\u7684\u903b\u8f91\n  }\n}</code></pre> <p>\u4f20\u9012\u7684 <code>queryInterface</code> \u5bf9\u8c61\u53ef\u4ee5\u7528\u6765\u4fee\u6539\u6570\u636e\u5e93\u3002 <code>Sequelize</code> \u5bf9\u8c61\u5b58\u50a8\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5982 <code>STRING</code> \u6216 <code>INTEGER</code>\u3002 \u51fd\u6570 <code>up</code> \u6216 <code>down</code> \u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a <code>Promise</code> \u3002 \u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50</p> <pre><code class="language-js">module.exports = {\n  up: (queryInterface, Sequelize) =&gt; {\n    return queryInterface.createTable(&#39;Person&#39;, {\n        name: Sequelize.STRING,\n        isBetaMember: {\n          type: Sequelize.BOOLEAN,\n          defaultValue: false,\n          allowNull: false\n        }\n      });\n  },\n  down: (queryInterface, Sequelize) =&gt; {\n    return queryInterface.dropTable(&#39;Person&#39;);\n  }\n}</code></pre> <h3 id="sequelizerc-\u6587\u4ef6"><code>.sequelizerc</code> \u6587\u4ef6</h3> <p>\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u914d\u7f6e\u6587\u4ef6\u3002 \u5b83\u5141\u8bb8\u60a8\u6307\u5b9a\u901a\u5e38\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9CLI\u7684\u5404\u79cd\u9009\u9879\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u3002</p> <ul> <li>\u4f60\u60f3\u8981\u8986\u76d6\u5230 <code>migrations</code>, <code>models</code>, <code>seeders</code> \u6216 <code>config</code> \u6587\u4ef6\u5939\u7684\u8def\u5f84.</li> <li>\u4f60\u60f3\u8981\u91cd\u547d\u540d <code>config.json</code> \u6210\u4e3a\u522b\u7684\u540d\u5b57\u6bd4\u5982 <code>database.json</code></li> </ul> <p>\u8fd8\u6709\u66f4\u591a\u7684, \u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528\u8fd9\u4e2a\u6587\u4ef6\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002</p> <p>\u5bf9\u4e8e\u521d\u5b66\u8005\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u6587\u4ef6\u3002</p> <pre><code class="language-bash">$ touch .sequelizerc</code></pre> <p>\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u793a\u4f8b\u914d\u7f6e\u3002</p> <pre><code class="language-js">const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  &#39;config&#39;: path.resolve(&#39;config&#39;, &#39;database.json&#39;),\n  &#39;models-path&#39;: path.resolve(&#39;db&#39;, &#39;models&#39;),\n  &#39;seeders-path&#39;: path.resolve(&#39;db&#39;, &#39;seeders&#39;),\n  &#39;migrations-path&#39;: path.resolve(&#39;db&#39;, &#39;migrations&#39;)\n}</code></pre> <p>\u901a\u8fc7\u8fd9\u4e2a\u914d\u7f6e\u4f60\u544a\u8bc9CLI: </p> <ul> <li>\u4f7f\u7528 <code>config/database.json</code> \u6587\u4ef6\u6765\u914d\u7f6e\u8bbe\u7f6e</li> <li>\u4f7f\u7528 <code>db/models</code> \u4f5c\u4e3a\u6a21\u578b\u6587\u4ef6\u5939</li> <li>\u4f7f\u7528 <code>db/seeders</code> \u4f5c\u4e3a\u79cd\u5b50\u6587\u4ef6\u5939</li> <li>\u4f7f\u7528 <code>db/migrations</code> \u4f5c\u4e3a\u8fc1\u79fb\u6587\u4ef6\u5939</li> </ul> <h3 id="\u52a8\u6001\u914d\u7f6e">\u52a8\u6001\u914d\u7f6e</h3> <p>\u914d\u7f6e\u6587\u4ef6\u662f\u9ed8\u8ba4\u7684\u4e00\u4e2a\u540d\u4e3a <code>config.json</code> \u7684JSON\u6587\u4ef6\u3002 \u4f46\u6709\u65f6\u4f60\u60f3\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u6216\u8bbf\u95ee\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u5728JSON\u6587\u4ef6\u4e2d\u662f\u4e0d\u53ef\u80fd\u7684\u3002</p> <p>Sequelize CLI\u53ef\u4ee5\u4ece\u201cJSON\u201d\u548c\u201cJS\u201d\u6587\u4ef6\u4e2d\u8bfb\u53d6\u3002 \u8fd9\u53ef\u4ee5\u7528<code>.sequelizerc</code>\u6587\u4ef6\u8bbe\u7f6e\u3002 \u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e0b</p> <p>\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u9879\u76ee\u7684\u6839\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a <code>.sequelizerc</code> \u6587\u4ef6\u3002 \u8be5\u6587\u4ef6\u5e94\u8be5\u8986\u76d6 <code>JS</code> \u6587\u4ef6\u7684\u914d\u7f6e\u8def\u5f84\u3002 \u63a8\u8350\u8fd9\u4e2a</p> <pre><code class="language-js">const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  &#39;config&#39;: path.resolve(&#39;config&#39;, &#39;config.js&#39;)\n}</code></pre> <p>\u73b0\u5728\uff0cSequelize CLI\u5c06\u52a0\u8f7d <code>config/config.js</code> \u4ee5\u83b7\u53d6\u914d\u7f6e\u9009\u9879\u3002 \u7531\u4e8e\u8fd9\u662f\u4e00\u4e2aJS\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u4efb\u4f55\u4ee3\u7801\u5e76\u5bfc\u51fa\u6700\u7ec8\u7684\u52a8\u6001\u914d\u7f6e\u6587\u4ef6\u3002</p> <p>\u4e00\u4e2a <code>config/config.js</code> \u6587\u4ef6\u7684\u4f8b\u5b50</p> <pre><code class="language-js">const fs = require(&#39;fs&#39;);\n\nmodule.exports = {\n  development: {\n    username: &#39;database_dev&#39;,\n    password: &#39;database_dev&#39;,\n    database: &#39;database_dev&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  test: {\n    username: &#39;database_test&#39;,\n    password: null,\n    database: &#39;database_test&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  production: {\n    username: process.env.DB_USERNAME,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    host: process.env.DB_HOSTNAME,\n    dialect: &#39;mysql&#39;,\n    dialectOptions: {\n      ssl: {\n        ca: fs.readFileSync(__dirname + &#39;/mysql-ca-master.crt&#39;)\n      }\n    }\n  }\n};</code></pre> <h3 id="\u4f7f\u7528\u73af\u5883\u53d8\u91cf">\u4f7f\u7528\u73af\u5883\u53d8\u91cf</h3> <p>\u4f7f\u7528CLI\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee <code>config/config.js</code> \u5185\u7684\u73af\u5883\u53d8\u91cf\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 <code>.sequelizerc</code> \u6765\u544a\u8bc9CLI\u4f7f\u7528 <code>config/config.js</code> \u8fdb\u884c\u914d\u7f6e\u3002 \u8fd9\u5728\u4e0a\u4e00\u8282\u4e2d\u6709\u6240\u89e3\u91ca\u3002</p> <p>\u7136\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b63\u786e\u7684\u73af\u5883\u53d8\u91cf\u6765\u66b4\u9732\u6587\u4ef6\u3002</p> <pre><code class="language-js">module.exports = {\n  development: {\n    username: &#39;database_dev&#39;,\n    password: &#39;database_dev&#39;,\n    database: &#39;database_dev&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  test: {\n    username: process.env.CI_DB_USERNAME,\n    password: process.env.CI_DB_PASSWORD,\n    database: process.env.CI_DB_NAME,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  production: {\n    username: process.env.PROD_DB_USERNAME,\n    password: process.env.PROD_DB_PASSWORD,\n    database: process.env.PROD_DB_NAME,\n    host: process.env.PROD_DB_HOSTNAME,\n    dialect: &#39;mysql&#39;\n  }</code></pre> <h3 id="\u6307\u5b9a\u65b9\u8a00\u9009\u9879">\u6307\u5b9a\u65b9\u8a00\u9009\u9879</h3> <p>\u6709\u65f6\u4f60\u60f3\u6307\u5b9a\u4e00\u4e2a dialectOption\uff0c\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u901a\u7528\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230 <code>config/config.json</code> \u4e2d\u3002 \u6709\u65f6\u4f60\u60f3\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u6765\u83b7\u53d6 dialectOptions\uff0c\u4f60\u5e94\u8be5\u4e3a\u8fd9\u4e9b\u60c5\u51b5\u4f7f\u7528\u52a8\u6001\u914d\u7f6e\u6587\u4ef6\u3002</p> <pre><code class="language-json">{\n    &quot;production&quot;: {\n        &quot;dialect&quot;:&quot;mysql&quot;,\n        &quot;dialectOptions&quot;: {\n            &quot;bigNumberStrings&quot;: true\n        }\n    }\n}</code></pre> <h3 id="\u751f\u4ea7\u7528\u9014">\u751f\u4ea7\u7528\u9014</h3> <p>\u6709\u5173\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528CLI\u548c\u8fc1\u79fb\u8bbe\u7f6e\u7684\u4e00\u4e9b\u63d0\u793a\u3002</p> <p>1) \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u8bbe\u7f6e\u3002 \u8fd9\u662f\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u66f4\u597d\u5730\u5b9e\u73b0\u7684\u3002 \u6837\u54c1\u751f\u4ea7\u5b89\u5168\u914d\u7f6e\u53ef\u80fd\u770b\u8d77\u6765\u50cf</p> <pre><code class="language-js">const fs = require(&#39;fs&#39;);\n\nmodule.exports = {\n  development: {\n    username: &#39;database_dev&#39;,\n    password: &#39;database_dev&#39;,\n    database: &#39;database_dev&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  test: {\n    username: &#39;database_test&#39;,\n    password: null,\n    database: &#39;database_test&#39;,\n    host: &#39;127.0.0.1&#39;,\n    dialect: &#39;mysql&#39;\n  },\n  production: {\n    username: process.env.DB_USERNAME,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    host: process.env.DB_HOSTNAME,\n    dialect: &#39;mysql&#39;,\n    dialectOptions: {\n      ssl: {\n        ca: fs.readFileSync(__dirname + &#39;/mysql-ca-master.crt&#39;)\n      }\n    }\n  }\n};</code></pre> <p>\u6211\u4eec\u7684\u76ee\u6807\u662f\u4e3a\u5404\u79cd\u6570\u636e\u5e93\u79d8\u5bc6\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u610f\u5916\u68c0\u67e5\u5b83\u4eec\u6765\u6e90\u63a7\u5236\u3002</p> <h3 id="\u5b58\u50a8">\u5b58\u50a8</h3> <p>\u53ef\u4ee5\u4f7f\u7528\u4e09\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\uff1a<code>sequelize</code>\uff0c<code>json</code>\u548c<code>none</code>\u3002</p> <ul> <li><code>sequelize</code> : \u5c06\u8fc1\u79fb\u548c\u79cd\u5b50\u5b58\u50a8\u5728 sequelize \u6570\u636e\u5e93\u7684\u8868\u4e2d</li> <li><code>json</code> : \u5c06\u8fc1\u79fb\u548c\u79cd\u5b50\u5b58\u50a8\u5728json\u6587\u4ef6\u4e0a</li> <li><code>none</code> : \u4e0d\u5b58\u50a8\u4efb\u4f55\u8fc1\u79fb/\u79cd\u5b50</li> </ul> <h4 id="\u8fc1\u79fb\u5b58\u50a8">\u8fc1\u79fb\u5b58\u50a8</h4> <p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCLI \u5c06\u5728\u60a8\u7684\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a <code>SequelizeMeta</code> \u7684\u8868\uff0c\u5176\u4e2d\u5305\u542b\u6bcf\u4e2a\u6267\u884c\u8fc1\u79fb\u7684\u6761\u76ee\u3002 \u8981\u66f4\u6539\u6b64\u884c\u4e3a\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e09\u4e2a\u9009\u9879\u3002 \u4f7f\u7528 <code>migrationStorage</code> \u53ef\u4ee5\u9009\u62e9\u8981\u7528\u4e8e\u8fc1\u79fb\u7684\u5b58\u50a8\u7c7b\u578b\u3002 \u5982\u679c\u9009\u62e9 <code>json</code>\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>migrationStoragePath</code> \u6307\u5b9a\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6216\u8005 CLI \u5c06\u5199\u5165 <code>sequelize-meta.json</code> \u6587\u4ef6\u3002 \u5982\u679c\u8981\u5c06\u6570\u636e\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u8bf7\u4f7f\u7528 <code>sequelize</code>\uff0c\u4f46\u662f\u8981\u4f7f\u7528\u5176\u4ed6\u8868\u683c\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>migrationStorageTableName</code>.</p> <pre><code class="language-json">{\n  &quot;development&quot;: {\n    &quot;username&quot;: &quot;root&quot;,\n    &quot;password&quot;: null,\n    &quot;database&quot;: &quot;database_development&quot;,\n    &quot;host&quot;: &quot;127.0.0.1&quot;,\n    &quot;dialect&quot;: &quot;mysql&quot;,\n\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u5b58\u50a8\u7c7b\u578b. Default: sequelize\n    &quot;migrationStorage&quot;: &quot;json&quot;,\n\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u6587\u4ef6\u540d. Default: sequelize-meta.json\n    &quot;migrationStoragePath&quot;: &quot;sequelizeMeta.json&quot;,\n\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u8868\u540d. Default: SequelizeMeta\n    &quot;migrationStorageTableName&quot;: &quot;sequelize_meta&quot;\n  }\n}</code></pre> <p><strong>\u6ce8\u610f:</strong> <em>\u4e0d\u63a8\u8350\u4f7f\u7528 <code>none</code> \u5b58\u50a8\u4f5c\u4e3a\u8fc1\u79fb\u5b58\u50a8\u3002 \u5982\u679c\u60a8\u51b3\u5b9a\u4f7f\u7528\u5b83\uff0c\u8bf7\u6ce8\u610f\u5c06\u4f1a\u6ca1\u6709\u4efb\u4f55\u79fb\u52a8\u8bb0\u5f55\u6216\u6ca1\u6709\u8fd0\u884c\u7684\u8bb0\u5f55.</em></p> <h4 id="\u79cd\u5b50\u50a8\u5b58">\u79cd\u5b50\u50a8\u5b58</h4> <p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCLI \u4e0d\u4f1a\u4fdd\u5b58\u4efb\u4f55\u88ab\u6267\u884c\u7684\u79cd\u5b50\u3002 \u5982\u679c\u60a8\u9009\u62e9\u66f4\u6539\u6b64\u884c\u4e3a(!)\uff0c\u5219\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528 <code>seederStorage</code> \u6765\u66f4\u6539\u5b58\u50a8\u7c7b\u578b\u3002 \u5982\u679c\u9009\u62e9 <code>json</code>\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>seederStoragePath</code> \u6307\u5b9a\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6216\u8005 CLI \u5c06\u5199\u5165\u6587\u4ef6 <code>sequelize-data.json</code>\u3002 \u5982\u679c\u8981\u5c06\u6570\u636e\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u8bf7\u4f7f\u7528 <code>sequelize</code>\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 <code>seederStorageTableName</code> \u6307\u5b9a\u8868\u540d\uff0c\u5426\u5219\u5c06\u9ed8\u8ba4\u4e3a<code>SequelizeData</code>\u3002</p> <pre><code class="language-json">{\n  &quot;development&quot;: {\n    &quot;username&quot;: &quot;root&quot;,\n    &quot;password&quot;: null,\n    &quot;database&quot;: &quot;database_development&quot;,\n    &quot;host&quot;: &quot;127.0.0.1&quot;,\n    &quot;dialect&quot;: &quot;mysql&quot;,\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u5b58\u50a8\u7a7a\u95f4. Default: none\n    &quot;seederStorage&quot;: &quot;json&quot;,\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u6587\u4ef6\u540d. Default: sequelize-data.json\n    &quot;seederStoragePath&quot;: &quot;sequelizeData.json&quot;,\n    // \u4f7f\u7528\u4e0d\u540c\u7684\u8868\u540d Default: SequelizeData\n    &quot;seederStorageTableName&quot;: &quot;sequelize_data&quot;\n  }\n}</code></pre> <h3 id="\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32">\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32</h3> <p>\u4f5c\u4e3a <code>--config</code> \u9009\u9879\u7684\u66ff\u4ee3\u65b9\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9a\u4e49\u6570\u636e\u5e93\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 <code>--url</code> \u9009\u9879\u4f20\u9012\u8fde\u63a5\u5b57\u7b26\u4e32\u3002 \u4f8b\u5982\uff1a</p> <pre><code class="language-bash">$ node_modules/.bin/sequelize db:migrate --url &#39;mysql://root:password@mysql_host.com/database_name&#39;</code></pre> <h3 id="\u901a\u8fc7ssl\u8fde\u63a5">\u901a\u8fc7SSL\u8fde\u63a5</h3> <p>\u786e\u4fddssl\u5728 <code>dialectOptions</code> \u548c\u57fa\u672c\u914d\u7f6e\u4e2d\u6307\u5b9a\u3002</p> <pre><code class="language-json">{\n    &quot;production&quot;: {\n        &quot;dialect&quot;:&quot;postgres&quot;,\n        &quot;ssl&quot;: true,\n        &quot;dialectOptions&quot;: {\n            &quot;ssl&quot;: true\n        }\n    }\n}</code></pre> <h3 id="\u7a0b\u5e8f\u5316\u4f7f\u7528">\u7a0b\u5e8f\u5316\u4f7f\u7528</h3> <p>Sequelize \u6709\u4e00\u4e2a <a href="https://github.com/sequelize/umzug">\u59ca\u59b9\u5e93</a>\uff0c\u7528\u4e8e\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5904\u7406\u8fc1\u79fb\u4efb\u52a1\u7684\u6267\u884c\u548c\u8bb0\u5f55\u3002</p> <h2 id="\u67e5\u8be2\u754c\u9762">\u67e5\u8be2\u754c\u9762</h2> <p>\u4f7f\u7528 <code>queryInterface</code> \u5bf9\u8c61\u63cf\u8ff0\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u66f4\u6539\u6570\u636e\u5e93\u6a21\u5f0f\u3002 \u67e5\u770b\u5b8c\u6574\u7684\u516c\u5171\u65b9\u6cd5\u5217\u8868\uff0c\u5b83\u652f\u6301 <a href="/class/lib/query-interface.js~QueryInterface.html">QueryInterface API</a></p> ';e.exports=s}}]);