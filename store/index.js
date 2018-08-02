import Vuex from 'vuex';

const BC_COLORS = [
  {path: '/', color: '#797988'},
  {path: '/services', color: '#2A68FC'},
  {path: '/services/other', color: '#F65742'},
  {path: '/contact', color: '#000000'},
];

const createStore = {
  state() {
    return {
      exitRoute: false,
      currentBcColor: BC_COLORS[0].color
    }
  },
  mutations: {
    setExitRoute(state, isExiting) {
      state.exitRoute = isExiting;
    },
    changeBcColor(state, path) {
      let newColor = BC_COLORS.find(obj => obj.path == path);
      if (newColor) {
        state.currentBcColor = newColor.color;
      }
    }
  }
}
export default createStore;
