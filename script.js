$(document).ready(function(){

	var answers = ["b", "a", "a", "c", "d", "d"];
	var userAnswers = {};
	var counter = 0;
	var classHighlight = "hightlight"
	var currentQ = 0
	
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
			currentQ++

		});
	})

	$(".btn-prev").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){
			$(this).prev().fadeIn(500);
			$(".plane-img").animate({left: "-=13.66%"})
			currentQ--
		});
	})



	$(".answers li").on("click", "a", function(){
		var usersAnswr = $(this).data("key");
			userAnswers[currentQ] = usersAnswr 
			$(".answers li a").removeClass("highlight");
			$(this).addClass("highlight"); 



			console.log(userAnswers);
			
	})



	$(".showResult").click(function(){
		$(this).parents(".question-container").fadeOut(500, function(){
			$(this).next().fadeIn(500);
		});

		for(var i = 0; i < answers.length; i++){
			if(answers[i] == userAnswers[i]){
					counter++;
					
			}
		}
		$(".answrs-correct").html(counter + " out of " + answers.length + " correct!")
		
	})

	

})