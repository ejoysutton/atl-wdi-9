<<<<<<< HEAD
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
=======
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
}

module.exports = CriminalsNewController;
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
