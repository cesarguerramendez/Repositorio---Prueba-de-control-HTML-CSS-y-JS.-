'use strict';

var seg = 0;
var min = 0;
var hour = 0;
var day = 0;
   

var myInterval = setInterval(function() {
   seg += 5;
if(seg >= 60) {
  seg = 0;
   min++;
} else if(min >= 60) {
  min = 0;
  hour++;
} else if(hour >= 24) {
  seg = 0;
  min = 0;
 hour = 0;
  day++;
}

   console.log(day + " días " + hour + " horas " + min + " minutos " + seg + " segundos");
}, 5000);