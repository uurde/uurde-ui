
$(window).load(function() {

	"use strict";

	setTimeout(function(){
		$('.preloader').fadeOut('slow');
	}, 900);

	setTimeout(function() {
        $('.st-animated').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('animated').removeClass('hide');
                });
            })(this);
        });
    }, 1100);
	
});


$(document).ready(function() {

	"use strict";

	// Isotope Portfolio
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	//Variables
	var overlay = $('.overlay-global');
	var contact = $('.content-contact');
	var open_contact = $('.btn-contact, .btn-cnt, .btn-contact-mobile');
	
	open_contact.on("click", function(){
		overlay.addClass('overlay-open');
		contact.addClass('contact-open');
	});

	$('.btn-menu-mobile').on("click", function(){
		$('.left-sidebar').addClass('menu-open');
		overlay.addClass('overlay-open');
	});

	$('.close-contact').on("click", function(){
		contact.removeClass('contact-open');
		overlay.removeClass('overlay-open');
	});

	overlay.on("click", function(){
		$(this).removeClass('overlay-open');
		if (contact.hasClass('contact-open')) {
			contact.removeClass('contact-open');
		}
		else{
			$('.left-sidebar').removeClass('menu-open');
		}
	});


	//Navigation menu
	$('#nav').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	});


	// Filter select active class
	$('.filter-select ul li').on( 'click', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });

	$(".filter-select ul li").removeClass("active");
		$(this).addClass("active");
	});


	//Magnific-popup for Portfolio
	$('.popup').magnificPopup({
		type: 'inline',

		gallery:{
			enabled:true
	    },

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	$('.selector').on("click", function(){
		$('.color-pick').toggleClass('color-palette-open');
	});

	$(".color-pick .colors a").on("click", function(){
		$("#colors").attr("href", this.href);
		return false;
	});

	$(".color-pick .layout a").on("click", function(){
		$("#layout-color").attr("href", this.href);
		return false;
	});

});


//Ajax for contact form
$("#contact-form").on("submit", function(e){
	e.preventDefault();
	var $form = $(this);

	$form.find('.errors').removeClass('errors');

  	$.ajax({
		url: $form.attr('action'),
		type: $form.attr('method'),
		data: $form.serialize(),
		datatype: 'json',
		success: function(data){
			console.log(data);
		    if(data.success === true){
		     	$('.form-success').addClass('success-open');
		    }
		    else{
		     	for(field in data.errors){
		     		var $input = $form.find('input[name='+ field+'], textarea[name='+ field+']');
		     		$input.addClass('errors');
		     	}
		    }
		},
		error:function(xhr){
			console.log(xhr.responseText);
		}   
	}); 
});