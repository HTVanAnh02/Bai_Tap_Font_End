import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/index',
    name:'index',
    component:()=>import('@/views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component:()=>import ('@/layout/Client/Login.vue')
  },
  {
    path:'/admin',
    component:()=>import ('@/views/AdminView.vue'),
    children:[
      {
        path:'SanPham',
        component:()=>import('@/layout/Admin/SanPham/SanPham.vue')
      },
      {
        path:'User',
        component:()=>import('@/layout/Admin/User/User.vue')
      },
    ]
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
