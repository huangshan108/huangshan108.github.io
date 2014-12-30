// on load
$(document).ready(function() {
  setHeights();
});

// on resize
$(window).resize(function() {
  setHeights();
});

setHeights = function() {
  var windowHeight = $(window).height();
  if (windowHeight < 600) {
    windowHeight = 600;
  };
  $("#home").height(windowHeight);
  $(".right").height(windowHeight - 10); // padding-top: 10px
  var homepagePadding = $("section .welcome-text-container").height();
  $("section .welcome-text-container-offset").css("padding-top", (windowHeight + homepagePadding) / 2 );
};
