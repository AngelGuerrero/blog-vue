<template lang="pug">
  .post
    notification(:visible="notification"
                 :type="status"
                 @close="close-notification()"
                 :disposable="disposable"
                 ) {{ message }}

    div(v-if="post")

      component(:is="currentComponent" v-bind="componentProperties")

      .post__controls
        button(class="btn-default" @click="changeComponent('edit')" v-show="component == 'show' ") Editar
        button(class="btn-primary" @click="changeComponent('show')" v-show="component == 'edit' ") Volver
        button(class="btn-danger") Eliminar
</template>

<script>
import axios from 'axios'
import store from '@/store'
import EventBus from '@/EventBus'

import postShow from '@/components/Post/PostShow'
import postEdit from '@/components/Post/PostEdit'

export default {
  name: 'Post',

  components: {
    postShow,
    postEdit
  },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      //
      // Initial states
      //

      post: '',

      // Default component
      component: 'show',

      // Load notification message
      notification: true,

      // Set the notification message
      message: 'Loading content...',

      // Current notification state
      status: 'warning',

      // Set if the notification is disposable
      disposable: false,

      //
      // External data
      //
      store
    }
  },

  computed: {
    currentComponent: function () {
      return `post-${this.component}`
    },

    // eslint-disable-next-line vue/return-in-computed-property
    componentProperties: function () {
      if (this.currentComponent === 'post-show' || this.currentComponent === 'post-edit') {
        return { post: this.post }
      }
    }
  },

  watch: {
    '$route' () {
      //
      // Observe the component view
      // and get a post by an id
      //
      this.component = 'show'
      this.getPost(this.id)
    }
  },

  created () {
    this.getPost(this.id)

    //
    // On Event listeners
    //
    EventBus.$on('show-notification', (data) => {
      this.notification = true
      this.message = data.msg
      this.status = data.status
      this.disposable = data.disposable
    })

    EventBus.$on('close-notification', () => (this.notification = false))
  },

  methods: {
    //
    // Get a post by id
    //
    // Get a post using the endpoint in the store file
    //
    getPost (id) {
      axios.get(`${this.store.endpoint}${this.store.posts}/${id}`)
        .then(res => {
          this.post = res.data[0]
          this.notification = false
        })
        .catch(err => {
          this.notification = true
          this.status = 'danger'
          this.message = `${err}`
        })
    },

    //
    // Change a component view
    //
    changeComponent (component) {
      this.component = component
    }
  }
}
</script>
