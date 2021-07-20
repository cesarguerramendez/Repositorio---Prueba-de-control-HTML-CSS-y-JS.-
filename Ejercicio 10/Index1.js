'use strict';



function myFunction1() {
  
   function dec2bin(dec){
         return (dec >>> 0).toString(2);
       }
   
   
   if (confirm("¿Quieres convertir decimal a binario?")) {
     document.getElementById("demo").innerHTML = dec2bin(prompt("Introduce tu número decimal"));
       }
   
     }
   
   function myFunction2() {
     
   function bin2dec(num){
         return num.split('').reverse().reduce(function(x, y, i){
           return (y === '1') ? x + Math.pow(2, i) : x;
         }, 0);
       } 
     
     if (confirm("¿Quieres convertir binario a decimal?")) {
       document.getElementById("demo").innerHTML = bin2dec(prompt("Introduce tu número binario"));
         }
     
       }