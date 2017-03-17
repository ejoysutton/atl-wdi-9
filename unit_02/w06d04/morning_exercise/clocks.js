var calculate = function(hourhand, minutehand) {
	var firstAngle = 0;
	if (hourhand === 12 && minutehand < 60 && minutehand >= 0) {
		firstAngle = (((hourhand * 0) + minutehand /30) + (minutehand / 6));
	} else if (hourhand < 12 && hourhand > 0 && minutehand < 60 && minutehand >= 0) {
		firstAngle = (((hourhand * 30) + minutehand /30) + (minutehand / 6));
	} else {
		return "out of range";
	}
		var bothAngles = [firstAngle, (360 - firstAngle)];
		return bothAngles;
};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};


//360 degrees
//each minute = 6 degrees
//each full hour = 30 degrees
//////////////////////////////
//concept for calc non-full hours
//hour*30 + (minutes /6)
//