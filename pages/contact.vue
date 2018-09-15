<template>
  <div class="page-container">
    <section>
      <!--<div class="headline-wrapper bread-wrapper" >-->
        <h1 class="headline transition1 bread-element" :class="{exit: exitRoute, outDown: outDown}">Contact</h1>
      <!--</div>-->

      <!--<div class="sub-headline-wrapper bread-wrapper" >-->
        <h2 class="sub-headline transition2 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          Drop me a line if you would like together, request a quote or just say hello
        </h2>
      <!--</div>-->

      <!--<div class="body-wrapper bread-wrapper">-->
        <p class="body-text transition3 bread-element" :class="{exit: exitRoute, outDown: outDown}">hello@jsparvath.com</p>
      <!--</div>-->
    </section>

  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'

  export default {
    mixins: [RouteTransition]
  }
</script>

