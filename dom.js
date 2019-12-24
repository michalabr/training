

var images = ['small-1.png', 'small-2.png', 'small-3.png','small-4.png','small-5.png','small-6.png','small-7.png'];

window.onload = gallery;


document.getElementById('prev').onclick =imgChanger
document.getElementById('next').onclick =imgChanger
function gallery(){
     // gallery is the name of function
     var allimages = document.images;
     //now we create a variable allimages
     //and we store all images in this allimages variable
     for(var i=0; i<allimages.length; i++){
          //now we create a for loop
          if(allimages[i].id.indexOf("small") > -1){
               allimages[i].onclick = imgChanger;
               //in above line we are adding a listener to all the thumbs stored inside the allimages array on onclick event.
          }
     }
}
function imgChanger(){
  var currPic = document.getElementById('myPicture').src
  
  currPic = parseInt(currPic.split("-")[1].split('.')[0]);
  console.log(currPic);
  if(this.id === 'prev'){
    console.log("here");
    currPic --;
    var t = "small-" + currPic.toString() + ".png";
    console.log(t);
    document.getElementById('myPicture').src = t;

  }else if (this.id === 'next') {
    currPic ++;
    var t = "small-" + currPic.toString() + ".png";
    console.log(t);
    document.getElementById('myPicture').src = t;
  }else{
    document.getElementById('myPicture').src = this.id + ".png";
  }
}
function slide(){
     var num = Math.floor((Math.random() * 6) +0);
     var img1 = images[num];
     document.getElementById('myPicture').src =img1
}
window.setInterval(function(){
  slide();
  /// call your function here
}, 10000);