var express = require('express');
var router = express.Router();
var data = require('../db/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/grp/:grpName', function(req, res){
  var group = {};
  data.groups.forEach((val, ind) => {
    if(val.grpName.replace(/\s/g,'').toLowerCase() === req.params.grpName){
      group = val;
      return;
    }
  });
  res.send(group);
});

module.exports = router;
