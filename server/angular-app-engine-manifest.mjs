
export default {
  basePath: 'https://github.com/sandyrenu/sandeeprenu.github.io',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
