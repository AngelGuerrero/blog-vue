var express = require('express');
var router = express.Router();
var models = require('../models/index');

var User = models.User
var Post = models.Post

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.findAll({
    include: [{
      model: Post
    }]
  }).then(users => res.json(users))
});

/* GET and existing user */
router.get('/:id', (req, res, next) => {
  User.findAll({
      where: { id: req.params.id }
    })
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

/* GET and user with its posts */
router.get('/:id/posts', (req, res, next) => {
  User.findAll({
    where: { id: req.params.id },
    include: [{ model: Post }]
  })
  .then(user => res.json(user))
  .catch(err => res.status(500).json(err));
})

/* POST create a new user */
router.post('/', (req, res, next) => {
  User.create(req.body).then(user => res.json(user))
});

/* PUT update and existing resource */
router.put('/:id', (req, res, next) => {
  User.update(req.body, {
      where: { id: req.params.id }
    })
    .then(affectedRows => {
      if (affectedRows == 0) return res.status(404).json({
        message: 'Resource not found'
      });

      res.status(200).json({
        affectedRows
      });
    });
});

/* DELETE and existing resource */
router.delete('/:id', (req, res, next) => {
  User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(affectedRows => {
      if (affectedRows == 0) return res.status(404).json({
        message: 'Resource not found'
      })

      res.status(200).json({
        affectedRows
      })
    })
})

module.exports = router;