var express = require('express');
var router = express.Router({mergeParams: true});


var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require('../models/project_idea');

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
  .exec(function(err, users) {
    if(err) { console.log(err); }
    
    console.log(users);
    res.render('users/index.hbs', {
		users: users
    	});
  });
});


module.exports = router;