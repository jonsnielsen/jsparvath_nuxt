<template>
  <nav>

    <ul id="menu-ul">
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
    </ul>
    <ProgressBar :progressBarData="progressBarData"></ProgressBar>

    <Scroller></Scroller>
  </nav>
</template>

<script>
  import ProgressBar from './ProgressBar.vue'
  import {mapState} from 'vuex';

  import Scroller from '../scroller/Scroller.vue'

  function prepareItemData(item, allPathsData) {
    let menuItemWidth = item.clientWidth;
    let offsetLeft = item.offsetLeft;
    let path = item.path;
    let pathData = allPathsData[path];
    let numberOfRoutes = pathData.numberOfRoutes;
    let barWidth = menuItemWidth / numberOfRoutes;

    return {
      barWidth,
      offsetLeft,
      path
    }
  }

  export default {
    components: {
      ProgressBar,
      Scroller
    },
    data() {
      return {
        menuItems: [],
        menuItemsData: [],
        progressBarData: {width: '0px', left: '0px'}
      }
    },
    computed: {
      ...mapState(['allPathsData', 'currentPathData'])
    },
    watch: {
      currentPathData(currentPathObj) {
        let progressBarData = this.determineProgressBarData(currentPathObj, this.menuItemsData);
        this.setProgressBarData(progressBarData)
      }
    },
    methods: {
      determineMenuItemsData(allPathsData, menuItems) {
        let itemData = [];
        menuItems.forEach((item) => {
          let updatedItem = prepareItemData(item, allPathsData);
          itemData.push(updatedItem);
        });
        return itemData;
      },
      determineProgressBarData(currentPathObj, menuItemsData,) {
        let basePath = currentPathObj.path;
        let routePosition = currentPathObj['position'];

        if(routePosition !== 1){
          console.log('not ');
          for (let path in this.allPathsData) {
            let pathData = this.allPathsData[path];
            if(pathData['position'] === 1){
              basePath = path;
            }
            else if(currentPathObj.path === path){
              break;
            }
          }

        }

        let pathObj = menuItemsData.find(p => p.path === basePath);
        let width = pathObj.barWidth;
        let offsetLeft = pathObj.offsetLeft + width * (routePosition - 1);
        return {
          width: width + 'px',
          left: offsetLeft + 'px'
        }
      },
      setProgressBarData(progressBarData) {
        this.$nextTick(() => {
          this.progressBarData = progressBarData
        })
      },
      setMenuItemsData(menuItemsData) {
        this.menuItemsData = menuItemsData;
      }
    },
    mounted() {
      let linkItems = document.querySelectorAll('.nl');
      //setup the menuitems array
      let menuItems = [...linkItems].map(item => {
        let child = item.children[0]
        child.path = item.getAttribute('href');
        console.log('child.path: ' + child.path);
        return child;
      });
      this.menuItems = menuItems;

      let menuItemsData = this.determineMenuItemsData(this.allPathsData, this.menuItems);
      this.menuItemsData = menuItemsData;

      let progressBarData = this.determineProgressBarData(this.currentPathData, this.menuItemsData);
      this.progressBarData = progressBarData;


      window.addEventListener("resize", () => {
        menuItemsData = this.determineMenuItemsData(this.allPathsData, this.menuItems);
        this.setMenuItemsData(menuItemsData);

        progressBarData = this.determineProgressBarData(this.currentPathData, this.menuItemsData);
        this.setProgressBarData(progressBarData);
      });
    }
  }
</script>

<style lang="scss" scoped>

  #menu-ul {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
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
