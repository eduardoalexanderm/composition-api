import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/counter',
    name: 'counter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
    }
  },
  {
    path: '/users',
    name: 'users',
    component: function () {
      return import(/* webpackChunkName: "users" */ '../views/Users.vue')
    }
  },
  {
    path: '/search-pokemon',
    name: 'search-pokemon',
    component: function () {
      return import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemon.vue')
    }
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: function () {
      return import(/* webpackChunkName: "pokemon-id" */ '../views/Pokemon.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
