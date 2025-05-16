
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
    'index.csr.html': {size: 23579, hash: 'cec5d5bb66f7e81c24bcc810a3f1144fe1be3b2c0b337394b2242a31dbd46221', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: '33665b5f5e72b6b68c6b861a556c3998bacb164fed5a83627895ea5b1ac9117b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49759, hash: 'bb7211846afc82bd7ac5dfcc2ab74a62fa3b445eccf48df809809f82a8de4240', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
