var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var {
  response
} = require('../lib/common')

// Models
var Tag = models.Tag;

/* GET all tags */
router.get('/', (req, res, next) => {
  Tag.findAll()
    .then(tags => response(tags, res))
    .catch(err => res.status(500).json(err));
});

/* GET a specific resource */
router.get('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  Tag.findAll(query)
    .then(tag => response(tag, res))
    .catch(err => res.status(500).json(err));

});

/* POST create a new tag */
router.post('/', (req, res, next) => {
  Tag.create(req.body)
    .then(tag => res.json(tag))
    .catch(err => res.status(500).json(err));
});

/* PUT for update a existing post */
router.put('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  Tag.update(req.body, query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));
});

/* DELETE for destoy a resource from database */
router.delete('/:id', (req, res, next) => {
  let query = {
    where: {
      id: req.params.id
    }
  };

  Tag.destroy(query)
    .then(affectedRows => response(affectedRows, res))
    .catch(err => res.status(500).json(err));
});

module.exports = router;