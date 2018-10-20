import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState(['exitRoute', 'exitUp', 'exitDown', 'enterUp', 'enterDown', 'enterRoute'])
  },
  mounted() {
    this.$store.dispatch('clearExits');
    this.$store.commit('setEnterRoute', true);
    // context.store.dispatch('clearExits');


    setTimeout(() => {
      // this.$store.dispatch('clearEnters');
      this.$store.commit('setEnterRoute', false);
    }, 10)
  }
}
