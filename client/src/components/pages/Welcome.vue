<template lang="pug">
  .post
    header
      h1.post__title Aplicación de ejemplo, blog usando Vue
    .post__content
      p He realizado ésta aplicación como ejemplo para saber cómo se estructura y funcionan unidas las siguientes tecnologías:
      p
        ul
          li
            strong Node.js:
            |  Plataforma usada para el backend.
          li
            strong Express.js:
            |  Es un framework para Node.js, que facilita la creación de peticiones y el manejo de middleware entre otras cosas.
          li
            strong Sequelize.js:
            |  Es un ORM que sirve como capa entre la base de datos y el cliente en las consultas, además que cuenta con herramientas para hacer migraciones, crear la base de datos y popular las tablas de forma dinámica.
          li
            strong Faker.js:
            |  Entre los middleware que utilicé fue Faker, que es una librería para generar texto de forma aleatoria para popular las tablas.
          li
            strong Vue.js:
            |  Es un framework progresivo del lado del cliente, es decir para el frontend, sirve para crear desde interfaces de usuario, consumir la API previamente realizada con Express.js, manejo de interacciones de usuario, y facilita la creación de aplicaciones de una sóla página, aunque en éste caso estoy utilizando `vue-router` que sirve para emular las rutas a las que se accedería si no fuera una SPA.
          li
            strong Sass:
            |  Éste es un preprocesador que transpila a código CSS, es una herramienta que agrega funcionalidad a CSS, como variables, funciones, helpers entre otras cosas.
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
