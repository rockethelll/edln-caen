
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6744, hash: 'c0aff6d65f6152ea0c36dfcdf6650b0753d152e49249cd7b4936e222f1b6f6f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3366, hash: 'c0b843edfab8a0208c7604060306a37bbc990b77e768f8c7827fd8a6b3019bf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28335, hash: 'cbbeebe54c431a5d12452032130a9a0fe4ac737cd22dd25c2b0d3881a93ad0c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OHSNBB4Z.css': {size: 11719, hash: 'BgxtCxT1oLI', text: () => import('./assets-chunks/styles-OHSNBB4Z_css.mjs').then(m => m.default)}
  },
};
