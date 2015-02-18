$(document).ready(function() {
 	$('form#new-response').on('submit', function(event){
 		event.preventDefault();
 		var $form = $(event.target);
 		var $data = $(this).data();
 		$.ajax({
 			type: "post",
 			url: $data.url,
 			data: $form.serialize(),
 			success: function(response){
 				var selector = $('#responde')
 				$(selector).append(response.content)

 			},
 			error: function(){
 				console.log("Stuff Ain't Right")
 				failResponse.show("Stuff Ain't Right")
 				// add error handling here
 			}
 		})
 	})

 	$('.vote-button').click(function(event){
 		event.preventDefault();

 		var url = $(this).attr("href");
 		$.ajax({
 			type: "get",
 			url: url
 		}).done(function(response){
 			var selector = "#" + response.mantra_id
 			$(selector).text(response.upquotes);

 		})
 	})


 	$("#mantra-btn").on('click', function(){
 		$('.user-mantras').toggle("user-mantras");
 	})
 	$('#respond-btn').on('click', function(){
 		$('.response-box').toggle("response-box");
 	})


 	// var failResponse = (function(){
 	// 	var div = '.error';
 	// 	showError = function(message){
 	// 		$(div).text(message);
 	// 		$(div).toggle(true)
 	// 	};

 	// 	var hideError = function(){
 	// 		$(div).toggle(false)
 	// 	};

 	// 	return {
 	// 		showError: showError
 	// 		hide: hideError
 	// 	};
 	// })();

 	


});
