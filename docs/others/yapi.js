(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/others/yapi"],{"0DNb":function(o,e){var i='<h1 id="yapi-\u5f00\u53d1\u6587\u6863">yapi \u5f00\u53d1\u6587\u6863</h1> <p>\u53c2\u7167\u5b98\u65b9\u6587\u6863\uff1a(<a href="https://hellosean1025.github.io/yapi/documents/redev.html)%5Bhttps://hellosean1025.github.io/yapi/documents/redev.html%5D">https://hellosean1025.github.io/yapi/documents/redev.html)[https://hellosean1025.github.io/yapi/documents/redev.html]</a></p> <h2 id="1-mongodb">1 mongodb</h2> <p>\u5feb\u901f\u5b89\u88c5\u53c2\u8003\u8fd9\u91cc (<a href="https://www.runoob.com/mongodb/mongodb-osx-install.html)%5Bhttps://www.runoob.com/mongodb/mongodb-osx-install.html%5D">https://www.runoob.com/mongodb/mongodb-osx-install.html)[https://www.runoob.com/mongodb/mongodb-osx-install.html]</a></p> <p>\u5efa\u5982\u4e0b\u76ee\u5f55\uff1a</p> <ul> <li>data \u6570\u636e\u5e93\u5b58\u50a8\u76ee\u5f55</li> <li>logs \u65e5\u5fd7\u6587\u4ef6\u5b58\u50a8\u76ee\u5f55</li> <li>mongo.conf \u542f\u52a8\u7684\u914d\u7f6e\u6587\u4ef6</li> </ul> <p>\u5728 mongo.conf \u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff1a</p> <pre><code class="language-bash"># \u6570\u636e\u5e93\u8def\u5f84\ndbpath=/Users/chiu/work/mongodb/data/\n\n# \u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\nlogpath=/Users/chiu/work/mongodb/logs/mongo.log\n\n# \u65e5\u5fd7\u662f\u5426\u7528\u8ffd\u52a0\u6a21\u5f0f\uff0ctrue \u8ffd\u52a0\u5230\u73b0\u6709\u6587\u4ef6\uff0cfalse \u65b0\u5efa\u6587\u4ef6\nlogappend=true\n\n# \u662f\u5426\u542f\u7528\u65e5\u5fd7\u6587\u4ef6\uff0c\u9ed8\u8ba4\u542f\u7528\njournal=true\n\n# \u8fd9\u4e2a\u9009\u9879\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e00\u4e9b\u65e0\u7528\u7684\u65e5\u5fd7\u4fe1\u606f\nquiet=true\n\n# \u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a27017\nport=27017</code></pre> <p>\u6307\u5b9a mongo.conf \u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u542f\u52a8\u6570\u636e\u5e93</p> <pre><code class="language-bash">/Users/chiu/work/mongodb/mongodb/bin/mongod --config /Users/chiu/work/mongodb/mongo.conf --auth\n\n# --config \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\n# --auth \u5f00\u542f\u8ba4\u8bc1 (\u9700\u8981\u4f7f\u7528\u8d26\u53f7\u5bc6\u7801)</code></pre> <p>\u53e6\u5916\u53ef\u4ee5\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684 GUI \u5de5\u5177 MongoDB Compass\uff0c\u4e0b\u8f7d\u5730\u5740 <a href="https://www.mongodb.com/download-center/compass">https://www.mongodb.com/download-center/compass</a></p> <h2 id="2-\u76ee\u5f55\u7ed3\u6784">2 \u76ee\u5f55\u7ed3\u6784</h2> <pre><code>|-- config.json\n|-- init.lock\n|-- log\n|-- vendors\n    |-- CHANGELOG.md\n    |-- LICENSE\n    |-- README.md\n    |-- client // \u524d\u7aef\u76ee\u5f55\n    |-- common // \u516c\u5171\u914d\u7f6e\uff0c\u5de5\u5177\u7c7b\n    |-- config_example.json\n    |-- doc // \u9879\u76ee\u6587\u6863\n    |-- exts // \u5185\u7f6e\u63d2\u4ef6\n    |-- nodemon.json\n    |-- npm-debug.log\n    |-- package.json\n    |-- plugin.json\n    |-- server // \u540e\u7aef\u76ee\u5f55\n    |-- static\n    |-- test\n    |-- webpack.alias.js\n    |-- yapi-base-flow.jpg\n    |-- ydocfile.js\n    `-- ykit.config.js</code></pre><p>\u9700\u8981\u6ce8\u610f\u7684\u662f\u9879\u76ee\u62c9\u53d6\u4e0b\u6765\u9700\u8981\u653e\u5728 vendors \u4e0b\u9762\uff0cconfig.json \u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0clog \u4e3a\u9879\u76ee\u751f\u6210\u7684\u65e5\u5fd7</p> <h2 id="3-\u6587\u6863">3 \u6587\u6863</h2> <p>\u6587\u6863\u7528\u7684\u662f\u53bb\u54ea\u513f\u56e2\u961f\u5f00\u53d1\u7684 ydoc</p> <p>\u76f8\u5173\u76ee\u5f55\u548c\u914d\u7f6e\u6587\u4ef6\uff1a</p> <ul> <li><code>docs</code></li> <li><code>ydoc.js</code> \u914d\u7f6e\u6587\u4ef6</li> <li><code>ydocfile.js</code> \u914d\u7f6e\u6587\u4ef6</li> </ul> <p>\u5b98\u65b9\u6587\u6863\uff1a</p> <p>(<a href="https://hellosean1025.github.io/ydoc/documents/index.html)%5Bhttps://hellosean1025.github.io/ydoc/documents/index.html%5D">https://hellosean1025.github.io/ydoc/documents/index.html)[https://hellosean1025.github.io/ydoc/documents/index.html]</a></p> <h2 id="4-\u63d2\u4ef6">4 \u63d2\u4ef6</h2> <p>\u5728\u4e86\u89e3\u6253\u5305\u914d\u7f6e\u4e4b\u524d\uff0c\u5148\u4e86\u89e3\u4e0b\u63d2\u4ef6\u7684\u7ed3\u6784\uff0c\u6253\u5305\u914d\u7f6e\u6d89\u53ca\u63d2\u4ef6\u7684\u6253\u5305</p> <p>\u5b98\u65b9\u6587\u6863\uff1a</p> <p>(<a href="https://hellosean1025.github.io/yapi/documents/plugin-dev.html)%5Bhttps://hellosean1025.github.io/yapi/documents/plugin-dev.html%5D">https://hellosean1025.github.io/yapi/documents/plugin-dev.html)[https://hellosean1025.github.io/yapi/documents/plugin-dev.html]</a></p> <ul> <li><code>exts</code> \u5185\u90e8\u63d2\u4ef6\u76ee\u5f55</li> <li><code>common/config.js</code> \u5185\u90e8\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6</li> <li><code>node_modules/yapi-plugin-xxx</code> \u5916\u90e8\u63d2\u4ef6\u76ee\u5f55</li> <li><code>config.json</code> \u5916\u90e8\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6</li> </ul> <h2 id="5-\u524d\u7aef\u6253\u5305">5 \u524d\u7aef\u6253\u5305</h2> <p>\u524d\u7aef\u6253\u5305\u5de5\u5177\u4f7f\u7528\u7684\u662f\u53bb\u54ea\u513f\u56e2\u961f\u5f00\u53d1\u7684 ykit</p> <p>YKit \u662f\u4e00\u4e2a\u57fa\u4e8e Webpack \u7684\u6253\u5305\u5de5\u5177\uff0c\u5b83\u5229\u7528\u63d2\u4ef6\u673a\u5236\u5c01\u88c5\u4e86\u5404\u79cd JavaScript \u5e94\u7528\u7684\u914d\u7f6e</p> <p>\u5b98\u65b9\u6587\u6863\uff1a</p> <p>(<a href="https://github.com/YMFE/ykit)%5Bhttps://github.com/YMFE/ykit%5D">https://github.com/YMFE/ykit)[https://github.com/YMFE/ykit]</a></p> <p>\u914d\u7f6e\u6587\u4ef6\u4e3a\u6839\u76ee\u5f55\u4e0b\u7684 <code>ykit.config.js</code></p> <p><strong>\u914d\u7f6e\u6587\u4ef6\u9009\u9879\uff1a</strong></p> <ul> <li>plugins - \u63d2\u4ef6\u662f\u5bf9\u4e00\u7c7b\u914d\u7f6e\u548c\u529f\u80fd\u7684\u5c01\u88c5\uff0c\u901a\u8fc7\u5b89\u88c5\u63d2\u4ef6\u53ef\u4ee5\u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883</li> <li>config.exports - \u8d44\u6e90\u5165\u53e3</li> <li>config.modifyWebpackConfig - \u7528\u6765\u66f4\u6539 Webpack \u73b0\u6709\u914d\u7f6e\u7684\u51fd\u6570</li> <li>hooks - \u6253\u5305\u8fc7\u7a0b\u94a9\u5b50</li> <li>commands - \u81ea\u5b9a\u4e49\u547d\u4ee4</li> </ul> <p>\u914d\u7f6e\u6587\u4ef6\u4e2d <code>initPlugins</code> \u4e3a\u6574\u7406\u63d2\u4ef6\u7684\u914d\u7f6e\uff0c\u5c06\u5185\u90e8\u63d2\u4ef6\u548c\u5916\u90e8\u63d2\u4ef6\u6574\u7406\u5728\u4e00\u8d77\uff0c\u5728 <code>client</code> \u76ee\u5f55\u4e0b\u8f93\u51fa\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6 <code>plugin-module.js</code></p> <p>\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\uff1a</p> <pre><code class="language-javascript">module.exports = {\n  &#39;import-postman&#39;: {\n    module: require(&#39;exts/yapi-plugin-import-postman/client.js&#39;),\n    options: null\n  }\n};</code></pre> <h2 id="6-\u524d\u7aef">6 \u524d\u7aef</h2> <p>\u524d\u7aef\u6280\u672f\u6808\u4e3a\uff1a</p> <ul> <li><code>react</code> v16.3.0</li> <li><code>redux</code> v3.7.1</li> <li><code>react-router-dom</code> v4.1.1</li> <li><code>antd</code> v3.2.2</li> </ul> <h3 id="61-\u76ee\u5f55\u7ed3\u6784">6.1 \u76ee\u5f55\u7ed3\u6784</h3> <pre><code>|-- components // \u7ec4\u4ef6\n|-- constants // \u96c6\u4e2d\u5b9a\u4e49\u5e38\u91cf\n|-- containers // \u9875\u9762\n|-- font\n|-- images\n|-- reducer\n|-- styles\n|-- Application.js // \u9879\u76ee\u5165\u53e3\u6587\u4ef6\uff0c\u8def\u7531\u914d\u7f6e\n|-- common.js // \u516c\u5171\u5de5\u5177\u65b9\u6cd5\n|-- index.js // \u5165\u53e3\u6587\u4ef6\n|-- plugin-module.js // \u6253\u5305\u5de5\u5177\u751f\u6210\u7684\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\n|-- plugin.js // \u63d2\u4ef6\u76f8\u5173\u65b9\u6cd5</code></pre><h3 id="62-plugin">6.2 plugin</h3> <p><code>plugin.js</code> \u5b9a\u4e49\u4e86\u524d\u7aef\u63d2\u4ef6\u7684 hooks</p> <ul> <li><code>third_login</code> \u7b2c\u4e09\u65b9\u767b\u5f55\uff0c\u53ef\u53c2\u8003 yapi-plugin-qsso \u63d2\u4ef6</li> <li><code>import_data</code> \u5bfc\u5165\u6570\u636e\uff0c\u53ef\u53c2\u8003 vendors/exts/yapi-plugin-import-swagger \u63d2\u4ef6</li> <li><code>export_data</code> \u5bfc\u51fa\u6570\u636e</li> <li><code>interface_tab</code> \u63a5\u53e3\u9875\u9762 tab \u94a9\u5b50\uff0c\u53ef\u53c2\u8003 vendors/exts/yapi-plugin-advanced-mock\uff0c\u9884\u89c8/\u7f16\u8f91/\u8fd0\u884c</li> <li><code>before_request</code> \u5728\u8fd0\u884c\u9875\u9762\u6216\u5355\u4e2a\u6d4b\u8bd5\u4e5f\u91cc\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u524d\u8c03\u7528\uff0c\u53ef\u4ee5\u7528\u63d2\u4ef6\u9488\u5bf9\u67d0\u4e2a\u63a5\u53e3\u7684\u8bf7\u6c42\u5934\u6216\u8005\u6570\u636e\u8fdb\u884c\u4fee\u6539\u6216\u8005\u8bb0\u5f55</li> <li><code>after_request</code> \u5728\u8fd0\u884c\u9875\u9762\u6216\u5355\u4e2a\u6d4b\u8bd5\u4e5f\u91cc\u6bcf\u6b21\u53d1\u9001\u5b8c\u6210\u540e\u8c03\u7528</li> <li><code>before_col_request</code> \u5728\u6d4b\u8bd5\u96c6\u91cc\u8fd0\u884c\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u524d\u8c03\u7528</li> <li><code>after_col_request</code> \u5728\u6d4b\u8bd5\u96c6\u91cc\u8fd0\u884c\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u540e\u8c03\u7528</li> <li><code>header_menu</code> header \u4e0b\u62c9\u83dc\u5355 menu \u94a9\u5b50\uff0c\u53ef\u53c2\u8003 vendors/exts/yapi-plugin-statistics\uff0c\u4e2a\u4eba\u4e2d\u5fc3/\u6211\u7684\u5173\u6ce8/\u7528\u6237\u7ba1\u7406/\u9000\u51fa</li> <li><code>app_route</code> Route \u8def\u7531\u5217\u8868\u94a9\u5b50</li> <li><code>add_reducer</code> \u6dfb\u52a0 reducer</li> <li><code>sub_nav</code> \u6dfb\u52a0 subnav \u94a9\u5b50</li> <li><code>sub_setting_nav</code> \u6dfb\u52a0\u9879\u76ee\u8bbe\u7f6e nav</li> </ul> <p><code>bindHook()</code> \u7ed1\u5b9a\u63d2\u4ef6\u4e2d\u5b9a\u4e49\u7684\u94a9\u5b50</p> <p><code>emitHook()</code> \u5728\u4e1a\u52a1\u903b\u8f91\u4e2d\u89e6\u53d1\u94a9\u5b50</p> <h3 id="63-reducer">6.3 reducer</h3> <p>\u9879\u76ee model \u5168\u90e8\u4e3a\u5168\u5c40 model\uff0c\u96c6\u4e2d\u5728 reducer \u76ee\u5f55\u4e0b\u9762\u3002</p> <p>modules \u4e3a\u5404\u4e2a\u6a21\u5757\u7684 model\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u6a21\u5757\u76f8\u5173\u8c03\u7528\u63a5\u53e3\u7684\u65b9\u6cd5\u90fd\u653e\u5728\u5f53\u524d\u6587\u4ef6\u5185\u3002</p> <p>\u4f8b\u5982 <code>user.js</code></p> <pre><code class="language-javascript">export function loginActions(data) {\n  return {\n    type: LOGIN,\n    payload: axios.post(&#39;/api/user/login&#39;, data)\n  };\n}</code></pre> <p><code>messageMiddleware.js</code> \u4e2d\u95f4\u4ef6\u96c6\u4e2d\u5904\u7406 ajax \u7684\u9519\u8bef\uff0c\u5e76\u5f39\u51fa\u9519\u8bef\u63d0\u793a</p> <h2 id="7-\u540e\u7aef">7 \u540e\u7aef</h2> <p>\u540e\u7aef\u6280\u672f\u6808\u4e3a\uff1a</p> <ul> <li><code>koa</code> v2.0.0</li> <li><code>mongoose</code> v5.7.5</li> <li><code>websocket</code></li> </ul> <h3 id="71-\u76ee\u5f55\u7ed3\u6784">7.1 \u76ee\u5f55\u7ed3\u6784</h3> <ul> <li><code>controllers</code></li> <li><code>middleware</code></li> <li><code>models</code></li> <li><code>utils</code></li> <li><code>app.js</code></li> <li><code>install.js</code></li> <li><code>plugin.js</code></li> <li><code>router.js</code></li> <li><code>websocket.js</code></li> <li><code>yapi.js</code></li> </ul> <h3 id="72-install">7.2 install</h3> <p><code>npm run install-server</code> \u8fd0\u884c\u7684\u5c31\u662f <code>install.js</code>\uff0c\u5b89\u88c5\u7a0b\u5e8f\u4f1a\u521d\u59cb\u5316\u6570\u636e\u5e93\u7d22\u5f15\u548c\u7ba1\u7406\u5458\u8d26\u53f7\uff0c\u7ba1\u7406\u5458\u8d26\u53f7\u540d\u53ef\u5728 config.json \u914d\u7f6e</p> <p>\u8fd0\u884c\u5b8c\u6210\u540e\u4f1a\u5728\u6839\u76ee\u5f55\u4e0b\u751f\u6210 <code>init.lock</code> \u6587\u4ef6</p> <h3 id="73-app">7.3 app</h3> <p>\u540e\u7aef\u5165\u53e3\u6587\u4ef6\uff0c<code>npm run start</code> \u6267\u884c <code>app.js</code> \u542f\u52a8\u540e\u7aef\u670d\u52a1</p> <p><code>app.js</code> \u7528\u4e8e\u542f\u52a8\u65f6\u7684\u521d\u59cb\u5316\u5de5\u4f5c\uff0c\u548c\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e\u3002\u5982\uff1a\u8def\u7531\u3001\u7f13\u5b58\u3001\u9759\u6001\u6587\u4ef6</p> <h3 id="74-plugin">7.4 plugin</h3> <p><code>plugin.js</code> \u5b9a\u4e49\u4e86\u540e\u7aef\u63d2\u4ef6\u7684 hooks</p> <ul> <li><code>third_login</code> \u7b2c\u4e09\u65b9 sso \u767b\u5f55\u94a9\u5b50\uff0c\u6682\u53ea\u652f\u6301\u8bbe\u7f6e\u4e00\u4e2a</li> <li><code>interface_add</code> \u5ba2\u6237\u7aef\u589e\u52a0\u63a5\u53e3\u6210\u529f\u540e\u89e6\u53d1</li> <li><code>interface_del</code> \u5ba2\u6237\u7aef\u5220\u9664\u63a5\u53e3\u6210\u529f\u540e\u89e6\u53d1</li> <li><code>interface_update</code> \u5ba2\u6237\u7aef\u66f4\u65b0\u63a5\u53e3\u6210\u529f\u540e\u89e6\u53d1</li> <li><code>interface_list</code> \u5ba2\u6237\u7aef\u83b7\u53d6\u63a5\u53e3\u6570\u636e\u5217\u8868</li> <li><code>interface_get</code> \u5ba2\u6237\u7aef\u83b7\u53d6\u4e00\u6761\u63a5\u53e3\u4fe1\u606f\u89e6\u53d1</li> <li><code>project_add</code> \u5ba2\u6237\u7aef\u589e\u52a0\u4e00\u4e2a\u65b0\u9879\u76ee</li> <li><code>project_up</code> \u5ba2\u6237\u7aef\u66f4\u65b0\u4e00\u4e2a\u65b0\u9879\u76ee</li> <li><code>project_get</code> \u5ba2\u6237\u7aef\u83b7\u53d6\u4e00\u4e2a\u9879\u76ee</li> <li><code>project_del</code> \u5ba2\u6237\u7aef\u5220\u9664\u5220\u9664\u4e00\u4e2a\u9879\u76ee</li> <li><code>export_markdown</code> \u5bfc\u51fa markdown \u6570\u636e</li> <li><code>mock_after</code> MockServer \u751f\u6210 mock \u6570\u636e\u540e\u89e6\u53d1</li> <li><code>add_router</code> \u589e\u52a0\u8def\u7531\u7684\u94a9\u5b50</li> <li><code>add_ws_router</code> \u589e\u52a0 websocket \u8def\u7531\u7684\u94a9\u5b50</li> <li><code>import_data</code> \u5bfc\u5165\u6570\u636e</li> </ul> <h3 id="75-router">7.5 router</h3> <p><code>router.js</code> \u6587\u4ef6\u7528\u4e8e\u7edf\u4e00\u6240\u6709\u8def\u7531\u89c4\u5219</p> <p><strong>\u5982\u4f55\u5b9a\u4e49 router</strong></p> <p>\u5728 <code>INTERFACE_CONFIG</code> \u4e2d\u5b9a\u4e49\u6240\u5c5e\u8d44\u6e90\u7684\u914d\u7f6e\uff0c\u5982\uff1a</p> <pre><code class="language-javascript">let INTERFACE_CONFIG = {\n  user: {\n    prefix: &#39;/user/&#39;,\n    controller: userController\n  }\n};</code></pre> <p>\u518d\u5230 <code>routerConfig</code> \u5b9a\u4e49\u8def\u7531\uff1a</p> <pre><code class="language-javascript">let routerConfig = {\n  user: [\n    {\n      action: &#39;login&#39;, // controller\n      path: &#39;login&#39;,\n      method: &#39;post&#39;\n    }\n  ]\n};</code></pre> <h3 id="75-controller">7.5 controller</h3> <p>controller \u901a\u8fc7\u7c7b\u7684\u65b9\u5f0f\u7f16\u5199\uff0c\u7c7b\u91cc\u9762\u65b9\u6cd5\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a Controller \u5728 Router \u4e2d\u5f15\u7528\u5230</p> <p>controller \u7c7b\u9700\u8981\u7ee7\u627f baseController (controller/base.js)</p> <p>\u5728 constructor \u4e2d\u4f7f\u7528 <code>yapi.getInst</code> \u83b7\u53d6 controller \u4e2d\u9700\u8981\u7528\u5230\u7684 Model \u5b9e\u4f8b</p> <pre><code class="language-javascript">class userController extends baseController {\n  constructor(ctx) {\n    super(ctx);\n    this.Model = yapi.getInst(userModel);\n  }\n\n  async login(ctx) {\n    // ...\n  }\n}</code></pre> <h3 id="76-model">7.6 Model</h3> <p>model \u4e5f\u662f\u901a\u8fc7\u7c7b\u7684\u65b9\u5f0f\u7f16\u5199\uff0c\u6240\u6709\u7684 model \u90fd\u9700\u8981\u7ee7\u627f baseModel, \u4e14\u9700\u8981 getSchema \u548c getName \u65b9\u6cd5</p> <p>getName \u5b9a\u4e49\u96c6\u5408\u540d\uff0cgetSchema \u5b9a\u4e49\u96c6\u5408\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7c7b\u91cc\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u5bf9\u5f53\u524d\u96c6\u5408\u8fdb\u884c\u64cd\u4f5c\uff0cCDRD \u7b49</p> <p>\u9879\u76ee\u4e2d\u7684\u6570\u636e\u96c6\u5408 (\u6570\u636e\u8868)</p> <ul> <li><code>avatar</code> \u7528\u6237\u5934\u50cf</li> <li><code>interface</code> \u63a5\u53e3</li> <li><code>interfaceCase</code> \u6d4b\u8bd5\u7528\u4f8b</li> <li><code>interfaceCat</code> \u63a5\u53e3\u5206\u7c7b</li> <li><code>interfaceCol</code> \u6d4b\u8bd5\u96c6\u5408</li> <li><code>log</code> \u64cd\u4f5c\u8bb0\u5f55</li> <li><code>project</code> \u9879\u76ee</li> <li><code>user</code> \u7528\u6237</li> </ul> <p>\u6570\u636e\u5e93\u7ba1\u7406\u5458\u8d26\u53f7 admin 123456</p> <p>yapi \u7ba1\u7406\u5458\u8d26\u53f7: <a href="mailto:admin@admin.com">admin@admin.com</a> \u5bc6\u7801: ymfe.org</p> ';o.exports=i}}]);