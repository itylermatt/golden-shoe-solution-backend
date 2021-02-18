var express = require('express');
var router = express.Router();

/* GET home. */
router.get('/', function(req, res, next) {
  res.json( { title: 'Welcome to Golden Shoe' });
});

module.exports = router;
