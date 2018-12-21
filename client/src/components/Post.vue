<template lang="pug">
  .post
    .post__message(v-if="error || loading" :class="{ error }")
      h4.message__msg {{ message }}
    div(v-if="post")
      //- Aquí cambia de componente en vez de cambiar de ruta
      div
        .post__header
          h1.post__title {{ post.title }}
          small Author: {{ post.User.name }}
          br
          small Created at: {{ day }}/{{ month }}/{{ year}}
        .post__content {{ post.content }}
        .post__controls
          a(href="#" class="btn-default") Editar
          a(href="#" class="btn-danger") Eliminar
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
  name: 'Post',

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      post: '',
      error: false,
      loading: true,
      message: 'Loading...',

      store
    }
  },

  watch: {
    '$route' () {
      this.getPost(this.id)
    }
  },

  created () {
    this.getPost(this.id)
  },

  methods: {
    getPost (id) {
      axios.get(`${this.store.endpoint}${this.store.posts}/${id}`)
        .then(res => {
          this.post = res.data[0]

          // Change message status
          this.loading = false

          this.current = new Date(this.post.createdAt)
          this.month = this.current.getMonth()
          this.year = this.current.getFullYear()
          this.day = this.current.getDate()
        })
        .catch(err => {
          this.loading = false
          this.error = true
          this.message = `${err}`
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
</style>
