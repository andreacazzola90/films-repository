import Vue from 'vue'
import { sleep } from '@/lib/util'

import { catJson } from '@/jsonresponse'

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
    // axios get api
    return sleep(1000).then(() => {
      context.commit('setCategories', catJson)
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
