<template>
  <div class="page-container">
    <section>
      <div class="headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h1 class="headline transition1 bread-element">Beyond...</h1>
      </div>

      <div class="sub-headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h2 class="sub-headline transition2 bread-element">
          Mobile, Desktop and console applications
        </h2>
      </div>

      <div class="body-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <p class="body-text transition3 bread-element">
          Say hello, and I can help you decide what technology best fits your project
        </p>

      </div>
    </section>

  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'

  export default {
    mixins: [RouteTransition]
  }
</script>

