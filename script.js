$(document).ready(function(){
	
		$(".clouds").effect("bounce", {times: 4}, 250);
	

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
		});
	})

	$(".showResult").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){

		});
	})


	var correct = { 
		answers: ["b", "d", "d", "c", "d", "b"]
	}

	var userAnswers = [];




})