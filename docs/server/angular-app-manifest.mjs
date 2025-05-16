
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
    'index.csr.html': {size: 23571, hash: 'e27869ad6e7b3cfc4f68bfc70cda3926d957b2163037e5e114961e6696e1b9a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: '1399989e26c481dcb173ceaf9fb9e470d26c406019fbda93d78a3e0db684ff9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49751, hash: '460ac948dd62e8e97c416a94748376bba360d3fcbcede5d43ab23b7a71d8a0b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
