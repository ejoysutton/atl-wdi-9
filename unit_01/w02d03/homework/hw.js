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
    //remember, the tick is 10 ms, uodating only then
    //seconds are added as ms reach 1000, mins as secs reach 60
    //two ifs, NOT ifelse, running at same time.
    //check if >=1000, if so, minus 1000 and add one to secs
    if (this.millisecs >= 1000) {
        this.millisecs -= 1000;
        this.secs ++;
    }
    //check if >=60, if so, minus 60 and add one to mins
    if (this.secs >= 60) {
        this.secs -= 60;
        this.mins +1;
    }
  },

  reset: function(){
    //called to re-initialize
    this.millisecs = 00;
    this.secs = 00;
    this.mins = 00;
  },

  start: function(){
    //called to start the clock, check ifrunning first, then turn one and turn on the tick function
    if (!this.isRunning) {
        this.isRunning = true;
        this.tickClock();
    }
  },

  stop: function(){
    //called to stop the clock, sets isrunning to false
      this.isRunning = false;
  },
  // lap: function(){
  //   // Your Code Here --skip this
  // }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('millisecs').innerHTML = 
    ViewHelpers.zeroFill(millisecs/10, 2);
    document.getElementById('secs').innerHTML = 
    ViewHelpers.zeroFill(secs, 2);
    document.getElementById('mins').innerHTML = 
    ViewHelpers.zeroFill(mins, 2);
  },
  // updateLapListDisplay: function(laps){
  //   // Your Code Here - skip this
  // },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    var numberToString = number.toString();
    let numberOfZeroesNeeded = (length - numberToString.length, 0);
    for( var i = 0; i < (length - numberToString.length); i++){
      numberToString = "0" + numberToString;
    }
    return numberToString;
    //checks if timer number is currently at the needed length, if not, adds a zero to the front
    //Note: doesn't seem to work if kept as a number, worked once converted to string first. Remember this in future
  },
};

/// Top-Level Application Code ///
const AppController = {
  //Clicks feed into this
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    // Accesses viewengine and updatetimedisplay, feeds them mins, secs and millisecs from Stopwatch
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start(); 
    }
    // onclick (from window.onload) checks if stopwatch isrunning, starts it if not, using start function above
    //Ask why     if (Stopwatch.isRunning = false)  doesn't seem to work?
  },
  handleClickStopReset: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      ViewEngine.updateTimeDisplay(00, 00, 00);
      Stopwatch.reset();
    }
    //onclick (from window.onload) checks if stopwatch isrunning, if it is, stops it by triggering stop function, if not, returns initialized numbers
  },
  // handleClickLap: function(){
  //   // Your Code Here  ---skip this
  // }
};

window.onload = function(){
  // Attach AppController methods to the DOM as -event handlers- here.  
  //Get the html element, listen for click, feed into appcontroler
  document.getElementById('start').onclick = 
  AppController.handleClickStart;
  document.getElementById('stop').onclick = 
  AppController.handleClickStopReset;
};

//Come back and do laps later. Consider using this layout as a bootstrap or vanilla css practice.
