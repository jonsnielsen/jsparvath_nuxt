<template>
  <div class="page-container">
    <main>

      <h1 class="headline transition1 " :class="{exit: exitRoute, outDown: outDown}">Work</h1>

      <section class="content">

        <section class="item-group transition2 work-item-group" :class="{exit: exitRoute, outDown: outDown}">
          <p class="time-span">08 / 2018 - present</p>
          <h2>Freelance web developer, Danmarks Miljøportal (DMP)</h2>
          <p class="greyed">
            Implementing DMP's new website using HTML5, CSS & JavaScript on the fron-end and using Umbraco CMS on the
            back-end
          </p>
        </section>

        <section class="item-group transition3 work-item-group" :class="{exit: exitRoute, outDown: outDown}">
          <p class="time-span">11 / 2017 - 04 / 2018</p>
          <h2>Back-end consultant, Kraftvaerk</h2>
          <p class="greyed">
            I Primarily worked with C#/.NET and Umbraco as CMS,but also worked on things as: GDPR compliance, web
            server
            configuration, automating tasks with code and fixing bugs on clients' websites
          </p>
        </section>
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