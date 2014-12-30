// on load
$(document).ready(function() {
	$(".sh-navbar").removeClass("selected");
	$(".home").addClass("selected");
	$("section").addClass("display-none");
	$("#home").removeClass("display-none");
	setHeights();
	type();
	setInterval('cursorAnimation()', 800);
});

// on resize
$(window).resize(function() {
  setHeights();
});

// nav clicker hander
$(".home-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".home").addClass("selected");
	$("section").addClass("display-none");
	$("#home").removeClass("display-none");
});
$(".about-me-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".about-me-navbar").addClass("selected");
	$("section").addClass("display-none");
	$("#about-me").removeClass("display-none");
	heightAdjustment("#about-me");
});
$(".projects-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".projects-navbar").addClass("selected");
	$("section").addClass("display-none");
	$("#projects").removeClass("display-none");
	heightAdjustment("#projects");
});
$(".signature-dishes-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".signature-dishes-navbar").addClass("selected");
	$("section").addClass("display-none");
	$("#signature-dishes").removeClass("display-none");
	heightAdjustment("#signature-dishes");
});
$("#find-dishes").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".signature-dishes-navbar").addClass("selected");
	$("section").addClass("display-none");
	$("#signature-dishes").removeClass("display-none");
	heightAdjustment("#signature-dishes");
});
$(".contact-me-navbar").click(function() {
	$(".sh-navbar").removeClass("selected");
	$(".contact-me-navbar").addClass("selected");
	$("section").addClass("display-none");
	$("#contact-me").removeClass("display-none");
	heightAdjustment("#contact-me");
});


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