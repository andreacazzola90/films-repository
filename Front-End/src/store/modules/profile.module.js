const state = {
  name: 'a',
  email: 'b',
  password: 'c'
}
const getters = {
  getName: state => {
    return state.name
  },
  getEmail: state => {
    return state.email
  },
  getPassword: state => {
    return state.password
  }
}
const mutations = {
  setName: (state, name) => {
    state.name = name
  },
  setEmail: (state, email) => {
    state.email = email
  },
  setPassword: (state, password) => {
    state.password = password
  }
}
const actions = {
  actionProfile: (context, profile) => {
    context.commit('setName', profile.name)
    context.commit('setEmail', profile.email)
    context.commit('setPassword', profile.password)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
