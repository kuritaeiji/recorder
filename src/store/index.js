import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {},
    books: []
  },
  getters: {
    current(state) {
      return state.current
    },
    getBooks(state) {
      return state.books
    }
  },
  mutations: {
    setCurrent (state, payload) {
      state.current = payload
    },
    setReviewedBook(state, payload) {
      state.books.push(payload)
    }
  },
  actions: {
    setCurrent (context, payload) {
      context.commit('setCurrent', payload)
    },
    setReviewedBook(context, payload) {
      context.commit('setReviewedBook', payload)
    }
  },
  plugins: [createPersistedState({
    key: 'reading-recorder',
    storage: localStorage
  })]
})
