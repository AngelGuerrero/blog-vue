<template lang="pug">
  .footer
    h5.footer__title Created with Vue.js + Sequelize + Node.js + Express.js <3
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.footer {
  padding: 15px;
  height: $footer-height;
  background-color: lighten($color: #777777, $amount: 50);

  &__title {
    margin: 0;
    padding: 0;
    color: #777777;
    text-align: center;
  }
}
</style>
