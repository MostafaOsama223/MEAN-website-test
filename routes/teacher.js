var express = require('express');
var router = express.Router();

var users = [
    {'user':'123@mmm.com','pass':'1234'},
    {'user':'mostafa@mmm.com','pass':'2222'}
];

router.post('/log', function (req, res) {
    var sent = false;
    users.forEach(user => {
        if(user.user === req.body.user && user.pass === req.body.pass){
            sent = true;
            res.send('ok');
        }    
    });
    if(!sent)    res.send('no');
});

module.exports = router;