<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, outDown: outDown}">About</h1>
      <section id="about-content" class="content">

        <p class=" transition2 body-text" :class="{exit: exitRoute, outDown: outDown}">
          <b>Hello!</b> <br>
          I'm <b>Jonathan Sparvath</b>
          a fullstack developer with emphasis on the backend, but I absolutely love working on the front end as well.
          Most of my free time is spent learning the newest shiny tool or framework, but I'm also a big proponent of
          learning the basics before moving on.
        </p>
        <p class=" transition3 body-text" :class="{exit: exitRoute, outDown: outDown}">
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