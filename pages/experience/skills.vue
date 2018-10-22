<template>
  <div class="page-container">
    <main>
      <h1 class="headline transition1" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown,   enter: enterRoute}">Skills
      </h1>


      <section class="content">

        <p class="transition2 item-group skills-teaser" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown,   enter: enterRoute}">
          Some of the tools and languages that I have previously worked with:
        </p>

        <section class="item-group transition3 skills-item-group" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown,   enter: enterRoute}">
          <h2>Front end:</h2>
          <p>HTML5, CSS3, Sass, Vue.js, Electron.js, Angular 2+, Xamarin </p>

          <!-- <ul>
              <li>HTML5,&nbsp;</li>
              <li>CSS3,&nbsp;</li>
              <li>Sass,&nbsp;</li>
              <li>Vue.js,&nbsp;</li>
              <li>Electron.js,&nbsp;</li>
              <li>Angular 2+,&nbsp;</li>
              <li>Xamarin</li>
            </ul> -->
        </section>

        <section class="item-group transition4 skills-item-group" :class="{exit: exitRoute,  exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown,  enter: enterRoute}">
          <h2>Back end:</h2>
          <p>Node.js, Express.js, MongoDB, SQL, C#, Umbraco CMS, F#</p>

          <!-- <ul>
              <li>Node.js,&nbsp;</li>
              <li>Express.js,&nbsp;</li>
              <li>MongoDB,&nbsp;</li>
              <li>SQL,&nbsp;</li>
              <li>C#,&nbsp;</li>
              <li>Umbraco,&nbsp;</li>
              <li>F#</li>
            </ul> -->
        </section>


        <section class="item-group transition5 skills-item-group" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown,   enter: enterRoute}">
          <h2>Tools:</h2>
          <p>Git, SVN, Webpack</p>

          <!-- <ul>
              <li>Git,&nbsp;</li>
              <li>SVN,&nbsp;</li>
              <li>Webpack</li>
            </ul> -->
        </section>
        <Arrow></Arrow>
      </section>
    </main>
  </div>
</template>

<script>
  import RouteTransition from '~/components/mixins/RouteTransitionMixin'
  import Arrow from '~/components/Arrow';

  export default {
    components: {
      Arrow
    },
    mixins: [RouteTransition]
  }

</script>

<style lang="scss" scoped>
  .content {
    max-width: 30ch;
  }

  .skills-teaser {
    max-width: 35ch;
  }

  .skills-item-group {
    max-width: 20ch;
  }

</style>
