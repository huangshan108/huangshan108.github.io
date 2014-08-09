var colorArray = [ '#156AEC', '#D9442F', '#FFB800', '#02A05B' ]; //blue red orange green

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('bounce-in');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				var index = Math.floor(Math.random() * 4);
				$(this).find('.cd-timeline-img').css('background', colorArray[index]);
				$(this).find('.cd-timeline-content').css('background', colorArray[Math.floor(Math.random() * 4)]);
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
		$timeline_block.each(function(){
			if( $(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('bounce-in');
			}
		});

	});
});

$(document).ready(function() {
	setHeights();
});

$(window).resize(function() {
	setHeights();
});

setHeights = function() {
	var windowHeight = $(window).height();
	$("header").height(windowHeight);
	$("header").css('lineHeight', windowHeight - 50 + 'px');
};