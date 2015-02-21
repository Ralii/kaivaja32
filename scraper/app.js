var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

var app = express();

var mongourl = process.env.MONGOLAB_URI || 'mongodb://vesirakennus:meensisaan888@ds043190.mongolab.com:43190/avainkivi';
mongoose.connect(mongourl);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var db = mongoose.connection;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var routes = require('./routes')(app,db);

var port = Number(process.env.PORT || 9000);

http.createServer(app).listen(port);

console.log("start!");

module.exports = app;
