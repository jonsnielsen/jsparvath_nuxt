export default function (context) {
  console.log(context.route.path);
  context.store.commit('setExitRoute', true);
  context.store.commit('changeBcColor', context.route.path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      context.store.commit('setExitRoute', false);
      resolve();
    }, 1200)
  })
}


