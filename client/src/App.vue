<template lang="pug">
  #app

    app-nav

    app-list-posts(v-show="asideLeft")
    .main
      router-view
      app-footer

</template>

<script>
import EventBus from './EventBus'

// Components
import appListPosts from './components/Post/PostList'
import appNav from './components/Structure/Nav'
import appFooter from './components/Structure/Footer'

export default {
  name: 'App',

  components: {
    appNav,
    appListPosts,
    appFooter
  },

  data () {
    return {
      // Show aside left
      asideLeft: false
    }
  },

  created () {
    // Listen global events from components through EventBus
    EventBus.$on('change-aside-left-state', () => (this.asideLeft = !this.asideLeft))
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  // background-color: beige;
  background-color: white;
  margin-top: 5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.post {
  // background-color: skyblue;
  flex-grow: 2;
  padding: 10px 0px;
  width: 95%;
  margin: auto;
}

.footer {
  background-color: black;
  flex-grow: 1;
  padding: 10px;
  text-align: center;
}
@media screen and (min-width: 600px) {
  .post {
    width: 80%;
    max-width: 800px;
  }
  .footer {
    min-height: $footer-height;
    max-height: $footer-height;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
