$(function() {

  // gives slides their number
  var slides = $(".slide");
  var counter = 1;
  $.each( slides, function( index, value ){
    $(value).attr('id', "slide-"+counter);
    counter++;
  });

  // magtube
  $('.mag-tube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

  // magimg
  $('.mag-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});


  // contact modal
  $("#contact").click(function() {
    BootstrapDialog.show({
      title: 'Contact Info <span class="glyphicon glyphicon-send"></span>',
      message: '<ul style="font-size: 20px; font-weight: 300;text-shadow: none; text-align: left;"><li>Email: <a href="mailto:sforstefan@gmail.com">sforstefan@gmail.com<a/></li></ul><div>Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
    });
  });

  // slide controller
  var current = 1;
  var maxSlides = 13;
  var canSlide = true;

  $("#prev").click(function() {
    prevSlide();
  });

  $("#next").click(function() {
    nextSlide();
  });

  $(document).keydown(function(e){
    // left
    if(e.keyCode == 37) {
      if(canSlide) {
        prevSlide();
      }
    }
    // right
    else if(e.keyCode == 39) {
      if(canSlide) {
        nextSlide();
      }
    }
  });

  function nextSlide() {
    if(current + 1 <= maxSlides) {
      canSlide = false;
      $("#slide-"+current).fadeOut(100).promise().done(function() {
        $("#slide-"+(current+1)).fadeIn();
        current++;
        canSlide = true;
      });
    }
  }

  function prevSlide() {
    if(current -1  > 0) {
      canSlide = false;
      $("#slide-"+current).fadeOut(100).promise().done(function() {
        $("#slide-"+(current-1)).fadeIn();
        current--;
        canSlide = true;
      });
    }
  }

});
