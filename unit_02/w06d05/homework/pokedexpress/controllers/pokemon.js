//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req,res) {

  res.render('pokemon/index', {
    data: data
  });
});

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:id', function(req,res) {
    var data = data[req.params.id];

    res.render('pokemon/show', {
      data: data
  	});
});

// Make a GET route '/new' that will simply render a form to create a new Pokemon
router.get('/new', function(req, res){
    res.render('pokemon/new');
 });

//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res){
    var newPokemon = {
        
    };
    data.push(newPokemon);
    res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************
router.get('/:id/edit', function(req, res){
  res.render('pokemon/edit', {
    data: {
      name: data[req.params.id].name,
      img: data[req.params.id].img,
      type: data[req.params.id].type,
      hp: data[req.params.id].stats.hp,
      attack: data[req.params.id].stats.attack,
      defense: data[req.params.id].stats.defense,
      spattack: data[req.params.id].stats.spattack,
      spdefense: data[req.params.id].stats.spdefense,
      speed: data[req.params.id].stats.speed,
      id: req.params.id
    }
  });
});

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;