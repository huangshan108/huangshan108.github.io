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
  trigger: 'click',
  position: 'relative',
  content: function () {
    return '<img src="images/wechat-qr.png" class="wechat-qr">';
  }
});

});
