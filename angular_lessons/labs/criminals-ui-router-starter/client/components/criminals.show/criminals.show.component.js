const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
=======
	// call this with <criminals-show></criminals-show>
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	.component('criminalsShow', component);
