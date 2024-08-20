import hljs from 'highlight.js';

export default async function() {
  const hljs = await import(/* webpackChunkName: "library/highlight" */ 'highlight.js');

  // import 'highlight.js/styles/default.css';
  // import hljs from 'highlight.js/lib/core';
  // import hll_js from 'highlight.js/lib/languages/javascript';
  // import hll_css from 'highlight.js/lib/languages/css';

  // hljs.registerLanguage('javascript', hll_js);
  // hljs.registerLanguage('javascript', hll_css);

  return hljs;
}
