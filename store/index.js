import Vuex from 'vuex';

const paths = [
  {path: '/', color: '#797988', numberOfRoutes: 1},
  {path: '/services', color: '#2A68FC', numberOfRoutes: 2, position: 1},
  {path: '/services/other', color: '#F65742', numberOfRoutes: 2, position: 2},
  {path: '/contact', color: '#000000', numberOfRoutes: 1},
];

export default {
  state() {
    return {
      exitRoute: false,
      currentPath: paths[0],
      allPaths: paths
    }
  },
  mutations: {
    setExitRoute(state, isExiting) {
      state.exitRoute = isExiting;
    },
    changePath(state, path) {
      let newPath = paths.find(obj => obj.path == path);
      if (newPath) {
        state.currentPath = newPath;
      }
    }
  },
  getters: {
    getAllPaths: state => state.allPaths
  }
}
