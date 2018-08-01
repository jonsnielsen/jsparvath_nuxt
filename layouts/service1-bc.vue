<template>
  <div class="service1">
    <Header></Header>
    <nuxt/>
  </div>
</template>

<script>
  import LayoutGenerator from '~/components/mixins/LayoutMixin';

  let bcColor = '#2A68FC';

  export default {
    mixins: [
      LayoutGenerator(bcColor)
    ]
  }
</script>

<style>
  body {
  }
  .service1 {
    background-color: blueviolet;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    transition: background-color 1s ;
    /*margin: 0;*/
    /*padding: 10px*/

  }
</style>
