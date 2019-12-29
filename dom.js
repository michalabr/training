var images = ['small-1.png', 'small-2.png', 'small-3.png','small-4.png','small-5.png','small-6.png'];
var cuurPic =0;
var num = 0
var prevBtn;
var nextBtn;

// document.getElementById('prev').onclick =imgChanger
// document.getElementById('next').onclick =imgChanger
function gallery(){
    navigationInit();
     var thumbnails = document.getElementById("thumbnail-inner");
     for(var i=0; i<images.length; i++){
        var elem = document.createElement("img");
        elem.src = images[i];
        var id = i.toString();
        elem.id = id;
        elem.addEventListener("click", imgChanger);
        thumbnails.appendChild(elem);
     }
}
var navigationInit = function () {
  var navigation = document.getElementById("nev");
  prevBtn = document.createElement('button');
  nextBtn = document.createElement('button');
  prevBtn.id = 'prev';
  prevBtn.innerHTML = 'prev';
  prevBtn.addEventListener("click", imgChanger);
  prevBtn.hidden = true;
  nextBtn.id = 'next';
  nextBtn.innerHTML = 'next';
  nextBtn.addEventListener("click", imgChanger);
  navigation.appendChild(prevBtn);
  navigation.appendChild(nextBtn);
};
function imgChanger(){
  if(this.id === 'prev'){
    cuurPic === 0 ? cuurPic = 5: cuurPic --;
  }else if (this.id === 'next') {
    cuurPic === 5 ? cuurPic = 0: cuurPic ++;
  }else{
    cuurPic = Number(this.id) ;
  }
  cuurPic == images.length - 1 ? nextBtn.hidden = true : nextBtn.hidden = false;
  cuurPic == 0 ? prevBtn.hidden = true : prevBtn.hidden = false;
  console.log(cuurPic);
  document.getElementById('myPicture').src = images[cuurPic];
  
}
function slide(){
     num === 5? num = 0:num++;
     var img1 = images[num];
     document.getElementById('myPicture').src =img1
}
window.setInterval(function(){
  slide();
  /// call your function here
}, 10000);
gallery();