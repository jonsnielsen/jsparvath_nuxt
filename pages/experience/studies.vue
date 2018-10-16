<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">Studies</h1>
      <section class="content">

        <div class="item-group transition2" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <p class="time-span">2016 – 2018</p>
          <h2>Software development</h2>
          <p>IT-University, Copenhagen </p>
        </div>

        <div class="item-group transition3" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <p class="time-span">2014-2015</p>
          <h2>Asian Studies, Chinese</h2>
          <p>Copenhagen Business School</p>
        </div>

        <div class="item-group transition4" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <p class="time-span">2013-2014</p>
          <h2>Asian Studies, Japanese</h2>
          <p>Copenhagen Business School</p>
        </div>
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