var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

// controllers/studentsController.js

var studentsController = {
  index: function(){
    StudentModel.find({})
    .exec(function(err, docs){
      if (err) { console.log(err); }

      docs.forEach(function(doc){
        console.log(doc);
      });
    });
  },
  show: function(req) {
    StudentModel.findOne({name: req.name})
    .exec(function(err, docs) {
      if (err) { console.log(err); }
      
      console.log(docs);
    });
  },
  update: function(req, updated) {
  	StudentModel.findOneAndUpdate({name: req.name}, {name: updated.name}, {new: true} )
  	.exec(function(err, docs) {
  		if (err) { console.log(err); }

  		console.log(docs);
  	});

  },
  delete: function(req) {
  	StudentModel.findOneAndRemove({name: req.name})
  	.exec(function(err, docs) {
  		if (err) { console.log(err); }

  		console.log('Record has been deleted')
  	});
  }

};

studentsController.index();
studentsController.update({name: "steve"}, {name: "sarah"});
studentsController.index();