angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
<<<<<<< HEAD
	self.addNewCriminal =  addNewCriminal;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	// self.newCriminal = {};

	// HOW IT DOES STUFF
	///api means backend for our own sanity
	function addNewCriminal(newCriminal) {
		console.log('got to service');
		return $http.post('/api/criminals', newCriminal)
=======
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
<<<<<<< HEAD
		return  $http.get('/api/criminals/' + id);
=======
		return $http.get('/api/criminals/' + id);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	}
}
