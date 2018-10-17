import Vuex from 'vuex';
import { log } from 'util';

//position and numberOfRoutes are used in order to let the menubar know where it should be and the width
//the order here DOES matter, so when scrolling it will take the NEXT/PREV one.
const paths = {
  '/': { color: '#000000', numberOfRoutes: 1, position: 1 },
  '/experience/skills': { color: '#272729', numberOfRoutes: 3, position: 1 },
  '/experience/work': { color: '#272729', numberOfRoutes: 3, position: 2 },
  '/experience/studies': { color: '#272729', numberOfRoutes: 2, position: 3 },
  '/contact': { color: '#4B4A4F', numberOfRoutes: 1, position: 1 }
};
//add the path to the path object. not done in the object to avoid unnecessary duplication when adding path.
let i = 0;
for (let path in paths) {
  let pathObj = paths[path];
  pathObj.path = path;
  pathObj.index = i;
  i++;
}

export default {
  state() {
    return {
      exitRoute: false,
      exitUp: false,
      exitDown: false,
      enterRoute: false,
      enterUp: false,
      enterDown: false,
      currentPathData: {},
      allPathsData: paths
    }
  },
  mutations: {
    setExitRoute(state, isExiting) {
      state.exitRoute = isExiting;
    },
    setExitUp(state, isExitingUp) {
      state.exitUp = isExitingUp;
    },
    setExitDown(state, isExitingDown) {
      state.exitDown = isExitingDown;
    },
    setEnterRoute(state, isEntering) {
      state.enterRoute = isEntering;
    },
    setEnterUp(state, isEnteringUp) {
      state.enterUp = isEnteringUp;
    },
    setEnterDown(state, isEnteringDown) {
      state.enterDown = isEnteringDown;
    },
    changePath(state, path) {
      let newPath = paths[path];
      if (newPath) {
        state.currentPathData = newPath;
      }
    }
  },
  actions: {
    clearExits(context) {
      context.commit('setExitRoute', false);
      context.commit('setExitUp', false);
      context.commit('setExitDown', false);
    },
    clearEnters(context) {
      context.commit('setEnterRoute', false);
      context.commit('setEnterUp', false);
      context.commit('setEnterDown', false);
    },
    exitUp(context) {
      context.dispatch('clearEnters')
      context.commit('setExitUp', true);
      context.commit('setEnterUp', true);
    },
    exitDown(context) {
      context.dispatch('clearEnters')
      context.commit('setExitDown', true);
      context.commit('setEnterDown', true);
    }
  },
  //next step: in Scroller.vue set 'SetExitDown... SetEnterUp' etc
  //remember to clear the enters first using the clearEnters action
  getters: {
    allPathsData: state => state.allPathsData
  }
}
