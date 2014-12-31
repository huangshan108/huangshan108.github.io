// on load
$(document).ready(function() {
	$(".sh-navbar").removeClass("selected");
	$(".home-navbar").addClass("selected");
	$("section").fadeOut(0);
	$("#home").fadeIn(0);
	setHeights();
	type();
	setInterval('cursorAnimation()', 800);
	$('#sent').hide();
	makeCenter("#sent");
});

// on resize
$(window).resize(function() {
  setHeights();
  heightAdjustment("#signature-dishes .section-container");
  thumbnailWidthAdjustment("#projects");
  thumbnailWidthAdjustment("#signature-dishes");
});

var pageTransitionInterval = 200;

// nav clicker hander
$(".home-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".home-navbar").addClass("selected");
	$("section").fadeOut(0);
	$("#home").fadeIn(1000);
});
$(".about-me-navbar").click(function() {
	handlePageTransition("about-me");
	heightAdjustment("#about-me");
});
$(".projects-navbar").click(function() {
	handlePageTransition("projects");
	heightAdjustment("#projects .section-container");
	thumbnailWidthAdjustment("#projects");
});
$(".signature-dishes-navbar").click(function() {
	handlePageTransition("signature-dishes");
	heightAdjustment("#signature-dishes .section-container");
	thumbnailWidthAdjustment("#signature-dishes");
});
$("#find-dishes").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".signature-dishes-navbar").addClass("selected");
	$("section").fadeOut(0);
	$("#signature-dishes").fadeIn(pageTransitionInterval);
	heightAdjustment("#signature-dishes .section-container");
	thumbnailWidthAdjustment("#signature-dishes");
});
$(".contact-me-navbar").click(function() {
	handlePageTransition("contact-me");
	heightAdjustment("#contact-me");
});

$("section .sh-thumbnail").hover(
	function() {
		$(this).find("div:first").css("display", "block");
	}, function() {
		$(this).find("div:first").css("display", "none");
	}
);

handlePageTransition = function(selecter) {
	$(".sh-navbar").removeClass("selected");
	$("." + selecter + "-navbar").addClass("selected");
	$("section").fadeOut(0);
	$("#" + selecter).fadeIn({
		"duration": pageTransitionInterval,
		"easing": "easeInCubic"
	});
}

setHeights = function() {
  var windowHeight = $(window).height();
  if (windowHeight < 600) {
    windowHeight = 600;
  };
  $("#home").height(windowHeight);
  $("#right").height(windowHeight - 10); // padding-top: 10px
  var homepagePadding = $("section .welcome-text-container").height();
  $("section .welcome-text-container-offset").css("padding-top", (windowHeight + homepagePadding) / 2 );
};

heightAdjustment = function(selecter) {
	var sectionHeight = $(selecter).height();
	var windowHeight = $(window).height();
	if (sectionHeight < windowHeight) {
		$(selecter).height(windowHeight);
	};
}

thumbnailWidthAdjustment = function(selecter) {
	var galleryWidth = $(selecter + " .gallery").width();
	var windowWidth = $(window).width();
	if (windowWidth < 900) {
		var width = (galleryWidth - 40) / 2;
		$(selecter + " .sh-thumbnail").width(width).height(width / 1.6);
		$(selecter + " .thumbnail-label").width(width).css({
			"margin-top": width / 3
		});
	} else {
		var width = (galleryWidth - 50) / 3;
		$(selecter + " .sh-thumbnail").width(width).height(width / 1.6);
		$(selecter + " .thumbnail-label").width(width).css({
			"margin-top": width / 3
		});
	}
}
 

var str = "Do Creative Things That Matter",
    i = 0,
    isTag,
    text;

function type() {
    text = str.slice(0, ++i);
    document.getElementById('motto').innerHTML = text;
    if (text === str) return;
    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;
    if (isTag) return type();
    setTimeout(type, 80);
};

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'linear').animate({
        opacity: 1
    }, 'fast', 'linear');
}

function makeCenter(selecter) {
	$target = $(selecter);
    $target.css("position","fixed");
    $target.css("top", "10%");
    $target.css("left", Math.max(0, (($("#left").width() - 252 ) / 2)));
};