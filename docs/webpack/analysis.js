(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/webpack/analysis"],{hR04:function(e,a,p){var n=p("Rxnk"),s=p("Ij6O"),c=p("+Fz4"),l=n(s),i=n(c),o='<h1 id="\u6253\u5305\u5206\u6790">\u6253\u5305\u5206\u6790</h1> <p><a href="https://webpack.docschina.org/guides/code-splitting/#bundle-analysis">\u76f8\u5173\u5de5\u5177</a></p> <h2 id="1-webpack-\u81ea\u5e26">1 webpack \u81ea\u5e26</h2> <p>\u5728\u6253\u5305\u547d\u4ee4\u52a0\u914d\u7f6e\u53c2\u6570</p> <pre><code>webpack --profile --json &gt; stats.json --config ./xxx/webpack.config.js</code></pre><p>\u6253\u5305\u540e\u4f1a\u751f\u6210\u4e00\u4e2a stats.json \u6587\u4ef6\uff0c\u8fd9\u4e2a\u662f\u5bf9\u6253\u5305\u8fc7\u7a0b\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u53ef\u8bfb\u6027\u6bd4\u8f83\u5dee</p> <p>\u9700\u8981\u501f\u52a9\u5de5\u5177\u5206\u6790 <a href="https://webpack.github.io/analyse">https://webpack.github.io/analyse</a></p> <p><img src="'+l+'" alt=""></p> <h2 id="2-webpack-bundle-analyzer">2 webpack-bundle-analyzer</h2> <p>\u4e00\u4e2a webpack \u63d2\u4ef6\uff0c\u5b83\u5c06 bundle \u5185\u5bb9\u5c55\u793a\u4e3a\u4e00\u4e2a\u4fbf\u6377\u7684\u3001\u4ea4\u4e92\u5f0f\u3001\u53ef\u7f29\u653e\u7684\u6811\u72b6\u56fe\u5f62\u5f0f</p> <pre><code class="language-javascript">const BundleAnalyzerPlugin = require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin;\n\nmodule.exports = {\n  plugins: [new BundleAnalyzerPlugin()]\n};</code></pre> <p><img src="'+i+'" alt=""></p> ';e.exports=o}}]);