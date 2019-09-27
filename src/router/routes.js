
const routes = [
  {
    path: '/',
    component: () => import('layouts/Dash.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue')},
        {path: '/login', component: () => import('pages/Login.vue')}  
    
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
