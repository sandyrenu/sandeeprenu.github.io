
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/sandyrenu/sandeeprenu.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sandyrenu/sandeeprenu.github.io"
  },
  {
    "renderMode": 2,
    "route": "/sandyrenu/sandeeprenu.github.io/about"
  },
  {
    "renderMode": 2,
    "route": "/sandyrenu/sandeeprenu.github.io/skills"
  },
  {
    "renderMode": 2,
    "route": "/sandyrenu/sandeeprenu.github.io/projects"
  },
  {
    "renderMode": 2,
    "route": "/sandyrenu/sandeeprenu.github.io/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23586, hash: '1da5f68de64cd7acb34a86c3e989cb0a056c7774b23ae527a36ade3259bc52c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17241, hash: '5fdaaad5cd83d497c645a47f3c2d268fd2011aa8c0798556477fac66015ea73c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52361, hash: '093532f3ccf299620010b40167d2a4c6b08640397f1c02c9dcbbf0114b8cecb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 52361, hash: '093532f3ccf299620010b40167d2a4c6b08640397f1c02c9dcbbf0114b8cecb4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 52361, hash: '093532f3ccf299620010b40167d2a4c6b08640397f1c02c9dcbbf0114b8cecb4', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52361, hash: '093532f3ccf299620010b40167d2a4c6b08640397f1c02c9dcbbf0114b8cecb4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 52361, hash: '093532f3ccf299620010b40167d2a4c6b08640397f1c02c9dcbbf0114b8cecb4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-6UQ3KH2R.css': {size: 6954, hash: '6tZ7A5K5gEQ', text: () => import('./assets-chunks/styles-6UQ3KH2R_css.mjs').then(m => m.default)}
  },
};
