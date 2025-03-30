
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Portfolio",
    "route": "/Program%20Files/Git/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23596, hash: '5da2f90d473e817e3a7e4190834b04cfc31a5f621c67e4c7c324772ccdd9404d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17170, hash: 'c248f864892baff3aa3439a77396225bf229d375b84575f42a53c508a7074ad3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
