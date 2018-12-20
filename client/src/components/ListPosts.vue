<template lang="pug">
  .aside-left(class="mobile")
    .screen(@click="dissapear()")
    header(class="aside__header")
      .menu-bars(@click="dissapear()")
        i(class="fas fa-bars fa-lg bars-icon")
      h3.aside-left__title {{ store.app_name }}
    nav
      router-link(v-for="post in store.responses.posts.data"
                  :key="post.id"
                  :to="{ name: 'post', params: { id: post.id }}"
                  @click.native="dissapear()"
                  ) {{ post.id }}. {{ post.title }}
      .message(v-if="error || loading" :class="{ error }")
        h4.message__msg {{ message }}
</template>

<script>
import axios from 'axios'
import store from '@/store'
import EventBus from '@/EventBus'

export default {
  name: 'ListPosts',

  data () {
    return {
      store,
      error: false,
      loading: true,
      message: 'Loading...'
    }
  },

  created () {
    this.getPosts()
  },

  methods: {
    // Get all the posts
    getPosts () {
      axios.get(`${this.store.endpoint}${this.store.posts}`)
        .then(res => {
          this.loading = false
          this.store.responses.posts = res
        })
        .catch(err => {
          this.loading = false
          this.error = true
          this.message = `${err}`
        })
    },

    // Emit events
    dissapear () {
      EventBus.$emit('change-aside-left-state')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.screen {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.6;
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
  background-color: #f1f1f1;
  box-shadow: 5px 10px 15px #dadada;

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
  height: $nav-height;
  padding: 10px;
  background-color: #202020;
  color: white;
}

nav {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;

  a {
    flex-grow: 1;
    padding: 7px 12px;
    color: $btn-primary--bgcolor;
    text-decoration: none;

    &:hover {
      background-color: #7da6fd;
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
    // max-width: 100%;
  }
}
</style>
