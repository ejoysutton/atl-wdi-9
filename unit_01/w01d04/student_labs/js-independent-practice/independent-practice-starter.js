//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var lengths = function(arrayOfStrings) {
	var arrayOfNumbers = [];
	for(var i = 0; i < arrayOfStrings.length; i++) {
		var lengthOfString = arrayOfStrings[i].length;
		arrayOfNumbers.push(lengthOfString);
	}
	return arrayOfNumbers;
};
var arrayThing = ['one', 'two', 'three'];
lengths(arrayThing);


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.



// your code here

var transmogrifier = function(base1, base2, exponent) {
	var productOfBases = base1 * base2;
	return Math.pow(productOfBases, exponent);
};
transmogrifier(1,2,3);



// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
// make function named wordReverse with 
// parameter stringToReverse
// turn string onto array of words 
// create empty array to store words
// working backwards through original array, place into empty array
// return the result as a string

var wordReverse = function(stringToReverse) {
  var arrayOfWords = stringToReverse.split(" ");
  var reverseWords = arrayOfWords.reverse();
  return reverseWords.join(" ");
};
var someString="I've got a lovely bunch of coconuts"
wordReverse(someString);

OR

var wordReverse = function(stringToReverse) {
	var reversedString = stringToReverse
		.split(' ')
		.reverse()
		.join(' ');
	return reversedString;
}























