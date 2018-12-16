var express = require('express');
var router = express.Router();
var models = require('../models/index');

var Tag = models.Tag;

/* GET all tags */
router.get('/', (req, res, next) => {
  Tag.findAll().then(tags => res.json(tags))
});

/* POST create a new tag */
router.post('/', (req, res, next) => {
  Tag.create(req.body).then(tag => res.json(tag))
});

module.exports = router;