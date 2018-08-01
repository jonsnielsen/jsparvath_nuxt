<template>
  <div>
    <Header></Header>
    <nuxt/>
  </div>
</template>

<script>
  import LayoutGenerator from '~/components/mixins/LayoutMixin';

  let bcColor = '#000000';

  export default {
    mixins: [
      LayoutGenerator(bcColor)
    ]
  }

</script>
<style>
</style>
