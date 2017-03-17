//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate

//the index
router.get('/', function(req,res) {

  res.render('pirates/index', {
    pirates: pirates.historicPirates
  });
});

//new route
router.get('/new', function(req, res){
    res.render('pirates/new');
 });

//create a pirate
router.post('/', function(req, res){
    var newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        death_year: req.body.death_year,
        base: req.body.base,
        nickname: req.body.birthplace
    };
    pirates.historicPirates.push(newPirate);
    res.redirect('/pirates');
});

//show individual pirate
router.get('/:id', function(req,res) {
    var pirate = pirates.historicPirates[req.params.id];

    res.render('pirates/show', {
      pirate: pirate
  	});
});

//exports
module.exports = router;