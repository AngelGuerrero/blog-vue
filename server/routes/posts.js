var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var Post = models.Post;
var Tag = models.Tag;
var User = models.User;

/* GET all posts */
router.get('/', (req, res, next) => {
  Post.findAll({
    include: [{ model: User },
              { model: Tag, as: 'tags' }]
  }).then(posts => res.json(posts));
});

/* GET a specific post */
router.get('/:id', (req, res, next) => {
  Post.findAll({
      where: { id: req.params.id },
      include: [{ model: User },
                { model: Tag, as: 'tags' }]
    })
    .then(post => res.json(post))
})

/* POST create a new post */
router.post('/', (req, res, next) => {
  Post.create(req.body).then(post => res.json(post))
});

/* PUT edit a existing post */
router.put('/:id', (req, res, next) => {
  Post.update(req.body, {
    where: { id: req.params.id }
  })
  .then(affectedRows => {
    if(affectedRows == 0) return res.status(404).json({ message: "Resource not found" })
    
    res.status(200).json({ affectedRows })
  })
})

/* DELETE an existing post */
router.delete('/:id', (req, res, next) => {
  Post.destroy({
    where: { id: req.params.id }
  })
  .then(affectedRows => {
    if(affectedRows == 0) return res.status(404).json({ message: "Resource not found" })
    
    res.status(200).json({ affectedRows })
  })
})
module.exports = router;