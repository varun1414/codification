
const routes = [
    {
     path: '/index', 
    component: () => import('layouts/Dash.vue'),
    children: [
      {  path: '\index:user_obj',name:'dash',props:true ,component: () => import('pages/index.vue')},
        /* {path: '/login', component: () => import('pages/Login.vue')}*/ 
    ]
  },
   
   
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue')},
      {path: '/login', component: () => import('pages/Login.vue')},
 
    ]
  },
  {
    path: '/',
    component: () => import('layouts/resourceLay.vue'),
    children: [
      { path: '/resources', component: () => import('components/resources.vue')},
      
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
