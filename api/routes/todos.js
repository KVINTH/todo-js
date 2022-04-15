var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      id: 1,
      title: "Pick up dry cleaning.", 
    },
    {
      id: 2,
      title: "Buy groceries.",
    }
  ]);
});

/* POST todo item. */
router.post('/', function(req, res, next) {
  const todo = req.body;
  console.log(todo);
  // save todo to database
  res.sendStatus(200);
});

/* GET todo item. */
router.get('/:id', function(req, res, next) {
});

/* PUT todo item. */
router.put('/:id', function(req, res, next) {
});

/* DELETE todo item. */
router.delete('/:id', function(req, res, next) {
});


module.exports = router;