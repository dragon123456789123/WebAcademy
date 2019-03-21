//imports
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    // type: null,
    isUserLoggedIn: false,
    class: null,
    unit: null,
    lesson: null,
    // isStudent: false,
    // isTeacher: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setClass(state, classe){
      state.class = classe
    },
    setUnit(state, unit){
      state.unit = unit
    },
    setLesson(state, lesson){
      state.lesson = lesson
    }
  },
  actions: {
    setToken({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setClass({commit}, classe) {
      commit('setClass', classe)
    },
    setUnit({commit}, unit) {
      commit('setUnit', unit)
    },
    setLesson({commit}, lesson) {
      commit('setLesson', lesson)
    },
  }
})
