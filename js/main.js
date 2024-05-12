;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
		
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	//start

	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	  
		// Background Music Code
		var audio = $('#bg-music')[0]; // Get the raw DOM element
		var audioPlayed = false;
	  
		// Function to play audio
		function playAudio() {
			if (audio && !audioPlayed) {
				audio.play().then(function() {
					console.log('Audio playback started successfully');
				}).catch(function(error) {
					console.error('Failed to play audio:', error);
				});
				audioPlayed = true;
			}
		}
	  
		// Play audio when the user interacts with the page
		$(document).on('click', function() {
			playAudio();
		});
	});

	//end



}());


$(document).ready(function() {
    // Toggle submenu visibility on click for mobile
    $('.sub-submenu').hide(); // Hide the sub-submenu initially
    $('.has-submenu > a').on('click', function(e) {
        e.preventDefault();
        $(this).next('.submenu').slideToggle();
    });

    // Toggle sub-submenu visibility on click
    $('.submenu > li:first-child > a').on('click', function(e) {
        e.preventDefault();
        $(this).next('.sub-submenu').slideToggle();
    });


});

$(document).ready(function () {
	$('.popup-video').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		removalDelay: 300,
		closeBtnInside: false,
		callbacks: {
			open: function() {
				var video = $('#popup-video')[0];
				video.play(); // Auto play the video when the popup opens
			},
			close: function() {
				var video = $('#popup-video')[0];
				video.pause(); // Pause the video when the popup closes
			}
		}
	});
});

// my background image code is start 
var backgroundImages = [
    "url(/images/1.webp)",
    "url(/images/3.webp)",
    "url(/images/7.webp)",
    "url(/images/4.webp)"
];
var currentImageIndex = 0;
var fh5coHeader = document.getElementById("fh5co-header");

// Load the first image immediately
fh5coHeader.style.backgroundImage = backgroundImages[currentImageIndex];

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    fh5coHeader.style.backgroundImage = backgroundImages[currentImageIndex];
}

// Change background image every 3 seconds
setInterval(changeBackgroundImage, 3000);


// my background image code is end 

// my gallary code start 

const slideshow = document.getElementById('slideshow');
const images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 5000); // Increased interval for a smoother effect

//my gallary code end

// Replace 'YOUR_COUNTER_ID' with the ID of your counter
var url = 'https://api.livecounter.org/counters/1/';
var firstValue = true;

// Listen to counter updates
var es = new EventSource(url, { withCredentials: true });
es.addEventListener('message', function (e) {
	$('#views').text(e.data);
	if (firstValue) {
		firstValue = false;
		// After receiving initial value, increment counter
		$.post(url, function () {});
	} else {
		// Highlight animation for updates after initial value
		$('#views-area').effect('highlight', {}, 10000);
	}
}, false);