<template lang="pug">
  .nav
    .brand
      .menu-bars(@click="changeAsideLeft()")
        i(class="fas fa-bars fa-lg bars-icon")
      h3.nav__title {{ store.app_name }}
    .menu
      router-link(:to="{ name: 'home' }" class="menu__item" exact) Home
      router-link(:to="{ name: 'about'}" class="menu__item" exact) About
      router-link(:to="{ name: 'contact'}" class="menu__item" exact) Contact
</template>

<script>
import EventBus from '@/EventBus'
import store from '@/store'

export default {
  name: 'Nav',

  data () {
    return {
      store
    }
  },

  methods: {
    changeAsideLeft () {
      EventBus.$emit('change-aside-left-state')
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: $btn-primary--bgcolor;
  color: white;
}

.nav {
  padding: $nav-padding;
  min-height: $nav-height;
  max-height: $nav-height;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-shadow: 1px 1px 5px #dadada;
  // border-bottom: 1px solid #f1f1f1;
}

.brand {
  width: 150px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.nav__title {
  display: none;
  color: #202020;
  flex-grow: 1;
  text-align: center;
  padding: 0;
}

.menu {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  .menu__item {
    @extend %btn;
    display: flex;
    align-items: center;
  }
}

@media screen and (min-width: 425px) {
  .nav__title {
    display: block;
  }
}
</style>
