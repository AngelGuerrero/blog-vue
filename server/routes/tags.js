var express = require('express');
var router = express.Router();
var models = require('../models/index');

var Tag = models.Tag;

/* GET all tags */
router.get('/', (req, res, next) => {
  Tag.findAll().then(tags => res.json(tags))
});

/* GET a specific resource */
router.get('/:id', (req, res, next) => {
  Tag.findAll({
    where: { id: req.params.id }
  })
  .then(tag => res.status(200).json(tag))
})

/* POST create a new tag */
router.post('/', (req, res, next) => {
  Tag.create(req.body).then(tag => res.json(tag))
});

/* PUT for update a existing post */
router.put('/:id', (req, res, next) => {
  Tag.update(req.body, {
    where: { id: req.params.id }
  })
  .then(affectedRows => {
    if(affectedRows == 0) return res.status(404).json({ message: "Resource not found" })
    
    res.status(200).json({ affectedRows })
  })
})

/* DELETE for destoy a resource from database */
router.delete('/:id', (req, res, next) => {
  Tag.destroy({
    where: { id: req.params.id }
  })
  .then(affectedRows => {
    if(affectedRows == 0) return res.status(404).json({ message: "Resource not found" })
    
    res.status(200).json({ affectedRows })
  })
})

module.exports = router;