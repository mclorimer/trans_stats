$(document).ready(function(){
	$("#trans-pop-map").css("opacity", 1.0);
	$("#trans-pop-map").hover(function(){
		$("#trans-pop-map").animate({opacity: 0.2}, 250);
		$(".text").removeClass('hide');
	}, function(){
		$("#trans-pop-map").animate({opacity: 1.0}, 250);
		$(".text").addClass('hide');
	});
});