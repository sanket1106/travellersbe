var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var cassandra = require('cassandra-driver');
var async = require('async');

var index = require('./routes/index');
var usersRoutes = require('./routes/usersRoutes');
var regionRoutes = require('./routes/regionRoutes');

var searchClient = require('./config/connections/searchConnect');
searchClient.count({index: 'citycountry',type: 'citycountry'},function(err,resp,status) {
  console.log("-- citycountry --",resp);
});

var dbClient = require('./config/connections/dbConnect');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', usersRoutes);
app.use('/regions', regionRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
mongoose.connect('mongodb://localhost/travellers')
	.then(() => console.log("Connection Successful"))
		.catch((err) => console.error(err));
*/

exports.casClient = function connectToCassandra(){

}
/*
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'travellers'});
client.connect(function(err){
  if(err)
    console.log(err);
  else {
    console.log("Connection to cassandra successful");
  }
});
*/
app.listen(3000);
module.exports = app;
