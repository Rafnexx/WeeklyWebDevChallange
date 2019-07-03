$(document).ready(function() {
  
  // TOGGLING bg-light class on navbar
  var navbar = $('nav.navbar');
  navbar.removeClass('bg-light');

  $(document).on('scroll', function() {
    var scrollPosition = $(document).scrollTop();
    navbar.removeClass('bg-light');
    if( scrollPosition > 0 ) {
      navbar.addClass('bg-light');
      console.log('toggled');
    }
    else {
      navbar.removeClass('bg-light');
      console.log('removed');
    }
  })
});