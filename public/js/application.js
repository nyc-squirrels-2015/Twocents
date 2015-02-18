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
 				console.log("Stuff Ain't Right");
 				// add error handling here
 			}
 		})
 	})

 	$("#mantra-btn").on('click', function(){
 		$('.user-mantras').toggle("user-mantras");
 	})
 	$('#respond-btn').on('click', function(){
 		$('.response-box').toggle("response-box");
 	})

});
