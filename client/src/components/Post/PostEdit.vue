<template lang="pug">
  .post__edit
    label(for="title") Título
    input(id="title" name="title" v-model="post.title")
    label(for="content") Contenido
    textarea(id="content" name="content" rows="20" v-model="post.content")
    button(class="btn-success" @click="save()") Guardar
</template>

<script>
import axios from 'axios'
import store from '@/store'
import EventBus from '@/EventBus'

export default {
  name: 'PostEdit',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      store
    }
  },

  methods: {
    save () {
      axios.put(`${this.store.endpoint}${this.store.posts}/${this.post.id}`, this.post)
        .then(res => {
          this.notification({
            status: 'success',
            msg: 'Post successfully updated!'
          })
        })
        // eslint-disable-next-line handle-callback-err
        .catch(err => {
          this.notification({
            status: 'danger',
            msg: 'Ups, something went wrong, try it more later...'
          })
        })
    },

    notification (options) {
      EventBus.$emit('show-notification', {
        status: options.status,
        msg: options.msg,
        disposable: true
      })
    }
  }
}
</script>
