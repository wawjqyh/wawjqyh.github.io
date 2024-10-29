(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/vue/vue3-migration"],{Jtzp:function(e,o){var d='<h1 id="vue3-\u8fc1\u79fb">Vue3 \u8fc1\u79fb</h1> <h2 id="1-vue3-\u8fc1\u79fb\u6307\u5357">1 Vue3 \u8fc1\u79fb\u6307\u5357</h2> <p><a href="https://v3-migration.vuejs.org/zh/">Vue3 \u8fc1\u79fb\u6307\u5357 \u5b98\u65b9\u6587\u6863</a></p> <h2 id="2-vue3-\u65b0\u7279\u6027">2 Vue3 \u65b0\u7279\u6027</h2> <p><a href="https://v3-migration.vuejs.org/zh/">\u8be6\u60c5\u89c1\u5b98\u65b9\u6587\u6863</a></p> <ul> <li><p>\u7ec4\u5408\u5f0f API</p> </li> <li><p>\u5355\u6587\u4ef6\u7ec4\u4ef6\u4e2d\u7684\u7ec4\u5408\u5f0f API \u8bed\u6cd5\u7cd6 <code>&lt;script setup&gt;</code></p> </li> <li><p>Teleport \u7ec4\u4ef6\uff1a\u53ef\u4ee5\u5c06\u4e00\u4e2a\u7ec4\u4ef6\u5185\u90e8\u7684\u4e00\u90e8\u5206\u6a21\u677f\u4f20\u9001\u5230\u5916\u5c42\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\u5168\u5c4f\u7684\u6a21\u6001\u6846</p> </li> <li><p>Fragments \u7247\u6bb5\uff1a\u7ec4\u4ef6\u652f\u6301\u591a\u6839\u8282\u70b9</p> </li> <li><p>Emits \u7ec4\u4ef6\u9009\u9879\uff1a\u58f0\u660e\u7531\u7ec4\u4ef6\u89e6\u53d1\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6</p> </li> <li><p>\u6765\u81ea <code>@vue/runtime-core</code> \u7684 <code>createRenderer</code> API \u7528\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u51fd\u6570</p> </li> <li><p>\u5355\u6587\u4ef6\u7ec4\u4ef6\u4e2d\u7684\u72b6\u6001\u9a71\u52a8\u7684 CSS \u53d8\u91cf (<code>&lt;style&gt;</code> \u4e2d\u7684 <code>v-bind</code>)</p> </li> <li><p>SFC <code>&lt;style scoped&gt;</code> \u65b0\u589e\u5168\u5c40\u89c4\u5219\u548c\u9488\u5bf9\u63d2\u69fd\u5185\u5bb9\u7684\u89c4\u5219</p> </li> <li><p><code>Suspense</code> \u5b9e\u9a8c\u6027</p> </li> </ul> <h2 id="3-\u975e\u517c\u5bb9\u6027\u6539\u53d8">3 \u975e\u517c\u5bb9\u6027\u6539\u53d8</h2> <p><a href="https://v3-migration.vuejs.org/zh/breaking-changes/">\u975e\u517c\u5bb9\u6027\u6539\u53d8</a></p> <h3 id="31-\u5168\u5c40-api">3.1 \u5168\u5c40 API</h3> <p><strong>\u5168\u5c40 Vue API \u66f4\u6539\u4e3a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b</strong></p> <p>Vue 2 \u6ca1\u6709 app \u7684\u6982\u5ff5\uff0c\u4ece\u540c\u4e00\u4e2a Vue \u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u6bcf\u4e2a\u6839\u5b9e\u4f8b\u5171\u4eab\u76f8\u540c\u7684\u5168\u5c40\u914d\u7f6e</p> <table> <thead> <tr> <th>2.x \u5168\u5c40 API</th> <th>3.x \u5b9e\u4f8b API (app)</th> </tr> </thead> <tbody><tr> <td>Vue.config</td> <td>app.config</td> </tr> <tr> <td>Vue.config.productionTip</td> <td>\u79fb\u9664</td> </tr> <tr> <td>Vue.config.ignoredElements</td> <td>app.config.compilerOptions.isCustomElement</td> </tr> <tr> <td>Vue.component</td> <td>app.component</td> </tr> <tr> <td>Vue.directive</td> <td>app.directive</td> </tr> <tr> <td>Vue.mixin</td> <td>app.mixin</td> </tr> <tr> <td>Vue.use</td> <td>app.use</td> </tr> <tr> <td>Vue.prototype</td> <td>app.config.globalProperties</td> </tr> <tr> <td>Vue.extend</td> <td>\u79fb\u9664</td> </tr> </tbody></table> <p><strong>\u5168\u5c40\u548c\u5185\u90e8 API \u90fd\u7ecf\u8fc7\u4e86\u91cd\u6784\uff0c\u73b0\u5df2\u652f\u6301 TreeShaking</strong></p> <pre><code class="language-js">// vue 2\nimport Vue from &#39;vue&#39;;\n\nVue.nextTick(() =&gt; {\n  // \u4e00\u4e9b\u548c DOM \u6709\u5173\u7684\u4e1c\u897f\n});\n\n// vue 3\nimport { nextTick } from &#39;vue&#39;;\n\nnextTick(() =&gt; {\n  // \u4e00\u4e9b\u548c DOM \u6709\u5173\u7684\u4e1c\u897f\n});</code></pre> <p>\u53d7\u5f71\u54cd\u7684 API</p> <ul> <li><code>Vue.nextTick</code></li> <li><code>Vue.observable</code> (\u7528 <code>Vue.reactive</code> \u66ff\u6362)</li> <li><code>Vue.version</code></li> <li><code>Vue.compile</code> (\u4ec5\u5b8c\u6574\u6784\u5efa\u7248\u672c)</li> <li><code>Vue.set</code> (\u4ec5\u517c\u5bb9\u6784\u5efa\u7248\u672c)</li> <li><code>Vue.delete</code> (\u4ec5\u517c\u5bb9\u6784\u5efa\u7248\u672c)</li> </ul> <h3 id="32-\u6a21\u677f\u6307\u4ee4">3.2 \u6a21\u677f\u6307\u4ee4</h3> <ul> <li><code>v-model</code> prop \u548c\u4e8b\u4ef6\u540d\u79f0\u66f4\u6539\uff0c<code>title.sync=&quot;pageTitle&quot;</code> \u66ff\u6362\u4e3a <code>v-model.title=&quot;pageTitle&quot;</code></li> <li><code>template</code> \u4e0a\u4f7f\u7528 <code>v-for</code> \u9700\u8981\u4f7f\u7528 key</li> <li><code>v-if</code> \u548c <code>v-for</code> \u5728\u540c\u4e00\u4e2a\u5143\u7d20\u8eab\u4e0a\u4f7f\u7528\u65f6\u7684\u4f18\u5148\u7ea7\u53d1\u751f\u4e86\u53d8\u5316</li> <li><code>v-bind=&quot;object&quot;</code> \u73b0\u5728\u662f\u987a\u5e8f\u654f\u611f\u7684</li> <li><code>v-on:event.native</code> \u79fb\u9664\u3002\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u9700\u8981\u7528 emits \u663e\u5f0f\u5b9a\u4e49\u3002\u672a\u88ab\u5b9a\u4e49\u4e3a\u7ec4\u4ef6\u89e6\u53d1\u7684\u6240\u6709\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u4f1a\u628a\u5b83\u4eec\u4f5c\u4e3a\u539f\u751f\u4e8b\u4ef6\u76d1\u542c\u5668\u6dfb\u52a0\u5230\u5b50\u7ec4\u4ef6\u7684\u6839\u5143\u7d20\u4e2d (\u9664\u975e\u5728\u5b50\u7ec4\u4ef6\u7684\u9009\u9879\u4e2d\u8bbe\u7f6e\u4e86 <code>inheritAttrs: false</code>)</li> </ul> <h3 id="33-\u7ec4\u4ef6">3.3 \u7ec4\u4ef6</h3> <ul> <li><p>\u5f02\u6b65\u7ec4\u4ef6\u73b0\u5728\u9700\u8981\u901a\u8fc7 <code>defineAsyncComponent</code> \u65b9\u6cd5\u8fdb\u884c\u521b\u5efa</p> </li> <li><p>\u7ec4\u4ef6\u4e8b\u4ef6\u73b0\u5728\u5e94\u8be5\u4f7f\u7528 <code>emits</code> \u9009\u9879\u8fdb\u884c\u58f0\u660e</p> </li> <li><p>\u51fd\u6570\u5f0f\u7ec4\u4ef6\u53ea\u80fd\u901a\u8fc7\u7eaf\u51fd\u6570\u8fdb\u884c\u521b\u5efa</p> </li> <li><p>\u5355\u6587\u4ef6\u7ec4\u4ef6 <code>&lt;template&gt;</code> \u6807\u7b7e\u7684 <code>functional attribute</code> \u548c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u7684 <code>functional</code> \u9009\u9879\u5df2\u88ab\u79fb\u9664</p> </li> </ul> <h3 id="34-\u6e32\u67d3\u51fd\u6570">3.4 \u6e32\u67d3\u51fd\u6570</h3> <ul> <li><p><code>$listeners</code> \u88ab\u79fb\u9664\u6216\u6574\u5408\u5230 <code>$attrs</code></p> </li> <li><p><code>$attrs</code> \u73b0\u5728\u5305\u542b <code>class</code> \u548c <code>style attribute</code></p> </li> <li><p>\u6e32\u67d3\u51fd\u6570 API \u66f4\u6539</p> </li> <li><p><code>$scopedSlots property</code> \u5df2\u79fb\u9664\uff0c\u6240\u6709\u63d2\u69fd\u90fd\u901a\u8fc7 <code>$slots</code> \u4f5c\u4e3a\u51fd\u6570\u66b4\u9732</p> </li> </ul> <h3 id="35-\u88ab\u79fb\u9664\u7684-api">3.5 \u88ab\u79fb\u9664\u7684 API</h3> <ul> <li><p><code>v-on</code> \u4e0d\u652f\u6301 <code>keyCode</code>\uff0c<code>KeyboardEvent.keyCode</code> \u5df2\u88ab\u5e9f\u5f03</p> </li> <li><p><code>$on</code>\u3001<code>$off</code> \u548c <code>$once</code> \u5b9e\u4f8b\u65b9\u6cd5</p> </li> <li><p>\u8fc7\u6ee4\u5668 <code>filter</code>\uff0c\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\u66ff\u4ee3</p> </li> <li><p>\u5168\u5c40\u51fd\u6570 <code>set</code> \u548c <code>delete</code> \u4ee5\u53ca\u5b9e\u4f8b\u65b9\u6cd5 <code>$set</code> \u548c <code>$delete</code>\u3002\u57fa\u4e8e\u4ee3\u7406\u7684\u53d8\u5316\u68c0\u6d4b\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u5b83\u4eec\u4e86</p> </li> <li><p><code>$children</code>\u3002<code>2.x</code> \u4e2d\u53ef\u4ee5\u4f7f\u7528 <code>this.$children</code> \u8bbf\u95ee\u5f53\u524d\u5b9e\u4f8b\u7684\u76f4\u63a5\u5b50\u7ec4\u4ef6\u3002\u5efa\u8bae\u4f7f\u7528\u6a21\u677f\u5f15\u7528 <code>ref</code></p> </li> <li><p><code>$destroy</code> \u5b9e\u4f8b\u65b9\u6cd5\u3002\u7528\u6237\u4e0d\u5e94\u8be5\u518d\u624b\u52a8\u7ba1\u7406\u5355\u4e2a Vue \u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f</p> </li> <li><p>\u5185\u8054\u6a21\u677f <code>attribute</code></p> </li> <li><p><code>propsData</code> \u9009\u9879</p> </li> </ul> <h3 id="36-\u81ea\u5b9a\u4e49\u5143\u7d20">3.6 \u81ea\u5b9a\u4e49\u5143\u7d20</h3> <ul> <li>\u81ea\u5b9a\u4e49\u5143\u7d20\u68c0\u6d4b\u73b0\u5728\u5728\u6a21\u677f\u7f16\u8bd1\u65f6\u6267\u884c</li> <li>\u7279\u6b8a\u7684 <code>is</code> attribute \u7684\u4f7f\u7528\u88ab\u4e25\u683c\u9650\u5236\u5728\u88ab\u4fdd\u7559\u7684 <code>&lt;component&gt;</code> \u6807\u7b7e\u4e2d</li> </ul> <h3 id="37-\u5176\u4ed6\u5c0f\u6539\u53d8">3.7 \u5176\u4ed6\u5c0f\u6539\u53d8</h3> <ul> <li><p><code>destroyed</code> \u751f\u547d\u5468\u671f\u9009\u9879\u88ab\u91cd\u547d\u540d\u4e3a <code>unmounted</code></p> </li> <li><p><code>beforeDestroy</code> \u751f\u547d\u5468\u671f\u9009\u9879\u88ab\u91cd\u547d\u540d\u4e3a <code>beforeUnmount</code></p> </li> <li><p>\u6765\u81ea <code>mixin</code> \u7684 <code>data</code> \u9009\u9879\u73b0\u5728\u4e3a\u6d45\u5408\u5e76</p> </li> <li><p><code>Props</code> \u7684 <code>default</code> \u5de5\u5382\u51fd\u6570\u4e0d\u518d\u53ef\u4ee5\u8bbf\u95ee <code>this</code> \u4e0a\u4e0b\u6587</p> </li> <li><p>\u81ea\u5b9a\u4e49\u6307\u4ee4\u7684 API \u5df2\u66f4\u6539\u4e3a\u4e0e\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u4e00\u81f4\uff0c\u4e14 <code>binding.expression</code> \u5df2\u79fb\u9664</p> </li> <li><p>\u5f53\u4fa6\u542c\u4e00\u4e2a\u6570\u7ec4\u65f6\uff0c\u53ea\u6709\u5f53\u6570\u7ec4\u88ab\u66ff\u6362\u65f6\uff0c\u56de\u8c03\u624d\u4f1a\u89e6\u53d1\uff0c\u5982\u679c\u9700\u8981\u5728\u53d8\u66f4\u65f6\u89e6\u53d1\uff0c\u5219\u5fc5\u987b\u6307\u5b9a <code>deep</code> \u9009\u9879</p> </li> <li><p>\u6ca1\u6709\u7279\u6b8a\u6307\u4ee4\u7684\u6807\u8bb0 (<code>v-if/else-if/else</code>\u3001<code>v-for</code> \u6216 <code>v-slot</code>) \u7684 <code>&lt;template&gt;</code> \u73b0\u5728\u88ab\u89c6\u4e3a\u666e\u901a\u5143\u7d20\uff0c\u5e76\u5c06\u6e32\u67d3\u4e3a\u539f\u751f\u7684 <code>&lt;template&gt;</code> \u5143\u7d20\uff0c\u800c\u4e0d\u662f\u6e32\u67d3\u5176\u5185\u90e8\u5185\u5bb9</p> </li> <li><p><code>data</code> \u9009\u9879\u5e94\u59cb\u7ec8\u88ab\u58f0\u660e\u4e3a\u4e00\u4e2a\u51fd\u6570</p> </li> <li><p><code>Attribute</code> \u5f3a\u5236\u7b56\u7565\u5df2\u66f4\u6539</p> </li> <li><p><code>Transition</code> \u7684\u4e00\u4e9b <code>class</code> \u88ab\u91cd\u547d\u540d</p> </li> <li><p><code>&lt;TransitionGroup&gt;</code> \u4e0d\u518d\u9ed8\u8ba4\u6e32\u67d3\u5305\u88f9\u5143\u7d20</p> </li> <li><p>\u5df2\u6302\u8f7d\u7684\u5e94\u7528\u4e0d\u4f1a\u66ff\u6362\u5b83\u6240\u6302\u8f7d\u7684\u5143\u7d20</p> </li> <li><p>\u751f\u547d\u5468\u671f\u7684 <code>hook:</code> \u4e8b\u4ef6\u524d\u7f00\u6539\u4e3a <code>vue:</code></p> </li> </ul> ';e.exports=d}}]);