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
  import { mapState } from 'vuex'
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
  #header-wrapper {
    padding: 8vh 0 26vh 0;
    /* background-color: violet; */
  }

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




  @media (max-width: $breakpoint-mobile) {
    #header-wrapper {
      padding: 6vh 0 12vh 0;
    }

    #footer {
      /* margin: 0 auto; */
      display: none;
    }


    #layout-wrapper {
      padding: 0 30px;
      padding: 0 10vw;
      /* background-color: blue; */
    }
  }


  @media (max-height: $breakpoint-mobile-height) {
    #footer {
      bottom: 20px;
      /* display: none; */
    }

    #header-wrapper {
      padding: 6vh 0 12vh 0;
    }
  }
</style>