$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

$('span').tooltip();

$('img[rel=popover]').popover({
  html: true,
  container: 'body',
  trigger: 'click',
  position: 'relative',
  content: function () {
    return '<img src="images/wechat-qr.png" class="wechat-qr">';
  }
});

$('.wechat').trigger('click');
$('.wechat').trigger('click');

});

$(document).ready(function() {
  setHeights();
});

$(window).resize(function() {
  setHeights();
});

setHeights = function() {
  var windowHeight = $(window).height();
  $("#home").height(windowHeight);
};

$(document).ready(function() {
  $('#sent').hide();
  $('#sent').center();
});

$(window).resize(function() {
  // setPosition();
  $('#sent').center();
});

jQuery.fn.center = function () {
    this.css("position","fixed");
    this.css("top", "10%");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}