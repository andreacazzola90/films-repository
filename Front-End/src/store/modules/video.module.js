import Vue from 'vue'
import { sleep } from '@/lib/util'

import { videoJson } from '@/jsonresponse'

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
      return state.videos.filter(video => video.category === categoryID)
    }
  }
}
const actions = {
  fetchVideos (context, payload) {
    // axios get api
    return sleep(1000).then(() => {
      context.commit('setVideos', videoJson)
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
