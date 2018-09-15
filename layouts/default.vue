<template>
  <div>
    <div id="header-wrapper">
      <Header></Header>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from '~/components/header/Header.vue'


  export default {
    components: {
      Header
    },
    methods: {
      changeBcColor(color) {
        document.querySelector('body').style.background = color;
      }
    },
    computed: {
      ...mapState(['currentPathData'])
    },
    watch: {
      currentPathData(path) {
        this.changeBcColor(path.color);
      }
    },
    mounted() {
      this.changeBcColor(this.currentPathData.color);
    }


  }

</script>

<style scoped>
  #header-wrapper {
    padding: 8vh 0 15vh 0;
  }
</style>

