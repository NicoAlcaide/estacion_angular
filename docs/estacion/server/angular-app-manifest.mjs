
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/estacion_angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/estacion_angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23579, hash: 'da456f53e7870e34e19d5f3376d353c921abf36063bfcf45d175017e10b929e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: '1fd1f4263f3445155af5e40968527b11f0f4ae5aaf6d459597b888b2e70aedf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49754, hash: 'daea2866a18a42c3a282ea1e52c24f35449987446071350ec9de86b3507afdae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
