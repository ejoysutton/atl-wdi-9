//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
 var smallBarrel = 60;
 var largeBarrel = ((total - (small * smallBarrel)) /large);

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
  	var earthCircumference = 24901;
  	var numberOfGallons = (earthCircumference /milesPerGallon);
  	var tripFuelCost = numberOfGallons*fuelPrice;
  return tripFuelCost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
  var totalPureFruitJuice = ((a * b) + (c * d));
  var totalJuiceMix = (a + c);
  var totalJuiceInSlog = 0.01 *(totalPureFruitJuice / totalJuiceMix);

  return totalJuiceInSlog;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
