
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
      { path: '/index:uid',name:'dash',props:true, component: () => import('components/index.vue')},
        /* {path: '/login', component: () => import('pages/Login.vue')}*/ 
      {path: '/challenge1', component: () => import('components/Challenge1.vue')},
      {path: '/challenge2', component: () => import('components/Challenge2.vue')},
      {path: '/challenge3', component: () => import('components/Challenge3.vue')}
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
