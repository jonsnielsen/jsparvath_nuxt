import { changeRouteDelay } from '~/assets/sass/base/_animations.scss';
let delay = changeRouteDelay.slice(0, -1);
delay = Number(delay);
delay = delay * 1000;

console.log('delay: ' + delay);
export default function (context) {
  context.store.commit('setExitRoute', true);
  context.store.commit('changePath', context.route.path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      context.store.dispatch('clearExits');
      resolve();
    }, delay)
  })
}


