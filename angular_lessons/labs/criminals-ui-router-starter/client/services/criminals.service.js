angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.addNewCriminal =  addNewCriminal;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	// self.newCriminal = {};

	// HOW IT DOES STUFF
	///api means backend for our own sanity
	function addNewCriminal(newCriminal) {
		console.log('got to service');
		return $http.post('/api/criminals', newCriminal)
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return  $http.get('/api/criminals/' + id);
	}
}
