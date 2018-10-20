<script>
  import { mapState } from 'vuex';
  import ScrollHandler from "./scroller.js";

  export default {
    render() {
    },
    computed: {
      ...mapState(['allPathsData', 'currentPathData'])
    },
    methods: {
      handleScroll(direction) {
        let currentPath = this.currentPathData.path;
        let allPathsData = this.allPathsData;

        let previousPath = null;
        let nextRoute = false;

        for (let path in allPathsData) {
          if (nextRoute) {
            this.$router.push(path);
            return;
          }
          if (path === currentPath) {
            if (direction < 0) {
              if (previousPath) {
                this.$router.push(previousPath);
              }
              return;
            }
            else {
              nextRoute = true;
            }
          }
          previousPath = path;
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

        let scrollHandler = new ScrollHandler(window, 100);
        scrollHandler.addEventListener('wheel', (deltaY) => {
          this.handleScroll(deltaY);
        }, { passive: true })
      });
    }
  };
</script>