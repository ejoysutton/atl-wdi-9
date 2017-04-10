CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

<<<<<<< HEAD
	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.current = {};


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
=======
	vm.current = {};

>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	activate();

	function activate() {
		loadCurrentCriminal();
	}
<<<<<<< HEAD
	

	// HOW IT DOES STUFF
	function loadCurrentCriminal() {
		// console.log($stateParams.criminalId);
=======

	function loadCurrentCriminal() {
		console.log($stateParams);

>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
}

<<<<<<< HEAD
module.exports = CriminalsShowController;
=======
module.exports = CriminalsShowController;
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
