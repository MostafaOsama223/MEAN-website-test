var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var teacherRouter = require('./routes/teacher');


var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/t', teacherRouter);

app.listen(3000);

module.exports = app;
