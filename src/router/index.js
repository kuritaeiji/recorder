import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookSearch from '../views/BookSearch.vue'
import BookForm from '../views/BookForm.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    component: BookSearch,
    name: 'book-search'
  },
  {
    path: '/form',
    components: BookForm,
    name: 'book-form'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
