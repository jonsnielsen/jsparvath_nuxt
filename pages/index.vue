<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown, enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">About</h1>

      <section id="about-content" class="content">

        <p class=" transition2 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          Hi! I'm <span class="booold">Jonathan Sparvath</span><br class="break">
          I'm a full-stack developer with emphasis on <span class="booold">Front end</span>.
        </p>

        <p class="transition3 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          Most of my spare time is spent keeping up to date with the newest technologies within my field.  
          Beyond coding, my biggest passions are coffee and ping-pong.
        </p>
        <Arrow></Arrow>

      </section>
    </main>
  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin';
  import Arrow from '~/components/Arrow';
  export default {
    components: {
      Arrow
    },
    mixins: [RouteTransition]
  }

</script>

<style scoped lang="scss">
  #about-content {
    max-width: 40ch;
  }


  @media (max-width: $breakpoint-mobile-width) {
    br {
      display: none;
    }

    .hello {
      font-weight: 300;
    }
  }

</style>
