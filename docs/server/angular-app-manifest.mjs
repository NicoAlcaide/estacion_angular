
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
    'index.csr.html': {size: 23571, hash: '1ada74dab18fd5006419ca1097da10378f1fbe3b537b7bb98a4c971291a42ea7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: 'b2f999439606e0fc8109c873b6c2cc9301ca3edb624cc79a0a92c1c7e89f71fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49746, hash: '1ed43d72e9b4e11bd885f07d8b0973d6154127a8a191166ebfdbb9f146ab7635', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
