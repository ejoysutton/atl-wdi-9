// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here

};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};

/*
For the breakdown to coinage
divide difference by 25 store in quarters var
modulus 25 store in var for remainder
divide new diff by 10, store in dimes var
modulus 10 store in var for remainder
divide new diff by 5, store in nickel var
modulus new diff by 5 for remainder
call remainder
*/

var makeCoinage = function(changeAmount) {
	var difference = changeAmount
	if (changeAmount !== 0) {
		return "0"
	}
	else if (difference >= 25) {
		var quartersMath.floor(difference/25)
	}
	else if (difference >= 10) {

	}
	else if (difference >= 5) {

	}
	else if (difference < 5) {

	}
	else {
		break
	}
}
