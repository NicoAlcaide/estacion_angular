
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
    'index.csr.html': {size: 23571, hash: 'a961ebf447e773566ee29c81954ede2974fb3afcbb2892d9c870ca7775d4e6a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: '62145ea90a60f8c366e6ce274d35449397d7fbd3443533b2b1e5ba2cf2dc5a04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49751, hash: '399da9327b69e36a3a85fe9f1677aef8f1b875df0d729cd3907a140ba2d1d854', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
