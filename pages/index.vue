<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown, enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">About</h1>
      <section id="about-content" class="content">

        <p class=" transition2 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <span class="booold">Hello!</span> <br>
          I'm <span class="booold">Jonathan Sparvath</span> a fullstack developer with emphasis on the backend, but I
          absolutely love working on the front end as well.
          Most of my free time is spent learning the newest shiny tool or framework, but I'm also a big proponent of
          learning the basics before moving on.
        </p>
        <p class="transition3 item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          I also have an interest in visual design that I exersize on personal projects.
          When I’m not in front of my computer, I love to play pingpong, enjoy the nightlife or travel the world.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'

  export default {
    mixins: [RouteTransition]
  }
</script>

<style scoped>
  #about-content {
    max-width: 40ch;
  }
</style>