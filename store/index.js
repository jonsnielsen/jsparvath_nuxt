import Vuex from 'vuex';
import { log } from 'util';

//position and numberOfRoutes are used in order to let the menubar know where it should be and the width
const paths = {
  '/': { color: '#000000', numberOfRoutes: 1, position: 1 },
  '/experience/skills': { color: '#272729', numberOfRoutes: 3, position: 1 },
  '/experience/work': { color: '#272729', numberOfRoutes: 3, position: 2 },
  '/experience/studies': { color: '#272729', numberOfRoutes: 2, position: 3 },
  '/contact': { color: '#4B4A4F', numberOfRoutes: 1, position: 1 }
};
//add the path to the path object. not done in the object to avoid unnecessary duplication when adding path.
for (let path in paths) {
  paths[path].path = path;
}

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
