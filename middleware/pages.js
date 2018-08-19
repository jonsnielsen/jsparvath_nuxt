export default function (context) {
  context.store.commit('setExitRoute', true);
  context.store.commit('changePath', context.route.path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      context.store.commit('setExitRoute', false);
      resolve();
    }, 1200)
  })
}


