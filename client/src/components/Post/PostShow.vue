<template lang="pug">
  div
    .post__header
      h1.post__title {{ post.title }}
      small Author: {{ post.User.name }}
      br
      small Created at: {{ created_at }}
      .post__content {{ post.content }}
      .post__tags
        .tags__header
          h5 Tags
        .tags__container
          .tag(v-for="tag in post.tags") {{ tag.name }}
</template>

<script>
export default {
  name: 'PostShow',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  created () {
    this.created_at = new Date(this.post.createdAt).toDateString()
  }
}
</script>
