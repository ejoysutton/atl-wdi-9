let bandsTemplate = require(__dirname + '/bands.html');
let BandsController = require(__dirname + '/bands.controller.js');

let bandsComponent = {
    template: bandsTemplate,
    controller: BandsController
};

angular.module('bandsApp').component('bands', bandsComponent);