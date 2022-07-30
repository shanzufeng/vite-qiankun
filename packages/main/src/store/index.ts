import { createStore } from 'vuex'

const defaultState: any = {
  count: 22,
  user: {
    current: 'main',
    name: '主应用的name'
  }
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    },
    setCurrent(state, val) {
      console.log(state)
      state.user.current = val
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
