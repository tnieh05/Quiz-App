$(document).ready(function(){
	
		$("#header-text").effect("bounce", {times: 4}, 200);
	

	$(".btnStart").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){
			$(this).next().fadeIn(500);
		});
	})

	$(".btn-next").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){
			$(this).next().fadeIn(500);
			$(".plane-img").animate({left: "+=13.66%"})
		});
	})

	$(".btn-prev").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){
			$(this).prev().fadeIn(500);
			$(".plane-img").animate({left: "-=13.66%"})
		})
	})




})