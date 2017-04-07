CriminalsNewController.$inject = ['CriminalsService', '$state'];

function CriminalsNewController(CriminalsService, $state) {
	const vm = this;

	vm.newCriminal = {};
	vm.addNewCriminal = addNewCriminal;

	activate();

	function activate() {
		// addNewCriminal();
	}

	function addNewCriminal() {
		console.log(vm.newCriminal)
		CriminalsService
			.addNewCriminal(vm.newCriminal)
			.then(function () {
				vm.newCriminal = {};
				$state.go('criminals')
			})

	}
	
}

module.exports = CriminalsNewController;