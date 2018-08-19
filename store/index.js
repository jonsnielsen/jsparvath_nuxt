import Vuex from 'vuex';

//position and numberOfRoutes are used in order to let the menubar know where it should be and the width
const paths = {
  '/': {color: '#797988', numberOfRoutes: 1, position: 1, path: '/'},
  '/services': {color: '#F65742', numberOfRoutes: 2, position: 1, path: '/services'},
  '/services/other': {color: '#2A68FC', numberOfRoutes: 2, position: 2, path: '/services/other'},
  '/contact': {color: '#000000', numberOfRoutes: 1, position: 1, path: '/contact'}
};
// paths['/'] = {color: '#797988', numberOfRoutes: 1, position: 1, path: '/'};
// paths['/services'] = {color: '#F65742', numberOfRoutes: 1, position: 1, path: '/services'};
// paths['/services/other'] = {color: '#2A68FC', numberOfRoutes: 2, position: 2, path: '/services/other'};
// paths['/contact'] = {color: '#000000', numberOfRoutes: 1, position: 1, path: '/contact'};

export default {
  state() {
    return {
      exitRoute: false,
      currentPathData: {},
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
        state.currentPathData = newPath;
      }
    }
  },
  getters: {
    allPathsData: state => state.allPathsData
}
}
