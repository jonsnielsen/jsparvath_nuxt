<template>
  <div id="progressbar" :style="progressBarData"></div>
</template>

<script>
  export default {
    props: ["progressBarData"]
  };
</script>

<style lang="scss">
  #progressbar {
    height: 1px;
    background-color: #fff;
    position: relative;
    transition: all .75s cubic-bezier(0.7, 0.11, 0.51, 1.21);
  }
</style>