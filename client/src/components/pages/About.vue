<template>
  <!-- eslint-disable -->
  <div class="post">
    <div class="post__content">
<vue-markdown :emoji="true" :typographer="true" :breaks="true" :html="true">
# Sobre este proyecto
---

Este proyecto está destinado al aprendizaje, es decir a conocer la comunicación de cada componente, no sólo en el aspecto de Vue.js, si no también la comunicación con otras tecnologías como lo es Express.js, Node.js y Sequelize.js.

## Estructura
El proyecto está estructurado de la manera más simple posible, sólo un navbar con algunos botones que cambian la ruta "principal", y un `sidebar` (otro componente) donde se listan o más bien, se obtienen los datos desde una base de datos `MySQL` a través del ORM `Sequelize`, se obtienen todos los posts que están en la base de datos.

``` js
[{
  "id": 1,
  "title": "iste",
  "content": "Et sint quam ducimus id sequi.",
  "createdAt": "2018-12-18T01:38:48.000Z",
  "updatedAt": "2018-12-18T01:38:48.000Z",
  "UserId": 8,
  "User": {
    "id": 8,
    "name": "Mr. Cyrus Schimmel",
    "email": "Precious_Welch25@hotmail.com",
    "createdAt": "2018-12-18T01:38:40.000Z",
    "updatedAt": "2018-12-18T01:38:40.000Z"
  },
  "tags": [{
    "id": 1,
    "name": "omnis-magni-voluptatem",
    "createdAt": "2018-12-18T01:38:49.000Z",
    "updatedAt": "2018-12-18T01:38:49.000Z",
    "Post_Tags": {
      "createdAt": "2018-12-18T01:38:49.000Z",
      "updatedAt": "2018-12-18T01:38:49.000Z",
      "PostId": 1,
      "TagId": 1
    }
  }]
}]
```

En el snippet anterior se puede ver los datos que develve Express, se puede ver cómo está estructurada la información, se está haciendo una llamada al siguiente `endpoint`: `http://localhost:3000/api/v1/posts/1` por el cual se recibe la respuesta mostrada anteriormente en el snippet.

Se puede notar que el post le pertenece al usuario con el `id: 8`, y también se puede notar que éste post en particular tiene una etiqueta o un `tag`, internamente tienen relaciones de `1:n` y `n:m`.

## Peticiones a través de Express

Como he dicho, Express se encarga de dibujar las rutas y en base a ello obtener diferentes tipos de información por diferentes tipos de estado `HTTP`.

Una ruta para una petición del tipo `GET` express se ve de la siguiente forma :sunglasses:

``` js
/* GET all posts */
router.get('/', (req, res, next) => {
  Post.findAll({
    include: [{ model: User },
              { model: Tag, as: 'tags' }]
  }).then(posts => res.json(posts));
});
```

El snippet anterior es código DSL de Sequelize, donde hace una consulta para traer a todos los registros de la tabla `posts` pero también incluyendo sus relaciones, en este caso la asociación de uno a muchos con el usuario, y la relación de muchos a muchos con el modelo `Tag`.

Esto hace que las peticiones a relaciones con otros modelos que tiene sea mucho más sencillo de consultar, a comparación de realizar múltiples `joins`.

# Desarrollo del Front-End
---------

</vue-markdown>
      <img class="img__responsive" src="@/assets/img/app_error_network.png">
<vue-markdown>
Para la realización de la interfaz fue al vuelo, quería que fuera lo más simple posible, y creo que lo he conseguido, quería tratar de obtener un comportamiento de un `aside` parecido al de YouTube.

En la primera imagen se puede ver cómo se muestra un mensaje de error y esto es porque he trabajado en el manejo de errores que podrían ocurrir en la aplicación, por ejemplo que el servidor que sirve la API REST no responda, etc., ya que éstos datos se manejan automáticamente, quise que el usuario conociera que ha ocurrido un error en el flujo de comunicación que se sigue.

La comunicación entre los componentes es muy simple, se comunican a través de un archivo Bus de eventos para hacerles saber a los demás componentes sobre su comportamiento.

La interacción del `aside` es una comunicación entre el componente `Nav` y el componente `AsideLeft`, no hay mayor misterio.

Para compartir datos globales existe un archivo de nombre `Store.js` donde ahí pensé en manejar principalmente los `endpoints` que se fueran agregando.


</vue-markdown>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'About'
}
</script>
