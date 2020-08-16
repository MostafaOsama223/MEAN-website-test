var express = require('express');
var router = express.Router();
var data = require('../db/data.json');

router.post('/log', function (req, res) {
    var sent = false;
    data.users.forEach(user => {
        if(user.user === req.body.user && user.pass === req.body.pass){
            sent = true;
            res.send('ok');
        }    
    });
    if(!sent)    res.send('no');
});

                                                /* TESTS */
router.get('/getTests', function(req, res){
    res.send(data.tests);
});

router.post('/createTest', function(req, res){
    data.tests.push(req.body);
    res.send('tmam');
});

router.post('/rmv/tst', function(req, res){
    var newTests = [];
    data.tests.forEach((test) => {
        if(test.num != req.body.test)    newTests.push(test);
    });
    data.tests = newTests;
    res.send(data.tests);
});

router.get('/test/:testNum', function(req, res){
    var test = null;
    data.tests.forEach((val, ind) => {
        if(val.num == req.params.testNum)  test = val;
    });
    res.send(test);
});

                                                /* STUDENTS */
router.get('/getStudents', function(req, res){
    res.send(data.students);
});

                                                /* GROUPS */
router.get('/getGroups', function(req, res){
    res.send(data.groups);
});

router.post('/rmv/grp', function(req, res){
    var newGroups = [];
    data.groups.forEach((grp) => {
        if(grp.grpName != req.body.grp)    newGroups.push(grp);
    });
    data.groups = newGroups;
    res.send(data.groups);
});

router.post('/crt/grp', function(req, res){
    data.groups.push(req.body);
    res.send('ok');
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