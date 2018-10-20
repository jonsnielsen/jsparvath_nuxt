import { changeRouteDelay } from '~/assets/sass/base/_animations.scss';
let delay = parseInt(changeRouteDelay);
delay = Number(delay);
delay = delay * 1000;

export default function (context) {
  let allPaths = context.store.getters.allPathsData;
  let previousPath = context.store.state.currentPathData.path;
  let newPath = context.route.path;

  let newPathObj = null;
  let previousPathObj = null;
  for (let path in allPaths) {
    let pathObj = allPaths[path];
    if (pathObj.path === previousPath) {
      previousPathObj = pathObj;
    }
    if (pathObj.path === newPath) {
      newPathObj = pathObj;
    }
  }

  if (newPathObj && previousPathObj) {
    if (newPathObj.index > previousPathObj.index) {
      context.store.dispatch('exitUp');
    }
    else {
      context.store.dispatch('exitDown');
    }
  }



  context.store.commit('setExitRoute', true);
  context.store.commit('changePath', context.route.path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // context.store.dispatch('clearExits');
      resolve();
    }, delay)
  })
}


