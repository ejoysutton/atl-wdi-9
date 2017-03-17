//top level setup
var logger      = require('morgan');
var path        = require('path');
var express = require('express');
var app = express();
var hbs = require('hbs');
var port= process.env.PORT || 3000;

var recipesController = require('./controllers/recipes.js');

app.use( logger('dev'));

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

//start content filling


app.get('/', function(req,res) {
  res.send('This is our Recipe Home Page');
});

app.use('/recipes', recipesController);

app.use('/new', recipesController);



//setup port
app.listen(port, function() {
  console.info('Server Up, Ready to serve recipes on port', port,"//", new Date());
});
