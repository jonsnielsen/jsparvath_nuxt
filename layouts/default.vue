<template>
  <div>
    <Header></Header>
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
      ...mapState(['currentPath'])
    },
    watch: {
      currentPath(path) {
        this.changeBcColor(path.color);
      }
    },
    mounted() {
      this.changeBcColor(this.currentPath.color);
    }


  }

</script>

<style>

</style>

