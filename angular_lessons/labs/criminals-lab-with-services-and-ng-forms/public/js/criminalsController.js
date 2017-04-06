angular
  .module('InfamousCriminals', [])
  .controller('CriminalsController', CriminalsController)
  .service('CriminalsService', CriminalsService);

CriminalsController.$inject = ['CriminalsService'];
<<<<<<< HEAD
CriminalsService.$inject = ['$http'];
=======
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab

function CriminalsController(CriminalsService){
  var self = this;
  console.log('criminalCtrl is alive!');
  self.all = [];
  self.addCriminal = CriminalsService.addCriminal(criminals);
  self.newCriminal = {};
  self.getCriminals = CriminalsService.getCriminals();
  self.deleteCriminal = CriminalsService.deleteCriminal();
}

function CriminalsService($http) {
  var self = this;
  console.log('criminalServ is alive!');
  // getCriminals();

<<<<<<< HEAD
  self.getCriminals = function() {
    $http
      .get('/criminals')
      .then(function(response){
        CriminalsController.all = response.data.criminals;
    });
  }

  self.addCriminal = function() {
    $http
      .post('/criminals', CriminalsController.newCriminal)
      .then(function(response){
        self.getCriminals();
    });
    CriminalsController.newCriminal = {};

  }

  self.deleteCriminal = function() {
    $http
      .delete("/criminals/" + CriminalsController.all._id)
=======
  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab
      .then(function(response){
        var index = CriminalsController.all.indexOf(criminal);
        CriminalsController.all.splice(index, 1);
      });
  }

}


