<template lang="pug">
  .footer
    p.footer__title Made with
    p.footer__title #[i.fas.fa-heartbeat]
    p.footer__title.
      + #[a(href="https://sass-lang.com/") Sass]
    p.footer__title.
      + #[a(href="https://pugjs.org/api/getting-started.html") Pug.js]
    p.footer__title.
      + #[a(href="http://vuejs.org/") Vue.js]
    p.footer__title.
      + #[a(href="https://expressjs.com/es/") Express.js]
    p.footer__title.
      + #[a(href="https://nodejs.org/es/") Node.js]
    p.footer__title.
      + #[a(href="http://docs.sequelizejs.com/") Sequelize.js]
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.footer__title {
  color: #7eff89;
}

a {
  color: aqua;
}

i {
  margin: 10px;
  color: #ff7777;
}
</style>
