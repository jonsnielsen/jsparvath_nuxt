<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1 " :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">Work</h1>

      <section class="content">

        <section class="item-group transition2 work-item-group" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <p class="time-span">08 / 2018 - present</p>
          <h2>Freelance web developer, Danmarks Miljøportal (DMP)</h2>
          <p class="greyed">
            Implementing DMP's new website using HTML5, CSS & JavaScript on the front-end and Umbraco CMS on the
            back-end.
          </p>
        </section>

        <section class="item-group transition3 work-item-group" :class="{exit: exitRoute, exitUp: exitUp, exitDown: exitDown,  enterUp: enterUp, enterDown: enterDown, enter: enterRoute}">
          <p class="time-span">11 / 2017 - 04 / 2018</p>
          <h2>Back-end consultant, Kraftvaerk</h2>
          <p class="greyed">
            <!-- I primarily worked with C#/.NET and Umbraco as CMS, but also worked on things as: GDPR compliance, web
            server configuration, automating tasks with code. -->

            Back-end developer, working with C#/.NET and Umbraco CMS.
            Other tasks include: GDPR compliance, web server configuration, and automating tasks with code
          </p>
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
  .work-item-group {
    max-width: 40ch;
  }

  .greyed {
    color: #dedede;
    color: #fff;
  }

  h2 {
    font-size: 11px;
  }
</style>