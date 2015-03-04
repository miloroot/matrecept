$(function() {

	// DOM Ready and working?
	console.log("DOM is Ready!");

	//
	// INITIAL HIDDEN DOM-OBJECTS.
	//

	// first line of code for hidden objects here.



	//
	// BUTTON/SUBMIT HANDLERS.
	//

	$(document).on('click', '.search_r', function() {
		loadPage("views/search.html");
	});

	$(document).on('click', '.all_r', function() {
		loadPage("views/allrec.html");
	});

	$(document).on('click', '.create_r', function() {
		loadPage("views/createrec.html");
	});



	//
	// FUNCTIONS
	//

	function loadPage(url) {
		$.ajax({
			url: url,
			dataType: "html",
			cache: false,
			success: function(html) {
				$('.loadContent').html(html);
				console.log("Loaded via loadPage function.");
			},
			error: function(html) {
				console.log("Error loading the html via loadPage function: ", html);
			}
		});
	}



	//
	// INITIAL AJAX PAGELOAD.
	//

	$.ajax({
		url: "views/search.html",
		dataType: "html",
		cache: false,
		success: function(html) {
			$('.loadContent').html(html);
		},
		error: function(html) {
			console.log("Error loading the html: ", html);
		}
	});

});