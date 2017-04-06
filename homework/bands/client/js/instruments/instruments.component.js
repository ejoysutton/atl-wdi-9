let instrumentsTemplate = require(__dirname + '/instruments.html');
let InstrumentsController = require(__dirname + '/instruments.controller.js');

let instrumentsComponent = {
    template: instrumentsTemplate,
    controller: InstrumentsController
};

angular.module('bandsApp').component('instruments', instrumentsComponent);