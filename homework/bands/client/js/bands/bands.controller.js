angular
    .module('bandsApp')
    .controller('BandsController', BandsController);

function BandsController() {
    var vm = this;

    vm.bandList = [
        { band: 'Mad Caddies', hometown: 'Solvang, CA' },
        { band: 'Ellwood', hometown: 'Solvang, CA' },
        { band: 'Goldfinger', hometown: 'Los Angeles, CA' },
        { band: 'Mephiskapheles', hometown: 'New York, NY' },
        { band: 'Streetlight Manifesto', hometown: 'New Brunswick, NJ' },
        { band: 'Less Than Jake', hometown: 'Gainesville, FL' },
        { band: 'Reel Big Fish', hometown: 'Huntington Beach, CA' },
        { band: 'Tokyo Ska Paridise Orchestra', hometown: 'Tokyo, Japan' }
    ]
}

module.exports = BandsController;
