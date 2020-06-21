import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from '../views/BookSearch.vue'
import BookForm from '../views/BookForm.vue'
import Books from '../views/Books.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Books,
    name: 'books'
  },
  {
    path: '/search',
    component: BookSearch,
    name: 'book-search'
  },
  {
    path: '/form',
    component: BookForm,
    name: 'book-form'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
