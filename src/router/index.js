import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';
import VestuarioHombre from '@/views/VestuarioHombre.vue';
import VestuarioMujer from '@/views/VestuarioMujer.vue';
import Electronica from '@/views/Electronica.vue';
import Carrito from '@/components/Carrito.vue';
import Pagar from '@/views/Pagar.vue';
import Confirmacion from '@/views/Confirmacion.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/hombre',
    name: 'VestuarioHombre',
    component: VestuarioHombre,
  },
  {
    path: '/mujer',
    name: 'VestuarioMujer',
    component: VestuarioMujer,
  },
  {
    path: '/electronica',
    name: 'Electronica',
    component: Electronica,
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito,
  },
  {
    path: '/pagar',
    name: 'Pagar',
    component: Pagar,
  },
  {
    path: '/confirmacion',
    name: 'Confirmacion',
    component: Confirmacion,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
