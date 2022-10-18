import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       component:Layout,
       path:'/',
       children:[
        
       ]
     }
  ]
})

export default router
