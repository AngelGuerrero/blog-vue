<template lang="pug">
  #app
    app-nav
    .content
      app-list-posts(v-show="asideLeft")
      router-view
    app-footer
</template>

<script>
import EventBus from './EventBus'
import appNav from './components/Nav'
import appListPosts from './components/ListPosts'
import appFooter from './components/Footer'

export default {
  name: 'App',

  components: {
    appNav,
    appListPosts,
    appFooter
  },

  data () {
    return {
      // The aside left loads the projects list
      asideLeft: false
    }
  },

  created () {
    window.addEventListener('resize', this.resize)

    // Listen global events from components through EventBus
    EventBus.$on('change-aside-left-state', () => (this.asideLeft = !this.asideLeft))
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
