import Vue from 'vue'
import Vuex from 'vuex'
const TOKEN_KEY = 'HAOKE_USER'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem(TOKEN_KEY)
  },
  getters: {},
  mutations: {
    setUser(state, token) {
      state.user = token
      window.localStorage.setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
