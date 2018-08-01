<template>
  <nav>

    <ul id="menu-ul">
      <!--<div id="enclosing-div">-->
        <nuxt-link exact to="/">
          <li class="menu-item" >
            ABOUT
          </li>
        </nuxt-link>

      <nuxt-link to="services">
        <li class="menu-item">
          SERVICES
        </li>
      </nuxt-link>

        <nuxt-link to="contact">
          <li class="menu-item">
         CONTACT
          </li>
        </nuxt-link>
    </ul>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/variables.scss";

  #menu-ul {
    padding: 0;
    width: 100%;
    text-align: center;
  }

  #enclosing-div {
    margin: 0 auto;
    max-width: 400px;
  }

  .menu-item {
    color: $menu-item-color;
    font-size: $menu-item-size;
    font-weight: $menu-item-weight;
    font-family: $menu-item-font;

    display: inline-block;
    text-decoration: none;
    margin: 0 7.4%;
    cursor: pointer;

  }
</style>
