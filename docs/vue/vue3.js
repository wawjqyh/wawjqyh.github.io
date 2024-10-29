(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/vue/vue3"],{"2zeE":function(e,t){var o='<h1 id="vue3-\u5b66\u4e60\u7b14\u8bb0">Vue3 \u5b66\u4e60\u7b14\u8bb0</h1> <h2 id="1-setup">1 setup</h2> <p><code>setup()</code> \u94a9\u5b50\u662f\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7ec4\u5408\u5f0f API \u7684\u5165\u53e3</p> <p>\u9009\u9879\u5f0f\u7684\u4ee3\u7801\u90fd\u9700\u8981\u653e\u5728 <code>setup()</code> \u5185</p> <p><strong>\u901a\u5e38\u53ea\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u4f7f\u7528\uff1a</strong></p> <ul> <li>\u9700\u8981\u5728\u975e\u5355\u6587\u4ef6\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7ec4\u5408\u5f0f API \u65f6</li> <li>\u9700\u8981\u5728\u57fa\u4e8e\u9009\u9879\u5f0f API \u7684\u7ec4\u4ef6\u4e2d\u96c6\u6210\u57fa\u4e8e\u7ec4\u5408\u5f0f API \u7684\u4ee3\u7801\u65f6\uff08\u5373\u9009\u9879\u5f0f\u548c\u7ec4\u5408\u5f0f\u6df7\u7528\uff09</li> </ul> <blockquote> <p>\u5373\u5728 <code>setup()</code> \u4e2d\u8bbf\u95ee <code>this</code> \u4f1a\u662f <code>undefined</code>\u3002\u53ef\u4ee5\u5728\u9009\u9879\u5f0f API \u4e2d\u8bbf\u95ee\u7ec4\u5408\u5f0f API \u66b4\u9732\u7684\u503c\uff0c\u4f46\u53cd\u8fc7\u6765\u4e0d\u884c</p> </blockquote> <pre><code class="language-vue">&lt;template&gt;\n  &lt;div&gt;\n    &lt;div class=&quot;section&quot;&gt;\n      &lt;div&gt;&lt;button @click=&quot;handleAddYear&quot;&gt;\u5e74\u4efd+1&lt;/button&gt;&lt;/div&gt;\n      &lt;div&gt;{{ year }}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport { ref } from &#39;vue&#39;;\n\nexport default {\n  setup() {\n    const year = ref(2024);\n\n    function handleAddYear() {\n      year.value = year.value + 1;\n    }\n\n    return {\n      year,\n      handleAddYear\n    };\n  }\n};\n&lt;/script&gt;\n\n&lt;style scoped&gt;\n.section {\n  padding: 10px 0;\n}\n&lt;/style&gt;</code></pre> <h2 id="2-script-setup">2 script setup</h2> <p><a href="https://cn.vuejs.org/api/sfc-script-setup">\u6587\u6863</a></p> <p><code>&lt;script setup&gt;</code> \u662f\u5728\u5355\u6587\u4ef6\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7ec4\u5408\u5f0f API \u7684\u7f16\u8bd1\u65f6\u8bed\u6cd5\u7cd6\u3002\u5f53\u540c\u65f6\u4f7f\u7528\u5355\u6587\u4ef6\u7ec4\u4ef6\u4e0e\u7ec4\u5408\u5f0f API \u65f6\u8be5\u8bed\u6cd5\u662f<strong>\u9ed8\u8ba4\u63a8\u8350</strong></p> <p>\u9876\u5c42\u7684\u7ed1\u5b9a\u4f1a\u88ab\u66b4\u9732\u7ed9\u6a21\u677f</p> <p>\u5f53\u4f7f\u7528 <code>&lt;script setup&gt;</code> \u7684\u65f6\u5019\uff0c\u4efb\u4f55\u5728 <code>&lt;script setup&gt;</code> \u58f0\u660e\u7684\u9876\u5c42\u7684\u7ed1\u5b9a (\u5305\u62ec\u53d8\u91cf\uff0c\u51fd\u6570\u58f0\u660e\uff0c\u4ee5\u53ca <code>import</code> \u5bfc\u5165\u7684\u5185\u5bb9) \u90fd\u80fd\u5728\u6a21\u677f\u4e2d\u76f4\u63a5\u4f7f\u7528</p> <p><code>setup()</code> \u5219\u9700\u8981 <code>return</code></p> <h2 id="3-\u54cd\u5e94\u5f0f\u57fa\u7840">3 \u54cd\u5e94\u5f0f\u57fa\u7840</h2> <blockquote> <p>\u5efa\u8bae\u4f7f\u7528 <code>ref()</code> \u4f5c\u4e3a\u58f0\u660e\u54cd\u5e94\u5f0f\u72b6\u6001\u7684\u4e3b\u8981 API\uff0c<code>ref()</code> \u5185\u5bb9\u4e5f\u7528\u5230\u4e86 <code>reactive()</code></p> </blockquote> <h3 id="31-ref">3.1 ref</h3> <p><code>ref()</code> \u8fd4\u56de\u7684\u5b9e\u9645\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002\u901a\u8fc7 <code>getter</code> \u548c <code>setter</code> \u65b9\u6cd5\u6765\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684 <code>get</code> \u548c <code>set</code> \u64cd\u4f5c</p> <p>\u6240\u4ee5\u8bbf\u95ee\u503c\u9700\u8981\u4f7f\u7528 <code>.value</code></p> <pre><code class="language-js">// \u4f2a\u4ee3\u7801\uff0c\u4e0d\u662f\u771f\u6b63\u7684\u5b9e\u73b0\nconst myRef = {\n  _value: 0,\n  get value() {\n    track();\n    return this._value;\n  },\n  set value(newValue) {\n    this._value = newValue;\n    trigger();\n  }\n};</code></pre> <blockquote> <p>\u975e\u539f\u59cb\u503c\u5c06\u901a\u8fc7 <code>reactive()</code> \u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u4ee3\u7406\uff0c\u5373\u5f53 <code>ref</code> \u7684\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c<code>ref()</code> \u4e5f\u4f1a\u5728\u5185\u90e8\u8c03\u7528\u5b83</p> </blockquote> <pre><code class="language-js">import { ref } from &#39;vue&#39;;\n\nconst obj = ref({\n  nested: { count: 0 },\n  arr: [&#39;foo&#39;, &#39;bar&#39;]\n});\n\nfunction mutateDeeply() {\n  // \u4ee5\u4e0b\u90fd\u4f1a\u6309\u7167\u671f\u671b\u5de5\u4f5c\n  obj.value.nested.count++;\n  obj.value.arr.push(&#39;baz&#39;);\n}</code></pre> <h3 id="32-reactive">3.2 reactive</h3> <p><code>reactive()</code> \u662f\u4f7f\u7528 <code>Proxy</code> \u4ee3\u7406\u5bf9\u8c61\u5b9e\u73b0\u54cd\u5e94\u5f0f</p> <p><strong><code>reactive()</code> \u7684\u5c40\u9650\u6027 \u200b</strong></p> <p><strong>\u6709\u9650\u7684\u503c\u7c7b\u578b\uff1a</strong>\u5b83\u53ea\u80fd\u7528\u4e8e\u5bf9\u8c61\u7c7b\u578b (\u5bf9\u8c61\u3001\u6570\u7ec4\u548c\u5982 <code>Map</code>\u3001<code>Set</code> \u8fd9\u6837\u7684\u96c6\u5408\u7c7b\u578b)\u3002\u5b83\u4e0d\u80fd\u6301\u6709\u5982 <code>string</code>\u3001<code>number</code> \u6216 <code>boolean</code> \u8fd9\u6837\u7684\u539f\u59cb\u7c7b\u578b</p> <p><strong>\u4e0d\u80fd\u66ff\u6362\u6574\u4e2a\u5bf9\u8c61\uff1a</strong>\u7531\u4e8e Vue \u7684\u54cd\u5e94\u5f0f\u8ddf\u8e2a\u662f\u901a\u8fc7\u5c5e\u6027\u8bbf\u95ee\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u5fc5\u987b\u59cb\u7ec8\u4fdd\u6301\u5bf9\u54cd\u5e94\u5f0f\u5bf9\u8c61\u7684\u76f8\u540c\u5f15\u7528</p> <pre><code class="language-js">let state = reactive({ count: 0 });\n\n// \u4e0a\u9762\u7684 ({ count: 0 }) \u5f15\u7528\u5c06\u4e0d\u518d\u88ab\u8ffd\u8e2a\n// (\u54cd\u5e94\u6027\u8fde\u63a5\u5df2\u4e22\u5931\uff01)\nstate = reactive({ count: 1 });</code></pre> <p><strong>\u5bf9\u89e3\u6784\u64cd\u4f5c\u4e0d\u53cb\u597d\uff1a</strong>\u5f53\u6211\u4eec\u5c06\u54cd\u5e94\u5f0f\u5bf9\u8c61\u7684\u539f\u59cb\u7c7b\u578b\u5c5e\u6027\u89e3\u6784\u4e3a\u672c\u5730\u53d8\u91cf\u65f6\uff0c\u6216\u8005\u5c06\u8be5\u5c5e\u6027\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\uff0c\u6211\u4eec\u5c06\u4e22\u5931\u54cd\u5e94\u6027\u8fde\u63a5\uff1a</p> <pre><code class="language-js">const state = reactive({ count: 0 });\n\n// \u5f53\u89e3\u6784\u65f6\uff0ccount \u5df2\u7ecf\u4e0e state.count \u65ad\u5f00\u8fde\u63a5\nlet { count } = state;\n// \u4e0d\u4f1a\u5f71\u54cd\u539f\u59cb\u7684 state\ncount++;\n\n// \u8be5\u51fd\u6570\u63a5\u6536\u5230\u7684\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6570\u5b57\n// \u5e76\u4e14\u65e0\u6cd5\u8ffd\u8e2a state.count \u7684\u53d8\u5316\n// \u6211\u4eec\u5fc5\u987b\u4f20\u5165\u6574\u4e2a\u5bf9\u8c61\u4ee5\u4fdd\u6301\u54cd\u5e94\u6027\ncallSomeFunction(state.count);</code></pre> <h2 id="4-\u8ba1\u7b97\u5c5e\u6027">4 \u8ba1\u7b97\u5c5e\u6027</h2> <h3 id="41-\u57fa\u7840">4.1 \u57fa\u7840</h3> <p>\u7ec4\u5408\u5f0f API \u4e2d\uff0c\u4f7f\u7528 <code>computed()</code> \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027</p> <pre><code class="language-vue">&lt;script setup&gt;\nimport { reactive, computed } from &#39;vue&#39;;\n\nconst author = reactive({\n  name: &#39;John Doe&#39;,\n  books: [&#39;Vue 2 - Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39;]\n});\n\n// \u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027 ref\nconst publishedBooksMessage = computed(() =&gt; {\n  return author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39;;\n});\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;p&gt;Has published books:&lt;/p&gt;\n  &lt;span&gt;{{ publishedBooksMessage }}&lt;/span&gt;\n&lt;/template&gt;</code></pre> <h3 id="42-\u8ba1\u7b97\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u533a\u522b">4.2 \u8ba1\u7b97\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u533a\u522b</h3> <p>\u65b9\u6cd5\uff1a</p> <pre><code class="language-vue">&lt;p&gt;{{ calculateBooksMessage() }}&lt;/p&gt;</code></pre> <pre><code class="language-js">function calculateBooksMessage() {\n  return author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39;;\n}</code></pre> <p>\u8ba1\u7b97\u5c5e\u6027\u548c\u65b9\u6cd5\u4e24\u79cd\u65b9\u5f0f\u5728\u7ed3\u679c\u4e0a\u786e\u5b9e\u662f\u5b8c\u5168\u76f8\u540c\u7684</p> <p>\u4f46\u662f\u8ba1\u7b97\u5c5e\u6027\u4ec5\u4f1a\u5728\u5176\u54cd\u5e94\u5f0f\u4f9d\u8d56\u66f4\u65b0\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97</p> <p>\u800c\u65b9\u6cd5\u8c03\u7528\u603b\u662f\u4f1a\u5728\u91cd\u6e32\u67d3\u53d1\u751f\u65f6\u518d\u6b21\u6267\u884c\u51fd\u6570</p> <h3 id="43-\u53ef\u5199\u8ba1\u7b97\u5c5e\u6027">4.3 \u53ef\u5199\u8ba1\u7b97\u5c5e\u6027</h3> <h2 id="5-\u4fa6\u542c\u5668">5 \u4fa6\u542c\u5668</h2> <h3 id="51-\u57fa\u7840">5.1 \u57fa\u7840</h3> <p>\u5728\u7ec4\u5408\u5f0f API \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 <code>watch</code> \u51fd\u6570\u5728\u6bcf\u6b21\u54cd\u5e94\u5f0f\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1\u56de\u8c03\u51fd\u6570</p> <pre><code class="language-vue">&lt;script setup&gt;\nimport { ref, watch } from &#39;vue&#39;;\n\nconst question = ref(&#39;&#39;);\n\n// \u53ef\u4ee5\u76f4\u63a5\u4fa6\u542c\u4e00\u4e2a ref\nwatch(question, async (newQuestion, oldQuestion) =&gt; {\n  if (newQuestion.includes(&#39;?&#39;)) {\n    const res = await fetch(&#39;https://yesno.wtf/api&#39;);\n    // do some thing\n  }\n});\n&lt;/script&gt;</code></pre> <h3 id="52-\u6570\u636e\u6e90\u7c7b\u578b">5.2 \u6570\u636e\u6e90\u7c7b\u578b</h3> <p><code>watch</code> \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u4e0d\u540c\u5f62\u5f0f\u7684\u6570\u636e\u6e90\uff1a\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a <code>ref</code> (\u5305\u62ec\u8ba1\u7b97\u5c5e\u6027)\u3001\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5bf9\u8c61\u3001\u4e00\u4e2a <code>getter</code> \u51fd\u6570\u3001\u6216\u591a\u4e2a\u6570\u636e\u6e90\u7ec4\u6210\u7684\u6570\u7ec4</p> <pre><code class="language-js">const x = ref(0);\nconst y = ref(0);\n\n// \u5355\u4e2a ref\nwatch(x, newX =&gt; {\n  console.log(`x is ${newX}`);\n});\n\n// getter \u51fd\u6570\nwatch(\n  () =&gt; x.value + y.value,\n  sum =&gt; {\n    console.log(`sum of x + y is: ${sum}`);\n  }\n);\n\n// \u591a\u4e2a\u6765\u6e90\u7ec4\u6210\u7684\u6570\u7ec4\nwatch([x, () =&gt; y.value], ([newX, newY]) =&gt; {\n  console.log(`x is ${newX} and y is ${newY}`);\n});</code></pre> <h3 id="53-\u9009\u9879">5.3 \u9009\u9879</h3> <p><code>watch()</code> \u9009\u9879\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570</p> <p>\u5982\u5373\u65f6\u56de\u8c03\u3001\u6df1\u5c42\u4fa6\u542c\u3001\u4e00\u6b21\u6027\u4fa6\u542c</p> <pre><code class="language-js">watch(\n  source,\n  (newValue, oldValue) =&gt; {\n    // do some thing\n  },\n  {\n    deep: true,\n    immediate: true,\n    once: true\n  }\n);</code></pre> <h3 id="54-watcheffect">5.4 watchEffect</h3> <p><code>watchEffect()</code> \u5141\u8bb8\u6211\u4eec\u81ea\u52a8\u8ddf\u8e2a\u56de\u8c03\u7684\u54cd\u5e94\u5f0f\u4f9d\u8d56\u3002\u548c <code>computed</code> \u7c7b\u4f3c</p> <h2 id="6-\u7ec4\u4ef6">6 \u7ec4\u4ef6</h2> <h3 id="61-\u57fa\u7840">6.1 \u57fa\u7840</h3> <ul> <li>\u58f0\u660e props <code>defineProps()</code></li> <li>\u58f0\u660e\u4e8b\u4ef6 <code>defineEmits()</code></li> <li>\u66b4\u9732\u5c5e\u6027\u548c\u65b9\u6cd5 <code>defineExpose()</code></li> </ul> <h3 id="62-v-model">6.2 v-model</h3> <p>\u539f\u7406(\u548c vue2 \u6709\u533a\u522b)\uff1a</p> <ul> <li>\u4e00\u4e2a\u540d\u4e3a <code>modelValue</code> \u7684 prop\uff0c\u672c\u5730 ref \u7684\u503c\u4e0e\u5176\u540c\u6b65</li> <li>\u4e00\u4e2a\u540d\u4e3a <code>update:modelValue</code> \u7684\u4e8b\u4ef6\uff0c\u5f53\u672c\u5730 ref \u7684\u503c\u53d1\u751f\u53d8\u66f4\u65f6\u89e6\u53d1</li> </ul> <pre><code class="language-vue">&lt;script setup&gt;\nconst props = defineProps([&#39;modelValue&#39;]);\nconst emit = defineEmits([&#39;update:modelValue&#39;]);\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;input :value=&quot;modelValue&quot; @input=&quot;emit(&#39;update:modelValue&#39;, $event.target.value)&quot; /&gt;\n&lt;/template&gt;</code></pre> <p><code>defineModel</code> \u662f\u4e00\u4e2a\u4fbf\u5229\u5b8f</p> <pre><code class="language-vue">&lt;script setup&gt;\nconst model = defineModel();\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;input v-model=&quot;model&quot; /&gt;\n&lt;/template&gt;</code></pre> <p>\u591a\u4e2a <code>v-model</code> \u7ed1\u5b9a\uff0c\u53ef\u4ee5\u6307\u5b9a <code>v-model</code> \u540d\u79f0</p> <pre><code class="language-vue">&lt;template&gt;\n  &lt;UserName v-model:first-name=&quot;first&quot; v-model:last-name=&quot;last&quot; /&gt;\n&lt;/template&gt;</code></pre> <pre><code class="language-vue">&lt;script setup&gt;\nconst firstName = defineModel(&#39;firstName&#39;);\nconst lastName = defineModel(&#39;lastName&#39;);\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;\n  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;\n&lt;/template&gt;</code></pre> <h2 id="7-\u7ec4\u5408\u5f0f\u51fd\u6570-composables">7 \u7ec4\u5408\u5f0f\u51fd\u6570 composables</h2> ';e.exports=o}}]);