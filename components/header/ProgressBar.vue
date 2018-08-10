<template>
  <div id="progressbar" :style="progressBarData">


  </div>
  <!--:style="progressBarData"-->

</template>

<script>
  export default {
    props: ["progressBarData"]
  };
</script>

<style lang="scss">
  #progressbar {
    height: 4.5px;
    //background-color: $progressbar-color;
    background-color: #fff;
    position: relative;
    transition: all .75s cubic-bezier(0.7, 0.11, 0.51, 1.21);
  }


</style>
