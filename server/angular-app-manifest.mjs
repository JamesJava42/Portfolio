
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/JamesJava42/Portfolio.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git"
  },
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git/projects"
  },
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git/experience"
  },
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git/skills"
  },
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git/education"
  },
  {
    "renderMode": 2,
    "route": "/JamesJava42/Portfolio.git/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/JamesJava42/Portfolio.git",
    "route": "/JamesJava42/Portfolio.git/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23609, hash: 'e393f4ad3724e545b1b18f5077cfea5b10892867186c0711ddfb2380c18f59e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17183, hash: '3c3414cc5a14e38d9fba63d699c7e176290f289f9242fdc5150a2ce3beed7d1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 64089, hash: '23828753a122338d4108ab079e1a39b5780cd90b839b8575f32a361fea65c1f6', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 61667, hash: '810c83a8a57a9655c2b321dea1f58e80913a47da3a9974d5183efc3c8c16bc93', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 110301, hash: '04a272a80e02cdba01c2823433d3ee9104821f21e29533697450ebe5cf3110f8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 63260, hash: '6c607ec42a0d1bbec54159db4a7bd97034854d42e562806fbfd38eee0fe96231', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 61018, hash: '4f6398bf510620339e2c3f921cbdda911ec8333c94c3d1caea2aa6485b5e365e', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 63331, hash: '6e0b617034d71866b7bebe741233868af9bf2d4a8aeb163e7eac1efb27248fd8', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
