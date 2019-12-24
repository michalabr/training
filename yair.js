

var images = ['1.png', '2.png', '3.png','4.png','5.png','6.png'];


function slide(){
  var num = Math.floor((Math.random() * 6) +0);
  var img1 = images[num];
  document.querySelector("#image1").src= img1;
 
 }
 setTimeout(function(){ slide(); },5);

//call same function again for x of seconds

