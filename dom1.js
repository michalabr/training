$(function(){
	var sliderWrap = $('#slider ul');
	var sliderImg = $('#slider ul li');
	var prevBtm = $('#sliderPrev');
	var nextBtm = $('#sliderNext');
	var length = sliderImg.length;
	var width = sliderImg.width();
    var thumbWidth = width/length;
    var pager = $('#pager');

	sliderWrap.width(width*(length+2));

	var dataVal = 1;
	sliderImg.each(
		function(){
			$(this).attr('data-img',dataVal);
			pager.append('<a data-img="' + dataVal + '"><img src=' + $('img', this).attr('src') + ' width=' + thumbWidth + '></a>');
		dataVal++;
	});
	
	//Copy 2 images and put them in the front and at the end
	$('#slider ul li:first-child').clone().appendTo('#slider ul');
	$('#slider ul li:nth-child(' + length + ')').clone().prependTo('#slider ul');

	sliderWrap.css('margin-left', - width);
	$('#slider ul li:nth-child(2)').addClass('active');

    var imgPos = pagerPos = $('#slider ul li.active').attr('data-img');
    console.log(imgPos);
	$('#pager a:nth-child(' +pagerPos+ ')').addClass('active');

	//Click on Pager  
	$('#pager a').on('click', function() {
        pagerPos = $(this).attr('data-img');
        $('#pager a.active').removeClass('active');
        
		$(this).addClass('active');

		if (pagerPos > imgPos) {
			var movePx = width * (pagerPos - imgPos);
			moveNext(movePx);
		}

		if (pagerPos < imgPos) {
			var movePx = width * (imgPos - pagerPos);
			movePrev(movePx);
		}
		return false;
	});

	nextBtm.on('click', function(){
        moveNext(width);
        return false;

	
	});

	prevBtm.on('click', function(){
        movePrev(width);
        return false;

		
	});

	//Function for moveNext Button
	function moveNext(moveWidth) {
		sliderWrap.animate({
    		'margin-left': '-=' + moveWidth
  			}, 500, function() {
  				if (imgPos==length) {
  					imgPos=1;
                      sliderWrap.css('margin-left', - width);
                      makeActive();
  				}
  				else if (pagerPos > imgPos) {
                      imgPos = pagerPos;
                      return;
  				} 
  				else {
                      imgPos++;
                      makeActive();
                  }
  				
  		});
	}
    function makeActive(){
        pagerPos = imgPos;
                $('#pager a.active').removeClass('active');
                $('#pager a[data-img="' + pagerPos + '"]').addClass('active');
                clearInterval(myTimer);
                myTimer = window.setInterval(function(){
                    slide();
                }, 10000)

    }
	// //Function for movePrev Button
	// function movePrev(moveWidth) {
	// 	sliderWrap.animate({
    // 		'margin-left': '+=' + moveWidth
  	// 		}, 500, function() {
  	// 			if (imgPos==1) {
  	// 				imgPos=length;
    //                   sliderWrap.css('margin-left', -(width*length));
    //                   makeActive()
  	// 			}
  	// 			else if (pagerPos < imgPos) {
  	// 				imgPos = pagerPos;
  	// 			} 
  	// 			else {
    //                   imgPos--;
    //                   makeActive()
    //               }
                  
  				

  	// 	});
    // }
    function movePrev(moveWidth) {
		
  				if (imgPos==1) {
  					imgPos=length;
                      sliderWrap.css('margin-left', -(width*length));
                      makeActive()
  				}
  				else if (pagerPos < imgPos) {
  					imgPos = pagerPos;
  				} 
  				else {
                      imgPos--;
                      makeActive()
                  }
                  
    }
    function slide(){
        moveNext(width);
    }
    var myTimer = window.setInterval(function(){
        slide();
    }, 10000)
    // window.setInterval(function(){
    //  slide();
    //  /// call your function here
    // }, 10000);
});
