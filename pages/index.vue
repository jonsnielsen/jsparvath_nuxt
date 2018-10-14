<template>
  <div class="page-container">
    <main>
        <h1 class="headline transition1 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          About
        </h1>

        <p  class="body-text transition2 bread-element" :class="{exit: exitRoute, outDown: outDown}">
            Hello! <br>
            I'm Jonathan Sparvath
            a fullstack developer with emphasis on the backend, but I absolutely love working on the front end as well.
            Most of my free time is spent learning the newest shiny tool or framework, but I'm also a big proponent of learning the basics before moving on.
        </p>

        <p  class="sub-headline transition3 bread-element" :class="{exit: exitRoute, outDown: outDown}">
            I also have an interest in visual design that I exersize on personal projects.
            When I’m not in front of my computer, I love to play pingpong, enjoy the nightlife or travel the world.
        </p>


        <!-- <p class="body-text transition3 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          I help
          <span class="emphasized">individuals</span>,
          <span class="emphasized">startups</span> and
          <span class="emphasized">established businesses</span> to turn ideas and designs into smooth and functional
          applications
        </p> -->
    </main>

  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'

  export default {
    mixins: [RouteTransition]
  }
</script>

