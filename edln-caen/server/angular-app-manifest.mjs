
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
    'index.csr.html': {size: 6744, hash: '40c5c6ca95dcf7f65aced26c205075ea2cccceea75bb4df36383b1a328944537', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3366, hash: '91397ad5a8f5a364c16727b4cf04b5c76f7f67017587f650c3bc045c5a5ef3a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28335, hash: '0fc1ec41b90919bd0b33d839a7dac02c522c9c08deb24ec5b9fcfa51f5b3237c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OHSNBB4Z.css': {size: 11719, hash: 'BgxtCxT1oLI', text: () => import('./assets-chunks/styles-OHSNBB4Z_css.mjs').then(m => m.default)}
  },
};
