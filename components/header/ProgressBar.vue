<template>
  <div id="progressbar">
    <!--<p>{{progressBarData}}</p>-->


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
    height: 0.5px;
    //background-color: $progressbar-color;
    background-color: #ff0000;
    position: relative;
  }

  .animated {
    transition: width 0.4s, left 0.4s;
  }
</style>
