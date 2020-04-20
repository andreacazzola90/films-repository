import Vue from 'vue'
import Vuex from 'vuex'

import profile from './modules/profile.module'
import category from './modules/category.module'
import video from './modules/video.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profile,
    category,
    video
  }
})
