var express = require('express');
var hbs = require('hbs');
var app = express();
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');

app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//controllers for `/toDonts` resource
var toDontsController = require('./controllers/todont_controller.js');
app.use("/toDonts", toDontsController);

app.listen(3000);