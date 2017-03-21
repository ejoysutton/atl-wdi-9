console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function() {
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
    this.foodInTummy--;
    console.log("WAHH!!!");
    console.log('Current food in tummy =' + this.foodInTummy);
  };

};

//create new Tamagotchis
var tamagotchi1 = new Tamagotchi();
var tamagotchi2 = new Tamagotchi();

//test out your Tamagotchies below via console.logs
console.log(tamagotchi1);
console.log(tamagotchi2);
tamagotchi1.cry();
tamagotchi2.cry();