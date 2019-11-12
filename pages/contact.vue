<template>
  <div class="page-container">
    <main>
      <h1
        class="headline transition1"
        :class="{
          exit: exitRoute,
          exitUp: exitUp,
          exitDown: exitDown,
          enterUp: enterUp,
          enterDown: enterDown,
          enter: enterRoute
        }"
      >
        Contact
      </h1>
      <section class="content contact-content">
        <p
          class="transition2"
          :class="{
            exit: exitRoute,
            exitUp: exitUp,
            exitDown: exitDown,
            enterUp: enterUp,
            enterDown: enterDown,
            enter: enterRoute
          }"
        >
          Feel free to contact me if you would like to work together, get a
          coffee or just say hello!
        </p>

        <p
          id="contact-email"
          class="transition3"
          :class="{
            exit: exitRoute,
            exitUp: exitUp,
            exitDown: exitDown,
            enterUp: enterUp,
            enterDown: enterDown,
            enter: enterRoute
          }"
        >
          <span class="booold"
            ><a href="mailto:jonathan.sparvath@gmail.com"
              >jonathan.sparvath@gmail.com</a
            ></span
          >
        </p>

        <div
          id="connect-group"
          class="transition4"
          :class="{
            exit: exitRoute,
            exitUp: exitUp,
            exitDown: exitDown,
            enterUp: enterUp,
            enterDown: enterDown,
            enter: enterRoute
          }"
        >
          <!--   <p id="connect-text">Lets connect!</p> -->
          <ul id="connect-item-list">
            <li>
              <a
                class="connect-item"
                href="https://www.linkedin.com/in/jsparvath/"
                rel="noopener"
                target="_blank"
                >LinkedIn</a
              >&nbsp;&nbsp;/
            </li>
            <li>
              &nbsp;&nbsp;<a
                class="connect-item"
                href="https://github.com/jsparvath"
                rel="noopener"
                target="_blank"
                >GitHub</a
              >&nbsp;&nbsp;/
            </li>
            <li>
              &nbsp;&nbsp;<a
                class="connect-item"
                href="https://www.instagram.com/jsparvath/"
                rel="noopener"
                target="_blank"
                >Instagram</a
              >
            </li>
          </ul>
        </div>

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

<style lang="scss">
.contact-content {
  max-width: 25ch;
}

#contact-email {
  /* margin-top: 14px; */
}

#connect-group {
  margin-top: 15px;
}

#connect-text {
  font-weight: 500;
}

#connect-item-list {
  position: relative;
  top: -5px;
  list-style-type: none;
  /* background-color: blue; */
  /* margin: 0 auto; */
}

.connect-item {
  /* background-color: red; */
  padding: 4px 0;
}
</style>
