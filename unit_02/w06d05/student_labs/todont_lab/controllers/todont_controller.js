var express = require('express');
var router = express.Router();
var toDonts = require('../data.js');

//Index Route
router.get('/', function(req, res) {
	res.render('index.hbs', {
		toDonts: toDonts.seededToDonts
	});
});


//Create Route
router.get('/new', function(req, res){
    res.render('new.hbs');
 });

router.post('/', function(req, res){
	var newTodont = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	toDonts.seededToDonts.push(newTodont);
	res.redirect('/toDonts');
});


//Edit Route w/ view and put



//Delete Route


//Show Individual Route
router.get('/:id', function(req, res) {
	var toDont = toDonts.seededToDonts[req.params.id];
	res.render('show.hbs', {
		toDont: toDont
	});
});


module.exports = router;