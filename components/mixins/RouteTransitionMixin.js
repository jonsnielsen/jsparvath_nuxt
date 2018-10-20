import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState(['exitRoute', 'exitUp', 'exitDown', 'enterUp', 'enterDown', 'enterRoute'])
  },
  mounted() {
    this.$store.commit('setEnterRoute', true);

    setTimeout(() => {
      // this.$store.dispatch('clearEnters');
      this.$store.commit('setEnterRoute', false);
    }, 10)
  }
}
