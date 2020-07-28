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

router.get('/getTests', function(req, res){
    res.send(data.tests);
});

router.get('/getGroups', function(req, res){
    res.send(data.groups);
});

router.get('/getStudents', function(req, res){
    res.send(data.students);
});

router.post('/rmv/grp', function(req, res){
    var newGroups = [];
    data.groups.forEach((grp) => {
        if(grp.name != req.body.grp)    newGroups.push(grp);
    });
    data.groups = newGroups;
    res.send(data.groups);
});

router.post('/crt/grp', function(req, res){
    data.groups.push(req.body);
    res.send('ok');
});

module.exports = router;