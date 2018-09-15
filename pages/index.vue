<template>
  <div class="page-container">
    <section>
      <!--<div class="headline-wrapper bread-wrapper" >-->
        <h1 class="headline transition1 bread-element" :class="{exit: exitRoute, outDown: outDown}">&nbsp;Hi! I'm
          <span class="emphasized break">Jonathan Sparvath</span>
        </h1>

      <!--</div>-->

      <!--<div class="sub-headline-wrapper bread-wrapper" >-->
        <h2 class="sub-headline transition2 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          <span class="emphasized">Full Stack Developer</span>
          <span class="break">Currently based in Copenhagen</span>
        </h2>
      <!--</div>-->

      <!--<div class="body-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">-->
        <p class="body-text transition3 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          I help
          <span class="emphasized">individuals</span>,
          <span class="emphasized">startups</span> and
          <span class="emphasized">established businesses</span> to turn ideas and designs into smooth and functional
          applications
        </p>
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

