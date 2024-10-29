(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/browser/components"],{"7Wcl":function(e,t,o){var n=o("Rxnk"),l=o("GwqA"),d=o("GImX"),c=n(l),s=n(d),i='<h1 id="web-components">web components</h1> <h2 id="1-\u6982\u5ff5">1 \u6982\u5ff5</h2> <p>\u6d4f\u89c8\u5668\u5df2\u7ecf\u539f\u751f\u652f\u6301\u4e86\u300cWeb Components\u300d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4e0d\u7528\u518d\u81ea\u5df1\u53bb\u6a21\u62df\u7ec4\u4ef6\u5316\u7684\u7ed3\u6784\u4e86\u3002</p> <p><strong>\u7ec4\u4ef6\u5316\u67b6\u6784\uff1a</strong></p> <ul> <li><strong>Custom elements</strong> \u2014\u2014 \u7528\u4e8e\u81ea\u5b9a\u4e49 HTML \u5143\u7d20</li> <li><strong>Shadow DOM</strong> \u2014\u2014 \u4e3a\u7ec4\u4ef6\u521b\u5efa\u5185\u90e8 DOM\uff0c\u5b83\u5bf9\u5916\u90e8\u662f\u4e0d\u53ef\u89c1\u7684</li> <li><strong>CSS Scoping</strong> \u2014\u2014 \u7533\u660e\u4ec5\u5e94\u7528\u4e8e\u7ec4\u4ef6\u7684 Shadow DOM \u5185\u7684\u6837\u5f0f</li> <li><strong>Event retargeting</strong> \u4ee5\u53ca\u66f4\u591a\u7684\u5c0f\u4e1c\u897f\uff0c\u8ba9\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u66f4\u9002\u7528\u4e8e\u5f00\u53d1\u5de5\u4f5c</li> </ul> <h2 id="2-custom-elements">2 Custom elements</h2> <h3 id="21-\u6982\u8ff0">2.1 \u6982\u8ff0</h3> <p>\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63cf\u8ff0\u5e26\u6709\u81ea\u5df1\u7684\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u4e8b\u4ef6\u7b49\u7684\u7c7b\u6765\u521b\u5efa\u81ea\u5b9a\u4e49 HTML \u5143\u7d20</p> <p>\u5728 custom elements \uff08\u81ea\u5b9a\u4e49\u6807\u7b7e\uff09\u5b9a\u4e49\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u548c HTML \u7684\u5185\u5efa\u6807\u7b7e<strong>\u4e00\u540c\u4f7f\u7528</strong></p> <p>\u6211\u4eec\u53ef\u4ee5\u628a\u4e0a\u8ff0\u7684\u6807\u7b7e\u5b9a\u4e49\u4e3a\u7279\u6b8a\u7684\u7c7b\uff0c\u7136\u540e\u4f7f\u7528\u5b83\u4eec\uff0c\u5c31\u597d\u50cf\u5b83\u4eec\u672c\u6765\u5c31\u662f HTML \u7684\u4e00\u90e8\u5206\u4e00\u6837</p> <p><strong>Custom elements \u6709\u4e24\u79cd\uff1a</strong></p> <ul> <li><code>Autonomous custom elements \uff08\u81ea\u4e3b\u81ea\u5b9a\u4e49\u6807\u7b7e\uff09</code> \u2014\u2014 \u201c\u5168\u65b0\u7684\u201d \u5143\u7d20, \u7ee7\u627f\u81ea <code>HTMLElement</code> \u62bd\u8c61\u7c7b</li> <li><code>Customized built-in elements \uff08\u81ea\u5b9a\u4e49\u5185\u5efa\u5143\u7d20\uff09</code> \u2014\u2014 \u7ee7\u627f\u5185\u5efa\u7684 HTML \u5143\u7d20\uff0c\u6bd4\u5982\u81ea\u5b9a\u4e49 <code>HTMLButtonElement</code> \u7b49</li> </ul> <p>\u5728\u521b\u5efa custom elements \u7684\u65f6\u5019\uff0c\u9700\u8981\u544a\u8bc9\u6d4f\u89c8\u5668\u4e00\u4e9b\u7ec6\u8282\uff0c\u5305\u62ec\uff1a\u5982\u4f55\u5c55\u793a\u5b83\uff0c\u4ee5\u53ca\u5728\u6dfb\u52a0\u5143\u7d20\u5230\u9875\u9762\u548c\u5c06\u5176\u4ece\u9875\u9762\u79fb\u9664\u7684\u65f6\u5019\u9700\u8981\u505a\u4ec0\u4e48\uff0c\u7b49\u7b49</p> <p>\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u51e0\u4e2a\u7279\u6b8a\u65b9\u6cd5\u7684\u7c7b\uff0c\u6211\u4eec\u53ef\u4ee5\u5b8c\u6210\u8fd9\u4ef6\u4e8b</p> <p><strong>\u5982\u4f55\u521b\u5efa\uff1a</strong></p> <pre><code class="language-js">class MyElement extends HTMLElement {\n  constructor() {\n    super();\n    // \u5143\u7d20\u5728\u8fd9\u91cc\u521b\u5efa\n  }\n\n  connectedCallback() {\n    // \u5728\u5143\u7d20\u88ab\u6dfb\u52a0\u5230\u6587\u6863\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\n    //\uff08\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u88ab\u53cd\u590d\u6dfb\u52a0\u5230\u6587\u6863\uff0f\u79fb\u9664\u6587\u6863\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u88ab\u591a\u6b21\u8c03\u7528\uff09\n  }\n\n  disconnectedCallback() {\n    // \u5728\u5143\u7d20\u4ece\u6587\u6863\u79fb\u9664\u7684\u65f6\u5019\uff0c\u6d4f\u89c8\u5668\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\n    // \uff08\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u88ab\u53cd\u590d\u6dfb\u52a0\u5230\u6587\u6863\uff0f\u79fb\u9664\u6587\u6863\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u88ab\u591a\u6b21\u8c03\u7528\uff09\n  }\n\n  static get observedAttributes() {\n    return [\n      /* \u5c5e\u6027\u6570\u7ec4\uff0c\u8fd9\u4e9b\u5c5e\u6027\u7684\u53d8\u5316\u4f1a\u88ab\u76d1\u89c6 */\n    ];\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    // \u5f53\u4e0a\u9762\u6570\u7ec4\u4e2d\u7684\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u88ab\u8c03\u7528\n  }\n\n  adoptedCallback() {\n    // \u5728\u5143\u7d20\u88ab\u79fb\u52a8\u5230\u65b0\u7684\u6587\u6863\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u88ab\u8c03\u7528\n    // \uff08document.adoptNode \u4f1a\u7528\u5230, \u975e\u5e38\u5c11\u89c1\uff09\n  }\n\n  // \u8fd8\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u5143\u7d20\u65b9\u6cd5\u548c\u5c5e\u6027\n}</code></pre> <p>\u5728\u7533\u660e\u4e86\u4e0a\u9762\u51e0\u4e2a\u65b9\u6cd5\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u518c\u5143\u7d20\uff1a</p> <pre><code class="language-js">// \u8ba9\u6d4f\u89c8\u5668\u77e5\u9053\u6211\u4eec\u65b0\u5b9a\u4e49\u7684\u7c7b\u662f\u4e3a &lt;my-element&gt; \u670d\u52a1\u7684\ncustomElements.define(&#39;my-element&#39;, MyElement);</code></pre> <p>\u73b0\u5728\u5f53\u4efb\u4f55\u5e26\u6709 <code>&lt;my-element&gt;</code> \u6807\u7b7e\u7684\u5143\u7d20\u88ab\u521b\u5efa\u7684\u65f6\u5019\uff0c\u4e00\u4e2a <code>MyElement</code> \u7684\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\u524d\u9762\u63d0\u5230\u7684\u65b9\u6cd5\u4e5f\u4f1a\u88ab\u8c03\u7528\u3002\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 <code>document.createElement(&#39;my-element&#39;)</code> \u5728 JavaScript \u91cc\u521b\u5efa\u5143\u7d20</p> <blockquote> <p><strong>Custom element \u540d\u79f0\u5fc5\u987b\u5305\u62ec\u4e00\u4e2a\u77ed\u6a2a\u7ebf -</strong></p> <p>\u6bd4\u5982 <code>my-element</code> \u548c <code>super-button</code> \u90fd\u662f\u6709\u6548\u7684\u5143\u7d20\u540d\uff0c\u4f46 <code>myelement</code> \u5e76\u4e0d\u662f</p> <p>\u8fd9\u662f\u4e3a\u4e86\u786e\u4fdd custom element \u548c\u5185\u5efa HTML \u5143\u7d20\u4e4b\u95f4\u4e0d\u4f1a\u53d1\u751f\u547d\u540d\u51b2\u7a81</p> </blockquote> <h3 id="22-\u5b9e\u4f8b">2.2 \u5b9e\u4f8b</h3> <p>\u4e3e\u4e2a\u4f8b\u5b50\uff0cHTML \u91cc\u9762\u5df2\u7ecf\u6709 <code>&lt;time&gt;</code> \u5143\u7d20\u4e86\uff0c\u7528\u4e8e\u663e\u793a\u65e5\u671f\uff0f\u65f6\u95f4\u3002\u4f46\u662f\u8fd9\u4e2a\u6807\u7b7e\u672c\u8eab\u5e76\u4e0d\u4f1a\u5bf9\u65f6\u95f4\u8fdb\u884c\u4efb\u4f55\u683c\u5f0f\u5316\u5904\u7406</p> <p>\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u53ef\u4ee5\u5c55\u793a\u9002\u7528\u4e8e\u5f53\u524d\u6d4f\u89c8\u5668\u8bed\u8a00\u7684\u65f6\u95f4\u683c\u5f0f\u7684 <code>&lt;time-formatted&gt;</code> \u5143\u7d20\uff1a</p> <pre><code class="language-html">&lt;script&gt;\n  class TimeFormatted extends HTMLElement {\n    // (1)\n\n    connectedCallback() {\n      let date = new Date(this.getAttribute(&#39;datetime&#39;) || Date.now());\n\n      this.innerHTML = new Intl.DateTimeFormat(&#39;default&#39;, {\n        year: this.getAttribute(&#39;year&#39;) || undefined,\n        month: this.getAttribute(&#39;month&#39;) || undefined,\n        day: this.getAttribute(&#39;day&#39;) || undefined,\n        hour: this.getAttribute(&#39;hour&#39;) || undefined,\n        minute: this.getAttribute(&#39;minute&#39;) || undefined,\n        second: this.getAttribute(&#39;second&#39;) || undefined,\n        timeZoneName: this.getAttribute(&#39;time-zone-name&#39;) || undefined\n      }).format(date);\n    }\n  }\n\n  customElements.define(&#39;time-formatted&#39;, TimeFormatted); // (2)\n&lt;/script&gt;\n\n&lt;!-- (3) --&gt;\n&lt;time-formatted\n  datetime=&quot;2019-12-01&quot;\n  year=&quot;numeric&quot;\n  month=&quot;long&quot;\n  day=&quot;numeric&quot;\n  hour=&quot;numeric&quot;\n  minute=&quot;numeric&quot;\n  second=&quot;numeric&quot;\n  time-zone-name=&quot;short&quot;\n&gt;&lt;/time-formatted&gt;</code></pre> <ol> <li>\u8fd9\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5 <code>connectedCallback()</code> \u2014\u2014 \u5728 <code>&lt;time-formatted&gt;</code> \u5143\u7d20\u88ab\u6dfb\u52a0\u5230\u9875\u9762\u7684\u65f6\u5019\uff0c\u6d4f\u89c8\u5668\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff08\u6216\u8005\u5f53 HTML \u89e3\u6790\u5668\u68c0\u6d4b\u5230\u5b83\u7684\u65f6\u5019\uff09\uff0c\u5b83\u4f7f\u7528\u4e86\u5185\u5efa\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u5de5\u5177 <code>Intl.DateTimeFormat</code>\uff0c\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u975e\u5e38\u597d\u5730\u5c55\u793a\u683c\u5f0f\u5316\u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u5728\u5404\u6d4f\u89c8\u5668\u4e2d\u517c\u5bb9\u6027\u90fd\u975e\u5e38\u597d</li> <li>\u6211\u4eec\u9700\u8981\u901a\u8fc7 <code>customElements.define(tag, class)</code> \u6765\u6ce8\u518c\u8fd9\u4e2a\u65b0\u5143\u7d20</li> <li>\u63a5\u4e0b\u6765\u5728\u4efb\u4f55\u5730\u65b9\u6211\u4eec\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b0\u5143\u7d20\u4e86</li> </ol> <blockquote> <p><strong>Custom elements \u5347\u7ea7</strong></p> <p>\u5982\u679c\u6d4f\u89c8\u5668\u5728 <code>customElements.define</code> \u4e4b\u524d\u7684\u4efb\u4f55\u5730\u65b9\u89c1\u5230\u4e86 <code>&lt;time-formatted&gt;</code> \u5143\u7d20\uff0c\u5e76\u4e0d\u4f1a\u62a5\u9519\u3002\u4f46\u4f1a\u628a\u8fd9\u4e2a\u5143\u7d20\u5f53\u4f5c\u672a\u77e5\u5143\u7d20\uff0c\u5c31\u50cf\u4efb\u4f55\u975e\u6807\u51c6\u6807\u7b7e\u4e00\u6837</p> <p><code>:not(:defined)</code> CSS \u9009\u62e9\u5668\u53ef\u4ee5\u5bf9\u8fd9\u6837\u300c\u672a\u5b9a\u4e49\u300d\u7684\u5143\u7d20\u52a0\u4e0a\u6837\u5f0f</p> <p>\u5f53 <code>customElement.define</code> \u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5b83\u4eec\u88ab\u300c\u5347\u7ea7\u300d\u4e86\uff1a\u4e00\u4e2a\u65b0\u7684 <code>TimeFormatted</code> \u5143\u7d20\u4e3a\u6bcf\u4e00\u4e2a\u6807\u7b7e\u521b\u5efa\u4e86\uff0c\u5e76\u4e14 <code>connectedCallback</code> \u88ab\u8c03\u7528\u3002\u5b83\u4eec\u53d8\u6210\u4e86 <code>:defined</code></p> <p><strong>\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u66f4\u591a\u7684\u81ea\u5b9a\u4e49\u6807\u7b7e\u7684\u4fe1\u606f\uff1a</strong></p> <ul> <li><code>customElements.get(name)</code> \u2014\u2014 \u8fd4\u56de\u6307\u5b9a custom element <code>name</code> \u7684\u7c7b</li> <li><code>customElements.whenDefined(name)</code> \u2014\u2014 \u8fd4\u56de\u4e00\u4e2a <code>promise</code>\uff0c\u5c06\u4f1a\u5728\u8fd9\u4e2a\u5177\u6709\u7ed9\u5b9a <code>name</code> \u7684 custom element \u53d8\u4e3a\u5df2\u5b9a\u4e49\u72b6\u6001\u7684\u65f6\u5019 resolve\uff08\u4e0d\u5e26\u503c\uff09</li> </ul> </blockquote> <blockquote> <p><strong>\u5728 <code>connectedCallback</code> \u4e2d\u6e32\u67d3\uff0c\u800c\u4e0d\u662f <code>constructor</code> \u4e2d</strong></p> <p>\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5143\u7d20\u91cc\u9762\u7684\u5185\u5bb9\u662f\u5728 <code>connectedCallback</code> \u4e2d\u6e32\u67d3\uff08\u521b\u5efa\uff09\u7684</p> <p>\u4e3a\u4ec0\u4e48\u4e0d\u5728 <code>constructor</code> \u4e2d\u6e32\u67d3\uff1f</p> <p>\u539f\u56e0\u5f88\u7b80\u5355\uff1a\u5728 <code>constructor</code> \u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u8fd8\u4e3a\u65f6\u8fc7\u65e9\u3002\u867d\u7136\u8fd9\u4e2a\u5143\u7d20\u5b9e\u4f8b\u5df2\u7ecf\u88ab\u521b\u5efa\u4e86\uff0c\u4f46\u8fd8\u6ca1\u6709\u63d2\u5165\u9875\u9762\u3002\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u6d4f\u89c8\u5668\u8fd8\u6ca1\u6709\u5904\u7406\uff0f\u521b\u5efa\u5143\u7d20\u5c5e\u6027\uff1a\u8c03\u7528 <code>getAttribute</code> \u5c06\u4f1a\u5f97\u5230 <code>null</code>\u3002\u6240\u4ee5\u6211\u4eec\u5e76\u4e0d\u80fd\u5728\u90a3\u91cc\u6e32\u67d3\u5143\u7d20</p> <p>\u800c\u4e14\uff0c\u8fd9\u6837\u4f5c\u5bf9\u4e8e\u6027\u80fd\u66f4\u597d \u2014\u2014 \u63a8\u8fdf\u6e32\u67d3\u76f4\u5230\u771f\u6b63\u9700\u8981\u7684\u65f6\u5019</p> <p>\u5728\u5143\u7d20\u88ab\u6dfb\u52a0\u5230\u6587\u6863\u7684\u65f6\u5019\uff0c\u5b83\u7684 <code>connectedCallback</code> \u65b9\u6cd5\u4f1a\u88ab\u8c03\u7528\u3002\u8fd9\u4e2a\u5143\u7d20\u4e0d\u4ec5\u4ec5\u662f\u88ab\u6dfb\u52a0\u4e3a\u4e86\u53e6\u4e00\u4e2a\u5143\u7d20\u7684\u5b50\u5143\u7d20\uff0c\u540c\u6837\u4e5f\u6210\u4e3a\u4e86\u9875\u9762\u7684\u4e00\u90e8\u5206\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u5206\u79bb\u7684 DOM\uff0c\u521b\u5efa\u5143\u7d20\u5e76\u4e14\u8ba9\u5b83\u4eec\u4e3a\u4e4b\u540e\u7684\u4f7f\u7528\u51c6\u5907\u597d\u3002\u5b83\u4eec\u53ea\u6709\u5728\u63d2\u5165\u9875\u9762\u7684\u65f6\u5019\u624d\u4f1a\u771f\u7684\u88ab\u6e32\u67d3</p> </blockquote> <h3 id="23-\u76d1\u89c6\u5c5e\u6027">2.3 \u76d1\u89c6\u5c5e\u6027</h3> <p>\u4e0a\u9762\u7684 <code>&lt;time-formatted&gt;</code> \u5b9e\u73b0\u4e2d\uff0c\u5728\u5143\u7d20\u6e32\u67d3\u4ee5\u540e\uff0c\u540e\u7eed\u7684\u5c5e\u6027\u53d8\u5316\u5e76\u4e0d\u4f1a\u5e26\u6765\u4efb\u4f55\u5f71\u54cd</p> <p>\u4e3a\u4e86\u76d1\u89c6\u8fd9\u4e9b\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 <code>observedAttributes()</code> static getter \u4e2d\u63d0\u4f9b\u5c5e\u6027\u5217\u8868\u3002\u5f53\u8fd9\u4e9b\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c<code>attributeChangedCallback</code> \u4f1a\u88ab\u8c03\u7528\u3002\u51fa\u4e8e\u6027\u80fd\u4f18\u5316\u7684\u8003\u8651\uff0c\u5176\u4ed6\u5c5e\u6027\u53d8\u5316\u7684\u65f6\u5019\u5e76\u4e0d\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u56de\u8c03\u65b9\u6cd5</p> <p>\u4ee5\u4e0b\u662f <code>&lt;time-formatted&gt;</code> \u7684\u65b0\u7248\u672c\uff0c\u5b83\u4f1a\u5728\u5c5e\u6027\u53d8\u5316\u7684\u65f6\u5019\u81ea\u52a8\u66f4\u65b0\uff1a</p> <pre><code class="language-html">&lt;script&gt;\n  class TimeFormatted extends HTMLElement {\n    render() {\n      // (1)\n      let date = new Date(this.getAttribute(&#39;datetime&#39;) || Date.now());\n\n      this.innerHTML = new Intl.DateTimeFormat(&#39;default&#39;, {\n        year: this.getAttribute(&#39;year&#39;) || undefined,\n        month: this.getAttribute(&#39;month&#39;) || undefined,\n        day: this.getAttribute(&#39;day&#39;) || undefined,\n        hour: this.getAttribute(&#39;hour&#39;) || undefined,\n        minute: this.getAttribute(&#39;minute&#39;) || undefined,\n        second: this.getAttribute(&#39;second&#39;) || undefined,\n        timeZoneName: this.getAttribute(&#39;time-zone-name&#39;) || undefined\n      }).format(date);\n    }\n\n    connectedCallback() {\n      // (2)\n      if (!this.rendered) {\n        this.render();\n        this.rendered = true;\n      }\n    }\n\n    static get observedAttributes() {\n      // (3)\n      return [&#39;datetime&#39;, &#39;year&#39;, &#39;month&#39;, &#39;day&#39;, &#39;hour&#39;, &#39;minute&#39;, &#39;second&#39;, &#39;time-zone-name&#39;];\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n      // (4)\n      this.render();\n    }\n  }\n\n  customElements.define(&#39;time-formatted&#39;, TimeFormatted);\n&lt;/script&gt;\n\n&lt;time-formatted id=&quot;elem&quot; hour=&quot;numeric&quot; minute=&quot;numeric&quot; second=&quot;numeric&quot;&gt;&lt;/time-formatted&gt;\n\n&lt;script&gt;\n  setInterval(() =&gt; elem.setAttribute(&#39;datetime&#39;, new Date()), 1000); // (5)\n&lt;/script&gt;</code></pre> <ul> <li>\u6e32\u67d3\u903b\u8f91\u88ab\u79fb\u52a8\u5230\u4e86 <code>render()</code> \u8fd9\u4e2a\u8f85\u52a9\u65b9\u6cd5\u91cc\u9762</li> <li>\u8fd9\u4e2a\u65b9\u6cd5\u5728\u5143\u7d20\u88ab\u63d2\u5165\u5230\u9875\u9762\u7684\u65f6\u5019\u8c03\u7528</li> <li><code>attributeChangedCallback</code> \u5728 <code>observedAttributes()</code> \u91cc\u7684\u5c5e\u6027\u6539\u53d8\u7684\u65f6\u5019\u88ab\u8c03\u7528</li> <li>\u7136\u540e\u91cd\u6e32\u67d3\u5143\u7d20</li> </ul> <h3 id="24-\u6e32\u67d3\u987a\u5e8f">2.4 \u6e32\u67d3\u987a\u5e8f</h3> <p>\u5728 HTML \u89e3\u6790\u5668\u6784\u5efa DOM \u7684\u65f6\u5019\uff0c\u4f1a\u6309\u7167\u5148\u540e\u987a\u5e8f\u5904\u7406\u5143\u7d20\uff0c\u5148\u5904\u7406\u7236\u7ea7\u5143\u7d20\u518d\u5904\u7406\u5b50\u5143\u7d20\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u6709 <code>&lt;outer&gt;&lt;inner&gt;&lt;/inner&gt;&lt;/outer&gt;</code>\uff0c\u90a3\u4e48 <code>&lt;outer&gt;</code> \u5143\u7d20\u4f1a\u9996\u5148\u88ab\u521b\u5efa\u5e76\u63a5\u5165\u5230 DOM\uff0c\u7136\u540e\u624d\u662f <code>&lt;inner&gt;</code></p> <p>\u8fd9\u5bf9 custom elements \u4ea7\u751f\u4e86\u91cd\u8981\u5f71\u54cd</p> <p>\u6bd4\u5982\uff0c\u5982\u679c\u4e00\u4e2a custom element \u60f3\u8981\u5728 <code>connectedCallback</code> \u5185\u8bbf\u95ee <code>innerHTML</code>\uff0c\u5b83\u4ec0\u4e48\u4e5f\u62ff\u4e0d\u5230:</p> <pre><code class="language-html">&lt;script&gt;\n  customElements.define(\n    &#39;user-info&#39;,\n    class extends HTMLElement {\n      connectedCallback() {\n        alert(this.innerHTML); // empty (*)\n      }\n    }\n  );\n&lt;/script&gt;\n\n&lt;user-info&gt;John&lt;/user-info&gt;</code></pre> <p>\u8fd0\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c<code>alert</code> \u51fa\u6765\u7684\u5185\u5bb9\u662f\u7a7a\u7684</p> <p>\u8fd9\u6b63\u662f\u56e0\u4e3a\u5728\u90a3\u4e2a\u9636\u6bb5\uff0c\u5b50\u5143\u7d20\u8fd8\u4e0d\u5b58\u5728\uff0cDOM \u8fd8\u6ca1\u6709\u5b8c\u6210\u6784\u5efa\u3002HTML \u89e3\u6790\u5668\u5148\u8fde\u63a5 custom element <user-info>\uff0c\u7136\u540e\u518d\u5904\u7406\u5b50\u5143\u7d20\uff0c\u4f46\u662f\u90a3\u65f6\u5019\u5b50\u5143\u7d20\u8fd8\u5e76\u6ca1\u6709\u52a0\u8f7d\u4e0a\u3002</user-info></p> <p>\u5982\u679c\u6211\u4eec\u8981\u7ed9 custom element \u4f20\u5165\u4fe1\u606f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5143\u7d20\u5c5e\u6027\u3002\u5b83\u4eec\u662f\u5373\u65f6\u751f\u6548\u7684</p> <p>\u6216\u8005\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u5b50\u5143\u7d20\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5ef6\u8fdf\u65f6\u95f4\u4e3a\u96f6\u7684 <code>setTimeout</code> \u6765\u63a8\u8fdf\u8bbf\u95ee\u5b50\u5143\u7d20</p> <p>\u8fd9\u6837\u662f\u53ef\u884c\u7684\uff1a</p> <pre><code class="language-html">&lt;script&gt;\n  customElements.define(\n    &#39;user-info&#39;,\n    class extends HTMLElement {\n      connectedCallback() {\n        setTimeout(() =&gt; alert(this.innerHTML)); // John (*)\n      }\n    }\n  );\n&lt;/script&gt;\n\n&lt;user-info&gt;John&lt;/user-info&gt;</code></pre> <p>\u53e6\u4e00\u65b9\u9762\uff0c\u8fd9\u4e2a\u65b9\u6848\u5e76\u4e0d\u662f\u5b8c\u7f8e\u7684\u3002\u5982\u679c\u5d4c\u5957\u7684 custom element \u540c\u6837\u4f7f\u7528\u4e86 <code>setTimeout</code> \u6765\u521d\u59cb\u5316\u81ea\u8eab\uff0c\u90a3\u4e48\u5b83\u4eec\u4f1a\u6309\u7167\u5148\u540e\u987a\u5e8f\u6267\u884c\uff1a\u5916\u5c42\u7684 <code>setTimeout</code> \u9996\u5148\u89e6\u53d1\uff0c\u7136\u540e\u624d\u662f\u5185\u5c42\u7684</p> <p>\u8fd9\u6837\u5916\u5c42\u5143\u7d20\u8fd8\u662f\u65e9\u4e8e\u5185\u5c42\u5143\u7d20\u7ed3\u675f\u521d\u59cb\u5316</p> <p>\u8ba9\u6211\u4eec\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\uff1a</p> <pre><code class="language-html">&lt;script&gt;\n  customElements.define(\n    &#39;user-info&#39;,\n    class extends HTMLElement {\n      connectedCallback() {\n        alert(`${this.id} \u5df2\u8fde\u63a5\u3002`);\n        setTimeout(() =&gt; alert(`${this.id} \u521d\u59cb\u5316\u5b8c\u6210\u3002`));\n      }\n    }\n  );\n&lt;/script&gt;\n\n&lt;user-info id=&quot;outer&quot;&gt;\n  &lt;user-info id=&quot;inner&quot;&gt;&lt;/user-info&gt;\n&lt;/user-info&gt;</code></pre> <p>\u8f93\u51fa\u987a\u5e8f\uff1a</p> <pre><code>outer \u5df2\u8fde\u63a5\u3002\ninner \u5df2\u8fde\u63a5\u3002\nouter \u521d\u59cb\u5316\u5b8c\u6210\u3002\ninner \u521d\u59cb\u5316\u5b8c\u6210\u3002</code></pre><p>\u6211\u4eec\u53ef\u4ee5\u5f88\u660e\u663e\u5730\u770b\u5230\u5916\u5c42\u5143\u7d20\u5e76\u6ca1\u6709\u7b49\u5f85\u5185\u5c42\u5143\u7d20</p> <blockquote> <p>\u5e76\u6ca1\u6709\u4efb\u4f55\u5185\u5efa\u7684\u56de\u8c03\u65b9\u6cd5\u53ef\u4ee5\u5728\u5d4c\u5957\u5143\u7d20\u6e32\u67d3\u597d\u4e4b\u540e\u901a\u77e5\u6211\u4eec\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u8fd9\u6837\u7684\u56de\u8c03\u3002\u6bd4\u5982\uff0c\u5185\u5c42\u5143\u7d20\u53ef\u4ee5\u5206\u6d3e\u50cf <code>initialized</code> \u8fd9\u6837\u7684\u4e8b\u4ef6\uff0c\u540c\u65f6\u5916\u5c42\u7684\u5143\u7d20\u76d1\u542c\u8fd9\u6837\u7684\u4e8b\u4ef6\u5e76\u505a\u51fa\u54cd\u5e94</p> </blockquote> <h3 id="25-customized-built-in-elements">2.5 Customized built-in elements</h3> <p>\u6211\u4eec\u521b\u5efa\u7684 <code>&lt;time-formatted&gt;</code> \u8fd9\u4e9b\u65b0\u5143\u7d20\uff0c\u5e76\u6ca1\u6709\u4efb\u4f55\u76f8\u5173\u7684\u8bed\u4e49\u3002\u641c\u7d22\u5f15\u64ce\u5e76\u4e0d\u77e5\u6653\u5b83\u4eec\u7684\u5b58\u5728\uff0c\u540c\u65f6\u65e0\u969c\u788d\u8bbe\u5907\u4e5f\u65e0\u6cd5\u5904\u7406\u5b83\u4eec</p> <p>\u4f46\u4e0a\u8ff0\u4e24\u70b9\u540c\u6837\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u6bd4\u5982\uff0c\u641c\u7d22\u5f15\u64ce\u4f1a\u5bf9\u8fd9\u4e9b\u4e8b\u60c5\u611f\u5174\u8da3\uff0c\u6bd4\u5982\u6211\u4eec\u771f\u7684\u5c55\u793a\u4e86\u65f6\u95f4\u3002\u6216\u8005\u5982\u679c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7279\u522b\u7684\u6309\u94ae\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u590d\u7528\u5df2\u6709\u7684 <code>&lt;button&gt;</code> \u529f\u80fd\u5462\uff1f</p> <p>\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u5185\u5efa\u5143\u7d20\u7684\u7c7b\u6765\u6269\u5c55\u548c\u5b9a\u5236\u5b83\u4eec</p> <p>\u6bd4\u5982\uff0c\u6309\u94ae\u662f <code>HTMLButtonElement</code> \u7684\u5b9e\u4f8b</p> <pre><code class="language-html">&lt;script&gt;\n  // \u8fd9\u4e2a\u6309\u94ae\u5728\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u8bf4 &quot;hello&quot;\n\n  // \u7c7b\u7ee7\u627f\u81ea HTMLButtonElement\n  class HelloButton extends HTMLButtonElement {\n    constructor() {\n      super();\n      this.addEventListener(&#39;click&#39;, () =&gt; alert(&#39;Hello!&#39;));\n    }\n  }\n\n  // \u7ed9 customElements.define \u63d0\u4f9b\u5b9a\u4e49\u6807\u7b7e\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\n  // \u8fd9\u4e00\u6b65\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u6807\u7b7e\u4f1a\u5171\u4eab\u540c\u4e00\u4e2a\u7c7b\n  customElements.define(&#39;hello-button&#39;, HelloButton, { extends: &#39;button&#39; });\n&lt;/script&gt;\n\n&lt;!-- \u63d2\u5165\u4e00\u4e2a\u666e\u901a\u7684 &lt;button&gt; \u6807\u7b7e\uff0c\u4f46\u6dfb\u52a0 is=&quot;hello-button&quot; \u5230\u8fd9\u4e2a\u5143\u7d20\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684 custom element --&gt;\n&lt;button is=&quot;hello-button&quot;&gt;Click me&lt;/button&gt;\n\n&lt;button is=&quot;hello-button&quot; disabled&gt;Disabled&lt;/button&gt;</code></pre> <p>\u6211\u4eec\u65b0\u5b9a\u4e49\u7684\u6309\u94ae\u7ee7\u627f\u4e86\u5185\u5efa\u6309\u94ae\uff0c\u6240\u4ee5\u5b83\u62e5\u6709\u548c\u5185\u5efa\u6309\u94ae\u76f8\u540c\u7684\u6837\u5f0f\u548c\u6807\u51c6\u7279\u6027\uff0c\u6bd4\u5982 <code>disabled</code> \u5c5e\u6027</p> <p><strong>\u5f15\u7528\u53c2\u8003:</strong></p> <ul> <li>HTML \u73b0\u884c\u6807\u51c6\uff1a <a href="https://html.spec.whatwg.org/#custom-elements">https://html.spec.whatwg.org/#custom-elements</a></li> <li>\u517c\u5bb9\u6027\uff1a <a href="https://caniuse.com/#feat=custom-elements">https://caniuse.com/#feat=custom-elements</a></li> </ul> <h2 id="3-\u5f71\u5b50-dom\uff08shadow-dom\uff09">3 \u5f71\u5b50 DOM\uff08Shadow DOM\uff09</h2> <blockquote> <p>Shadow DOM \u4e3a\u5c01\u88c5\u800c\u751f\u3002\u5b83\u53ef\u4ee5\u8ba9\u4e00\u4e2a\u7ec4\u4ef6\u62e5\u6709\u81ea\u5df1\u7684\u300c\u5f71\u5b50\u300dDOM \u6811\uff0c\u8fd9\u4e2a DOM \u6811\u4e0d\u80fd\u5728\u4e3b\u6587\u6863\u4e2d\u88ab\u4efb\u610f\u8bbf\u95ee\uff0c\u53ef\u80fd\u62e5\u6709\u5c40\u90e8\u6837\u5f0f\u89c4\u5219\uff0c\u8fd8\u6709\u5176\u4ed6\u7279\u6027</p> </blockquote> <h3 id="31-\u5185\u5efa-shadow-dom">3.1 \u5185\u5efa shadow DOM</h3> <p>\u4f60\u662f\u5426\u66fe\u7ecf\u601d\u8003\u8fc7\u590d\u6742\u7684\u6d4f\u89c8\u5668\u63a7\u4ef6\u662f\u5982\u4f55\u88ab\u521b\u5efa\u548c\u6dfb\u52a0\u6837\u5f0f\u7684\uff1f</p> <p>\u6bd4\u5982 <code>&lt;input type=&quot;range&quot;&gt;</code></p> <p>\u6d4f\u89c8\u5668\u5728\u5185\u90e8\u4f7f\u7528 <code>DOM/CSS</code> \u6765\u7ed8\u5236\u5b83\u4eec\u3002\u8fd9\u4e2a DOM \u7ed3\u6784\u4e00\u822c\u6765\u8bf4\u5bf9\u6211\u4eec\u662f\u9690\u85cf\u7684\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u5de5\u5177\u91cc\u9762\u770b\u89c1\u5b83\u3002\u6bd4\u5982\uff0c\u5728 Chrome \u91cc\uff0c\u6211\u4eec\u9700\u8981\u6253\u5f00\u300cShow user agent shadow DOM\u300d\u9009\u9879</p> <p>\u7136\u540e <code>&lt;input type=&quot;range&quot;&gt;</code> \u770b\u8d77\u6765\u4f1a\u50cf\u8fd9\u6837\uff1a</p> <p><img src="'+c+'" alt=""></p> <p>\u4f60\u5728 <code>#shadow-root</code> \u4e0b\u770b\u5230\u7684\u5c31\u662f\u88ab\u79f0\u4e3a\u300cshadow DOM\u300d\u7684\u4e1c\u897f</p> <blockquote> <p>\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u4e00\u822c\u7684 JavaScript \u8c03\u7528\u6216\u8005\u9009\u62e9\u5668\u6765\u83b7\u53d6\u5185\u5efa shadow DOM \u5143\u7d20\u3002\u5b83\u4eec\u4e0d\u662f\u5e38\u89c4\u7684\u5b50\u5143\u7d20\uff0c\u800c\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5c01\u88c5\u624b\u6bb5</p> </blockquote> <h3 id="32-shadow-tree">3.2 Shadow tree</h3> <p>\u4e00\u4e2a DOM \u5143\u7d20\u53ef\u4ee5\u6709\u4ee5\u4e0b\u4e24\u7c7b DOM \u5b50\u6811\uff1a</p> <ul> <li>Light tree\uff08\u5149\u660e\u6811\uff09 \u2014\u2014 \u4e00\u4e2a\u5e38\u89c4 DOM \u5b50\u6811\uff0c\u7531 HTML \u5b50\u5143\u7d20\u7ec4\u6210</li> <li>Shadow tree\uff08\u5f71\u5b50\u6811\uff09 \u2014\u2014 \u4e00\u4e2a\u9690\u85cf\u7684 DOM \u5b50\u6811\uff0c\u4e0d\u5728 HTML \u4e2d\u53cd\u6620\uff0c\u65e0\u6cd5\u88ab\u5bdf\u89c9</li> </ul> <p>\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u540c\u65f6\u6709\u4ee5\u4e0a\u4e24\u79cd\u5b50\u6811\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u53ea\u6e32\u67d3 shadow tree</p> <p>\u5f71\u5b50\u6811\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u5143\u7d20\u4e2d\u88ab\u4f7f\u7528\uff0c<strong>\u5176\u4f5c\u7528\u662f\u9690\u85cf\u7ec4\u4ef6\u5185\u90e8\u7ed3\u6784\u548c\u6dfb\u52a0\u53ea\u5728\u7ec4\u4ef6\u5185\u6709\u6548\u7684\u6837\u5f0f</strong></p> <p>\u6bd4\u5982\uff0c\u8fd9\u4e2a <code>&lt;show-hello&gt;</code> \u5143\u7d20\u5c06\u5b83\u7684\u5185\u90e8 DOM \u9690\u85cf\u5728\u4e86\u5f71\u5b50\u91cc\u9762\uff1a</p> <pre><code class="language-html">&lt;script&gt;\n  customElements.define(\n    &#39;show-hello&#39;,\n    class extends HTMLElement {\n      connectedCallback() {\n        const shadow = this.attachShadow({ mode: &#39;open&#39; });\n        shadow.innerHTML = `&lt;p&gt;\n      Hello, ${this.getAttribute(&#39;name&#39;)}\n    &lt;/p&gt;`;\n      }\n    }\n  );\n&lt;/script&gt;\n\n&lt;show-hello name=&quot;John&quot;&gt;&lt;/show-hello&gt;</code></pre> <p>\u8fd9\u5c31\u662f\u5728 Chrome \u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u770b\u5230\u7684\u6700\u7ec8\u6837\u5b50\uff0c\u6240\u6709\u7684\u5185\u5bb9\u90fd\u5728\u300c#shadow-root\u300d\u4e0b\uff1a</p> <p><img src="'+s+'" alt=""></p> <p>\u8c03\u7528 <code>elem.attachShadow({mode: \u2026})</code> \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a shadow tree</p> <p><strong>\u8fd9\u91cc\u6709\u4e24\u4e2a\u9650\u5236\uff1a</strong></p> <ol> <li>\u5728\u6bcf\u4e2a\u5143\u7d20\u4e2d\uff0c\u6211\u4eec\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a shadow root</li> <li><code>elem</code> \u5fc5\u987b\u662f\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u6216\u8005\u662f\u4ee5\u4e0b\u5143\u7d20\u7684\u5176\u4e2d\u4e00\u4e2a\uff1a\u300carticle\u300d\u3001\u300caside\u300d\u3001\u300cblockquote\u300d\u3001\u300cbody\u300d\u3001\u300cdiv\u300d\u3001\u300cfooter\u300d\u3001\u300ch1\u2026h6\u300d\u3001\u300cheader\u300d\u3001\u300cmain\u300d\u3001\u300cnav\u300d\u3001\u300cp\u300d\u3001\u300csection\u300d\u6216\u8005\u300cspan\u300d\u3002\u5176\u4ed6\u5143\u7d20\uff0c\u6bd4\u5982 <code>&lt;img&gt;</code>\uff0c\u4e0d\u80fd\u5bb9\u7eb3 shadow tree</li> </ol> <p><strong><code>mode</code> \u9009\u9879\u53ef\u4ee5\u8bbe\u5b9a\u5c01\u88c5\u5c42\u7ea7\uff1a</strong></p> <ul> <li><code>open</code> \u2014\u2014 shadow root \u53ef\u4ee5\u901a\u8fc7 <code>elem.shadowRoot</code> \u8bbf\u95ee\u3002\u4efb\u4f55\u4ee3\u7801\u90fd\u53ef\u4ee5\u8bbf\u95ee elem \u7684 shadow tree\u3002</li> <li><code>closed</code> \u2014\u2014 <code>elem.shadowRoot</code> \u6c38\u8fdc\u662f null\u3002\u53ea\u80fd\u901a\u8fc7 <code>attachShadow</code> \u8fd4\u56de\u7684\u6307\u9488\u6765\u8bbf\u95ee shadow DOM\uff08\u5e76\u4e14\u53ef\u80fd\u9690\u85cf\u5728\u4e00\u4e2a class \u4e2d\uff09\u3002\u6d4f\u89c8\u5668\u539f\u751f\u7684 shadow tree\uff0c\u6bd4\u5982 <code>&lt;input type=&quot;range&quot;&gt;</code>\uff0c\u662f\u5c01\u95ed\u7684\u3002\u6ca1\u6709\u4efb\u4f55\u65b9\u6cd5\u53ef\u4ee5\u8bbf\u95ee\u5b83\u4eec</li> </ul> <p><code>attachShadow</code> \u8fd4\u56de\u7684 <code>shadow root</code>\uff0c\u548c\u4efb\u4f55\u5143\u7d20\u4e00\u6837\uff1a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 <code>innerHTML</code> \u6216\u8005 DOM \u65b9\u6cd5\uff0c\u6bd4\u5982 <code>append</code> \u6765\u6269\u5c55\u5b83</p> <p>\u6211\u4eec\u79f0\u6709 shadow root \u7684\u5143\u7d20\u53eb\u505a\u300cshadow tree host\u300d\uff0c\u53ef\u4ee5\u901a\u8fc7 shadow root \u7684 <code>host</code> \u5c5e\u6027\u8bbf\u95ee\uff1a</p> <pre><code class="language-js">// \u5047\u8bbe {mode: &quot;open&quot;}\uff0c\u5426\u5219 elem.shadowRoot \u662f null\nalert(elem.shadowRoot.host === elem); // true</code></pre> <h3 id="33-\u5c01\u88c5">3.3 \u5c01\u88c5</h3> <p>Shadow DOM \u88ab\u975e\u5e38\u660e\u663e\u5730\u548c\u4e3b\u6587\u6863\u5206\u5f00\uff1a</p> <ol> <li>Shadow DOM \u5143\u7d20\u5bf9\u4e8e light DOM \u4e2d\u7684 <code>querySelector</code> \u4e0d\u53ef\u89c1\u3002\u5b9e\u9645\u4e0a\uff0cShadow DOM \u4e2d\u7684\u5143\u7d20\u53ef\u80fd\u4e0e light DOM \u4e2d\u67d0\u4e9b\u5143\u7d20\u7684 id \u51b2\u7a81</li> <li>Shadow DOM \u6709\u81ea\u5df1\u7684\u6837\u5f0f\u3002\u5916\u90e8\u6837\u5f0f\u89c4\u5219\u5728 shadow DOM \u4e2d\u4e0d\u4ea7\u751f\u4f5c\u7528</li> </ol> <pre><code class="language-html">&lt;style&gt;\n  /* \u6587\u6863\u6837\u5f0f\u5bf9 #elem \u5185\u7684 shadow tree \u65e0\u4f5c\u7528 (1) */\n  p {\n    color: red;\n  }\n&lt;/style&gt;\n\n&lt;div id=&quot;elem&quot;&gt;&lt;/div&gt;\n\n&lt;script&gt;\n  elem.attachShadow({ mode: &#39;open&#39; });\n  // shadow tree \u6709\u81ea\u5df1\u7684\u6837\u5f0f (2)\n  elem.shadowRoot.innerHTML = `\n    &lt;style&gt; p { font-weight: bold; } &lt;/style&gt;\n    &lt;p&gt;Hello, John!&lt;/p&gt;\n  `;\n\n  // &lt;p&gt; \u53ea\u5bf9 shadow tree \u91cc\u9762\u7684\u67e5\u8be2\u53ef\u89c1 (3)\n  alert(document.querySelectorAll(&#39;p&#39;).length); // 0\n  alert(elem.shadowRoot.querySelectorAll(&#39;p&#39;).length); // 1\n&lt;/script&gt;</code></pre> <h2 id="4-\u6a21\u677f\u5143\u7d20">4 \u6a21\u677f\u5143\u7d20</h2> <h3 id="41-\u6982\u5ff5">4.1 \u6982\u5ff5</h3> <p>\u5185\u5efa\u7684 <code>&lt;template&gt;</code> \u5143\u7d20\u7528\u6765\u5b58\u50a8 HTML \u6a21\u677f\u3002\u6d4f\u89c8\u5668\u5c06\u5ffd\u7565\u5b83\u7684\u5185\u5bb9\uff0c\u4ec5\u68c0\u67e5\u8bed\u6cd5\u7684\u6709\u6548\u6027\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u5728 JavaScript \u4e2d\u8bbf\u95ee\u548c\u4f7f\u7528\u5b83\u6765\u521b\u5efa\u5176\u4ed6\u5143\u7d20</p> <p>\u4ece\u7406\u8bba\u4e0a\u8bb2\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 HTML \u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u521b\u5efa\u4e0d\u53ef\u89c1\u5143\u7d20\u6765\u50a8\u5b58 HTML \u6a21\u677f</p> <p>\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u7f6e\u4e00\u884c\u8868\u683c <code>&lt;tr&gt;</code> \uff1a</p> <pre><code class="language-html">&lt;template&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Contents&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/template&gt;</code></pre> <p>\u901a\u5e38\uff0c\u5982\u679c\u6211\u4eec\u5728 <code>&lt;tr&gt;</code> \u5185\u653e\u7f6e\u7c7b\u4f3c <code>&lt;div&gt;</code> \u7684\u5143\u7d20\uff0c\u6d4f\u89c8\u5668\u4f1a\u68c0\u6d4b\u5230\u65e0\u6548\u7684 DOM \u7ed3\u6784\u5e76\u5bf9\u5176\u8fdb\u884c\u201c\u4fee\u590d\u201d\uff0c\u7136\u540e\u7528 <code>&lt;table&gt;</code> \u5c01\u95ed <code>&lt;tr&gt;</code>\uff0c\u90a3\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u3002\u800c <code>&lt;template&gt;</code> \u5219\u5b8c\u5168\u4fdd\u7559\u6211\u4eec\u50a8\u5b58\u7684\u5185\u5bb9</p> <p>\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u6837\u5f0f\u548c\u811a\u672c\u653e\u5165 <code>&lt;template&gt;</code> \u5143\u7d20\u4e2d\uff1a</p> <pre><code class="language-html">&lt;template&gt;\n  &lt;style&gt;\n    p {\n      font-weight: bold;\n    }\n  &lt;/style&gt;\n  &lt;script&gt;\n    alert(&#39;Hello&#39;);\n  &lt;/script&gt;\n&lt;/template&gt;</code></pre> <p>\u6d4f\u89c8\u5668\u8ba4\u4e3a <code>&lt;template&gt;</code> \u7684\u5185\u5bb9\u201c\u4e0d\u5728\u6587\u6863\u4e2d\u201d\uff1a\u6837\u5f0f\u4e0d\u4f1a\u88ab\u5e94\u7528\uff0c\u811a\u672c\u4e5f\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c <code>&lt;video autoplay&gt;</code> \u4e5f\u4e0d\u4f1a\u8fd0\u884c\uff0c\u7b49</p> <p>\u5f53\u6211\u4eec\u5c06\u5185\u5bb9\u63d2\u5165\u6587\u6863\u65f6\uff0c\u8be5\u5185\u5bb9\u5c06\u53d8\u4e3a\u6d3b\u52a8\u72b6\u6001\uff08\u5e94\u7528\u6837\u5f0f\uff0c\u8fd0\u884c\u811a\u672c\u7b49\uff09</p> <h3 id="42-\u63d2\u5165\u6a21\u677f">4.2 \u63d2\u5165\u6a21\u677f</h3> <p>\u6a21\u677f\u7684 <code>content</code> \u5c5e\u6027\u53ef\u770b\u4f5c <code>DocumentFragment</code> \u2014\u2014 \u4e00\u79cd\u7279\u6b8a\u7684 DOM \u8282\u70b9</p> <p>\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u666e\u901a\u7684 DOM \u8282\u70b9\uff0c\u9664\u4e86\u5b83\u6709\u4e00\u4e2a\u7279\u6b8a\u5c5e\u6027\uff1a\u5c06\u5176\u63d2\u5165\u67d0\u4e2a\u4f4d\u7f6e\u65f6\uff0c\u4f1a\u88ab\u63d2\u5165\u7684\u5219\u662f\u5176\u5b50\u8282\u70b9</p> <p>\u4f8b\u5982\uff1a</p> <pre><code class="language-html">&lt;template id=&quot;tmpl&quot;&gt;\n  &lt;script&gt;\n    alert(&#39;Hello&#39;);\n  &lt;/script&gt;\n  &lt;div class=&quot;message&quot;&gt;Hello, world!&lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n  let elem = document.createElement(&#39;div&#39;);\n\n  // Clone the template content to reuse it multiple times\n  elem.append(tmpl.content.cloneNode(true));\n\n  document.body.append(elem);\n  // Now the script from &lt;template&gt; runs\n&lt;/script&gt;</code></pre> <p>\u8ba9\u6211\u4eec\u7528 <code>&lt;template&gt;</code> \u91cd\u5199\u4e0a\u4e00\u7ae0\u7684 Shadow DOM \u793a\u4f8b\uff1a</p> <pre><code class="language-html">&lt;template id=&quot;tmpl&quot;&gt;\n  &lt;style&gt;\n    p {\n      font-weight: bold;\n    }\n  &lt;/style&gt;\n  &lt;p id=&quot;message&quot;&gt;&lt;/p&gt;\n&lt;/template&gt;\n\n&lt;div id=&quot;elem&quot;&gt;Click me&lt;/div&gt;\n\n&lt;script&gt;\n  elem.onclick = function() {\n    elem.attachShadow({ mode: &#39;open&#39; });\n\n    elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)\n\n    elem.shadowRoot.getElementById(&#39;message&#39;).innerHTML = &#39;Hello from the shadows!&#39;;\n  };\n&lt;/script&gt;</code></pre> <p><code>tmpl.content</code> \u4f5c\u4e3a <code>DocumentFragment</code> \u514b\u9686\u548c\u63d2\u5165\uff0c\u5b83\u7684\u5b50\u8282\u70b9\uff08<code>&lt;style&gt;</code>\uff0c<code>&lt;p&gt;</code>\uff09\u5c06\u4ee3\u4e3a\u63d2\u5165</p> <p>\u5b83\u4eec\u4f1a\u53d8\u6210\u4e00\u4e2a Shadow DOM\uff1a</p> <pre><code class="language-html">&lt;div id=&quot;elem&quot;&gt;\n  #shadow-root\n  &lt;style&gt;\n    p {\n      font-weight: bold;\n    }\n  &lt;/style&gt;\n  &lt;p id=&quot;message&quot;&gt;&lt;/p&gt;\n&lt;/div&gt;</code></pre> <h2 id="5-shadow-dom-\u63d2\u69fd\uff0c\u7ec4\u6210">5 Shadow DOM \u63d2\u69fd\uff0c\u7ec4\u6210</h2> <h2 id="6-\u7ed9-shadow-dom-\u6dfb\u52a0\u6837\u5f0f">6 \u7ed9 Shadow DOM \u6dfb\u52a0\u6837\u5f0f</h2> <h2 id="7-shadow-dom-\u548c\u4e8b\u4ef6\uff08events\uff09">7 Shadow DOM \u548c\u4e8b\u4ef6\uff08events\uff09</h2> ';e.exports=i}}]);