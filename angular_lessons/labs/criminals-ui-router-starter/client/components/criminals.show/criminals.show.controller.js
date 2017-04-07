CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.current = {};


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadCurrentCriminal();
	}
	

	// HOW IT DOES STUFF
	function loadCurrentCriminal() {
		// console.log($stateParams.criminalId);
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;