angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http, $stateParams){

  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.deletePresident = deletePresident;

  activate();

  function activate() {
    loadAllPresidents();
  }


  function loadAllPresidents() {
      $http
    .get('/presidents')
    .then(function setAll(response) {
      vm.all = response.data.presidents;
      vm.loadingAll = false;
    });
  }
  function addPresident() {
        console.log('Adding..')
    $http
      .post('/presidents', vm.newPresident)
      .then(function addToAll(response) {
        vm.all.push(response.data.president);
        console.log(vm.newPresident)
        vm.newPresident = {};
      });
    // vm.all.push(vm.newPresident);
    // vm.newPresident = {};
  }

  function deletePresident(president) {
    console.log('starrting delete action')
    $http
    .delete('/presidents/' + president._id)
    .then(function deleteThis(response) {
      vm.all = vm.all.filter(function(currentlyIteratingPresident) {
        return president._id !== currentlyIteratingPresident._id;
        console.log('delete pass complete')
      });

    })
  }
}
