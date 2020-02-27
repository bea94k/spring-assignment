jQuery(document).ready(function() {
  /* CV button opens a pdf file with an option of downloading the file */
  $(".cv-btn").click(function() {
    window.open(
      "https://drive.google.com/file/d/1jB85BXs7fTBjAALDJ_OYJXcQTonPAX_I/view?usp=sharing"
    );
  });

  /* SLIDER - depending on the width of the user's screen when the page is loaded, the slider has different properties (doesn't work when resizing the window - only with resize + refresh page) */
  //timeout to wait till the fake loading animation is done
  setTimeout(function() {
    if ($(window).width() > "840") {
      /* when user's screen is wider than 840px, do this */
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
  }, 2500);

  /* BACK TO TOP BUTTON - appearing after a scroll from left */

  var topBtn = $(".to-top-btn");

  if ($(".scrolling-wrapper").scrollLeft() <= 1000) {
    topBtn.css("display", "none");
  }

  $(".scrolling-wrapper").scroll(function() {
    if ($(".scrolling-wrapper").scrollLeft() > 1000) {
      topBtn.fadeIn(500);
    } else {
      topBtn.fadeOut(500);
    }
  });

  topBtn.on("click", function(event) {
    event.preventDefault();
    $(".scrolling-wrapper").animate({ scrollLeft: 0 }, "1000");
  });

  /* HANDLING SCROLLING VERTICALLY AS SCROLLING HORIZONTALLY 
  (arrows left and right work after clicking anywhere in the scrolling-wrapper)*/

  window.addEventListener("wheel", function(e) {
    /* might not be supported in IE!! */
    var moreScrollRight = $(".scrolling-wrapper").scrollLeft() + 350;
    var moreScrollLeft = $(".scrolling-wrapper").scrollLeft() - 350;

    if (e.deltaY < 0) {
      $(".scrolling-wrapper").animate({ scrollLeft: moreScrollLeft }, 0);
    }
    if (e.deltaY > 0) {
      $(".scrolling-wrapper").animate({ scrollLeft: moreScrollRight }, 0);
    }
  });

  /* FAKE LOADING OF THE PAGE */
  // add spinner to beginning of body of each html
  $("body").append(
    '<div class="loader"><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div> <!-- "simple loader", a pen by Kevin on https://codepen.io/I-is-kevin/details/jqejXj -->'
  );
  $("body").css("background", "#212922");

  // side-wrap (the whole website) add class "hide", so that the setTimeout works with the spinner: show spinner for 2.5 sec, then hide but show website
  $(".site-wrap").addClass("hide");

  setTimeout(function() {
    $(".loader").addClass("hide");
    $(".site-wrap").removeClass("hide");
  }, 2500);

  /* AOS animations */
  // append link and script of the AOS animations to the head of each html
  $("head")
    .append(
      '<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />'
    )
    .append('<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>');
  // append initialization to the end of body of each html; timeout because fake loading for 2.5 sec
  $("body").append(
    "<script>setTimeout(function(){ AOS.init(); }, 2500);</script>"
  );

  // add data-aos to all elements I want to be animated
  // homepage
  $(".line2, .line3, .line4, .line5, .line6, .line7").addClass("transparent");
  //making the lines transparent keeps the lines on a specific screen height on the landing page (no jumping when appearing where there was nothing - this div is with display: flex). Removing the transparent ones and inserting the visible ones with animation whenever I want them to appear with setTimeout.

  $(".line1")
    .attr("data-aos", "zoom-in")
    .attr("data-aos-duration", "1500");

  /*  line 2 */
  setTimeout(function() {
    $(".line2").remove();
    $('<p class="line2">New web development projects.</p>').insertAfter(
      ".line1"
    );
    $(".line2")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 4000);

  /* line 3 */
  setTimeout(function() {
    $(".line3").remove();
    $('<p class="line3">New opportunities in the IT field.</p>').insertAfter(
      ".line2"
    );
    $(".line3")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 5500);

  /* line 4 */
  setTimeout(function() {
    $(".line4").remove();
    $('<p class="line4">New ways to go.</p>').insertAfter(".line3");
    $(".line4")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 7000);

  /*  line 5 */
  setTimeout(function() {
    $(".line5").remove();
    $('<p class="line5">New adventures.</p>').insertAfter(".line4");
    $(".line5")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 8500);

  /* line 6 */
  setTimeout(function() {
    $(".line6").remove();
    $('<p class="line6">New travel destinations.</p>').insertAfter(".line5");
    $(".line6")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 10000);

  /* line 7 */
  setTimeout(function() {
    $(".line7").remove();
    $("<h1 class='line7'>I'm in.</h1>").insertAfter(".line6");
    $(".line7")
      .attr("data-aos", "zoom-in")
      .attr("data-aos-duration", "1500");
  }, 11500);

  /*  The single line animations probably could be done in a cleaner way, but couldn't figure it out for now, with so many of the parameters, classes and all changing case to case. */

  // current temperature in Hesinki with Weather API in the footer, rounded up to 0.1
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&appid=5fa0b75646bc8623b0656789ee77d610"
  }).done(function(resp) {
    console.log(resp);
    var curTemp = Math.round(resp.main.temp * 10) / 10;
    $(".temp").text(`Current temp in Helsinki, FI: ${curTemp} deg C`);
  });
});
