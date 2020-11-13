import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: () => import( '../views/Busqueda.vue')
  },
  {
    path: '/venta',
    name: 'venta',
    component: () => import( '../views/Venta.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import( '../views/Total.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import( '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
