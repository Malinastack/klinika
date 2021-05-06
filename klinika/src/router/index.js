import Vue from 'vue'
import VueRouter from 'vue-router'
import signin from '../views/signin.vue'
import signup from '../views/signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: signin
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: signup
  },
  
]

const router = new VueRouter({
  routes
})

export default router
