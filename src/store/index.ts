import { createStore } from 'vuex'

export default createStore({
  state: {
    fullpath: ''
  },
  getters: {
    getFullpath(state) {
      return state.fullpath
    }
  },
  mutations: {
    setFullpath(state,value) {
      state.fullpath = value
    }
  },
  actions: {
  },
  modules: {
  }
})
