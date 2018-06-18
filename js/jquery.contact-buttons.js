/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
(function ($) {
  'use strict';

  
  // Slide on scroll effect
  $(function(){
	      var oContainer = $("#contact-buttons-bar");
    setTimeout(function(){
        oContainer.animate({ left : 0 });
      }, 200);
	   $('body').on('click', '.show-hide-contact-bar', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
        oContainer.find('.cb-ancor').toggleClass('cb-hidden');
      });
    // Define element to slide
    var el = $("#contact-buttons-bar.slide-on-scroll");
    
    // Load top default
    el.attr('data-top', el.css('top'));
    
    // Listen to scroll
 /*$(window).scroll(function() {
      clearTimeout( $.data( this, "scrollCheck" ) );
      $.data( this, "scrollCheck", setTimeout(function() {
        var nTop = $(window).scrollTop() + parseInt(el.attr('data-top'));
        el.animate({
          top : nTop
        }, 500);
      }, 250) );
    });*/
  });
  
 }( jQuery ));
