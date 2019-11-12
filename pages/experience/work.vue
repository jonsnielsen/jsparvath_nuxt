<template>
  <div class="page-container">
    <main>
      <h1
        class="headline transition1 "
        :class="{
          exit: exitRoute,
          exitUp: exitUp,
          exitDown: exitDown,
          enterUp: enterUp,
          enterDown: enterDown,
          enter: enterRoute
        }"
      >
        Work
      </h1>

      <section class="content">
        <section
          class="item-group transition2 work-item-group"
          :class="{
            exit: exitRoute,
            exitUp: exitUp,
            exitDown: exitDown,
            enterUp: enterUp,
            enterDown: enterDown,
            enter: enterRoute
          }"
        >
          <p class="time-span">07 / 2018 - 08 / 2019</p>
          <h2>Freelance Software Consultant, Moment</h2>
          <p class="greyed">
            <span class="">Danmarks Miljøportal (DMP)</span> - HTML5, CSS &
            JavaScript on the front-end and Umbraco CMS on the back-end.
          </p>
        </section>

        <section
          class="item-group transition3 work-item-group"
          :class="{
            exit: exitRoute,
            exitUp: exitUp,
            exitDown: exitDown,
            enterUp: enterUp,
            enterDown: enterDown,
            enter: enterRoute
          }"
        >
          <p class="time-span">11 / 2017 - 04 / 2018</p>
          <h2>IT Consultant, Kraftvaerk</h2>
          <p class="greyed">
            Full-stack developer, working primarily with C#/.NET and Umbraco CMS
            on the back end, and HTML, CSS and JavaScript on the front end.
          </p>
        </section>
        <Arrow></Arrow>
      </section>
    </main>
  </div>
</template>

<script>
import RouteTransition from "~/components/mixins/RouteTransitionMixin";
import Arrow from "~/components/Arrow";
export default {
  components: {
    Arrow
  },
  mixins: [RouteTransition]
};
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

.italic {
  font-style: italic;
}
</style>
