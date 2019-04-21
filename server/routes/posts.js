var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var {
  response
} = require('../lib/common')

// Models
var Post = models.Post;
var Tag = models.Tag;
var User = models.User;

/* GET all posts */
router.get('/', (req, res, next) => {
  let query = {
    include: [{
        model: User
      },
      {
        model: Tag,
        as: 'tags'
      }
    ]
  };

  Post.findAll(query)
    .then(posts => response(posts, res))
    .catch(err => res.status(500).json(err));
});

/* GET a specific post */
router.get('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    },
    include: [{
        model: User
      },
      {
        model: Tag,
        as: 'tags'
      }
    ]
  };

  Post.findAll(query)
    .then(post => response(post, res))
    .catch(err => res.status(500).json(err));
});

/* POST create a new post */
router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => res.json(post))
    .catch(err => res.status(500).json(err));
});

/* PUT edit a existing post */
router.put('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  Post.update(req.body, query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));
});

/* DELETE an existing post */
router.delete('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  Post.destroy(query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));
});

module.exports = router;