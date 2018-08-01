<template>
  <div>
    <Header></Header>
    <nuxt/>
  </div>
</template>

<script>
  import LayoutGenerator from '~/components/mixins/LayoutMixin';

  let bcColor = '#797988';

  export default {
    mixins: [
      LayoutGenerator(bcColor)
    ]
  }

</script>

<style lang="scss">
</style>
