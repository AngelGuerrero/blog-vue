var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var {
  response
} = require('../lib/common');

var User = models.User
var Post = models.Post

/* GET users listing. */
router.get('/', (req, res, next) => {
  let query = {
    include: [{
      model: Post
    }]
  };

  User.findAll(query)
    .then(users => response(users, res))
    .catch(err => res.status(500).json(err));
});

/* GET and existing user */
router.get('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  User.findAll(query)
    .then(user => response(user, res))
    .catch(err => res.status(500).json(err));
});

/* GET and user with its posts */
router.get('/:id/posts', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    },
    include: [{
      model: Post
    }]
  };

  User.findAll(query)
    .then(user => response(user, res))
    .catch(err => res.status(500).json(err));
})

/* POST create a new user */
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

/* PUT update and existing resource */
router.put('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  User.update(req.body, query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));;
});

/* DELETE and existing resource */
router.delete('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  User.destroy(query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));
})

module.exports = router;