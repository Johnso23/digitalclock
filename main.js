

  function displayTime() { //function will display time from the current time and update by the second.
    var currentTime = new Date(); //gets current date from computer
    var hours = currentTime.getHours(); //gets current hour from computer
    var minutes = currentTime.getMinutes();//gets current time
    var seconds = currentTime.getSeconds();//get current seconds

    // If the seconds digit is less than ten                    
if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = "0" + seconds;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById("clock");

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds; clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }

  // This runs the displayTime function the first time
  displayTime();

  setInterval(displayTime, 1000);

var meridiem = "AM";  // Default is AM
// Convert from 24 hour to 12 hour format
// and keep track of the meridiem.
if (hours > 12) {
    hours = "hours" - 12;
    meridiem = "PM";
}

// 0 AM and 0 PM should read as 12
if (hours === 0) {
    hours = 12;    
}

clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

function time(){
    var today = new Date();
    var h = today.getHours()
  if (h>12) {h= h- "12"} ;
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clocky').innerHTML = h + ":" + m + ":" + s;
  var r = parseInt(s) * 1;
  var g = parseInt(s) * 3;
  var b = parseInt(s) * 5;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(time, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

time();;


function updateDisplay () {
  var today = new Date ();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m)
  s = checkTime (s)

  //update background color
  var hex = "#" + h + m + s;
  document.body.style.backgroundColor = hex;
  

}


