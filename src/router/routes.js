
const routes = [
   {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue')},
      {path: '/login', component: () => import('pages/Login.vue')}
      
    ]
  },
  {
    path: '/', 
   component: () => import('layouts/Dash.vue'),
   children: [
     {  path: '/index:uid',name:'dash',props:true ,component: () => import('components/index.vue')},
       /* {path: '/login', component: () => import('pages/Login.vue')}*/ 
   ]
 },
  {
    path: '/',
    component: () => import('layouts/resourceLay.vue'),
    children: [
      { path: '/resources', component: () => import('components/resources.vue')},
      { path: '/leaderboard', component: () => import('components/leaderboard.vue')}
      
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
