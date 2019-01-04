<template lang="pug">
  div(v-if="visible"
      :class="type"
      class="notification" )

      slot contenido por defecto

      .close(v-if="disposable" @click="close()")
        i.fas.fa-window-close
</template>

<script>
import EventBus from '@/EventBus'

export default {
  name: 'Notification',

  props: {
    //
    // Component is visible if
    // 'visible' variable is true
    //
    visible: {
      type: Boolean,
      default: false,
      required: true
    },

    //
    // Component have a close button
    // if disposable is true
    //
    disposable: {
      type: Boolean,
      default: true,
      required: false
    },

    //
    // Add a class style from the list validator
    //
    type: {
      type: String,
      default: () => 'default',
      validator: (value) => {
        return ['default', 'success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },

  methods: {
    //
    // Custom event 'close'
    // Emit event 'close-notification' until the parent
    // for dissapear the component
    //
    close () {
      EventBus.$emit('close-notification')
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  border-radius: 3px;
  margin: 10px 0px;
  padding: 15px;
  position: relative;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
