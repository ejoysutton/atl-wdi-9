<<<<<<< HEAD
const controller =  require('./about.controller.js');
=======
const controller = require('./about.controller.js');
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
const template = require('./about.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', component);
