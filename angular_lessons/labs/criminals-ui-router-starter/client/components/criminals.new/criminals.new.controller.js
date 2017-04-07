CriminalsNewController.$inject = ['CriminalsService'];

function CriminalsNewController(CriminalsService) {
	const vm = this;

	vm.newCriminal = {};
	vm.addNewCriminal = addNewCriminal;

	activate();

	function activate() {
		addNewCriminal();
	}

	function addNewCriminal() {
		console.log(vm.newCriminal)
		CriminalsService
			.addNewCriminal(vm.newCriminal)
			.then(function () {
				vm.newCriminal = {};
			})

	}
	
}

module.exports = CriminalsNewController;