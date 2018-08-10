import Vuex from 'vuex';

const paths = {
  '/': {color: '#797988', numberOfRoutes: 1, position: 1, path: '/'},
  '/services': {color: '#F65742', numberOfRoutes: 1, position: 1, path: '/services'},
  '/services/other': {color: '#2A68FC', numberOfRoutes: 2, position: 2, path: '/services/other'},
  '/contact': {color: '#000000', numberOfRoutes: 1, position: 1, path: '/contact'}
}

export default {
  state() {
    return {
      exitRoute: false,
      currentPath: paths[0],
      allPathsData: paths
    }
  },
  mutations: {
    setExitRoute(state, isExiting) {
      state.exitRoute = isExiting;
    },
    changePath(state, path) {
      let newPath = paths[path];
      if (newPath) {
        state.currentPath = newPath;
      }
    }
  },
  getters: {
    getAllPaths: state => state.allPaths
}
}
