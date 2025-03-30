
export default {
  basePath: 'https://github.com/JamesJava42/Portfolio.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
