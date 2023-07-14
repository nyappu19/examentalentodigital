import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'
import VestuarioHombre from '@/views/VestuarioHombre.vue'
import VestuarioMujer from '@/views/VestuarioMujer.vue'
import Electronica from '@/views/Electronica.vue'
import Carrito from '@/views/Carrito.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/hombre',
    name: 'hombre',
    component: VestuarioHombre
  },
  {
    path: '/mujer',
    name: 'mujer',
    component: VestuarioMujer
  },
  {
    path: '/electronica',
    name: 'electronica',
    component: Electronica
  },
  {
    path:'/carrito',
    name:'Carrito',
    component: Carrito
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
