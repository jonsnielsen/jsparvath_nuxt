<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1 bread-element" :class="{exit: exitRoute, outDown: outDown}">Contact</h1>
      <section class="content">

        <h2 class="sub-headline transition2 bread-element" :class="{exit: exitRoute, outDown: outDown}">
          Drop me a line if you would like together, request a quote or just say hello
        </h2>

        <p class="body-text transition3 bread-element" :class="{exit: exitRoute, outDown: outDown}">hello@jsparvath.com</p>
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