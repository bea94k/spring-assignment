/* CV button opens a pdf file with an option of downloading the file */
$('.cv-btn').click(function() {
    window.open("https://drive.google.com/file/d/1jB85BXs7fTBjAALDJ_OYJXcQTonPAX_I/view?usp=sharing")
  });

/* SLIDER - depending on the width of the user's screen when the page is loaded, the slider has different properties (doesn't work when resizing the window - only with resize + refresh page) */
if ($(window).width() > "840") { /* when user's screen is wider than 840px, do this */
  $(".slider").slick({
    dots: true,
    wariableWidth: true,
    wariableHeight: true
  });
} else {
  $(".slider").slick({
    dots: true,
    arrows: false,
    wariableWidth: true,
    wariableHeight: true
  });
}



