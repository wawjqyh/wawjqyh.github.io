import { defineConfig } from 'umi';
// import hljs from 'highlight.js';

export default defineConfig({
  title: 'Note Book',
  favicon: '/assets/favicon.ico',
  antd: false,
  dva: false,
  nodeModulesTransform: {
    type: 'none'
  },
  chunks: ['umi', 'app'],
  hash: false,
  inlineLimit: 1,

  dynamicImport: {
    loading: '@/components/Loading'
  },

  copy: ['server'],

  chainWebpack(config) {
    config.optimization.runtimeChunk(false).splitChunks({
      cacheGroups: {
        default: false,
        app: {
          name: 'app',
          chunks: 'async',
          priority: 1,
          test(module: any) {
            let isDoc = /[\\/]docs[\\/]/.test(module.resource);
            return !isDoc;
          }
        },

        library: {
          name: 'library',
          chunks: 'async',
          priority: 2,
          test: /[\\/]node_modules[\\/]/
        }
      }
    });

    // 覆盖自带的 md 配置
    config.module
      .rule('plaintext')
      .test(/\.(txt|text)$/)
      .use('raw-loader')
      .loader(require.resolve('raw-loader'));

    // 解析 md
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader');
    // .options({
    //   highlight(code: any) {
    //     return hljs.highlightAuto(code).value;
    //   }
    // });

    config.optimization.namedChunks(true);
  }
});
