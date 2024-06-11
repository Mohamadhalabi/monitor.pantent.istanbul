
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/features',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FeaturesPage.vue') }
    ]
  },
  {
    path: '/pricing',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PricingPage.vue') }
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/RegisterPage.vue') }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/Index.vue') }
    ]
  },

  {
    path: '/dashboard/search',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/Search.vue') }
    ]
  },

  {
    path: '/dashboard/watchlist',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/watchlist/Index.vue') }
    ]
  },

  {
    path: '/dashboard/watchlist/add',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/watchlist/Add.vue') }
    ]
  },

  {
    path: '/dashboard/account',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/account/Index.vue') }
    ]
  },

  {
    path: '/dashboard/contact',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/Contact.vue') }
    ]
  },


  // catch all 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
