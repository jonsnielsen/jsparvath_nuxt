<template>
  <div class="page-container">
    <main>
      <h1 class="headline transition1 bread-element emphasized" :class="{exit: exitRoute, outDown: outDown}">Skills
      </h1>

      <p class="transition2 bread-element " :class="{exit: exitRoute, outDown: outDown}">
        Some of the tools and languages that I have previosly worked with
      </p>

      <section class="item-group transition2 bread-element " :class="{exit: exitRoute, outDown: outDown}">
        <h2>Front end:</h2>
        <ul>
          <li>HTML5, </li>
          <li>CSS3, </li>
          <li>Sass, </li>
          <li>Vue.js, </li>
          <li>Electron.js, </li>
          <li>Angular 2+, </li>
          <li>Xamarin</li>
        </ul>
      </section>

      <section class="item-group transition3 bread-element " :class="{exit: exitRoute, outDown: outDown}">
        <h2>Back end:</h2>
        <ul>
          <li>Node.js, </li>
          <li>Express.js, </li>
          <li>MongoDB, </li>
          <li>SQL, </li>
          <li>C#, </li>
          <li>Umbraco, </li>
          <li>F#</li>
        </ul>
      </section>

      <section class="item-group transition3 bread-element " :class="{exit: exitRoute, outDown: outDown}">
        <h2>Tools:</h2>
        <ul>
          <li>Git, </li>
          <li>SVN, </li>
          <li>Webpack</li>
        </ul>
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