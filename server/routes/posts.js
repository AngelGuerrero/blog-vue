var express = require('express');
var router = express.Router();
var models = require('../models/index');
var Post = models.Post;
var Tag = models.Tag;
var User = models.User;

/* GET all posts */
router.get('/', (req, res, next) => {
  Post.findAll({
    include: [{
        model: User
      },
      {
        model: Tag,
        as: 'tags'
      }
    ]
  }).then(posts => res.json(posts));
});

/* POST create a new post */
router.post('/', (req, res, next) => {
  Post.create(req.body).then(post => res.json(post))
});

module.exports = router;