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
      ...mapState(['currentBcColor'])
    },
    watch: {
      currentBcColor(color) {
        this.changeBcColor(color);
      }
    },
    mounted() {
      this.changeBcColor(this.currentBcColor);
    }


  }

</script>

<style>

</style>

