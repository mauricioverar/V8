import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import SobreMi from './components/SobreMi'
import Articulo from './components/Articulo'
import Post from './components/Post'
import NotFound from './components/NotFound'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/contacto',
      component: Contacto
    },
    {
      path: '/sobremi',
      component: SobreMi,
      name: 'sobremi'
    },
    {
      path: '/post/:entrada',
      component: Articulo,
      children: [
        {
          path: 'post',
          component: Post,
          name: 'post'
        },
      ] 
    },
    {
      path: '*',
      component: NotFound
    }
    ]
})