<template>
  <div id="arrow-wrapper">
    <svg id="arrow" :class="{exitArrow: exitRoute, exitUpArrow: exitUp, exitDownArrow: exitDown,  enterUpArrow: enterUp, enterDownArrow: enterDown, enterArrow: enterRoute}"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.698 134.625">
      <defs>
        <style>
          .cls-1 {
            fill: #fff;
          }

        </style>
      </defs>
      <g id="Group_4" data-name="Group 4" transform="translate(-2793.409 -3527.958)">
        <g id="Group_1" data-name="Group 1" transform="translate(-102 -0.121)">
          <rect id="arrow-shaft" data-name="Rectangle 10" class="cls-1" width="6.782" height="110.058" transform="translate(2902.764 3540)" />
          <path id="arrow-head1" v-bind:style="{display: displayHead1}" data-name="Subtraction 3" class="cls-1" d="M10.348,24.625v0L0,0H20.7L10.349,24.623Z"
            transform="translate(2895.409 3638.079)" />
          <path id="arrow-head2" v-bind:style="{display: displayHead2}" data-name="Subtraction 6" class="cls-1" d="M10.348,24.625v0L0,0H20.7L10.349,24.623Z"
            transform="translate(2916.107 3552.704) rotate(180)" />
        </g>
      </g>
    </svg>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
        displayHead1: 'inline',
        displayHead2: 'inline'

      }
    },
    computed: {
      ...mapState(['exitRoute', 'exitUp', 'exitDown', 'enterUp', 'enterDown', 'enterRoute', 'allPathsData',
        'currentPathData', 'pathsLength'
      ])
    },
    mounted() {
      if (this.currentPathData.index === 0) {
        this.displayHead2 = 'none';
      } else if (this.currentPathData.index === this.pathsLength - 1) {
        console.log(this.allPathsData.length)
        console.log('th')
        this.displayHead1 = 'none';
      }
      console.log(this.allPathsData.length)
      console.log('th')
    }
  }

</script>

<style>
  #arrow {
    width: 4px;
    /* width: 10px; */
    position: relative;
    top: 6px;
    /* top: -30px; */
    /* height: 100px; */
    /* background-color: blue; */

  }


</style>
