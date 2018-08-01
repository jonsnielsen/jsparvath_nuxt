<template>
  <div class="page-container">
    <section>
      <div class="headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h1 class="headline transition1 bread-element">Contact</h1>
      </div>

      <div class="sub-headline-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <h2 class="sub-headline transition2 bread-element">
          Drop me a line if you would like together, request a quote or just say hello
        </h2>
      </div>

      <div class="body-wrapper bread-wrapper" :class="{exit: exitRoute, outDown: outDown}">
        <p class="body transition3 bread-element">hello@jsparvath.com</p>
      </div>
    </section>

  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'

  export default {
    mixins: [RouteTransition],
    layout: 'contact-bc'
  }
</script>

