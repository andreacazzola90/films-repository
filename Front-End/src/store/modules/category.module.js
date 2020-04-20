import Vue from 'vue'
import axios from 'axios'

const state = {
  categories: []
}
const getters = {
  getCategories (state) {
    return state.categories
  },
  getCategory: (state, getters) => (paramKey) => {
    if (getters.getCategories) {

    } else {
      return null
    }
  }
}
const actions = {

  fetchCategories (context, payload) {
    axios.get('/categories')
      .then(response => {
        this.categories = response.data
        context.commit('setCategories', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
const mutations = {
  setCategories: (state, payload) => {
    state.categories = payload
  },
  setCategory: (state, payload) => {
    Vue.set(state.categories, payload.key, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
