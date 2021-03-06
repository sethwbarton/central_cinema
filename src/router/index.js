import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import LogIn from '../views/LogIn.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import HomePage from '../views/HomePage.vue'
import Viewing from '../views/Viewing.vue'
import SignUp from '../views/SignUp.vue'
import AddService from '../views/AddService.vue'
import AfterAddHome from '../views/AfterAddHome.vue'
import AttachAccount from '../views/AttachAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  },
  {
      path: '/home',
      name: 'HomePage',
      component: HomePage
  },
  {
      path: '/viewing',
      name: 'Viewing',
      component: Viewing
  },
  {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
  },
  {
      path: '/addService',
      name: 'AddService',
      component: AddService
  },
  {
      path: '/attachAccount',
      name: 'AttachAccount',
      component: AttachAccount
  },
  {
      path: '/afterAddHome',
      name: 'AfterAddHome',
      component: AfterAddHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
