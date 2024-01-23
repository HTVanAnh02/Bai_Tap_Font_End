import { createStore } from 'vuex'

export default createStore({
  state: {
    title:''
  },
  getters: {
  },
  mutations: {
    updatetitle(state,data){
      state.title = data
    }
  },
  actions: {
    actionstitle(context,data){
      context.commit('updatetitle',data)
    }
  },
  modules: {
  }
})
