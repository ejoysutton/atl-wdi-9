console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(name, creatureType) {
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
    this.foodInTummy--;
    console.log("WAHH!!!");
    console.log(this.name + ' has this much food in tummy = ' + this.foodInTummy);
  };
};

//create new Tamagotchis
var tamagotchi1 = new Tamagotchi('Glorp', 'banana slug');
var tamagotchi2 = new Tamagotchi('Gleep', 'jerboa');

//test out your Tamagotchies below via console.logs
console.log(tamagotchi1);
console.log(tamagotchi2);
tamagotchi1.cry();
tamagotchi2.cry();