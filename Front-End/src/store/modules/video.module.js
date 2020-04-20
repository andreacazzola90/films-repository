import Vue from 'vue'
import axios from 'axios'

const state = {
  videos: []
}
const getters = {
  getVideos (state) {
    return state.videos
  },
  getFilteredVideos: (state, getters) => (categoryID) => {
    if (!categoryID) {
      return getters.getVideos
    } else {
      return getters.getVideos.filter(video => video.category.name === categoryID)
    }
  }
}
const actions = {
  fetchVideos (context, payload) {
    // axios get api
    axios.get('/videos')
      .then(response => {
        this.categories = response.data
        context.commit('setVideos', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
const mutations = {
  setVideos: (state, payload) => {
    state.videos = payload
  },
  setVideo: (state, payload) => {
    Vue.set(state.videos, payload.key, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
