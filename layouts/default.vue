<template>
  <div id="layout-wrapper">
    <div id="header-wrapper">
      <Header></Header>
    </div>
    <nuxt />
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import Header from '~/components/header/Header.vue'
  import Footer from '~/components/footer/Footer.vue'


  export default {
    components: {
      Header,
      Footer
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

<style lang="scss">
  #layout-wrapper {
    max-width: 1200px;
    padding: 0 50px;
    /* background-color: blue; */
    margin: 0 auto;
    position: relative;
  }

  #footer {
    /* background-color: #fff; */
    position: fixed;
    bottom: 50px;
    /* background-color: blue; */
  }

  @media (max-width: $breakpoint-mobile-width) {}

</style>
