
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
    'index.csr.html': {size: 7418, hash: '0ed4987802b05e55ab5abc16db882fbd037b588a55f6e2563f414f7b593c5cde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3387, hash: '0f468b235296431c1a745a68456d773d997cf346b3cdd64225772daa827d82a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34301, hash: 'db3874935fbcdf2c036eeae7e735d82363cef0f5668a2e4c25362ea55af760a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NCWWEV3E.css': {size: 13792, hash: 's9Xt4BF3Pi0', text: () => import('./assets-chunks/styles-NCWWEV3E_css.mjs').then(m => m.default)}
  },
};
