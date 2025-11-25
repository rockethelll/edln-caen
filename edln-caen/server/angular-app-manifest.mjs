
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
    'index.csr.html': {size: 7472, hash: '40b6bf8d0fbb1d483ee560796186394cf2e9478daebb13a4199518bdbd39ae58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3387, hash: 'b19d52a00207f6f0a42cc0d0cce64e7a63befbbf39f813e055fe874e663e8c8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34379, hash: '2e7770c28b95e5447cc10aa7ad7541b44125847665f0750c9ec1beb899e33c68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UMBY77A.css': {size: 13976, hash: 'uyZAoXGenN8', text: () => import('./assets-chunks/styles-6UMBY77A_css.mjs').then(m => m.default)}
  },
};
