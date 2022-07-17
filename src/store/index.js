import Vue from 'vue'
import Vuex from 'vuex'
const TOKEN_KEY = 'HAOKE_USER'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem(TOKEN_KEY),
    currentCity: {
      label: '北京',
      value: '"AREA|88cff55c-aaa4-e2e0"'
    }
  },
  getters: {},
  mutations: {
    setUser(state, token) {
      state.user = token
      window.localStorage.setItem(TOKEN_KEY, state.user)
    },
    setCurrentCity(state, payload) {
      state.currentCity = payload
    }
  },
  actions: {},
  modules: {}
})
