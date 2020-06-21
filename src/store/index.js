import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {}
  },
  getters: {
    current(state) {
      return state.current
    }
  },
  mutations: {
    setCurrent (state, payload) {
      state.current = payload
    }
  },
  actions: {
    setCurrent (context, payload) {
      context.commit('setCurrent', payload)
    }
  },
  plugins: [createPersistedState({
    key: 'reading-recorder',
    storage: localStorage
  })]
})
