<template>
  <nav>

    <ul id="menu-ul">
      <li class="menu-item">
        <nuxt-link class="nl" exact to="/">
          About
        </nuxt-link>
      </li>

      <li class="menu-item">
        <nuxt-link class="nl" to="/experience/skills">
          Skills & Experience
        </nuxt-link>
      </li>

      <li class="menu-item">
        <nuxt-link class="nl" to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
    <ProgressBar :progressBarData="progressBarData"></ProgressBar>

    <Scroller></Scroller>
  </nav>
</template>

<script>
  import ProgressBar from './ProgressBar.vue'
  import { mapState } from 'vuex';

  import Scroller from '../scroller/Scroller.vue'

  function cumulativeOffset(element) {
    var left = element.offsetLeft;
    //hackerman!
    let wrapper = document.querySelector("#layout-wrapper");
    let padding = window.getComputedStyle(wrapper, null).getPropertyValue("padding-left") || 0;
    padding = parseInt(padding);

    left -= padding
    return left
  };
  function prepareItemData(item, allPathsData) {
    let menuItemWidth = item.clientWidth;
    let offsetLeft = cumulativeOffset(item);
    // let offsetLeft = item.getBoundingClientRect().left;
    // (item).left;
    // offsetLeft += item.offsetLeft;
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
        progressBarData: { width: '0px', left: '0px' }
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
      determineProgressBarData(currentPathObj, menuItemsData, ) {
        let basePath = currentPathObj.path;
        let routePosition = currentPathObj['position'];

        if (routePosition !== 1) {
          for (let path in this.allPathsData) {
            let pathData = this.allPathsData[path];
            if (pathData['position'] === 1) {
              basePath = path;
            }
            else if (currentPathObj.path === path) {
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
      let linkItems = document.querySelectorAll('.menu-item');
      //setup the menuitems array
      let menuItems = [...linkItems].map(item => {
        let child = item.children[0]
        item.path = child.getAttribute('href');
        return item;
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
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    /* margin: 3px auto; */
    margin: 0 0 10px 0;
    /* padding: 0 2rem; */
    list-style-type: none;
    /* background-color: blue; */
    /* margin: 0 auto; */
  }

  .nl {
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .menu-item {
    @include fluid-font2($menu-item-min-screen, $menu-item-max-screen, $menu-item-min-size, $menu-item-max-size);
    display: inline-block;
  }

</style>