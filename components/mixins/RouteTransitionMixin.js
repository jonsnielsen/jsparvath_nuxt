import {mapState} from 'vuex'

export default {
  data() {
    return {
      outDown: true,
    }
  },
  computed: {
    ...mapState(['exitRoute'])
  },
  mounted(){
    setTimeout(() => {
      this.outDown = false;
    }, 10)
  }
}
