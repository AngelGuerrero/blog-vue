-- Saber cuántas etiquetas "tags" tiene cada post
 SELECT posts.id,
		    posts.title,
        COUNT(1) TotalTags
   FROM posts
   JOIN post_tags
   JOIN tags
  WHERE tags.id = post_tags.TagId
    AND posts.id = post_tags.PostId
  GROUP BY id
      ;
      
-- Consulta parecida a la de arriba,
-- sólo que muestra información de las dos tablas
 SELECT posts.id,
		posts.title,
		tags.id TagId,
        tags.name TagName
   FROM posts
   JOIN post_tags
   JOIN tags
  WHERE tags.id = post_tags.TagId
    AND posts.id = post_tags.PostId
      ;

-- Consulta para saber ¿cuántos posts le pertenecen a cada usuario?
 SELECT users.id,
		users.name,
		COUNT(users.name) TotalPosts
   FROM users
   JOIN posts
  WHERE 1 = 1
    AND users.id = posts.UserId
  GROUP BY users.name
 ORDER BY 1
      ;