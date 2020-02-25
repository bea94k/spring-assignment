jQuery(document).ready(function() {

  /* CV button opens a pdf file with an option of downloading the file */
  $('.cv-btn').click(function() {
      window.open("https://drive.google.com/file/d/1jB85BXs7fTBjAALDJ_OYJXcQTonPAX_I/view?usp=sharing")
    });

  /* SLIDER - depending on the width of the user's screen when the page is loaded, the slider has different properties (doesn't work when resizing the window - only with resize + refresh page) */
  if ($(window).width() > "840") { /* when user's screen is wider than 840px, do this */
    $(".slider").slick({
      dots: true,
      wariableWidth: true,
      wariableHeight: true,
      autoplay: true
    });
  } else {
    $(".slider").slick({
      dots: true,
      arrows: false,
      wariableWidth: true,
      wariableHeight: true,
      autoplay: true
    });
  }

  /* BACK TO TOP BUTTON - appearing after a scroll from left */
    
    var topBtn = $('.to-top-btn');

    if ($('.scrolling-wrapper').scrollLeft() <= 1000) {
        topBtn.css('display', 'none');
    }
    

    $('.scrolling-wrapper').scroll(function() {
      if ($('.scrolling-wrapper').scrollLeft() > 1000) {
        topBtn.fadeIn(500);
      } else {
        topBtn.fadeOut(500);
      }
    });

    topBtn.on('click', function(event) {
      event.preventDefault();
      $('.scrolling-wrapper').animate({scrollLeft:0}, '1000');
    });


  /* HANDLING SCROLLING VERTICALLY AS SCROLLING HORIZONTALLY */
  /* ??? add functions for arrows, pageup, pagedown, home, end ??? */

  window.addEventListener('wheel', function (e) {
    var moreScrollRight = $('.scrolling-wrapper').scrollLeft() + 350;
    var moreScrollLeft = $('.scrolling-wrapper').scrollLeft() - 350;

    if (e.deltaY < 0) {
        console.log("scrolling up");
        $('.scrolling-wrapper').animate({scrollLeft: moreScrollLeft}, 0);
     }
    if (e.deltaY > 0) {
        console.log("scrolling down");
        $('.scrolling-wrapper').animate({scrollLeft: moreScrollRight}, 0);
     }
    });




});