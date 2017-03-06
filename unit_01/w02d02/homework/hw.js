// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  // laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
        this.millisecs -= 1000;
        this.secs ++;
    }
    if (this.secs >= 60) {
        this.secs -= 60;
        this.mins ++;
    }
  },
  reset: function(){
    this.millisecs = 000;
    this.secs = 00;
    this.mins = 00;
  },
  start: function(){
    if (!this.isRunning) {
        this.isRunning = true;
        this.tickClock();
    }
  },
  stop: function(){
      this.isRunning = false;
  },
  // lap: function(){
  //   // Your Code Here
  // }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('millisecs').innerHTML = 
    ViewHelpers.zeroFillMillisecs(millisecs/10, 3);
    document.getElementById('secs').innerHTML = 
    ViewHelpers.zeroFill(secs, 2);
    document.getElementById('mins').innerHTML = 
    ViewHelpers.zeroFill(mins, 2);
  },
  // updateLapListDisplay: function(laps){
  //   // Your Code Here
  // },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    var numberString = number.toString();
    let numZeroes = (length - numberString.length, 0);
    for( var i = 0; i < (length - numberString.length); i++){
      numberString = "0" + numberString;
    }
    return numberString;
  },
zeroFillMillisecs: function(number, length){
    // Your Code Here
    if (number < 10) {
    var numberStringShort = number.toString();
    let numZeroes = (length - numberStringShort.length, 0);
    for( var i = 0; i < (length - numberStringShort.length); i++){
      numberStringShort = "00" + numberStringShort;
          }
    return numberStringShort;
    }
    else {
    var numberString = number.toString();
    let numZeroes = (length - numberString.length, 0);
    for( var j = 0; j < (length - numberString.length); j++){
      numberString = "0" + numberString;
    }
  
    return numberString;
  }
}
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    // Your Code Here
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start(); 
    }
    // Your Code Here
  },
  handleClickStopReset: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      ViewEngine.updateTimeDisplay(00, 00, 000);
      Stopwatch.reset();
    }
  
    // Your Code Here
  },
  // handleClickLap: function(){
  //   // Your Code Here  ---skip this
  // }
};

window.onload = function(){
  // Attach AppController methods to the DOM as -event handlers- here.  
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};