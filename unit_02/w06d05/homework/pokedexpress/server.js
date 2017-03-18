//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express     	= require('express');
var app         	= express();
var hbs         	= require('hbs');
var bodyParser  	= require('body-parser');
var methodOverride 	= require('method-override');



//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require('./controllers/pokemon.js');
app.use("/pokemon", pokemonController);




//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000);
