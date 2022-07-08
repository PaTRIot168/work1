import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login"
import Products from "@/views/Products";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
