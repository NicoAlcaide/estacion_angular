
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/estacion/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/estacion"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23571, hash: '938ee683e1d63eb372532fc23c8eb59915933b0c65ab3c22a88e5900a2cc4ac9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: '7d7efb45ecf0c86b92f03599bdb1565a3127a476ab91a762b936d3a91182bbe4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49746, hash: 'b3078e53ca26d1012eb4a5e71c1b13b11dd2e26701c989b21b68b48c2d31a99a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
