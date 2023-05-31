import { createRouter, createWebHistory } from 'vue-router'

import WellcomePage from '../views/WellcomePage.vue'
//content
import YoureInvited from '../views/content/YoureInvited.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'youreinvited',
      component: YoureInvited
    },
    {
      path: '/',
      name: 'youreinvited',
      component: YoureInvited
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
