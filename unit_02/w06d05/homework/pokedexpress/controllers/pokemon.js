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

  res.render('index', {
    data: data
  });
});

// Make a GET route '/new' that will simply render a form to create a new Pokemon
router.get('/new', function(req, res){
    res.render('new');
 });

//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res){
    var newPokemon = {
      name: req.body.name,
      img: req.body.img,
      type: req.body.type,
      stats: {
	      hp: req.body.hp,
	      attack: req.body.attack,
	      defense: req.body.defense,
	      spattack: req.body.spattack,
	      spdefense: req.body.spdefense,
	      speed: req.body.speed,
  		}	
    };
    data.push(newPokemon);
    res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************
router.get('/edit/:id', function(req, res){
  res.render('edit', {
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
router.put('/edit/:id', function(req, res) {
    var editPokemon = data[req.params.id];
      editPokemon.name = req.body.name;
      editPokemon.img = req.body.img;
      editPokemon.type = req.body.type;
	  editPokemon.stats.hp = req.body.hp;
      editPokemon.stats.attack = req.body.attack;
      editPokemon.stats.defense = req.body.defense;
      editPokemon.stats.spattack = req.body.spattack;
      editPokemon.stats.spdefense = req.body.spdefense;
      editPokemon.stats.speed = req.body.speed;
    	res.redirect('/pokemon');
});
// router.post('/edit', function(req, res){
//     var editPokemon = data[req.params.id];
//       editPokemon.name = req.body.name;
//       editPokemon.img = req.body.img;
//       editPokemon.type = req.body.type;
// 	  editPokemon.stats.hp: req.body.hp;
//       editPokemon.stats.attack: req.body.attack;
//       editPokemon.stats.defense: req.body.defense;
//       editPokemon.stats.spattack: req.body.spattack;
//       editPokemon.stats.spdefense: req.body.spdefense;
//       editPokemon.stats.speed: req.body.speed;
//     	res.redirect('/pokemon');
// });

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:index', function(req,res) {
    var pokemonByIndex = data[req.params.index];

    res.render('show', {
      pokemonByIndex: pokemonByIndex
  	});
});
//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:id', function(req, res) {
    data.splice(req.params.id, 1); 
    // remove the item from the array
    res.redirect('/pokemon');  
    // redirect back to the index route
});


//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;