var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs= require('fs');
var flight= require('./flights.js');

var routes = require('./routes/index');

var app = express();
var app = angular.module('store',[]);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//pp.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

(function StoreController(){
	

  var app =angular.module("",[]);
  var file = fs.readFileSync('/booking.json','utf8');
  var booking = JSON.parse(file);

  app.controller('StoreController',function(){this.products=gem;
  });
  
  var gem={
  	time:'8hrs';
  	cabin:'first class';
  	seat:'A22';
  	Travellers:'Mrs.Mona';
  }
})();




module.exports = app;
