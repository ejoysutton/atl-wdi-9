angular.module('InfamousCriminals')
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http, $stateParams) {
	var vm = this;

	///vars go here
	vm.addCriminal = addCriminal;
	vm.all = [];
	vm.loadingAll = true;
	vm.newCriminal = {};
	vm.deleteCriminal = deleteCriminal;

	activate();

	function activate() {
		loadAllCriminals();
	}

	function loadAllCriminals() {
		$http
		.get('/criminals')
		.then(function setAll(response) {
			vm.all = response.data.criminals;
			vm.loadingAll = false;
		});
	}

	function addCriminal() {
		$http
		.post('/criminals', vm.newCriminal)
		.then(function addToAll(response) {
			vm.all.push(response.data.criminal);
			vm.newCriminal = {};
		});
	}

	function deleteCriminal(criminal) {
		$http
		.delete('/criminals/' + criminal._id)
		.then(function deleteThis(response) {
			vm.all = vm.all.filter(function(currentCriminalIteration) {
				return criminal._id !== currentCriminalIteration._id;
			});
		})
	}


}