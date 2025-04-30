
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
    'index.csr.html': {size: 23571, hash: '328691305683b4077de10269229d644740c03d3ea5bbcbf0cc9b5a3c61d81370', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: '01cf77be14a9007b5c724aad67ae2de3ca9c899f2bae6eb385464241c3122867', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49746, hash: '48804ab91b723010c5ae2d4481b865da132fd1d458a9aed81b38a505799f09ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
