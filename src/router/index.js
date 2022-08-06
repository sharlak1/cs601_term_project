import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue'
import Skills from '../views/Skills.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/skills',
    name: 'skills',
    component:Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
