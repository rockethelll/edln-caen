
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
    'index.csr.html': {size: 7397, hash: '021836d9b815528dbc12dd82eb7b79f2b26468a4634f72cc3204c2644c7c5cc4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3366, hash: 'd90874b8b3a1c2233c4b7b2bfb6cee34c71ed353ac013ff62e738d640defd80a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34280, hash: '48154908d6444f40b2f3843f1800210c41e060c6bfcbdd70671efc48b0786031', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NCWWEV3E.css': {size: 13792, hash: 's9Xt4BF3Pi0', text: () => import('./assets-chunks/styles-NCWWEV3E_css.mjs').then(m => m.default)}
  },
};
