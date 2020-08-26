var express = require('express');
var router = express.Router();
var data = require('../db/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
