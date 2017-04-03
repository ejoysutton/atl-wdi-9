words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(word, index, words){
 	words[index] = word.toUpperCase();
});
console.log(words);

/////////////////////////////////////////

var squareMe = [0, 1, 10, 24, 595]

squareMe.forEach(function(n, index, squareMe){
	squareMe[index] = n*n;
});
console.log(squareMe);

//////////////////////////////////////////

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

//each product's price
productPrice = [];

products.forEach(function(product, index, products){

	productPrice.push(product.price);
	productPrice.sort(function(a, b){return a-b});

});
console.log(productPrice);

//discount sale
// products.forEach(function(product, index, products){
// 	product.discount = product.price / 2;
// });
// console.log(products);

//limited discount
products.forEach(function(product, index, products){
	if (index % 2 != 0 && index !== 0)
	product.discount = product.price / 2;
});
console.log(products);

//Nested forEach
var myOrder = [
   ["beef", "turkey", "chicken", "veggie"],
   ["cheese", "pickles", "lettuce", "onion"],
   ["coke", "sprite", "iced tea", "water"]
];

myOrder.forEach(function(line, index, myOrder){
	line.forEach(function(item, index, line){
		if (index === 1) {
			console.log(line[1]);
		}
	});
});