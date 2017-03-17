//your code here
//Packages 
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var app         = express();
var port        = process.env.PORT || 3000;

//Middleware
app.use(methodOverride('_method'));\
app.use( logger('dev'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

//Listener
app.listen(port, function() {
  console.info('Avast! Server Up -- Arrrrr', port,"//", new Date());
});
