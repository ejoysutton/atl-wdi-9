angular
  .module('InfamousCriminals', [])
  .controller('CriminalsController', CriminalsController)
  .service('CriminalsService', CriminalsService);

CriminalsController.$inject = ['CriminalsService'];
CriminalsService.$inject = ['$http'];

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
      .then(function(response){
        var index = CriminalsController.all.indexOf(criminal);
        CriminalsController.all.splice(index, 1);
      });
  }

}


