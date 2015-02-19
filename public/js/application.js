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

 

 	function showUpquote(response){
		var selector = "#"+response.mantra_id;
		$(selector).text(response.upquotes);

	}

	function getUpquote(event) {
		var url = $(this).attr("href");
		event.preventDefault();
		$.ajax({type: "get", url: url}).done(showUpquote);
	}

	$('.vote-button').click(getUpquote);


 

 	function deleteRegistered(response){
 		var mantraSelector = "#" + response.mantra_id;
 		console.log(mantraSelector);
 		$(mantraSelector).remove();
 	}

 	function deleteMantra(event) {
 		$target = $(event.target)
 		var url = $target.attr('action');
 		event.preventDefault();
 		$.ajax({type:"delete", url: url}).done(deleteRegistered);
 	}
 	$('.update-btns').on('click', 'form.delete-mantra', deleteMantra);


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

 		// $('.vote-button').click(function(event){
 	// 	event.preventDefault();

 	// 	var url = $(this).attr("href");
 	// 	$.ajax({
 	// 		type: "get",
 	// 		url: url
 	// 	}).done(function(response){
 	// 		var selector = "#" + response.mantra_id
 	// 		$(selector).text(response.upquotes);

 	// 	})
 	// })

 	// $('.update-btns').on('submit','form.delete-mantra', function(event){
 	// 	event.preventDefault();
 	// 	$target = $(event.target);
 	// 	$.ajax({
 	// 		type: "delete",
 	// 		url: $target.attr('action'), 
 	// 		success: function(response){
 	// 			console.log(response);
 	// 			"#"+response.article_id
 	// 		}
 	// 	})
 	// })


});
