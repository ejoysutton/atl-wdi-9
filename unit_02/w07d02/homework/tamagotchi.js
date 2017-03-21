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
	this.puke = function() {
		this.health--;
		console.log('Waaaaaaghhhhhh ' + this.name + ' has this much food in tummy = ' + this.health);
	};
	this.yawn = function(){
	    this.restedness--;
	    console.log(this.name + ' has current restedness = ' + this.restedness);
  	};
  	this.start = function(){
		console.log("Starting " + this.name);
		var self = this;
    	this.hungerTimer = setInterval(function() {
	    self.cry();}, 6000);
    	this.yawnTimer = setInterval(function() {
      	self.yawn();}, 10000);
    	this.sickTimer = setInterval(function() {
      	self.puke();}, 25000);
  	};
  	this.stop = function(){
	    console.log("Now stopping " + this.name);
	    clearInterval(this.hungerTimer);
	    clearInterval(this.yawnTimer);
	    clearInterval(this.sickTimer);
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

tamagotchi1.puke();
tamagotchi2.puke();

tamagotchi1.yawn();
tamagotchi2.yawn();