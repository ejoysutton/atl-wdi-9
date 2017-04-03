var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// // First we create a new student. It's just like generating a new instance of a constructor function!
// // var frankie = new StudentModel({name: "Frankie P.", age: 30});

// // // Then we save it to the database using .save
// // frankie.save(function(err, student){
// //   if (err) {
// //     console.log(err);
// //   }
// //   else {
// //     console.log(student);
// //   }
// // });

// var frankie = new StudentModel({name: "Frankie P.", age: 28});
// var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// // Now we add that project to a student's collection / array of projects.
// frankie.projects.push(project1);

// // In order to save that project to the student, we need to call `.save()` on the student -- not the project.
// frankie.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student + " was saved to our db!");
//   }
// });

// var joy = new StudentModel({name: "Joy S.", age: 34});
// var project1 = new ProjectModel({title: "Port Authority", unit: "JS"});

// // Now we add that project to a student's collection / array of projects.
// joy.projects.push(project1);

// // In order to save that project to the student, we need to call `.save()` on the student -- not the project.
// joy.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student + " was saved to our db!");
//   }
// });

module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};