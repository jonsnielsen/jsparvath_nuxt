<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown , enter: enterRoute}">Contact</h1>
      <section class="content contact-content">

        <p class="transition2" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown , enter: enterRoute}">
          Drop me a line if you would like to work together, get a coffe or just say hello!
        </p>

        <p id="contact-email" class="transition3" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown , enter: enterRoute}"><span
            class="booold"><a href="mailto:jonathan.sparvath@gmail.com">jonathan.sparvath@gmail.com</a></span></p>
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

<style lang="scss">
  .contact-content {
    max-width: 25ch;
  }

  #contact-email {
    margin-top: 14px;
  }
</style>