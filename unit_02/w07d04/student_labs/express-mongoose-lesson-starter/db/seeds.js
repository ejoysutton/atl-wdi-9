var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('../models/user');
var Item = require('../models/item');
var ProjectIdea = require('../models/project_idea');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

ProjectIdea.remove({}, function(err){
  console.log(err);
});


// create new users
<<<<<<< HEAD
var gerry = new User({
  first_name: 'Gerry',
  email: 'gerry@gmail.com'
});

var marc = new User({
  first_name: 'marc',
  email: 'marc@gmail.com'
=======
var danny = new User({
  first_name: 'Danny',
  email: 'danny@gmail.com',
  items: [{name: "Bike maintenance"}]
});

var maren = new User({
  first_name: 'Maren',
  email: 'maren@gmail.com',
  items: [{name: "Get dry cleaning"}]
>>>>>>> 9f026e42b030162cfc352a57500bb180126ffcb7
});

var diesel = new User({
  first_name: 'diesel',
<<<<<<< HEAD
  email: 'diesel@gmail.com'
});


var projectIdea1 = new ProjectIdea({description: "hey here's an idea by gerry", in_progress: false});
var projectIdea2 = new ProjectIdea({description: "hey here's an idea by marc", in_progress: false});
var projectIdea3 = new ProjectIdea({description: "hey here's an idea by diesel", in_progress: true});

var item1 = new Item({name: "Go teach some angular to these kids", in_progress: false});
var item2 = new Item({name: "Go teach some node with no pants on", in_progress: false});
var item3 = new Item({name: "Go to the store", in_progress: true});


// create two arrays that we can iterate over
var users = [gerry, marc, diesel];
var projectIdeas = [projectIdea1, projectIdea2, projectIdea3];
var items = [item1, item2, item3];

projectIdeas.forEach(function(projectIdea, i){
  projectIdea.save(function(err) {
    if(err) { console.log(err); }

    console.log(projectIdea);
  });
});

items.forEach(function(item, i){
  item.save(function(err) {
    if(err) { console.log(err); }

    console.log(item1);
  });
=======
  email: 'diesel@gmail.com',
  items: [{name: "Go to the dog park"}]
});

// save the users
danny.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});

maren.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});

diesel.save(function(err) {
  if (err) console.log(err);
  
  console.log('User created!');
>>>>>>> 9f026e42b030162cfc352a57500bb180126ffcb7
});

users.forEach(function(user, i){
  user.projectIdeas.push(projectIdeas[i]);

  user.items.push(items[i]);

  user.save(function(err) {
    if(err) { console.log(err); }

    console.log(user);
  });
});