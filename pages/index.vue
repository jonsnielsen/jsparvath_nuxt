<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown, enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">About</h1>

      <section id="about-content" class="content">

        <p class=" transition2 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <span class="booold hello">Hello!</span> <br class="break">
          I'm <span class="booold">Jonathan Sparvath</span> a full stack developer with emphasis on the back end, but I
          absolutely love working on the front end as well!
       
        </p>
        <p class="transition3 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          I also have an interest in visual design that I exersize on my personal projects.
          Most of my free time is spent learning the newest shiny technologies and when I’m not in front of a computer, I love to play ping-pong.
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
