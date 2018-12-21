<template lang="pug">
  .post
    header
      h1.post__title Aplicación blog, de ejemplo, usando Vue
    .post__content
      vue-markdown
        | He realizado ésta aplicación como ejemplo para saber cómo se estructura y funcionan unidas las siguientes tecnologías:
        | - **Node.js**: Plataforma usada para el backend.
        | - **Express.js**: Es un framework para Node.js, que facilita la creación de API REST y el manejo de middlewares, entre otras cosas.
        | - **Sequelize.js**: Es un ORM que sirve como capa entre la base de datos (sea MySQL, PostgreSQL o MongoDB, etc) y el cliente en las consultas, además que cuenta con herramientas para hacer migraciones, crear la base de datos y popular las tablas mediante seeders.
        | - **Faker.js**: Es una librería para generar texto de prueba en forma aleatoria.
        | - **Vue.js**: Es un framework progresivo del lado del cliente, es decir para el frontend, sirve para crear desde interfaces de usuario, consumir la API previamente realizada con Express.js, manejo de interacciones de usuario, y facilita la creación de aplicaciones de una sóla página, SPA.
        | - **Sass**: Éste es un preprocesador que transpila a código CSS, es una herramienta que agrega funcionalidad a CSS, como variables, funciones, helpers entre otras cosas.
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
