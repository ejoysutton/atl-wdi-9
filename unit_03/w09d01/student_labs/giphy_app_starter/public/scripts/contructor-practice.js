function Hero(name, alias, power) {
  this.name = name;
  this.alias = alias;
  this.power = power;
};

function Sidekick(name, alias, power, mentor) {
  Hero.call(this, name, alias, power);
    this.mentor = mentor;
};


Sidekick.prototype = Object.create(Hero.prototype);

var wonderWoman = new Hero("Diana Prince", "Wonder Woman", "lasso");
var batman = new Hero("Bruce Wayne", "The Batman", "Money");
var theFlash = new Hero("Barry Allen", "The Flash", "Gotta go fast");
var robin = new Sidekick("Tim Drake", "Robin", "Best Detective", "Batman");

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Employee(name, age, title) {
//   Person.call(this, name, age);
//   this.title = title;
// }

// Employee.prototype = Object.create(Person.prototype);

// var bill = new Employee("Bill", 27, "maintenance");

// console.log(bill.age);
// console.log(bill.name);
// console.log(bill.title);