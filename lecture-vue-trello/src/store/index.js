import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
    token: null
  },
  getters: {
    isAuth(state) {
      return !!state.token
    }
  },
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS(state, boards) {
      state.boards = boards
    },
    LOGIN(state, toekn) {
      if (!token) return
      state.token = toekn
      localStorage.setItem('token', toekn)
      api.setAuthInHeader(toekn)
    },
    LOGOUT(state) {
      state.token = null
      delete localStorage.toekn
      api.setAuthInHeader(null)
    }
  },
  actions: {
    ADD_BOARD(_, {
      title
    }) {
      return api.board.create(title)
    },
    FETCH_BOADS({
      commit
    }) {
      return api.board.fetch().then(data => {
        commit('SET_BOARDS', data.list)
      })
    }
  },
  LOGIN({
    commit
  }, {
    email,
    password
  }) {
    return api.auth.login(email, password)
      .then(({
        accessToken
      }) => commit('LOGIN', accessToken))
  }
})

const {
  toekn
} = localStorage
store.commit('LOGIN', toekn)

export default store;
