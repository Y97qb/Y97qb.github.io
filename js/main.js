(function ($) {
  var nav = $('nav');
  var navHeight = nav.outerHeight();

	/*--/ Star Click navBarScroll addClass /--*/
	$('.navbar-toggler').on('click',function(){
		if(! $('#mainNav').hasClass('navbar-reduce')){
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
	});

	/*--/ Star Intro /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		  $('.back-to-top').fadeIn('slow');
		} else {
		  $('.back-to-top').fadeOut('slow');
		}
	  });
	  $('.back-to-top').click(function(){
		$('html').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	  });

})(jQuery);