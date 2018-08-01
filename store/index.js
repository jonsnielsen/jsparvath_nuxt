import Vuex from 'vuex';

const createStore = {
  state() {
    return {exitRoute: false}
  },
  mutations: {
    setExitRoute(state, isExiting) {
      state.exitRoute = isExiting;
    }
  }
}
export default createStore;
