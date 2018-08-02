<template>
  <div class="page-container">
    <section>
      <div class="headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h1 class="headline transition1 bread-element">Web
          <span class="break">Developement</span>
        </h1>

      </div>

      <div class="sub-headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h2 class="sub-headline transition2 bread-element">
          e-commerce, blogs,
          <span class="emphasized">CMS, PWA, SPA</span>
          <span class="break">-and other acronyms</span>
        </h2>
      </div>

      <div class="body-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <p class="body-text transition3 bread-element">
          I do both front- and back-end on small-large applications,
          specializing in optimal performance and short loading times
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

