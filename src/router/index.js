import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import paginaInicio from '@/components/PaginaInicio.vue'
import RegistroPost from '@/components/RegistroPost.vue'
import ListConvocatorias from '@/components/ListConvocatorias.vue'
import ListHabilitados from '@/components/ListHabilitados.vue'
import BienvenidoUsuario from '@/components/BienvenidoUsuario.vue'
import GestionUsuarios from '@/components/GestionUsuarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'paginainicio',
    component: paginaInicio
  },
  {
    path: '/registro',
    name: 'registropostulante',
    component: RegistroPost
  },
  {
    path: '/convocatorias',
    name: 'listaconvocatorias',
    component: ListConvocatorias
  },
  {
    path: '/habilitados',
    name: 'listahabilitados',
    component: ListHabilitados
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registrocompleto',
    name: 'registrocompleto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroCompleto.vue')
  },
  {
    path: '/usr',
    name: 'bienvenidousr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BienvenidoUsuario
  },
  {
    path: '/usr/gestion',
    name: 'gestionusuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GestionUsuarios
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
