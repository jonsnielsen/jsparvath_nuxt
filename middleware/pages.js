export default function(context){
console.log(context.route);
  context.store.commit('setExitRoute', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      context.store.commit('setExitRoute', false);
      resolve();
    }, 1200)
  })
}


