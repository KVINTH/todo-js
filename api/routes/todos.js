var express = require('express');
var router = express.Router();
var queries = require('../db/queries/todos');

/* GET todos listing. */
router.get('/', function(req, res, next) {
  queries
    .getAll()
    .then(results => res.send(results));
});

/* POST todo item. */
router.post('/', function(req, res, next) {
  const todo = req.body;
  queries
    .create(todo)
    .then((todos) => console.log(todos));

  res.sendStatus(201);
});

/* GET todo item. */
router.get('/:id', function(req, res, next) {
  queries
    .getOne(req.params.id)
    .then(results => res.send(results));
});

/* PUT todo item. */
router.put('/:id', function(req, res, next) {
  queries.update(req.params.id, req.body)
    .then(results => res.sendStatus(200));
});

/* DELETE todo item. */
router.delete('/:id', function(req, res, next) {
  queries.delete(req.params.id)
    .then(results => res.sendStatus(200))
    .catch(err => console.log(err), res.sendStatus(500));
});

module.exports = router;