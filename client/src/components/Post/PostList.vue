<template lang="pug">
  .aside-left(class="mobile")

    .screen(@click="dissapear()")

    header(class="aside__header")
      .menu-bars(@click="dissapear()")
        i(class="fas fa-bars fa-lg bars-icon")

      h3.aside-left__title {{ store.app_name }}

    nav
      router-link(v-for="post in posts.data"
                  class="nav__item"
                  :key="post.id"
                  :to="{ name: 'post', params: { id: post.id }}"
                  @click.native="dissapear()"
                  ) {{ post.title }}

      .message(v-if="error || loading" :class="{ error }")
        h4.message__msg {{ message }}
</template>

<script>
import axios from 'axios'
import store from '@/store'
import EventBus from '@/EventBus'

export default {
  name: 'PostList',

  data () {
    return {
      //
      // Initial states
      //

      posts: '',

      // Show message if error
      error: false,

      // Show message while loading
      loading: true,

      // Content of message
      message: 'Loading...',

      // External data
      store
    }
  },

  created () {
    this.getPosts()
  },

  methods: {
    //
    // Get all the posts
    //
    getPosts () {
      axios.get(`${this.store.endpoint}${this.store.posts}`)
        .then(res => {
          this.loading = false
          this.posts = res
        })
        .catch(err => {
          this.loading = false
          this.error = true
          this.message = `${err}`
        })
    },

    //
    // On Emit Events
    //
    dissapear () {
      EventBus.$emit('change-aside-left-state')
    }
  }
}
</script>

<style lang="scss" scoped>
.screen {
  background-color: #202020;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
}

.aside-left {
  min-width: 250px;
  max-width: 250px;
  width: 60%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 5px 5px 25px #555555;

  &__title {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 0;
  }
}

.aside__header {
  display: flex;
  align-items: center;
  min-height: $nav-height;
  max-height: $nav-height;
  padding: 10px;
  background-color: black;
  color: #7eff89;
}

nav {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
  background-color: white;

  .nav__item {
    flex-grow: 1;
    padding: 7px 12px;
    color: #353535;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      background-color: $btn-primary--bgcolor;
      color: white;
    }
  }
}

.message {
  padding: 10px;
  text-align: center;
  background-color: #d5e7ff;
  color: #5e5e5e;

  &__msg {
    padding: 0;
    margin: 0;
  }
}

.error {
  background: #ffb8ab;
  color: #ff2b2b;
}

.router-link-active {
  background-color: #7da6fd;
  color: white;
}

@media screen and (max-width: 425px) {
  .mobile {
    width: 80%;
  }
}
</style>
