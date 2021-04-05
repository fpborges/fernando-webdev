import Vue from 'vue'
import VueRouter from 'vue-router'

// Import pages
const Home = () => import('../pages/Home.vue');
const About = () => import ('../pages/About.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
