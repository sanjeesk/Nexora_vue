const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      {
        path: 'services',
        children: [
          { path: 'photography', component: () => import('pages/services/PhotographyPage.vue') },
          { path: 'web-dev', component: () => import('pages/services/WebDevPage.vue') },
          { path: 'branding', component: () => import('pages/services/BrandingPage.vue') },
          { path: 'uiux', component: () => import('pages/services/UIUXPage.vue') },
          { path: 'others', component: () => import('pages/services/OthersPage.vue') },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
