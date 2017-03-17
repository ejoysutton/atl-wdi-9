var express = require('express');
var router = express.Router();

var data = require('./data.js');

router.get('/', function(req,res) {

  res.render('recipes/index', {
    recipes: data.seededRecipes
  });
});

router.get('/new', function(req, res) {
  res.render('recipes/new')
});

//Post new recipe
router.post('/', function(req, res) {
    var newRecipe = {
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      veggie: req.body.veggie
    };

    data.seededRecipes.push(newRecipe);
    res.redirect('/recipes');
});

//Show individual recipes
router.get('/:id', function(req, res) {
  var recipes = data.seededRecipes[req.params.id];

  res.render('recipes/show', {
    recipes: recipes
  });
});


module.exports = router;