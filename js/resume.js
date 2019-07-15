(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// function if box
$('#collapseOne,#collapseTwo,#collapseThree').on('click', function (e) {
  e.stopPropagation();
  if(this.id == 'collapseOne'){
      $('#collapseTwoPanel').collapse('hide');
      $('#collapseThreePanel').collapse('hide');
      $('#collapseOnePanel').collapse('show');
  }else if(this.id ==  'collapseTwo'){
       $('#collapseOnePanel').collapse('hide');
      $('#collapseThreePanel').collapse('hide');
      $('#collapseTwoPanel').collapse('show');
  }else if(this.id ==  'collapseThree'){
       $('#collapseOnePanel').collapse('hide');
      $('#collapseTwoPanel').collapse('hide');
      $('#collapseThreePanel').collapse('show');
  }
})