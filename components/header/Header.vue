<template>
  <nav>

    <ul id="menu-ul">
      <div id="enclosing-div">
        <nuxt-link class="nl" exact to="/">
          <li class="menu-item">
            ABOUT
          </li>
        </nuxt-link>

        <nuxt-link class="nl" to="/services">
          <li class="menu-item">
            SERVICES
          </li>
        </nuxt-link>

        <nuxt-link class="nl" to="/contact">
          <li class="menu-item">
            CONTACT
          </li>
        </nuxt-link>
      </div>

      <!--<ProgressBar :progressBarData="menuItems"></ProgressBar>-->

    </ul>
  </nav>
</template>

<script>
  import ProgressBar from './ProgressBar.vue'
  import {mapState} from 'vuex';

  export default {
    components: {
      ProgressBar
    },
    data() {
      return {
        menuItems: [],
        menuItemsData: [],
        progressBarData: {},
      }
    },
    computed: {
      ...mapState(['allPaths'])
    },
    methods: {
      updateMenuItemsData() {
        let allPaths = this.allPaths;
        let miData = this.menuItemsData;

        this.menuItems.forEach((item, index) => {
          let menuItemWidth = item.clientWidth;
          let offsetLeft = item.offsetLeft;
          let path = item.getAttribute('href');
          let pathObj = allPaths.find(p => p.path === path);
          if (!pathObj) {
            console.error(pathObj);
            return;
          }
          let numberOfRoutes = pathObj.numberOfRoutes;
          let barWidth = menuItemWidth / numberOfRoutes;

          miData[index]
        })
      },
      updateProgressBarData() {
        let currentPath = this.$store.state.currentPath;
        let numberOfRoutes = currentPath['numberOfRoutes'];
        let routePosition = currentPath['position'];
        this.menuItemsData = [];
        this.menuItems.forEach((item, index) => {
          let menuItemWidth = item.clientWidth;
          let offsetLeft = item.offsetLeft;
          let barWidth = menuItemWidth / numberOfRoutes;
          if (routePosition) {
            offsetLeft = offsetLeft + barWidth * (routePosition - 1)
          }

          // let childRoutesLength =
        })
      }
    },
    mounted() {
      this.menuItems = document.querySelectorAll('.nl');
      this.menuItemsData = Array(this.menuItems.length);
      this.updateProgressBarData();
      this.updateMenuItemsData();
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/variables.scss";

  #menu-ul {
    padding: 0;
    width: 100%;
    text-align: center;
  }

  #enclosing-div {
    margin: 0 auto;
    max-width: 400px;
  }

  .menu-item {
    color: $menu-item-color;
    font-size: $menu-item-size;
    font-weight: $menu-item-weight;
    font-family: $menu-item-font;

    display: inline-block;
    text-decoration: none;
    margin: 0 7.4%;
    cursor: pointer;

  }
</style>
