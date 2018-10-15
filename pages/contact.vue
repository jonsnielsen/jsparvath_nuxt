<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, outDown: outDown}">Contact</h1>
      <section class="content">

        <p class="transition2" :class="{exit: exitRoute, outDown: outDown}">
          Drop me a line if you would like together, request a quote or just say hello
        </p>

        <p class="transition3" :class="{exit: exitRoute, outDown: outDown}">hello@jsparvath.com</p>
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