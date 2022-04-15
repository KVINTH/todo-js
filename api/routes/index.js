var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    title: "Pick up dry cleaning.",
  });
});

module.exports = router;
